import React, { useState } from 'react'
import Swal from 'sweetalert2';

function Edit({ employees, selectedEmployee, setEmployees, setIsEditing }) {

    const id = selectedEmployee.id;

    const [Name, setName] = useState(selectedEmployee.Name);
    const [Email, setEmail] = useState(selectedEmployee.Email);
    const [Mobile, setMobile] = useState(selectedEmployee.Mobile);
    const [Address, setAddress] = useState(selectedEmployee.Address);
    const [FatherName, setFatherName] = useState(selectedEmployee.FatherName);
    const [MotherName, setMotherName] = useState(selectedEmployee.MotherName);
    const [Adhar, setAdhar] = useState(selectedEmployee.Adhar);
    const [Date, setDate] = useState(selectedEmployee.Date);


    const handleUpdate = e => {
        e.preventDefault();

        if (!Name || !Email || !Mobile || !Address || !FatherName || !MotherName  || !Adhar || !Date) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const employee = {
            id,
            Name,
            Email,
            Mobile,
            Address,
            FatherName,
            MotherName,
            Adhar,
            Date
        };

        for (let i = 0; i < employees.length; i++) {
            if (employees[i].id === id) {
                employees.splice(i, 1, employee);
                break;
            }
        }

        setEmployees(employees);
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `{employee.Name} {employee.FatherName}'s data has been updated.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <div className="small-container">
            <form onSubmit={handleUpdate}>
                <h1>Edit Employee</h1>
                <label htmlFor="Name">Name</label>
                <input
                    id="Name"
                    type="text"
                    name="Name"
                    value={Name}
                    onChange={e => setName(e.target.value)}
                />
                
                <label htmlFor="Email">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={Email}
                    onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="Mobile">Mobile No</label>
                <input
                    id="Mobile"
                    type="number"
                    name="Mobile"
                    value={Mobile}
                    onChange={e => setMobile(e.target.value)}
                />

                <label htmlFor="Address">Address</label>
                <input
                    id="Address"
                    type="text"
                    name="Address"
                    value={Address}
                    onChange={e => setAddress(e.target.value)}
                />

                <label htmlFor="FatherName">Father Name</label>
                <input
                    id="FatherName"
                    type="text"
                    name="FatherName"
                    value={FatherName}
                    onChange={e => setFatherName(e.target.value)}
                />
                <label htmlFor="MotherName">Mother Name</label>
                <input
                    id="MotherName"
                    type="text"
                    name="MotherName"
                    value={MotherName}
                    onChange={e => setMotherName(e.target.value)}
                />


                <label htmlFor="Adhar">Adhar No</label>
                <input
                    id="Adhar"
                    type="number"
                    name="Adhar"
                    value={Adhar}
                    onChange={e => setAdhar(e.target.value)}
                />






                <label htmlFor="date">Date</label>
                <input
                    id="date"
                    type="date"
                    name="date"
                    value={Date}
                    onChange={e => setDate(e.target.value)}
                />
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Update" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsEditing(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Edit