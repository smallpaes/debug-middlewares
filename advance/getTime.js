module.exports = {
  getCurrentTime: (currentTime) => {
    const date = `${currentTime.getFullYear()}-${currentTime.getMonth() + 1}-${currentTime.getDate()}`
    const time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`
    return `${date} ${time}`
  },
  getTimeDifference: (reqTime, resTime) => {
    return resTime.getMilliseconds() - reqTime.getMilliseconds()
  }
}


