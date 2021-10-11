import { useParams } from "react-router";
import { useEffect, useState } from 'react'
import PaginatedImg from "../pagination/PaginatedImg";
import LoadMore from "../pagination/LoadMore";
import ModalWindow from "../../../../components/modal/Modal";
import { Alert, CircularProgress } from "@mui/material";

function PhotosFromServer() {

  const { rover, sol, camera } = useParams()
  const [data, setData] = useState([]);
  const [isModalOpen, openModal] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [hasError, SetError] = useState(false)

  //fetching data
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      SetError(false)

      try {
        const res = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&camera=${camera}&api_key=${process.env.REACT_APP_MARS_API}`);
        const data = await res.json()
        const images = data.photos.map(el => el.img_src)
        setData(images);
        if (images.length < 1) { openModal(true) }
      }
      catch (error) {
        SetError(true);
      }
      setLoading(false)
    };
    fetchData();
  }, [camera]);

  //for pagination
  const [imgPerOnce] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)
  const indexLastImg = imgPerOnce * currentPage;
  const currentImages = data.slice(0, indexLastImg)
  const maxPage = Math.ceil(data.length / imgPerOnce)

  return <div className="section">
    {hasError ? <Alert severity="error">Something went wrong...</Alert> : <>
    {isLoading ? <CircularProgress /> : <div>
      <PaginatedImg data={currentImages} />
      <LoadMore currentPage={currentPage} maxPage={maxPage} nextPage={setCurrentPage} />
      <ModalWindow isOpen={isModalOpen} setMode={openModal} text="No images with this parametrs" />
    </div>}
    </>}
  </div>

}

export default PhotosFromServer;

