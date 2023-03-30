import { Form } from "./Form";
import { InputField } from "./InputField";
import { Job } from "./Job";

export type JobSetting = {
    
    job: Job,
    parentId?: string,
}

export class JobCollection extends Map<string, JobSetting> {

    private uuidHistories: string[] = [];

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
        
        this.uuidHistories = [];
        this.loadJob(jd.jobs);

        return this;
    }

    private loadJob(source: any[], parentId?: string) {
        
        if (source == undefined) return ;

        source.forEach((ojob: any) => {
            
            const uuid = this.generateUUID();
            const job: Job = {
                name: ojob.name,
                tips: ojob.tips,
                form: ojob.info ? ojob.info.map((info: any) => 
                    new Form(this.generateUUID(), info.name, info.items ? info.items.map((item: any) =>
                        (new InputField(this.generateUUID(), item.name, item.prefix, item.suffix))) : [])) : [],
            }

            this.set(uuid, { job, parentId });
            this.loadJob(ojob.subJobs, uuid);
        });
    }

    private generateUUID() {
        
        let uuid = this.genUUID();

        while (this.uuidHistories.find(id => id == uuid) != undefined) {
            uuid = this.genUUID();
        }

        this.uuidHistories.push(uuid);

        return uuid;
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