import { setFips } from "crypto";
import { useCallback } from "react";
import { useRecoilCallback, useRecoilState, useRecoilValue } from "recoil";
import { AtomEditDataObject, AtomJobCollection } from "../atom/atoms";
import { Form } from "../class/Form";
import { EditDataObject, FormInputData } from "../types/EditDataObject";
import { jobCollectionState } from "./jobCollectionState";

export const editDataState = {

    useActions: () => {

        const [state, setState] = useRecoilState(AtomEditDataObject);
        const jobcollection = jobCollectionState.useJobCollection();

        return {
            setValue: useCallback((name: string, value: any) => 
            {
                setState(state => 
                {
                    const newObject = {...state, [name]: value};

                    if (state.mainJob != newObject.mainJob) {
                        newObject.subJob = "";

                        const subs = jobcollection.getSubJobs(value);

                        if (subs.size == 1) {
                            newObject.subJob = Array.from(subs)[0][0];
                        }
                    }

                    const subId = newObject.subJob;

                    if (subId != "") {

                        const subj = jobcollection.get(newObject.subJob);

                        if (subj && !newObject.values.get(subId))
                        {
                            const forms: FormInputData[] = subj.job.form.map(form => {
                                return {
                                    checked: false,
                                    id: form.id,
                                    name: form.name, 
                                    fields: form.fields.map(f => {
                                        return {
                                            id: f.id,
                                            field: f,
                                            value: "",
                                        }
                                    })
                                }
                            })

                            newObject.values.set(subId, forms);
                        }
                    }

                    return newObject;
                });

            }, []),
        }
    },

    useEditDataObject: () => useRecoilValue(AtomEditDataObject),

    useCurrentFormData: () => { 

        const editState = useRecoilValue(AtomEditDataObject);
        const formData =  editState.values.get(editState.subJob);

        if (formData == undefined) return [];

        return formData;
    }
}

const helper = {

    mainJob: (obj: EditDataObject) => {


    }

}

// const helper = {

//     initValues: (source_obj: EditDataObject) => {

//         const sub = source_obj.subJob;

//         if (sub != undefined) {

//             const new_obj = { ...source_obj };

//             const pair = new_obj.values.find(s => s.subJob.id == sub.id);

//             if (pair == undefined) {

//                 const subJob = sub;
//                 const formData: FormDataValues[] = sub.formData.map(m => helper.createFieldValueSet(m));
//                 const a: JobValuePair = { subJob, formData };
//                 new_obj.values = [...new_obj.values, a];
//             }

//             return new_obj;
//         }

//         return source_obj;
//     },

//     createFieldValueSet: (form: Form): FormDataValues => {
        
//         const name = form.name;

//         const fields: InputFieldValue[] = form.fields.map(f =>  {
//             const n = f.name, 
//             p = f.prefix, 
//             s = f.suffix;

//             return { name: n, prefix: p, suffix: s, value: "" };
//         });

//         return { name, fields };
//     }

// }