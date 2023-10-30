import React, { useState, useEffect, useRef } from 'react'
import '../../App.scss'
import Add from '../../assets/images/Add.png'
import Delete from '../../assets/images/Delete.png'
function CapitalGoodSpend({ onChange, dataset1 }) {
    const currentRef = useRef()
    const [rows, setRows] = useState([
        {
            id: 0,
            gool: 'Hard drive',
            qp: '400',
            ssef: '20'
        },
        {
            id: 1,
            gool: 'Integrated circuits',
            qp: '200',
            ssef: '10'
        },
        {
            id: 2,
            gool: 'Liquid Crystal Display (LCD)',
            qp: '500',
            ssef: '40'
        },
        {
            id: 3,
            gool: 'Semiconductors',
            qp: '100',
            ssef: '70'
        },
        {
            id: 4,
            gool: 'Battery',
            qp: '1500',
            ssef: '3'
        },
        {
            id: 5,
            gool: 'Keyboard',
            qp: '300',
            ssef: '3'
        },
    ])

    const [rows1, setRows1] = useState([
        {
            id: 0,
            gool: 'Plastic (PS)',
            qp: '5000',
            ssef: '0.3'
        },
        {
            id: 1,
            gool: 'Plastic (ABS)',
            qp: '3000',
            ssef: '0.3'
        },
        {
            id: 2,
            gool: 'PET (film)',
            qp: '4000',
            ssef: '0.3'
        },
        {
            id: 3,
            gool: 'Aluminum',
            qp: '6000',
            ssef: '0.5'
        },
        {
            id: 4,
            gool: 'Steel',
            qp: '1500',
            ssef: '0.2'
        },
        {
            id: 5,
            gool: 'Cyclohexane',
            qp: '5000',
            ssef: '0.2'
        },
        {
            id: 6,
            gool: 'Epoxy resin',
            qp: '5000',
            ssef: '0.3'
        },
        {
            id: 7,
            gool: 'Copper',
            qp: '1000',
            ssef: '0.3'
        },
        {
            id: 8,
            gool: 'Glass',
            qp: '5000',
            ssef: '0.4'
        },
    ])
    currentRef.current = false;
    useEffect(() => {
        const jsonData = localStorage.getItem('temp_rows_1_4_1');
        if (!jsonData) return;
        try {
            const _rows = JSON.parse(jsonData)
            setRows(_rows)
        } catch {

        }
    }, [])
    useEffect(() => {
        const jsonData = localStorage.getItem('temp_rows_1_4_2');
        if (!jsonData) return;
        try {
            const _rows = JSON.parse(jsonData)
            setRows1(_rows)
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

        setRows1(prev => {
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
        let sum = 0
        let sum1 = 0
        rows.forEach(row => {
            sum += parseFloat(row.qp) * parseFloat(row.ssef);
        })
        rows1.forEach(row1 => {
            sum1 += parseFloat(row1.qp) * parseFloat(row1.ssef);
        })
        onChange(sum + sum1)
    }, [rows], [rows1])
    const [v0, setV0] = useState(400);
    const [v1, setV1] = useState(20);
    const [v2, setV2] = useState(200);
    const [v3, setV3] = useState(10);
    const [v4, setV4] = useState(500);
    const [v5, setV5] = useState(40);
    const [v6, setV6] = useState(100);
    const [v7, setV7] = useState(70);
    const [v8, setV8] = useState(1500);
    const [v9, setV9] = useState(3);
    const [v10, setV10] = useState(300);
    const [v11, setV11] = useState(3);
    const [v12, setV12] = useState(5000);
    const [v13, setV13] = useState(0.3);
    const [v14, setV14] = useState(3000);
    const [v15, setV15] = useState(0.3);
    const [v16, setV16] = useState(4000);
    const [v17, setV17] = useState(0.3);
    const [v18, setV18] = useState(6000);
    const [v19, setV19] = useState(0.5);
    const [v20, setV20] = useState(1500);
    const [v21, setV21] = useState(0.2);
    const [v22, setV22] = useState(5000);
    const [v23, setV23] = useState(0.2);
    const [v24, setV24] = useState(5000);
    const [v25, setV25] = useState(0.3);
    const [v26, setV26] = useState(1000);
    const [v27, setV27] = useState(0.3);
    const [v28, setV28] = useState(5000);
    const [v29, setV29] = useState(0.4);
    const [textv0, setTextV0] = useState('Hard drive');
    const [textv1, setTextV1] = useState('Integrated circuits');
    const [textv2, setTextV2] = useState('Liquid Crystal Display (LCD)');
    const [textv3, setTextV3] = useState('Semiconductors');
    const [textv4, setTextV4] = useState('Battery');
    const [textv5, setTextV5] = useState('Keyboard');
    const [textv6, setTextV6] = useState('Plastic (PS)');
    const [textv7, setTextV7] = useState('Plastic (ABS)');
    const [textv8, setTextV8] = useState('PET (film)');
    const [textv9, setTextV9] = useState('Aluminum');
    const [textv10, setTextV10] = useState('Steel');
    const [textv11, setTextV11] = useState('Cyclohexane');
    const [textv12, setTextV12] = useState('Epoxy resin');
    const [textv13, setTextV13] = useState('Copper');
    const [textv14, setTextV14] = useState('Glass');

    useEffect(() => {
        if (dataset1.Aluminum) {
            setV1(dataset1.Hard_drive)
            setV5(dataset1.Integrated_circuits)
            setV7(dataset1.Liquid_Crystal_Display)
            setV15(dataset1.Plastic_PS)
            setV17(dataset1.Plastic_ABS)
            setV19(dataset1.PET_film)
            setV21(dataset1.Aluminum)
            setV23(dataset1.Steel)
            setV25(dataset1.Epoxy_resin)
            setV27(dataset1.Copper)
            setV29(dataset1.Glass)
        }
    }, [dataset1])

    useEffect(() => {
        onChange(Number(v0) * Number(v1) + Number(v2) * Number(v3) + Number(v4) * Number(v5) + Number(v6) * Number(v7) + Number(v8) * Number(v9) + Number(v10) * Number(v11) + Number(v12) * Number(v13) + Number(v14) * Number(v15) + Number(v16) * Number(v17) + Number(v18) * Number(v19) + Number(v20) * Number(v21) + Number(v22) * Number(v23) + Number(v24) * Number(v25) + Number(v26) * Number(v27) + Number(v28) * Number(v29))
    }, [
        v0, v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15, v16, v17, v18, v19, v20, v21, v22, v23, v24, v25, v26, v27, v28, v29
    ])
    return (
        // <div className='SignupPage' onClick={() => setfake1(true)}>
        <div>
            <span className='title'>Input Data</span>
            <div className='table-container'>
                <table>
                    <tbody>
                        <tr>
                            <th>Purchased semi-processed components</th>
                            <th>Mass (kg)</th>
                            <th>Emission factor (kg CO2e/kg)</th>
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
                                        localStorage.setItem('temp_rows_1_4_1', JSON.stringify(newData));
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
                                        localStorage.setItem('temp_rows_1_4_1', JSON.stringify(newData));
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
                                            localStorage.setItem('temp_rows_1_4_1', JSON.stringify(newData));
                                            return newData;
                                        })

                                    }} />
                                    <img src={Add} alt='Add' className='AddButton' onClick={() => {
                                        setRows(prev => {
                                            const newRow = {
                                                id: Date.now(),
                                                gool: '',
                                                qp: '',
                                                ssef: ''
                                            }
                                            let pos = prev.indexOf(prev.find(item => item.id === row.id)) + 1

                                            const newData = [].concat(prev.slice(0, pos), newRow, prev.slice(pos))
                                            localStorage.setItem('temp_rows_1_4_1', JSON.stringify(newData));
                                            return newData;
                                        })
                                    }
                                    } />
                                    <img src={Delete} alt='Delete' className='AddButton' onClick={() => {
                                        setRows(prev => {
                                            let pos = prev.indexOf(prev.find(item => item.id == row.id))
                                            const newData = [].concat(prev.slice(0, pos), prev.slice(pos + 1))
                                            localStorage.setItem('temp_rows_1_4_1', JSON.stringify(newData));
                                            return newData;
                                        })
                                    }} />
                                </td>
                            </tr>
                        )}
                        <tr>
                            <th>Purchased raw materials</th>
                            <th> Value ($)</th>
                            <th>Emission factor (kg CO2e/$)</th>
                        </tr>
                        {rows1.map((row1) =>
                            <tr>
                                <td><input type='text' value={row1.gool} className='Input_form' onChange={(e) => {
                                    setRows1(prev => {
                                        const newData = prev.map(i => {
                                            if (i.id === row1.id) {
                                                i.gool = e.target.value
                                            }
                                            return i;
                                        })
                                        localStorage.setItem('temp_rows_1_4_2', JSON.stringify(newData));
                                        return newData;
                                    })
                                }} /></td>
                                <td><input type='text' value={row1.qp} className='Input_form' onChange={(e) => {
                                    setRows1(prev => {
                                        const newData = prev.map(i => {
                                            if (i.id === row1.id) {
                                                i.qp = e.target.value
                                            }
                                            return i;
                                        })
                                        localStorage.setItem('temp_rows_1_4_2', JSON.stringify(newData));
                                        return newData;
                                    })

                                }} /></td>
                                <td className='AddStyle'>
                                    <input type='text' value={row1.ssef} className='Input_form' onChange={(e) => {
                                        setRows1(prev => {
                                            const newData = prev.map(i => {
                                                if (i.id === row1.id) {
                                                    i.ssef = e.target.value
                                                }
                                                return i;
                                            })
                                            localStorage.setItem('temp_rows_1_4_2', JSON.stringify(newData));
                                            return newData;
                                        })

                                    }} />
                                    <img src={Add} alt='Add' className='AddButton' onClick={() => {
                                        setRows1(prev => {
                                            const newRow = {
                                                id: Date.now(),
                                                gool: '',
                                                qp: '',
                                                ssef: ''
                                            }
                                            let pos = prev.indexOf(prev.find(item => item.id === row1.id)) + 1

                                            const newData = [].concat(prev.slice(0, pos), newRow, prev.slice(pos))
                                            localStorage.setItem('temp_rows_1_4_2', JSON.stringify(newData));
                                            return newData;
                                        })
                                    }
                                    } />
                                    <img src={Delete} alt='Delete' className='AddButton' onClick={() => {
                                        setRows1(prev => {
                                            let pos = prev.indexOf(prev.find(item => item.id == row1.id))
                                            const newData = [].concat(prev.slice(0, pos), prev.slice(pos + 1))
                                            localStorage.setItem('temp_rows_1_4_2', JSON.stringify(newData));
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

export default CapitalGoodSpend