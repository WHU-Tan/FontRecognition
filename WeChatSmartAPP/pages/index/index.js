//index.js
//获取应用实例
const app = getApp()
// index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    photos: "/resources/icon_picture.png"
  },
    /**
   * 跳转到结果
   */
  gotoAnalysis: function () {
    wx.navigateTo({
      url: '../pic-analysis/pic-analysis',
    })
  },
  /**
   * 选择照片
   */
  chooseImg: function () {
    var that = this
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        that.setData({
          photos: tempFilePaths
        })
        console.log(that.data.photos)
      }
    })
  },

  /**
   * 上传照片
   */
  uploadImg: function () {
    var that = this
    wx.uploadFile({
      url: 'http://localhost:8080/weshop/goods/upload', //这里的url就是Java后台的上传图片接口，实际可以更改为服务器的地址。
      filePath: that.data.photos[0],
      name: 'file',
      formData: {
        'user': 'TheoTan'
      },
      success: function (res) {
        var data = res.data
        console.log(data)
        //do something
      }
    })
  }
})