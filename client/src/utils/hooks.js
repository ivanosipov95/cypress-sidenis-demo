import { useEffect, useRef, useState } from "react";
import axios from 'axios';

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

export function useHistory() {
    const [list, setList] = useState([]);
    const addNew = item => setList([...list, item]);
    useEffect(() => {
        axios.get('/api/history')
            .then(({ data }) => data)
            .then(list => setList(list))
    }, []);

    return [list, addNew];
}

export function useBalance() {
    const [balance, setBalance] = useState({ lastWeek: null, total: null });

    useEffect(() => {
        axios.get('/api/balance')
            .then(({ data }) => data)
            .then(balance => setBalance(balance));
    }, []);

    return balance;
}