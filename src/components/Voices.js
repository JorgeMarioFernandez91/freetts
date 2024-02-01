import React from 'react'

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

  export default Voices