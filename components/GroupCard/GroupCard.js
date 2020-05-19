// components/ActivityCard/ActivityCard.js
const dayjs = require('../../utils/dayjs.min.js')
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    info: Object
  },
  /**
   * 组件的初始数据
   */
  data: {
    sponsor: null,
    sales: 0,
    pending: null,
    pendingMember: null,
    remainMember: 0,
    duration: 0,
    activityInfo: null,
    showJoinGroup: false,
    showGroupMember: false,
    slicePending: null
  },
  attached: function () {
    let { pending, sales } = this.data.info
    pending = pending.map(v => {
      return {
        id: v.id,
        avatar: v.member.avatar,
        nickname: v.member.nickname,
        missingAmount: v.missingAmount,
        pendingMember: v.pendingMember,
        partSN: v.partSN,
        duration: dayjs(v.expiredAt).valueOf() - dayjs().valueOf()
      }
    })
    this.setData({
      sales,
      pending,
      slicePending: pending.length > 2 ? pending.slice(0,2) : pending
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    expend () {
      this.setData({
        showGroupMember: true
      })
    },
    showDialog ({ currentTarget: { dataset: { item } }}) {
      this.setData({
        activityInfo: item,
        showGroupMember: false,
        showJoinGroup: true
      })
    },
    joinActivity ({ currentTarget: { dataset: { partsn } }}) {
      this.onClickHide()
      this.triggerEvent('joinActivity', { partSN: partsn })
    },
    onClickHide () {
      this.setData({
        showGroupMember: false,
        showJoinGroup: false
      })
    }
  }
})
