// pages/demo/demo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    templateList: [
      { name: 'card', url: '/pages/card/card' },
      { name: 'orderCard', url: '/pages/orderCard/orderCard' },
      { name: 'activityGroupCard', url: '/pages/groupCard/groupCard' },
      { name: 'commentCard', url: '/pages/commentCard/commentCard' },
      { name: 'uploader', url: '/pages/uploader/uploader' },
      { name: 'bottomBar', url: '/pages/bottomBar/bottomBar'}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  handleEnter ({ target: { dataset: { url }}}) {
    wx.navigateTo({
      url
    })
  }
})