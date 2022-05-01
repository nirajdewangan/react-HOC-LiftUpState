import React from 'react';
import './style.css';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';
import LiftStateUp from './LiftStateUp';
import UserList from './UserList';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <ClickCounter name="Niraj" />
      <HoverCounter />
      <LiftStateUp />
      <UserList hitUrl="user" />
    </div>
  );
}
