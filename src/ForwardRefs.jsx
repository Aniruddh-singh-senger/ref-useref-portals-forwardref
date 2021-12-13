import React, {forwardRef} from 'react';


const ForwardRefs = (props,ref) => {
    return (
        <>
            <input type="text" ref={ref} />
        </>
    )
}

export default forwardRef(ForwardRefs);
