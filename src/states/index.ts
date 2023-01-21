import { proxy } from "valtio";

const states = proxy({
    search: "",
});

export default states;
