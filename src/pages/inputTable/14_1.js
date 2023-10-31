import React, { useState, useEffect, useRef } from 'react'
import '../../App.scss'
import Add from '../../assets/images/Add.png'
import Delete from '../../assets/images/Delete.png'
function InvestmentSpecific({ onChange, dataset2, dataset }) {
    const currentRef = useRef()
    const [rows, setRows] = useState([
        {
            id: 0,
            Investment: '1',
            Type: 'Equity Investment in subsidiary',
            scope12: '100000',
            share: '40'
        },
        {
            id: 1,
            Investment: '2',
            Type: 'Equity Investment in subsidiary',
            scope12: '180000',
            share: '15'
        },
        {
            id: 2,
            Investment: '3',
            Type: 'Equity investment in joint venture',
            scope12: '1000000',
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
    currentRef.current = false;
    useEffect(() => {
        const jsonData = localStorage.getItem('temp_rows_14_1');
        if (!jsonData) return;
        try {
            const _rows = JSON.parse(jsonData)
            setRows(_rows)
        } catch {

        }
    }, [])

    useEffect(() => {
        if (!dataset || !dataset.length) return;
        setRows(prev => {
            const k = [].concat([], prev)
            dataset[2].forEach((d, idx) => {
                k[idx].scope12 = d[1]
            })
            // console.log(k)
            return k
        })

    }, [dataset])

    const handleOnchange = (name, index) => {
        console.log('changed name', name)
        const value = dataset2[name]
        if (value) {
            const newDatas = [...rows]            
            newDatas.map(el => {
                if (el.id == index) {
                    el.scope12 = value[2]
                } return el;
            })
            setRows(newDatas)
        }
    }

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
                            <th>Scope 1 and scope 2 emissions of investee company in reporting year (Kg CO2e)</th>
                            <th>Reporting company’s share of equity (percent)</th>
                        </tr>
                        {rows.map((row) =>
                            <tr>
                                <td><input type='text' value={row.Investment} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        const newData = prev.map(i => {
                                            if (i.id === row.id) {
                                                i.Investment = e.target.value
                                            }
                                            return i;
                                        })
                                        localStorage.setItem('temp_rows_14_1', JSON.stringify(newData));
                                        return newData;
                                    })
                                    handleOnchange(e.target.value, row.id);
                                }} /></td>
                                <td><input type='text' value={row.Type} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        const newData = prev.map(i => {
                                            if (i.id === row.id) {
                                                i.Type = e.target.value
                                            }
                                            return i;
                                        })
                                        localStorage.setItem('temp_rows_14_1', JSON.stringify(newData));
                                        return newData;
                                    })

                                }} /></td>
                                <td><input type='text' value={row.scope12} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        const newData = prev.map(i => {
                                            if (i.id === row.id) {
                                                i.scope12 = e.target.value
                                            }
                                            return i;
                                        })
                                        localStorage.setItem('temp_rows_14_1', JSON.stringify(newData));
                                        return newData;
                                    })
                                }} /></td>
                                <td className='AddStyle'>
                                    <input type='text' value={row.share} className='Input_form' onChange={(e) => {
                                        setRows(prev => {
                                            const newData = prev.map(i => {
                                                if (i.id === row.id) {
                                                    i.share = e.target.value
                                                }
                                                return i;
                                            })
                                            localStorage.setItem('temp_rows_14_1', JSON.stringify(newData));
                                            return newData;
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

                                            const newData = [].concat(prev.slice(0, pos), newRow, prev.slice(pos))
                                            localStorage.setItem('temp_rows_14_1', JSON.stringify(newData));
                                            return newData;
                                        })
                                    }
                                    } />
                                    <img src={Delete} alt='Delete' className='AddButton' onClick={() => {
                                        setRows(prev => {
                                            let pos = prev.indexOf(prev.find(item => item.id == row.id))
                                            const newData = [].concat(prev.slice(0, pos), prev.slice(pos + 1))
                                            localStorage.setItem('temp_rows_14_1', JSON.stringify(newData));
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

export default InvestmentSpecific