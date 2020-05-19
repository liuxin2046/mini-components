// pages/commentCard/commentCard.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userId: 23,
    info: {
      id: '123',
      successTime: '2020-05-14T10:12:03.50145+08:00',
      commentAt: '2020-05-14T10:12:03.50145+08:00',
      star: 3,
      byDefault: false,
      member: {
        id: 23,
        nickname: 'neil liu',
        avatar: 'https://wx.qlogo.cn/mmopen/vi_32/ic11OTVapQ7kUg5OeUgJoHMcPElkwTCnDibQKWEUhEmWdTIzYGhwYjozEXvfGaQxUO1Bb8vTz9MKPzZed3GiaU7cQ/132'
      },
      images: [
        'https://img.discogs.com/EuYsoSJigcpTQQOOfdGsDaTz-wE=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-8237232-1457970492-4415.jpeg.jpg',
        'https://img.musicbible.com/production/release/20151204100933477.jpeg?x-oss-process=style/cover',
        'https://img.musicbible.com/production/release/20151127192929453.png?x-oss-process=style/cover'
      ]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  handleDelete ({ detail: { id } }) {
    console.log('data: ', id)
  }
})