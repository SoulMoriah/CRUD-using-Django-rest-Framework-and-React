import React, { useEffect, useState } from "react";
import { getpatient, addpatient, editpatient, deletepatient } from "../services/ApiService";
import AddPatient from "./AddPatient";
import EditPatient from "./EditPatient";

export default function PatientList(){

    const [patients, setPatients] = useState([])
    const [showAddPatientForm, setShowAddPatientForm] = useState(false)
    const [showEditPatientForm, setShowEditPatientForm] = useState(false)
    const [selectedEditData, setSelectedEditData] = useState()
    

    useEffect(()=>{
        let mount = true
        getpatient()
        .then(res=>{
            console.log("res from api",res)
            setPatients(res)
            return()=> mount = false
        })
    },[])

    const handleAddSubmit =(e) =>{
        addpatient(e.target)
        .then(res =>{
            setPatients(res)
        })
    }

    const handleEditBtn = (patient) =>{
        setSelectedEditData(patient)
        
        setShowEditPatientForm(true)
        console.log(patient);
        setShowAddPatientForm(false)
    }

    const handleEditSubmit = (e, id) =>{
        editpatient(id, e.target)
        .then(res=>{
            setPatients(res)
        })
    }

    const handleDeleteBtn = (id) =>{
        deletepatient(id)
        .then(res=>{
            setPatients(patients.filter(p=>p.url !== "http://127.0.0.1:8000/patient/"+id+"/"))
        })
    }

    function handleCancelBtn(){
        setShowAddPatientForm(false)
    }

    function handleEditCancelBtn(){
        setShowEditPatientForm(false)
    }

    return(
        <div className="tableau">
            <h3>PATIENT LIST</h3>
            <table border="2px">
                <thead>
                    <tr>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Blood Type</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {patients.map(patient =>{
                        let ur = patient.url
                        let partage = ur.split('/')
                        let tail = partage[partage.length-2]
                        // console.log('elem '+tail);
                        return <tr key={tail}>
                            <td>{patient.first_name}</td>
                            <td>{patient.last_name}</td>
                            <td>{patient.blood_type}</td>
                            <td>
                                <button onClick={()=>handleEditBtn(patient)}>Edit</button> 
                                <button onClick={()=>handleDeleteBtn(tail)}>Delete</button>
                            </td>
                        </tr>

                    })}
                </tbody>
            </table>
            <button onClick={()=>setShowAddPatientForm(true)}>Add New</button>
            {showAddPatientForm && <AddPatient handleAddSubmit={handleAddSubmit} handleCancelBtn={handleCancelBtn} />}
            {showEditPatientForm && <EditPatient handleEditSubmit={handleEditSubmit} selectedEditData={selectedEditData} handleEditCancelBtn={handleEditCancelBtn} />}
        </div>
    )
}