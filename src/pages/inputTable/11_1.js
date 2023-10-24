import React, { useState, useEffect } from 'react'
import '../../App.scss'
import Add from '../../assets/images/Add.png'
import Delete from '../../assets/images/Delete.png'
function EndWaste({ onChange }) {
    const [rows, setRows] = useState([
        {
            id: 0,
            mwac: '1000000',
            wt: 'Landfill',
            pwp: '90',
            factor: '0.3',
        },
        {
            id: 1,
            mwac: '1000000',
            wt: 'Incinerated',
            pwp: '10',
            factor: '1',
        },
        {
            id: 2,
            mwac: '1000000',
            wt: 'Recycled',
            pwp: '0',
            factor: '0',
        },
    ])

    useEffect(() => {
        let sum = 0        
        rows.forEach(row => {
            sum += parseFloat(row.mwac) * parseFloat(row.pwp) * parseFloat(row.factor) / 100;
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
                            <th>Mass of waste after consumer use (kg)</th>
                            <th>Waste treatment</th>
                            <th>Proportion of waste produced (percent)</th>
                            <th>Emission factor of waste treatment method (kg CO2e/kg )</th>
                        </tr>
                        {rows.map((row) =>
                            <tr>
                                <td><input type='text' value={row.mwac} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        return prev.map(i => {
                                            if (i.id === row.id) {
                                                i.mwac = e.target.value
                                            }
                                            return i;
                                        })
                                    })
                                }} /></td>
                                <td><input type='text' value={row.wt} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        return prev.map(i => {
                                            if (i.id === row.id) {
                                                i.wt = e.target.value
                                            }
                                            return i;
                                        })
                                    })
                                }} /></td>
                                <td><input type='text' value={row.pwp} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        return prev.map(i => {
                                            if (i.id === row.id) {
                                                i.pwp = e.target.value
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
                                                mwac: '',
                                                wt: '',
                                                pwp: '',
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

export default EndWaste