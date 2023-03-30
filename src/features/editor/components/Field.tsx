import { InputAdornment, Stack, TextField } from "@mui/material"
import { FieldValuePair } from "../../../types/EditDataObject"

type Props = {
    data: FieldValuePair
}

export const Field = (props: Props) => {

    return (
    <Stack direction={"column"}>
        <TextField 
        InputProps={{ 
                startAdornment: <InputAdornment position="start">{props.data.field.prefix}</InputAdornment>,
                endAdornment: <InputAdornment position="end">{props.data.field.suffix}</InputAdornment>, }}></TextField>            
    </Stack>
    )
}