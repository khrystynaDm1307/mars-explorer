import React from 'react';
import Alert from '@mui/material/Alert';

const LoadMore = ({ currentPage, maxPage, nextPage }) => {
    
    if (currentPage === maxPage) {
        return <Alert severity="info">That's all!:)</Alert>
    }

    function increasePage() {
        nextPage(currentPage+1)
    }

    return (
        <button onClick={increasePage}>Load More</button>
    );
};

export default LoadMore;

