import { Job } from "../class/Job";
import { SubJob } from "../class/SubJob";

export type EditDataObject = {

    title: string,
    freeText: string,
    reasonText: string,

    mainJob: Job | undefined,
    subJob: SubJob | undefined,

    values: JobValuePair[],
}

export type JobValuePair = {
    subJob: SubJob,
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