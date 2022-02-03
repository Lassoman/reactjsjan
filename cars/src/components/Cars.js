import React from 'react';

// const car = function(){

//}



// const Car = (props) => {

//     console.log(props)
   
//     return(
//         <div style= { {
//             backgroundColor : 'pink',
//             width: '400px',
//             padding: '10px',
//             margin: '5px auto'
//         } }>
//             <p>Marque: {props.children} </p>
//             <p>Couleur: {props.color}</p>
//         </div>
//     )
// }

// AUTRE POSSIBILITE DECRITURE

const Car = ({ children, color}) => {

   const colorInfo = color ? (<p>Couleur: {color}</p>) : (  <p>Couleur: Néant</p>);
   if(children) {
    return(
        <div style= { {
            backgroundColor : 'pink',
            width: '400px',
            padding: '10px',
            margin: '5px auto',
            borderRadius : '8px',

        } }>
            <p>Marque: {children} </p>
            {colorInfo}
        </div>
    )
   }else{
       
        return (
            <div style= { {
                backgroundColor : 'pink',
                width: '400px',
                padding: '10px',
                margin: '5px auto',
                borderRadius : '8px',
    
            } }>
        <p>Pas de données !</p>
        </div>
        )
   }
    
}

export default Car;