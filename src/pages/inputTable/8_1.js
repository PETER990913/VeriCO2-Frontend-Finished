import React, { useState, useEffect, useRef } from 'react'
import '../../App.scss'
import Add from '../../assets/images/Add.png'
import Delete from '../../assets/images/Delete.png'
function DownstreamTransportation({ onChange }) {
    const currentRef = useRef()
    const [rows, setRows] = useState([
        {
            id: 0,
            Purchase: 'B',
            mgs: '4',
            tdd: '1000',
            tmv: 'Truck (rigid, 3.5-7.5t)',
            factor: '0.2'
        },
    ])
    currentRef.current = false;
    useEffect(() => {
        const jsonData = localStorage.getItem('temp_rows_8_1');
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
            sum += (parseFloat(row.mgs) * parseFloat(row.tdd) * parseFloat(row.factor)) * 1000;
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
                            <th>Purchaser</th>
                            <th>Mass of goods sold (tonnes)</th>
                            <th>Total downstream distance transported (km)</th>
                            <th>Transport mode or vehicle type</th>
                            <th>Emission factor (kg CO2e/tonne-km)</th>
                        </tr>
                        {rows.map((row) =>
                            <tr>
                                <td><input type='text' value={row.Purchase} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        const newData = prev.map(i => {
                                            if (i.id === row.id) {
                                                i.Purchase = e.target.value
                                            }
                                            return i;
                                        })
                                        localStorage.setItem('temp_rows_8_1', JSON.stringify(newData));
                                        return newData;
                                    })
                                }} /></td>
                                <td><input type='text' value={row.mgs} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        const newData = prev.map(i => {
                                            if (i.id === row.id) {
                                                i.mgs = e.target.value
                                            }
                                            return i;
                                        })
                                        localStorage.setItem('temp_rows_8_1', JSON.stringify(newData));
                                        return newData;
                                    })

                                }} /></td>
                                <td><input type='text' value={row.tdd} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        const newData = prev.map(i => {
                                            if (i.id === row.id) {
                                                i.tdd = e.target.value
                                            }
                                            return i;
                                        })
                                        localStorage.setItem('temp_rows_8_1', JSON.stringify(newData));
                                        return newData;
                                    })
                                }} /></td>
                                <td><input type='text' value={row.tmv} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        const newData = prev.map(i => {
                                            if (i.id === row.id) {
                                                i.tmv = e.target.value
                                            }
                                            return i;
                                        })
                                        localStorage.setItem('temp_rows_8_1', JSON.stringify(newData));
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
                                            localStorage.setItem('temp_rows_8_1', JSON.stringify(newData));
                                            return newData;
                                        })

                                    }} />
                                    <img src={Add} alt='Add' className='AddButton' onClick={() => {
                                        setRows(prev => {
                                            const newRow = {
                                                id: Date.now(),
                                                Purchase: '',
                                                mgs: '',
                                                tdd: '',
                                                tmv: '',
                                                factor: '',
                                            }
                                            let pos = prev.indexOf(prev.find(item => item.id === row.id)) + 1

                                            const newData = [].concat(prev.slice(0, pos), newRow, prev.slice(pos))
                                            localStorage.setItem('temp_rows_8_1', JSON.stringify(newData));
                                            return newData;
                                        })
                                    }
                                    } />
                                    <img src={Delete} alt='Delete' className='AddButton' onClick={() => {
                                        setRows(prev => {
                                            let pos = prev.indexOf(prev.find(item => item.id == row.id))
                                            const newData = [].concat(prev.slice(0, pos), prev.slice(pos + 1))
                                            localStorage.setItem('temp_rows_8_1', JSON.stringify(newData));
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

export default DownstreamTransportation