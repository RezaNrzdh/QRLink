import {Fragment, useEffect, useState} from "react";

const ExamplePage = () => {
    const [date, setDate] = useState({
        current: Date.now(),
        end: Date.now() + 120000
    });

    useEffect(()=>{
        const timer = setInterval(() => {
            setDate({
                ...date,
                current: date.current+1000
            })
        }, 1000);
        return() => clearInterval(timer);
    },[date]);

    return (
        <Fragment>
            { (date.end - date.current) / 1000 }
        </Fragment>
    )
}

export default ExamplePage;