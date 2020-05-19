// components/CommentItem/CommentItem.js
const dayjs = require('../../utils/dayjs.min.js')
const { formatTime } = require('../../utils/util')
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    info: Object,
    // 区分自己的评论
    userId: Number
  },
  attached: function () {
    let { id, successTime, commentAt, images, member, star } = this.data.info
    this.setData({
      id,
      commentAt: formatTime(commentAt),
      successTime: successTime ?  dayjs(successTime).format('YYYY-MM-DD HH:mm:ss') : 0,
      images,
      member,
      star
    })
  },
  /**
   * 组件的初始数据
   */
  data: {
    id: '',
    commentAt: '',
    successTime: '',
    showMenu: false,
    images: []
  },
  /**
   * 组件的方法列表
   */
  methods: {
    previewImage (e) {
      var current = e.target.dataset.src;
      wx.previewImage({
          current: current, // 当前显示图片的http链接
          urls: this.data.images // 需要预览的图片http链接列表
      })
    },
    toggleDownMenu () {
      this.setData({
        showMenu: !this.data.showMenu
      })
    },
    deleteComment ({ currentTarget: { dataset: { id } }}) {
      this.triggerEvent('handleDelete', { id })
    }
  }
})
