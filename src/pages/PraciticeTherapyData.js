import {useState, useEffect} from 'react';

function TherapistLanding(){
    const [therapist, setTherapist] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('fetching therapist data...');
        //simulating API call with timeout
        setTimeout(() => {

            const TherapistData = {
                name: 'monique landrum',
                bio: 'An experienced therapist for over 8 years, monique landrum is offering her services in child behavioral therapy.',
                specialization: 'Anxiety, ADD, ADHD, Depression, Executive Disfunction'
            };

            setTherapist(TherapistData);
            console.log(" Fetched: ", therapist); //log check inside useEffect when the data is loaded
            setLoading(false);
        }, 2000); //2 second delay
        
    },[])

    if(loading) 
        return(<p>loading...</p>);

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
        </div>
    );
};

export default TherapistLanding;