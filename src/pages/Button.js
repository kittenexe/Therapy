import React, {useState, useEffect} from 'react';

function ButtonLS(){
    const [incr, setIncr] = useState(0);

    useEffect(() =>{
        console.log("increased by ", incr);
    },[incr])

    return(
        <button onClick={() => setIncr(incr+1)}> Because im the MOON {incr}</button>
    );
}

export default ButtonLS;