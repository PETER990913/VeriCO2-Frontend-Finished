import React, { useState, useEffect } from 'react'
import '../../App.scss'
function BusinessFuel({ onChange }) {
    const [v0, setV0] = useState(10);
    const [v1, setV1] = useState(2);
    const [v2, setV2] = useState(50);
    const [v3, setV3] = useState(1);
    const [v4, setV4] = useState(20);
    const [v5, setV5] = useState(2);
    const [v6, setV6] = useState(200);
    const [v7, setV7] = useState(2);
    const [v8, setV8] = useState(100);
    const [v9, setV9] = useState(3);
    const [v10, setV10] = useState(100);
    const [v11, setV11] = useState(4);
    const [v12, setV12] = useState(10);
    const [v13, setV13] = useState(1000);
    const [v14, setV14] = useState(5);
    const [v15, setV15] = useState(20);
    const [v16, setV16] = useState(1500);
    const [v17, setV17] = useState(6);
    const [v18, setV18] = useState(100);
    const [v19, setV19] = useState(1200);
    const [v20, setV20] = useState(5);
    const [v21, setV21] = useState(0);
    const [v22, setV22] = useState(0);
    const [v23, setV23] = useState(0);
    const [v24, setV24] = useState(0);
    const [v25, setV25] = useState(0);
    const [v26, setV26] = useState(0);
    const [v27, setV27] = useState(0);
    const [v28, setV28] = useState(0);
    const [v29, setV29] = useState(0);
    const [v30, setV30] = useState(0);
    const [v31, setV31] = useState(0);
    const [v32, setV32] = useState(0);
    const [v33, setV33] = useState(0);
    const [v34, setV34] = useState(0);
    const [v35, setV35] = useState(0);
    const [AddNumber, setAddNumber] = useState(0)
    const handleAddNumber = () => {
        setAddNumber(AddNumber + 1)
    }
    const [textv0, setTextV0] = useState('Group 1');
    const [textv1, setTextV1] = useState('Hybrid');
    const [textv2, setTextV2] = useState('United States');
    const [textv3, setTextV3] = useState('Group 2');
    const [textv4, setTextV4] = useState('Average gasoline car');
    const [textv5, setTextV5] = useState('Australia');
    const [textv6, setTextV6] = useState('Group 3');
    const [textv7, setTextV7] = useState('Hybrid');
    const [textv8, setTextV8] = useState('United States');
    const [textv9, setTextV9] = useState('Group 1');
    const [textv10, setTextV10] = useState('Long haul');
    const [textv11, setTextV11] = useState('Group 2');
    const [textv12, setTextV12] = useState('Short haul');
    const [textv13, setTextV13] = useState('Group 3');
    const [textv14, setTextV14] = useState('Long haul');
    const [textv15, setTextV15] = useState('');
    const [textv16, setTextV16] = useState('');
    const [textv17, setTextV17] = useState('');
    const [textv18, setTextV18] = useState('');
    const [textv19, setTextV19] = useState('');
    const [textv20, setTextV20] = useState('');
    const [textv21, setTextV21] = useState('');
    const [textv22, setTextV22] = useState('');
    const [textv23, setTextV23] = useState('');
    const [textv24, setTextV24] = useState('');
    useEffect(() => {
        onChange(Number(v0) / Number(v1) * Number(v2) * Number(v3) + Number(v4) / Number(v5) * Number(v6) * Number(v7) + Number(v8) / Number(v9) * Number(v10) * Number(v11) + Number(v12) * Number(v13) * Number(v14) + Number(v15) * Number(v16) * Number(v17) + Number(v18) * Number(v19) * Number(v20) + Number(v21) * Number(v22) * Number(v23) + Number(v24) * Number(v25) * Number(v26) + Number(v27) * Number(v28) * Number(v29) + Number(v30) * Number(v31) * Number(v32) + Number(v33) * Number(v34) * Number(v35))
    }, [
        v0, v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15, v16, v17, v18, v19, v20, v21, v22, v23, v24, v25, v26, v27, v28, v29, v30, v31, v32, v33, v34, v35
    ])
    return (
        // <div className='SignupPage' onClick={() => setfake1(true)}>
        <div className='container'>
            <span className='title'>Input Data</span>
            <div className='table-container'>
                <table>
                    <tbody>
                        <tr>
                            <th>Employee Group</th>
                            <th>Number of employees  in group</th>
                            <th>Car type</th>
                            <th>Average  employees  per vehicle</th>
                            <th>Location</th>
                            <th>Distance(km)</th>
                            <th>Emission factor(kg CO2e/ vehicle-km)</th>
                        </tr>
                        <tr>
                            <td><input type='text' value={textv0} className='Input_form' onChange={(e) => { setTextV0(e.target.value) }} /></td>
                            <td><input type='text' value={v0} className='Input_form' onChange={(e) => { setV0(e.target.value) }} /></td>
                            <td><input type='text' value={textv1} className='Input_form' onChange={(e) => { setTextV1(e.target.value) }} /></td>
                            <td><input type='text' value={v1} className='Input_form' onChange={(e) => { setV1(e.target.value) }} /></td>
                            <td><input type='text' value={textv2} className='Input_form' onChange={(e) => { setTextV2(e.target.value) }} /></td>
                            <td><input type='text' value={v2} className='Input_form' onChange={(e) => { setV2(e.target.value) }} /></td>
                            <td><input type='text' value={v3} className='Input_form' onChange={(e) => { setV3(e.target.value) }} /></td>
                        </tr>
                        <tr>
                            <td><input type='text' value={textv3} className='Input_form' onChange={(e) => { setTextV3(e.target.value) }} /></td>
                            <td><input type='text' value={v4} className='Input_form' onChange={(e) => { setV4(e.target.value) }} /></td>
                            <td><input type='text' value={textv4} className='Input_form' onChange={(e) => { setTextV4(e.target.value) }} /></td>
                            <td><input type='text' value={v5} className='Input_form' onChange={(e) => { setV5(e.target.value) }} /></td>
                            <td><input type='text' value={textv5} className='Input_form' onChange={(e) => { setTextV5(e.target.value) }} /></td>
                            <td><input type='text' value={v6} className='Input_form' onChange={(e) => { setV6(e.target.value) }} /></td>
                            <td><input type='text' value={v7} className='Input_form' onChange={(e) => { setV7(e.target.value) }} /></td>
                        </tr>
                        <tr>
                            <td><input type='text' value={textv6} className='Input_form' onChange={(e) => { setTextV6(e.target.value) }} /></td>
                            <td><input type='text' value={v8} className='Input_form' onChange={(e) => { setV8(e.target.value) }} /></td>
                            <td><input type='text' value={textv7} className='Input_form' onChange={(e) => { setTextV7(e.target.value) }} /></td>
                            <td><input type='text' value={v9} className='Input_form' onChange={(e) => { setV9(e.target.value) }} /></td>
                            <td><input type='text' value={textv8} className='Input_form' onChange={(e) => { setTextV8(e.target.value) }} /></td>
                            <td><input type='text' value={v10} className='Input_form' onChange={(e) => { setV10(e.target.value) }} /></td>
                            <td><input type='text' value={v11} className='Input_form' onChange={(e) => { setV11(e.target.value) }} /></td>
                        </tr>
                        <tr>
                            <th>Employee Group</th>
                            <th>Number of employees  in group</th>
                            <th colSpan={2}>Flight type</th>
                            <th colSpan={2}>Distance(km)</th>
                            <th>Emission factor(kg CO2e/ vehicle-km)</th>
                        </tr>
                        <tr>
                            <td><input type='text' value={textv9} className='Input_form' onChange={(e) => { setTextV9(e.target.value) }} /></td>
                            <td><input type='text' value={v12} className='Input_form' onChange={(e) => { setV12(e.target.value) }} /></td>
                            <td colSpan={2}><input type='text' value={textv10} className='Input_form' onChange={(e) => { setTextV10(e.target.value) }} /></td>
                            <td colSpan={2}><input type='text' value={v13} className='Input_form' onChange={(e) => { setV13(e.target.value) }} /></td>
                            <td><input type='text' value={v14} className='Input_form' onChange={(e) => { setV14(e.target.value) }} /></td>
                        </tr>
                        <tr>
                            <td><input type='text' value={textv11} className='Input_form' onChange={(e) => { setTextV11(e.target.value) }} /></td>
                            <td><input type='text' value={v15} className='Input_form' onChange={(e) => { setV15(e.target.value) }} /></td>
                            <td colSpan={2}><input type='text' value={textv12} className='Input_form' onChange={(e) => { setTextV12(e.target.value) }} /></td>
                            <td colSpan={2}><input type='text' value={v16} className='Input_form' onChange={(e) => { setV16(e.target.value) }} /></td>
                            <td><input type='text' value={v17} className='Input_form' onChange={(e) => { setV17(e.target.value) }} /></td>
                        </tr>
                        <tr>
                            <td><input type='text' value={textv13} className='Input_form' onChange={(e) => { setTextV13(e.target.value) }} /></td>
                            <td><input type='text' value={v18} className='Input_form' onChange={(e) => { setV18(e.target.value) }} /></td>
                            <td colSpan={2}><input type='text' value={textv14} className='Input_form' onChange={(e) => { setTextV14(e.target.value) }} /></td>
                            <td colSpan={2}><input type='text' value={v19} className='Input_form' onChange={(e) => { setV19(e.target.value) }} /></td>
                            <td><input type='text' value={v20} className='Input_form' onChange={(e) => { setV20(e.target.value) }} /></td>
                        </tr>
                        {AddNumber === 0 ?
                            <tr>
                            </tr>
                            :
                            <tr>
                                <td><input type='text' value={textv15} className='Input_form' onChange={(e) => { setTextV15(e.target.value) }} /></td>
                                <td><input type='text' value={v21} className='Input_form' onChange={(e) => { setV21(e.target.value) }} /></td>
                                <td colSpan={2}><input type='text' value={textv16} className='Input_form' onChange={(e) => { setTextV16(e.target.value) }} /></td>
                                <td colSpan={2}><input type='text' value={v22} className='Input_form' onChange={(e) => { setV22(e.target.value) }} /></td>
                                <td><input type='text' value={v23} className='Input_form' onChange={(e) => { setV23(e.target.value) }} /></td>
                            </tr>
                        }
                        {AddNumber === 0 || AddNumber === 1 ?
                            <tr>
                            </tr>
                            :
                            <tr>
                                <td><input type='text' value={textv17} className='Input_form' onChange={(e) => { setTextV17(e.target.value) }} /></td>
                                <td><input type='text' value={v24} className='Input_form' onChange={(e) => { setV24(e.target.value) }} /></td>
                                <td colSpan={2}><input type='text' value={textv18} className='Input_form' onChange={(e) => { setTextV18(e.target.value) }} /></td>
                                <td colSpan={2}><input type='text' value={v25} className='Input_form' onChange={(e) => { setV25(e.target.value) }} /></td>
                                <td><input type='text' value={v26} className='Input_form' onChange={(e) => { setV26(e.target.value) }} /></td>
                            </tr>
                        }
                        {AddNumber === 0 || AddNumber === 1 || AddNumber === 2 ?
                            <tr>
                            </tr>
                            :
                            <tr>
                                <td><input type='text' value={textv19} className='Input_form' onChange={(e) => { setTextV19(e.target.value) }} /></td>
                                <td><input type='text' value={v27} className='Input_form' onChange={(e) => { setV27(e.target.value) }} /></td>
                                <td colSpan={2}><input type='text' value={textv20} className='Input_form' onChange={(e) => { setTextV20(e.target.value) }} /></td>
                                <td colSpan={2}><input type='text' value={v28} className='Input_form' onChange={(e) => { setV28(e.target.value) }} /></td>
                                <td><input type='text' value={v29} className='Input_form' onChange={(e) => { setV29(e.target.value) }} /></td>
                            </tr>
                        }
                        {AddNumber === 0 || AddNumber === 1 || AddNumber === 2 || AddNumber === 3 ?
                            <tr>
                            </tr>
                            :
                            <tr>
                                <td><input type='text' value={textv21} className='Input_form' onChange={(e) => { setTextV21(e.target.value) }} /></td>
                                <td><input type='text' value={v30} className='Input_form' onChange={(e) => { setV30(e.target.value) }} /></td>
                                <td colSpan={2}><input type='text' value={textv22} className='Input_form' onChange={(e) => { setTextV22(e.target.value) }} /></td>
                                <td colSpan={2}><input type='text' value={v31} className='Input_form' onChange={(e) => { setV31(e.target.value) }} /></td>
                                <td><input type='text' value={v32} className='Input_form' onChange={(e) => { setV32(e.target.value) }} /></td>
                            </tr>
                        }
                        {AddNumber === 0 || AddNumber === 1 || AddNumber === 2 || AddNumber === 3 || AddNumber === 4 ?
                            <tr>
                            </tr>
                            :
                            <tr>
                                <td><input type='text' value={textv23} className='Input_form' onChange={(e) => { setTextV23(e.target.value) }} /></td>
                                <td><input type='text' value={v33} className='Input_form' onChange={(e) => { setV33(e.target.value) }} /></td>
                                <td colSpan={2}><input type='text' value={textv24} className='Input_form' onChange={(e) => { setTextV24(e.target.value) }} /></td>
                                <td colSpan={2}><input type='text' value={v34} className='Input_form' onChange={(e) => { setV34(e.target.value) }} /></td>
                                <td><input type='text' value={v35} className='Input_form' onChange={(e) => { setV35(e.target.value) }} /></td>
                            </tr>
                        }
                        <div className='button' onClick={handleAddNumber} >AddRow</div>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BusinessFuel