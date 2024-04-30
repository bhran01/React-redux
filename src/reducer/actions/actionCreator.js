import { ADDBYONE, RESET, SUBTRACTBYONE } from "./constants"

export let addByOne = () => {
  return { type: ADDBYONE, payload: 1 }
}

export const substractByOne = () => {
  return { type: SUBTRACTBYONE, payload: 1 }
}

export let reset = () => {
  return { type: RESET, payload: 0 }
}