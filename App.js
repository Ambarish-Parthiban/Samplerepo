const title = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm from H1 tag"),
    React.createElement("h2", {}, "I'm from H2 tag"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(title);
