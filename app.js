import Mock from './mock/index'

Mock()

App({
  globalData: {
    safeArea: null,
    userInfo: null,
  },

  onLaunch() {
    this._update()
    this._getSystemInfo()
  },

  _update() {
    const updateManager = wx.getUpdateManager()

    updateManager.onUpdateReady(() => {
      wx.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？',
        success: (res) => {
          if (res.confirm) updateManager.applyUpdate()
        },
      })
    })
  },

  _getSystemInfo() {
    const systemInfo = wx.getWindowInfo()
    const safeArea = systemInfo.safeArea
    this.globalData.safeArea = Object()
    this.globalData.safeArea.top = safeArea.top
    this.globalData.safeArea.bottom = safeArea.bottom - safeArea.height
  }
})
