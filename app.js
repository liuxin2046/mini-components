//app.js
App({
  onLaunch: function () {
    wx.getSystemInfo({
      success: res => {
        if (res.model.includes('iPhone X')) {
          this.globalData.isIPX = true
        }
        this.globalData.windowWidth = res.windowWidth
      }
    })
  },
  globalData: {
    isIPX: false
  }
})