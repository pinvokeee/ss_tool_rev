import { Stack, TextField } from "@mui/material"
import { FormEvent, useCallback } from "react";
import { EditDataObject } from "../../../types/EditDataObject"
import { Header } from "./Head";

type Props = 
{
    text: string,
    name: string,
    value: string,
    onChange: (name: string, newValue: string) => void,
}

export const InlineTextField = (props: Props) => {

    const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {   
        props.onChange(e.target.name,  e.target.value);
    }, []);


    return (
        <>
        <Stack direction={"column"} rowGap={1}>
            <Header>{props.text}</Header>
            <TextField name={props.name} value={props.value} onChange={handleChange}></TextField>
        </Stack>
        </>
    )
}