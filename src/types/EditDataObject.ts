import { InputField } from "../class/InputField";
import { Job } from "../class/Job";

export type EditDataObject = {

    title: string,
    freeText: string,
    reasonText: string,

    mainJob: string,
    subJob: string,

    values: Map<string, FormInputData[]>,
}

export type FormInputData = {

    name: string,
    id: string,
    checked: boolean,
    fields: FieldValuePair[],
}

export type FieldValuePair = {

    id: string,
    field: InputField,
    value: string,
}
