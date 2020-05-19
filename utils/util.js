var dayjs = require('./dayjs.min.js')
const formatTime = function(val) {
  let target = dayjs(val)
  let today = dayjs()
  let targetFormat = target.format('YYYY-MM-DD')
  let isSameDay = targetFormat === today.format('YYYY-MM-DD')
  if (isSameDay) {
    return '今天' + target.format('HH:mm')
  } else {
    if (today.add(1, 'day').format('YYYY-MM-DD') === targetFormat) {
      return '明天' + target.format('HH:mm')
    } else if (today.add(2, 'day').format('YYYY-MM-DD') === targetFormat) {
      return '后天' + target.format('HH:mm')
    } else if (today.subtract(1, 'day').format('YYYY-MM-DD') === targetFormat) {
      return '昨天' + target.format('HH:mm')
    } else if (today.subtract(2, 'day').format('YYYY-MM-DD') === targetFormat) {
      return '前天' + target.format('HH:mm')
    } else {
      return target.format('YYYY-MM-DD HH:mm')
    }
  }
}
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
const compressedImage = function (url, type='cover') {
  if (url && type === 'cover') {
    return url + '?x-image-process=image/resize,w_800,limit_1/auto-orient,1'
  } else if (url && type === 'thumbnail') {
    return url + '?x-image-process=image/resize,w_400,limit_1/auto-orient,1'
  } else if (url && type === 'avatar') {
    return url + '?x-image-process=image/resize,w_400/imageslim'
  }
  return url
}
const addCommasTo = function (number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
module.exports = {
  formatTime: formatTime,
  compressedImage: compressedImage,
  addCommasTo: addCommasTo
}
