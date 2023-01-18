import React from 'react';
import type { NextPage } from 'next';
import {ChatBox} from '../components/ChatBox';

const Home: NextPage = () => {
  return (
    <div>
      <ChatBox />
    </div>
  );
};

export default Home;