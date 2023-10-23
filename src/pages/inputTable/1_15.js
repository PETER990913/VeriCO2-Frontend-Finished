import React, { useState, useEffect } from 'react'
import '../../App.scss'
function FuelTransmission({ onChange, dataset1 }) {
    const [v0, setV0] = useState(50000);
    const [v1, setV1] = useState("N/A");
    const [v2, setV2] = useState(60000);
    const [v3, setV3] = useState(50000);
    const [v4, setV4] = useState(40000);
    const [v5, setV5] = useState("N/A");
    const [v6, setV6] = useState(200000);
    const [v7, setV7] = useState("N/A");
    const [v8, setV8] = useState(0.12);
    const [v9, setV9] = useState(0.8);
    const [v10, setV10] = useState(10);
    const [v11, setV11] = useState("N/A");
    const [v12, setV12] = useState(0.10);
    const [v13, setV13] = useState(0.4);
    const [v14, setV14] = useState(13);
    const [v15, setV15] = useState(0.05);
    const [v16, setV16] = useState(0.15);
    const [v17, setV17] = useState(5);
    const [v18, setV18] = useState(0.15);
    const [v19, setV19] = useState(0.8);
    const [v20, setV20] = useState(15);
    const [v21, setV21] = useState("N/A");
    const [v22, setV22] = useState(0.10);
    const [v23, setV23] = useState(0.5);
    const [v24, setV24] = useState(10);
    const [v25, setV25] = useState("N/A");
    const [v26, setV26] = useState(0.05);
    const [v27, setV27] = useState(0.4);
    const [v28, setV28] = useState(12);
    const [v29, setV29] = useState("N/A");
    const [v30, setV30] = useState(550000);
    const [v31, setV31] = useState("N/A");
    const [AddNumber, setAddNumber] = useState(0)
    const handleAddNumber = () => {
        setAddNumber(AddNumber + 1)
    }
    // const [v32, setV32] = useState(0);
    // const [v33, setV33] = useState(0);
    // const [v34, setV34] = useState(0);
    // const [v35, setV35] = useState(0);
    // const [v36, setV36] = useState(0);
    // const [v37, setV37] = useState(0);
    // const [v38, setV38] = useState(0);
    // const [v39, setV39] = useState(0);
    // const [v40, setV40] = useState(0);
    // const [v41, setV41] = useState(0);
    // const [v42, setV42] = useState(0);
    // const [v43, setV43] = useState(0);
    // const [v44, setV44] = useState(0);
    // const [v45, setV45] = useState(0);
    // const [v46, setV46] = useState(0);
    // const [v47, setV47] = useState(0);
    // const [v48, setV48] = useState(0);
    // const [v49, setV49] = useState(0);
    // const [v50, setV50] = useState(0);
    // const [v51, setV51] = useState(0);
    const [textv0, setTextV0] = useState('Australia');
    const [textv1, setTextV1] = useState('Canada');
    const [textv2, setTextV2] = useState('India');
    const [textv3, setTextV3] = useState('United States');
    const [textv4, setTextV4] = useState('Turkey');
    const [textv5, setTextV5] = useState('Australia');
    const [textv6, setTextV6] = useState('Canada');
    const [textv7, setTextV7] = useState('India');
    const [textv8, setTextV8] = useState('United States');
    const [textv9, setTextV9] = useState('Turkey');
    // const [textv10, setTextV10] = useState('');
    // const [textv11, setTextV11] = useState('');
    // const [textv12, setTextV12] = useState('');
    // const [textv13, setTextV13] = useState('');
    // const [textv14, setTextV14] = useState('');

    useEffect(() => {
        if (dataset1.Australia_Upstream_emission_factor) {
            setV8(dataset1.Australia_Upstream_emission_factor)
            setV12(dataset1.Canada_Upstream_emission_factor)
            setV18(dataset1.India_Upstream_emission_factor)
            setV22(dataset1.United_States_Upstream_emission_factor)
            setV26(dataset1.Turkey_Upstream_emission_factor)
        }
    }, [dataset1])

    useEffect(() => {
        onChange(Number(v0) * Number(v8) + Number(v2) * Number(v12) + Number(v4) * Number(v18) + Number(v30) * Number(v22) + Number(v6) * Number(v26) + Number(v0) * Number(v9) * Number(v10) / 100 + Number(v2) * Number(v13) * Number(v14) / 100 + Number(v3) * Number(v16) * Number(v17) / 100 + Number(v4) * Number(v19) * Number(v20) / 100 + Number(v30) * Number(v23) * Number(v24) / 100 + Number(v6) * Number(v27) * Number(v28) / 100 + Number(v3) * Number(v15))
    }, [
        v0, v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15, v16, v17, v18, v19, v20, v21, v22, v23, v24, v25, v26, v27, v28, v29, v30, v31
    ])
    return (
        // <div className='SignupPage' onClick={() => setfake1(true)}>
        <div>
            <span className='title'>Input Data</span>
            <div className='table-container'>
                <table>
                    <tbody>
                        <tr>
                            <th>Country name</th>
                            <th colSpan={2}>Electricity purchased (kWh) </th>
                            <th colSpan={2}>District heating purchased (kWh)</th>
                        </tr>
                        <tr>
                            <td><input type='text' value={textv0} className='Input_form' onChange={(e) => { setTextV0(e.target.value) }} /></td>
                            <td colSpan={2}><input type='text' value={v0} className='Input_form' onChange={(e) => { setV0(e.target.value) }} /></td>
                            <td colSpan={2}><input type='text' value={v1} className='Input_form' onChange={(e) => { setV1(e.target.value) }} /></td>
                        </tr>
                        <tr>
                            <td><input type='text' value={textv1} className='Input_form' onChange={(e) => { setTextV1(e.target.value) }} /></td>
                            <td colSpan={2}><input type='text' value={v2} className='Input_form' onChange={(e) => { setV2(e.target.value) }} /></td>
                            <td colSpan={2}><input type='text' value={v3} className='Input_form' onChange={(e) => { setV3(e.target.value) }} /></td>
                        </tr>
                        <tr>
                            <td><input type='text' value={textv2} className='Input_form' onChange={(e) => { setTextV2(e.target.value) }} /></td>
                            <td colSpan={2}><input type='text' value={v4} className='Input_form' onChange={(e) => { setV4(e.target.value) }} /></td>
                            <td colSpan={2}><input type='text' value={v5} className='Input_form' onChange={(e) => { setV5(e.target.value) }} /></td>
                        </tr>
                        <tr>
                            <td><input type='text' value={textv3} className='Input_form' onChange={(e) => { setTextV3(e.target.value) }} /></td>
                            <td colSpan={2}><input type='text' value={v30} className='Input_form' onChange={(e) => { setV30(e.target.value) }} /></td>
                            <td colSpan={2}><input type='text' value={v31} className='Input_form' onChange={(e) => { setV31(e.target.value) }} /></td>
                        </tr>
                        <tr>
                            <td><input type='text' value={textv4} className='Input_form' onChange={(e) => { setTextV4(e.target.value) }} /></td>
                            <td colSpan={2}><input type='text' value={v6} className='Input_form' onChange={(e) => { setV6(e.target.value) }} /></td>
                            <td colSpan={2}><input type='text' value={v7} className='Input_form' onChange={(e) => { setV7(e.target.value) }} /></td>
                        </tr>
                        <tr>
                            <th>Country name</th>
                            <th>Upstream emission factor of purchased electricity (kg CO2e/kWh)</th>
                            <th>Electricity/heat combustion emission factor (kg CO2e/kWh)</th>
                            <th>T&D loss rate (percent)</th>
                            <th>Upstream emission factor of purchased heating (kg CO2e/ kWh)</th>
                        </tr>
                        <tr>
                            <td><input type='text' value={textv5} className='Input_form' onChange={(e) => { setTextV5(e.target.value) }} /></td>
                            <td><input type='text' value={v8} className='Input_form' onChange={(e) => { setV8(e.target.value) }} /></td>
                            <td><input type='text' value={v9} className='Input_form' onChange={(e) => { setV9(e.target.value) }} /></td>
                            <td><input type='text' value={v10} className='Input_form' onChange={(e) => { setV10(e.target.value) }} /></td>
                            <td><input type='text' value={v11} className='Input_form' onChange={(e) => { setV11(e.target.value) }} /></td>
                        </tr>
                        <tr>
                            <td rowSpan={2}><input type='text' value={textv6} className='Input_form' onChange={(e) => { setTextV6(e.target.value) }} /></td>
                            <td rowSpan={2}><input type='text' value={v12} className='Input_form' onChange={(e) => { setV12(e.target.value) }} /></td>
                            <td><input type='text' value={v13} className='Input_form' onChange={(e) => { setV13(e.target.value) }} /></td>
                            <td><input type='text' value={v14} className='Input_form' onChange={(e) => { setV14(e.target.value) }} /></td>
                            <td rowSpan={2}><input type='text' value={v15} className='Input_form' onChange={(e) => { setV15(e.target.value) }} /></td>
                        </tr>
                        <tr>
                            <td><input type='text' value={v16} className='Input_form' onChange={(e) => { setV16(e.target.value) }} /></td>
                            <td><input type='text' value={v17} className='Input_form' onChange={(e) => { setV17(e.target.value) }} /></td>
                        </tr>
                        <tr>
                            <td><input type='text' value={textv7} className='Input_form' onChange={(e) => { setTextV7(e.target.value) }} /></td>
                            <td><input type='text' value={v18} className='Input_form' onChange={(e) => { setV18(e.target.value) }} /></td>
                            <td><input type='text' value={v19} className='Input_form' onChange={(e) => { setV19(e.target.value) }} /></td>
                            <td><input type='text' value={v20} className='Input_form' onChange={(e) => { setV20(e.target.value) }} /></td>
                            <td><input type='text' value={v21} className='Input_form' onChange={(e) => { setV21(e.target.value) }} /></td>
                        </tr>
                        <tr>
                            <td><input type='text' value={textv8} className='Input_form' onChange={(e) => { setTextV8(e.target.value) }} /></td>
                            <td><input type='text' value={v22} className='Input_form' onChange={(e) => { setV22(e.target.value) }} /></td>
                            <td><input type='text' value={v23} className='Input_form' onChange={(e) => { setV23(e.target.value) }} /></td>
                            <td><input type='text' value={v24} className='Input_form' onChange={(e) => { setV24(e.target.value) }} /></td>
                            <td><input type='text' value={v25} className='Input_form' onChange={(e) => { setV25(e.target.value) }} /></td>
                        </tr>
                        <tr>
                            <td><input type='text' value={textv9} className='Input_form' onChange={(e) => { setTextV9(e.target.value) }} /></td>
                            <td><input type='text' value={v26} className='Input_form' onChange={(e) => { setV26(e.target.value) }} /></td>
                            <td><input type='text' value={v27} className='Input_form' onChange={(e) => { setV27(e.target.value) }} /></td>
                            <td><input type='text' value={v28} className='Input_form' onChange={(e) => { setV28(e.target.value) }} /></td>
                            <td><input type='text' value={v29} className='Input_form' onChange={(e) => { setV29(e.target.value) }} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default FuelTransmission