import { Form } from "./Form";

export class Job {

    id: string = "";
    name: string = "";
    tips: string = "";

    children: Job[] = [];
    formData: Form[] = [];

    constructor(id: string, name: string, children?: Job[]) {
        this.id = id;
        this.name = name;

        if (children) this.children = children;
    }

    setFormData = (forms: Form[]) => {
        this.formData = forms;
        return this;
    }

}