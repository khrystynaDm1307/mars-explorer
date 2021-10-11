import { useParams } from "react-router";
import { Slider } from "@mui/material";
import { useHistory } from "react-router";
import { cameras, camerasByRover, maxSol } from "../../../../variables/variables";
import ButtonComponent from "../../../../components/button/Button";
import './Sol.scss'
import PhotosFromServer from "../photos/PhotosFromServer";
import BoxComponent from "../../../../components/box/Box";
;

function Sol() {

  const { rover, sol, camera } = useParams()
  const history = useHistory()

  function handleChange(e) {
    history.push(`/photos/${rover}/${e.target.value}`)
  }

  return <>
    <div className="slider">
      <p>0</p>
      <div>
        <Slider
          step={1}
          aria-label="Default"
          valueLabelDisplay="auto"
          min={0} max={maxSol[rover]}
          onChange={handleChange}
          mb={2}
        />
      </div>
      <p>{maxSol[rover]}</p>
    </div>


    {sol && <>
      <BoxComponent text="CAMERAS" />
      <div className="camerasList">
        {camerasByRover[rover].map(camera => (
          <ButtonComponent
            pathname={`/photos/${rover}/${sol}/${camera}`}
            key={camera}
            variant="contained"
            text={cameras[camera]}>
          </ButtonComponent>
        ))}
      </div>
    </>
    }

    {camera && <PhotosFromServer />}
  </>
}

export default Sol;