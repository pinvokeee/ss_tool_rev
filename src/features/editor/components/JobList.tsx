import { MenuItem, Select, SelectChangeEvent, Stack } from "@mui/material"
import { useCallback } from "react"
import { Job } from "../../../class/Job"
import { Header } from "./Head"

type Props = 
{
    name: string,
    value: Job | undefined,
    jobList: Job[],
    onChange: (name: string, id: string) => void,
}

export const JobList = (props: Props) =>
{
    const handleChange = useCallback((e: SelectChangeEvent<string>) => {
        const {name, value} = e.target;
        props.onChange.call(this, name, value);
    }, []);

    return <>
        <Select name={props.name} value={props.value ? props.value.id : ""} onChange={handleChange}>
            {
                props.jobList.map(j => <MenuItem key={j.id} value={j.id}>{j.name}</MenuItem>)
            }
        </Select>
    </>
}