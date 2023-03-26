import { useCallback } from "react";
import { useRecoilCallback, useRecoilState, useRecoilValue } from "recoil";
import { AtomEditDataObject } from "../atom/atoms";
import { EditDataObject } from "../types/EditDataObject";

export const editDataController = {

    useActions: () => {

        const [state, setState] = useRecoilState(AtomEditDataObject);

        return {
            setValue: useCallback((name: string, value: any) => setState(state => ({...state, [name]: value})), []),
            // setValueAny: useCallback((name: string, value: any) => setState(state => ({...state, [name]: value})), [])

        }
    },

    useEditDataObject: () => useRecoilValue(AtomEditDataObject)
}