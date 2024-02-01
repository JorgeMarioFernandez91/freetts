import React from "react";
import ChatGPT from "../apis/ChatGPT";
import TextToSpeech from "../apis/TextToSpeech";

/**
 * Calls the ChatGPT function to generate a script
 * @param {*} props 
 * @returns 
 */
export function GenerateScriptButton(props) {
  const processText = () => {
    ChatGPT(props);
  };

  if (props.text !== "") {
    return (
      <button className="button" onClick={processText}>
        Generate Script
      </button>
    );
  }
}

/**
 * Calls the TextToSpeech function to read the script
 * @param {*} props
 * @returns 
 */
export function ReadScriptButton(props) {
  const processText = () => {
    TextToSpeech(props);
  };

  if (props.text !== "") {
    return (
      <button className="button" onClick={processText}>
        Read Text
      </button>
    );
  }
}

/**
 * Creates a download link for the speech
 * @param {*} props 
 * @returns 
 */
export function DownloadButton(props) {
  if (props.downloadUrl !== null) {
    return (
      <a className="button" href={props.downloadUrl} download="speech.mp3">
        Download Speech
      </a>
    );
  }
}
