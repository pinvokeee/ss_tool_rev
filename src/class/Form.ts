import { InputField } from "./InputField";

export class Form {

    id: string = "";
    name: string = "";
    fields: InputField[] = [];

    constructor(id: string, name: string, fields: InputField[]) {
        this.id = id;
        this.name = name;
        this.fields = fields;
    }

}