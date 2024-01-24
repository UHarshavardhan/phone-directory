import React, { Component } from 'react';
import Header from './Header'; 
import './App.css';

class App extends Component{ 


  constructor(){
    
      super();
      this.state={
      subscriberList:[]
   
    }
  }
  
  render() {
    // let subscribers=[
    //   {
    //   id :1,
    //    name:"shilpa",
    //    phone:"88888899"
    //   },
    //   {
    //     id:2,
    //            name:"raju",
    //            phone:"9999999"
    //   }
  //]

  
  return (
   
    <div>

    <Header heading="Phone Directory"/>
 <div className='component-body-container '>
  <button className='custom-btn add-btnn'>Add </button>
  <div className='grid-container heading-container'>
    <span className='grid-item name-heading'>Name</span>
    <span className='grid-item phone-heading'>Phone</span>
    </div>
 
 {
     this.state.subscriberList.map(sub => {
return( <div key={sub.id} className="grid-container">
  
 <span className='grid-item'>{sub.name}</span>
 <span className='grid-item'>{sub.phone}</span>
 <button className='custom-btn delete'>Delete</button>

</div>
);
 })

}


  </div>
      </div>
  );
}
}
export default App;
