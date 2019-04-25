//app.js
App({
  onLaunch: function() {
    var  that  =  this     
    var  user = wx.getStorageSync('user')  ||  {};     
    var  userInfo = wx.getStorageSync('userInfo')  ||  {};     
    if ((!user.openid  ||  (user.expires_in  ||  Date.now())  <  (Date.now()  +  600)) && (!userInfo.nickName)) {      
      wx.login({       
        success:   function(res) {  
          if (res.code)  {                
            // wx.getUserInfo({                    
            //   success:   function (res)  {                        
            //     var  objz = {};                        
            //     objz.avatarUrl = res.userInfo.avatarUrl;                        
            //     objz.nickName = res.userInfo.nickName; //console.log(objz);          
            //     wx.setStorageSync('userInfo',  objz); //存储userInfo                    
            //   }                
            // });                
            var  d = that.globalData; //这里存储了appid、secret、token串           ;                
            wx.request({                    
              url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wx545303d3fd0025ab&secret=33511a78b54741477c0cda496af8b8fb&js_code=' + res.code + '&grant_type=authorization_code',
              data:  {},
              method:   'GET',
                // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT    
              // header: {}, // 设置请求的 header    
              success:   function(res) {                        
                var  abc = {};
                console.log(res)                        
                abc.openid = res.data.openid;                        
                // obj.expires_in = Date.now() + res.data.expires_in; 
                console.log(abc)                                                
                wx.setStorageSync('openid', abc); //存储openid             
              }                
            });            
          } else  {                
            console.log('获取用户登录态失败！'  +  res.errMsg)            
          }        
        }      
      });    
    }   
  },
  getUserInfo: function(cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function() {
          wx.getUserInfo({
            success: function(res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },

  globalData: {
    userInfo: null
  }
})