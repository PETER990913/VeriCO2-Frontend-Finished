import React, { useState, useEffect, useRef } from 'react'
import '../../App.scss'
import Add from '../../assets/images/Add.png'
import Delete from '../../assets/images/Delete.png'
function EmployeeDistance({ onChange }) {
    const currentRef = useRef()
    const [rows, setRows] = useState([
        {
            id: 0,
            Employee: 'A',
            rc: '5',
            owd: '100',
            ref: '0.1',
            cc: '0',
            cef: '0.2',
            odc: '0',
        },
        {
            id: 1,
            Employee: 'B',
            rc: '4',
            owd: '100',
            ref: '0.1',
            cc: '1',
            cef: '0.2',
            odc: '150',
        },
        {
            id: 2,
            Employee: 'C',
            rc: '0',
            owd: '0',
            ref: '0.1',
            cc: '5',
            cef: '0.2',
            odc: '200',
        },
    ])
    currentRef.current = false;
    useEffect(() => {
        const jsonData = localStorage.getItem('temp_rows_6_1');
        if (!jsonData) return;
        try {
            const _rows = JSON.parse(jsonData)
            setRows(_rows)
        } catch {

        }
    }, [])

    useEffect(() => {
        let sum = 0
        rows.forEach(row => {
            sum += (parseFloat(row.rc) * parseFloat(row.owd) * parseFloat(row.ref) + parseFloat(row.cc) * parseFloat(row.cef) * parseFloat(row.odc)) * 2 * 48;
        })
        onChange(sum)
        console.log(sum);
    }, [rows])


    return (
        // <div className='SignupPage' onClick={() => setfake1(true)}>
        <div className='container'>
            <span className='title'>Input Data</span>
            <div className='table-container'>
                <table>
                    <tbody>
                        <tr>
                            <th>Employee</th>
                            <th> Rail commute (times per week)</th>
                            <th>One way distance by rail(km)</th>
                            <th>Rail emission factor</th>
                            <th>Car commute </th>
                            <th>Car emission factor</th>
                            <th>One way distance by car</th>
                        </tr>
                        {rows.map((row) =>
                            <tr>
                                <td><input type='text' value={row.Employee} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        const newData = prev.map(i => {
                                            if (i.id === row.id) {
                                                i.Employee = e.target.value
                                            }
                                            return i;
                                        })
                                        localStorage.setItem('temp_rows_6_1', JSON.stringify(newData));
                                        return newData;
                                    })
                                }} /></td>
                                <td><input type='text' value={row.rc} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        const newData = prev.map(i => {
                                            if (i.id === row.id) {
                                                i.rc = e.target.value
                                            }
                                            return i;
                                        })
                                        localStorage.setItem('temp_rows_6_1', JSON.stringify(newData));
                                        return newData;
                                    })

                                }} /></td>
                                <td><input type='text' value={row.owd} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        const newData = prev.map(i => {
                                            if (i.id === row.id) {
                                                i.owd = e.target.value
                                            }
                                            return i;
                                        })
                                        localStorage.setItem('temp_rows_6_1', JSON.stringify(newData));
                                        return newData;
                                    })
                                }} /></td>
                                <td><input type='text' value={row.ref} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        const newData = prev.map(i => {
                                            if (i.id === row.id) {
                                                i.ref = e.target.value
                                            }
                                            return i;
                                        })
                                        localStorage.setItem('temp_rows_6_1', JSON.stringify(newData));
                                        return newData;
                                    })
                                }} /></td>
                                <td><input type='text' value={row.cc} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        const newData = prev.map(i => {
                                            if (i.id === row.id) {
                                                i.cc = e.target.value
                                            }
                                            return i;
                                        })
                                        localStorage.setItem('temp_rows_6_1', JSON.stringify(newData));
                                        return newData;
                                    })
                                }} /></td>
                                <td><input type='text' value={row.cef} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        const newData = prev.map(i => {
                                            if (i.id === row.id) {
                                                i.cef = e.target.value
                                            }
                                            return i;
                                        })
                                        localStorage.setItem('temp_rows_6_1', JSON.stringify(newData));
                                        return newData;
                                    })
                                }} /></td>
                                <td className='AddStyle'>
                                    <input type='text' value={row.odc} className='Input_form' onChange={(e) => {
                                        setRows(prev => {
                                            const newData = prev.map(i => {
                                                if (i.id === row.id) {
                                                    i.odc = e.target.value
                                                }
                                                return i;
                                            })
                                            localStorage.setItem('temp_rows_6_1', JSON.stringify(newData));
                                            return newData;
                                        })

                                    }} />
                                    <img src={Add} alt='Add' className='AddButton' onClick={() => {
                                        setRows(prev => {
                                            const newRow = {
                                                id: Date.now(),
                                                Employee: '',
                                                rc: '',
                                                owd: '',
                                                ref: '',
                                                cc: '',
                                                cef: '',
                                                odc: ''
                                            }
                                            let pos = prev.indexOf(prev.find(item => item.id === row.id)) + 1

                                            const newData = [].concat(prev.slice(0, pos), newRow, prev.slice(pos))
                                            localStorage.setItem('temp_rows_6_1', JSON.stringify(newData));
                                            return newData;
                                        })
                                    }
                                    } />
                                    <img src={Delete} alt='Delete' className='AddButton' onClick={() => {
                                        setRows(prev => {
                                            let pos = prev.indexOf(prev.find(item => item.id == row.id))
                                            const newData = [].concat(prev.slice(0, pos), prev.slice(pos + 1))
                                            localStorage.setItem('temp_rows_6_1', JSON.stringify(newData));
                                            return newData;
                                        })
                                    }} />
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default EmployeeDistance