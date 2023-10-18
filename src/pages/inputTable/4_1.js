import React, { useState, useEffect } from 'react'
import '../../App.scss'
function WasteWaste({ onChange, dataset1 }) {
    const [v0, setV0] = useState(2000);
    const [v1, setV1] = useState(40);
    const [v2, setV2] = useState(5000);
    const [v3, setV3] = useState(2);
    const [v4, setV4] = useState(4000);
    const [v5, setV5] = useState(10);
    const [v6, setV6] = useState(5000);
    const [v7, setV7] = useState(0.5);
    const [textv0, setTextV0] = useState('Plastic');
    const [textv1, setTextV1] = useState('Landfill');
    const [textv2, setTextV2] = useState('Plastic');
    const [textv3, setTextV3] = useState('Incinerated with energy recovery');
    const [textv4, setTextV4] = useState('Plastic');
    const [textv5, setTextV5] = useState('Recycled');
    const [textv6, setTextV6] = useState('Plastic');
    const [textv7, setTextV7] = useState('Wastewater');

    useEffect(() => {
        if (dataset1.Incinerated_with_energy_recovery) {
            setV1(dataset1.Landfill_Plastic)
            setV3(dataset1.Incinerated_with_energy_recovery)
            setV5(dataset1.Recycled_Plastic)
            setV7(dataset1.Wastewater)
        }
    }, [dataset1])


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
                            <th>Waste type</th>
                            <th>Waste  produced</th>
                            <th>Waste treatment</th>
                            <th>Waste type and waste treatment specific emission factor</th>
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

export default WasteWaste