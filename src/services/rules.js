const rules = process.env.RULES
rules.sort((a, b) => a.domain <= b.domain ? -1 : 1)
rules.push({name: '其它', domain: 'other'})

export default rules
