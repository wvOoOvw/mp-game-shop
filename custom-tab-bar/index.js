const app = getApp()

const component = Object()

component.data = {
  value: '',
  list: [
    { icon: 'home', value: '/pages/home/index', label: '首页' },
    { icon: 'shop-1', value: '/pages/order/index', label: '下单' },
    { icon: 'task-1', value: '/pages/join/index', label: '招募' },
    { icon: 'user', value: '/pages/my/index', label: '我的' },
  ],
}

component.lifetimes = Object()

component.lifetimes.ready = function () {
  const pages = getCurrentPages()
  const pagesRoute = pages[pages.length - 1].route
  this.setData({ value: '/' + pagesRoute })
}

component.methods = Object()

component.methods.onChange = function (e) {
  wx.switchTab({ url: e.detail.value })
}

Component(component)
