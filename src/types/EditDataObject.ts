import { Job } from "../class/Job";
import { SubJob } from "../class/SubJob";

export type EditDataObject = {

    title: string,
    freeText: string,
    reasonText: string,

    mainJob: Job | undefined,
    subJob: SubJob | undefined,

}