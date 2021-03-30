import React, {useState, useEffect} from "react";
import {Text} from "react-native-web";

export default function TimerView ({ setView }) {
    const [timer, setTimer] = useState(null);

    useEffect(_ =>{
        // init timer
        setTimer(3);
    }, []);

    useEffect(_ => {
        if (timer === 0) {
            setView("answer");
            return;
        }
        setTimeout(_ => setTimer(timer - 1), 1000);
    }, [timer]);

    return (
        <>
            {timer && <Text style={{fontSize: 30}}>{timer}</Text>}
        </>
    )
};
