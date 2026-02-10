const app = getApp()

const component = Object()

component.properties = {
  visible: Boolean
}

component.data = {
  sidebar: [
    {
      title: '首页',
      url: 'pages/home/index',
      mode: 0,
    },
    {
      title: '搜索页',
      url: 'pages/search/index',
      mode: false,
    },
    {
      title: '发布页',
      url: 'pages/release/index',
      mode: false,
    },
    {
      title: '消息列表页',
      url: 'pages/message/index',
      mode: 0,
    },
    {
      title: '对话页',
      url: 'pages/chat/index',
      mode: false,
    },
    {
      title: '个人中心页',
      url: 'pages/my/index',
      mode: 0,
    },
    {
      title: '个人信息表单页',
      url: 'pages/my/info-edit/index',
      mode: false,
    },
    {
      title: '设置页',
      url: 'pages/setting/index',
      mode: false,
    },
    {
      title: '登录注册页',
      url: 'pages/login/login',
      mode: false,
    },
  ]
}

component.methods = Object()

component.methods.onClick = function (e) {
  const { isSidebar, url } = e.detail.item;
  if (isSidebar) {
    wx.switchTab({
      url: `/${url}`,
    }).then(() => {
      this.triggerEvent('onClose');
    });
  } else {
    wx.navigateTo({
      url: `/${url}`,
    }).then(() => {
      that.setData({
        visible: false,
      });
    });
  }
}

component.methods.onClose = function (e) {
  this.triggerEvent('onClose')
}

Component(component)