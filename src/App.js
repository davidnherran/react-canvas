import React, {useRef} from "react";
import CanvasDraw from "react-canvas-draw";

const App = () => {

  const draw = useRef(null)

  const handleClick = () =>{
    const data = draw.current.getSaveData();
    console.log(data)
  }

  return (
    <div>
      <button onClick={handleClick} >
        Save Draw
      </button>
      <CanvasDraw
        brushRadius={0.5}
        brushColor="#777777"
        style={{ border: "solid 1px #cccccc" }}
        ref={draw}
      />
      <CanvasDraw
        brushRadius={0.5}
        brushColor="#777777"
        hideGrid={true}
        disabled={true}
        style={{ border: "solid 1px #cccccc" }}
      />
    </div>
  );
};

export default App;
