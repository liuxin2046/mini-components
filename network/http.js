const { showToast } = require('../utils/util')
// const base = 'http://alvin.ngrok.boostfield.com'
const base = 'http://10.0.0.51:8081'
const apiEndPoint = base + '/api'
const request = function(method, url, data, loadingConfig) {
  if (loadingConfig) {
    wx.showLoading(loadingConfig)
  }
  if (!url.startsWith('http')) {
    url = apiEndPoint + url
  }
  return new Promise((resolve, reject) => {
    let header = {}
    // let token = wx.getStorageSync('key_token_3.0') || null
    let token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJvblYycTVhQUJ0UXhUaUMxRnNaaVpJTlJ4dDdFIiwiaWF0IjoxNTg5NzY3NDQ0LCJleHAiOjE1ODk4MzE0NDQsInR5cGUiOiJBUFAifQ.IoYLKr7EuOU-EwzUUzv4t1xBVcYtX2PE6Oi6ok-cMd3iUIbD9nza-p_3XawNSiV1azwjbuHCUqBzYSd8unybnQ'
    header = { Authorization: 'Bearer ' + token }
    wx.request({
      url: url,
      data: data,
      header: header,
      method: method,
      success: function(res) {
        let statusCode = res.statusCode
        if (statusCode >= 200 && statusCode < 400) {
          resolve(res.data)
          if (loadingConfig) {
            wx.hideLoading()
          }
        } else if (statusCode == 401) {
          wx.hideLoading()
          wx.removeStorageSync('key_token_3.0')
          // TODO
          let pages = getCurrentPages()
          if (pages && pages.length) {
            let currentPage = pages[pages.length - 1]
            console.log(currentPage)
            if (currentPage.options) {
              let queryString = '?' + Object.keys(currentPage.options).map((key) => {
                return encodeURIComponent(key) + '=' + encodeURIComponent(currentPage.options[key])
              }).join('&')
              wx.reLaunch({
                url: `/pages/login/login?redirectPage=${encodeURIComponent(currentPage.route + queryString)}`
              })
            } else {
              wx.reLaunch({
                url: `/pages/login/login?redirectPage=${encodeURIComponent(currentPage.route)}`
              })
            }
          } else {
            wx.reLaunch({
              url: `/pages/login/login`
            })
          }
        } else {
          if (res.data.status !== 1 && res.data.status !== 2) {
            showToast(res.data ? String(res.data.error || '服务器开小差啦， 请稍后重试～') : '服务器开小差啦', () => {
              if (loadingConfig) {
                wx.hideLoading()
              }
            })
          } else {
            if (loadingConfig) {
              wx.hideLoading()
            }
          }
          reject(res.data)
        }
      },
      fail: function(err) {
        showToast('请求失败')
        reject(err)
        if (loadingConfig) {
          wx.hideLoading()
        }
      }
    })
  })
}
const http = {
  apiEndPoint: apiEndPoint,
  getRequest: function(
    url,
    data,
    loadingConfig = { title: '加载中', mask: true }
  ) {
    return request('GET', url, data, loadingConfig)
  },
  postRequest: function(
    url,
    data,
    loadingConfig = { title: '加载中', mask: true }
  ) {
    return request('POST', url, data, loadingConfig)
  },
  putRequest: function(
    url,
    data,
    loadingConfig = { title: '加载中', mask: true }
  ) {
    return request('PUT', url, data, loadingConfig)
  },
  deleteRequest: function(
    url,
    data,
    loadingConfig = { title: '加载中', mask: true }
  ) {
    return request('DELETE', url, data, loadingConfig)
  }
}
module.exports = http
