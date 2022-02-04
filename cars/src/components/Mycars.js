import React, { Component } from 'react';
import Car from './Cars';

class Mycars extends Component{

    noCopy = () =>{
        alert('merci de ne pas copier le texte');
    }

    addStyle = (e) => {
        console.log(e.target);
        e.target.classList.add('styled');
    }
    removeStyle = (e) => {
        console.log(e.target);
        e.target.classList.remove('styled');
    }

    render(){
        console.log(this)
        return (
            <div>
                <h1 onMouseOver={this.addStyle} onMouseLeave={this.removeStyle}>{this.props.title}</h1>

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