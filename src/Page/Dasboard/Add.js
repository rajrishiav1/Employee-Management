import React, { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2';

function Add({ employees, setEmployees, setIsAdding }) {

    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Mobile, setMobile] = useState('');
    const [Address, setAddress] = useState('');
    const [FatherName, setFatherName] = useState('');
    const [MotherName, setMotherName] = useState('');
    const [Adhar, setAdhar] = useState('');
    const [Date, setDate] = useState('');

    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, [])

    const handleAdd = e => {
        e.preventDefault();
        if (!Name || !Email || !Mobile || !Address || !FatherName || !MotherName  || !Adhar || !Date) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const id = employees.length + 1;
        const newEmployee = {
            id,
            Name,
            Email,
            Mobile,
            Address,
            FatherName,
            MotherName,
            Adhar,
            Date
        }
        employees.push(newEmployee);
        setEmployees(employees);
        setIsAdding(false);

        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `{Name} {FatherName}'s data has been Added.`,
            showConfirmButton: false,
            timer: 1500
        });
    }


    return (
        <div className="small-container">
            <form onSubmit={handleAdd}>
                <h1>Add Employee</h1>
                <label htmlFor="Name">Name </label>
                <input
                    id="Name"
                    type="text"
                    ref={textInput}
                    name="Name"
                    value={Name}
                    onChange={e => setName(e.target.value)}
                />
                
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={Email}
                    onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="salary">Mobile No</label>
                <input
                    id="Mobile"
                    type="number"
                    name="Mobile"
                    value={Mobile}
                    onChange={e => setMobile(e.target.value)}
                />
                <label htmlFor="Address">Address </label>
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
                    id="Mother Name"
                    type="text"
                    name="MotherName"
                    value={MotherName}
                    onChange={e => setMotherName(e.target.value)}
                />


<br></br>
                 <label htmlFor="Adhar">Adhar No</label>
                <input
                    id="Adhar"
                    type="number"
                    name="Adhar No"
                    value={Adhar}
                    onChange={e => setAdhar(e.target.value)}
                />
                <label htmlFor="date">Date Of Birth</label>
                <input
                    id="date"
                    type="date"
                    name="date"
                    value={Date}
                    onChange={e => setDate(e.target.value)}
                />
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Add" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsAdding(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Add