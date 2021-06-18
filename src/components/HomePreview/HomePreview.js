import React from 'react';
import { Link } from 'react-router-dom';

import images from '../../images.json';
import './HomePreview.css';

const homePreview = (props) => (
    <Link className="LinkToFullPost" to={`/details/${props.id}`}>
        <article className="HomePreview" onClick={props.clicked}>
            <img className="Image" src={(images.find(img => img.homeId === +props.id).image)} alt={props.title}/>
            {props.type === "IndependentLiving" ? 
                <p className="Independent">Independent living</p> : 
                <p className="Support">Restaurant & Support available</p>
            }
            <div className="Info">
                <h3 className="Title">{props.title}</h3>  
                <p className="Address">{props.address}</p>
                <p className="NewProperties">New Properties for Sale from <strong>£{props.price.toLocaleString('en-US')}</strong></p>
                <p className="Ownership">Shared Ownership Available</p>
            </div>
        </article>
    </Link>
);

export default homePreview;
