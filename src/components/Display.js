import React, { Component } from 'react';

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentData: {},
    };
  }

  componentDidMount() {
    // Call the API to get the student data
    const studentId = '123'; // replace with actual studentId
    fetch(`/student/${studentId}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ studentData: data });
      })
      .catch(console.log);
  }

  render() {
    const { studentData } = this.state;
    return (
      <div>
        <h1>Student Details</h1>
        <p>Student ID: {studentData.studentId}</p>
        <p>Name: {studentData.name}</p>
        // display other student data as needed
      </div>
    );
  }
}

export default Display;