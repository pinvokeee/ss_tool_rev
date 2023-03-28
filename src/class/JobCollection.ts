import { Job } from "./Job";

export type JobSetting = {
    
    job: Job,
    parentId?: string,
}

export class JobCollection extends Map<string, JobSetting> {

    constructor(source?: [string, JobSetting][]) {
        super(new Map(source))
    }

    getMainJobs() {
        const arr = Array.from(this).filter(([key, value]) => value.parentId == undefined);
        return new JobCollection(arr);
    }

    getSubJobs(parentId: string) {
        const arr = Array.from(this).filter(([key, value]) => value.parentId == parentId);
        return new JobCollection(arr);
    }

    load() {
        //@ts-ignore
        const jd = jobData;
        this.loadJob(jd.jobs);
        return this;
    }

    private loadJob(source: any[], parentId?: string) {
        
        if (source == undefined) return ;

        source.forEach((ojob: any) => {
            
            const uuid = this.genUUID();
            const job: Job = {
                name: ojob.name,
                tips: ojob.tips,
            }

            this.set(uuid, { job, parentId });
            this.loadJob(ojob.subJobs, uuid);
        });
    }

    private genUUID() {
        let chars = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".split("");
        for (let i = 0, len = chars.length; i < len; i++) {
            switch (chars[i]) {
                case "x":
                    chars[i] = Math.floor(Math.random() * 16).toString(16);
                    break;
                case "y":
                    chars[i] = (Math.floor(Math.random() * 4) + 8).toString(16);
                    break;
            }
        }
        return chars.join("");
    }

}