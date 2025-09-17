import request from '@/utils/request'

export default {
    loginWxapp(data) {
        console.log('loginWxapp')
        return request({
            url: '/card/mini_api/get_openid',
            method: 'get',
            data,
        })
    }
}
