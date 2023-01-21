import React from "react";
import { useSnapshot } from "valtio";
import states from "../../states";

export const InputGroup = () => {
    const { search } = useSnapshot(states);

    return (
        <>
            <input
                className="px-4 py-2 placeholder:text-gray-700 focus:outline-none border-2 border-transparent focus:border-red-500"
                type="search"
                name="search"
                id="search"
                placeholder="Enter a title"
                value={search}
                onChange={(e) => (states.search = e.target.value)}
            />
            <button
                className="bg-red-500 md:w-32 text-white px-4 py-2 lg:w-32 border-2 border-transparent"
                type="submit"
            >
                Search
            </button>
        </>
    );
};
