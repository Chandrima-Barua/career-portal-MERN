import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Final from './final';


export default class Confirmation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1

        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({
            step: this.state.step + 1
        });


        let formData = new FormData();    //formdata object
        formData.append('file', this.props.values.file);
        formData.append('applicant_name', this.props.values.applicant_name);
        formData.append('email', this.props.values.email);
        formData.append('phone', this.props.values.phone);
        formData.append('current_company', this.props.values.current_company);
        formData.append('linkedin_url', this.props.values.linkedin_url);
        formData.append('other_url', this.props.values.other_url);
        formData.append('additional', this.props.values.additional);
        formData.append('gender', this.props.values.gender);
        formData.append('race', this.props.values.race);
        formData.append('vet_status', this.props.values.vet_status);

        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }

        let url = "http://localhost:3001/api/savedata"
        axios.post(url, formData, config)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });

    }

    render() {
        const {
            values: {
                file,
                applicant_name,
                email,
                phone,
                current_company,
                linkedin_url,
                other_url,
                additional,
                gender,
                race,
                vet_status
            }
        } = this.props;
        const { step } = this.state;

        return (
            <div>
                {(() => {
                    switch (step) {
                        case 1:
                            return (
                                <div class="container">
                                    <h3>Confirm Your Application</h3>
                                    <form onSubmit={this.handleSubmit}>
                                        <div class="form-group row">
                                            <label>
                                                <input type="file" name="file"
                                                    className="form-control" readOnly hidden />
                                            </label>
                                        </div>
                                        <div class="form-group row">
                                            <label><b>Resume/CV: </b><span> {this.props.values.file.name} </span></label>
                                        </div>
                                        <br />
                                        <div class="form-group row">
                                            <label for="staticEmail" class="col-sm-2 col-form-label">Name</label>
                                            <div class="col-sm-10">
                                                <input type="text" class="form-control-plaintext" name="applicant_name"
                                                    value={applicant_name}
                                                    readOnly />
                                            </div>
                                        </div>
                                        <br />
                                        <div className="form-group row">
                                            <label for="staticEmail" class="col-sm-2 col-form-label">Phone: </label>
                                            <div class="col-sm-10">
                                                <input
                                                    type="text" name="phone"
                                                    class="form-control-plaintext"
                                                    value={phone}
                                                    readOnly />
                                            </div>
                                        </div>
                                        <br />
                                        <div className="form-group row">
                                            <label for="staticEmail" class="col-sm-2 col-form-label">Current Company: </label>
                                            <div class="col-sm-10">

                                                <input
                                                    type="text"
                                                    class="form-control-plaintext" name="current_company"
                                                    value={current_company}
                                                    readOnly />
                                            </div>
                                        </div>
                                        <br />
                                        <div className="form-group row">
                                            <label for="staticEmail" class="col-sm-2 col-form-label">Linkedin URL: </label>
                                            <div class="col-sm-10">

                                                <input
                                                    type="text"
                                                    class="form-control-plaintext" name="linkedin_url"
                                                    value={linkedin_url}
                                                    readOnly />
                                            </div>
                                        </div>
                                        <br />
                                        <div className="form-group row">
                                            <label for="staticEmail" class="col-sm-2 col-form-label">Other Website URL: </label>
                                            <div class="col-sm-10">

                                                <input
                                                    type="text"
                                                    class="form-control-plaintext" name="other_url"
                                                    value={other_url}
                                                    readOnly />
                                            </div>
                                        </div>
                                        <br />
                                        <div className="form-group row">
                                            <label for="staticEmail" class="col-sm-2 col-form-label">Additional: </label>
                                            <div class="col-sm-10">
                                                <input
                                                    type="text"
                                                    class="form-control-plaintext" name="additional"
                                                    value={additional}
                                                    readOnly />
                                            </div>
                                        </div>
                                        <br />
                                        <div className="form-group row">
                                            <label for="staticEmail" class="col-sm-2 col-form-label">Gender: </label>
                                            <div class="col-sm-10">
                                                <select class="form-control-plaintext" name="gender"
                                                    value={gender} readOnly>

                                                    <option defaultValue value={gender}>{gender}</option>
                                                </select>

                                            </div>
                                        </div>
                                        <br />
                                        <div className="form-group row">
                                            <label for="staticEmail" class="col-sm-2 col-form-label">Race: </label>
                                            <div class="col-sm-10">
                                                <input
                                                    type="text"
                                                    class="form-control-plaintext" name="race"
                                                    value={race} readOnly
                                                />
                                            </div>
                                        </div>
                                        <br />
                                        <div className="form-group row">
                                            <label for="staticEmail" class="col-sm-2 col-form-label">Veteran Status: </label>
                                            <div class="col-sm-10">
                                                <input
                                                    type="text"
                                                    class="form-control-plaintext" name="vet_status"
                                                    value={vet_status}
                                                    readOnly
                                                />
                                            </div>
                                        </div>
                                        <br />
                                        <div className="form-group row">
                                            <input type="submit" value="Apply for this job" className="btn card_rec_btn btn-sm" />
                                        </div>
                                    </form>
                                </div>
                            );
                        case 2:
                            return (<Final />);
                    }
                })()}
            </div>
        );
    }

}



