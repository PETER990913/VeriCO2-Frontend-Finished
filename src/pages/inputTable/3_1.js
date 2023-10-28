import React, { useState, useEffect, useRef } from 'react'
import '../../App.scss'
import Add from '../../assets/images/Add.png'
import Delete from '../../assets/images/Delete.png'
function UpstreamFuel({ onChange }) {
    const currentRef = useRef()
    const [rows, setRows] = useState([
        {
            id: 0,
            gool: 'B',
            qp: '5000',
            supplier: 'Diesel',
            ssef: '3'
        },
        {
            id: 1,
            gool: 'C',
            qp: '8000',
            supplier: 'Diesel',
            ssef: '3'
        },
        {
            id: 2,
            gool: 'D',
            qp: '9000',
            supplier: 'Diesel',
            ssef: '3'
        },
        {
            id: 3,
            gool: 'D',
            qp: '50',
            supplier: 'Refrigerant R410a',
            ssef: '2000'
        },
    ])
    currentRef.current = false;
    useEffect(() => {
        const jsonData = localStorage.getItem('temp_rows_3_1');
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
            sum += parseFloat(row.qp) * parseFloat(row.ssef);
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
                            <th>Supplier</th>
                            <th>Fuel consumed (liters) or refrigerant leakage (kg)</th>
                            <th>Fuel/refrigerant type</th>
                            <th>Emission factor (kg CO2e/ liter for fuels)</th>
                        </tr>
                        {rows.map((row) =>
                            <tr>
                                <td><input type='text' value={row.gool} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        const newData = prev.map(i => {
                                            if (i.id === row.id) {
                                                i.gool = e.target.value
                                            }
                                            return i;
                                        })
                                        localStorage.setItem('temp_rows_3_1', JSON.stringify(newData));
                                        return newData;
                                    })
                                }} /></td>
                                <td><input type='text' value={row.qp} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        const newData = prev.map(i => {
                                            if (i.id === row.id) {
                                                i.qp = e.target.value
                                            }
                                            return i;
                                        })
                                        localStorage.setItem('temp_rows_3_1', JSON.stringify(newData));
                                        return newData;
                                    })

                                }} /></td>
                                <td><input type='text' value={row.supplier} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        const newData = prev.map(i => {
                                            if (i.id === row.id) {
                                                i.supplier = e.target.value
                                            }
                                            return i;
                                        })
                                        localStorage.setItem('temp_rows_3_1', JSON.stringify(newData));
                                        return newData;
                                    })

                                }} /></td>
                                <td className='AddStyle'>
                                    <input type='text' value={row.ssef} className='Input_form' onChange={(e) => {
                                        setRows(prev => {
                                            const newData = prev.map(i => {
                                                if (i.id === row.id) {
                                                    i.ssef = e.target.value
                                                }
                                                return i;
                                            })
                                            localStorage.setItem('temp_rows_3_1', JSON.stringify(newData));
                                            return newData;
                                        })

                                    }} />
                                    <img src={Add} alt='Add' className='AddButton' onClick={() => {
                                        setRows(prev => {
                                            const newRow = {
                                                id: Date.now(),
                                                gool: '',
                                                supplier: '',
                                                qp: '',
                                                ssef: ''
                                            }
                                            let pos = prev.indexOf(prev.find(item => item.id === row.id)) + 1

                                            const newData = [].concat(prev.slice(0, pos), newRow, prev.slice(pos))
                                            localStorage.setItem('temp_rows_3_1', JSON.stringify(newData));
                                            return newData;
                                        })
                                    }
                                    } />
                                    <img src={Delete} alt='Delete' className='AddButton' onClick={() => {
                                        setRows(prev => {
                                            let pos = prev.indexOf(prev.find(item => item.id == row.id))
                                            const newData = [].concat(prev.slice(0, pos), prev.slice(pos + 1))
                                            localStorage.setItem('temp_rows_3_1', JSON.stringify(newData));
                                            return newData;
                                        })
                                    }} />
                                </td>
                            </tr>
                        )}
                        {/* <tr>
                            <td><input type='text' value={textv0} className='Input_form' onChange={(e) => { setTextV0(e.target.value) }} /></td>
                            <td><input type='text' value={v0} className='Input_form' onChange={(e) => { setV0(e.target.value) }} /></td>
                            <td><input type='text' value={textv1} className='Input_form' onChange={(e) => { setTextV1(e.target.value) }} /></td>
                            <td><input type='text' value={v1} className='Input_form' onChange={(e) => { setV1(e.target.value) }} /></td>
                        </tr>
                        <tr>
                            <td><input type='text' value={textv2} className='Input_form' onChange={(e) => { setTextV2(e.target.value) }} /></td>
                            <td><input type='text' value={v2} className='Input_form' onChange={(e) => { setV2(e.target.value) }} /></td>
                            <td><input type='text' value={textv3} className='Input_form' onChange={(e) => { setTextV3(e.target.value) }} /></td>
                            <td><input type='text' value={v3} className='Input_form' onChange={(e) => { setV3(e.target.value) }} /></td>
                        </tr>
                        <tr>
                            <td><input type='text' value={textv4} className='Input_form' onChange={(e) => { setTextV4(e.target.value) }} /></td>
                            <td><input type='text' value={v4} className='Input_form' onChange={(e) => { setV4(e.target.value) }} /></td>
                            <td><input type='text' value={textv5} className='Input_form' onChange={(e) => { setTextV5(e.target.value) }} /></td>
                            <td><input type='text' value={v5} className='Input_form' onChange={(e) => { setV5(e.target.value) }} /></td>
                        </tr>
                        <tr>
                            <td><input type='text' value={textv6} className='Input_form' onChange={(e) => { setTextV6(e.target.value) }} /></td>
                            <td><input type='text' value={v6} className='Input_form' onChange={(e) => { setV6(e.target.value) }} /></td>
                            <td><input type='text' value={textv7} className='Input_form' onChange={(e) => { setTextV7(e.target.value) }} /></td>
                            <td><input type='text' value={v7} className='Input_form' onChange={(e) => { setV7(e.target.value) }} /></td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UpstreamFuel