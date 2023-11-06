export const baseURL = '基础url地址'

const request = (options) => {
    // 判断是不是完整的地址，不是的话，拼接上baseUrl
    let urlPath = ''
    if (options.url.indexOf('http') === -1) {
        urlPath = baseURL + options.url
    } else {
        urlPath = options.url
    }
    console.log('请求的url是:', urlPath)
    return new Promise((resolve, reject) => {
        uni.request({
            url: baseURL + options.url, //接口地址：前缀+方法中传入的地址
            method: options.method || 'GET', //请求方法：传入的方法或者默认是“GET”
            data: options.data || {}, //传递参数：传入的参数或者默认传递空集合
            header: {
                token: uni.getStorageSync('token') || '', //自定义请求头信息
            },
            success: (res) => {
                // 成功返回
                console.log('返回数据:', res)
                resolve(res.data)
            },
            // 这里的接口请求，如果出现问题就输出接口请求失败
            fail: (err) => {
                console.log('请求错误:', err)
                reject(err)
            },
        })
    })
}

export default request
