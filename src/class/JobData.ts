import { Form } from "./Form";
import { InputField } from "./InputField";
import { Job } from "./Job";

export class JobData {

    Collection: Job[] = [];

    constructor()
    {
        //@ts-ignore
        const jd = jobData;
        this.Collection = this.loadJob(jd.jobs);        

        console.log(this.Collection);
    }

    getJobFromId = (id: string) => {
        return this.Collection.find(item => item.id == id);
    }

    getSubJobFromId = (id: string) => {
        for (const mj of this.Collection) {
            const subJob = mj.children.find(sj => sj.id == id);
            if (subJob != undefined) return subJob;
        }

        return undefined;
    }

    private loadJob = (law_data: any) => {

        return law_data.map((j: any) => new Job(this.generateUuid(), j.name, this.loadSubJob(j.subJobs)));
    }

    private loadSubJob = (law_data: any) => {

        return law_data.map((j: any) => new Job(this.generateUuid(), j.name, j.tips).setFormData(this.loadFormData(j.info)));
    }
    
    private loadFormData = (law_data: any) => {

        return law_data.map((j: any) => new Form(this.generateUuid(), j.name, this.loadFields(j.items)));
    }

    private loadFields = (law_data: any) => {

        return law_data.map((j: any) => new InputField(j.name, j.prefix, j.suffix));
    }

    private generateUuid = () =>
    {
        // https://github.com/GoogleChrome/chrome-platform-analytics/blob/master/src/internal/identifier.js
        // const FORMAT: string = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
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