import Taro from '@tarojs/api'
import {unsupported, limited} from '../_util'
import {SelectorQuery} from './selectorQuery'
import {TaroH5IntersectionObserver} from './IntersectionObserver'

const createSelectorQueryInternal = () => new SelectorQuery()

/**
 * 返回一个 SelectorQuery 对象实例
 */
export const createSelectorQuery = limited.never('createSelectorQuery', createSelectorQueryInternal)

/**
 * 创建并返回一个 IntersectionObserver 对象实例。
 */
// export const createIntersectionObserver = unsupported.never('createIntersectionObserver')
export const createIntersectionObserver = (/** 自定义组件实例 */
    component: TaroGeneral.IAnyObject,
    /** 选项 */
    options?: Taro.createIntersectionObserver.Option
) => new TaroH5IntersectionObserver(component, options)
