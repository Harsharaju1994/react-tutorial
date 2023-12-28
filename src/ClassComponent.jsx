import React, { Component } from 'react'

export default class ClassComponent extends Component {
    // state={
    //     name: "Apple 15Pro Max",
    //     price: 149999
    // }

    updatePrice() {
        let p =document.getElementById('up').value;
        
        this.setState({
            price:p
        },()=>{
            console.log(this.state)
        })
        
    }
    constructor(){
        super()
        this.updatePrice=this.updatePrice.bind(this)
        this.state={
            name: "Apple 15Pro Max",
            price: 149999
        }
    }
  render() {
    return (
      <>
        <p>Mobile Name: {this.state.name}</p>
        <p>Price : {this.state.price}</p>

        <input id='up'type='number' />
        {/* <button onClick={()=>{
            let p =document.getElementById('up').value;
            console.log(p);
            this.setState({
                price:p
            })
        }}>Update</button> */}
        <button onClick={this.updatePrice}>Update</button>
      </>
    )
  }
}
