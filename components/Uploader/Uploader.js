// components/Uploader/Uploader.js
const http = require('../../network/http.js')
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
    token: '',
    url: '',
    fileList: []
  },
  attached: function () {
    const { token, url } = this.data.info
    this.setData({
      token,
      url
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    beforeRead(event) {
    },
    afterRead(event) {
      wx.showLoading({ title: '加载中', mask: true })
      const _this = this
      const { token, url } = this.data.info
      const { file } = event.detail
      // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
      wx.uploadFile({
        url: url,
        filePath: file.path,
        header: { Authorization: 'Bearer ' + token },
        name: 'file',
        success(res) {
          // 上传完成需要更新 fileList
          const { fileList = [] } = _this.data
          let data = JSON.parse(res.data)
          console.log('data: ', data)
          fileList.push({ url: data.data })
          _this.setData({ fileList })
          console.log('fileList: ', _this.data.fileList)
          _this.handleImage()
          wx.hideLoading()
        },
        fail (res) {
          console.log('error: ', res)
          wx.hideLoading()
        }
      })
    },
    handleDelete (e) {
      const { detail: { index } } = e
      const { fileList } = this.data
      fileList.splice(index, 1)
      this.setData({ fileList })
      console.log('index: ', index)
      this.handleImage()
    },
    handleImage () {
      this.triggerEvent('handleImage', { images: this.data.fileList })
    }
  }
})
