import {useState,useContext} from 'react';
import {useForm} from "react-hook-form";
import AuthContext from "../contexts/AuthContext";
import Button from '@mui/material/Button';
import TextFieldController from "./TextFieldController";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog() {
    const {loginUser} = useContext(AuthContext);
    const [open, setOpen] = useState(false);
    const { handleSubmit, control,  formState } = useForm();
    const { isDirty, isValid } = formState;
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const onSubmit = (credential) => {
        console.log('credential: ', credential);
        loginUser(credential);
    }
    return (
        <div>
            <Button variant="outlined" color="inherit" onClick={handleClickOpen}>
                Login
            </Button>

            <Dialog open={open} onClose={handleClose}>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>

                    <DialogTitle>Sign up for Tripma</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Tripma is totally free to use. Sign up using your email address or phone number below to get started.
                        </DialogContentText>
                        <TextFieldController control={control}
                                             name="username"
                                             label="Email or phone number"
                                             helperText="this is required field!"
                                             required
                                             fullWidth

                                             rules={{ required: true }}
                        />
                        <TextFieldController control={control}
                                             name="password"
                                             label="Password"
                                             helperText="this is required field!"
                                             required
                                             fullWidth
                                             rules={{ required: true }}
                        />

                    </DialogContent>
                    <DialogActions>
                        <Button  disabled={!isDirty || !isValid}
                                 onClick={handleClose}
                                 type="submit"
                                 variant="outlined"
                                 fullWidth>Subscribe
                        </Button>

                    </DialogActions>
                </form>

            </Dialog>

        </div>
    );
}