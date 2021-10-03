import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, useHistory } from "react-router-dom";
import history from './history';
import { Button } from 'react-bootstrap';
import RecruitmentProcess from './recruitment.process';


function Apply() {
    const history = useHistory();

    const handleRoute = () => {
        history.push("/submitform");
    }

        return (
            <div>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="aboutus">
                            <h4 class="aboutus-title">About Us</h4>
                            <p class="aboutus-text">Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in.</p>
                            <p class="aboutus-text">This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem</p>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="aboutus">
                            <h4 class="aboutus-title">About The Role</h4>
                            <p class="aboutus-text">Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in.</p>
                            <p class="aboutus-text">This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem</p>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="aboutus">
                            <h4 class="aboutus-title">What you are good at</h4>
                            <p class="aboutus-text">Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in.</p>
                            <p class="aboutus-text">This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem</p>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="aboutus">
                            <h4 class="aboutus-title">Responsibilities</h4>
                            <p class="aboutus-text">Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in.</p>
                            <p class="aboutus-text">This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem</p>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="aboutus">
                            <h4 class="aboutus-title">Requirments</h4>
                            <p class="aboutus-text">Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in.</p>
                            <p class="aboutus-text">This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem</p>
                        </div>
                    </div>
                </div>
                <button class="btn card_rec_btn" type="button" onClick={handleRoute}>Apply for this job</button>

            
            </div>

            <RecruitmentProcess/>
            </div>


        )
    }

export default Apply;

