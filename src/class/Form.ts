import { InputField } from "./InputField";

export class Form {

    name: string = "";
    fields: InputField[] = [];

    constructor(name: string, fields: InputField[]) {
        this.name = name;
        this.fields = fields;
    }

}