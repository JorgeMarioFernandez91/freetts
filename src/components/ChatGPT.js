export function ChatGPT(props) {
  // if (props.text !== "") {
  if (true) {
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
      }
    };

    var data = {
      model: sModelId,
      messages: [
        {
          role: "user",
        //   content: "list top 3 pizza toppings world wide. Keep it short.",
          content: props.text + ' . Keep response under 200 words. Keep short.',
        },
      ],
    };

    oHttp.responseType = "json";
    oHttp.send(JSON.stringify(data));
  }
}

export default ChatGPT;
