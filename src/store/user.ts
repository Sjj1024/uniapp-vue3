import { defineStore } from 'pinia'

const useUserStore = defineStore('login', {
    state() {
        return {
            teststr: '测试数据',
        }
    },
    actions: {
        setStr(newStr: string) {
            this.teststr = newStr
        },
    },
})

export default useUserStore
