const rules = [
  {name: '优酷', domain: 'youku.com', length: 16},
  {name: 'Steam', domain: 'store.steampowered.com', length: 64},
  {name: '腾讯QQ', domain: 'qq.com', length: 16},
  {name: '微信', domain: 'wx.qq.com', length: 16},
  {name: 'GitHub', domain: 'github.com', length: 72},
  {name: 'NPM', domain: 'npmjs.com', length: 72},
  {name: '知乎', domain: 'zhihu.com', length: 128},
  {name: '百度', domain: 'baidu.com', length: 14},
  {name: '新浪微博', domain: 'weibo.com', length: 16},
  {name: '12306', domain: '12306.cn', length: 20},
  {name: '豆瓣', domain: 'douban.com', length: 20},
  {name: '拉钩', domain: 'lagou.com', length: 16},
  {name: '阿里云企业邮', domain: 'qiye.aliyun.com', length: 32},
  {name: '淘宝', domain: 'taobao.com', length: 20},
  {name: '京东', domain: 'jd.com', length: 20},
  {name: 'Coding', domain: 'coding.net', length: 64},
  {name: '开源中国', domain: 'oschina.net', length: 20},
  {name: '码云', domain: 'gitee.com', length: 16},
  {name: '斗鱼', domain: 'douyu.com', length: 25},
  {name: '哔哩哔哩', domain: 'bilibili.com', length: 16},
  {name: '甲骨文', domain: 'oracle.com', length: 80},
  {name: '饿了么', domain: 'ele.me', length: 20},
  {name: 'Cloudflare', domain: 'cloudflare.com', length: 128},
  {name: 'Freenom', domain: 'freenom.com', length: 128},
  {name: 'Vultr', domain: 'vultr.com', length: 128},
]

rules.sort((a, b) => a.domain <= b.domain ? -1 : 1)
rules.push({name: '其它', domain: 'other'})

export default rules
