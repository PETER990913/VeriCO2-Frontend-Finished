import React, { useState, useEffect, useRef } from 'react'
import '../../App.scss'
import Add from '../../assets/images/Add.png'
import Delete from '../../assets/images/Delete.png'
function FranchisesSpecificTest({ onChange, dataset, dataset2 }) {
    const currentRef = useRef()
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
    currentRef.current = false;
    useEffect(() => {
        const jsonData = localStorage.getItem('temp_rows_13_1');
        if (!jsonData) return;
        try {
            const _rows = JSON.parse(jsonData)
            setRows(_rows)
        } catch {

        }
    }, [])

    useEffect(() => {
        console.log('Data------------:::', dataset)
        if (!dataset || !dataset.length) return;
        setRows(prev => {
            const k = [].concat([], prev)
            dataset[1].forEach((d, idx) => {
                k[idx].scope1 = d[1]
                k[idx].scope2 = d[2]
            })
            // console.log(k)
            return k
        })
        console.log('hi')

    }, [dataset])

    const handleOnchange = (name, index) => {
        console.log('changed name', name)
        const value = dataset2[name]
        if (value) {
            const newDatas = [...rows]
            newDatas.map(el => {
                if (el.id == index) {
                    el.scope1 = value[0]
                    el.scope2 = value[1]
                } return el;
            })
            setRows(newDatas)
        }
    }

    useEffect(() => {
        let sum = 0
        rows.forEach(row => {
            sum += parseFloat(row.scope1) + parseFloat(row.scope2);
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
                            <th>Franchisee</th>
                            <th> Scope 1 emissions (kg CO2e)</th>
                            <th>Scope 2 emissions (kg CO2e)</th>
                        </tr>
                        {rows.map((row) =>
                            <tr>
                                <td><input type='text' value={row.Franchises} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        const newData = prev.map(i => {
                                            if (i.id === row.id) {
                                                i.Franchises = e.target.value
                                            }
                                            return i;
                                        })
                                        localStorage.setItem('temp_rows_13_1', JSON.stringify(newData));
                                        return newData;
                                    })
                                    handleOnchange(e.target.value, row.id);
                                }} /></td>
                                <td><input type='text' value={row.scope1} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        const newData = prev.map(i => {
                                            if (i.id === row.id) {
                                                i.scope1 = e.target.value
                                            }
                                            return i;
                                        })
                                        localStorage.setItem('temp_rows_13_1', JSON.stringify(newData));
                                        return newData;
                                    })

                                }} /></td>
                                <td className='AddStyle'>
                                    <input type='text' value={row.scope2} className='Input_form' onChange={(e) => {
                                        setRows(prev => {
                                            const newData = prev.map(i => {
                                                if (i.id === row.id) {
                                                    i.scope2 = e.target.value
                                                }
                                                return i;
                                            })
                                            localStorage.setItem('temp_rows_13_1', JSON.stringify(newData));
                                            return newData;
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

                                            const newData = [].concat(prev.slice(0, pos), newRow, prev.slice(pos))
                                            localStorage.setItem('temp_rows_13_1', JSON.stringify(newData));
                                            return newData;
                                        })
                                    }
                                    } />
                                    <img src={Delete} alt='Delete' className='AddButton' onClick={() => {
                                        setRows(prev => {
                                            let pos = prev.indexOf(prev.find(item => item.id == row.id))
                                            const newData = [].concat(prev.slice(0, pos), prev.slice(pos + 1))
                                            localStorage.setItem('temp_rows_13_1', JSON.stringify(newData));
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

export default FranchisesSpecificTest