Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '/image/bannera.jpg',
      '/image/bannerb.jpg'
    ],
    openid: ''
  },
  toelewater: function() {
    wx.navigateTo({
      url: '/pages/elewater/elewater',
    })
  },
  tocourier: function() {
    wx.navigateTo({
      url: '/pages/courier/courier',
    })
  },
  toproperty: function() {
    wx.navigateTo({
      url: '/pages/property/property',
    })
  },
  toemptyroom: function() {
    wx.navigateTo({
      url: '/pages/emptyroom/emptyroom',
    })
  },
  tofindbook: function() {
    wx.navigateTo({
      url: '/pages/findbook/findbook',
    })
  },
  toit: function() {
    wx.navigateTo({
      url: '/pages/itservice/itservice',
    })
  },
  tograde: function() {
    wx.navigateTo({
      url: '/pages/grade/grade',
    })
  },
  toborrowinfo: function() {
    wx.navigateTo({
      url: '/pages/borrowinfo/borrowinfo',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // var that = this;
    // var a = wx.getStorageSync('user')
    // console.log(a)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})