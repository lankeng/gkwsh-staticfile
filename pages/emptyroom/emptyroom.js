// pages/emptyroom/emptyroom.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 0,
    ida: 1,
    idb: 2,
    idc: 3,
    winheight: '',
    building: ['1栋', '2栋', '3栋', '4栋', '5栋', '6栋'],
    cla: ['1-2节', '3-4节', '5-6节', '7-8节', '9-10节'],
    day: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    week: ['第三周', '第四周', '第五周', '第六周', '第七周', '第八周', '第九周']
  },
  click: function(e) {
    var ids = e.currentTarget.dataset.id; //获取自定义的id   
    console.log(ids)
    this.setData({
      id: ids //把获取的自定义id赋给当前组件的id(即获取当前组件)  
    })
  },
  clicka: function(e) {
    var ids = e.currentTarget.dataset.id; //获取自定义的id   
    console.log(ids)
    this.setData({
      ida: ids //把获取的自定义id赋给当前组件的id(即获取当前组件)  
    })
  },
  clickb: function(e) {
    var ids = e.currentTarget.dataset.id; //获取自定义的id   
    console.log(ids)
    this.setData({
      idb: ids //把获取的自定义id赋给当前组件的id(即获取当前组件)  
    })
  },
  clickc: function(e) {
    var ids = e.currentTarget.dataset.id; //获取自定义的id   
    console.log(ids)
    this.setData({
      idc: ids //把获取的自定义id赋给当前组件的id(即获取当前组件)  
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    wx.getSystemInfo({
      success: function(res) {
        //console.log(res.windowHeight) // 获取可使用窗口高度
        let windowHeight = (res.windowHeight * (750 / res.windowWidth)); //将高度乘以换算后的该设备的rpx与px的比例
        //console.log(windowHeight) //最后获得转化后得rpx单位的窗口高度
        that.setData({
          winheight: windowHeight - 480
        })
      }
    })
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