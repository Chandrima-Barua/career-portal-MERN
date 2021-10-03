import React, { Component } from 'react';
import Apply from './apply';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, useHistory } from "react-router-dom";
import history from './history';
import { Button } from 'react-bootstrap';


const processdata = [

    { "id": "1", "title": "Application", "text": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", "time": "1 week" },
    { "id": "2", "title": "Application", "text": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", "time": "1 week" },
    { "id": "3", "title": "Application", "text": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", "time": "1 week" },
    { "id": "4", "title": "Application", "text": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", "time": "1 week" },
    { "id": "5", "title": "Application", "text": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", "time": "1 week" },


];
export default class RecruitmentProcess extends Component {

    render() {

        const RecruimentItems = processdata.map((d) =>
        <div class="col" key={d.id}>
            <div class="cards process_card"  >

                <div class="card-block px-3">
                    <h4 class="process_title">{d.title}</h4>
                    <p class="card-text">{d.text}</p>
                    <p class="card-text">{d.time}</p>
                    </div>
                </div>
            </div>

        );

        return (
                <div class="container">
                    <h3> Recruitment Process</h3>
                    <div class="row">
                            {RecruimentItems}
                    </div>
                </div>
                );
    }
}

