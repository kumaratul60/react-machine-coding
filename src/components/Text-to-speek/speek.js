import "./speek.css";

import React, { useRef, useState } from "react";

function TextSpeaker() {
  const textInputRef = useRef(null);
  const speedInputRef = useRef(null);
  const [currentCharacter, setCurrentCharacter] = useState(null);

  const min = 0.5;
  const max = 3;

  const handlePlayClick = () => {
    playText(textInputRef.current.value);
  };

  const handlePauseClick = () => {
    pauseText();
  };

  const handleStopClick = () => {
    stopText();
  };

  const handleSpeedInput = () => {
    stopText();
    // resume playing text at exact character
    //  index what are currently add.
    playText(utterance.text.substring(currentCharacter));
  };
  //speechSynthesisUtterance -> it specify
  // how fast you speak, what text you speaking, what is voice is spoken
  const utterance = new SpeechSynthesisUtterance();
  utterance.addEventListener("end", () => {
    textInputRef.current.disabled = false;
  });
  utterance.addEventListener("boundary", (e) => {
    // charIndex=> it give the index of exact character at the
    //  very beginning of the word

    //  ex: hello world => index of h is 0 and index of
    //  w is 6
    setCurrentCharacter(e.charIndex);
  });

  function playText(text) {
    // speechSynthesis -> it allow to speak

    if (speechSynthesis.paused && speechSynthesis.speaking) {
      return speechSynthesis.resume();
    }
    if (speechSynthesis.speaking) return;
    utterance.text = text;
    utterance.rate = speedInputRef.current.value || 1;
    // to prevent from change in text while speaking
    textInputRef.current.disabled = true;

    speechSynthesis.speak(utterance);
  }

  function pauseText() {
    if (speechSynthesis.speaking) speechSynthesis.pause();
  }

  function stopText() {
    // first resume then immediately cancel
    speechSynthesis.resume();
    speechSynthesis.cancel();
  }

  const clearText = () => {
    stopText();
    textInputRef.current.value = "";
  };

  return (
    <div className="App">
      <textarea ref={textInputRef} className="text" />
      <label>Speed</label>{" "}
      <input
        type="number"
        value="1"
        ref={speedInputRef}
        onInput={handleSpeedInput}
      />{" "}
      <button onClick={handlePlayClick}>Play</button>{" "}
      <button onClick={handlePauseClick}>Pause</button>{" "}
      <button onClick={handleStopClick}>Stop</button>{" "}
      <button onClick={clearText}>Clear</button>
    </div>
  );
}

export default TextSpeaker;

/*
simple js text to speech setup
Web Speech API API  which allows you to synthesize 
text-to-speech and recognize speech-to-text in your web applications.

const synth = window.speechSynthesis

const speak = text => {
  const utterance = new SpeechSynthesisUtterance(text)
  synth.speak(utterance)
}

speak('Hello, world!')
*/
