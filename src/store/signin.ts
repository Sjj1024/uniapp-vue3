import { defineStore } from 'pinia'

export interface SigninDay {
  day: number
  points: number
  completed: boolean
  isCurrent: boolean
}

export interface SigninData {
  isSignedToday: boolean
  totalSigninDays: number
  userPoints: number
  signinDays: SigninDay[]
  lastSigninDate: string
}

export const useSigninStore = defineStore('signin', {
  state: (): SigninData => ({
    isSignedToday: false,
    totalSigninDays: 0,
    userPoints: 0.00,
    signinDays: [
      { day: 1, points: 1, completed: false, isCurrent: false },
      { day: 2, points: 2, completed: false, isCurrent: false },
      { day: 3, points: 3, completed: false, isCurrent: false },
      { day: 4, points: 4, completed: false, isCurrent: false },
      { day: 5, points: 5, completed: false, isCurrent: false },
      { day: 6, points: 6, completed: false, isCurrent: false },
      { day: 7, points: 7, completed: false, isCurrent: false }
    ],
    lastSigninDate: ''
  }),

  getters: {
    // 获取当前签到天数
    currentSigninDay: (state): number => {
      return state.totalSigninDays % 7 || 7
    },

    // 检查是否可以签到
    canSignin: (state): boolean => {
      const today = new Date().toDateString()
      return !state.isSignedToday || state.lastSigninDate !== today
    },

    // 获取连续签到天数
    consecutiveDays: (state): number => {
      return state.totalSigninDays % 7 || 7
    }
  },

  actions: {
    // 执行签到
    async signin(): Promise<{ success: boolean; points: number; message: string }> {
      try {
        const today = new Date().toDateString()
        
        // 检查是否已经签到
        if (this.isSignedToday && this.lastSigninDate === today) {
          return {
            success: false,
            points: 0,
            message: '今日已签到'
          }
        }

        // 更新签到状态
        this.isSignedToday = true
        this.totalSigninDays += 1
        this.lastSigninDate = today

        // 计算当前天数
        const currentDay = this.currentSigninDay
        const points = currentDay

        // 更新积分
        this.userPoints += points

        // 更新签到天数状态
        this.updateSigninDaysStatus()

        // 保存到本地存储
        this.saveToStorage()

        return {
          success: true,
          points,
          message: `签到成功！获得${points}积分`
        }
      } catch (error) {
        console.error('签到失败:', error)
        return {
          success: false,
          points: 0,
          message: '签到失败，请重试'
        }
      }
    },

    // 更新签到天数状态
    updateSigninDaysStatus() {
      const currentDay = this.currentSigninDay
      
      this.signinDays.forEach((day) => {
        // 重置当前状态
        day.isCurrent = false
        
        // 设置已完成的天数
        if (day.day <= currentDay) {
          day.completed = true
        }
        
        // 设置当前天数
        if (day.day === currentDay) {
          day.isCurrent = true
        }
      })
    },

    // 从本地存储加载数据
    loadFromStorage() {
      try {
        const data = uni.getStorageSync('signinData')
        if (data) {
          const today = new Date().toDateString()
          
          // 检查是否是同一天
          if (data.lastSigninDate === today) {
            this.isSignedToday = data.isSignedToday
            this.totalSigninDays = data.totalSigninDays
            this.userPoints = data.userPoints
            this.signinDays = data.signinDays || this.signinDays
            this.lastSigninDate = data.lastSigninDate
          } else {
            // 新的一天，重置今日签到状态
            this.isSignedToday = false
            this.updateSigninDaysStatus()
          }
        }
      } catch (error) {
        console.error('加载签到数据失败:', error)
      }
    },

    // 保存到本地存储
    saveToStorage() {
      try {
        const data: SigninData = {
          isSignedToday: this.isSignedToday,
          totalSigninDays: this.totalSigninDays,
          userPoints: this.userPoints,
          signinDays: this.signinDays,
          lastSigninDate: this.lastSigninDate
        }
        uni.setStorageSync('signinData', data)
      } catch (error) {
        console.error('保存签到数据失败:', error)
      }
    },

    // 重置签到数据
    resetSigninData() {
      this.isSignedToday = false
      this.totalSigninDays = 0
      this.userPoints = 0.00
      this.signinDays = [
        { day: 1, points: 1, completed: false, isCurrent: false },
        { day: 2, points: 2, completed: false, isCurrent: false },
        { day: 3, points: 3, completed: false, isCurrent: false },
        { day: 4, points: 4, completed: false, isCurrent: false },
        { day: 5, points: 5, completed: false, isCurrent: false },
        { day: 6, points: 6, completed: false, isCurrent: false },
        { day: 7, points: 7, completed: false, isCurrent: false }
      ]
      this.lastSigninDate = ''
      this.saveToStorage()
    }
  }
})
