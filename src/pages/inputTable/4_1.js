import React, { useState, useEffect, useRef } from 'react'
import '../../App.scss'
import Add from '../../assets/images/Add.png'
import Delete from '../../assets/images/Delete.png'
function WasteWaste({ onChange, dataset1 }) {
    const currentRef = useRef()
    const [rows, setRows] = useState([
        {
            id: 0,
            gool: 'Plastic',
            qp: '2000',
            supplier: 'Landfill',
            ssef: '40'
        },
        {
            id: 1,
            gool: 'Plastic',
            qp: '5000',
            supplier: 'Incinerated',
            ssef: '2'
        },
        {
            id: 2,
            gool: 'Plastic',
            qp: '4000',
            supplier: 'Recycled',
            ssef: '10'
        },
        {
            id: 3,
            gool: 'Plastic',
            qp: '5000',
            supplier: 'Wastewater',
            ssef: '0.5'
        },
    ])
    currentRef.current = false;
    useEffect(() => {
        const jsonData = localStorage.getItem('temp_rows_4_1');
        if (!jsonData) return;
        try {
            const _rows = JSON.parse(jsonData)
            setRows(_rows)
        } catch {

        }
    }, [])

    useEffect(() => {
        console.log('Dataset1:-----', dataset1)
        if (!dataset1 || Object.keys(dataset1).length == 0) return;
        setRows(prev => {
            const k = [].concat([], prev)
            prev.forEach((d, idx) => {
                if (dataset1.hasOwnProperty(k[idx].supplier)) {
                    k[idx].ssef = dataset1[k[idx].supplier]
                }
                else {
                    k[idx].ssef = k[idx].ssef
                }
            })
            return k
        })
    }, [dataset1])

    useEffect(() => {
        let sum = 0
        rows.forEach(row => {
            sum += parseFloat(row.qp) * parseFloat(row.ssef);
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
                            <th>Waste type</th>
                            <th>Waste  produced</th>
                            <th>Waste treatment</th>
                            <th>Waste type and waste treatment specific emission factor</th>
                        </tr>
                        {rows.map((row) =>
                            <tr>
                                <td><input type='text' value={row.gool} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        const newData = prev.map(i => {
                                            if (i.id === row.id) {
                                                i.gool = e.target.value
                                            }
                                            return i;
                                        })
                                        localStorage.setItem('temp_rows_4_1', JSON.stringify(newData));
                                        return newData;
                                    })
                                }} /></td>
                                <td><input type='text' value={row.qp} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        const newData = prev.map(i => {
                                            if (i.id === row.id) {
                                                i.qp = e.target.value
                                            }
                                            return i;
                                        })
                                        localStorage.setItem('temp_rows_4_1', JSON.stringify(newData));
                                        return newData;
                                    })

                                }} /></td>
                                <td><input type='text' value={row.supplier} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        const newData = prev.map(i => {
                                            if (i.id === row.id) {
                                                i.supplier = e.target.value
                                            }
                                            return i;
                                        })
                                        localStorage.setItem('temp_rows_4_1', JSON.stringify(newData));
                                        return newData;
                                    })

                                }} /></td>
                                <td className='AddStyle'>
                                    <input type='text' value={row.ssef} className='Input_form' onChange={(e) => {
                                        setRows(prev => {
                                            const newData = prev.map(i => {
                                                if (i.id === row.id) {
                                                    i.ssef = e.target.value
                                                }
                                                return i;
                                            })
                                            localStorage.setItem('temp_rows_4_1', JSON.stringify(newData));
                                            return newData;
                                        })

                                    }} />
                                    <img src={Add} alt='Add' className='AddButton' onClick={() => {
                                        setRows(prev => {
                                            const newRow = {
                                                id: Date.now(),
                                                gool: '',
                                                supplier: '',
                                                qp: '',
                                                ssef: ''
                                            }
                                            let pos = prev.indexOf(prev.find(item => item.id === row.id)) + 1

                                            const newData = [].concat(prev.slice(0, pos), newRow, prev.slice(pos))
                                            localStorage.setItem('temp_rows_4_1', JSON.stringify(newData));
                                            return newData;
                                        })
                                    }
                                    } />
                                    <img src={Delete} alt='Delete' className='AddButton' onClick={() => {
                                        setRows(prev => {
                                            let pos = prev.indexOf(prev.find(item => item.id == row.id))
                                            const newData = [].concat(prev.slice(0, pos), prev.slice(pos + 1))
                                            localStorage.setItem('temp_rows_4_1', JSON.stringify(newData));
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

export default WasteWaste