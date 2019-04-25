// pages/property/property.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datashow: [{
        description: '洗衣机的水龙头老化，断裂； 阀老化，关闭和开启有问题',
        state: '等待处理',
      },
      {
        description: '洗衣机的水龙头老化，断裂； 阀老化',
        state: '等待处理',
      },
      {
        description: '热水器没法加热',
        state: '已处理',
      }
    ]
  },
  gocomments: function() {
    wx.navigateTo({
      url: '/pages/comments/comments',
    })
  },
  goprodetail: function() {
    wx.navigateTo({
      url: '/pages/prodetail/prodetail',
    })
  },
  toapply: function() {
    wx.navigateTo({
      url: '/pages/proapply/proapply',
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