import React from "react";
import ReactDOM from "react-dom/client";

const jsxheading = <h1 id="heading">Welcome to our First Project</h1>;

const Title = () => <h1>Hello world from Title Component</h1>;

const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1>Hi this is from Container in Heading Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
