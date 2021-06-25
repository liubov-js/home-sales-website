import React, { Component } from 'react';
import axios from 'axios';

import HomePreview from '../HomePreview/HomePreview';
import './Homes.css';

class Homes extends Component {
    constructor (props) {
        super(props);
        this.state = {
            homes: [],
            filtredHomes: null,
        };
        this.onKeyUpValue = this.onKeyUpValue.bind(this);
    }

    onKeyUpValue(event) {
        let filtredHomes = null;
        if (event.target.value.length >= 3) {
            filtredHomes = this.state.homes.filter(home => home.title.toLowerCase().includes(event.target.value.toLowerCase()));
        }
        this.setState({filtredHomes});
    }

    componentDidMount() {
        axios.get('https://603e38c548171b0017b2ecf7.mockapi.io/homes')
            .then((response) => {
                this.setState({homes: response.data});
            })
    }

    render () {
 
        return (
            <div>
                <h1 className="Header">Our Latest Developments</h1>
                <div className="Page">
                    <div>
                        <strong className="Filter">Filter</strong>
                        <input 
                            className="Input" 
                            type="text"
                            onKeyUp={this.onKeyUpValue}
                        />
                    </div>
                    <div className="Homes">{(this.state.filtredHomes || this.state.homes).map(home => <HomePreview key={home.id} {...home} />)}</div>    
                    <button className="Button">See more <span className="ButtonArrow">〉</span></button> 
                </div>
            </div> 
        );
    }
}

export default Homes;
