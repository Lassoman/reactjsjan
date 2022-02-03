import React, { Component } from 'react';
import Car from './Cars';

class Mycars extends Component{

    noCopy = () =>{
        alert('merci de ne pas copier le texte');
    }


    render(){
        console.log(this)
        return (
            <div>
                <h1>{this.props.title}</h1>

            <p onCopy={this.noCopy}> 
            There are many variations of passages of Lorem Ipsum available.
            </p>

                <Car color="red">Ford</Car>
                <Car>Mercedes</Car>
                <Car color="green"></Car>

            </div>
        )
    }
}

export default Mycars;