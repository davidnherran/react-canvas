import React, {useRef} from "react";
import CanvasDraw from "react-canvas-draw";

const App = () => {

  const drawCanvas = useRef(null)
  const resultCanvas = useRef(null)

  const handleClick = () =>{
    const data = drawCanvas.current.getSaveData();
    console.log(data)
    resultCanvas.current.loadSaveData(data)
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
        ref={drawCanvas}
      />
      <CanvasDraw
        brushRadius={0.5}
        brushColor="#777777"
        hideGrid={true}
        disabled={true}
        style={{ border: "solid 1px #cccccc" }}
        ref={resultCanvas}
      />
    </div>
  );
};

export default App;
