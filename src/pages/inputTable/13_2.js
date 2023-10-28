import React, { useState, useEffect, useRef } from 'react'
import '../../App.scss'
import Add from '../../assets/images/Add.png'
import Delete from '../../assets/images/Delete.png'
function FranchisesAverage({ onChange }) {
    const currentRef = useRef()
    const [rows, setRows] = useState([
        {
            id: 0,
            Franchisee: '1',
            Type: 'Food outlet',
            sa: '100',
            factor: '300'
        },
        {
            id: 1,
            Franchisee: '2',
            Type: 'Food outlet',
            sa: '150',
            factor: '300'
        },
        {
            id: 2,
            Franchisee: '3',
            Type: 'Clothing outlet',
            sa: '400',
            factor: '100'
        },
        {
            id: 3,
            Franchisee: '4',
            Type: 'Clothing outlet',
            sa: '700',
            factor: '100'
        },
        {
            id: 4,
            Franchisee: '5',
            Type: 'Clothing outlet',
            sa: '500',
            factor: '100'
        },
    ])
    currentRef.current = false;
    useEffect(() => {
        const jsonData = localStorage.getItem('temp_rows_13_2');
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
            sum += parseFloat(row.sa) * parseFloat(row.factor);
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
                            <th>Franchisee</th>
                            <th>Type</th>
                            <th>Shop area (m2) </th>
                            <th>Emission factor (kg CO2e/m2/year)</th>
                        </tr>
                        {rows.map((row) =>
                            <tr>
                                <td><input type='text' value={row.Franchisee} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        const newData = prev.map(i => {
                                            if (i.id === row.id) {
                                                i.Franchisee = e.target.value
                                            }
                                            return i;
                                        })
                                        localStorage.setItem('temp_rows_13_2', JSON.stringify(newData));
                                        return newData;
                                    })
                                }} /></td>
                                <td><input type='text' value={row.Type} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        const newData = prev.map(i => {
                                            if (i.id === row.id) {
                                                i.Type = e.target.value
                                            }
                                            return i;
                                        })
                                        localStorage.setItem('temp_rows_13_2', JSON.stringify(newData));
                                        return newData;
                                    })

                                }} /></td>
                                <td><input type='text' value={row.sa} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        const newData = prev.map(i => {
                                            if (i.id === row.id) {
                                                i.sa = e.target.value
                                            }
                                            return i;
                                        })
                                        localStorage.setItem('temp_rows_13_2', JSON.stringify(newData));
                                        return newData;
                                    })

                                }} /></td>
                                <td className='AddStyle'>
                                    <input type='text' value={row.factor} className='Input_form' onChange={(e) => {
                                        setRows(prev => {
                                            const newData = prev.map(i => {
                                                if (i.id === row.id) {
                                                    i.factor = e.target.value
                                                }
                                                return i;
                                            })
                                            localStorage.setItem('temp_rows_13_2', JSON.stringify(newData));
                                            return newData;
                                        })
                                    }} />
                                    <img src={Add} alt='Add' className='AddButton' onClick={() => {
                                        setRows(prev => {
                                            const newRow = {
                                                id: Date.now(),
                                                Franchisee: '',
                                                Type: '',
                                                sa: '',
                                                factor: ''
                                            }
                                            let pos = prev.indexOf(prev.find(item => item.id === row.id)) + 1

                                            const newData = [].concat(prev.slice(0, pos), newRow, prev.slice(pos))
                                            localStorage.setItem('temp_rows_13_2', JSON.stringify(newData));
                                            return newData;
                                        })
                                    }
                                    } />
                                    <img src={Delete} alt='Delete' className='AddButton' onClick={() => {
                                        setRows(prev => {
                                            let pos = prev.indexOf(prev.find(item => item.id == row.id))
                                            const newData = [].concat(prev.slice(0, pos), prev.slice(pos + 1))
                                            localStorage.setItem('temp_rows_13_2', JSON.stringify(newData));
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

export default FranchisesAverage