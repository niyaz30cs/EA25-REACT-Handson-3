import React, { Component } from 'react'

class ChildCompo extends Component {
  constructor(props){
    super(props);
    console.log(this.props.value);
  }
  render() {
    return (
      <>
      <h1 className='head'>EMPLOYEE FEEDBACK DATA</h1>
        <div className='allCenter'>
        <div className='array'>
        {
          this.props.value.map((item,index)=>{
            return(
              <div key={index} className='arrayData'>
                  <h3>Name:{item.name} | Department:{item.dept} | Rating:{item.rating}</h3>
              </div>
            )
          })
        }
        </div>
        </div>
        <div className='button'>
        <button className='btn' onClick={this.props.toggleFunction}>Go Back</button>
        </div>

      </>
    )
  }
}
export default ChildCompo;
