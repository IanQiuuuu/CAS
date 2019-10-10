// pages/learnOutcome/learnOutcome.js
Page({
  data: {
    buttons: [{
      openType: 'sg',
      label: 'Strength & Growth',
      icon: "cloud://clouddatabase-fofck.636c-clouddatabase-fofck/image/icon1.png",
    },
    {
      openType: 'cs',
      label: 'Challenges & skills',
      icon: "cloud://clouddatabase-fofck.636c-clouddatabase-fofck/image/icon2.png",
    },
    {
      openType: 'ip',
      label: 'Initiate & Plan',
      icon: "cloud://clouddatabase-fofck.636c-clouddatabase-fofck/image/icon3.png",
    },
    {
      openType: 'cp',
      label: 'Commitment & Perseverance',
      icon: "cloud://clouddatabase-fofck.636c-clouddatabase-fofck/image/icon4.png",
    },
    {
      openType: 'cos',
      label: 'Collaborative Skills',
      icon: "cloud://clouddatabase-fofck.636c-clouddatabase-fofck/image/icon5.png"
    },
    {
      openType: 'ge',
      label: 'Global Engagement',
      icon: "cloud://clouddatabase-fofck.636c-clouddatabase-fofck/image/icon6.png"
    },
    {
      openType: 'eca',
      label: 'Ethics of Choices & Actions',
      icon: "cloud://clouddatabase-fofck.636c-clouddatabase-fofck/image/icon7.png"
    }],

   

    defaultIndex: 0,
    title: "Strength & Growth",
    main: "Students are able to see themselves as individuals with various abilities and skills, of which some are more developed than others.",
    titleList: ["Strength & Growth", "Challenges & skills", "Initiate & Plan", "Commitment & Perseverance", "Collaborative Skills", "Global Engagement", "Ethics of Choices & Actions"],
    mainList: [
      "Students are able to see themselves as individuals with various abilities and skills, of which some are more developed than others.",
      "A new challenge may be an unfamiliar experience or an extension of an existing one. The newly acquired or developed skills may be shown through experiences that the student has not previously undertaken or through increased expertise in an established area.",
      "Students can articulate the stages from conceiving an idea to executing a plan for a CAS experience or series of CAS experiences. This may be accomplished in collaboration with other participants. Students may show their knowledge and awareness by building on a previous experience, or by launching a new idea or process.",
      "Students demonstrate regular involvement and active engagement in CAS.",
      "Students are able to identify, demonstrate and critically discuss the benefits and challenges of collaboration gained through CAS experiences.",
      "Students are able to identify and demonstrate their understanding of global issues, make responsible decisions, and take appropriate action in response to the issue either locally, nationally or internationally.",
      "Students show awareness of the consequences of choices and actions in planning and carrying out CAS experiences."]
  },
  
 
  
  onClick(e) {
    console.log('onClick', e.detail)
    this.setData({
      defaultIndex: e.detail.index,
      main: this.data.mainList[e.detail.index],
      title: this.data.titleList[e.detail.index]
    })
  },

  /*pick: function (e) {
    // console.log(e.currentTarget.dataset.index)
    this.setData({
      defaultIndex: e.currentTarget.dataset.index,
      main: this.data.mainList[e.currentTarget.dataset.index],
      title: this.data.titleList[e.currentTarget.dataset.index]
    })
  },*/
})