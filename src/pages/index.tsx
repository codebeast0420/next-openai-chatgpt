import React from 'react';
import type { NextPage } from 'next';
import {ChatBox} from '../components/ChatBox';

const Home: NextPage = () => {
  const a = process.env.NEXT_PUBLIC_TEST;
  // const [value, setValue] = React.useState<string>('');
  // const [prompt, setPrompt] = React.useState<string>('');
  // const [completion, setCompletion] = React.useState<string>('');

  // const handleInput = React.useCallback(
  //   (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setValue(e.target.value);
  //   }, []);

  // const handleKeyDown = React.useCallback(
  //   async (e: React.KeyboardEvent<HTMLInputElement>) => {
  //     if (e.key === 'Enter') {
  //       setPrompt(value);
  //       setCompletion('Loading...');
  //       const response = await fetch('/api/hello', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({ text: value }),
  //       });
  //       const data = await response.json();
  //       setValue('');
  //       // setCompletion(data.result.choices[0].text);
  //       console.log("data", data);
  //     }
  //   }, [value]);

  return (
    <div>
      <h5>AAAA</h5>
      <h5>{a}</h5>
      <ChatBox />
    </div>
  );
};

export default Home;