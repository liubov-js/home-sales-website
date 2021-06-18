import React, { Component } from 'react';
import axios from 'axios';

import HomePreview from '../HomePreview/HomePreview';
import './Homes.css';
import images from '../../images.json';

class Homes extends Component {
    constructor (props) {
        super(props);
        this.state = {
            homes: [],
            images: [],
            filtredHomes: null,
        };
    }

    onKeyUpValue(event) {
        let filtredHomes = null;
        if (event.target.value.length >= 3) {
            filtredHomes = this.state.homes.filter(home => home.title.toLowerCase().includes(event.target.value.toLowerCase()));
        }
        this.setState({filtredHomes});
    }

    loadImages() {
        this.setState({images})
    }

    componentDidMount() {
        axios.get('https://603e38c548171b0017b2ecf7.mockapi.io/homes')
            .then((response) => {
                this.setState({homes: response.data});
            })
        this.loadImages();
    }

    render () {
 
        return (
            <div>
                <h1 className="Header">Our Latest Developments</h1>
                <div className="Filter">
                    <strong>Filter</strong>
                    <input 
                        className="Input" 
                        type="text"
                        onKeyUp={this.onKeyUpValue.bind(this)}
                    />
                </div>
                <div className="Homes">{(this.state.filtredHomes || this.state.homes).map(home => <HomePreview key={home.id} {...home} />)}</div>
                <button className="Button">See more <span className="ButtonArrow">〉</span></button> 
            </div> 
        );
    }
}

export default Homes;
