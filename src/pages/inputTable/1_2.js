import React, { useEffect, useState } from 'react'
import '../../App.scss'
import Add from '../../assets/images/Add.png'
import Delete from '../../assets/images/Delete.png'
function PurchasedHybrid({ onChange, dataset1 }) {
    const [rows, setRows] = useState([
        {
            id: 0,
            gool: 'Electricity',
            qp: '5000',
            ssef: '0.5'
        },
        {
            id: 1,
            gool: 'Natural gas',
            qp: '2500',
            ssef: '0.2'
        },
    ])

    const [rows1, setRows1] = useState([
        {
            id: 0,
            gool: 'Cotton',
            qp: '5000',
            ssef: '7'
        },
        {
            id: 1,
            gool: 'Polymer',
            qp: '2500',
            ssef: '5'
        },
        {
            id: 2,
            gool: 'Chemical A',
            qp: '500',
            ssef: '2'
        },
        {
            id: 3,
            gool: 'Chemical B',
            qp: '500',
            ssef: '1.5'
        },
    ])

    const [rows2, setRows2] = useState([
        {
            id: 0,
            gool: 'Cotton',
            qp: '1000',
            ssef: '0.01'
        },
        {
            id: 1,
            gool: 'Polymer',
            qp: '2500',
            ssef: '0.02'
        },
        {
            id: 2,
            gool: 'Chemical A',
            qp: '800',
            ssef: '0.05'
        },
        {
            id: 3,
            gool: 'Chemical B',
            qp: '200',
            ssef: '0.1'
        },
    ])

    const [rows3, setRows3] = useState([
        {
            id: 0,
            gool: 'Waste sent to landfill',
            qp: '100',
            ssef: '0'
        },
    ])


    useEffect(() => {
        let sum = 0
        let sum1 = 0
        let sum2 = 0
        let sum3 = 0
        rows.forEach(row => {
            sum += parseFloat(row.qp) * parseFloat(row.ssef);
        })
        rows1.forEach(row1 => {
            sum1 += parseFloat(row1.qp) * parseFloat(row1.ssef);
        })
        rows2.forEach(row2 => {
            sum2 += parseFloat(row2.qp) * parseFloat(row2.ssef);
        })
        rows3.forEach(row3 => {
            sum3 += parseFloat(row3.qp) * parseFloat(row3.ssef);
        })
        onChange(sum + sum1 + sum2 + sum3)
        console.log(sum + sum1 + sum2 + sum3);
    }, [rows], [rows1], [rows2], [rows3])

    // useEffect(() => {
    //     if (dataset1.Electricity) {
    //         setV1(dataset1.Electricity)
    //         setV5(dataset1.Natural_gas)
    //         setV7(dataset1.Cotton_mass)
    //         setV9(dataset1.Polymer_mass)
    //         setV11(dataset1.Chemical_A_mass)
    //         setV13(dataset1.Chemical_B_mass)
    //         setV15(dataset1.Cotton_distance)
    //         setV17(dataset1.Polymer_distance)
    //         setV19(dataset1.Chemical_A_distance)
    //         setV21(dataset1.Chemical_B_distance)
    //     }
    // }, [dataset1])

    return (
        // <div className='SignupPage' onClick={() => setfake1(true)}>
        <div>
            <span className='title'>Input Data</span>
            <div className='table-container'>
                <table>
                    <tbody>
                        <tr>
                            <th></th>
                            <th>Amount (kWh)</th>
                            <th>Emission factor (kg CO2e/kWh)</th>
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
                        <tr>
                            <th></th>
                            <th>Mass purchased (kg)</th>
                            <th>Emission factor (kg CO2e/kg)</th>
                        </tr>
                        {rows1.map((row1) =>
                            <tr>
                                <td><input type='text' value={row1.gool} className='Input_form' onChange={(e) => {
                                    setRows1(prev => {
                                        return prev.map(i => {
                                            if (i.id === row1.id) {
                                                i.gool = e.target.value
                                            }
                                            return i;
                                        })
                                    })
                                }} /></td>
                                <td><input type='text' value={row1.qp} className='Input_form' onChange={(e) => {
                                    setRows1(prev => {
                                        return prev.map(i => {
                                            if (i.id === row1.id) {
                                                i.qp = e.target.value
                                            }
                                            return i;
                                        })
                                    })

                                }} /></td>
                                <td className='AddStyle'>
                                    <input type='text' value={row1.ssef} className='Input_form' onChange={(e) => {
                                        setRows1(prev => {
                                            return prev.map(i => {
                                                if (i.id === row1.id) {
                                                    i.ssef = e.target.value
                                                }
                                                return i;
                                            })
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

                                            return [].concat(prev.slice(0, pos), newRow, prev.slice(pos))
                                        })
                                    }
                                    } />
                                    <img src={Delete} alt='Delete' className='AddButton' onClick={() => {
                                        setRows1(prev => {
                                            let pos = prev.indexOf(prev.find(item => item.id == row1.id))
                                            return [].concat(prev.slice(0, pos), prev.slice(pos + 1))
                                        })
                                    }} />
                                </td>
                            </tr>
                        )}
                        <tr>
                            <th></th>
                            <th>Distance of transport (km)</th>
                            <th>Vehicle type emission factor (kg CO2e/kg/km)</th>
                        </tr>

                        {rows2.map((row2) =>
                            <tr>
                                <td><input type='text' value={row2.gool} className='Input_form' onChange={(e) => {
                                    setRows2(prev => {
                                        return prev.map(i => {
                                            if (i.id === row2.id) {
                                                i.gool = e.target.value
                                            }
                                            return i;
                                        })
                                    })
                                }} /></td>
                                <td><input type='text' value={row2.qp} className='Input_form' onChange={(e) => {
                                    setRows2(prev => {
                                        return prev.map(i => {
                                            if (i.id === row2.id) {
                                                i.qp = e.target.value
                                            }
                                            return i;
                                        })
                                    })

                                }} /></td>
                                <td className='AddStyle'>
                                    <input type='text' value={row2.ssef} className='Input_form' onChange={(e) => {
                                        setRows2(prev => {
                                            return prev.map(i => {
                                                if (i.id === row2.id) {
                                                    i.ssef = e.target.value
                                                }
                                                return i;
                                            })
                                        })

                                    }} />
                                    <img src={Add} alt='Add' className='AddButton' onClick={() => {
                                        setRows2(prev => {
                                            const newRow = {
                                                id: Date.now(),
                                                gool: '',
                                                qp: '',
                                                ssef: ''
                                            }
                                            let pos = prev.indexOf(prev.find(item => item.id === row2.id)) + 1

                                            return [].concat(prev.slice(0, pos), newRow, prev.slice(pos))
                                        })
                                    }
                                    } />
                                    <img src={Delete} alt='Delete' className='AddButton' onClick={() => {
                                        setRows2(prev => {
                                            let pos = prev.indexOf(prev.find(item => item.id == row2.id))
                                            return [].concat(prev.slice(0, pos), prev.slice(pos + 1))
                                        })
                                    }} />
                                </td>
                            </tr>
                        )}
                        <tr>
                            <th></th>
                            <th>Amount (kg)</th>
                            <th>Emission factor (kg CO2e/kg of waste sent to landfill)</th>
                        </tr>
                        {rows3.map((row3) =>
                            <tr>
                                <td><input type='text' value={row3.gool} className='Input_form' onChange={(e) => {
                                    setRows3(prev => {
                                        return prev.map(i => {
                                            if (i.id === row3.id) {
                                                i.gool = e.target.value
                                            }
                                            return i;
                                        })
                                    })
                                }} /></td>
                                <td><input type='text' value={row3.qp} className='Input_form' onChange={(e) => {
                                    setRows3(prev => {
                                        return prev.map(i => {
                                            if (i.id === row3.id) {
                                                i.qp = e.target.value
                                            }
                                            return i;
                                        })
                                    })

                                }} /></td>
                                <td className='AddStyle'>
                                    <input type='text' value={row3.ssef} className='Input_form' onChange={(e) => {
                                        setRows3(prev => {
                                            return prev.map(i => {
                                                if (i.id === row3.id) {
                                                    i.ssef = e.target.value
                                                }
                                                return i;
                                            })
                                        })

                                    }} />
                                    <img src={Add} alt='Add' className='AddButton' onClick={() => {
                                        setRows3(prev => {
                                            const newRow = {
                                                id: Date.now(),
                                                gool: '',
                                                qp: '',
                                                ssef: ''
                                            }
                                            let pos = prev.indexOf(prev.find(item => item.id === row3.id)) + 1

                                            return [].concat(prev.slice(0, pos), newRow, prev.slice(pos))
                                        })
                                    }
                                    } />
                                    <img src={Delete} alt='Delete' className='AddButton' onClick={() => {
                                        setRows3(prev => {
                                            let pos = prev.indexOf(prev.find(item => item.id == row3.id))
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

export default PurchasedHybrid