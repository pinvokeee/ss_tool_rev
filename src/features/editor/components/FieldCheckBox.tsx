import { Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControlLabel, Stack } from "@mui/material"
import { useCallback } from "react";
import { FormInputData } from "../../../types/EditDataObject";
import { Field } from "./Field";

type Props = {
    form: FormInputData,
    onChange: (target: FormInputData) => void, 
}

export const FieldCheckBox = (props: Props) => {

    const form = props.form;

    const handleChange = useCallback((event: React.SyntheticEvent<Element, Event>, checked: boolean) =>  { 
        const aa = {...form}
        aa.checked = checked;
        props.onChange(aa)
    },[]);

    return (
        <Accordion key={form.id} expanded={form.checked}>
            <AccordionSummary>
                <FormControlLabel control={<Checkbox checked={form.checked} onChange={handleChange} />} label={form.name} />                
            </AccordionSummary>
            <AccordionDetails>
                <Stack>
                {
                    form.fields.map(f => <Field data={f} key={f.id}></Field>)
                }
                </Stack>
            </AccordionDetails>
        </Accordion>
    )
}