Page({

  /**
   * 页面的初始数据
   */
  data: {
    colorshow: true,
    array: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
    index: 0,
    month: '',
    course: [{
        link: [{
            couname: '高等数学',
            techer: '蓝铿',
            room: '9-104'
          },
          {
            couname: '',
            techer: '',
            room: ''
          },
          {
            couname: '高等数学',
            techer: '蓝铿',
            room: '9-104'
          },
          {
            couname: '',
            techer: '',
            room: ''
          },
          {
            couname: '',
            techer: '',
            room: ''
          }
        ]
      },
      {
        link: [{
            couname: '',
            techer: '',
            room: ''
          },
          {
            couname: '高等数学',
            techer: '蓝铿',
            room: '9-104'
          },
          {
            couname: '高等数学',
            techer: '蓝铿',
            room: '9-104'
          },
          {
            couname: '',
            techer: '',
            room: ''
          },
          {
            couname: '',
            techer: '',
            room: ''
          }
        ]
      },
      {
        link: [{
            couname: '高等数学',
            techer: '蓝铿',
            room: '9-104'
          },
          {
            couname: '',
            techer: '',
            room: ''
          },
          {
            couname: '',
            techer: '',
            room: ''
          },
          {
            couname: '高等数学',
            techer: '蓝铿',
            room: '9-104'
          },
          {
            couname: '',
            techer: '',
            room: ''
          }
        ]
      },
      {
        link: [{
            couname: '高等数学',
            techer: '蓝铿',
            room: '9-104'
          },
          {
            couname: '',
            techer: '',
            room: ''
          },
          {
            couname: '高等数学',
            techer: '蓝铿',
            room: '9-104'
          },
          {
            couname: '',
            techer: '',
            room: ''
          },
          {
            couname: '高等数学',
            techer: '蓝铿',
            room: '9-104'
          }
        ]
      },
      {
        link: [{
            couname: '高等数学',
            techer: '蓝铿',
            room: '9-104'
          },
          {
            couname: '',
            techer: '',
            room: ''
          },
          {
            couname: '高等数学',
            techer: '蓝铿',
            room: '9-104'
          },
          {
            couname: '',
            techer: '',
            room: ''
          },
          {
            couname: '',
            techer: '',
            room: ''
          }
        ]
      }
    ]
  },
  bindPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var timestamp = Date.parse(new Date());
    var date = new Date(timestamp);
    var M = date.getMonth() + 1;
    // var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    // console.log(M,D)
    var that = this;
    that.setData({
      month: M
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