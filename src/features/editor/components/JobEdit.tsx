import { Card, CardContent, CardHeader, Stack, styled } from "@mui/material"
import { useCallback, useMemo, useState } from "react"
import { Job } from "../../../class/Job"
import { JobData } from "../../../class/JobData"
import { SubJob } from "../../../class/SubJob"
import { Header } from "./Head"
import { JobList } from "./JobList"

type Props = 
{
    text: string,
    jobData: JobData,    
    onChange: (name: string, job: Job | SubJob) => void,
    mainJob: Job | undefined,
    subJob: SubJob | undefined,
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
    const subJobs = useMemo(() => props.mainJob ? props.mainJob.subJobs : [], [props.mainJob])
    const m = props.mainJob;
    const a = "aaaa";



    // const handleJobChange = useCallback((name: string, value: string) => {

    //     if (name == "mainJob") {
    //         const j = props.jobData.getJobFromId(value);
    //         if (j != undefined) props.onChange(name, j);
    //     }

    //     if (name == "subJob") {
    //         if (props.mainJob == undefined) return;
    //         const j = props.jobData.getSubJobFromId(props.mainJob, value);
    //         if (j != undefined) props.onChange(name, j);
    //     }

    // }, [props.mainJob?.id, props.subJob?.id])


    // console.log(m);


    
    const handleJobChange = (name: string, value: string) => {

        console.log(subJobs);

        if (name == "mainJob") {
            const j = props.jobData.getJobFromId(value);
            if (j != undefined) props.onChange(name, j);
        }

        // console.log(m);

        if (name == "subJob") {
            if (props.mainJob == undefined) return;
            const j = props.jobData.getSubJobFromId(props.mainJob, value);
            // if (j != undefined) props.onChange(name, j);
        }

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