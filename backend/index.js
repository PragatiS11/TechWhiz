// import openai from './config/open-ai.js';
// import readlineSync from 'readline-sync';
// import colors from 'colors';

// async function main() {
//   console.log(colors.bold.green('Welcome to the Chatbot Program!'));
//   console.log(colors.bold.green('You can start chatting with the bot.'));

//   const chatHistory = []; // Store conversation history

//   while (true) {
//     const userInput = readlineSync.question(colors.yellow('You: '));

//     try {
//       // Construct messages by iterating over the history
//       const messages = chatHistory.map(([role, content]) => ({
//         role,
//         content,
//       }));

//       // Add latest user input
//       messages.push({ role: 'user', content: userInput });
//       // console.log(messages)

//       // Call the API with user input & history
//       const completion = await openai.createChatCompletion({
//         model: 'gpt-3.5-turbo',
//         messages: messages,
//       });

//       // Get completion text/content
//       const completionText = completion.data.choices[0].message.content;

//       if (userInput.toLowerCase() === 'exit') {
//         console.log(colors.green('Interviwer: ') + completionText);
//         return;
//       }

//       console.log(colors.green('Interviwer: ') + completionText);

//       // Update history with user input and assistant response
//       chatHistory.push(['user', userInput]);
//       chatHistory.push(['Interviwer', completionText]);
//       // console.log(chatHistory)
//     } catch (error) {
//       console.error(colors.red(error));
//     }
//   }
// }

// main();


const express = require("express");
const openai= require("./config/open-ai");
const colors = require("colors");

const app = express();
app.use(express.json());

// Replace "your_api_key_here" with your actual OpenAI API key
// const openai = new OpenAIAPI({ key:  process.env.OPENAI_API_KEY });
// openai.configure({
//   apiKey: process.env.OPENAI_API_KEY,
// });

const chatHistory = [];

app.use(express.static("public"));

app.post("/interview", async (req, res) => {
  const userResponse = req.body.userResponse;

  try {
    // Add user response to chat history
    chatHistory.push({ role: "user", content: userResponse });

    // Construct conversation history for OpenAI API
    const messages = [
      { role: "system", content: "You are the interviewee. ChatGPT is the interviewer." },
      ...chatHistory,
    ];

    // Call OpenAI API to get the completion
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: messages,
    });

    // Extract interviewer response from the API response
    const interviewerResponse = completion.data.choices[0].message.content;

    // Add assistant response to chat history
    chatHistory.push({ role: "assistant", content: interviewerResponse });

    // Send interviewer response to the client
    res.json({ interviewerResponse });
  } catch (error) {
    console.error(colors.red(error));
    res.status(500).json({ error: "An error occurred" });
  }
});

const port =  3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
