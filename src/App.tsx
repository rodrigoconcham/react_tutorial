import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button color="primary" onClick={() => console.log("Button clicked!")}>
        click me
      </Button>
    </div>
  );
}

export default App;
