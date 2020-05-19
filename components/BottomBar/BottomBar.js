// components/BottomBar/BottomBar.js
const dayjs = require('../../utils/dayjs.min')
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    info: {
      type: Object
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    isIPX: getApp().globalData.isIPX,
    totalPrice: 1000,
    selectAllStatus: false,
    type: 1,
    waitPayTime: 0
  },
  attached: function () {
   this.getInfo()
  },
  observers: {
    'info': function (val) {
      this.getInfo()
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    getInfo () {
      const { status, handComment, createAt } = this.data.info
      this.showType(status, handComment, createAt)
    },
    showType (status, handComment, createAt) {
      let { type } = this.data
      if (status === 'WAIT_PAY') {
        type = 1
        createAt = dayjs(createAt).valueOf()
        console.log('createAt: ', createAt)
        let expiredTime = createAt + 15 * 60 * 1000
        let now = dayjs().valueOf()
        let detal = expiredTime - now
        this.setData({
          waitPayTime: detal
        })
      }
      // if (status === 'WAIT_DELIVERY') {
      //   type = 2
      // }
      if (status === 'WAIT_CONFIRM') {
        type = 2
      }
      if (status === 'APPLY_REFUND') {
        type = 3
      }
      // if (status === 'REFUND_SUCCESS') {
      //   type = 4
      // }
      if (status === 'CLOSE') {
        type = 4
      }
      if (status === 'SUCCESS' && !handComment) {
        type = 5
      }
      if (status === 'SUCCESS' && handComment) {
        type = 6
      }
      this.setData({
        type
      })
    },
    viewLogistics () {
      this.triggerEvent('viewLogistics', { data: this.data.info })
    },
    cancelOrder () {
      this.triggerEvent('cancelOrder', { data: this.data.info })
    },
    deleteOrder () {
      this.triggerEvent('deleteOrder', { data: this.data.info })
    },
    confirmDelivery () {
      this.triggerEvent('confirmDelivery', { data: this.data.info })
    },
    cancelApply () {
      this.triggerEvent('cancelApply', { data: this.data.info })
    },
    comment () {
      this.triggerEvent('comment', { data: this.data.info })
    },
    viewComment () {
      this.triggerEvent('viewComment', { data: this.data.info })
    }
  }
})
