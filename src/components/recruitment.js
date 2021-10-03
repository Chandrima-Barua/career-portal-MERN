import React, { Component } from 'react';
import Apply from './apply';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, useHistory } from "react-router-dom";
import history from './history';
import { Button } from 'react-bootstrap';


const recruitmentdata = [

    { "id": "1", "title": "Card 1", "text": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { "id": "2", "title": "Card 2", "text": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { "id": "3", "title": "Card 3", "text": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { "id": "4", "title": "Card 4", "text": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },


];


const productdata = [

    { "id": "1", "text": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { "id": "2", "text": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { "id": "3", "text": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { "id": "4", "text": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },


];
function Recruitment() {
    const history = useHistory();

    const handleRoute = () => {
        history.push("/apply");
    }

    const RecruimentItems = recruitmentdata.map((d) =>

        <div class="card_rec" key={d.id}>
            <div class="card-body">
            <p class="card-text"> <span><b>{d.id} .</b></span> &nbsp;{d.text}</p>
            <button class="btn card_rec_btn" type="button" onClick={handleRoute}>Apply</button>
            </div>
        </div>

    );

    const ProductItems = productdata.map((d) =>
        <div class="card_rec" key={d.id}>
            <div class="card-body">
               
                <p class="card-text"> <span><b>{d.id} .</b></span> &nbsp;{d.text}</p>
                <button class="btn card_rec_btn" type="button" onClick={handleRoute}>Apply</button>
            </div>
        </div>
    );
    return (
        <div class="container container_recruitment">
            <h3 class="rec_title"> 01 Engineer Recruitment</h3>
            {RecruimentItems}
            <hr />
            <h3> 02 Product</h3>
            {ProductItems}

        </div>
    );
}
export default Recruitment;

