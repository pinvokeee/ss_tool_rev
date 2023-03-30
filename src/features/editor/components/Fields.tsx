import { Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControlLabel, Stack } from "@mui/material"
import React, { useMemo } from "react";
import { FieldValuePair, FormInputData } from "../../../types/EditDataObject"
import { Field } from "./Field"

type Props = {
    forms: FormInputData[],
}

export const Fields = React.memo((props: Props) => {

    console.log(props);

    return (
    <Stack>
        {
            props.forms.map(form => {

                return (
                <Accordion key={form.id} expanded={form.checked}>
                    <AccordionSummary>
                        <FormControlLabel control={<Checkbox checked={form.checked}/>} label={form.name} />                
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
            })
        }
    </Stack>

    );
});