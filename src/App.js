import "./App.css";

function getPageHTML() {
  const pageHTML = document.documentElement.outerHTML;
  console.log(pageHTML);
}

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Test chrome extension</h1>
      <p>Popup testing for chrome extension</p>
      <button id="screen-capture" onClick = {getPageHTML}> Capture screenshot and html</button>
    </div>
  );
}

export default App;