const app = getApp();

Component({
  data: {
    value: '',
    list: [
      { icon: 'home', value: '/pages/home/index', label: '首页' },
      { icon: 'shop-1', value: '/pages/order/index', label: '下单' },
      { icon: 'task-1', value: '/pages/join/index', label: '招募' },
      { icon: 'user', value: '/pages/my/index', label: '我的' },
    ],
  },
  lifetimes: {
    ready() {
      const pages = getCurrentPages()
      const pagesRoute = pages[pages.length - 1].route
      this.setData({ value: '/' + pagesRoute })
    },
  },
  methods: {
    onChange(e) {
      wx.switchTab({ url: e.detail.value })
    },
  },
});
