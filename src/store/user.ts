import { defineStore } from 'pinia'

const useUserStore = defineStore('login', {
    state() {
        return {
            teststr: '点击修改变为随机数',
            tabIndex: 0,
        }
    },
    actions: {
        setStr(newStr: string) {
            this.teststr = newStr
        },
        setTabIndex(newIndex: number) {
            this.tabIndex = newIndex
        },
    },
})

export default useUserStore
