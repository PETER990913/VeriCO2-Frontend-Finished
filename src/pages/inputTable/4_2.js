import React, { useState, useEffect, useRef } from 'react'
import '../../App.scss'
import Add from '../../assets/images/Add.png'
import Delete from '../../assets/images/Delete.png'
function WasteAverage({ onChange, dataset1 }) {
    const currentRef = useRef()
    const [rows, setRows] = useState([
        {
            id: 0,
            total: '40',
            gool: 'Landfill',
            qp: '25',
            ssef: '300'
        },
        {
            id: 1,
            total: '40',
            gool: 'Incinerated',
            qp: '5',
            ssef: '0'
        },
        {
            id: 2,
            total: '40',
            gool: 'Recycled',
            qp: '30',
            ssef: '0'
        },
        {
            id: 3,
            total: '40',
            gool: 'Recycled',
            qp: '20',
            ssef: '10'
        },
        {
            id: 4,
            total: '40',
            gool: 'Composted',
            qp: '20',
            ssef: '30'
        }
    ])
    currentRef.current = false;
    useEffect(() => {
        const jsonData = localStorage.getItem('temp_rows_4_2');
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
            sum += parseFloat(row.total) * parseFloat(row.qp) * parseFloat(row.ssef) / 100;
        })
        onChange(sum)
        console.log(sum);
    }, [rows])
    // useEffect(() => {
    //     if (dataset1.Composted_Average_emission_factor) {
    //         setV2(dataset1.Landfill_Average_emission_factor)
    //         setV4(dataset1.Incinerated_with_energy_recovery_Average_emission_factor)
    //         setV6(dataset1.Recycled_Average_emission_factor)
    //         setV8(dataset1.Composted_Average_emission_factor)
    //     }
    // }, [dataset1])

    return (
        // <div className='SignupPage' onClick={() => setfake1(true)}>
        <div className='container'>
            <span className='title'>Input Data</span>
            <div className='table-container'>
                <table>
                    <tbody>
                        <tr>
                            <th>Total waste produced (tonnes)</th>
                            <th>Waste treatment</th>
                            <th> Proportion (percent)</th>
                            <th>Average emission factor  of waste treatment method  (kg CO2e/tonne)</th>
                        </tr>
                        {rows.map((row) =>
                            <tr>
                                <td><input type='text' value={row.total} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        const newData = prev.map(i => {
                                            if (i.id === row.id) {
                                                i.total = e.target.value
                                            }
                                            return i;
                                        })
                                        localStorage.setItem('temp_rows_4_2', JSON.stringify(newData));
                                        return newData;
                                    })
                                }} /></td>
                                <td><input type='text' value={row.gool} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        const newData = prev.map(i => {
                                            if (i.id === row.id) {
                                                i.gool = e.target.value
                                            }
                                            return i;
                                        })
                                        localStorage.setItem('temp_rows_4_2', JSON.stringify(newData));
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
                                        localStorage.setItem('temp_rows_4_2', JSON.stringify(newData));
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
                                            localStorage.setItem('temp_rows_4_2', JSON.stringify(newData));
                                            return newData;
                                        })

                                    }} />
                                    <img src={Add} alt='Add' className='AddButton' onClick={() => {
                                        setRows(prev => {
                                            const newRow = {
                                                id: Date.now(),
                                                total: '',
                                                gool: '',
                                                qp: '',
                                                ssef: ''
                                            }
                                            let pos = prev.indexOf(prev.find(item => item.id === row.id)) + 1

                                            const newData = [].concat(prev.slice(0, pos), newRow, prev.slice(pos))
                                            localStorage.setItem('temp_rows_4_2', JSON.stringify(newData));
                                            return newData;
                                        })
                                    }
                                    } />
                                    <img src={Delete} alt='Delete' className='AddButton' onClick={() => {
                                        setRows(prev => {
                                            let pos = prev.indexOf(prev.find(item => item.id == row.id))
                                            const newData = [].concat(prev.slice(0, pos), prev.slice(pos + 1))
                                            localStorage.setItem('temp_rows_4_2', JSON.stringify(newData));
                                            return newData;
                                        })
                                    }} />
                                </td>
                            </tr>
                        )}
                        {/* <tr>
                            <td rowSpan={5}><input type='text' value={v0} className='Input_form' onChange={(e) => { setV0(e.target.value) }} /></td>
                            <td><input type='text' value={textv0} className='Input_form' onChange={(e) => { setTextV0(e.target.value) }} /></td>
                            <td><input type='text' value={v1} className='Input_form' onChange={(e) => { setV1(e.target.value) }} /></td>
                            <td><input type='text' value={v2} className='Input_form' onChange={(e) => { setV2(e.target.value) }} /></td>
                        </tr>
                        <tr>
                            <td><input type='text' value={textv1} className='Input_form' onChange={(e) => { setTextV1(e.target.value) }} /></td>
                            <td><input type='text' value={v3} className='Input_form' onChange={(e) => { setV3(e.target.value) }} /></td>
                            <td><input type='text' value={v4} className='Input_form' onChange={(e) => { setV4(e.target.value) }} /></td>
                        </tr>
                        <tr>
                            <td><input type='text' value={textv2} className='Input_form' onChange={(e) => { setTextV2(e.target.value) }} /></td>
                            <td><input type='text' value={v5} className='Input_form' onChange={(e) => { setV5(e.target.value) }} /></td>
                            <td><input type='text' value={v6} className='Input_form' onChange={(e) => { setV6(e.target.value) }} /></td>
                        </tr>
                        <tr>
                            <td><input type='text' value={textv3} className='Input_form' onChange={(e) => { setTextV3(e.target.value) }} /></td>
                            <td><input type='text' value={v7} className='Input_form' onChange={(e) => { setV7(e.target.value) }} /></td>
                            <td><input type='text' value={v8} className='Input_form' onChange={(e) => { setV8(e.target.value) }} /></td>
                        </tr>
                        <tr>
                            <td><input type='text' value={textv4} className='Input_form' onChange={(e) => { setTextV4(e.target.value) }} /></td>
                            <td><input type='text' value={v9} className='Input_form' onChange={(e) => { setV9(e.target.value) }} /></td>
                            <td><input type='text' value={v10} className='Input_form' onChange={(e) => { setV10(e.target.value) }} /></td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default WasteAverage