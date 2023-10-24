import React, { useState, useEffect } from 'react'
import '../../App.scss'
import Add from '../../assets/images/Add.png'
import Delete from '../../assets/images/Delete.png'
function EmployeeAverage({ onChange }) {
    const [rows, setRows] = useState([
        {
            id: 0,
            Group: 'Rail',
            ptc: '5',
            aod: '10',
            factor: '0.1'
        },
        {
            id: 1,
            Group: 'Car',
            ptc: '3',
            aod: '15',
            factor: '0.2'
        },
        {
            id: 2,
            Group: 'Foot',
            ptc: '15',
            aod: '1',
            factor: '0'
        },
        {
            id: 3,
            Group: 'Bus',
            ptc: '5',
            aod: '5',
            factor: '0.1'
        }
    ])

    useEffect(() => {
        let sum = 0
        rows.forEach(row => {
            sum += (parseFloat(row.ptc) * parseFloat(row.aod) * parseFloat(row.factor)) * 2 * 235 / 100 * 10000;
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
                            <th>Commute group</th>
                            <th>Percent of total commutes</th>
                            <th>Average one-way  distance (km)</th>
                            <th>Emission factor</th>
                        </tr>
                        {rows.map((row) =>
                            <tr>
                                <td><input type='text' value={row.Group} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        return prev.map(i => {
                                            if (i.id === row.id) {
                                                i.Group = e.target.value
                                            }
                                            return i;
                                        })
                                    })
                                }} /></td>
                                <td><input type='text' value={row.ptc} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        return prev.map(i => {
                                            if (i.id === row.id) {
                                                i.ptc = e.target.value
                                            }
                                            return i;
                                        })
                                    })

                                }} /></td>
                                <td><input type='text' value={row.aod} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        return prev.map(i => {
                                            if (i.id === row.id) {
                                                i.aod = e.target.value
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
                                                Group: '',
                                                ptc: '',
                                                aod: '',
                                                factor: '',
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

export default EmployeeAverage