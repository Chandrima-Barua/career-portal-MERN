import React, { Component } from 'react';
import history from './history';
import Confirmation from './confirmation';

export default class FormSubmit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      file: [],
      applicant_name: "",
      email: "",
      phone: "",
      current_company: "",
      linkedin_url: "",
      other_url: "",
      additional: "",
      gender: "",
      race: "",
      vet_status: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    // const value = target.value;
    const name = target.name;
    const value = target.type === 'file' ? target.files[0] : target.value;
    this.setState({
      [name]: value,
    });
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };
  handleSubmit(event) {
    event.preventDefault();
    const file = this.state.file;
    const applicant_name = this.state.applicant_name;
    const email = this.state.email;
    const phone = this.state.phone;
    const current_company = this.state.current_company;
    const linkedin_url = this.state.linkedin_url;
    const other_url = this.state.other_url;
    const additional = this.state.additional;
    const gender = this.state.gender;
    const race = this.state.race;
    const vet_status = this.state.vet_status;

    this.setState({
      step: this.state.step + 1
    });

  }

  render() {

    const { step } = this.state;
    const {
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
    } = this.state;

    const values = {
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
    };
    return (
      <div>
        {(() => {
          switch (step) {
            case 1:
              return (
                <div class="container">
                  <h3>Submit Your Application</h3>
                  <form onSubmit={this.handleSubmit}>

                    <div class="form-group row">
                      <label for="staticEmail" class="col-sm-2 col-form-label">Resume/CV</label>
                      <div class="col-sm-10">
                        <input type="file" name="file"
                          onChange={this.handleChange} className="form-control"
                          required />
                      </div>
                    </div>
                    <br />
                    <div class="form-group row">
                      <label for="staticEmail" class="col-sm-2 col-form-label">Name</label>
                      <div class="col-sm-10">
                        <input type="text" class="form-control-plaintext" name="applicant_name"
                          className="form-control"
                          value={this.state.applicant_name}
                          onChange={this.handleChange}
                          required />
                      </div>
                    </div>

                    <br />
                    <div class="form-group row">
                      <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                      <div class="col-sm-10">
                        <input type="text" className="form-control" name="email"
                          value={this.state.email}
                          onChange={this.handleChange}
                          required />
                      </div>
                    </div>
                    <br />

                    <div className="form-group row">

                      <label for="staticEmail" class="col-sm-2 col-form-label">Phone</label>
                      <div class="col-sm-10">
                        <input type="text" className="form-control" name="phone"
                          value={this.state.phone}
                          onChange={this.handleChange}
                          required />
                      </div>

                    </div>
                    <br />
                    <div className="form-group row">
                      <label for="staticEmail" class="col-sm-2 col-form-label">Current Company: </label>
                      <div class="col-sm-10">
                        <input
                          type="text"
                          className="form-control" name="current_company"
                          value={this.state.current_company}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <br />
                    <div className="form-group row">
                      <label for="staticEmail" class="col-sm-2 col-form-label">Linkedin URL: </label>
                      <div class="col-sm-10">

                        <input
                          type="text"
                          className="form-control" name="linkedin_url"
                          value={this.state.linkedin_url}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <br />
                    <div className="form-group row">
                      <label for="staticEmail" class="col-sm-2 col-form-label">Other Website URL: </label>
                      <div class="col-sm-10">

                        <input
                          type="text"
                          className="form-control" name="other_url"
                          value={this.state.other_url}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <br />
                    <div className="form-group row">
                      <label for="staticEmail" class="col-sm-2 col-form-label">Additional: </label>
                      <div class="col-sm-10">

                        <input
                          type="text"
                          className="form-control" name="additional"
                          value={this.state.additional}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <br />

                    <div class="equal_employment">
                      <h3> US Equal employment</h3>
                      <span>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.

                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

                      </span>

                    </div>
                    <br />
                    <div className="form-group row">
                      <label class="col-sm-2 col-form-label">Gender: </label>
                      <div class="col-sm-10">
                        <select name="gender"
                          value={this.state.gender}
                          onChange={this.handleChange}>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>

                        </select>
                      </div>
                    </div>
                    <br />
                    <div className="form-group row">
                      <label class="col-sm-2 col-form-label">Race: </label>
                      <div class="col-sm-10">
                        <input
                          type="text"
                          className="form-control" name="race"
                          value={this.state.race}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <br />
                    <div className="form-group row">
                      <label class="col-sm-2 col-form-label">Veteran Status: </label>
                      <div class="col-sm-10">
                        <input
                          type="text"
                          className="form-control" name="vet_status"
                          value={this.state.vet_status}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <br />
                    <div className="form-group row">
                      <div class="col-sm-10">
                        <input type="submit" value="Apply for this job" class="btn card_rec_btn" />
                      </div>
                    </div>
                  </form>
                </div>
              );
            case 2:
              return (
                <Confirmation
                  values={values}
                />
              );

          }
        })()}
      </div>
    );
  }
}

