// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //视频详情
    videoInfo: {
      "id": 0,
      "videoSrc": "http://shirtinycn.cn-gd.ufileos.com/%E4%BA%94%E5%8D%81%E9%9F%B3.mp4?UCloudPublicKey=TOKEN_af61cb55-9a4b-4fec-b9b5-48c87417e8f4&Signature=AFJhi4uVt%2BVyGbmohVdkobUBefA%3D&Expires=1886661951",
      "videoTitle": "【150骑英灵】不要眨眼！你根本不知道fgo可以有多帅！史上最宏大的FATE系列！命运冠位指定三周年纪念!",
      "author": "字幕君",
      "playCount": "24.9万",
      "commentCount": "1989",
      "date": "12-25"
    },
    othersVideo: [{
        "id": 0,
        "link": "",
        "imgSrc": "//i1.hdslb.com/bfs/archive/9841123fa247fa1d1aaaa24519a3f5deb361bb81.jpg@160w_100h.jpg",
        "desc": "【150骑英灵】不要眨眼！你根本不知道fgo可以有多帅！史上最宏大的FATE系列！命运冠位指定三周年纪念!",
        "playCount": "52.7万",
        "commentCount": "989",
        "videoSrc": "http://shirtinycn.cn-gd.ufileos.com/miku%E4%BA%94%E5%8D%81%E9%9F%B3.mp4?UCloudPublicKey=ickfWsc9PEDGvs-kVYExz-YA0015LcL6NYRd4Cfi&Signature=L9W%2FyIjp0ef2BQ1Kp0eWam1HMbU%3D&Expires=1571303574"
      },
      {
        "id": 1,
        "link": "",
        "imgSrc": "//i1.hdslb.com/bfs/archive/da76685aaf4c4bec761a7add660b321830fe9dcd.jpg@160w_100h.jpg",
        "desc": "每日亿遍！来自老婆们的甜蜜暴击，请自带血包",
        "playCount": "62.0万",
        "commentCount": "2959",
        "videoSrc": "http://shirtinycn.cn-gd.ufileos.com/miku%E4%BA%94%E5%8D%81%E9%9F%B3.mp4?UCloudPublicKey=ickfWsc9PEDGvs-kVYExz-YA0015LcL6NYRd4Cfi&Signature=L9W%2FyIjp0ef2BQ1Kp0eWam1HMbU%3D&Expires=1571303574"
      },
      {
        "id": 2,
        "link": "",
        "imgSrc": "//i0.hdslb.com/bfs/archive/4b89c44a13c231144485e80ebd303f363fdd2b19.jpg@160w_100h.jpg",
        "desc": "【AMV】辉夜大小姐想让痛痛飞走！| PainPainGoAway 辉夜完结纪念",
        "playCount": "52.7万",
        "commentCount": "989",
        "videoSrc": "http://shirtinycn.cn-gd.ufileos.com/miku%E4%BA%94%E5%8D%81%E9%9F%B3.mp4?UCloudPublicKey=ickfWsc9PEDGvs-kVYExz-YA0015LcL6NYRd4Cfi&Signature=L9W%2FyIjp0ef2BQ1Kp0eWam1HMbU%3D&Expires=1571303574"
      },
      {
        "id": 3,
        "link": "",
        "imgSrc": "//i2.hdslb.com/bfs/archive/01bff916944a8e2c7b2baf14c3c7bd6c276a18e1.jpg@160w_100h.jpg",
        "desc": "前方高能！！大型亲吻现场（合集）",
        "playCount": "52.7万",
        "commentCount": "989",
        "videoSrc": "http://shirtinycn.cn-gd.ufileos.com/miku%E4%BA%94%E5%8D%81%E9%9F%B3.mp4?UCloudPublicKey=ickfWsc9PEDGvs-kVYExz-YA0015LcL6NYRd4Cfi&Signature=L9W%2FyIjp0ef2BQ1Kp0eWam1HMbU%3D&Expires=1571303574"
      },
      {
        "id": 4,
        "link": "",
        "imgSrc": "//i0.hdslb.com/bfs/archive/c5b29131a1bb92eeb369937b58b08021b757e62a.jpg@160w_100h.jpg",
        "desc": "前方高萌，可爱真的可以为所欲为",
        "playCount": "52.7万",
        "commentCount": "989",
        "videoSrc": "http://shirtinycn.cn-gd.ufileos.com/miku%E4%BA%94%E5%8D%81%E9%9F%B3.mp4?UCloudPublicKey=ickfWsc9PEDGvs-kVYExz-YA0015LcL6NYRd4Cfi&Signature=L9W%2FyIjp0ef2BQ1Kp0eWam1HMbU%3D&Expires=1571303574"
      },
      {
        "id": 5,
        "link": "",
        "imgSrc": "//i0.hdslb.com/bfs/archive/c0684b5dc46d18f3eaf5a2c946e34743c62920f5.jpg@160w_100h.jpg",
        "desc": "【勾指起誓】陪伴是最长情的告白，而守护是沉默的陪伴。",
        "playCount": "52.7万",
        "commentCount": "989",
        "videoSrc": "http://shirtinycn.cn-gd.ufileos.com/miku%E4%BA%94%E5%8D%81%E9%9F%B3.mp4?UCloudPublicKey=ickfWsc9PEDGvs-kVYExz-YA0015LcL6NYRd4Cfi&Signature=L9W%2FyIjp0ef2BQ1Kp0eWam1HMbU%3D&Expires=1571303574"
      },
      {
        "id": 6,
        "link": "",
        "imgSrc": "//i1.hdslb.com/bfs/archive/e6ee5a84cfaa40f56317f7c39907d90fb7682bd4.jpg@160w_100h.jpg",
        "desc": "【我英|轰爆】我要怎么说我不爱你（一丢丢背后注意+彩蛋高甜）",
        "playCount": "52.7万",
        "commentCount": "989",
        "videoSrc": "http://shirtinycn.cn-gd.ufileos.com/miku%E4%BA%94%E5%8D%81%E9%9F%B3.mp4?UCloudPublicKey=ickfWsc9PEDGvs-kVYExz-YA0015LcL6NYRd4Cfi&Signature=L9W%2FyIjp0ef2BQ1Kp0eWam1HMbU%3D&Expires=1571303574"
      },
      {
        "id": 7,
        "link": "",
        "imgSrc": "//i0.hdslb.com/bfs/archive/f0545f72fb2ece15a88a3c4d512711989b053f2c.jpg@160w_100h.jpg",
        "desc": "【萌到升天】你看你看又开始了❤和澪一起随心所欲Mercy吧~",
        "playCount": "52.7万",
        "commentCount": "989",
        "videoSrc": "http://shirtinycn.cn-gd.ufileos.com/miku%E4%BA%94%E5%8D%81%E9%9F%B3.mp4?UCloudPublicKey=ickfWsc9PEDGvs-kVYExz-YA0015LcL6NYRd4Cfi&Signature=L9W%2FyIjp0ef2BQ1Kp0eWam1HMbU%3D&Expires=1571303574"
      }
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // console.log(options)
    //获取对应视频id
    let videoId = options.id
    this.getCurrentVedio()
  },
  /*
  根据视频id获取视频详情
   */
  getCurrentVedio() {
    let that = this;
    wx.request({
      url: 'https://4cd5dddd-21c4-49d7-939b-5cf759a7914f.mock.pstmn.io/videoDetail',
      success(res) {
        // console.log(res)
        if (res.data.code == 0) {
          that.setData({
            videoInfo: res.data.data.videoInfo
          })
        }
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