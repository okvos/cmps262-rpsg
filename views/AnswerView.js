import React, {useState, useEffect} from "react";
import {Image, Button} from "react-native-web";

const ANSWERS = ["rock", "paper", "scissors"];

export default function AnswerView ({ setView }) {
  const [answer, setAnswer] = useState(null);

  useEffect(_ => {
      setAnswer(ANSWERS[Math.floor(Math.random() * ANSWERS.length)]);
  });

  return (
      <>
          {answer && <Image style={{
              resizeMode: "cover",
              height: 300,
              width: 300,
              marginBottom: 20
          }} source={require(`../assets/${answer}.png`)}/>}

          <Button title="Play Again" onPress={_ => setView("timer")} />
      </>
  )
};
