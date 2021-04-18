import React from 'react';
import beer from "../../assets/images/beer.JPG";
import buddy from "../../assets/images/buddy.JPG";
import covid from "../../assets/images/covid.JPG";
import fitter from "../../assets/images/fitter.JPG";
import schedule from "../../assets/images/schedule.JPG";
import weather from "../../assets/images/weather.JPG";

function projects() {
  return (
    <div className="container shadow px-4">
      <div className="row m-4 pt-5">
        <div className="col-3"></div>
        <div className="col-6 text-center mb-3">
            <h1 className="sub-title">my projects</h1>
        </div>
        <div className="col-3"></div>
      </div>
      <div className="row">

        <div className="card-deck">

            <div className="card m-4 project shadow-sm" style= {{ width: "100%", backgroundColor: "#fbefcc9a" }}>
                <img src={covid} className="card-img-top rounded" alt="COVID"/>
                <div className="card-body">
                    <p className="card-text"><a to="route" target="_blank" rel="noopener noreferrer" className="card-text" href="https://gabrielazalta.github.io/COVID-19-Live-Stats-Support/">COVID-19 Live Stats and Support</a>
                    </p>
                    <p className="card-text repo"><a to="route" target="_blank" rel="noopener noreferrer" className="card-text" href="https://github.com/gabrielazalta/COVID-19-Live-Stats-Support">View Code</a>
                    </p>
                </div>
            </div>

            <div className="card m-4 project shadow-sm" style= {{ width: "100%", backgroundColor: "#fbefcc9a" }}>
                <img src={schedule} className="card-img-top rounded" alt="scheduler"/>
                <div className="card-body">
                    <p className="card-text"><a to="route" target="_blank" rel="noopener noreferrer" className="card-text" href="https://gabrielazalta.github.io/work-day-scheduler/">Work Day Scheduler</a>
                    </p>
                    <p className="card-text repo"><a to="route" target="_blank" rel="noopener noreferrer" className="card-text" href="https://github.com/gabrielazalta/work-day-scheduler">View Code</a>
                    </p>
                </div>
            </div>

            <div className="card m-4 project shadow-sm" style= {{ width: "100%", backgroundColor: "#fbefcc9a" }}>
                <img src={buddy} className="card-img-top rounded" alt="buddy"/>
                <div className="card-body">
                    <p className="card-text"><a to="route" target="_blank" rel="noopener noreferrer" className="card-text" href="https://gabrielazalta.github.io/run-buddy/">Run Buddy</a>
                    </p>
                    <p className="card-text repo"><a to="route" target="_blank" rel="noopener noreferrer" className="card-text" href="https://github.com/gabrielazalta/run-buddy">View Code</a>
                    </p>
                </div>
            </div>

        </div>
        <div className="card-deck">
          
            <div className="card m-4 project shadow-sm" style= {{ width: "100%", backgroundColor: "#fbefcc9a" }}>
                <img src={beer} className="card-img-top rounded" alt="draftRoom"/>
                <div className="card-body">
                    <p className="card-text"><a to="route" target="_blank" rel="noopener noreferrer" className="card-text" href="https://sleepy-island-61088.herokuapp.com/">DraftRoom Beer Blog</a>
                    </p>
                    <p className="card-text repo"><a to="route" target="_blank" rel="noopener noreferrer" className="card-text" href="https://github.com/gabrielazalta/draft-room/tree/main">View Code</a>
                    </p>
                </div>
            </div>

            <div className="card m-4 project shadow-sm" style= {{ width: "100%", backgroundColor: "#fbefcc9a" }}>
                <img src={weather} className="card-img-top rounded" alt="weather"/>
                <div className="card-body">
                    <p className="card-text"><a to="route" target="_blank" rel="noopener noreferrer" className="card-text" href="https://gabrielazalta.github.io/weather-dashboard/">Weather Dashboard</a>
                    </p>
                    <p className="card-text repo"><a to="route" target="_blank" rel="noopener noreferrer" className="card-text" href="https://github.com/gabrielazalta/weather-dashboard">View Code</a>
                    </p>
                </div>
            </div>

            <div className="card m-4 project shadow-sm" style= {{ width: "100%", backgroundColor: "#fbefcc9a" }}>
                <img src={fitter} className="card-img-top rounded" alt="fitter"/>
                <div className="card-body">
                    <p className="card-text"><a to="route" target="_blank" rel="noopener noreferrer" className="card-text" href="https://frozen-ravine-95295.herokuapp.com/">Fitter</a>
                    </p>
                    <p className="card-text repo"><a to="route" target="_blank" rel="noopener noreferrer" className="card-text" href="https://github.com/gabrielazalta/fitter">View Code</a>
                    </p>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default projects;
