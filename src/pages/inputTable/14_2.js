import React, { useState, useEffect, useRef } from 'react'
import '../../App.scss'
import Add from '../../assets/images/Add.png'
import Delete from '../../assets/images/Delete.png'
function InvestmentAverage({ onChange }) {
    const currentRef = useRef()
    const [rows, setRows] = useState([
        {
            id: 0,
            IC: '1',
            RIC: '300000',
            RCS: '5',
            ICS: 'Telecommunication',
            ICR: '100',
            factor: '0.6'
        },
        {
            id: 1,
            IC: '2',
            RIC: '750000',
            RCS: '15',
            ICS: 'Pharmaceutical',
            ICR: '100',
            factor: '0.5'
        },
        {
            id: 2,
            IC: '3',
            RIC: '115000',
            RCS: '20',
            ICS: 'Energy generation',
            ICR: '100',
            factor: '3'
        },
        {
            id: 3,
            IC: '4',
            RIC: '550000',
            RCS: '10',
            ICS: 'Energy generation',
            ICR: '60',
            factor: '2'
        },
        {
            id: 4,
            IC: '5',
            RIC: '550000',
            RCS: '10',
            ICS: 'Apparel',
            ICR: '40',
            factor: '1.5'
        },
    ])
    currentRef.current = false;
    useEffect(() => {
        const jsonData = localStorage.getItem('temp_rows_14_2');
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
            sum += parseFloat(row.RIC) * parseFloat(row.RCS) * parseFloat(row.ICR) * parseFloat(row.factor) / 10000;
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
                            <th>Investee  company</th>
                            <th>Revenue of investee company ($)</th>
                            <th>Reporting  company’s share of  equity (percent)</th>
                            <th>Investee company’s sector(s) of operation</th>
                            <th>Investee company’s revenue in sector (percent)</th>
                            <th>Scope 1 and scope 2 emission factor  of sector   (kg CO2e/$ revenue)</th>
                        </tr>
                        {rows.map((row) =>
                            <tr>
                                <td><input type='text' value={row.IC} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        const newData = prev.map(i => {
                                            if (i.id === row.id) {
                                                i.IC = e.target.value
                                            }
                                            return i;
                                        })
                                        localStorage.setItem('temp_rows_14_2', JSON.stringify(newData));
                                        return newData;
                                    })
                                }} /></td>
                                <td><input type='text' value={row.RIC} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        const newData = prev.map(i => {
                                            if (i.id === row.id) {
                                                i.RIC = e.target.value
                                            }
                                            return i;
                                        })
                                        localStorage.setItem('temp_rows_14_2', JSON.stringify(newData));
                                        return newData;
                                    })

                                }} /></td>
                                <td><input type='text' value={row.RCS} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        const newData = prev.map(i => {
                                            if (i.id === row.id) {
                                                i.RCS = e.target.value
                                            }
                                            return i;
                                        })
                                        localStorage.setItem('temp_rows_14_2', JSON.stringify(newData));
                                        return newData;
                                    })
                                }} /></td>
                                <td><input type='text' value={row.ICS} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        const newData = prev.map(i => {
                                            if (i.id === row.id) {
                                                i.ICS = e.target.value
                                            }
                                            return i;
                                        })
                                        localStorage.setItem('temp_rows_14_2', JSON.stringify(newData));
                                        return newData;
                                    })
                                }} /></td>
                                <td><input type='text' value={row.ICR} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        const newData = prev.map(i => {
                                            if (i.id === row.id) {
                                                i.ICR = e.target.value
                                            }
                                            return i;
                                        })
                                        localStorage.setItem('temp_rows_14_2', JSON.stringify(newData));
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
                                            localStorage.setItem('temp_rows_14_2', JSON.stringify(newData));
                                            return newData;
                                        })
                                    }} />
                                    <img src={Add} alt='Add' className='AddButton' onClick={() => {
                                        setRows(prev => {
                                            const newRow = {
                                                id: Date.now(),
                                                IC: '',
                                                RIC: '',
                                                RCS: '',
                                                ICS: '',
                                                ICR: '',
                                                factor: ''
                                            }
                                            let pos = prev.indexOf(prev.find(item => item.id === row.id)) + 1

                                            const newData = [].concat(prev.slice(0, pos), newRow, prev.slice(pos))
                                            localStorage.setItem('temp_rows_14_2', JSON.stringify(newData));
                                            return newData;
                                        })
                                    }
                                    } />
                                    <img src={Delete} alt='Delete' className='AddButton' onClick={() => {
                                        setRows(prev => {
                                            let pos = prev.indexOf(prev.find(item => item.id == row.id))
                                            const newData = [].concat(prev.slice(0, pos), prev.slice(pos + 1))
                                            localStorage.setItem('temp_rows_14_2', JSON.stringify(newData));
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

export default InvestmentAverage