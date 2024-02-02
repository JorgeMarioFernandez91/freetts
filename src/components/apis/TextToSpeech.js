/**
 * Makes a call to OpenAI's TTS model and returns a link to download the audio file
 * @param {*} props
 * @returns {void}
 */
export function TextToSpeech(props) {
  props.handleLoading(true);
  var sModelId = "tts-1";
  var sVoiceId = props.voice;
  var API_KEY = process.env.REACT_APP_API_KEY;

  var oHttp = new XMLHttpRequest();
  oHttp.open("POST", "https://api.openai.com/v1/audio/speech");
  oHttp.setRequestHeader("Accept", "audio/mpeg");
  oHttp.setRequestHeader("Content-Type", "application/json");
  oHttp.setRequestHeader("Authorization", "Bearer " + API_KEY);

  oHttp.onload = function () {
    // once we get a response, we can stop the loading animation and play the audio
    if (oHttp.readyState === 4) {
      props.handleLoading(false);
      var oBlob = new Blob([this.response], { type: "audio/mpeg" });
      var audioURL = window.URL.createObjectURL(oBlob);
      var audio = new Audio();
      audio.src = audioURL;
      audio.play();

      // return url so we can download the audio
      props.handleDownloadUrl(audioURL);
    }
  };

  var data = {
    model: sModelId,
    input: props.text,
    voice: sVoiceId,
  };

  oHttp.responseType = "arraybuffer";
  oHttp.send(JSON.stringify(data));
}

export default TextToSpeech;
