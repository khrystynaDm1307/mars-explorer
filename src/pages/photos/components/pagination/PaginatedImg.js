import './Img.scss'
import {ImageList,itemData,ImageListItem} from '@mui/material'

function PaginatedImg({data}) {

  return (
    <div className="imagesBox">
      {data.map(img => (
          <img src={img} key={img} alt="Load"/>
      ))}
    </div>
  );

}

export default PaginatedImg;