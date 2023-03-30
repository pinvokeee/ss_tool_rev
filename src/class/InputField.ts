export class InputField {

    id: string = "";
    name: string = "";
    prefix: string = "";
    suffix: string = "";

    constructor(id: string, name: string, prefix: string, suffix: string) {
        this.id = id;
        this.name = name;
        this.prefix = prefix;
        this.suffix = suffix;
    }

}