import React from "react";
import './resources.css';
import paper from '../assets/paper.png';
import books from '../assets/books.png';
import video from '../assets/video.png';

function Resources(){
    return(
        <div className="resources">
            <h3>Resources</h3>
            <div className="resources-cards">
                <div className="resource-card">
                    <img src={books} alt="Books"  className="img"/>
                    <p>Books</p>
                </div>
                <div className="resource-card">
                    <img src={video} alt="Videos" className="img"/>
                    <p>Videos</p>
                </div>
                <div className="resource-card">
                    <img src={paper} alt="Papers" className="img"/>
                    <p>Papers</p>
                </div>
            </div>
      </div>

    );
}

export default Resources;