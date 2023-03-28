import { Job } from "../class/Job";

export type EditDataObject = {

    title: string,
    freeText: string,
    reasonText: string,

    mainJob: Job | undefined,
    subJob: Job | undefined,

    values: JobValuePair[],
}

export type JobValuePair = {
    subJob: Job,
    formData: FormDataValues[],
}

export type FormDataValues = {

    name: string,
    fields: InputFieldValue[]
}

export type InputFieldValue = {

    name: string,
    prefix: string,
    suffix: string,
    value: string,
}