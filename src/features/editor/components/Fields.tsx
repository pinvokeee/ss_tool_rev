import { Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControlLabel, Stack } from "@mui/material"
import React, { useCallback, useMemo } from "react";
import { FieldValuePair, FormInputData } from "../../../types/EditDataObject"
import { Field } from "./Field"
import { FieldCheckBox } from "./FieldCheckBox";

type Props = {
    forms: FormInputData[],
    onChange: (forms: FormInputData[]) => void,
}

export const Fields = React.memo((props: Props) => {

    const handleChange = (newForm: FormInputData) => {
        const a = props.forms.map(f => f.id == newForm.id ? newForm : f);
        props.onChange(a);
    };

    return (
    <Stack>
        {
            props.forms.map(form => <FieldCheckBox key={form.id} form={form} onChange={handleChange}></FieldCheckBox>)
        }
    </Stack>

    );
});