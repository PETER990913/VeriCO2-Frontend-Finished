import React, { useState, useEffect } from 'react'
import '../../App.scss'
function UpstreamSpend({ onChange }) {
    const [v0, setV0] = useState(200000);
    const [v1, setV1] = useState(0.04);
    const [v2, setV2] = useState(300000);
    const [v3, setV3] = useState(0.15);
    const [v4, setV4] = useState(400000);
    const [v5, setV5] = useState(0.05);
    const [textv0, setTextV0] = useState('B');
    const [textv1, setTextV1] = useState('Truck (rigid, 3.5-7.5t)');
    const [textv2, setTextV2] = useState('C');
    const [textv3, setTextV3] = useState('Air (long haul)');
    const [textv4, setTextV4] = useState('D');
    const [textv5, setTextV5] = useState('Container 2,000–2,999 TEU');
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
                            <th>Supplier</th>
                            <th>Amount spent ($) </th>
                            <th>Transport mode or vehicle type </th>
                            <th>EEIO emission factor (kg CO2e/$)</th>
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
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UpstreamSpend