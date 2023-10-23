import React, { useState, useEffect } from 'react'
import '../../App.scss'
function CapitalGoodProduct({ onChange, dataset1 }) {
    const [v0, setV0] = useState(400);
    const [v1, setV1] = useState(20);
    const [v2, setV2] = useState(200);
    const [v3, setV3] = useState(10);
    const [v4, setV4] = useState(500);
    const [v5, setV5] = useState(40);
    const [v6, setV6] = useState(100);
    const [v7, setV7] = useState(70);
    const [v8, setV8] = useState(1500);
    const [v9, setV9] = useState(3);
    const [v10, setV10] = useState(300);
    const [v11, setV11] = useState(0);
    const [v12, setV12] = useState(0);
    const [v13, setV13] = useState(0);
    const [v14, setV14] = useState(0);
    const [v15, setV15] = useState(0);
    const [v16, setV16] = useState(0);
    const [v17, setV17] = useState(0);
    const [v18, setV18] = useState(0);
    const [v19, setV19] = useState(0);
    const [v20, setV20] = useState(0);
    const [v21, setV21] = useState(0);
    const [AddNumber, setAddNumber] = useState(0)
    const handleAddNumber = () => {
        setAddNumber(AddNumber + 1)
    }
    const [textv0, setTextV0] = useState('Hard drive');
    const [textv1, setTextV1] = useState('Integrated circuits');
    const [textv2, setTextV2] = useState('Liquid Crystal Display (LCD)');
    const [textv3, setTextV3] = useState('Semiconductors');
    const [textv4, setTextV4] = useState('Battery');
    const [textv5, setTextV5] = useState('Keyboard');
    const [textv6, setTextV6] = useState('');
    const [textv7, setTextV7] = useState('');
    const [textv8, setTextV8] = useState('');
    const [textv9, setTextV9] = useState('');
    const [textv10, setTextV10] = useState('');
    useEffect(() => {
        if (dataset1.Hard_drive) {
            setV1(dataset1.Hard_drive)
            setV3(dataset1.Integrated_circuits)
            setV5(dataset1.Liquid_Crystal_Display)
        }
    }, [dataset1])

    useEffect(() => {
        onChange(Number(v0) * Number(v1) + Number(v2) * Number(v3) + Number(v4) * Number(v5) + Number(v6) * Number(v7) + Number(v8) * Number(v9) + Number(v10) * Number(v11) + Number(v12) * Number(v13) + Number(v14) * Number(v15) + Number(v16) * Number(v17) + Number(v18) * Number(v19) + Number(v20) * Number(v21))
    }, [
        v0, v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15, v16, v17, v18, v19, v20, v21
    ])
    return (
        // <div className='SignupPage' onClick={() => setfake1(true)}>
        <div>
            <span className='title'>Input Data</span>
            <div className='table-container'>
                <table>
                    <tbody>
                        <tr>
                            <th>Purchased semi-processed components</th>
                            <th>Mass (kg)</th>
                            <th>Emission factor (kg CO2e/kg)</th>
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
                            <td><input type='text' value={textv2} className='Input_form' onChange={(e) => { setTextV2(e.target.value) }} /></td>
                            <td><input type='text' value={v4} className='Input_form' onChange={(e) => { setV4(e.target.value) }} /></td>
                            <td><input type='text' value={v5} className='Input_form' onChange={(e) => { setV5(e.target.value) }} /></td>
                        </tr>
                        <tr>
                            <td><input type='text' value={textv3} className='Input_form' onChange={(e) => { setTextV3(e.target.value) }} /></td>
                            <td><input type='text' value={v6} className='Input_form' onChange={(e) => { setV6(e.target.value) }} /></td>
                            <td><input type='text' value={v7} className='Input_form' onChange={(e) => { setV7(e.target.value) }} /></td>
                        </tr>
                        <tr>
                            <td><input type='text' value={textv4} className='Input_form' onChange={(e) => { setTextV4(e.target.value) }} /></td>
                            <td><input type='text' value={v8} className='Input_form' onChange={(e) => { setV8(e.target.value) }} /></td>
                            <td><input type='text' value={v9} className='Input_form' onChange={(e) => { setV9(e.target.value) }} /></td>
                        </tr>
                        <tr>
                            <td><input type='text' value={textv5} className='Input_form' onChange={(e) => { setTextV5(e.target.value) }} /></td>
                            <td><input type='text' value={v10} className='Input_form' onChange={(e) => { setV10(e.target.value) }} /></td>
                            <td><input type='text' value={v11} className='Input_form' onChange={(e) => { setV11(e.target.value) }} /></td>
                        </tr>
                        {AddNumber === 0 ?
                            <tr>
                            </tr>
                            :
                            <tr>
                                <td><input type='text' value={textv6} className='Input_form' onChange={(e) => { setTextV6(e.target.value) }} /></td>
                                <td><input type='text' value={v12} className='Input_form' onChange={(e) => { setV12(e.target.value) }} /></td>
                                <td><input type='text' value={v13} className='Input_form' onChange={(e) => { setV13(e.target.value) }} /></td>
                            </tr>
                        }
                        {AddNumber === 0 || AddNumber === 1 ?
                            <tr>
                            </tr>
                            :
                            <tr>
                                <td><input type='text' value={textv7} className='Input_form' onChange={(e) => { setTextV7(e.target.value) }} /></td>
                                <td><input type='text' value={v14} className='Input_form' onChange={(e) => { setV14(e.target.value) }} /></td>
                                <td><input type='text' value={v15} className='Input_form' onChange={(e) => { setV15(e.target.value) }} /></td>
                            </tr>
                        }
                        {AddNumber === 0 || AddNumber === 1 || AddNumber === 2 ?
                            <tr>
                            </tr>
                            :
                            <tr>
                                <td><input type='text' value={textv8} className='Input_form' onChange={(e) => { setTextV8(e.target.value) }} /></td>
                                <td><input type='text' value={v16} className='Input_form' onChange={(e) => { setV16(e.target.value) }} /></td>
                                <td><input type='text' value={v17} className='Input_form' onChange={(e) => { setV17(e.target.value) }} /></td>
                            </tr>
                        }
                        {AddNumber === 0 || AddNumber === 1 || AddNumber === 2 || AddNumber === 3 ?
                            <tr>
                            </tr>
                            :
                            <tr>
                                <td><input type='text' value={textv9} className='Input_form' onChange={(e) => { setTextV9(e.target.value) }} /></td>
                                <td><input type='text' value={v18} className='Input_form' onChange={(e) => { setV18(e.target.value) }} /></td>
                                <td><input type='text' value={v19} className='Input_form' onChange={(e) => { setV19(e.target.value) }} /></td>
                            </tr>
                        }
                        {AddNumber === 0 || AddNumber === 1 || AddNumber === 2 || AddNumber === 3 || AddNumber === 4 ?
                            <tr>
                            </tr>
                            :
                            <tr>
                                <td><input type='text' value={textv10} className='Input_form' onChange={(e) => { setTextV10(e.target.value) }} /></td>
                                <td><input type='text' value={v20} className='Input_form' onChange={(e) => { setV20(e.target.value) }} /></td>
                                <td><input type='text' value={v21} className='Input_form' onChange={(e) => { setV21(e.target.value) }} /></td>
                            </tr>
                        }
                        <div className='button' onClick={handleAddNumber} >AddRow</div>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CapitalGoodProduct