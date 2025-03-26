import {Dialog as MuiDialog, DialogContent, DialogTitle, IconButton} from "@mui/material";
import {Close} from "@mui/icons-material";
import RecipeContent from "./recipe-content";
import {DialogProps} from "./types";

const Dialog = (props: DialogProps) => {
    const { onClose, open, title, recipeContent } = props;

    const handleClose = () => {
        onClose('');
    };

    return (
        <MuiDialog onClose={handleClose} open={open}>
            <DialogTitle sx={{ m: 0, p: 2 }}>{title}</DialogTitle>
            <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={(theme) => ({
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: theme.palette.grey[500],
                })}
            >
                <Close />
            </IconButton>
            <DialogContent dividers>
                {
                    recipeContent && <RecipeContent {...recipeContent} />

                }
            </DialogContent>
        </MuiDialog>
    );
}

export default Dialog;