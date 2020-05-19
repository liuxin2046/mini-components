// pages/groupCard/groupCard.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: {
      pending: [
        {
          id: 1,
          member: {
            avatar: 'https://wx.qlogo.cn/mmopen/vi_32/ic11OTVapQ7kUg5OeUgJoHMcPElkwTCnDibQKWEUhEmWdTIzYGhwYjozEXvfGaQxUO1Bb8vTz9MKPzZed3GiaU7cQ/132',
            nickname: 'neil liu',
          },
          missingAmount: 3,
          pendingMember: [],
          partSN: '123',
          expiredAt: 230000
        }
      ],
      sales: 10
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  handleJoinActivity ({detail: { partSN }}) {
    console.log('partSN: ', partSN)
  }
})