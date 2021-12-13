import React, { Component,createRef  } from 'react';


export class Refs extends Component {

    constructor(){
        super();
        this.state={
            show:false
        }
        this.inputRefs=createRef();
    }

    // componentDidMount(){
    //     console.log(this.inputRefs.current.value="1000")
    // }

    Submit(){
        let name =  this.inputRefs.current.value 
        this.inputRefs.current.style.color="red";
        this.inputRefs.current.style.backgroundColor="black";
    name ===""? alert('plz fill the data') : this.setState({show:true})
    }


    render() {
        return (
            <>
           <div>
               <h1>Refs in React</h1>
               <input type="text" ref={this.inputRefs} />
               <button onClick={() => this.Submit()} >Check Ref</button>
               </div> 
               <p> {this.state.show ? `your name is ${this.inputRefs.current.value}`: ""} </p>
            </>
        )
    }
}

export default Refs
