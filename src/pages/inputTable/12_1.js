import React, { useState, useEffect } from 'react'
import '../../App.scss'
import Add from '../../assets/images/Add.png'
import Delete from '../../assets/images/Delete.png'
function Downstream({ onChange }) {
    const [rows, setRows] = useState([
        {
            id: 0,
            factory: 'Factory 1',
            emission: '900000',
            space: '5000',
        },
        {
            id: 1,
            factory: 'Factory 2',
            emission: '900000',
            space: '10000',
        },
    ])
    useEffect(() => { 
        let sum = 0  
        let total = 0    
        rows.forEach(row => {
            total += parseFloat(row.space)
        })       
        // return total         
        rows.forEach(row => {
            sum += parseFloat(row.emission) * parseFloat(row.space)/ parseFloat(total);
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
                            <th>Factory</th>
                            <th>Combined scope 1 and scope 2 emissions  (kg CO2e)</th>
                            <th>Floor space (m2)</th>
                        </tr>
                        {rows.map((row) =>
                            <tr>
                                <td><input type='text' value={row.factory} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        return prev.map(i => {
                                            if (i.id === row.id) {
                                                i.emission = e.target.value
                                            }
                                            return i;
                                        })
                                    })
                                }} /></td>
                                <td><input type='text' value={row.emission} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        return prev.map(i => {
                                            if (i.id === row.id) {
                                                i.wt = e.target.value
                                            }
                                            return i;
                                        })
                                    })
                                }} /></td>
                                <td className='AddStyle'>
                                    <input type='text' value={row.space} className='Input_form' onChange={(e) => {
                                        setRows(prev => {
                                            return prev.map(i => {
                                                if (i.id === row.id) {
                                                    i.space = e.target.value
                                                }
                                                return i;
                                            })
                                        })
                                    }} />
                                    <img src={Add} alt='Add' className='AddButton' onClick={() => {
                                        setRows(prev => {
                                            const newRow = {
                                                id: Date.now(),
                                                factory: '',
                                                emission: '',
                                                space: ''
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

export default Downstream