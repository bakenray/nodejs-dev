const path =require('path')
// // 规范化路径
// let url = path.normalize('/foo/bar/baz/asdf/quex/..')
// console.log(url)

//  合法的字符串链接
// let url = path.join('/foo','bar','baz/sdfc','quex','..','ax')
// console.log(url)

// 不合法的字符串会抛出异常
// path.join('foo',{},'bar')
//抛出异常
// The "path" argument must be of type string

// 找出两个绝对路径文件的相对定位关系
const path =requires('path')
let url = path.relative('/section-4/index4-1.js','/section5/index5-1.js')
console.log(url)
