// pages/card/card.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: {
      // card组件内已有统一处理图片压缩方法
      image: 'https://img.musicbible.com/production/release/20151127130800172.jpeg?x-oss-process=style/cover',
      name: '新商品',
      attributes: '大号，褐色',
      price: 10000,
      quantity: 10,
      // 0: 无操作 1: 退款中 2: 退款成功 3: 退款失败
      status: 0
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  handleRefund ({ detail: { data }}) {
    console.log('info: ', data)
  }
})