export class InputField {

    name: string = "";
    prefix: string = "";
    suffix: string = "";

    constructor(name: string, prefix: string, suffix: string) {
        this.name = name;
        this.prefix = prefix;
        this.suffix = suffix;
    }

}