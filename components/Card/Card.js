// components/Card/Card.js
let { compressedImage, addCommasTo } = require('../../utils/util')
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    info: Object,
    refund: {
      type: String,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    price: 0,
    name: '',
    quantity: 0,
    image: '',
    attributes: '',
    statusTip: ''
  },
  attached: function () {
    const { price, name, quantity, attributes, image, status } = this.data.info
    this.setData({
      price: addCommasTo(price),
      name,
      quantity,
      image,
      attributes,
      status
    })
    this.formatStatus(status)
  },
  /**
   * 组件的方法列表
   */
  methods: {
    formatStatus (val) {
      switch (val) {
        case 1:
          this.setData({
            statusTip: '退款中'
          })
          break
        case 2:
        this.setData({
          statusTip: '退款成功'
        })
        break
        case 3:
          this.setData({
            statusTip: '退款失败'
          })
          break
        default:
          this.setData({
            statusTip: '申请退款'
          })
      }
    },
    handleRefund () {
      this.triggerEvent('handleRefund', { data: this.data.info })
    }
  }
})
