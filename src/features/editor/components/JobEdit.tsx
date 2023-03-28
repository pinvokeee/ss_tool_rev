import { Card, CardContent, CardHeader, Stack, styled, TextField } from "@mui/material"
import { useCallback, useMemo, useRef, useState } from "react"
import { Job } from "../../../class/Job"
import { JobData } from "../../../class/JobData"
import { Header } from "./Head"
import { JobList } from "./JobList"

type Props = 
{
    text: string,
    jobData: JobData,    
    onChange: (name: string, job: Job) => void,
    mainJob: Job | undefined,
    subJob: Job | undefined,
}

const Container = styled("div")(({theme}) => 
(
    {
        width: "100%",
    }
));

type job = 
{
    mainJob: string,
    subJob: string,
}

export const JobEdit = (props: Props) => {

    const mainJobs = props.jobData.Collection;
    const subJobs = useMemo(() => props.mainJob ? props.mainJob.children : [], [props.mainJob])

    const handleJobChange = (name: string, value: string) => {

        const j = name == "mainJob" ? props.jobData.getJobFromId(value) : props.jobData.getSubJobFromId(value);
        if (j != undefined) props.onChange(name, j);
    };

    return <Container>
            <Header>{props.text}</Header>            
            <Stack direction="row">            
                <Stack sx={{width: "100%"}}>                    
                    <JobList name="mainJob" jobList={props.jobData.Collection} value={props.mainJob} onChange={handleJobChange}></JobList>
                    <JobList name="subJob" jobList={subJobs} value={props.subJob} onChange={handleJobChange}></JobList>
                </Stack>

                <Card sx={{width: "100%"}}>
                    <CardHeader>TIPS</CardHeader>
                    <CardContent></CardContent>
                </Card>

            </Stack>
        </Container>
}