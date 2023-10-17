import React, { useState, useEffect } from 'react'
import '../../App.scss'
function WasteAverage({ onChange, dataset1 }) {
    const [v0, setV0] = useState(40);
    const [v1, setV1] = useState(25);
    const [v2, setV2] = useState(30);
    const [v3, setV3] = useState(5);
    const [v4, setV4] = useState(0);
    const [v5, setV5] = useState(30);
    const [v6, setV6] = useState(0);
    const [v7, setV7] = useState(20);
    const [v8, setV8] = useState(10);
    const [v9, setV9] = useState(20);
    const [v10, setV10] = useState(30);

    useEffect(() => {
        if (dataset1.Composted_Average_emission_factor) {
            setV2(dataset1.Landfill_Average_emission_factor)
            setV4(dataset1.Incinerated_with_energy_recovery_Average_emission_factor)
            setV6(dataset1.Recycled_Average_emission_factor)
            setV8(dataset1.Composted_Average_emission_factor)
        }
    }, [dataset1])

    useEffect(() => {
        onChange((Number(v0) * Number(v1) * Number(v2) + Number(v0) * Number(v3) * Number(v4) + Number(v0) * Number(v5) * Number(v6) + Number(v0) * Number(v7) * Number(v8) + Number(v0) * Number(v9) * Number(v10)) * 10)
    }, [
        v0, v1, v2, v3, v4, v5, v6, v7, v8, v9, v10
    ])
    return (
        // <div className='SignupPage' onClick={() => setfake1(true)}>
        <div className='container'>
            <span className='title'>Input Data</span>
            <div className='table-container'>
                <table>
                    <tbody>
                        <tr>
                            <th>Total waste produced (tonnes)</th>
                            <th>Waste treatment</th>
                            <th> Proportion (percent)</th>
                            <th>Average emission factor  of waste treatment method  (kg CO2e/tonne)</th>
                        </tr>
                        <tr>
                            <td rowSpan={5}><input type='text' value={v0} className='Input_form' onChange={(e) => { setV0(e.target.value) }} /></td>
                            <td>Landfill</td>
                            <td><input type='text' value={v1} className='Input_form' onChange={(e) => { setV1(e.target.value) }} /></td>
                            <td><input type='text' value={v2} className='Input_form' onChange={(e) => { setV2(e.target.value) }} /></td>
                        </tr>
                        <tr>
                            <td> Incinerated with energy recovery </td>
                            <td><input type='text' value={v3} className='Input_form' onChange={(e) => { setV3(e.target.value) }} /></td>
                            <td><input type='text' value={v4} className='Input_form' onChange={(e) => { setV4(e.target.value) }} /></td>
                        </tr>
                        <tr>
                            <td> Recycled </td>
                            <td><input type='text' value={v5} className='Input_form' onChange={(e) => { setV5(e.target.value) }} /></td>
                            <td><input type='text' value={v6} className='Input_form' onChange={(e) => { setV6(e.target.value) }} /></td>
                        </tr>
                        <tr>
                            <td> Recycled </td>
                            <td><input type='text' value={v7} className='Input_form' onChange={(e) => { setV7(e.target.value) }} /></td>
                            <td><input type='text' value={v8} className='Input_form' onChange={(e) => { setV8(e.target.value) }} /></td>
                        </tr>
                        <tr>
                            <td> Composted </td>
                            <td><input type='text' value={v9} className='Input_form' onChange={(e) => { setV9(e.target.value) }} /></td>
                            <td><input type='text' value={v10} className='Input_form' onChange={(e) => { setV10(e.target.value) }} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default WasteAverage