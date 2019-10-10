//index.js
Page({
  data: {
    imgUrls: [
      'cloud://clouddatabase-fofck.636c-clouddatabase-fofck/image/CAS-bubble.png',
      'cloud://clouddatabase-fofck.636c-clouddatabase-fofck/image/head1.jpg',
      'cloud://clouddatabase-fofck.636c-clouddatabase-fofck/image/head2.jpeg',
      "cloud://clouddatabase-fofck.636c-clouddatabase-fofck-1300120633/image/Unknown.png"
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    circular: true
  },

  toNOC: function(){
    wx.navigateTo({
      url: '/pages/scrollableTabView/scrollableTabView',
    })
  },

  tolearnOutcome: function(){
    wx.navigateTo({
      url: '/pages/LO/LO',
    })
  },

  toExperiences: function(){
    wx.navigateTo({
      url: '/pages/experience/experience',
    })
  },

  toAims: function(){
    wx.navigateTo({
      url: '/pages/aims/aims',
    })
  }
})