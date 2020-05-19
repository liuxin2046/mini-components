// pages/bottomBar/bottomBar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '',
    key: 0,
    info: {
      status: '',
      handComment: false,
      createAt: '2020-05-19T10:50:55.189'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      value: 'WAIT_PAY',
      ['info.status']: 'WAIT_PAY'
    })
  },
  onChange(event) {
    let _this = this
    this.setData({
      value: event.detail,
      info: {},
      ['info.status']: event.detail
    })
    console.log('status: ', this.data.info)
  },
  viewLogistics ({detail: { data }}) {
    console.log('data: ', data)
  },
  cancelOrder ({detail: { data }}) {
    console.log('data: ', data)
  },
  deleteOrder ({detail: { data }}) {
    console.log('data: ', data)
  },
  confirmDelivery ({detail: { data }}) {
    console.log('data: ', data)
  },
  cancelApply ({detail: { data }}) {
    console.log('data: ', data)
  },
  comment ({detail: { data }}) {
    console.log('data: ', data)
  },
  viewComment ({detail: { data }}) {
    console.log('data: ', data)
  }
})