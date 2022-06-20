import React, {forwardRef} from 'react'
import type {BaseProps} from '../_util/types'
import useBaseEvents from '../_util/hooks/useBaseEvents'

export interface LabelProps extends BaseProps {
    /**
     * 绑定控件的 id
     */
    for?: string

    /**
     * 标签内容
     */
    children?: React.ReactNode
}

const Label: React.ForwardRefRenderFunction<HTMLLabelElement, LabelProps> = ({
    id,
    style,
    className,
    for: htmlFor,
    children,
    ...eventProps
}, ref) => {
    const handles = useBaseEvents(eventProps)

    return (
        <label
            ref={ref}
            id={id}
            style={style}
            className={className}
            htmlFor={htmlFor}
            {...handles}
        >
            {children}
        </label>
    )
}

export default forwardRef(Label)
