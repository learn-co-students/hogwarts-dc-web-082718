import React from 'react'
//
// require '../hog-imgs';



const Hog = ({
    hog: {
        name,
        specialty,
        'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water': weight,
        'highest medal achieved': medal
    },
    isGreased,
    greasePig
}) => {
    let button;
    if(isGreased){
        button = <button name="greased" onClick={greasePig}>Greased</button>
    }
    else{
        button = <button name="greased" onClick={greasePig}>Not Greased</button>
    }

    return (
        <div key = {name}>
            <h1 className="headerText">{name}</h1>

            <span className="speciality">Specialty: {specialty}</span>
            <br />
            {button}
            <br />
            <p> Weight: {weight} <br/> Highest Medal: {medal}</p>



        </div>
    );
}

export default Hog;
