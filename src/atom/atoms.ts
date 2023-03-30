import { atom } from "recoil";
import { JobCollection } from "../class/JobCollection";
import { EditDataObject } from "../types/EditDataObject";
import { AtomKeys } from "./keys";

export const AtomEditDataObject = atom<EditDataObject>({
    
    key: AtomKeys.Data,
    default: { title: "", freeText: "", reasonText: "", mainJob: "", subJob: "", values: new Map() }
    
});

export const AtomJobCollection = atom<JobCollection>({
    
    key: AtomKeys.JobCollection,
    default: new JobCollection().load(),
    
});