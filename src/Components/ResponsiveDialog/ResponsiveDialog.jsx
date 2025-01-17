import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import './ResponsiveDialog.css';

export default function ResponsiveDialog(props) {
    const { title, content, children } = props;
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className='ResponsiveDialog'>
            <span role='button' onClick={handleClickOpen}>
                {children}
            </span>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
                className='dialog'
            >
                <IconButton disableRipple className='close-btn' color="primary" onClick={handleClose}><CloseIcon /></IconButton>

                {title &&
                    <DialogTitle id="responsive-dialog-title">
                        {title}
                    </DialogTitle>
                }
                <DialogContent>
                    {content}
                </DialogContent>
                <DialogActions>
                    {/* Dialog actions like "Agree" or "Disagree" buttons can be placed here if needed */}
                </DialogActions>
            </Dialog>
        </div>
    );
}
