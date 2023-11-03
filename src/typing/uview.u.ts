import { HttpRequestAbstract } from 'uview-plus/libs/luch-request'

interface URange {
    (min: number, max: number, value: number): number
}

interface UToast {
    (title: string, duration?: number): void
}

interface UGetPx {
    (value: number | string, unit: boolean): number | string
}

interface USleep {
    (value: number): Promise<any>
}

interface UOs {
    (): string
}

interface USys {
    (): string
}

interface URandom {
    (min: number, max: number): number
}

interface UGuid {
    (len: number, firstU: boolean, radix: number): string
}

interface UPage {
    (): string
}

interface USetProperty {
    (obj: object, key: string, value: string): void
}

interface UGetProperty {
    (obj: object, key: string): any
}

interface UFormValidate {
    (instance: any, event: any): void
}

interface UPadZero {
    (value: string): string
}

interface UPriceFormat {
    (
        number: number | string,
        decimals: number,
        decimalPoint: string,
        thousandsSeparator: string
    ): string
}

interface UType2icon {
    (type: string, fill: boolean): string
}

interface UQueryParams {
    (data: object, isPrefix: boolean, arrayFormat: string): string
}

interface UTrim {
    (str: string, pos?: string): string
}

interface UTimeFrom {
    (timestamp: string | number, format?: string | boolean): string
}

interface UTimeFormat {
    (dateTime: string | number, fmt?: string): string
}

interface URandomArray {
    (array: any[]): any[]
}

interface UError {
    (err: any): void
}

interface UDeepMerge {
    (target: object, source: object): object | boolean
}

interface UDeepClone {
    (obj: object): any
}

interface UAddUnit {
    (value: string | number, unit: string): string
}

interface UParent {
    (name: string | undefined): any
}

interface UAddstyle {
    (customStyle: object | string, target: string): object | string
}

type UHttp = HttpRequestAbstract

interface UConfig {
    props?: object
    config?: object
    color?: object
    zIndex?: object
}

interface USetConfig {
    (config: UConfig): void
}

interface URouteString {
    (url: string, params?: object): void
}

enum RouteType {
    navigateTo = 'navigateTo',
    redirect = 'redirect',
    switchTab = 'switchTab',
    reLaunch = 'reLaunch',
    navigateBack = 'navigateBack',
}

interface URouteObject {
    (option: {
        type?:
            | RouteType.navigateBack
            | RouteType.reLaunch
            | RouteType.switchTab
            | RouteType.redirect
            | RouteType.navigateTo
        url?: string
        delta?: number
        params?: object
        animationType?: string
        animationDuration?: number
    }): void
}

type URoute = URouteString | URouteObject

interface UColor {
    [index: string]: string
}

interface UTest {
    code: (value: string, len?: number) => boolean
    array: (array: any) => boolean
    jsonString: (json: any) => boolean
    object: (object: any) => boolean
    email: (email: string) => boolean
    mobile: (mobile: string) => boolean
    url: (url: string) => boolean
    isEmpty: (value: any) => boolean
    date: (date: string) => boolean
    number: (number: string) => boolean
    digits: (number: string) => boolean
    idCard: (idCard: string) => boolean
    carNo: (carNo: string) => boolean
    amount: (amount: string) => boolean
    chinese: (chinese: string) => boolean
    letter: (letter: string) => boolean
    enOrNum: (enOrNum: string) => boolean
    contains: (str: string, subStr: string) => boolean
    range: (number: number, range: number[]) => boolean
    rangeLength: (str: string, range: number[]) => boolean
}

export interface $u {
    test: UTest
    color: UColor
    route: URoute
    http: UHttp
    toast: UToast
    range: URange
    getPx: UGetPx
    sleep: USleep
    os: UOs
    sys: USys
    random: URandom
    guid: UGuid
    $parent: UParent
    addStyle: UAddstyle
    addUnit: UAddUnit
    deepClone: UDeepClone
    deepMerge: UDeepMerge
    error: UError
    randomArray: URandomArray
    timeFormat: UTimeFormat
    timeFrom: UTimeFrom
    trim: UTrim
    queryParams: UQueryParams
    type2icon: UType2icon
    priceFormat: UPriceFormat
    getDuration: any
    padZero: UPadZero
    formValidate: UFormValidate
    getProperty: UGetProperty
    setProperty: USetProperty
    page: UPage
    pages: any
    setConfig: USetConfig
    throttle: any
}
