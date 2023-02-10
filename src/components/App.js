import React from "react";

const relatives = [
  "Uncle1",
  "Uncle2",
  "Uncle3",
  "Uncle4",
  "Uncle5",
  "Uncle1",
  "Uncle2",
  "Uncle3",
  "Uncle4",
  "Uncle5",
];

const App = () => {
  return (
    <div id="main">
      {/* Do not remove the main div */}
      <ol key={"relativeList"}>
        {relatives.map((x, i) => {
          return <li key={`relativeListItem${i + 1}`}>{x}</li>;
        })}
      </ol>
    </div>
  );
};

export default App;
