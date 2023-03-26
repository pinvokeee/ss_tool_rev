import { SubJob } from "./SubJob";

export class Job {

    id: string = "";
    name: string = "";
    subJobs: SubJob[] = [];

    constructor(id: string, name: string, subJobs: SubJob[]) {
        this.id = id;
        this.name = name;
        this.subJobs = subJobs;
    }

}