import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Recruitment from "./recruitment";

const data = [

    { "id": "1", "image": "url('https://source.unsplash.com/600x900/?tech,street')", "title": " 01", "text": "Some quick example text to build on the card title and make up the bulk of the card content." },
    { "id": "2", "image": "url('https://source.unsplash.com/600x900/?tree,nature')", "title": " 02", "text": "Some quick example text to build on the card title and make up the bulk of the card content." },
    { "id": "3", "image": "url('https://source.unsplash.com/600x900/?computer,design')", "title": " 03", "text": "Some quick example text to build on the card title and make up the bulk of the card content." },
    { "id": "4", "image": "url('https://source.unsplash.com/600x900/?tech')", "title": " 04", "text": "Some quick example text to build on the card title and make up the bulk of the card content." },


];

export default class CareerType extends Component {
    render() {
        const listItems = data.map((d) =>
            <div class="col-6" key={d.id} style={{ "padding": "5px" }} >
                <div class="card text-white card-has-bg click-col" style={{ "background-image": d.image }} >
                    <img class="card-img d-none" src={d.image} alt="Goverment Lorem Ipsum Sit Amet Consectetur dipisi?" />
                    <div class="card-img-overlay d-flex flex-column">
                        <div class="card-body">
                            <small class="card-meta mb-2">{d.title}</small>
                            <h4 class="card-title mt-0 ">{d.text}</h4>
                            <small><i class="far fa-clock"></i> October 15, 2020</small>
                        </div>
                        <div class="card-footer">
                            <div class="media">
                            <a href="#" class="btn career_button">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
        return (
            <div>
                <div class="container">
                    <div class="row">
                        <span class="career_title">Our Career Type </span>
                        {listItems}
                    </div>
                </div>
                <Recruitment />
            </div>

        );
    }


}







