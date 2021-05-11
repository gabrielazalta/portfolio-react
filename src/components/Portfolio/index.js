import React from 'react';
import beer from "../../assets/images/beer.JPG";
import buddy from "../../assets/images/buddy.JPG";
import book from "../../assets/images/book.JPG";
import fitter from "../../assets/images/fitter.JPG";
import shop from "../../assets/images/shop.JPG";
import tech from "../../assets/images/tech.JPG";

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
                <img src={fitter} className="card-img-top rounded" alt="fitter"/>
                <div className="card-body">
                    <p className="card-text"><a to="route" target="_blank" rel="noopener noreferrer" className="card-text" href="https://frozen-ravine-95295.herokuapp.com/">Fitter</a>
                    </p>
                    <p className="card-text repo"><a to="route" target="_blank" rel="noopener noreferrer" className="card-text" href="https://github.com/gabrielazalta/fitter">View Code</a>
                    </p>
                </div>
            </div>

            <div className="card m-4 project shadow-sm" style= {{ width: "100%", backgroundColor: "#fbefcc9a" }}>
                <img src={shop} className="card-img-top rounded" alt="scheduler"/>
                <div className="card-body">
                    <p className="card-text"><a to="route" target="_blank" rel="noopener noreferrer" className="card-text" href="https://shielded-basin-58781.herokuapp.com/">Shop-Shop</a>
                    </p>
                    <p className="card-text repo"><a to="route" target="_blank" rel="noopener noreferrer" className="card-text" href="https://github.com/gabrielazalta/shop-shop">View Code</a>
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
                <img src={tech} className="card-img-top rounded" alt="tech"/>
                <div className="card-body">
                    <p className="card-text"><a to="route" target="_blank" rel="noopener noreferrer" className="card-text" href="https://sheltered-beach-17644.herokuapp.com/">Tech Blog</a>
                    </p>
                    <p className="card-text repo"><a to="route" target="_blank" rel="noopener noreferrer" className="card-text" href="https://github.com/gabrielazalta/tech-blog">View Code</a>
                    </p>
                </div>
            </div>

            <div className="card m-4 project shadow-sm" style= {{ width: "100%", backgroundColor: "#fbefcc9a" }}>
                <img src={book} className="card-img-top rounded" alt="book"/>
                <div className="card-body">
                    <p className="card-text"><a to="route" target="_blank" rel="noopener noreferrer" className="card-text" href="https://thawing-shelf-30967.herokuapp.com/">Book Search Engine</a>
                    </p>
                    <p className="card-text repo"><a to="route" target="_blank" rel="noopener noreferrer" className="card-text" href="https://github.com/gabrielazalta/book-search-engine">View Code</a>
                    </p>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default projects;
