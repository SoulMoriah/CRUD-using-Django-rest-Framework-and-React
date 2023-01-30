import React from "react";

export default function AddPatient({handleAddSubmit, handleCancelBtn}){
    return(
        <div>
           <h3>Add a patient</h3>
            <form onSubmit={handleAddSubmit}>
                First Name <input type='text' name='first_name'/>
                Last Name <input type='text' name='last_name'/>
                Blood Type <input type='text' name='blood_type'/>
                <button type="submit">Add</button>
                <button onClick={handleCancelBtn}>Cancel</button>
            </form>
        </div>
    )
}