import React, { useState, useEffect } from 'react'
import '../../App.scss'
import Add from '../../assets/images/Add.png'
import Delete from '../../assets/images/Delete.png'
function FranchisesSpecificTest({ onChange, dataset, dataset2 }) {
    const [rows, setRows] = useState([
        {
            id: 0,
            Franchises: '1',
            scope1: '100000',
            scope2: '20000'
        },
        {
            id: 1,
            Franchises: '2',
            scope1: '25000',
            scope2: '10000'
        },
        {
            id: 2,
            Franchises: '3',
            scope1: '30000',
            scope2: '10000'
        },
        {
            id: 3,
            Franchises: '4',
            scope1: '90000',
            scope2: '30000'
        },
        {
            id: 4,
            Franchises: '5',
            scope1: '30000',
            scope2: '10000'
        },
        {
            id: 5,
            Franchises: '6',
            scope1: '40000',
            scope2: '10000'
        },
        {
            id: 6,
            Franchises: '7',
            scope1: '60000',
            scope2: '20000'
        },
        {
            id: 7,
            Franchises: '8',
            scope1: '10000',
            scope2: '90000'
        },
    ])

    useEffect(() => {
        let sum = 0
        rows.forEach(row => {
            sum += parseFloat(row.scope1) + parseFloat(row.scope2);
        })
        onChange(sum)
        console.log(sum);
    }, [rows])    

    // useEffect(() => {
    //     rows.forEach(row => {
    //         console.log('-------------:::::::::', row.Franchises)
    //         console.log('Dataset2:::::', dataset2, dataset2.length)
    //         dataset2.map(column => {
    //             if (column.includes(row.Franchises)) 
    //                     row.scope1 = column[0]
    //                     row.scope2 = column[1]
                    
    //         })
    //         const scope1 = dataset2[row.Franchises] ? dataset2[row.Franchises][0] : 0
    //         const scope2 = dataset2[row.Franchises] ? dataset2[row.Franchises][1] : 0
    //         if (scope1) setRows(scope1)
    //         if (scope2) setRows(scope2)
    //     })
    // }, [rows])

    

    return (
        // <div className='SignupPage' onClick={() => setfake1(true)}>
        <div className='container'>
            <span className='title'>Input Data</span>
            <div className='table-container'>
                <table>
                    <tbody>
                        <tr>
                            <th>Franchisee</th>
                            <th> Scope 1 emissions (kg CO2e)</th>
                            <th>Scope 2 emissions (kg CO2e)</th>
                        </tr>
                        {rows.map((row) =>
                            <tr>
                                <td><input type='text' value={row.Franchises} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        return prev.map(i => {
                                            if (i.id === row.id) {
                                                i.Franchises = e.target.value
                                            }
                                            return i;
                                        })
                                    })
                                }} /></td>
                                <td><input type='text' value={row.scope1} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        return prev.map(i => {
                                            if (i.id === row.id) {
                                                i.scope1 = e.target.value
                                            }
                                            return i;
                                        })
                                    })

                                }} /></td>
                                <td className='AddStyle'>
                                    <input type='text' value={row.scope2} className='Input_form' onChange={(e) => {
                                        setRows(prev => {
                                            return prev.map(i => {
                                                if (i.id === row.id) {
                                                    i.scope2 = e.target.value
                                                }
                                                return i;
                                            })
                                        })
                                    }} />
                                    <img src={Add} alt='Add' className='AddButton' onClick={() => {
                                        setRows(prev => {
                                            const newRow = {
                                                id: Date.now(),
                                                Franchises: '',
                                                scope1: '',
                                                scope2: ''
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

export default FranchisesSpecificTest