import React from "react";
import "../styles/form.scss";
import TextToSpeech from "./TextToSpeech";
import Loading from "./Loading";

function TextArea(props) {
  var placeholder = "Enter text here";

  const handleChange = (event) => {
    props.handleParentTextChange(event);
  };

  return (
    <textarea
      type="text"
      rows="20"
      cols="50"
      placeholder={placeholder}
      value={props.text}
      onChange={handleChange}
    />
  );
}

function ConvertToSpeechButton(props) {
  const processText = () => {
    TextToSpeech(props);
  };

  return (
    <button className="button" onClick={processText}>
      Convert To Speech
    </button>
  );
}

function DownloadButton(props) {
  if (props.downloadUrl !== null) {
    return (
      <a className="button" href={props.downloadUrl} download="speech.mp3">
        Download Speech
      </a>
    );
  }
}

function Voices(props) {
  const voices = ["alloy", "echo", "fable", "onyx", "nova", "shimmer"];

  const [active, setActive] = React.useState("alloy");

  const handleVoiceChange = (voice) => {
    setActive(voice);
    props.handleParentVoiceChange(voice);
  };

  const capitalize = (word) => {
    var firstLetter = word.charAt(0);
    var restOfWord = word.slice(1);

    return firstLetter.toUpperCase() + restOfWord;
  };

  return (
    <div className="language-list">
      {voices.map((voice) => (
        <div
          key={voice}
          className={"language " + (active === voice ? "active" : "")}
          onClick={() => handleVoiceChange(voice)}
        >
          {capitalize(voice)}
        </div>
      ))}
    </div>
  );
}

function ScriptReader() {
  const [text, setText] = React.useState("");
  const [voice, setVoice] = React.useState("alloy");
  const [loading, setLoading] = React.useState(false);
  const [downloadUrl, setDownloadUrl] = React.useState(null);

  const handleDownloadUrl = (url) => {
    setDownloadUrl(url);
  };

  const handleLoading = (value) => {
    setLoading(value);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleVoiceChange = (voice) => {
    setVoice(voice);
  };

  if (loading) {
    return (
      <div className="form">
        <Loading />
      </div>
    );
  } else {
    return (
      <div className="form">
        <div className="left"></div>
        <div className="center">
          <TextArea
            text={text}
            voice={voice}
            handleParentTextChange={handleTextChange}
          />
          <ConvertToSpeechButton
            text={text}
            voice={voice}
            handleLoading={handleLoading}
            handleDownloadUrl={handleDownloadUrl}
          />
          <DownloadButton downloadUrl={downloadUrl} />
        </div>

        <div className="right">
          <Voices handleParentVoiceChange={handleVoiceChange} />
        </div>
      </div>
    );
  }
}

export default ScriptReader;
