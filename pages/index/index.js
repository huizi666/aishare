//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    animationData: {}
  },
  onShow: function () {
   
    var animation = wx.createAnimation({
      duration: 7000,
      timingFunction: 'ease-in',
     
    })
   
    this.animation = animation
    
    // 先旋转同时放大，然后平移
    
    this.rotateThenScale()
  },
  rotateThenScale: function () {
    // 先旋转后放大
    this.animation.translateX(-100).step()
    this.animation.rotate(45).step()
    this.setData({
      animationData: this.animation.export()
    })
  },

})