const rules = [
  {name: '腾讯', domain: 'qq.com', length: 16},
  {name: 'github', domain: 'github.com', length: 72},
  {name: 'npm', domain: 'npmjs.com', length: 72},
  {name: '知乎', domain: 'zhihu.com', length: 128},
  {name: '百度', domain: 'baidu.com', length: 14},
  {name: '新浪微博', domain: 'weibo.com', length: 16},
  {name: '12306', domain: '12306.cn', length: 20},
  {name: '豆瓣', domain: 'douban.com', length: 20},
  {name: '拉钩', domain: 'lagou.com', length: 16},
  {name: '阿里云企业邮', domain: 'qiye.aliyun.com', length: 32},
]

rules.sort((a, b) => a.domain <= b.domain ? -1 : 1)
rules.push({name: '没有我想要的', domain: 'not what i want'})

export default rules
