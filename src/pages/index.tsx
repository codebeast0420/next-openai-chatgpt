import React from 'react'
import { NextPage } from 'next'
import { ChatBox } from "../components/ChatBox";


const Home: NextPage = () => {
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
  //       setCompletion(data.result.choices[0].text);
  //     }
  //   }, [value]);

  return (
    // <div className={styles.main}>
    //   <div>Please type your prompt</div>
    //   <input value={value} onChange={handleInput} onKeyDown={handleKeyDown} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
    //   <div>Prompt: {prompt}</div>
    //   <div>Completion: {completion.split('\n').map(item => <>{item}<br/></>)}</div>
    // </div>
    <div>
      <ChatBox />
    </div>
  );
};

export default Home;