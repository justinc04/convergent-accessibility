import React from 'react' 
import {useEffect, useState} from "react"; 
import "./VoiceBox.css";

function VoiceBox( {voiceChangeText, findObject} ) {

    const [voiceText, changeText] = useState(""); 

    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognition.interimResults = false;
    recognition.continuous = false;
    const running = false; 

    const startListeningFunction = () => {
        if(!running) { 
            recognition.start(); 
            running = true; 
        } else {
            recognition.stop(); 
            running = false; 
        }
    }

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        changeText(transcript); 
        voiceChangeText(transcript); 
        findObject(); 
    };

    return (
            <div id="voice-box">
                <button id="start-listening-btn" onClick={startListeningFunction}>
                    Start Listening
                </button>
                <textarea
                    id="voice-textarea"
                    value={voiceText}
                    readOnly
                    placeholder="Voice input will appear here..."
                ></textarea>
            </div>

    );
}


export default VoiceBox; 