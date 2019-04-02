import React, { Component } from 'react';

import "../App.css";
import "../App";



class Job extends Component {
  constructor(props) {
    super(props);
    this.state = {
      job: true
    };
  }
  jobClick = () => {
    this.setState({ on: !this.state.on});
    const appLogo = document.querySelector(".App-logo")
    if (this.state.on=== true) {
      appLogo.classList.remove("job-speed")
  } else {
    appLogo.classList.add("job-speed")
  }
  };

  render() {
    const job = this.state.on ? 'job' : 'no-job';
    return (
      <div className="Job">
        <button onClick={this.jobClick}
        className={job} >
        {job.toUpperCase()}
        </button>
       
      </div>
    );
  }
}


export default Job;