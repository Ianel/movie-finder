import { FormEvent, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import states from "../../states";

const HomePage = () => {
    let navigate = useNavigate();
    const [title, setTitle] = useState<string>("");

    const saveSearchKeyword = (title: string) => {
        states.search = title;
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!title) {
            toast.error("Please, provide a movie or serie title");
            return;
        }

        saveSearchKeyword(title);
        navigate("/results");
    };

    return (
        <div className="w-screen h-screen bg-home relative z-0">
            <div className="w-full h-full bg-gray-400 backdrop-filter backdrop-blur-sm bg-opacity-20 absolute top-0 left-0 z-30"></div>
            <div className="relative z-50 w-full h-full flex justify-center">
                <div className="h-full py-4 flex flex-col justify-between items-center">
                    <h1 className="text-white my-5 font-bold text-xl lg:text-5xl">
                        M<span className="text-red-500">o</span>vie Finder
                    </h1>
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col md:flex-row items-stretch gap-y-3"
                    >
                        <input
                            className="px-4 py-2 placeholder:text-gray-700 focus:outline-none border-2 border-transparent focus:border-red-500"
                            type="search"
                            name="search"
                            id="search"
                            placeholder="Enter a title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <button
                            className="bg-red-500 md:w-32 text-white px-4 py-2 lg:w-32 border-2 border-transparent"
                            type="submit"
                        >
                            Search
                        </button>
                    </form>
                    <p className="py-4 text-white">
                        &copy; Copyright {new Date(Date.now()).getFullYear()} |
                        All rights reserved
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
