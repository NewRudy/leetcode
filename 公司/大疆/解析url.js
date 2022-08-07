// 解析 url， ac 了 50%，搞忘 indexOf 可能返回 0 了，判断条件用的 > 0，应该是因为这个原因没有全部通过
// 还有两个 webGL 的简答题，有点小无语，，，
let data = 'https://www.dji.com/cn/mavic-3?from[]=nav&site=brandsite&from[]=homepage&height=200#faq'
// data = read_line()
let protocol = '',
  hostname = '',
  port = '',
  pathname = '/',
  hash = '',
  searchArr
handleData(data)
console.log('protocol=' + protocol)
console.log('hostname=' + hostname)
console.log('port=' + port)
console.log('pathname=' + pathname)
console.log('hash=' + hash)
if (searchArr && searchArr.length > 0) {
  searchArr.map((a) => {
    let temp = a.split('=')
    console.log('search:' + temp[0] + '=' + temp[1])
  })
}

function handleData(data) {
  let temp1 = data.split('//')
  protocol = temp1[0]
  if (!temp1[1]) return
  let temp2 = temp1[1].split('?')
  let index
  if (!temp2[0]) return
  if (temp2[0].indexOf('/') > 0) {
    index = temp2[0].indexOf('/')
  } else {
    index = temp2[0].length
  }
  let tempHost = temp2[0].slice(0, index)
  pathname = temp2[0].slice(index)
  if (tempHost.indexOf(':') > 0) {
    // 有端口的情况
    ;[hostname, port] = tempHost.split(':')
  } else {
    hostname = tempHost
  }
  if (!temp2[1]) return
  if (temp2[1].indexOf('#') > 0) {
    let temp3 = temp2[1].split('#')
    searchArr = temp3[0].split('&')
    hash = '#' + temp3[1]
  } else {
    searchArr = temp2[1].split('&')
  }
  searchArr.sort((a, b) => a.charCodeAt() - b.charCodeAt())
}

