import { setFips } from "crypto";
import { useCallback } from "react";
import { useRecoilCallback, useRecoilState, useRecoilValue } from "recoil";
import { AtomEditDataObject } from "../atom/atoms";
import { Form } from "../class/Form";
import { EditDataObject, FormDataValues, InputFieldValue, JobValuePair } from "../types/EditDataObject";

export const editDataController = {

    useActions: () => {

        const [state, setState] = useRecoilState(AtomEditDataObject);

        return {
            setValue: useCallback((name: string, value: any) => 
            {
                setState(state => 
                {
                    const newObject = {...state, [name]: value};

                    const a = helper.initValues(newObject);

                    console.log(a);
                    return a;
                });

            }, []),
        }
    },

    useEditDataObject: () => useRecoilValue(AtomEditDataObject)
}

const helper = {

    initValues: (source_obj: EditDataObject) => {

        const sub = source_obj.subJob;

        if (sub != undefined) {

            const new_obj = { ...source_obj };

            const pair = new_obj.values.find(s => s.subJob.id == sub.id);

            if (pair == undefined) {

                const subJob = sub;
                const formData: FormDataValues[] = sub.formData.map(m => helper.createFieldValueSet(m));
                const a: JobValuePair = { subJob, formData };
                new_obj.values = [...new_obj.values, a];
            }

            return new_obj;
        }

        return source_obj;
    },

    createFieldValueSet: (form: Form): FormDataValues => {
        
        const name = form.name;

        const fields: InputFieldValue[] = form.fields.map(f =>  {
            const n = f.name, 
            p = f.prefix, 
            s = f.suffix;

            return { name: n, prefix: p, suffix: s, value: "" };
        });

        return { name, fields };
    }

}