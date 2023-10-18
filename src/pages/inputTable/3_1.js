import React, { useState, useEffect } from 'react'
import '../../App.scss'
function UpstreamFuel({ onChange }) {
    const [v0, setV0] = useState(5000);
    const [v1, setV1] = useState(3);
    const [v2, setV2] = useState(8000);
    const [v3, setV3] = useState(3);
    const [v4, setV4] = useState(9000);
    const [v5, setV5] = useState(3);
    const [v6, setV6] = useState(50);
    const [v7, setV7] = useState(2000);
    const [textv0, setTextV0] = useState('B');
    const [textv1, setTextV1] = useState('Diesel');
    const [textv2, setTextV2] = useState('C');
    const [textv3, setTextV3] = useState('Diesel');
    const [textv4, setTextV4] = useState('D');
    const [textv5, setTextV5] = useState('Diesel');
    const [textv6, setTextV6] = useState('D');
    const [textv7, setTextV7] = useState('Refrigerant R410a');
    useEffect(() => {
        onChange(Number(v0) * Number(v1) + Number(v2) * Number(v3) + Number(v4) * Number(v5) + Number(v6) * Number(v7))
    }, [
        v0, v1, v2, v3, v4, v5, v6, v7
    ])
    return (
        // <div className='SignupPage' onClick={() => setfake1(true)}>
        <div className='container'>
            <span className='title'>Input Data</span>
            <div className='table-container'>
                <table>
                    <tbody>
                        <tr>
                            <th>Supplier</th>
                            <th>Fuel consumed (liters) or refrigerant leakage (kg)</th>
                            <th>Fuel/refrigerant type</th>
                            <th>Emission factor (kg CO2e/ liter for fuels)</th>
                        </tr>
                        <tr>
                            <td><input type='text' value={textv0} className='Input_form' onChange={(e) => { setTextV0(e.target.value) }} /></td>
                            <td><input type='text' value={v0} className='Input_form' onChange={(e) => { setV0(e.target.value) }} /></td>
                            <td><input type='text' value={textv1} className='Input_form' onChange={(e) => { setTextV1(e.target.value) }} /></td>
                            <td><input type='text' value={v1} className='Input_form' onChange={(e) => { setV1(e.target.value) }} /></td>
                        </tr>
                        <tr>
                            <td><input type='text' value={textv2} className='Input_form' onChange={(e) => { setTextV2(e.target.value) }} /></td>
                            <td><input type='text' value={v2} className='Input_form' onChange={(e) => { setV2(e.target.value) }} /></td>
                            <td><input type='text' value={textv3} className='Input_form' onChange={(e) => { setTextV3(e.target.value) }} /></td>
                            <td><input type='text' value={v3} className='Input_form' onChange={(e) => { setV3(e.target.value) }} /></td>
                        </tr>
                        <tr>
                            <td><input type='text' value={textv4} className='Input_form' onChange={(e) => { setTextV4(e.target.value) }} /></td>
                            <td><input type='text' value={v4} className='Input_form' onChange={(e) => { setV4(e.target.value) }} /></td>
                            <td><input type='text' value={textv5} className='Input_form' onChange={(e) => { setTextV5(e.target.value) }} /></td>
                            <td><input type='text' value={v5} className='Input_form' onChange={(e) => { setV5(e.target.value) }} /></td>
                        </tr>
                        <tr>
                            <td><input type='text' value={textv6} className='Input_form' onChange={(e) => { setTextV6(e.target.value) }} /></td>
                            <td><input type='text' value={v6} className='Input_form' onChange={(e) => { setV6(e.target.value) }} /></td>
                            <td><input type='text' value={textv7} className='Input_form' onChange={(e) => { setTextV7(e.target.value) }} /></td>
                            <td><input type='text' value={v7} className='Input_form' onChange={(e) => { setV7(e.target.value) }} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UpstreamFuel