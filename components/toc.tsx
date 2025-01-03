'use client'

import React from 'react'
import { init, destroy } from 'tocbot'

export default function Toc() {
    React.useEffect(() => {
        init({
            tocSelector: '.js-toc',
            contentSelector: '.js-toc-content',
            headingSelector: 'h2, h3, h4, h5',
        })
        return () => destroy()
    }, [])

    return (
        <div>
            <span>Table of Contents</span>
            <div className='js-toc'></div>
        </div>
    )
}
