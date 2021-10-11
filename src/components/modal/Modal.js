import * as React from 'react';
import Box from '@mui/material/Box';
import {Modal,Alert} from '@mui/material/';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '300px',
    background:'white',
    display:'flex'
};

export default function ModalWindow({ isOpen, setMode, text }) {
    const [open, setOpen] = React.useState(isOpen);
    const handleClose = () => {
        setMode(false)
        setOpen(false)
    };

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Alert severity="info">Oopss.. {text}</Alert>
                    <CancelPresentationIcon color="primary" onClick={handleClose} />
                </Box>
            </Modal>
        </div>
    );
}
