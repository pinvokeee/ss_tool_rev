import { Form } from "./Form";

export class Job {

    name: string = "";
    tips: string = "";

    form: Form[] = [];

    constructor(name: string) {
        this.name = name;
    }
}