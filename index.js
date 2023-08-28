const OpenAI = require("openai");
const readline = require("readline");

const openaiClient = new OpenAI({
  // get your org id from here: https://platform.openai.com/account/org-settings
  organization: ${secrets.OPENAI_ORG},
  // Get your API key from here - https://platform.openai.com/account/api-keys
  apiKey: ${secrets.OPENAI_API_KEY}},
});
const OPENAI_MODEL = "gpt-3.5-turbo";
let messages = [
  {
    role: "system",
    content:
      "You're a friendly chatbot that helps people with their homework. You can answer questions about math, history, science, and more. You can also help people with their homework by giving them hints and tips.",
  },
];

const simulateChat = async () => {
  var convo = await makeOpenAiCall(messages);

  // initial message. Not to show to end user
  console.log(convo.choices[0].message);

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
  });
  rl.on("line", async (input) => {
    messages.push({
      role: "user",
      content: input,
    });
    convo = await makeOpenAiCall(messages);
    console.log(convo.choices[0].message);
  });
};

const makeOpenAiCall = async (messages) => {
  const convo = await openaiClient.chat.completions.create({
    model: OPENAI_MODEL,
    max_tokens: 256,
    temperature: 0.9,
    presence_penalty: 0,
    frequency_penalty: 0,
    n: 1,
    messages: messages,
  });
  return convo;
};

simulateChat();
