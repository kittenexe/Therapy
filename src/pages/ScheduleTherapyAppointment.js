import { useState } from "react";

function ScheduleAppointment({availableTimes}){
    const [selectedTime, setSelectedTime] = useState('');
    const [confirmation, setConfirmation] = useState('');

    const handleSubmit=(e) =>{
        e.preventDefault();
        if(selectedTime){
            setConfirmation(`Appointment Booked For: {selectedTime}`);
            selectedTime(''); //reset after booking
        }else{
            alert('Please Set A Time')
        }
    }

    return(
        <div>
            <h3>Schedule An Appointment</h3>
            <form onSubmit={handleSubmit}>
                <label>Set Available Time: </label>
                <select value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)}>
                    <option value="">---Select A Time---</option>
                        {availableTimes.map((x,index) =>(
                            <option key={index} value={x}>
                                {x}
                            </option>
                        ))}                   
                </select>
                <butto type="submit">Book Appointment</butto>
            </form>
            {confirmation && <p>confirmation</p>} 
        </div>
    );
};

export default ScheduleAppointment;