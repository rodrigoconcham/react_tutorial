import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  useState(false);
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        click me
      </Button>
    </div>
  );
}

export default App;
