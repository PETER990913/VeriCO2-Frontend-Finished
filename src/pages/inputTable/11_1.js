import React, { useState, useEffect } from 'react'
import '../../App.scss'
function EndWaste({ onChange }) {
    const [v0, setV0] = useState(1000000);
    const [v1, setV1] = useState(90);
    const [v2, setV2] = useState(0.3);
    const [v3, setV3] = useState(10);
    const [v4, setV4] = useState(1.0);
    const [v5, setV5] = useState(0);
    const [v6, setV6] = useState(0.0);
    const [textv0, setTextV0] = useState('Landfill');
    const [textv1, setTextV1] = useState('Incinerated');
    const [textv2, setTextV2] = useState('Recycled');
    useEffect(() => {
        onChange((Number(v0) * Number(v1) * Number(v2) + Number(v0) * Number(v3) * Number(v4) + Number(v0) * Number(v5) * Number(v6)) / 100)
    }, [
        v0, v1, v2, v3, v4, v5, v6
    ])
    return (
        // <div className='SignupPage' onClick={() => setfake1(true)}>
        <div className='container'>
            <span className='title'>Input Data</span>
            <div className='table-container'>
                <table>
                    <tbody>
                        <tr>
                            <th>Mass of waste after consumer use (kg)</th>
                            <th>Waste treatment</th>
                            <th>Proportion of waste produced (percent)</th>
                            <th>Emission factor of waste treatment method (kg CO2e/kg )</th>
                        </tr>
                        <tr>
                            <td rowSpan={3}><input type='text' value={v0} className='Input_form' onChange={(e) => { setV0(e.target.value) }} /></td>
                            <td><input type='text' value={textv0} className='Input_form' onChange={(e) => { setTextV0(e.target.value) }} /></td>
                            <td><input type='text' value={v1} className='Input_form' onChange={(e) => { setV1(e.target.value) }} /></td>
                            <td><input type='text' value={v2} className='Input_form' onChange={(e) => { setV2(e.target.value) }} /></td>
                        </tr>
                        <tr>
                            <td><input type='text' value={textv1} className='Input_form' onChange={(e) => { setTextV1(e.target.value) }} /></td>
                            <td><input type='text' value={v3} className='Input_form' onChange={(e) => { setV3(e.target.value) }} /></td>
                            <td><input type='text' value={v4} className='Input_form' onChange={(e) => { setV4(e.target.value) }} /></td>
                        </tr>
                        <tr>
                            <td><input type='text' value={textv2} className='Input_form' onChange={(e) => { setTextV2(e.target.value) }} /></td>
                            <td><input type='text' value={v5} className='Input_form' onChange={(e) => { setV5(e.target.value) }} /></td>
                            <td><input type='text' value={v6} className='Input_form' onChange={(e) => { setV6(e.target.value) }} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default EndWaste