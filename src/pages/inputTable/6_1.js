import React, { useState, useEffect } from 'react'
import '../../App.scss'
function EmployeeDistance({ onChange }) {
    const [v0, setV0] = useState(5);
    const [v1, setV1] = useState(10000);
    const [v2, setV2] = useState(0.8);
    const [v3, setV3] = useState(0);
    const [v4, setV4] = useState(0.6);
    const [v5, setV5] = useState(0);
    const [v6, setV6] = useState(4);
    const [v7, setV7] = useState(10000);
    const [v8, setV8] = useState(0.8);
    const [v9, setV9] = useState(1);
    const [v10, setV10] = useState(0.6);
    const [v11, setV11] = useState(15000);
    const [v12, setV12] = useState(0);
    const [v13, setV13] = useState(0);
    const [v14, setV14] = useState(0.8);
    const [v15, setV15] = useState(5);
    const [v16, setV16] = useState(0.6);
    const [v17, setV17] = useState(20000);
    const [v18, setV18] = useState(0);
    const [v19, setV19] = useState(0);
    const [v20, setV20] = useState(0);
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
    const [v36, setV36] = useState(0);
    const [v37, setV37] = useState(0);
    const [v38, setV38] = useState(0);
    const [v39, setV39] = useState(0);
    const [v40, setV40] = useState(0);
    const [v41, setV41] = useState(0);
    const [v42, setV42] = useState(0);
    const [v43, setV43] = useState(0);
    const [v44, setV44] = useState(0);
    const [v45, setV45] = useState(0);
    const [v46, setV46] = useState(0);
    const [v47, setV47] = useState(0);
    const [AddNumber, setAddNumber] = useState(0)
    const handleAddNumber = () => {
        setAddNumber(AddNumber + 1)
    }
    const [textv0, setTextV0] = useState('A');
    const [textv1, setTextV1] = useState('B');
    const [textv2, setTextV2] = useState('C');
    const [textv3, setTextV3] = useState('');
    const [textv4, setTextV4] = useState('');
    const [textv5, setTextV5] = useState('');
    const [textv6, setTextV6] = useState('');
    const [textv7, setTextV7] = useState('');
    useEffect(() => {
        onChange((Number(v0)*Number(v1)*Number(v2) + Number(v3)*Number(v4)*Number(v5) + Number(v6)*Number(v7)*Number(v8) + Number(v9)*Number(v10)*Number(v11) + Number(v12)*Number(v13)*Number(v14) + Number(v15)*Number(v16)*Number(v17) + Number(v18)*Number(v19)*Number(v20) + Number(v21)*Number(v22)*Number(v23) + Number(v24)*Number(v25)*Number(v26) + Number(v27)*Number(v28)*Number(v29) + Number(v30)*Number(v31)*Number(v32) + Number(v33)*Number(v34)*Number(v35) + Number(v36)*Number(v37)*Number(v38) + Number(v39)*Number(v40)*Number(v41) + Number(v42)*Number(v43)*Number(v44) + Number(v45)*Number(v46)*Number(v47)*2*48))
    }, [
        v0, v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15, v16, v17, v18, v19, v20, v21, v22, v23, v24, v25, v26, v27, v28, v29, v30, v31, v32, v33, v34, v35, v36, v37, v38, v39, v40, v41, v42, v43, v44, v45, v46, v47
    ])
    return (
        // <div className='SignupPage' onClick={() => setfake1(true)}>
        <div className='container'>
            <span className='title'>Input Data</span>
            <div className='table-container'>
                <table>
                    <tbody>
                        <tr>
                            <th>Employee</th>
                            <th> Rail commute (times per week)</th>
                            <th>One way distance by rail(km)</th>
                            <th>Rail emission factor</th>
                            <th>Car commute </th>
                            <th>Car emission factor</th>
                            <th>One way distance by car</th>
                        </tr>
                        <tr>
                            <td><input type='text' value={textv0} className='Input_form' onChange={(e) => { setTextV0(e.target.value) }} /></td>
                            <td><input type='text' value={v0} className='Input_form' onChange={(e) => { setV0(e.target.value) }} /></td>
                            <td><input type='text' value={v1} className='Input_form' onChange={(e) => { setV1(e.target.value) }} /></td>
                            <td><input type='text' value={v2} className='Input_form' onChange={(e) => { setV2(e.target.value) }} /></td>
                            <td><input type='text' value={v3} className='Input_form' onChange={(e) => { setV3(e.target.value) }} /></td>
                            <td><input type='text' value={v4} className='Input_form' onChange={(e) => { setV4(e.target.value) }} /></td>
                            <td><input type='text' value={v5} className='Input_form' onChange={(e) => { setV5(e.target.value) }} /></td>
                        </tr>
                        <tr>
                            <td><input type='text' value={textv1} className='Input_form' onChange={(e) => { setTextV1(e.target.value) }} /></td>
                            <td><input type='text' value={v6} className='Input_form' onChange={(e) => { setV6(e.target.value) }} /></td>
                            <td><input type='text' value={v7} className='Input_form' onChange={(e) => { setV7(e.target.value) }} /></td>
                            <td><input type='text' value={v8} className='Input_form' onChange={(e) => { setV8(e.target.value) }} /></td>
                            <td><input type='text' value={v9} className='Input_form' onChange={(e) => { setV9(e.target.value) }} /></td>
                            <td><input type='text' value={v10} className='Input_form' onChange={(e) => { setV10(e.target.value) }} /></td>
                            <td><input type='text' value={v11} className='Input_form' onChange={(e) => { setV11(e.target.value) }} /></td>
                        </tr>
                        <tr>
                            <td><input type='text' value={textv2} className='Input_form' onChange={(e) => { setTextV2(e.target.value) }} /></td>
                            <td><input type='text' value={v12} className='Input_form' onChange={(e) => { setV12(e.target.value) }} /></td>
                            <td><input type='text' value={v13} className='Input_form' onChange={(e) => { setV13(e.target.value) }} /></td>
                            <td><input type='text' value={v14} className='Input_form' onChange={(e) => { setV14(e.target.value) }} /></td>
                            <td><input type='text' value={v15} className='Input_form' onChange={(e) => { setV15(e.target.value) }} /></td>
                            <td><input type='text' value={v16} className='Input_form' onChange={(e) => { setV16(e.target.value) }} /></td>
                            <td><input type='text' value={v17} className='Input_form' onChange={(e) => { setV17(e.target.value) }} /></td>
                        </tr>
                        {AddNumber === 0 ?
                            <tr>
                            </tr>
                            :
                            <tr>
                                <td><input type='text' value={textv3} className='Input_form' onChange={(e) => { setTextV3(e.target.value) }} /></td>
                                <td><input type='text' value={v18} className='Input_form' onChange={(e) => { setV18(e.target.value) }} /></td>
                                <td><input type='text' value={v19} className='Input_form' onChange={(e) => { setV19(e.target.value) }} /></td>
                                <td><input type='text' value={v20} className='Input_form' onChange={(e) => { setV20(e.target.value) }} /></td>
                                <td><input type='text' value={v21} className='Input_form' onChange={(e) => { setV21(e.target.value) }} /></td>
                                <td><input type='text' value={v22} className='Input_form' onChange={(e) => { setV22(e.target.value) }} /></td>
                                <td><input type='text' value={v23} className='Input_form' onChange={(e) => { setV23(e.target.value) }} /></td>
                            </tr>
                        }
                        {AddNumber === 0  || AddNumber === 1?
                            <tr>
                            </tr>
                            :
                            <tr>
                                <td><input type='text' value={textv4} className='Input_form' onChange={(e) => { setTextV4(e.target.value) }} /></td>
                                <td><input type='text' value={v24} className='Input_form' onChange={(e) => { setV24(e.target.value) }} /></td>
                                <td><input type='text' value={v25} className='Input_form' onChange={(e) => { setV25(e.target.value) }} /></td>
                                <td><input type='text' value={v26} className='Input_form' onChange={(e) => { setV26(e.target.value) }} /></td>
                                <td><input type='text' value={v27} className='Input_form' onChange={(e) => { setV27(e.target.value) }} /></td>
                                <td><input type='text' value={v28} className='Input_form' onChange={(e) => { setV28(e.target.value) }} /></td>
                                <td><input type='text' value={v29} className='Input_form' onChange={(e) => { setV29(e.target.value) }} /></td>
                            </tr>
                        }
                        {AddNumber === 0  || AddNumber === 1 || AddNumber === 2?
                            <tr>
                            </tr>
                            :
                            <tr>
                                <td><input type='text' value={textv5} className='Input_form' onChange={(e) => { setTextV5(e.target.value) }} /></td>
                                <td><input type='text' value={v30} className='Input_form' onChange={(e) => { setV30(e.target.value) }} /></td>
                                <td><input type='text' value={v31} className='Input_form' onChange={(e) => { setV31(e.target.value) }} /></td>
                                <td><input type='text' value={v32} className='Input_form' onChange={(e) => { setV32(e.target.value) }} /></td>
                                <td><input type='text' value={v33} className='Input_form' onChange={(e) => { setV33(e.target.value) }} /></td>
                                <td><input type='text' value={v34} className='Input_form' onChange={(e) => { setV34(e.target.value) }} /></td>
                                <td><input type='text' value={v35} className='Input_form' onChange={(e) => { setV35(e.target.value) }} /></td>
                            </tr>
                        }
                        {AddNumber === 0  || AddNumber === 1 || AddNumber === 2 || AddNumber === 3?
                            <tr>
                            </tr>
                            :
                            <tr>
                                <td><input type='text' value={textv6} className='Input_form' onChange={(e) => { setTextV6(e.target.value) }} /></td>
                                <td><input type='text' value={v36} className='Input_form' onChange={(e) => { setV36(e.target.value) }} /></td>
                                <td><input type='text' value={v37} className='Input_form' onChange={(e) => { setV37(e.target.value) }} /></td>
                                <td><input type='text' value={v38} className='Input_form' onChange={(e) => { setV38(e.target.value) }} /></td>
                                <td><input type='text' value={v39} className='Input_form' onChange={(e) => { setV39(e.target.value) }} /></td>
                                <td><input type='text' value={v40} className='Input_form' onChange={(e) => { setV40(e.target.value) }} /></td>
                                <td><input type='text' value={v41} className='Input_form' onChange={(e) => { setV41(e.target.value) }} /></td>
                            </tr>
                        }
                        {AddNumber === 0  || AddNumber === 1 || AddNumber === 2 || AddNumber === 3 || AddNumber === 4?
                            <tr>
                            </tr>
                            :
                            <tr>
                                <td><input type='text' value={textv7} className='Input_form' onChange={(e) => { setTextV7(e.target.value) }} /></td>
                                <td><input type='text' value={v42} className='Input_form' onChange={(e) => { setV42(e.target.value) }} /></td>
                                <td><input type='text' value={v43} className='Input_form' onChange={(e) => { setV43(e.target.value) }} /></td>
                                <td><input type='text' value={v44} className='Input_form' onChange={(e) => { setV44(e.target.value) }} /></td>
                                <td><input type='text' value={v45} className='Input_form' onChange={(e) => { setV45(e.target.value) }} /></td>
                                <td><input type='text' value={v46} className='Input_form' onChange={(e) => { setV46(e.target.value) }} /></td>
                                <td><input type='text' value={v47} className='Input_form' onChange={(e) => { setV47(e.target.value) }} /></td>
                            </tr>
                        }
                        <div className='button' onClick={handleAddNumber} >AddRow</div>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default EmployeeDistance