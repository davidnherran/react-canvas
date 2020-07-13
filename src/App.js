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

  const clear = () => {
    drawCanvas.current.clear()
  }

  const undo = () => {
    drawCanvas.current.undo()
  }

  return (
    <div>
      <button onClick={handleClick} >
        Save Draw
      </button>
      <button onClick={clear} >
        Clear Draw
      </button>
      <button onClick={undo} >
        Undo
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
