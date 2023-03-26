import { atom } from "recoil";
import { EditDataObject } from "../types/EditDataObject";
import { AtomKeys } from "./keys";

export const AtomEditDataObject = atom<EditDataObject>({
    
    key: AtomKeys.Data,
    default: { title: "", freeText: "", reasonText: "", mainJob: undefined, subJob: undefined }
    
});