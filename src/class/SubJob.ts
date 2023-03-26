import { Form } from "./Form";

export class SubJob {
    
    id: string = "";
    name: string = "";
    tips: string = "";
    formData: Form[] = [];

    constructor(id: string, name: string, tips: string, formData: Form[])
    {
        this.id = id;
        this.name = name;
        this.tips = tips;
        this.formData = formData;
    }
}