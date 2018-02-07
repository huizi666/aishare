// pages/canves/canves.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const ctx = wx.createCanvasContext('myCanvas')
    ctx.setFillStyle('red')
    ctx.fillRect(10, 10, 150, 575)
    ctx.setFillStyle('blue')
    ctx.setFontSize(20)
    ctx.fillText("XXX2018要读的书单", 80, 30)
    ctx.setFontSize(12)
    ctx.fillText("XXX2018推荐书单", 110, 60)
    ctx.fillText("XXX2018推荐书单", 110, 80)
    ctx.fillText("XXX2018推荐书单", 110, 100)
    ctx.fillText("XXX2018推荐书单", 110, 120)
    ctx.fillText("XXX2018推荐书单", 110, 140)
    ctx.fillText("XXX2018推荐书单", 110, 160)
    ctx.fillText("XXX2018推荐书单", 110, 180)
    ctx.fillText("XXX2018推荐书单", 110, 200)
    ctx.fillText("XXX2018推荐书单", 110, 220)
    ctx.fillText("XXX2018推荐书单", 110, 240)
    ctx.fillText("最佳必读：《白夜行》，《岛之童话》", 80, 280)
    ctx.drawImage("../img/Wechat.jpeg", 110, 300, 100, 100)
    ctx.fillText("长按识别二维码，查看你2018推荐书单", 60, 420)    
    ctx.draw()
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.canvasToTempFilePath({
      x: 0,
      y: 0,
      width: 720,
      height: 900,
      destWidth: 340,
      destHeight: 800,
      canvasId: 'myCanvas',
      success: function (res) {
        console.log(res.tempFilePath)
        console.log(res)
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
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