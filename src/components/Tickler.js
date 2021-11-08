import React from "react";

function Tickler() {
  function tickle(event) {
    console.log(event);
  }

  return <button>Tickle me!</button>;
}

export default Tickler;
