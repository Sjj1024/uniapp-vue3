import { defineStore } from 'pinia'

export default defineStore('user', {
    state: () => ({
        // 用户信息
        userInfo: {
            coins: 1000,
            gems: 50,
            ownedCards: {},
            collectionRate: 0,
        },
        tabIndex: 0,
    }),
    actions: {
        setUserInfo(userInfo: any) {
            this.userInfo = userInfo
        },
    },
    getters: {
        getUserInfo: (state) => state.userInfo,
    },
})
