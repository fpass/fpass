const rules = [
  {name: '腾讯', domain: 'qq.com', length: 16},
  {name: 'GitHub', domain: 'github.com', length: 72},
]

rules.sort((a, b) => a.domain <= b.domain ? -1 : 1)
rules.push({name: '没有我想要的', domain: 'not what i want'})

export default rules
