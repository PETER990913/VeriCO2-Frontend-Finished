import React, { useState, useEffect, useRef } from 'react'
import '../../App.scss'
import Add from '../../assets/images/Add.png'
import Delete from '../../assets/images/Delete.png'
function UseIndirect({ onChange }) {
    const currentRef = useRef()
    const [rows, setRows] = useState([
        {
            id: 0,
            Setting: '30°C cotton wash',
            lup: '1000',
            cts: '20',
            ps: '2000',
            ecu: '0.4',
            factor: '0.5',
        },
        {
            id: 1,
            Setting: '40°C cotton wash',
            lup: '1000',
            cts: '40',
            ps: '2000',
            ecu: '0.5',
            factor: '0.5',
        },
        {
            id: 2,
            Setting: '90°C cotton wash',
            lup: '1000',
            cts: '40',
            ps: '2000',
            ecu: '1.2',
            factor: '0.5',
        },
    ])
    currentRef.current = false;
    useEffect(() => {
        const jsonData = localStorage.getItem('temp_rows_10_2');
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
            sum += parseFloat(row.lup) * parseFloat(row.cts) * parseFloat(row.ps) * parseFloat(row.ecu) * parseFloat(row.factor) / 100;
        })
        onChange(sum)
    }, [rows])

    return (
        // <div className='SignupPage' onClick={() => setfake1(true)}>
        <div className='container'>
            <span className='title'>Input Data</span>
            <div className='table-container'>
                <table>
                    <tbody>
                        <tr>
                            <th>Usage  temperature setting</th>
                            <th>Lifetime uses per product (washes)</th>
                            <th>Consumers using temperature setting (percent)</th>
                            <th>Products sold</th>
                            <th>Electricity consumed per use (KWh)</th>
                            <th>Emission factor (KgCO2e/KWh)</th>
                        </tr>
                        {rows.map((row) =>
                            <tr>
                                <td><input type='text' value={row.Setting} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        const newData = prev.map(i => {
                                            if (i.id === row.id) {
                                                i.Setting = e.target.value
                                            }
                                            return i;
                                        })
                                        localStorage.setItem('temp_rows_10_2', JSON.stringify(newData));
                                        return newData;
                                    })
                                }} /></td>
                                <td><input type='text' value={row.lup} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        const newData = prev.map(i => {
                                            if (i.id === row.id) {
                                                i.lup = e.target.value
                                            }
                                            return i;
                                        })
                                        localStorage.setItem('temp_rows_10_2', JSON.stringify(newData));
                                        return newData;
                                    })
                                }} /></td>
                                <td><input type='text' value={row.cts} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        const newData = prev.map(i => {
                                            if (i.id === row.id) {
                                                i.cts = e.target.value
                                            }
                                            return i;
                                        })
                                        localStorage.setItem('temp_rows_10_2', JSON.stringify(newData));
                                        return newData;
                                    })
                                }} /></td>
                                <td><input type='text' value={row.ps} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        const newData = prev.map(i => {
                                            if (i.id === row.id) {
                                                i.ps = e.target.value
                                            }
                                            return i;
                                        })
                                        localStorage.setItem('temp_rows_10_2', JSON.stringify(newData));
                                        return newData;
                                    })
                                }} /></td>
                                <td><input type='text' value={row.ecu} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        const newData = prev.map(i => {
                                            if (i.id === row.id) {
                                                i.ecu = e.target.value
                                            }
                                            return i;
                                        })
                                        localStorage.setItem('temp_rows_10_2', JSON.stringify(newData));
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
                                            localStorage.setItem('temp_rows_10_2', JSON.stringify(newData));
                                            return newData;
                                        })
                                    }} />
                                    <img src={Add} alt='Add' className='AddButton' onClick={() => {
                                        setRows(prev => {
                                            const newRow = {
                                                id: Date.now(),
                                                Setting: '',
                                                lup: '',
                                                cts: '',
                                                ps: '',
                                                ecu: '',
                                                factor: ''
                                            }
                                            let pos = prev.indexOf(prev.find(item => item.id === row.id)) + 1

                                            const newData = [].concat(prev.slice(0, pos), newRow, prev.slice(pos))
                                            localStorage.setItem('temp_rows_10_2', JSON.stringify(newData));
                                            return newData;
                                        })
                                    }
                                    } />
                                    <img src={Delete} alt='Delete' className='AddButton' onClick={() => {
                                        setRows(prev => {
                                            let pos = prev.indexOf(prev.find(item => item.id == row.id))
                                            const newData = [].concat(prev.slice(0, pos), prev.slice(pos + 1))
                                            localStorage.setItem('temp_rows_10_2', JSON.stringify(newData));
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

export default UseIndirect