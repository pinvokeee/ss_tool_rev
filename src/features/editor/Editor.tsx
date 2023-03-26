import { MenuItem, Select, Stack } from "@mui/material";
import { useCallback, useMemo } from "react";
import { Job } from "../../class/Job";
import { JobData } from "../../class/JobData";
import { SubJob } from "../../class/SubJob";
import { editDataController } from "../../controller/editDataController";
import { InlineTextField } from "./components/InlineTextField";
import { JobEdit } from "./components/JobEdit";
import { JobList } from "./components/JobList";
import { MultiLineField } from "./components/MultiLineField";

export const Editor = () =>
{
    const controller = editDataController;
    const state = controller.useEditDataObject();
    const actions = controller.useActions();

    const jobs: JobData = useMemo(() => new JobData(), []);

    const handleChange = useCallback((name: string, value: string) => {
        actions.setValue(name, value);
    }, [])

    const handleJobChange = useCallback((name: string, value: Job | SubJob) => {
        actions.setValue(name, value);
        // console.log(name)
    }, [])



    console.log(state);

    return (
        <Stack>
            <InlineTextField text="1.タイトル" name="title" value={state.title} onChange={handleChange}></InlineTextField>
            <MultiLineField text="2.テスト" name="freeText" value={state.freeText} onChange={handleChange}></MultiLineField>
            <JobEdit text="2.職種" jobData={jobs} mainJob={state.mainJob} subJob={state.subJob} onChange={handleJobChange}></JobEdit>
        </Stack>
        
    )
}