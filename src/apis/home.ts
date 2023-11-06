import request from '@/utils/request'

export default {
    getUUID(data) {
        console.log('getUUID')
        return request({
            url: '/user/wxapp',
            method: 'get',
            data,
        })
    },
    changeStatus(data) {
        return request({
            url: '/message/isReads',
            method: 'post',
            data,
        })
    },
    getMsgType(params) {
        return request({
            url: '/message/messageType',
            method: 'get',
            params,
        })
    },
    deleteMsg(data) {
        return request({
            url: '/message/delete',
            method: 'post',
            data,
        })
    },
}
