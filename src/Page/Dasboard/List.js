import React from 'react'

function List({ employees, handleEdit, handleDelete }) {

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: null
    });

    return (
        <div className='contain-table'>
            <table className='striped-table'>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name  </th>
                        <th>Email </th>
                        <th>Mobile No </th>
                        <th>Address </th>
                        <th>Father Name  </th>
                        <th>Mother Name </th>
                        <th>Adhar No </th>
                        <th>Date Of Birth </th>
                        <th colSpan={2} className="text-center">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {employees.length > 0 ? (
                        employees.map((employee, i) => (
                            <tr key={employee.id}>
                                <td>{i + 1}</td>
                                <td>{employee.Name}</td>
                                <td>{employee.Email}</td>

                                <td>{employee.Mobile}</td>
                               
                                <td>{employee.Address}</td>
                               
                                <td>{employee.FatherName}</td>
                               
                                <td>{employee.MotherName}</td>

                                <td>{employee.Adhar}</td>

                                <td>{employee.Date} </td>
                                <td className="text-right">
                                    <button
                                        onClick={() => handleEdit(employee.id)}
                                        className="button muted-button"
                                    >
                                        Edit
                                    </button>
                                </td>
                                <td className="text-left">
                                    <button
                                        onClick={() => handleDelete(employee.id)}
                                        className="button muted-button"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={100}>No Employees</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default List