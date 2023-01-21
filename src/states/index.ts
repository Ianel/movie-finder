import { proxy } from "valtio";

const states = proxy({
    search: "",
    movieToBeFetched: {},
});

export default states;
