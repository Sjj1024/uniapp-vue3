import '@vue/runtime-core'
import { $u } from './uview.u'

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $u: $u
    }
}
