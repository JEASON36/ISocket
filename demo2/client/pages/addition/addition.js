Page({
  data: {
    phone: '',
    password: ''
  },

  // 获取输入账号
  phoneInput: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },

  // 获取输入密码
  // passwordInput :function (e) {
  //   this.setData({
  //     password:e.detail.value
  //   })
  // },

  // 登录
  login: function () {
    if (this.data.phone.length == 0) {
      wx.showToast({
        title: '添加不成功',
        icon: 'loading',
        duration: 800
      })
    } else {
      // 这里修改成跳转的页面
      wx.showToast({
        title: '添加成功',
        icon: 'success',
        duration: 800
      })
    }
  }
})
