import React, { Component } from 'react'
import ChildCompo from './ChildCompo';

class ParentCompo extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      dept: "",
      rating: "",
      click: true,
      error: {},
      userData: []
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }


  handleClick = () => {
    const newObj = {
      name: this.state.name,
      dept: this.state.dept,
      rating: this.state.rating
    }

    this.state.userData.push(newObj);
    this.setState({
      userData: this.state.userData,
      name: "",
      dept: "",
      rating: "",
      click: false
    })
    console.log(this.state.userData);
    console.log(this.state.error.name);
    console.log(this.state.error.rating);
    console.log(this.state.error.dept);
  }

  toggleFunction = () => {
    this.setState({ click: !this.state.click })
  }

  render() {
    return (
      <>
        {
          this.state.click ?
            <form className='form'>
              <h1 className='head'>EMPLOYEE FEEDBACK FORM</h1>

              <div className='inputArea'>
                <label htmlFor='name'><span className='span'>Name:</span></label>
                <input id='name' type='text' className='input' name='name' value={this.state.name} placeholder='Enter Your Name' onChange={this.handleChange} />
              </div>
              
              <div className='inputArea'>
                <label htmlFor='dept'><span className='span'>Department:</span></label>
                <input id='dept' type='text' className='input' name='dept' value={this.state.dept} placeholder='Enter Your Department' onChange={this.handleChange} />
              </div>

              <div className='inputArea'>
                <label htmlFor='rating'><span className='span'>Rating:</span></label>
                <input id='rating' type='number' className='input' name='rating' value={this.state.rating} placeholder='Enter Your Rating' onChange={this.handleChange} />
              </div>
              <button type='button' className='btn' onClick={this.handleClick}>Submit</button>
            </form>
            :
            <ChildCompo value={this.state.userData} toggleFunction={this.toggleFunction} />
        }
      </>
    )
  }
}
export default ParentCompo;
