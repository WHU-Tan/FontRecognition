// pages/pic-analysis/pic-analysis.js
Page({
  onLoad: function() {
    var that = this;
    //可能的字体
    wx.request({
      url: 'https://www.fastmock.site/mock/6a83478cdb35513eb18503adfe80ec4a/data/data', //url为回调函数的API接口
      method: 'GET',
      data: {},
      header: {
        'Content-Type': 'application/json'
      },
      success: function(res) {
        console.log(res.data); //在控制台输出向服务器接收到的数据
        that.setData({ //======不能直接写this.setDate======
          text: res.data.data, //在相应的wxml页面显示接收到的数据
        });
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })
  },
})