//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    length: 0,
    pwd_eye: false,
    showPwd: false,
    usename: '',
    usepwd: '',
    userpwd: []
  },
  tologinban: function() {
    var usename = this.data.usename
    var usepwd = this.data.usepwd
    var that = this
    if (usename != '' && usepwd != '') {
      wx.request({
        url: 'http://192.168.1.108:8080/api/Data/BindingWeChat',
        method: 'POST',
        header: {
          'content-type': 'application/json' // 默认值
        },
        data: {
          XH: usename,
          SFZH: usepwd
        },
        success: function(e) {
          console.log(e.data.Data[0][0])
          var status = e.data.Status
          if (status == true) {
            var userpwd = that.data.userpwd.concat(usename).concat(usepwd)
            console.log(userpwd)
            wx.setStorageSync('userpwd', userpwd)
            wx.setStorageSync('userinfo', e.data)
            wx.showToast({
              title: '绑定成功',
              icon: 'success',
              duration: 2000
            })
            wx.switchTab({
              url: '/pages/index/index',
            })
          } else {
            wx.showModal({
              title: '提示',
              content: '账号密码错误！',
              showCancel: false,
              confirmColor: '#EA986C',
              success: function(res) {
                if (res.confirm) {
                  console.log('用户点击确定')
                }
              }
            })
            return false
          }
        },
        fail: function() {
          console.log("系统错误")
        }
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '账号密码不得为空！',
        showCancel: false,
        confirmColor: '#EA986C',
        success: function(res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
    }
  },
  onLoad: function() {
    var user = wx.getStorageSync('userpwd');
    var userinfo = wx.getStorageSync('userinfo');
    console.log(user)
    console.log(userinfo)
    if (user != '') {
      this.setData({
        usename: user[0],
        usepwd: user[1]
      })
    }
  },
  onTap: function(e) {
    this.setData({
      tap: e.currentTarget.dataset.name,
      pwd_eye: false
    })
    if (e.currentTarget.dataset.name == 'username') {
      this.getPosition(this.data.length);
    } else {
      this.setData({
        styles: {},
        pwd_eye: true
      })
    }
  },
  onChange: function(e) {
    //console.log(e.currentTarget.dataset.name)
    var name = e.currentTarget.dataset.name;
    if (name == 'username') {
      this.data.length = e.detail.cursor;
      this.getPosition(e.detail.cursor);
      var usename = e.detail.value
      this.setData({
        usename
      })
      //console.log(this.data.usename)
    }
    if (name == 'password') {
      var usepwd = e.detail.value
      this.setData({
        usepwd
      })
      //console.log(this.data.usepwd)
    }
  },
  clickPwdEye: function() {
    this.setData({
      showPwd: !this.data.showPwd,
      tap: 'password',
      styles: {}
    })
  },
  getPosition: function(length) {
    var face = parseFloat(1.5 / 36 * length);
    var nose = parseFloat(1 / 36 * length);
    var left_eye = parseFloat(1.5 / 36 * length);
    var right_eye = parseFloat(2 / 36 * length);
    var left_ear = parseFloat(1 / 36 * length);
    var right_ear = parseFloat(1 / 36 * length);
    var doe = false;
    var styles = {};
    styles.face = `left:${1 + (face > 1.5 ? 1.5 : face)}em`;
    styles.nose = `left:${0.9 + (nose > 1 ? 1 : nose)}em`;
    styles.left_eye = `left:${0.5 + (left_eye > 1.5 ? 1.5 : left_eye)}em`;
    styles.right_eye = `left:${4 + (right_eye > 2 ? 2 : right_eye)}em`;
    styles.left_ear = `left:${1.5 - (left_ear > 1 ? 1 : left_ear)}em`;
    styles.right_ear = `left:${7.5 - (right_ear > 1 ? 1 : right_ear)}em`;
    if (length >= 6) {
      doe = true;
    }
    this.setData({
      styles: styles,
      doe: doe
    })
  }
})