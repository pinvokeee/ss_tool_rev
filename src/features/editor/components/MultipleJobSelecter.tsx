import { Card, CardContent, Stack, styled, TextField, Typography } from "@mui/material"
import { useCallback, useMemo, useRef, useState } from "react"
import { Job } from "../../../class/Job"
import { JobCollection } from "../../../class/JobCollection"
import { Header } from "./Head"
import { JobSelecter } from "./JobSelecter"

type Props = 
{
    text: string,
    mainSelectedId: string,
    subSelectedId: string,
    source: JobCollection,
    onChange: (name: string, jobId: string) => void,
}

const Container = styled("div")(({theme}) => 
(
    {
        width: "100%",
    }
));


const TipsHeader= styled("div")(({theme}) => 
(
    {
        fontSize: 14,
        fontWeight: "bold",
        color: theme.palette.text.secondary,
        textAlign: "left",
    }
));

const TipsContent= styled("pre")(({theme}) => 
(
    {
        fontFamily: "inherit",
        textAlign: "left",
        margin: "0",
        padding: "5px",
    }
));




type job = 
{
    mainJob: string,
    subJob: string,
}

export const MultipleJobSelecter = (props: Props) => {

    const handleJobChange = (name: string, value: string) => {
        // console.log(name, value);
        // const setting = props.source.get(value);
        // if (setting != undefined) props.onChange(name, value);
        props.onChange(name, value);
    };

    const mainJobs = props.source.getMainJobs();
    const subJobs = props.source.getSubJobs(props.mainSelectedId);

    const selectedSubJob = props.source.get(props.subSelectedId);

    return <Container>
            <Header>{props.text}</Header>            
            <Stack direction="row">            
                <Stack sx={{width: "100%"}}>                    
                    <JobSelecter name="mainJob" selectedId={props.mainSelectedId} source={mainJobs} onChange={handleJobChange}></JobSelecter>
                    <JobSelecter name="subJob" selectedId={props.subSelectedId} source={subJobs} onChange={handleJobChange}></JobSelecter>
                </Stack>

                <Card sx={{width: "100%"}}>
                    <CardContent>
                        <TipsHeader>TIPS</TipsHeader>
                        <TipsContent>{selectedSubJob?.job.tips}</TipsContent>
                    </CardContent>
                </Card>

            </Stack>
        </Container>
}