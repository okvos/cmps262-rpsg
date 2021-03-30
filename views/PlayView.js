import {Button} from "react-native-web";
import React from "react";

export default function PlayView ({ setView }) {
    return <Button
        title="Play Now"
        onPress={e => setView("timer")}
    />
};
