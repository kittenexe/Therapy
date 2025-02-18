import {useState, useEffect} from 'react';

function TherapistDataFtech(){
    const [therapist, setTherapist] = useState(null); //stores therapist data
    const [loading, setLoading] = useState(true); //tracks loading state
    const [error, setError] = useState(null); // tracks error state

    useEffect(() => {
       console.log('Fetching data....');

       fetch("/Mock/TherapistData.json")
        .then((response) => {
            if(!response.ok){
                throw new Error("failed to get data");
            }
            return response.json();
        }).then((data) =>{
            setTherapist(data);
            setLoading(false);
            console.log('Fetched: ', data); //check data, not therapist because thrapist has not been fully initalized yet
        }).catch((error) => {
            setError(" " + error.message);
            setLoading(false);
        });      
    },[])

    if(loading) 
        return(<p>loading data...</p>);

    if(error)
        return(
            <p>Error:  
                <strong style={{color:'red'}}>
                    {error}
                </strong>
            </p>
        );

    return(
        <div>
            <h1>{therapist.name}</h1>
            <p>{therapist.bio}</p>
            <p>
                <strong>
                    Specialization:
                </strong>
                <br/>
                {therapist.specialization}
            </p>
            <h3> Available Appointment Times</h3>
            <ul>
                {therapist.appointmentSchedule.map((x, index) => (
                    <li key={index}>
                        {x}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TherapistDataFtech;