
import { Box } from '@mui/material';

function BoxComponent({ text }) {

    const boxStyles = {
        width: '100%',
        minHeight: '80px',
        border: '2px solid rgb(0, 216, 216)',
        borderRadius: '10px',
        borderCollapse: 'collapse',
        boxSizing: 'border-box'
    }

    return <Box sx={boxStyles} mb={2}>
        <h2>{text}</h2>
    </Box>

}

export default BoxComponent;