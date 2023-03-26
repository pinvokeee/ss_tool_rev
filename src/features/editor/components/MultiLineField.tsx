import { Stack, TextField } from "@mui/material"
import { useCallback } from "react";
import { Header } from "./Head";

type Props = 
{
    text: string,
    name: string,
    value: string,
    onChange: (name: string, value: string) => void, 
}

export const MultiLineField = (props: Props) =>
{
    const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {   
        props.onChange(e.target.name,  e.target.value);
    }, []);

    return (
    <Stack rowGap={1}>
        <Header>{props.text}</Header>
        <TextField name={props.name} multiline value={props.value} onChange={handleChange}></TextField>
    </Stack>
    );
}