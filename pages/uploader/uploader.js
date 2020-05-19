// pages/uploader/uploader.js
const http = require('../../network/http.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: {
      token: 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJvblYycTVhQUJ0UXhUaUMxRnNaaVpJTlJ4dDdFIiwiaWF0IjoxNTg5ODU0MTY1LCJleHAiOjE1ODk5MTgxNjUsInR5cGUiOiJBUFAifQ.NDHEoRW7PnPtp8ZTE-yODJyEYFQ3LCbx19bLJ4EhoYLwB8mgE8uppPLeQNgJlHZBYpvi5hz0MKrK2bmVxDb-TA',
      url: http.apiEndPoint + '/common/upload'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  handleImage (e) {
    let { detail: { images } } = e
    images = images.map(v => v.url)
    console.log('images: ', images)
    this.setData({
      ['form.images'] : images
    })
  }
})