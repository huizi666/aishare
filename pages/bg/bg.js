var json = [
  { keyWord: '收获', key: 'a' },
  { keyWord: '满足', key: 'b' },
  { keyWord: '机遇', key: 'c' },
  { keyWord: '沮丧', key: 'd' },
  { keyWord: '成功', key: 'e' },
  { keyWord: '学习', key: 'f' },
  { keyWord: '失败', key: 'g' },
  { keyWord: '幸福', key: 'h' },
]
const code = require('../../utils/code.js').code
var dur = Math.round(Math.random() * 10) + 1000
var x = 1
for (var j = 0; j < code.length; j++) {  
  code[j].top = Math.round(Math.random() * (1000 - 10))
  code[j].left = Math.round(Math.random() * (500 - 10))
  code[j].animationData = 'animationData' + x
  
  if(x==5){
    x=1
  }else{
    x++
  }
}
//console.log(code)
// pages/bg/bg.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    json:json,
    code:code,
    animationData1: {},
    animationData2: {},
    animationData3: {},
    animationData4: {},
    animationData5: {},
    getModel:false,
    bgColor:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getUserInfo({
      success: function (res) {
        var userInfo = res.userInfo
        var nickName = userInfo.nickName
        var avatarUrl = userInfo.avatarUrl
        var gender = userInfo.gender //性别 0：未知、1：男、2：女
        var province = userInfo.province
        var city = userInfo.city
        var country = userInfo.country
        console.log(res)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  
  onShow: function () {
    // this.showAnimat(1000, 'animationData1')
    // this.showAnimat(2000, 'animationData2')
    // this.showAnimat(4000, 'animationData3')
    // this.showAnimat(1000, 'animationData4')
    // this.showAnimat(3000, 'animationData5')
    var animation = wx.createAnimation({
      transformOrigin: "50% 50%",
      duration: 1000,
      timingFunction: "ease",
      delay: 0
    })
    setTimeout(function () {
      this.fadeIn(animation)
      this.setData({
        animationData1: animation.export()
      })
    }.bind(this), 1000)
    setTimeout(function () {
      this.fadeIn(animation)
      this.setData({
        animationData2: animation.export()
      })
    }.bind(this), 5000)
    setTimeout(function () {
      this.fadeIn(animation)
      this.setData({
        animationData3: animation.export()
      })
    }.bind(this), 1500)
    setTimeout(function () {
      this.fadeIn(animation)
      this.setData({
        animationData4: animation.export()
      })
    }.bind(this), 2600)
    setTimeout(function () {
      this.fadeIn(animation)
      this.setData({
        animationData5: animation.export()
      })
    }.bind(this), 500)

  },
  //选择关键字
  chooseKey:function (event){
    let choosenKey = event.target.dataset.keyword;
    wx.setStorage({
      key: event.target.dataset.keyword,
      data: choosenKey
    })
    wx.getStorageInfo({
      success: function (res) {
        console.log(res.keys)
        console.log(res.currentSize)
        console.log(res.limitSize)
      }
    })
  },
  //生成书单
  creat: function (){
    wx.redirectTo({
      url: '../canves/canves'
    })
  },
  //开关model
  getList: function(event){
    let obj = event.target.dataset.obj;
    if(obj === 'open'){
      this.setData({
        getModel: true,
        bgColor: true,
      })
    }else if(obj === 'close'){
      this.setData({
        getModel: false,
        bgColor: false,
      })
      wx.clearStorage()
    }
    
  },
  //闪烁动画
  fadeIn: function (animation){
    animation
      .opacity(0.9).opacity(0.8).opacity(0.7).opacity(0.6).opacity(0.5).opacity(0.4).opacity(0.3).opacity(0.2).opacity(0.1)
      .step()
    animation
      .opacity(0.1).opacity(0.2).opacity(0.3).opacity(0.4).opacity(0.5).opacity(0.6).opacity(0.7).opacity(0.8).opacity(0.9)
      .step()
    animation
      .opacity(0.9).opacity(0.8).opacity(0.7).opacity(0.6).opacity(0.5).opacity(0.4).opacity(0.3).opacity(0.2).opacity(0.1)
      .step()
    animation
      .opacity(0.1).opacity(0.2).opacity(0.3).opacity(0.4).opacity(0.5).opacity(0.6).opacity(0.7).opacity(0.8).opacity(0.9)
      .step()
  },
  //闪烁特效
  showAnimat:function(dur,num){
    var animation = wx.createAnimation({
      transformOrigin: "50% 50%",
      duration: dur,
      timingFunction: "ease",
      delay: 0
    })
    
    setTimeout(function () {
      animation.opacity(0.9).opacity(0.9).opacity(0.7).opacity(0.6).opacity(0.5).opacity(0.4).opacity(0.3).opacity(0.2).opacity(0.1).opacity(0).step()
      console.log(toString(num))
      this.setData({
        num: animation.export()
      })
    }.bind(this), 1000)
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})