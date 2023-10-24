import React, { useState, useEffect } from 'react'
import '../../App.scss'
import Add from '../../assets/images/Add.png'
import Delete from '../../assets/images/Delete.png'
function ProcessingSite({ onChange }) {
    const [rows, setRows] = useState([
        {
            id: 0,
            consumed: 'Natural gas',
            amount: '350000',
            factor: '0.2',
        },
        {
            id: 1,
            consumed: 'Electricity',
            amount: '200000',
            factor: '0.5',
        },
    ])

    const [rows1, setRows1] = useState([
        {
            id: 0,
            waste: 'Waste products',
            amount: '350000',
            factor: '0.2',
        },
    ])

    useEffect(() => {
        let sum = 0
        let sum1 = 0
        rows.forEach(row => {
            sum += parseFloat(row.amount) * parseFloat(row.factor);
        })
        rows1.forEach(row1 => {
            sum1 += parseFloat(row1.amount) * parseFloat(row1.factor);
        })
        onChange(sum + sum1)
    }, [rows], [rows1])

    return (
        // <div className='SignupPage' onClick={() => setfake1(true)}>
        <div className='container'>
            <span className='title'>Input Data</span>
            <div className='table-container'>
                <table>
                    <tbody>
                        <tr>
                            <th>Fuel and electricity consumed</th>
                            <th>Amount (kWh)</th>
                            <th>Emission factor (kg CO2e/kWh)</th>
                        </tr>
                        {rows.map((row) =>
                            <tr>
                                <td><input type='text' value={row.consumed} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        return prev.map(i => {
                                            if (i.id === row.id) {
                                                i.consumed = e.target.value
                                            }
                                            return i;
                                        })
                                    })
                                }} /></td>
                                <td><input type='text' value={row.amount} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        return prev.map(i => {
                                            if (i.id === row.id) {
                                                i.amount = e.target.value
                                            }
                                            return i;
                                        })
                                    })

                                }} /></td>
                                <td className='AddStyle'>
                                    <input type='text' value={row.factor} className='Input_form' onChange={(e) => {
                                        setRows(prev => {
                                            return prev.map(i => {
                                                if (i.id === row.id) {
                                                    i.factor = e.target.value
                                                }
                                                return i;
                                            })
                                        })
                                    }} />
                                    <img src={Add} alt='Add' className='AddButton' onClick={() => {
                                        setRows(prev => {
                                            const newRow = {
                                                id: Date.now(),
                                                consumed: '',
                                                amount: '',
                                                factor: ''
                                            }
                                            let pos = prev.indexOf(prev.find(item => item.id === row.id)) + 1

                                            return [].concat(prev.slice(0, pos), newRow, prev.slice(pos))
                                        })
                                    }
                                    } />
                                    <img src={Delete} alt='Delete' className='AddButton' onClick={() => {
                                        setRows(prev => {
                                            let pos = prev.indexOf(prev.find(item => item.id == row.id))
                                            return [].concat(prev.slice(0, pos), prev.slice(pos + 1))
                                        })
                                    }} />
                                </td>
                            </tr>
                        )}
                        <tr>
                            <th>Waste</th>
                            <th>Amount (kg) </th>
                            <th> Emission factor (kg CO2e/kg waste)</th>
                        </tr>
                        {rows1.map((row1) =>
                            <tr>
                                <td><input type='text' value={row1.waste} className='Input_form' onChange={(e) => {
                                    setRows1(prev => {
                                        return prev.map(i => {
                                            if (i.id === row1.id) {
                                                i.waste = e.target.value
                                            }
                                            return i;
                                        })
                                    })
                                }} /></td>
                                <td><input type='text' value={row1.amount} className='Input_form' onChange={(e) => {
                                    setRows1(prev => {
                                        return prev.map(i => {
                                            if (i.id === row1.id) {
                                                i.amount = e.target.value
                                            }
                                            return i;
                                        })
                                    })

                                }} /></td>
                                <td className='AddStyle'>
                                    <input type='text' value={row1.factor} className='Input_form' onChange={(e) => {
                                        setRows1(prev => {
                                            return prev.map(i => {
                                                if (i.id === row1.id) {
                                                    i.factor = e.target.value
                                                }
                                                return i;
                                            })
                                        })
                                    }} />
                                    <img src={Add} alt='Add' className='AddButton' onClick={() => {
                                        setRows1(prev => {
                                            const newRow = {
                                                id: Date.now(),
                                                waste: '',
                                                amount: '',
                                                factor: ''
                                            }
                                            let pos = prev.indexOf(prev.find(item => item.id === row1.id)) + 1

                                            return [].concat(prev.slice(0, pos), newRow, prev.slice(pos))
                                        })
                                    }
                                    } />
                                    <img src={Delete} alt='Delete' className='AddButton' onClick={() => {
                                        setRows1(prev => {
                                            let pos = prev.indexOf(prev.find(item => item.id == row1.id))
                                            return [].concat(prev.slice(0, pos), prev.slice(pos + 1))
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

export default ProcessingSite