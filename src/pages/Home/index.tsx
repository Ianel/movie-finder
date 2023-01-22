import { FormEvent, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useSnapshot } from "valtio";
import { InputGroup } from "../../components/InputGroup";
import { OMDb_API_KEY } from "../../constants/keys";
import states from "../../states";
import movieBg from "../../assets/movie-mosaic.jpg";

const HomePage = () => {
    let navigate = useNavigate();
    const { search } = useSnapshot(states);
    const [errors, setErrors] = useState<any>();
    let mode = "development";

    const fetchMovie = async (title: string) => {
        const response = await fetch(
            `https://www.omdbapi.com/?apikey=${
                mode == "production"
                    ? OMDb_API_KEY
                    : import.meta.env.VITE_OMDb_API_KEY
            }&t=${title}`
        );

        const jsonResults = await response.json();
        return jsonResults;
    };

    const getMovie = async () => {
        try {
            const movie = await fetchMovie(search);
            states.movieToBeFetched = movie;

            setErrors(movie.Error);
        } catch (err: any) {
            toast.error(err.message);
        }
    };

    useEffect(() => {
        getMovie();
    }, [search]);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!search) {
            toast.error("Please, provide a movie or serie title");
            return;
        }

        if (errors) {
            toast.error(errors);
            return;
        }
        navigate("/results");
    };

    return (
        <div className="w-screen h-screen relative z-0">
            <img
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={movieBg}
                alt="Movie Background"
            />
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
                        <InputGroup />
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
