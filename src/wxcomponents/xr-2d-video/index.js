Component({
    behaviors: [require('../common/share-behavior').default],
    properties: {
        markerImg: {
            type: String,
        },
    },
    data: {
        loaded: false,
        arReady: false,
        imgVideoMap: [
            {
                img: 'https://devusage.oss-cn-shanghai.aliyuncs.com/songjiangjiang/static/cat.jpg',
                video: 'https://devusage.oss-cn-shanghai.aliyuncs.com/songjiangjiang/test/jian.mp4',
                name: 'jian',
            },
            {
                img: 'https://devusage.oss-cn-shanghai.aliyuncs.com/songjiangjiang/test/yuji.jpg',
                video: 'https://devusage.oss-cn-shanghai.aliyuncs.com/songjiangjiang/test/fire.mp4',
                name: 'fire',
            },
        ],
    },
    lifetimes: {
        async attached() {
            console.log('data', this.data)
        },
    },
    methods: {
        handleReady({ detail }) {
            const xrScene = (this.scene = detail.value)
            console.log('xr-scene', xrScene)
        },
        handleAssetsProgress: function ({ detail }) {
            console.log('assets progress', detail.value)
        },
        handleAssetsLoaded: function ({ detail }) {
            this.setData({ loaded: true })
        },
        handleTrackerSwitch: function (event) {
            console.log('handleTrackerSwitch', event)
            const id = event.target.dataset.id
            console.log('id---->', id)
            const detail = event.detail
            const active = detail.value
            let videoName = ''
            if (id === 'tracker1') {
                videoName = 'hikari'
            } else if (id === 'tracker2') {
                videoName = 'fire'
            }
            const video = this.scene.assets.getAsset('video-texture', videoName)
            active ? video.play() : video.stop()
        },
        handleARReady: function ({ detail }) {
            console.log('arReady')
            this.setData({
                arReady: true,
            })
        },
        handleLog: function ({ detail }) {
            console.log('log', detail.value)
        },
    },
})
