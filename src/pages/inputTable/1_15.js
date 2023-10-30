import React, { useState, useEffect, useRef } from 'react'
import '../../App.scss'
import Add from '../../assets/images/Add.png'
import Delete from '../../assets/images/Delete.png'
function FuelTransmission({ onChange, dataset1 }) {
    const currentRef = useRef()
    const [rows, setRows] = useState([
        {
            id: 0,
            Country: 'Australia',
            EP: '50000',
            DHP: '0',
            Country1: 'Australia',
            UEF: '0.12',
            CEF: '0.8',
            TDR: '10',
            UEFH: '0'
        },
        {
            id: 1,
            Country: 'Canada',
            EP: '60000',
            DHP: '50000',
            Country1: 'Canada',
            UEF: '0.1',
            CEF: '0.4',
            TDR: '13',
            UEFH: '0.05'
        },
        {
            id: 2,
            Country: 'India',
            EP: '40000',
            DHP: '0',
            Country1: 'India',
            UEF: '0.15',
            CEF: '0.8',
            TDR: '15',
            UEFH: '0'
        },
        {
            id: 3,
            Country: 'United States',
            EP: '550000',
            DHP: '0',
            Country1: 'United States',
            UEF: '0.1',
            CEF: '0.5',
            TDR: '10',
            UEFH: '0'
        },
        {
            id: 4,
            Country: 'Turkey',
            EP: '200000',
            DHP: '0',
            Country1: 'Turkey',
            UEF: '0.05',
            CEF: '0.4',
            TDR: '12',
            UEFH: '0'
        },
    ])
    currentRef.current = false;
    useEffect(() => {
        const jsonData = localStorage.getItem('temp_rows_1_15');
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
            sum += parseFloat(row.EP) * parseFloat(row.UEF) + parseFloat(row.EP) * parseFloat(row.CEF) * parseFloat(row.TDR) / 100 + parseFloat(row.DHP) * parseFloat(row.UEFH);
        })
        onChange(sum)
        console.log(sum);
    }, [rows])



    useEffect(() => {
        console.log('Dataset1:-----', dataset1)
        if (!dataset1 || Object.keys(dataset1).length == 0) return;
        setRows(prev => {
            const k = [].concat([], prev)
            prev.forEach((d, idx) => {
                if (dataset1.hasOwnProperty(k[idx].Country1)) {
                    k[idx].UEF = dataset1[k[idx].Country1]
                }
                else {
                    k[idx].UEF = k[idx].UEF
                }
            })
            return k
        })
    }, [dataset1])


    return (
        // <div className='SignupPage' onClick={() => setfake1(true)}>
        <div>
            <span className='title'>Input Data</span>
            <div className='table-container'>
                <table>
                    <tbody>
                        <tr>
                            <th>Country name</th>
                            <th colSpan={2}>Electricity purchased (kWh) </th>
                            <th colSpan={2}>District heating purchased (kWh)</th>
                        </tr>
                        {rows.map((row) =>
                            <tr>
                                <td><input type='text' value={row.Country} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        const newData = prev.map(i => {
                                            if (i.id === row.id) {
                                                i.Country = e.target.value
                                            }
                                            return i;
                                        })
                                        localStorage.setItem('temp_rows_1_15', JSON.stringify(newData));
                                        return newData;
                                    })
                                }} /></td>
                                <td colSpan={2}><input type='text' value={row.EP} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        const newData = prev.map(i => {
                                            if (i.id === row.id) {
                                                i.EP = e.target.value
                                            }
                                            return i;
                                        })
                                        localStorage.setItem('temp_rows_1_15', JSON.stringify(newData));
                                        return newData;
                                    })

                                }} /></td>
                                <td colSpan={2}><input type='text' value={row.DHP} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        const newData = prev.map(i => {
                                            if (i.id === row.id) {
                                                i.DHP = e.target.value
                                            }
                                            return i;
                                        })
                                        localStorage.setItem('temp_rows_1_15', JSON.stringify(newData));
                                        return newData;
                                    })

                                }} /></td>
                            </tr>
                        )}
                        <tr>
                            <th>Country name</th>
                            <th>Upstream emission factor of purchased electricity (kg CO2e/kWh)</th>
                            <th>Electricity/heat combustion emission factor (kg CO2e/kWh)</th>
                            <th>T&D loss rate (percent)</th>
                            <th>Upstream emission factor of purchased heating (kg CO2e/ kWh)</th>
                        </tr>
                        {rows.map((row) =>
                            <tr>
                                <td><input type='text' value={row.Country1} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        const newData = prev.map(i => {
                                            if (i.id === row.id) {
                                                i.Country1 = e.target.value
                                            }
                                            return i;
                                        })
                                        localStorage.setItem('temp_rows_1_15', JSON.stringify(newData));
                                        return newData;
                                    })
                                }} /></td>
                                <td><input type='text' value={row.UEF} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        const newData = prev.map(i => {
                                            if (i.id === row.id) {
                                                i.UEF = e.target.value
                                            }
                                            return i;
                                        })
                                        localStorage.setItem('temp_rows_1_15', JSON.stringify(newData));
                                        return newData;
                                    })

                                }} /></td>
                                <td><input type='text' value={row.CEF} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        const newData = prev.map(i => {
                                            if (i.id === row.id) {
                                                i.CEF = e.target.value
                                            }
                                            return i;
                                        })
                                        localStorage.setItem('temp_rows_1_15', JSON.stringify(newData));
                                        return newData;
                                    })

                                }} /></td>
                                <td><input type='text' value={row.TDR} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        const newData = prev.map(i => {
                                            if (i.id === row.id) {
                                                i.TDR = e.target.value
                                            }
                                            return i;
                                        })
                                        localStorage.setItem('temp_rows_1_15', JSON.stringify(newData));
                                        return newData;
                                    })

                                }} /></td>
                                <td className='AddStyle'>
                                    <input type='text' value={row.UEFH} className='Input_form' onChange={(e) => {
                                        setRows(prev => {
                                            const newData = prev.map(i => {
                                                if (i.id === row.id) {
                                                    i.UEFH = e.target.value
                                                }
                                                return i;
                                            })
                                            localStorage.setItem('temp_rows_1_15', JSON.stringify(newData));
                                            return newData;
                                        })
                                    }} />
                                    <img src={Add} alt='Add' className='AddButton' onClick={() => {
                                        setRows(prev => {
                                            const newRow = {
                                                id: Date.now(),
                                                Country: '',
                                                EP: '',
                                                DHP: '',
                                                Country1: '',
                                                UEF: '',
                                                CEF: '',
                                                TDR: '',
                                                UEFH: ''
                                            }
                                            let pos = prev.indexOf(prev.find(item => item.id === row.id)) + 1

                                            const newData = [].concat(prev.slice(0, pos), newRow, prev.slice(pos))
                                            localStorage.setItem('temp_rows_1_15', JSON.stringify(newData));
                                            return newData;
                                        })
                                    }
                                    } />
                                    <img src={Delete} alt='Delete' className='AddButton' onClick={() => {
                                        setRows(prev => {
                                            let pos = prev.indexOf(prev.find(item => item.id == row.id))
                                            const newData = [].concat(prev.slice(0, pos), prev.slice(pos + 1))
                                            localStorage.setItem('temp_rows_1_15', JSON.stringify(newData));
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

export default FuelTransmission