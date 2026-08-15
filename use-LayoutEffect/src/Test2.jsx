import { useEffect, useLayoutEffect } from "react";



function Test2() {

    useEffect(() => {
        console.log("useEffect Message")

    }, [])

    useLayoutEffect(() => {
        console.log("useLayoutEffect Message")

    }, [])


    return (
        <div>Test2</div>
    )



}

export default Test2