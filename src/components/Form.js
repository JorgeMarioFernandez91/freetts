import React from 'react';
import '../styles/form.scss';

function TextArea(props) {
    var placeholder = 'Enter text here';

    const handleChange = (event) => {
        props.handleParentTextChange(event);
    }

    return <textarea type="text" rows="20" cols="50" placeholder={placeholder} value={props.text} onChange={handleChange} />
}
// would be cool to have a chat gpt implementation here so users
// can get help with their scripts depending on their needs

function Button(props) {
    const processText = () => {
        if (props.text !== '') {
            var sModelId = "tts-1";
            var sVoiceId = props.voice;
            var API_KEY = process.env.REACT_APP_API_KEY;

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
                input: props.text,
                voice: sVoiceId
            };

            oHttp.responseType = "arraybuffer";
            oHttp.send(JSON.stringify(data));
        }
    }
    return <button className="button" onClick={processText}>Convert To Speech</button>
}

function Voices(props) {

    const voices = ['alloy', 'echo', 'fable', 'onyx', 'nova', 'shimmer'];

    const [active, setActive] = React.useState('alloy');

    const handleVoiceChange = (voice) => {
        setActive(voice);
        props.handleParentVoiceChange(voice);
    }

    const capitalize = (word) => {

        var firstLetter = word.charAt(0);
        var restOfWord = word.slice(1);

        return firstLetter.toUpperCase() + restOfWord;
    }

    return (
        <div className="language-list">
            {voices.map((voice) => (
                <div key={voice} className={"language " + (active === voice ? 'active' : '')} onClick={() => handleVoiceChange(voice)}>{capitalize(voice)}</div>
            ))}
        </div>
    )
}

function Form() {

    const [text, setText] = React.useState('');

    const [voice, setVoice] = React.useState('alloy');

    const handleTextChange = (event) => {
        setText(event.target.value);
    }

    const handleVoiceChange = (voice) => {
        setVoice(voice);
    }


    return (
        <div className='form'>
            <div className="left"></div>
            <div className="center">
                <TextArea text={text} voice={voice} handleParentTextChange={handleTextChange} />
                <Button text={text} voice={voice} />
            </div>

            <div className="right">
                <Voices handleParentVoiceChange={handleVoiceChange} />
            </div>

        </div>
    );
}

export default Form;