import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import PlayView from "./views/PlayView";
import TimerView from "./views/TimerVIew";
import AnswerView from "./views/AnswerView";

export default function App() {

    const [view, setView] = useState("play");

    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>
            {view === "play" && <PlayView setView={setView} /> }
            {view === "timer" && <TimerView setView={setView} /> }
            {view === "answer" && <AnswerView setView={setView} /> }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
