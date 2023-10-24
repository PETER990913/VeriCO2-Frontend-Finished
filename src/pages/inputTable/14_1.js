import React, { useState, useEffect } from 'react'
import '../../App.scss'
import Add from '../../assets/images/Add.png'
import Delete from '../../assets/images/Delete.png'
function InvestmentSpecific({ onChange, dataset2 }) {
    const [rows, setRows] = useState([
        {
            id: 0,
            Investment: '1',
            Type: 'Equity Investment in subsidiary',
            scope12: '120000',
            share: '40'
        },
        {
            id: 1,
            Investment: '2',
            Type: 'Equity Investment in subsidiary',
            scope12: '200000',
            share: '15'
        },
        {
            id: 2,
            Investment: '3',
            Type: 'Equity investment in joint venture',
            scope12: '1600000',
            share: '25'
        },
        {
            id: 3,
            Investment: '4',
            Type: 'Equity investment in joint venture',
            scope12: '60000',
            share: '25'
        },
    ])
    
    useEffect(() => {
        let sum = 0
        rows.forEach(row => {
            sum += parseFloat(row.scope12) * parseFloat(row.share) / 100;
        })
        onChange(sum)
        console.log(sum);
    }, [rows])

    // const handleOnChange3 = (e) => {
    //     console.log('handle change->', e.target.value);
    //     const keyVal = e.target.value
    //     setV13(e.target.value)
    //     const v6 = dataset2[keyVal] ? dataset2[keyVal][2] : 0
    //     if (v6) setV6(v6)
    // }
    
    return (
        // <div className='SignupPage' onClick={() => setfake1(true)}>
        <div className='container'>
            <span className='title'>Input Data</span>
            <div className='table-container'>
                <table>
                    <tbody>
                        <tr>
                            <th>Investment</th>
                            <th>Investment type</th>
                            <th>Scope 1 and scope 2 emissions of investee company in reporting year (tonnes CO2e)</th>
                            <th>Reporting company’s share of equity (percent)</th>
                        </tr>
                        {rows.map((row) =>
                            <tr>
                                <td><input type='text' value={row.Investment} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        return prev.map(i => {
                                            if (i.id === row.id) {
                                                i.Investment = e.target.value
                                            }
                                            return i;
                                        })
                                    })
                                }} /></td>
                                <td><input type='text' value={row.Type} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        return prev.map(i => {
                                            if (i.id === row.id) {
                                                i.Type = e.target.value
                                            }
                                            return i;
                                        })
                                    })

                                }} /></td>
                                <td><input type='text' value={row.scope12} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        return prev.map(i => {
                                            if (i.id === row.id) {
                                                i.scope12 = e.target.value
                                            }
                                            return i;
                                        })
                                    })
                                }} /></td>
                                <td className='AddStyle'>
                                    <input type='text' value={row.share} className='Input_form' onChange={(e) => {
                                        setRows(prev => {
                                            return prev.map(i => {
                                                if (i.id === row.id) {
                                                    i.share = e.target.value
                                                }
                                                return i;
                                            })
                                        })
                                    }} />
                                    <img src={Add} alt='Add' className='AddButton' onClick={() => {
                                        setRows(prev => {
                                            const newRow = {
                                                id: Date.now(),
                                                Investment: '',
                                                Type: '',
                                                scope12: '',
                                                share: ''
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

export default InvestmentSpecific