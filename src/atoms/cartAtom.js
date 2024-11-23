import { atom } from "recoil";

let value = []

if(localStorage.getItem("cart")) {
    value = JSON.parse(localStorage.getItem("cart"))
}

const cartAtom = atom({
  key: 'cartAtom', // unique ID (with respect to other atoms/selectors)
  default: value, // default value (aka initial value)
});

export default cartAtom