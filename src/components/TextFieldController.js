import {useController} from "react-hook-form";

import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";

const TextFieldController = (props)=>{
    const { field, fieldState } = useController(props);
    return (
        <TextField {...field}
                   label={props.label}
                   required={props.required}
                   error={!!fieldState.error}
                   helperText={fieldState.error ? props.helperText: null}
                   variant={props.variant}
                   fullWidth={props.fullWidth}

        />

    )
}



TextFieldController.defaultProps = {
    name: "defaultName",
    helperText: "this field is required",
}

TextFieldController.propTypes = {
    control: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    required: PropTypes.bool,
    label: PropTypes.string,
    error: PropTypes.bool,
    helperText: PropTypes.string
}

export default TextFieldController;
