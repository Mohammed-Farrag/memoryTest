import classNames from "classnames"
import { useState } from "react"
import './style.css';

// eslint-disable-next-line react/prop-types
function SingleNumber({ num, click, status }) {

    const classNms = classNames({
        'number w-20 h-20 m-2 flex justify-center items-center text-3xl cursor-pointer rounded-full bg-darkGray': true,
        open: status == 'open',
        close: status == 'close',
        done: status == 'done',
    })

    return (
        <div
            className={classNms}
            onClick={click}
        >
            {num}
        </div>
    )
}

export default SingleNumber