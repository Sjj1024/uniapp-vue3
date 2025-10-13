// 获取自定义导航栏顶部高度
export const contentTop = uni.getStorageSync('menuInfo').contentTop
export const windowWidth = uni.getStorageSync('menuInfo').windowWidth
export const windowHeight = uni.getStorageSync('menuInfo').windowHeight
export const screenWidth = uni.getStorageSync('menuInfo').screenWidth
export const screenHeight = uni.getStorageSync('menuInfo').screenHeight
export const devicePixelRatio = uni.getStorageSync('menuInfo').devicePixelRatio
export const renderWidth = windowWidth * devicePixelRatio
export const renderHeight = windowHeight * devicePixelRatio
