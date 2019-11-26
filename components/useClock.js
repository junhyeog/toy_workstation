import { useEffect, useState } from "react";

const useClock = () => {
    const getTime = () => {
        const localDate = new Date();
        return new Date(+localDate + ((localDate.getTimezoneOffset() + 540) * 60 * 1000))
    }
    const [time, setTime] = useState(getTime());

    useEffect(() => {
        const id = setInterval(() => {
            setTime(() => getTime())
        }, 1000);
        return () => clearInterval(id);
    }, []);

    return time;
}

export default useClock;
