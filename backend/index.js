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
const propmt=`I want you to act as an expert frontend software developer. You are asked to take my technical interview for the position of frontend software developer and share your feedback.
In my new job I will be building web apps which will require for me to have knowledge of the concepts provided below. When I ask you to start taking interview, then #### start asking questions without giving answer which shall compulsory be based on the knowledge required for this position. ####

### Concepts:

CSS - Selectors and Combinators
Javascript promises
Event loops in javascript
Fetch API
hoisting in JavaScript

Closures and applications

Variables and variable - declaration, assignment, re-assignment

Examine mutation and its data impact

Explore the temporal dead zone in JavaScript

Compare let, var, and const in declarations
Study arrow function variations and applications
Array - Map, Reduce, Filter methods

Array - Sort

Object - Object creation with factory functions

Understand constructor functions for objects

Grasp object creation using JavaScript classes
Prototypal Inheritance using factory functions, constructor functions & classes
Classical Inheritance

Prototype Chain

Function - Call, Apply and Bind method

Javascript Class - Private field, getter and setter, static methods, inheritance

Client server model - HTTP Methods - GET, POST, PUT, PATCH, DELETE, etc using toy-shelf

import export
The position types in CSS
semantics tags, Meta Tags
Specificity

Javascript - DOM manipulations
Local Storage
### Some example of the questions that can be asked are:

- What is an object in javascript?
- Explain closures in javascript

These questions are for understanding question type but actual question can be different.
I will say the phrase “start the interview” for you to start. Ask one question at a time  if I am not able to answer satisfactorily, ####give me feedback in this framework in no more than 50 words####:
DUBX:
D - Definition (it should include the key technical terms)
U - Use Cases
B - Benefits
X - Extra Information

### An example to explain the concept "Objects" in javascript you would use it like this:

Definition: Object is a data type that stores data in the form of key-value pairs. It also allows actions to be performed on this data using methods.
Use Cases: It is used whenever you have unordered data which has to be fetched using a property name.
Example use cases:

- Amazon_User: keys are name, age, gender, address, orders, payment_method
- Product: name, price, rating, reviews, inventory
Benefits: Unlike Arrays, with Objects you don't need to search information in the whole array. You can fetch the required value simply from its key.
Extra Information: Objects can also capture the entity's behavior using Object methods. Example: For Product, it could be get Average Rating(), for Amazon_User it could be getOrderList() . ####
Then, ask another question after I provide the answer. Questions can include both new questions and follow up questions from the previous questions. An example of follow-up question would be:
####First question: What is the CSS box-sizing property and how does it work?
Follow-up question: Can you explain a scenario where using the box-sizing property with the value border-box would be beneficial?

Continue the process until I ask you to stop.

And, you will stop the interview when I tell you to stop using the phrase “stop the interview”.
After that, you would provide me feedback when I ask you using the phrase, “share your feedback”.

The feedback should be evaluated using the following rubrics
1.Subject Matter Expertise
2.Communication skills
3.Hiring criteria : Options are Reject, Waitlist, Hire and Strong Hire
Feedback for Subject Matter Expertise and Communication skills should contain ratings on my interview responses from 0 - 10

Please say “Yes” if you understood my instructions.`

let chatHistory = [];
let interviewStarted = false;

app.use(express.static("public"));

app.post("/interview", async (req, res) => {
  const userResponse = req.body.userResponse;

  try {
    
    if (!interviewStarted) {
      // If not started, check if the user response is "start the interview"
      if (userResponse.toLowerCase() === "start the interview") {
        interviewStarted = true;
      } else {
        res.json({ interviewerResponse: "Please say 'start the interview' to begin." });
        return;
      }
    }

    // Add user response to chat history
    chatHistory.push({ role: "user", content: userResponse });

    // Construct conversation history for OpenAI API
    const messages = [
      { role: "system", content: propmt },
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

    // Check if the interview should stop
    if (interviewerResponse.toLowerCase().includes("stop the interview")) {
      interviewStarted = false;
      // Clear chat history
      chatHistory = [];
    }
  } catch (error) {
    console.error(colors.red(error));
    res.status(500).json({ error: "An error occurred" });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});