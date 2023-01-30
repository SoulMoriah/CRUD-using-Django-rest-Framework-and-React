import React from "react";

export default function EditPatient({handleEditSubmit, selectedEditData, handleEditCancelBtn}){
    let ur = selectedEditData.url
    let partage = ur.split('/')
    let tail = partage[partage.length-2]
    return(
        <div>
           <h3>Edit the patient</h3>
            <form onSubmit={(e)=>handleEditSubmit(e,tail)}>
                First Name <input type='text' name='first_name' defaultValue={selectedEditData.first_name}/>
                Last Name <input type='text' name='last_name' defaultValue={selectedEditData.last_name}/>
                Blood Type <input type='text' name='blood_type' defaultValue={selectedEditData.blood_type}/>
                <button type="submit">Edit</button>
                <button onClick={handleEditCancelBtn}>Cancel</button>
            </form>
        </div>
    )
}