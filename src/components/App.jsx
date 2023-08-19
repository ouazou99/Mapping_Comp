import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";

function App() {
  function emo(emoj) {
    return (
      <Entry
        key={emoj.id}
        name={emoj.name}
        emoji={emoj.emoji}
        meaning={emoj.meaning}
      />
    );
  }
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(emo)}</dl>
    </div>
  );
}

export default App;
