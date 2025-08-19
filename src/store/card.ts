import { defineStore } from 'pinia'

export default defineStore('cards', {
    state: () => ({
        allCards: [
            {
                id: 'card001',
                name: '火焰战士',
                description:
                    '擅长火焰攻击的战士，拥有强大的近战能力，能够在战场上快速突破敌人防线。',
                rarity: 'rare',
                attribute: 'fire',
                attack: 85,
                defense: 60,
                imageUrl: 'https://hadoappusage.oss-cn-shanghai.aliyuncs.com/static/mini_image/h5bg.png',
            },
            {
                id: 'card002',
                name: '水之法师',
                description:
                    '掌控水元素的法师，擅长群体攻击和控制技能，能够冻结敌人行动。',
                rarity: 'epic',
                attribute: 'water',
                attack: 95,
                defense: 50,
                imageUrl: 'https://hadoappusage.oss-cn-shanghai.aliyuncs.com/static/mini_image/h5bg.png',
            },
            {
                id: 'card003',
                name: '风之射手',
                description:
                    '敏捷的弓箭手，拥有极高的命中率和暴击率，擅长远程狙击敌人。',
                rarity: 'common',
                attribute: 'wind',
                attack: 75,
                defense: 45,
                imageUrl: 'https://hadoappusage.oss-cn-shanghai.aliyuncs.com/static/mini_image/h5bg.png',
            },
            {
                id: 'card004',
                name: '大地守卫',
                description:
                    '坚固的防御型战士，拥有极高的防御力和生命值，能为队友抵挡伤害。',
                rarity: 'rare',
                attribute: 'earth',
                attack: 60,
                defense: 95,
                imageUrl: 'https://hadoappusage.oss-cn-shanghai.aliyuncs.com/static/mini_image/h5bg.png',
            },
            {
                id: 'card005',
                name: '雷电法师',
                description:
                    '掌控雷电力量的强大法师，能够释放连锁闪电攻击多个目标。',
                rarity: 'epic',
                attribute: 'thunder',
                attack: 105,
                defense: 40,
                imageUrl: 'https://hadoappusage.oss-cn-shanghai.aliyuncs.com/static/mini_image/h5bg.png',
            },
            {
                id: 'card006',
                name: '光明骑士',
                description:
                    '神圣力量的守护者，拥有治疗能力和神圣伤害，对黑暗生物有额外伤害。',
                rarity: 'legend',
                attribute: 'light',
                attack: 90,
                defense: 85,
                imageUrl: 'https://hadoappusage.oss-cn-shanghai.aliyuncs.com/static/mini_image/h5bg.png',
            },
        ] as any,
        currentCard: null,
        filter: {
            rarity: 'all',
            attribute: 'all',
        },
    }),

    getters: {
        filteredCards(state) {
            return state.allCards.filter((card) => {
                if (
                    state.filter.rarity !== 'all' &&
                    card.rarity !== state.filter.rarity
                ) {
                    return false
                }
                if (
                    state.filter.attribute !== 'all' &&
                    card.attribute !== state.filter.attribute
                ) {
                    return false
                }
                return true
            })
        },
    },

    actions: {
        initCards() {
            this.allCards = [
                {
                    id: 'card001',
                    name: '火焰战士',
                    description:
                        '擅长火焰攻击的战士，拥有强大的近战能力，能够在战场上快速突破敌人防线。',
                    rarity: 'rare',
                    attribute: 'fire',
                    attack: 85,
                    defense: 60,
                    imageUrl: '/static/images/card001.png',
                },
                {
                    id: 'card002',
                    name: '水之法师',
                    description:
                        '掌控水元素的法师，擅长群体攻击和控制技能，能够冻结敌人行动。',
                    rarity: 'epic',
                    attribute: 'water',
                    attack: 95,
                    defense: 50,
                    imageUrl: '/static/images/card002.png',
                },
                {
                    id: 'card003',
                    name: '风之射手',
                    description:
                        '敏捷的弓箭手，拥有极高的命中率和暴击率，擅长远程狙击敌人。',
                    rarity: 'common',
                    attribute: 'wind',
                    attack: 75,
                    defense: 45,
                    imageUrl: '/static/images/card003.png',
                },
                {
                    id: 'card004',
                    name: '大地守卫',
                    description:
                        '坚固的防御型战士，拥有极高的防御力和生命值，能为队友抵挡伤害。',
                    rarity: 'rare',
                    attribute: 'earth',
                    attack: 60,
                    defense: 95,
                    imageUrl: '/static/images/card004.png',
                },
                {
                    id: 'card005',
                    name: '雷电法师',
                    description:
                        '掌控雷电力量的强大法师，能够释放连锁闪电攻击多个目标。',
                    rarity: 'epic',
                    attribute: 'thunder',
                    attack: 105,
                    defense: 40,
                    imageUrl: '/static/images/card005.png',
                },
                {
                    id: 'card006',
                    name: '光明骑士',
                    description:
                        '神圣力量的守护者，拥有治疗能力和神圣伤害，对黑暗生物有额外伤害。',
                    rarity: 'legend',
                    attribute: 'light',
                    attack: 90,
                    defense: 85,
                    imageUrl: '/static/images/card006.png',
                },
            ]
        },

        setCurrentCard(cardId) {
            this.currentCard =
                this.allCards.find((card) => card.id === cardId) || null
        },

        updateFilter(filter) {
            this.filter = { ...this.filter, ...filter }
        },
    },
})
