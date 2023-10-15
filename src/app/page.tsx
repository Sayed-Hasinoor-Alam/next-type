import React from 'react';
import AddTodo from './components/add-todo';
import Todos from './components/todos';
import Navbar from './components/navbar';
import {BsMastodon} from "react-icons/bs"
const Page = () => {
  return (
    <main>
      <h2><BsMastodon className="icons"/> TODO  NEXT APP (TYPESCRIPT) <BsMastodon className="icons" /> </h2>
      <Navbar/>
      <AddTodo/>
      <Todos/>
    </main>
  );
}

export default Page;
