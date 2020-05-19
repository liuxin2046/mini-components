// pages/orderCard/orderCard.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: {
      id: 1,
      orderNo: '123456789',
      status: 'WAIT_PAY',
      presentPrice: 100,
      paymentTime: '123456789',
      createAt: '2020-05-19T10:50:55.189',
      orderItems: [
        {
          image: 'https://img.musicbible.com/production/release/20151127130800172.jpeg?x-oss-process=style/cover',
          name: '新商品',
          attributes: '大号，褐色',
          price: 10000,
          quantity: 10,
          // 0: 无操作 1: 退款中 2: 退款成功 3: 退款失败
          status: 0
        },
        {
          image: 'https://img.musicbible.com/production/release/20151127130800172.jpeg?x-oss-process=style/cover',
          name: '新商品',
          attributes: '大号，褐色',
          price: 10000,
          quantity: 10,
          // 0: 无操作 1: 退款中 2: 退款成功 3: 退款失败
          status: 1
        }
      ]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  }
})