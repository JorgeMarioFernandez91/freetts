import React from 'react';

function TextToSpeech() {
    var sModelId = "tts-1";
    var sVoiceId = "alloy";
    var API_KEY = "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";



    var oHttp = new XMLHttpRequest();
    oHttp.open("POST", "https://api.openai.com/v1/audio/speech");
    oHttp.setRequestHeader("Accept", "audio/mpeg");
    oHttp.setRequestHeader("Content-Type", "application/json");
    oHttp.setRequestHeader("Authorization", "Bearer " + API_KEY);


    oHttp.onload = function () {
        if (oHttp.readyState === 4) {

            var oBlob = new Blob([this.response], { "type": "audio/mpeg" });
            var audioURL = window.URL.createObjectURL(oBlob);
            var audio = new Audio();
            audio.src = audioURL;
            audio.play();
        }
    };

    var data = {
        model: sModelId,
        input: 'testing because its fun!',
        voice: sVoiceId
    };

    oHttp.responseType = "arraybuffer";
    oHttp.send(JSON.stringify(data));


    
    return (
        <div>
            <h1>Text to Speech</h1>
        </div>
    )
}

export default TextToSpeech;






