import React from 'react'

export default function Data(props) {
    
    return (
        <>
            {props.resultMovie !== "" && <div className={`row text-${props.mode==='dark'?'light':'dark'}`} >
                <div className="offset-md-1 col-md-4">
                    <img src={props.resultMovie.Poster} alt="" className="img-fluid w-100" />
                </div>
                <div className="col-md-7 my-4 my-md-0">
                    <div className="row  mt-md-3">
                        <div className="col-md-12">
                            <h3 className="mb-3 fs-1 text-center text-md-start"> Title :- {props.resultMovie.Title?props.resultMovie.Title:"N/A"} </h3>
                            <h5 className="mt-4 my-md-2 "> Type :- {props.resultMovie.Type?props.resultMovie.Type:"N/A"} </h5>
                            <h5 className="mt-3 my-md-2 "> IMDB :- {props.resultMovie.imdbRating?props.resultMovie.imdbRating:"N/A"}   <span className={`"ms-2 text-secondary`}> votes</span></h5>
                            <h5 className="mt-3 my-md-2 "> Genre :-{props.resultMovie.Genre?props.resultMovie.Genre:"N/A"} </h5>
                            <h5 className="mt-3 my-md-2 "> Released Date :- {props.resultMovie.Released?props.resultMovie.Released:"N/A"}</h5>
                            <h5 className="mt-3 my-md-2 "> Duration :- {props.resultMovie.Runtime?props.resultMovie.Runtime:"N/A"} </h5>
                            <h5 className="mt-3 my-md-2 "> Director :- {props.resultMovie.Director?props.resultMovie.Director:"N/A"} </h5>
                            <h5 className="mt-3 my-md-2 "> Actors :- {props.resultMovie.Actors?props.resultMovie.Actors:"N/A"} </h5>
                            <h5 className="mt-3 my-md-2 "> Writers :- {props.resultMovie.Writer?props.resultMovie.Writer:"N/A"}</h5>
                            <h5 className="mt-3 my-md-2 "> Countries :- {props.resultMovie.Country?props.resultMovie.Country:"N/A"}</h5>
                            <h5 className="mt-3 my-md-2 "> Languages :- {props.resultMovie.Language?props.resultMovie.Language:"N/A"}</h5>
                            <h5 className="mt-3 my-md-2 "> Box office :- {props.resultMovie.BoxOffice?props.resultMovie.BoxOffice:"N/A"}</h5>
                            <h5 className="mt-3 my-md-2 "> Plot :-{props.resultMovie.Plot?props.resultMovie.Plot:"N/A"} </h5>

                        </div>
                    </div>
                </div>
            </div>}
        </>
    )
}

