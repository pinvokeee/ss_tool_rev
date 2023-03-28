import { MenuItem, Select, Stack } from "@mui/material";
import { useCallback, useMemo } from "react";
import { Job } from "../../class/Job";
import { JobCollection } from "../../class/JobCollection";
import { editDataState } from "../../state/editDataState";
import { InlineTextField } from "./components/InlineTextField";
import { MultipleJobSelecter } from "./components/MultipleJobSelecter";
import { JobSelecter } from "./components/JobSelecter";
import { MultiLineField } from "./components/MultiLineField";
import { jobCollectionState } from "../../state/jobCollectionState";

export const Editor = () =>
{
    const state = editDataState.useEditDataObject();
    const actions = editDataState.useActions();

    const jobMap: JobCollection = jobCollectionState.useJobCollection();

    const handleChange = useCallback((name: string, value: string) => {
        actions.setValue(name, value);
    }, [])

    const handleJobChange = useCallback((name: string, value: string) => {
        actions.setValue(name, value);
    }, [])

    return (
        <Stack>
            <InlineTextField text="1.タイトル" name="title" value={state.title} onChange={handleChange}></InlineTextField>
            <MultiLineField text="2.テスト" name="freeText" value={state.freeText} onChange={handleChange}></MultiLineField>
            <MultipleJobSelecter text="2.職種" 
                source={jobMap} 
                mainSelectedId={state.mainJob} 
                subSelectedId={state.subJob} 
                onChange={handleJobChange} />
        </Stack>
        
    )
}