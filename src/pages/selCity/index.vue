<template>
  <view class="main-Location">
    <!-- 字母区域 -->
    <view class="Location-Letter">
      <view hover-class="Click-Latter" @tap="getLetter('ScrollTop')">*</view>
      <view v-for="(l, i) in LatterName" :key="i" hover-class="Click-Latter" @tap="getLetter(l)"
        :style="{ 'color': LetterId === l ? '#4662D9' : '#000' }">{{ l }}</view>
    </view>

    <view class="ynq-AutoLocation u_flex jcsb">
      <view class="ynq-AutoAddress">
        <text class="ynq ynq-dizhi"></text>
        <text>当前定位：</text>
        <text>{{ CityName }}</text>
      </view>

      <view class="ynq-ReLocation u_flex" @click="getLocationAuth">
        <u-icon name="reload" color="#000"></u-icon>
        <text class="ml5">重新定位</text>
      </view>
    </view>
    <scroll-view scroll-y="true" class="ynq-ScrollView" :scroll-into-view="LetterId">
      <!-- 热门城市 -->
      <view class="ynq-HotCity" id="ScrollTop">
        <view class="ynq-HotCityTitle">
          <text class="ynq ynq-fire"></text>
          <text>热门城市</text>
        </view>
        <view class="ynq-HotCityList flex">
          <text class="radius-3" @tap="getStorage(item)" v-for="(item, index) in HotCity" :key="index">{{ item }}</text>
        </view>
      </view>
      <!-- 城市列表 -->
      <view class="ynq-CityList">
        <block v-for="(item, index) in CityList" :key="index">
          <view class="ynq-CityLetter" :id="item.initial">{{ item.initial }}</view>
          <view class="ynq-CityLine">
            <text @tap="getStorage(item_city.name)" v-for="(item_city, name_index) in item.list" :key="name_index">{{
              item_city.name }}</text>
          </view>
        </block>
      </view>
    </scroll-view>
  </view>
</template>
 
<script>
import cityList from './city'

export default {
  data() {
    return {
      CityName: '北京',
      HotCity: ['北京', '深圳', '上海', '成都', '广州', '广东'],
      LatterName: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
        'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
      ],
      CityList: cityList, //引用json数据
      LetterId: '',
    }
  },
  onLoad() {
    this.getCityName()
  },
  methods: {
    //获取定位点
    getLetter(name) {
      this.LetterId = name
      // uni.pageScrollTo({
      // 	selector:'#'+name,
      // 	duration:300
      // })
    },
    //存储城市缓存
    getStorage(Name) {
      uni.setStorage({
        key: 'City_Name',
        data: Name
      })
      this.CityName = Name
      //跳转返回
      uni.navigateBack({
        url: '/pages/home/index'
      })
    },
    //获得城市缓存
    getCityName() {
      let _that = this;
      setTimeout(function () {
        uni.getStorage({
          key: 'City_Name',
          success(res) {
            _that.CityName = res.data
          }
        })
      }, 500)
    },
    //重新定位按钮
    getLocationAuth() {
      let that = this;
      uni.getSystemInfo({
        success(res) {
          console.log('getSystemInfo', res);
          let locationEnabled = res.locationEnabled; //判断手机定位服务是否开启
          let locationAuthorized = res.locationAuthorized; //判断定位服务是否允许微信授权
          if (locationEnabled == false || locationAuthorized == false) {
            //手机定位服务（GPS）未授权
            uni.showModal({
              title: '提示',
              content: '请打开定位服务功能',
              showCancel: false, // 不显示取消按钮
              success: (res) => {
                console.log('showModalres', res);
              }
            })
          } else {
            uni.authorize({
              scope: "scope.userLocation", //授权的类型为地理位置	
              success: (res) => {
                uni.getLocation({
                  type: 'gcj02',
                  geocode: true,
                  isHighAccuracy: true,
                  accuracy: "best", // 精度值为20m
                  success: function (res) {
                    let lat = res.latitude;
                    let lng = res.longitude;
                    console.log('getLocation', res);
                    let key = 'CM2BZ-6F4H3-VUK3V-OUBF6-2ZUQ2-GWB46'; //申请地址：https://lbs.qq.com/dev/console/application/mine
                    uni.request({
                      url: 'https://apis.map.qq.com/ws/geocoder/v1/?location=' + lat + ',' + lng + '&key=' + key,
                      method: "GET",
                      success(ress) {
                        let data = ress.data; //获取到所有定位的数据
                        console.log('获取到的地理位置是：', data);
                        let CityName = ress.data.result.address_component.city
                        that.CityName = CityName
                        let Street = ress.data.result.address_component.street
                        that.CityName = Street
                        uni.setStorage({
                          key: 'City_Name',
                          data: Street
                        })
                      },
                      fail() {
                        uni.showToast({
                          'title': '对不起，数据获取失败！',
                          'icon': 'none'
                        })
                      }
                    })
                  },
                })
              },
            })
          }
        }
      })
    },
  },
}
</script>
 
<style lang="scss" scoped>
.main-Location {
  height: 100vh;
}

.ynq-AutoLocation {
  width: calc(100% - 40rpx);
  background: rgba(250, 250, 250, .5);
  padding: 20rpx 20rpx;

  text.ynq {
    font-size: 32rpx;
    margin-right: 10rpx;
  }

  text {
    font-size: 30rpx;
  }
}

.ynq-HotCity {
  padding: 20rpx;
}

.ynq-HotCityTitle {
  padding: 0rpx 0rpx;

  text.ynq {
    margin-right: 10rpx;
    color: #ff0000;
    font-size: 32rpx;
  }

  text {
    font-size: 30rpx;
  }
}

.ynq-HotCityList {
  padding: 20rpx 0 0 0;
  flex-wrap: wrap !important;

  text {
    width: 190rpx;
    display: inline-block;
    text-align: center;
    background: rgba(200, 200, 200, .2);
    font-size: 26rpx;
    margin: 10rpx;
    padding: 20rpx 10rpx;
  }
}

.Location-Letter {
  position: fixed;
  right: 5rpx;
  top: 180rpx;
  width: 30rpx;
  z-index: 100;

  view {
    display: block;
    width: 30rpx;
    text-align: center;
    height: 35rpx;
    line-height: 35rpx;
    font-size: 22rpx;
    transition: ease .3s;
    -webkit-transition: ease .3s;
  }
}

.ynq-CityList {
  padding: 0px 40rpx 0 20rpx;

  .ynq-CityLetter {
    line-height: 30rpx;
    height: 40rpx;
    font-size: 24rpx;
    border-bottom: 1px solid #f7f7f7;
    padding-left: 10rpx;
    color: #909090;
  }

  .ynq-CityLine {
    margin: 20rpx 0px;

    text {
      display: block;
      line-height: 60rpx;
      padding: 0px 10rpx;
      font-size: 30rpx;
      color: #767676;

      &:nth-child(even) {
        background-color: rgba(200, 200, 200, .12);
      }
    }
  }
}

.ynq-ScrollView {
  height: calc(100vh - 160rpx);
}

.Click-Latter {
  font-size: 30rpx !important;
}

.jcsb {
  justify-content: space-between;
}

.u_flex {
  display: flex;
  align-items: center;
}
</style>