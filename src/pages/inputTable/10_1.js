import React, { useState, useEffect } from 'react'
import '../../App.scss'
import Add from '../../assets/images/Add.png'
import Delete from '../../assets/images/Delete.png'
function UseDirect({ onChange }) {
    const [rows, setRows] = useState([
        {
            id: 0,
            Product: 'Washing machine X100',
            tul: '1000',
            ns: '115',
            ecu: '1.3',
            factor: '0.5',
        },
        {
            id: 1,
            Product: 'Washing machine X200',
            tul: '1100',
            ns: '190',
            ecu: '1.5',
            factor: '0.5',
        },
        {
            id: 2,
            Product: 'Iron Y123',
            tul: '2000',
            ns: '200',
            ecu: '0.2',
            factor: '0.5',
        },
    ])

    useEffect(() => {
        let sum = 0        
        rows.forEach(row => {
            sum += parseFloat(row.tul) * parseFloat(row.ns) * parseFloat(row.ecu) * parseFloat(row.factor);
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
                            <th>Product</th>
                            <th>Total uses over lifetime</th>
                            <th>Number sold</th>
                            <th>Electricity  consumed per use(kWh)</th>
                            <th>Electricity emission factor(KgCO2e/kWh)</th>
                        </tr>
                        {rows.map((row) =>
                            <tr>
                                <td><input type='text' value={row.Product} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        return prev.map(i => {
                                            if (i.id === row.id) {
                                                i.Product = e.target.value
                                            }
                                            return i;
                                        })
                                    })
                                }} /></td>
                                <td><input type='text' value={row.tul} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        return prev.map(i => {
                                            if (i.id === row.id) {
                                                i.tul = e.target.value
                                            }
                                            return i;
                                        })
                                    })
                                }} /></td>
                                <td><input type='text' value={row.ns} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        return prev.map(i => {
                                            if (i.id === row.id) {
                                                i.ns = e.target.value
                                            }
                                            return i;
                                        })
                                    })
                                }} /></td>
                                <td><input type='text' value={row.ecu} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        return prev.map(i => {
                                            if (i.id === row.id) {
                                                i.ecu = e.target.value
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
                                                Product: '',
                                                tul: '',
                                                ns: '',
                                                ecu: '',
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
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UseDirect