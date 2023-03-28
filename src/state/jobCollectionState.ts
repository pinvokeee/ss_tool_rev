import { useCallback } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { AtomJobCollection } from "../atom/atoms";

export const jobCollectionState = {

    useJobCollection: () => useRecoilValue(AtomJobCollection)
}