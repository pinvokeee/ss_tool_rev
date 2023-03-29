import { MenuItem, Select, Stack, styled } from "@mui/material";
import { useCallback, useMemo } from "react";
import { Job } from "../../class/Job";
import { JobCollection } from "../../class/JobCollection";
import { editDataState } from "../../state/editDataState";
import { InlineTextField } from "./components/InlineTextField";
import { MultipleJobSelecter } from "./components/MultipleJobSelecter";
import { JobSelecter } from "./components/JobSelecter";
import { MultiLineField } from "./components/MultiLineField";
import { jobCollectionState } from "../../state/jobCollectionState";

const Container = styled(Stack)(({theme}) =>
(
    {
        padding: "12px",
    }
));

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
        <Container gap={2}>
            <InlineTextField text="1.タイトル" name="title" value={state.title} onChange={handleChange}></InlineTextField>
            <MultipleJobSelecter text="2.職種" 
                source={jobMap} 
                mainSelectedId={state.mainJob} 
                subSelectedId={state.subJob} 
                onChange={handleJobChange} />

        <MultiLineField text="2.テスト" name="freeText" value={state.freeText} onChange={handleChange}></MultiLineField>
        </Container>
        
    )
}