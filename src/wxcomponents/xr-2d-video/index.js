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
        handleTrackerSwitch: function ({ detail }) {
            const active = detail.value
            const video = this.scene.assets.getAsset('video-texture', 'hikari')
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
