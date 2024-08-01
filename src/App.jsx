import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Office } from "./Office";
import { Content } from "./Content";

function App() {
  return (
    <>
      <OrbitControls enableZoom={false} />
      <ScrollControls pages={3} damping={0.2}>
        <Office />
        <Content />
      </ScrollControls>
    </>
  );
}

export default App;
