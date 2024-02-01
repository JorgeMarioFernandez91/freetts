/**
 * TextToSpeech
 * @param {string} text
 * @param {string} voice
 * @returns {void}
 * @description Converts text to speech using OpenAI's TTS model
 */
export function TextToSpeech(text, voice) {
  if (text !== "") {
    var sModelId = "tts-1";
    var sVoiceId = voice;
    var API_KEY = process.env.REACT_APP_API_KEY;

    var oHttp = new XMLHttpRequest();
    oHttp.open("POST", "https://api.openai.com/v1/audio/speech");
    oHttp.setRequestHeader("Accept", "audio/mpeg");
    oHttp.setRequestHeader("Content-Type", "application/json");
    oHttp.setRequestHeader("Authorization", "Bearer " + API_KEY);

    oHttp.onload = function () {
      if (oHttp.readyState === 4) {
        var oBlob = new Blob([this.response], { type: "audio/mpeg" });
        var audioURL = window.URL.createObjectURL(oBlob);
        var audio = new Audio();
        audio.src = audioURL;
        audio.play();
      }
    };

    var data = {
      model: sModelId,
      input: text,
      voice: sVoiceId,
    };

    oHttp.responseType = "arraybuffer";
    oHttp.send(JSON.stringify(data));
  }
}

export default TextToSpeech;
