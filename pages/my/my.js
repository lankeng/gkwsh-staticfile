// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    xh:'',
    xb:'',
    bj:''
  },
  toborrowban: function() {
    wx.navigateTo({
      url: '/pages/borrowban/borrowban',
    })
  },
  tologinban: function() {
    wx.navigateTo({
      url: '/pages/loginban/loginban',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    
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
    var userinfo = wx.getStorageSync('userinfo');
    if (userinfo != '') {
      this.setData({
        name: userinfo.Data[0][0].XM,
        xh: userinfo.Data[0][0].XH,
        xb: userinfo.Data[0][0].ZYMC,
        bj: userinfo.Data[0][0].XZB
      })
    }
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