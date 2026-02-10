import Message from 'tdesign-miniprogram/message/index'
import request from '../../utils/request'

const app = getApp()

const page = {}

page.data = {
  pullDownEnable: false,
  cardInfo: [],
  cardCollectInfo: [],
  swiperList: [],
}

page.onLoad = async function (option) {
  if (option.oper && option.oper === 'release') {
    this.showOperMsg('发布成功')
  }
  if (option.oper && option.oper === 'save') {
    this.showOperMsg('保存成功')
  }

  const [cardRes, swiperRes] = await Promise.all([
    request('/home/cards').then((res) => res.data),
    request('/home/swipers').then((res) => res.data),
  ])

  this.setData({
    cardInfo: cardRes.data,
    cardCollectInfo: cardRes.data.slice(0, 3),
    swiperList: swiperRes.data,
  })
}

page.onRefresh = async function () {
  this.setData({
    pullDownEnable: true,
  })

  const [cardRes, swiperRes] = await Promise.all([
    request('/home/cards').then((res) => res.data),
    request('/home/swipers').then((res) => res.data),
  ])

  setTimeout(() => {
    this.setData({
      pullDownEnable: false,
      cardInfo: cardRes.data,
      swiperList: swiperRes.data,
    })
  }, 1500)
}

page.showOperMsg = function (content) {
  Message.success({
    context: this,
    offset: [120, 32],
    duration: 4000,
    content,
  })
}

page.onRelease = function () {
  wx.navigateTo({
    url: '/pages/release/index',
  })
}

Page(page)
