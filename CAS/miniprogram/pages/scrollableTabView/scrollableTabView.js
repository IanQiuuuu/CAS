Page({
  data:{
    tabs: ['Creativity', 'Activity','Service'],
    mainList: [
      "Exploring and extending ideas leading to an original or interpretive product or performance.",
      "Physical exertion contributing to a healthy lifestyle",
      "Collaborative and reciprocal engagement with the community in response to an authentic need"
    ],
    main: "Exploring and extending ideas leading to an original or interpretive product or performance.",
    imgList: ["cloud://clouddatabase-fofck.636c-clouddatabase-fofck/image/creativity.jpg", "cloud://clouddatabase-fofck.636c-clouddatabase-fofck/image/activity.jpg", "cloud://clouddatabase-fofck.636c-clouddatabase-fofck/image/service.png"],
    image: "cloud://clouddatabase-fofck.636c-clouddatabase-fofck/image/creativity.jpg",
    stv: {
      windowWidth: 0,
      lineWidth: 0,
      offset: 0,
      tStart: false
    },
    activeTab: 0,
    defaultIndex: 0
  },
  onLoad:function(options){
   try {
      let {tabs} = this.data; 
      var res = wx.getSystemInfoSync()
      this.windowWidth = res.windowWidth;
      this.data.stv.lineWidth = this.windowWidth / this.data.tabs.length;
      this.data.stv.windowWidth = res.windowWidth;
      this.setData({stv: this.data.stv})
      this.tabsCount = tabs.length;
    } catch (e) {
    }
  },
  handlerStart(e) {
    let {clientX, clientY} = e.touches[0];
    this.startX = clientX;
    this.tapStartX = clientX;
    this.tapStartY = clientY;
    this.data.stv.tStart = true;
    this.tapStartTime = e.timeStamp;
    this.setData({stv: this.data.stv})
  },
  handlerMove(e) {
    let {clientX, clientY} = e.touches[0];
    let {stv} = this.data;
    let offsetX = this.startX - clientX;
    this.startX = clientX;
    stv.offset += offsetX;
    if(stv.offset <= 0) {
      stv.offset = 0;
    } else if(stv.offset >= stv.windowWidth*(this.tabsCount-1)) {
      stv.offset = stv.windowWidth*(this.tabsCount-1);
    }
    this.setData({stv: stv});
  },
  handlerCancel(e) {

  },
  handlerEnd(e) {
    console.log(e.currentTarget.dataset.index);
    let {clientX, clientY} = e.changedTouches[0];
    let endTime = e.timeStamp;
    let {tabs, stv, activeTab} = this.data;
    let {offset, windowWidth} = stv;
    //快速滑动
    if(endTime - this.tapStartTime <= 300) {
      //向左
      if(Math.abs(this.tapStartY - clientY) < 50) {
        if(this.tapStartX - clientX > 5) {
          if(activeTab < this.tabsCount -1) {
            this.setData({activeTab: ++activeTab})
          }
        } else {
          if(activeTab > 0) {
            this.setData({activeTab: --activeTab})
          }
        }
        stv.offset = stv.windowWidth*activeTab;
      } else {
        //快速滑动 但是Y距离大于50 所以用户是左右滚动
        let page = Math.round(offset/windowWidth);
        if (activeTab != page) {
          this.setData({activeTab: page})
        }
        stv.offset = stv.windowWidth*page;
      }
    } else {
      let page = Math.round(offset/windowWidth);
      if (activeTab != page) {
        this.setData({activeTab: page})
      }
      stv.offset = stv.windowWidth*page;
    }
    stv.tStart = false;
    this.setData({stv: this.data.stv})
  },
  _updateSelectedPage(page) {
    let {tabs, stv, activeTab} = this.data;
    activeTab = page;
    this.setData({activeTab: activeTab})
    stv.offset = stv.windowWidth*activeTab;
    this.setData({
      stv: this.data.stv,
      
      })
  },
  handlerTabTap(e) {
    console.log(e.currentTarget.dataset.index)
    this._updateSelectedPage(e.currentTarget.dataset.index);
    this.setData({
      defaultIndex: e.currentTarget.dataset.index,
      main: this.data.mainList[e.currentTarget.dataset.index],
      image: this.data.imgList[e.currentTarget.dataset.index]
    })
  },
  pick: function (e) {
    console.log(e.currentTarget.dataset.index)
    //this.setData({
     // defaultIndex: e.currentTarget.dataset.index,
     // main: this.data.mainList[e.currentTarget.dataset.index],
     // title: this.data.titleList[e.currentTarget.dataset.index]
    //})
  },
})
