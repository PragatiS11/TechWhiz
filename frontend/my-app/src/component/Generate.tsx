import React, { useState, useRef } from 'react';

const API_URL = "https://api.openai.com/v1/chat/completions";
const API_KEY = "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";

const Chatbot: React.FC = () => {
  const [input, setInput] = useState('');
  const [chatHistory, setChatHistory] = useState<string[]>([]);
  const [result, setResult] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  
  const generate = async () => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: generateMessages(),
        }),
      });

      const data = await response.json();
      const generatedResponse = data.choices[0].message.content;
      setChatHistory([...chatHistory, input, generatedResponse]);
      setResult(generatedResponse);
      setInput('');
    } catch (error) {
      console.error("Error:", error);
      setResult("Error occurred while generating.");
    }
  };

  const generateMessages = () => {
    const messages = [];
    for (let i = 0; i < chatHistory.length; i += 2) {
      messages.push({ role: "user", content: chatHistory[i] });
      if (i + 1 < chatHistory.length) {
        messages.push({ role: "chatbot", content: chatHistory[i + 1] });
      }
    }
    if (input) {
      messages.push({ role: "user", content: input });
    }
    return messages;
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      generate();
    }
  };

  return (
    <div>
      <div>
        {chatHistory.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Enter your message"
        ref={inputRef}
      />
      <button onClick={generate}>Send</button>
      <p>{result}</p>
    </div>
  );
};

export default Chatbot;
