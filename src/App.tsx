import React from "react";
import "./App.css";
// import {
//   SignedOut,
//   SignedIn,
//   SignInButton,
//   SignOutButton,
// } from "@clerk/clerk-react";
import ToDoList from "./Components/ToDoList.tsx";
import { Item } from "./assists/decleration";


const todos:Item[] = [
  { text: "fwefwe", doDate: new Date("27/02/202"), complited: true },
  { text: "gfgd", doDate: new Date("30/02/202"), complited: false },
  { text: "tetewtw", doDate: new Date("27/02/202"), complited: true },
  { text: "ben", doDate: new Date("27/02/202"), complited: false },
];

function App() {
  return (
    <div className="App">
      {/* <SignedOut>
       <SignInButton />
        <p>This content is public. Only signed out users can see this.</p>
      </SignedOut>
      <SignedIn>
      <SignOutButton afterSignOutUrl="/" />
        <p>This content is private. Only signed in users can see this.</p>
      </SignedIn> */}
      <ToDoList todos={todos}></ToDoList>
    </div>
  );
}

export default App;
