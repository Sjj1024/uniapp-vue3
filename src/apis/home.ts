import request from '@/utils/request'

export default {
    loginWxapp(data) {
        console.log('loginWxapp')
        return request({
            url: '/card/mini_api/get_openid',
            method: 'get',
            data,
        })
    },
    getUserInfo(data) {
        console.log('getUserInfo')
        return request({
            url: '/card/mini_api/get_user_info',
            method: 'get',
            data,
        })
    },
    getMobile(data) {
        console.log('getMobile')
        return request({
            url: '/card/mini_api/get_mobile',
            method: 'get',
            data,
        })
    },
    getBoxList(data) {
        console.log('getBoxList')
        return request({
            url: '/card/mini_api/get_box_list',
            method: 'get',
            data,
        })
    },
    getBoxDetail(data) {
        console.log('getBoxDetail')
        return request({
            url: '/card/mini_api/get_box_detail',
            method: 'get',
            data,
        })
    },
    getWinRecord(data) {
        console.log('getWinRecord')
        return request({
            url: '/card/mini_api/get_win_record',
            method: 'get',
            data,
        })
    },
}
