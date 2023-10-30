import React, { useEffect, useState, useRef } from 'react'
import '../../App.scss'
import Add from '../../assets/images/Add.png'
import Delete from '../../assets/images/Delete.png'
function CapitalGoodSupplier({ onChange, dataset, dataset1 }) {
    const currentRef = useRef()
    const [rows, setRows] = useState([
        {
            id: 0,
            gool: 'Cement',
            supplier: 'Supplier C',
            qp: '200000',
            ssef: '0.15'
        },
        {
            id: 1,
            gool: 'Plaster',
            supplier: 'Supplier D',
            qp: '600000',
            ssef: '0.1'
        },
        {
            id: 2,
            gool: 'Paint',
            supplier: 'Supplier E',
            qp: '200000',
            ssef: '0.1'
        },
        {
            id: 3,
            gool: 'Timber',
            supplier: 'Supplier F',
            qp: '100000',
            ssef: '0.25'
        },
        {
            id: 4,
            gool: 'Concrete',
            supplier: 'Supplier G',
            qp: '50000',
            ssef: '0.2'
        },
    ])
    currentRef.current = false;

    useEffect(() => {
        const jsonData = localStorage.getItem('temp_rows');
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
                if (dataset1.hasOwnProperty(k[idx].gool)) {
                    k[idx].ssef = dataset1[k[idx].gool]
                }
                else {
                    k[idx].ssef = k[idx].ssef
                }
            })
            return k
        })
    }, [dataset1])

    useEffect(() => {
        console.log('Dataset:::', dataset[0])
        if (!dataset || !dataset.length) return;
        setRows(prev => {
            const k = [].concat([], prev)
            dataset[0].forEach((d, idx) => {
                k[idx].qp = d[0]
                k[idx].ssef = d[1]
            })
            console.log(k)
            return k
        })
        console.log('hi')

    }, [dataset])

    useEffect(() => {
        console.log('Dataset1:-----', dataset1)
        if (!dataset1 || !dataset1.length) return;
        setRows(prev => {
            const k = [].concat([], prev)
            // dataset1.forEach((d, idx) => {
            //     k[idx].ssef = d[k.gool]
            // })
            // console.log(k)
            console.log('kkkkkkkkkkkkk', k)
            return k
        })
        console.log('hi Dataset1')

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
        <div>
            <span className='title'>Input Data</span>
            <div className='table-container'>
                <table>
                    <tbody>
                        <tr>
                            <th>Purchased good</th>
                            <th>Supplier</th>
                            <th>Quantities purchased(kg)</th>
                            <th>Surpplier-specific emission factor(kgco2/kg)</th>
                        </tr>

                        {rows.map((row) =>
                            <tr>
                                <td><input type='text' value={row.gool} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        const newData = prev.map(i => {
                                            if (i.id === row.id) {
                                                i.gool = e.target.value
                                                localStorage.setItem('1_1_gool', i.gool)
                                            }
                                            return i;
                                        })
                                        localStorage.setItem('temp_rows', JSON.stringify(newData));
                                        return newData;
                                    })
                                }} /></td>
                                <td><input type='text' value={row.supplier} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        const newData = prev.map(i => {
                                            if (i.id === row.id) {
                                                i.supplier = e.target.value
                                                localStorage.setItem('1_1_supplier', i.supplier)
                                            }
                                            return i;
                                        })
                                        localStorage.setItem('temp_rows', JSON.stringify(newData))
                                        return newData
                                    })

                                }} /></td>
                                <td><input type='text' value={row.qp} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        const newData = prev.map(i => {
                                            if (i.id === row.id) {
                                                i.qp = e.target.value
                                                localStorage.setItem('1_1_qp', i.qp)
                                            }
                                            return i;
                                        })
                                        localStorage.setItem('temp_rows', JSON.stringify(newData));
                                        return newData;
                                    })

                                }} /></td>
                                <td className='AddStyle'>
                                    <input type='text' value={row.ssef} className='Input_form' onChange={(e) => {
                                        setRows(prev => {
                                            const newData = prev.map(i => {
                                                if (i.id === row.id) {
                                                    i.ssef = e.target.value
                                                    localStorage.setItem('1_1_ssef', i.ssef)
                                                }
                                                return i;
                                            })
                                            localStorage.setItem('temp_rows', JSON.stringify(newData));
                                            return newData
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
                                            localStorage.setItem('temp_rows', JSON.stringify(newData))
                                            return newData
                                        })
                                    }
                                    } />
                                    <img src={Delete} alt='Delete' className='AddButton' onClick={() => {
                                        setRows(prev => {
                                            let pos = prev.indexOf(prev.find(item => item.id == row.id))
                                            const newData = [].concat(prev.slice(0, pos), prev.slice(pos + 1))
                                            localStorage.setItem('temp_rows', JSON.stringify(newData));
                                            return newData

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

export default CapitalGoodSupplier