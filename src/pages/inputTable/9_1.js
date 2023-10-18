import React, { useState, useEffect } from 'react'
import '../../App.scss'
function ProcessingSite({ onChange }) {
    const [v0, setV0] = useState(350000);
    const [v1, setV1] = useState(0.2);
    const [v2, setV2] = useState(200000);
    const [v3, setV3] = useState(0.5);
    const [v4, setV4] = useState(5000);
    const [v5, setV5] = useState(0.5);
    const [textv0, setTextV0] = useState('Natural gas');
    const [textv1, setTextV1] = useState('Electricity');
    const [textv2, setTextV2] = useState('Waste products');
    useEffect(() => {
        onChange(Number(v0) * Number(v1) + Number(v2) * Number(v3) + Number(v4) * Number(v5))
    }, [
        v0, v1, v2, v3, v4, v5
    ])
    return (
        // <div className='SignupPage' onClick={() => setfake1(true)}>
        <div className='container'>
            <span className='title'>Input Data</span>
            <div className='table-container'>
                <table>
                    <tbody>
                        <tr>
                            <th>Fuel and electricity consumed</th>
                            <th>Amount (kWh)</th>
                            <th>Emission factor (kg CO2e/kWh)</th>
                        </tr>
                        <tr>
                            <td><input type='text' value={textv0} className='Input_form' onChange={(e) => { setTextV0(e.target.value) }} /></td>
                            <td><input type='text' value={v0} className='Input_form' onChange={(e) => { setV0(e.target.value) }} /></td>
                            <td><input type='text' value={v1} className='Input_form' onChange={(e) => { setV1(e.target.value) }} /></td>
                        </tr>
                        <tr>
                            <td><input type='text' value={textv1} className='Input_form' onChange={(e) => { setTextV1(e.target.value) }} /></td>
                            <td><input type='text' value={v2} className='Input_form' onChange={(e) => { setV2(e.target.value) }} /></td>
                            <td><input type='text' value={v3} className='Input_form' onChange={(e) => { setV3(e.target.value) }} /></td>
                        </tr>
                        <tr>
                            <th>Waste</th>
                            <th>Amount (kg) </th>
                            <th> Emission factor (kg CO2e/kg waste)</th>
                        </tr>
                        <tr>
                            <td><input type='text' value={textv2} className='Input_form' onChange={(e) => { setTextV2(e.target.value) }} /></td>
                            <td><input type='text' value={v4} className='Input_form' onChange={(e) => { setV4(e.target.value) }} /></td>
                            <td><input type='text' value={v5} className='Input_form' onChange={(e) => { setV5(e.target.value) }} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProcessingSite