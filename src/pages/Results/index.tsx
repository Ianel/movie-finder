import { Suspense } from "react";
import { useSnapshot } from "valtio";
import { FaChevronCircleLeft } from "react-icons/fa";
import states from "../../states";
import Paragraphs from "../../components/Paragraphs";
import { useNavigate } from "react-router-dom";

const ResultsPage = () => {
    const { movieToBeFetched }: { movieToBeFetched: any } = useSnapshot(states);
    let navigate = useNavigate();

    return (
        <Suspense fallback={<p>Loading...</p>}>
            <div className="relative">
                <button
                    onClick={() => navigate("/")}
                    className="absolute top-4 left-4 text-4xl lg:top-8 lg:left-8 text-white lg:text-gray-700 lg:text-5xl z-30"
                >
                    <FaChevronCircleLeft />
                </button>
                <img
                    className="w-full h-full lg:w-1/2 mx-auto object-cover"
                    src={movieToBeFetched.Poster}
                />

                <div className="absolute bottom-0 left-0 backdrop-blur-sm backdrop-filter bg-opacity-10 bg-gray-400 lg:bg-gray-800 w-full h-32 pt-10 px-12 lg:px-24 text-white text-2xl">
                    <div className="flex justify-between items-center">
                        <h2>{movieToBeFetched.Title}</h2>
                        <h3 className="text-lg text-yellow-500 font-semibold">
                            {movieToBeFetched.Rated}
                        </h3>
                    </div>
                    <div className="flex justify-between items-center">
                        <h3 className="text-red-500">
                            {movieToBeFetched.Year}
                        </h3>
                        <h3 className="text-sm">{movieToBeFetched.Runtime}</h3>
                    </div>
                </div>
            </div>
            <div className="bg-gray-700 text-white p-12 lg:px-24 md:flex md:flex-wrap md:justify-between md:items-center">
                <Paragraphs label="Genre" content={movieToBeFetched.Genre} />
                <Paragraphs
                    label="Released"
                    content={movieToBeFetched.Released}
                />
            </div>
            <div className="text-white bg-black p-12 lg:px-24">
                <p className="underline font-semibold">Synopsis: </p>
                <p>{movieToBeFetched.Plot}</p>
            </div>
            <div className="bg-gray-700 text-white p-12 lg:px-24 md:flex md:flex-wrap md:justify-between md:items-center">
                <Paragraphs
                    label="Language"
                    content={movieToBeFetched.Language}
                />
                <Paragraphs
                    label="Country"
                    content={movieToBeFetched.Country}
                />
                <Paragraphs label="Awards" content={movieToBeFetched.Awards} />
            </div>
            <div className="bg-black text-white p-12 lg:px-24 md:flex md:justify-between md:items-start md:flex-wrap">
                <p>
                    <span className="underline font-semibold">Director:</span>{" "}
                    {movieToBeFetched.Director &&
                        movieToBeFetched.Director.split(",").map(
                            (director: string, index: number) => {
                                return <li key={index}>{director}</li>;
                            }
                        )}
                </p>
                <p className="py-4">
                    <span className="underline font-semibold">Writer:</span>{" "}
                    {movieToBeFetched.Writer &&
                        movieToBeFetched.Writer.split(",").map(
                            (writer: string, index: number) => {
                                return <li key={index}>{writer}</li>;
                            }
                        )}
                </p>
                <p>
                    <span className="underline font-semibold">Actors:</span>{" "}
                    {movieToBeFetched.Actors &&
                        movieToBeFetched.Actors.split(",").map(
                            (actor: string, index: number) => {
                                return <li key={index}>{actor}</li>;
                            }
                        )}
                </p>
            </div>
            <div className="text-white bg-gray-700 p-12 lg:px-24 md:flex md:flex-wrap md:justify-evenly md:items-center">
                <Paragraphs
                    label="Box Office"
                    content={movieToBeFetched.BoxOffice}
                />
                <Paragraphs
                    label="Production"
                    content={movieToBeFetched.Production}
                />
            </div>
            <div className="bg-black text-white p-12 lg:px-24">
                <p className="underline font-semibold">Ratings: </p>
                <div className="md:flex md:flex-wrap md:justify-between md:items-center">
                    {movieToBeFetched.Ratings &&
                        movieToBeFetched.Ratings.map(
                            (
                                rating: { Source: string; Value: string },
                                index: number
                            ) => {
                                return (
                                    <div
                                        className="py-2"
                                        key={`${index}--${++index}`}
                                    >
                                        <li>
                                            From:{" "}
                                            <span className="text-yellow-500">
                                                {rating.Source}
                                            </span>
                                        </li>
                                        <li>
                                            Score:{" "}
                                            <span className="text-gray-400 font-bold">
                                                {rating.Value}
                                            </span>
                                        </li>
                                    </div>
                                );
                            }
                        )}
                </div>
            </div>
            <footer className="p-12 lg:px-24 text-center bg-gray-700 text-white">
                <p>
                    &copy; Copyright {new Date(Date.now()).getFullYear()} | All
                    rights reserved
                </p>
            </footer>
        </Suspense>
    );
};

export default ResultsPage;
