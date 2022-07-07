import React, { useState, useEffect } from 'react'

 function UseEffectTwo() {

    const [resizeWindow, setResizeWindow] = useState(window.innerWidth)

    const handleResize = () => {
        setResizeWindow(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('Resize the window', handleResize)
    }, [])

    return (
        <React.Fragment>
            <div>
                <h1>Resizeable page</h1>
                <button onClick={() => setResizeWindow(resizeWindow)}>
                    Resize the page
      </button>
            </div>
        </React.Fragment>
    )
}
export default UseEffectTwo;
