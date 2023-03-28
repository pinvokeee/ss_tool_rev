import { MenuItem, Select, SelectChangeEvent, Stack } from "@mui/material"
import { useCallback } from "react"
import { Job } from "../../../class/Job"
import { JobCollection } from "../../../class/JobCollection"
import { Header } from "./Head"

type Props = 
{
    name: string,
    source: JobCollection,
    selectedId: string,
    onChange: (name: string, id: string) => void,
}

export const JobSelecter = (props: Props) =>
{
    const handleChange = useCallback((e: SelectChangeEvent<string>) => {
        const {name, value} = e.target;
        props.onChange.call(this, name, value);
    }, []);

    const menu = Array.from(props.source).map(([id, setting]) => <MenuItem key={id} value={id}>{setting.job.name}</MenuItem>);

    return (
        <Select name={props.name} value={props.selectedId} onChange={handleChange}>
            { menu }
        </Select>
    );
}