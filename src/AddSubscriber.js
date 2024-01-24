import React,{Component} from "react";
import Header from "./Header";
import './App.css';
import './Addsubscriber.css';
import './common/common.css';

class AddSubscrriber extends Component{
    constructor()
    {
        super();
        this.state={
            id:'',
            name:'',
            Phonenumber:""
        }
        //console.log(this.sate);
    }
    inputHandler=(e)=>{
        const state=this.state;
        state[e.target.name]=e.target.value;
        this.setState(state);
        console.log(this.state);
    }
    render(){
      
        return(
         <div> 
            <Header heading="Add subscriber"/>
            <div className="component-body-container">
                <button className="custom-btn">Back</button>
                <form className="subscriber-form">
                    <label htmlFor="name" className="sub-label">Name:</label><br/>
                    <input id="name" type="text" className="sub-input" name="name" onChange={this.inputHandler}></input><br/><br/>
                    <label htmlFor="phone" className="sub-label">phone-number:</label><br/>
                    <input id="phone" type="text" className="sub-input" name="phone" onChange={this.inputHandler}></input>
                      <div className="subscriber-display">
                        <span className="subscriber-display-heading">subscriber to be added</span><br/>
                        <span className="display">Name: {this.state.name}</span><br/><br/>
                        <span className="display">Phone- number:  {this.state.phone}</span>
                      </div>
                      <button className="custom-btn add-btn">Add</button>
                </form>
            </div>
         </div>
        )
    }
}
 
export default AddSubscrriber;