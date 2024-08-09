import Taro from '@tarojs/api'
import promisify from 'mpromisify'
import { easeInOutCubic, limited} from '../_util'
import raf from '../_util/raf'
// import * as swan from '../swan'

const pageScrollToInternal: typeof Taro.pageScrollTo = ({scrollTop, selector = '', offsetTop = 0, duration = 300, success, fail, complete}) => {
    const pageYOffset = window.pageYOffset
    const startTime = Date.now()

    if (scrollTop && selector) {
        console.warn('"scrollTop" 或 "selector" 建议只设一个值，全部设置会忽略selector')
    }

    let to: number
    if (selector) {
        const el = document.querySelector(selector) as HTMLElement
        to = (el?.offsetTop || 0) + offsetTop
    } else {
        to = typeof scrollTop === 'number' ? scrollTop : 0
    }

    const frameFunc = () => {
        const timestamp = Date.now()
        const time = timestamp - startTime
        const nextScrollTop = easeInOutCubic(time > duration ? duration : time, pageYOffset, to, duration)
        window.scrollTo(window.pageXOffset, nextScrollTop)
        if (time < duration) {
            raf(frameFunc)
        } else {
            success?.()
            complete?.()
        }
    }
    raf(frameFunc)
}

export const pageScrollTo = promisify(limited.async('pageScrollTo', pageScrollToInternal))
