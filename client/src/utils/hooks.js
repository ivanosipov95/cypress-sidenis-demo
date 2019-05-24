import { useEffect, useRef, useState } from "react";

export function useInterval(callback, ms = 1000) {
    const [isOn, setIsOn] = useState(false);
    const callbackRef = useRef();
    const toggleInterval = () => setIsOn(!isOn);

    useEffect(() => {
        callbackRef.current = callback
    });

    useEffect(() => {
        if (!isOn)
            return;

        const tick = () => callbackRef.current();
        const id = setInterval(tick, ms);

        return () => clearInterval(id);
    }, [isOn, ms]);

    return [isOn, toggleInterval];
}