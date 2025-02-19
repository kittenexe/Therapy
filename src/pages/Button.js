import React, {useState, useEffect} from 'react';

function ButtonLS(){
    const [incr, setIncr] = useState(0);

    useEffect(() =>{
        console.log("paitients increased by ", incr);
    },[incr])

    return(
        <button onClick={() => setIncr(incr+1)}> Number of Patients {incr}</button>
    );
}

export default ButtonLS;