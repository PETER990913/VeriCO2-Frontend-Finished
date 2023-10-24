import React, { useEffect, useState } from 'react'
import '../../App.scss'
import Add from '../../assets/images/Add.png'
import Delete from '../../assets/images/Delete.png'
function PurchasedSupplierTest({ onChange, dataset, dataset1 }) {
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

    useEffect(() => {
        console.log('Dataset:::', dataset[0])
        if (dataset?.length > 0)
        setRows(prev => {
                dataset[0].forEach((d, idx) => {
                    prev[idx].qp = d[0]
                    prev[idx].ssef = d[1]
                })
            return prev
        })
    }, [dataset])
 
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
                                        return prev.map(i => {
                                            if (i.id === row.id) {
                                                i.gool = e.target.value
                                            }
                                            return i;
                                        })
                                    })
                                }} /></td>
                                <td><input type='text' value={row.supplier} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        return prev.map(i => {
                                            if (i.id === row.id) {
                                                i.supplier = e.target.value
                                            }
                                            return i;
                                        })
                                    })

                                }} /></td>
                                <td><input type='text' value={row.qp} className='Input_form' onChange={(e) => {
                                    setRows(prev => {
                                        return prev.map(i => {
                                            if (i.id === row.id) {
                                                i.qp = e.target.value
                                            }
                                            return i;
                                        })
                                    })

                                }} /></td>
                                <td className='AddStyle'>
                                    <input type='text' value={row.ssef} className='Input_form' onChange={(e) => {
                                        setRows(prev => {
                                            return prev.map(i => {
                                                if (i.id === row.id) {
                                                    i.ssef = e.target.value
                                                }
                                                return i;
                                            })
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

export default PurchasedSupplierTest