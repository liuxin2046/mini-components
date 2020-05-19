// components/OrderCard/OrderCard.js
const dayjs = require('../../utils/dayjs.min')
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
    orderNo: '',
    status: '',
    orderItems: [],
    statusTxt: '',
    presentPrice: 0,
    paymentTime: '',
    createAt: '',
    time: 0
  },
  attached: function () {
    // presentPrice 实际支付金额
    // paymentTime 支付时间
    // createAt 订单创建时间
    const { orderNo, presentPrice, paymentTime, createAt, status, orderItems } = this.data.info
    this.setData({
      orderNo,
      status,
      orderItems,
      presentPrice,
      paymentTime,
      createAt
    })
    this.formatStatus(status)
  },
  /**
   * 组件的方法列表
   */
  methods: {
    formatStatus (val) {
      switch (val) {
        case 'WAIT_PAY':
          let detal = 0
          let { createAt } = this.data
          createAt = dayjs(createAt).valueOf()
          let expiredTime = createAt + 15 * 60 * 1000
          let now = dayjs().valueOf()
          detal = expiredTime - now
          this.setData({
            statusTxt: '等待支付',
            time: detal
          })
          break
        case 'WAIT_DELIVERY':
          this.setData({
            statusTxt: '等待商家发货'
          })
          break
        case 'WAIT_GROUP':
          this.setData({
            statusTxt: '拼团中'
          })
          break
        case 'GROUP_FAIL':
          this.setData({
            statusTxt: '拼团失败'
          })
          break
        case 'APPLY_REFUND':
          this.setData({
            statusTxt: '退款中'
          })
          break
        case 'WAIT_WRITE_OFF':
          this.setData({
            statusTxt: '待使用'
          })
          break
        case 'WAIT_CONFIRM':
          this.setData({
            statusTxt: '等待收货'
          })
          break 
        case 'SUCCESS':
          this.setData({
            statusTxt: '交易完成'
          })
          break
        case 'REFUND_SUCCESS':
          this.setData({
            statusTxt: '退款成功'
          })
          break
        case 'CLOSE':
          this.setData({
            statusTxt: '交易取消'
          })
          break
      }
    },
    handleFinish () {
      // 处理倒计时结束时事件
    },
    order () {
      this.triggerEvent('order', { id: this.data.id, orderNO: this.data.orderNO })
    },
    cancelOrder () {
      this.triggerEvent('cancelOrder', { id: this.data.info.id})
    },
    applyRefund () {
      this.triggerEvent('applyRefund', { data: this.data.info})
    },
    deleteOrder () {
      this.triggerEvent('deleteOrder', { id: this.data.info.id})
    },
    confirmDelivery () {
      this.triggerEvent('confirmDelivery', { id: this.data.info.id})
    },
    cancelApply () {
      this.triggerEvent('cancelApply', { id: this.data.info.id })
    },
    comment () {
      this.triggerEvent('comment', { data: this.data.info })
    },
    viewComment () {
      this.triggerEvent('viewComment', { data: this.data.info })
    },
    // viewLogistics () {
    //   this.triggerEvent('viewLogistics', { data: this.data.logistics })
    // }
  }
})
