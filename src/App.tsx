import { useState } from "react";
import SegmentedControl from "./components/SegmentedControl";
import "./styles.css";

export default function App() {
  const [selected, setSelected] = useState("Daily");

  const options = ["Daily", "Weekly", "Monthly"];
  return (
    <div className="App">
      <h2>Selected: {selected}</h2>
      <SegmentedControl
        options={options}
        selected={selected}
        onSelect={setSelected}
      />
    </div>
  );
}
