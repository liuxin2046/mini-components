const http = require('./http.js')
const api = {
  getProductDetail (id) {
    return http.getRequest(`/app/mall/product/${id}`)
  },
  getCategories (params) {
    return http.getRequest(`/app/mall/category`, params)
  },
  getCategoryList (id, params) {
    return http.getRequest(`/app/mall/category/${id}`, params)
  },
  getBannerList () {
    return http.getRequest(`/app/mall/banner`)
  },
  getActivityBanner (params) {
    return http.getRequest(`/app/mall/activity/banner`, params)
  },
  addCart (params) {
    return http.postRequest(`/app/mall/cartItem`, params)
  },
  getCartList () {
    return http.getRequest(`/app/mall/cartItem`)
  },
  editCart (params) {
    return http.putRequest(`/app/mall/cartItem`, params)
  },
  deleteCartItem (id) {
    return http.deleteRequest(`/app/mall/cartItem/${id}`)
  },
  deleteAllCartItem () {
    return http.deleteRequest(`/app/mall/cartItem`)
  },
  checkOrder (params) {
    return http.postRequest(`/app/mall/checkOrder`, params)
  },
  order (params) {
    return http.postRequest(`/app/mall/order`, params)
  },
  getPoints () {
    return http.getRequest(`/app/mall/points`)
  },
  getOrderList (params) {
    return http.getRequest(`/app/mall/order`, params)
  },
  pay (orderNO) {
    return http.getRequest(`/app/payment/wx/pay/${orderNO}`)
  },
  getOrderDetail (id) {
    return http.getRequest(`/app/mall/order/${id}`)
  },
  cancelOrder (id) {
    return http.putRequest(`/app/mall/order/${id}/cancel`)
  },
  confirmDelivery (id) {
    return http.putRequest(`/app/mall/order/${id}/confirm`)
  },
  applyRefund (id, params) {
    return http.putRequest(`/app/mall/orderItem/${id}/applyRefund`, params)
  },
  applyOrderRefund (id, params) {
    return http.putRequest(`/app/mall/order/${id}/applyRefund`, params)
  },
  revokeOrderRefund (id, params) {
    return http.putRequest(`/app/mall/order/${id}/revoke`, params)
  },
  revokeOrderItemRefund (id, params) {
    return http.putRequest(`/app/mall/orderItem/${id}/revoke`, params)
  },
  deleteOrder: function (id) {
    return http.deleteRequest(`/app/mall/order/${id}`)
  },
  comment: function (id, params) {
    return http.putRequest(`/app/mall/order/comment/${id}`, params)
  },
  getComment: function (id, params) {
    return http.getRequest(`/app/mall/product/${id}/comment`, params)
  },
  deleteComment: function (id) {
    return http.deleteRequest(`/app/mall/comment/${id}`)
  },
  productList: function (params) {
    return http.getRequest(`/app/mall/product`, params)
  },
  invite: function (params) {
    return http.putRequest(`/app/promote/center/invite`, params)
  },
  promotionCenter: function () {
    return http.getRequest(`/app/promote/center`)
  },
  promoteRelationship: function (params) {
    return http.getRequest(`/app/promote/center/promoteRelationship`, params)
  },
  notification: function () {
    return http.putRequest(`/app/promote/center/notification`)
  },
  customerOrder: function () {
    return http.getRequest(`/app/promote/center/customerOrder`)
  },
  pointRecord: function () {
    return http.getRequest(`/app/promote/center/pointRecord`)
  },
  trace () {
    return http.postRequest(`/app/mall/trace`)
  },
  readAll () {
    return http.putRequest(`/app/promote/center/notification/readAll`)
  },
  activityProductDetail (id) {
    return http.getRequest(`/app/activity/product/${id}`)
  },
  activitySpikeDetail (id) {
    return http.getRequest(`/app/activity/spike/product/${id}`)
  },
  joinActivity (params) {
    return http.postRequest(`/app/activity`, params)
  },
  spike (params) {
    return http.postRequest(`/app/activity/spike/do`, params)
  },
  readyBeSponsor (groupId) {
    return http.getRequest(`/app/activity/${groupId}/readyBeSponsor`)
  },
  sponsor (params) {
    return http.postRequest(`/app/activity/sponsor`, params)
  }
}
module.exports = api
