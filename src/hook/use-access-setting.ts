import {atom, useAtom} from "jotai/index";
import {Setting} from "@/src/api/access-setting-api";

const configAtom = atom<Setting>()

export function useAccessSetting() {
    return useAtom(configAtom)
}