var json = [
  { text: '12而为时已晚321' },
  { text: '反倒' },
  { text: '但还是是否合适' },
  { text: '123符合胜多负少时候21' },
  { text: '123试试21' },
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
console.log(code)
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
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
    }.bind(this), 2000)
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
    }.bind(this), 3000)
    setTimeout(function () {
      this.fadeIn(animation)
      this.setData({
        animationData4: animation.export()
      })
    }.bind(this), 6000)
    setTimeout(function () {
      this.fadeIn(animation)
      this.setData({
        animationData5: animation.export()
      })
    }.bind(this), 500)

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