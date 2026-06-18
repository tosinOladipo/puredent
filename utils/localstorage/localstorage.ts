import { UserType, VoterType } from "../types";


export const userLocalStorage = (): UserType | undefined => {
  try {
    const data = localStorage.getItem('user');
    if (data === null) return undefined;
    return JSON.parse(data) as UserType;
  } catch (e) {
    return undefined;
  }
};



export const voterLocalStorage = (): VoterType | undefined => {
  try {
    const data = localStorage.getItem('voter');
    if (data === null) return undefined;
    return JSON.parse(data) as VoterType;
  } catch (e) {
    return undefined;
  }
};