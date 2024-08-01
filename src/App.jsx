import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Office } from "./Office";

function App() {
  return (
    <>
      <OrbitControls enableZoom={false} />
      <ScrollControls pages={3} damping={0.2}>
        <Office />
      </ScrollControls>
    </>
  );
}

export default App;
