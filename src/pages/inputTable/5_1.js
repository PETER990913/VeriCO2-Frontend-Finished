import React, { useState, useEffect, useRef } from 'react'
import '../../App.scss'
import Add from '../../assets/images/Add.png'
import Delete from '../../assets/images/Delete.png'
function BusinessFuel({ onChange }) {
    const currentRef = useRef()
    const [rows, setRows] = useState([
        {
            id: 0,
            Group: 'Group 1',
            neg: '10',
            ct: 'Hybrid',
            aev: '2',
            location: 'United States',
            distance: '50',
            factor: '1',
        },
        {
            id: 1,
            Group: 'Group 2',
            neg: '20',
            ct: 'Average gasoline car',
            aev: '2',
            location: 'Australia',
            distance: '200',
            factor: '2',
        },
        {
            id: 2,
            Group: 'Group 3',
            neg: '100',
            ct: 'Hybrid',
            aev: '3',
            location: 'United States',
            distance: '100',
            factor: '4',
        },
    ])

    const [rows1, setRows1] = useState([
        {
            id: 0,
            Group: 'Group 1',
            neg: '10',
            ft: 'Long haul',
            distance: '1000',
            factor: '5',
        },
        {
            id: 1,
            Group: 'Group 2',
            neg: '20',
            ft: 'Short haul',
            distance: '1500',
            factor: '6',
        },
        {
            id: 2,
            Group: 'Group 3',
            neg: '100',
            ft: 'Long haul',
            distance: '1200',
            factor: '5',
        },
    ])
    currentRef.current = false;
    useEffect(() => {
        const jsonData = localStorage.getItem('temp_rows_5_1_1');
        if (!jsonData) return;
        try {
            const _rows = JSON.parse(jsonData)
            setRows(_rows)
        } catch {

        }
    }, [])
    useEffect(() => {
        const jsonData = localStorage.getItem('temp_rows_5_1_2');
        if (!jsonData) return;
        try {
            const _rows = JSON.parse(jsonData)
            setRows1(_rows)
        } catch {

        }
    }, [])
    useEffect(() => {
        let sum = 0
        let sum1 = 0
        rows.forEach(row => {
            sum += parseFloat(row.neg) / parseFloat(row.aev) * parseFloat(row.distance) * parseFloat(row.factor);
        })
        rows1.forEach(row1 => {
            sum1 += parseFloat(row1.neg) * parseFloat(row1.distance) * parseFloat(row1.factor);
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
                            <th>Employee Group</th>
                            <th>Number of employees  in group</th>
                            <th>Car type</th>
                            <th>Average  employees  per vehicle</th>
                            <th>Location</th>
                            <th>Distance(km)</th>
                            <th>Emission factor(kg CO2e/ vehicle-km)</th>
                        </tr>
                        {rows.map((row) =>
                            <tr>
                                <td><input type='text' value={row.Group} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        const newData = prev.map(i => {
                                            if (i.id === row.id) {
                                                i.Group = e.target.value
                                            }
                                            return i;
                                        })
                                        localStorage.setItem('temp_rows_5_1_1', JSON.stringify(newData));
                                        return newData;
                                    })
                                }} /></td>
                                <td><input type='text' value={row.neg} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        const newData = prev.map(i => {
                                            if (i.id === row.id) {
                                                i.neg = e.target.value
                                            }
                                            return i;
                                        })
                                        localStorage.setItem('temp_rows_5_1_1', JSON.stringify(newData));
                                        return newData;
                                    })
                                }} /></td>
                                <td><input type='text' value={row.ct} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        const newData = prev.map(i => {
                                            if (i.id === row.id) {
                                                i.ct = e.target.value
                                            }
                                            return i;
                                        })
                                        localStorage.setItem('temp_rows_5_1_1', JSON.stringify(newData));
                                        return newData;
                                    })
                                }} /></td>
                                <td><input type='text' value={row.aev} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        const newData = prev.map(i => {
                                            if (i.id === row.id) {
                                                i.aev = e.target.value
                                            }
                                            return i;
                                        })
                                        localStorage.setItem('temp_rows_5_1_1', JSON.stringify(newData));
                                        return newData;
                                    })
                                }} /></td>
                                <td><input type='text' value={row.location} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        const newData = prev.map(i => {
                                            if (i.id === row.id) {
                                                i.location = e.target.value
                                            }
                                            return i;
                                        })
                                        localStorage.setItem('temp_rows_5_1_1', JSON.stringify(newData));
                                        return newData;
                                    })
                                }} /></td>
                                <td><input type='text' value={row.distance} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        const newData = prev.map(i => {
                                            if (i.id === row.id) {
                                                i.distance = e.target.value
                                            }
                                            return i;
                                        })
                                        localStorage.setItem('temp_rows_5_1_1', JSON.stringify(newData));
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
                                            localStorage.setItem('temp_rows_5_1_1', JSON.stringify(newData));
                                            return newData;
                                        })

                                    }} />
                                    <img src={Add} alt='Add' className='AddButton' onClick={() => {
                                        setRows(prev => {
                                            const newRow = {
                                                id: Date.now(),
                                                Group: '',
                                                neg: '',
                                                ct: '',
                                                aev: '',
                                                location: '',
                                                distance: '',
                                                factor: ''
                                            }
                                            let pos = prev.indexOf(prev.find(item => item.id === row.id)) + 1

                                            const newData = [].concat(prev.slice(0, pos), newRow, prev.slice(pos))
                                            localStorage.setItem('temp_rows_5_1_1', JSON.stringify(newData));
                                            return newData;
                                        })
                                    }
                                    } />
                                    <img src={Delete} alt='Delete' className='AddButton' onClick={() => {
                                        setRows(prev => {
                                            let pos = prev.indexOf(prev.find(item => item.id == row.id))
                                            const newData = [].concat(prev.slice(0, pos), prev.slice(pos + 1))
                                            localStorage.setItem('temp_rows_5_1_1', JSON.stringify(newData));
                                            return newData;
                                        })
                                    }} />
                                </td>
                            </tr>
                        )}
                        <tr>
                            <th>Employee Group</th>
                            <th>Number of employees  in group</th>
                            <th colSpan={2}>Flight type</th>
                            <th colSpan={2}>Distance(km)</th>
                            <th>Emission factor(kg CO2e/ vehicle-km)</th>
                        </tr>
                        {rows1.map((row1) =>
                            <tr>
                                <td><input type='text' value={row1.Group} className='Input_form' onChange={(e) => {
                                    setRows1(prev => {
                                        const newData = prev.map(i => {
                                            if (i.id === row1.id) {
                                                i.Group = e.target.value
                                            }
                                            return i;
                                        })
                                        localStorage.setItem('temp_rows_5_1_2', JSON.stringify(newData));
                                        return newData;
                                    })
                                }} /></td>
                                <td><input type='text' value={row1.neg} className='Input_form' onChange={(e) => {
                                    setRows1(prev => {
                                        const newData = prev.map(i => {
                                            if (i.id === row1.id) {
                                                i.neg = e.target.value
                                            }
                                            return i;
                                        })
                                        localStorage.setItem('temp_rows_5_1_2', JSON.stringify(newData));
                                        return newData;
                                    })
                                }} /></td>
                                <td colSpan={2}><input type='text' value={row1.ft} className='Input_form' onChange={(e) => {
                                    setRows1(prev => {
                                        const newData = prev.map(i => {
                                            if (i.id === row1.id) {
                                                i.ft = e.target.value
                                            }
                                            return i;
                                        })
                                        localStorage.setItem('temp_rows_5_1_2', JSON.stringify(newData));
                                        return newData;
                                    })
                                }} /></td>
                                <td colSpan={2}><input type='text' value={row1.distance} className='Input_form' onChange={(e) => {
                                    setRows1(prev => {
                                        const newData = prev.map(i => {
                                            if (i.id === row1.id) {
                                                i.distance = e.target.value
                                            }
                                            return i;
                                        })
                                        localStorage.setItem('temp_rows_5_1_2', JSON.stringify(newData));
                                        return newData;
                                    })
                                }} /></td>
                                <td className='AddStyle'>
                                    <input type='text' value={row1.factor} className='Input_form' onChange={(e) => {
                                        setRows1(prev => {
                                            const newData = prev.map(i => {
                                                if (i.id === row1.id) {
                                                    i.factor = e.target.value
                                                }
                                                return i;
                                            })
                                            localStorage.setItem('temp_rows_5_1_2', JSON.stringify(newData));
                                            return newData;
                                        })

                                    }} />
                                    <img src={Add} alt='Add' className='AddButton' onClick={() => {
                                        setRows1(prev => {
                                            const newRow = {
                                                id: Date.now(),
                                                Group: '',
                                                neg: '',
                                                ft: '',
                                                distance: '',
                                                factor: ''
                                            }
                                            let pos = prev.indexOf(prev.find(item => item.id === row1.id)) + 1

                                            const newData = [].concat(prev.slice(0, pos), newRow, prev.slice(pos))
                                            localStorage.setItem('temp_rows_5_1_2', JSON.stringify(newData));
                                            return newData;
                                        })
                                    }
                                    } />
                                    <img src={Delete} alt='Delete' className='AddButton' onClick={() => {
                                        setRows1(prev => {
                                            let pos = prev.indexOf(prev.find(item => item.id == row1.id))
                                            const newData = [].concat(prev.slice(0, pos), prev.slice(pos + 1))
                                            localStorage.setItem('temp_rows_5_1_2', JSON.stringify(newData));
                                            return newData;
                                        })
                                    }} />
                                </td>
                            </tr>
                        )}
                        {/* <tr>
                            <td><input type='text' value={textv9} className='Input_form' onChange={(e) => { setTextV9(e.target.value) }} /></td>
                            <td><input type='text' value={v12} className='Input_form' onChange={(e) => { setV12(e.target.value) }} /></td>
                            <td colSpan={2}><input type='text' value={textv10} className='Input_form' onChange={(e) => { setTextV10(e.target.value) }} /></td>
                            <td colSpan={2}><input type='text' value={v13} className='Input_form' onChange={(e) => { setV13(e.target.value) }} /></td>
                            <td><input type='text' value={v14} className='Input_form' onChange={(e) => { setV14(e.target.value) }} /></td>
                        </tr>
                        <tr>
                            <td><input type='text' value={textv11} className='Input_form' onChange={(e) => { setTextV11(e.target.value) }} /></td>
                            <td><input type='text' value={v15} className='Input_form' onChange={(e) => { setV15(e.target.value) }} /></td>
                            <td colSpan={2}><input type='text' value={textv12} className='Input_form' onChange={(e) => { setTextV12(e.target.value) }} /></td>
                            <td colSpan={2}><input type='text' value={v16} className='Input_form' onChange={(e) => { setV16(e.target.value) }} /></td>
                            <td><input type='text' value={v17} className='Input_form' onChange={(e) => { setV17(e.target.value) }} /></td>
                        </tr>
                        <tr>
                            <td><input type='text' value={textv13} className='Input_form' onChange={(e) => { setTextV13(e.target.value) }} /></td>
                            <td><input type='text' value={v18} className='Input_form' onChange={(e) => { setV18(e.target.value) }} /></td>
                            <td colSpan={2}><input type='text' value={textv14} className='Input_form' onChange={(e) => { setTextV14(e.target.value) }} /></td>
                            <td colSpan={2}><input type='text' value={v19} className='Input_form' onChange={(e) => { setV19(e.target.value) }} /></td>
                            <td><input type='text' value={v20} className='Input_form' onChange={(e) => { setV20(e.target.value) }} /></td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BusinessFuel