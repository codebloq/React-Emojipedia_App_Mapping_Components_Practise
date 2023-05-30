import React from "react";
import Entry from "./Entry.jsx";
import emojipedia from "../emojipedia.js";

//Create Entry Component
//Create props to replace hardcoded data
//Import the emojipedia const
//Map through emojipedia array and render Entry components

function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
