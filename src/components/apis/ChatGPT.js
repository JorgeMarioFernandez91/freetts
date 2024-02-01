/**
 * Makes an API call to OpenAI's ChatGPT model
 * @param {*} props
 * @returns {void}
 */
export function ChatGPT(props) {
  props.handleLoading(true);
  var sModelId = "gpt-3.5-turbo";
  var API_KEY = process.env.REACT_APP_API_KEY;

  var oHttp = new XMLHttpRequest();
  oHttp.open("POST", "https://api.openai.com/v1/chat/completions");
  oHttp.setRequestHeader("Content-Type", "application/json");
  oHttp.setRequestHeader("Authorization", "Bearer " + API_KEY);

  oHttp.onload = function () {
    if (oHttp.readyState === 4) {
      //   setResponse(oHttp.response.choices[0].message.content)
      props.handleResponse(oHttp.response.choices[0].message.content);
      props.handleLoading(false);
    }
  };

  var data = {
    model: sModelId,
    messages: [
      {
        role: "user",
        content: props.text + '\n Keep under 4000 characters',
      },
    ],
  };

  oHttp.responseType = "json";
  oHttp.send(JSON.stringify(data));
}

export default ChatGPT;
