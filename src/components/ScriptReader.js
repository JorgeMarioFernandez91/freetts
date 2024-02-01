import React from "react";
import Loading from "./widgets/Loading";
import TextArea from "./widgets/TextArea";
import Voices from "./Voices";
import { ReadScriptButton, DownloadButton } from "./widgets/Buttons";
import "../styles/form.scss";

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
          <ReadScriptButton
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
