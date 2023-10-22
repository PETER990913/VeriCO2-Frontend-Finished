import React, { useEffect, useState } from 'react'
import '../../App.scss'
import AddRow from '../../assets/images/Addrow.png'
function PurchasedSupplier({ onChange, dataset, dataset1 }) {
    const [v0, setV0] = useState(200000);
    const [v1, setV1] = useState(0.15);
    const [v2, setV2] = useState(600000);
    const [v3, setV3] = useState(0.1);
    const [v4, setV4] = useState(200000);
    const [v5, setV5] = useState(0.1);
    const [v6, setV6] = useState(100000);
    const [v7, setV7] = useState(0.25);
    const [v8, setV8] = useState(50000);
    const [v9, setV9] = useState(0.20);
    const [v10, setV10] = useState(0);
    const [v12, setV12] = useState(0);
    const [v13, setV13] = useState(0);
    const [v14, setV14] = useState(0);
    const [v15, setV15] = useState(0);
    const [v16, setV16] = useState(0);
    const [v17, setV17] = useState(0);
    const [v18, setV18] = useState(0);
    const [v19, setV19] = useState(0);
    const [v11, setV11] = useState(0);
    const [AddNumber, setAddNumber] = useState(0)
    const handleAddNumber = () => {
        setAddNumber(AddNumber + 1)
    }
    console.log('AddNumber:', AddNumber)
    const [textv0, setTextV0] = useState('Cement');
    const [textv1, setTextV1] = useState('Supplier C');
    const [textv2, setTextV2] = useState('Plaster');
    const [textv3, setTextV3] = useState('Supplier D');
    const [textv4, setTextV4] = useState('Paint');
    const [textv5, setTextV5] = useState('Supplier E');
    const [textv6, setTextV6] = useState('Timber');
    const [textv7, setTextV7] = useState('Supplier F');
    const [textv8, setTextV8] = useState('Concrete');
    const [textv9, setTextV9] = useState('Supplier G');
    const [textv10, setTextV10] = useState('');
    const [textv11, setTextV11] = useState('');
    const [textv12, setTextV12] = useState('');
    const [textv13, setTextV13] = useState('');
    const [textv14, setTextV14] = useState('');
    const [textv15, setTextV15] = useState('');
    const [textv16, setTextV16] = useState('');
    const [textv17, setTextV17] = useState('');
    const [textv18, setTextV18] = useState('');
    const [textv19, setTextV19] = useState('');    
    useEffect(() => {
        console.log('dataset', dataset)
        if (dataset.length) {
            setV0(dataset[0][0][0])
            setV1(dataset[0][0][1])
            setV2(dataset[0][1][0])
            setV3(dataset[0][1][1])
            setV4(dataset[0][2][0])
            setV5(dataset[0][2][1])
            setV6(dataset[0][3][0])
            setV7(dataset[0][3][1])
            setV8(dataset[0][4][0])
            setV9(dataset[0][4][1])
        }
    }, [dataset])


    useEffect(() => {
        console.log('dataset1_frontend', dataset1)
        console.log("first_item", dataset1.cement)
        console.log("----------------------")
        console.log("length", dataset1.length)
        if (dataset1.cement) {
            setV1(dataset1.cement)
            setV5(dataset1.Paint)
            setV7(dataset1.Timber)
            setV9(dataset1.Concrete)
        }
    }, [dataset1])

    useEffect(() => {
        // onChange(Number(v0) * Number(v1) + Number(v2) * Number(v3) + Number(v4) * Number(v5) + Number(v6) * Number(v7) + Number(v8) * Number(v9))
        onChange(Number(v0) * Number(v1) + Number(v2) * Number(v3) + Number(v4) * Number(v5) + Number(v6) * Number(v7) + Number(v8) * Number(v9) + Number(v10) * Number(v11) + Number(v12) * Number(v13) + Number(v14) * Number(v15) + Number(v16) * Number(v17) + Number(v18) * Number(v19))
        console.log(v0, v1, v2, v3, v4, v5, v6, v7, v8, v9)
    }, [
        // v0, v1, v2, v3, v4, v5, v6, v7, v8, v9
        v0, v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15, v16, v17, v18, v19,
    ])

    return (
        // <div className='SignupPage' onClick={() => setfake1(true)}>
        <div>
            <span className='title'>Input Data</span>
            <div className='table-container'>
                <table>
                    <tbody>
                        <tr>
                            <th>Purchased good</th>
                            <th>Supplier</th>
                            <th>Quantities purchased(kg)</th>
                            <th>Surpplier-specific emission factor(kgco2/kg)</th>
                        </tr>
                        <tr>
                            <td><input type='text' value={textv0} className='Input_form' onChange={(e) => { setTextV0(e.target.value) }} /></td>
                            <td><input type='text' value={textv1} className='Input_form' onChange={(e) => { setTextV1(e.target.value) }} /></td>
                            <td><input type='text' value={v0} className='Input_form' onChange={(e) => { setV0(e.target.value) }} /></td>
                            <td><input type='text' value={v1} className='Input_form' onChange={(e) => { setV1(e.target.value) }} /></td>
                        </tr>
                        <tr>
                            <td><input type='text' value={textv2} className='Input_form' onChange={(e) => { setTextV2(e.target.value) }} /></td>
                            <td><input type='text' value={textv3} className='Input_form' onChange={(e) => { setTextV3(e.target.value) }} /></td>
                            <td><input type='text' value={v2} className='Input_form' onChange={(e) => { setV2(e.target.value) }} /></td>
                            <td><input type='text' value={v3} className='Input_form' onChange={(e) => { setV3(e.target.value) }} /></td>
                        </tr>
                        <tr>
                            <td><input type='text' value={textv4} className='Input_form' onChange={(e) => { setTextV4(e.target.value) }} /></td>
                            <td><input type='text' value={textv5} className='Input_form' onChange={(e) => { setTextV5(e.target.value) }} /></td>
                            <td><input type='text' value={v4} className='Input_form' onChange={(e) => { setV4(e.target.value) }} /></td>
                            <td><input type='text' value={v5} className='Input_form' onChange={(e) => { setV5(e.target.value) }} /></td>
                        </tr>
                        <tr>
                            <td><input type='text' value={textv6} className='Input_form' onChange={(e) => { setTextV6(e.target.value) }} /></td>
                            <td><input type='text' value={textv7} className='Input_form' onChange={(e) => { setTextV7(e.target.value) }} /></td>
                            <td><input type='text' value={v6} className='Input_form' onChange={(e) => { setV6(e.target.value) }} /></td>
                            <td><input type='text' value={v7} className='Input_form' onChange={(e) => { setV7(e.target.value) }} /></td>
                        </tr>
                        <tr>
                            <td><input type='text' value={textv8} className='Input_form' onChange={(e) => { setTextV8(e.target.value) }} /></td>
                            <td><input type='text' value={textv9} className='Input_form' onChange={(e) => { setTextV9(e.target.value) }} /></td>
                            <td><input type='text' value={v8} className='Input_form' onChange={(e) => { setV8(e.target.value) }} /></td>
                            <td><input type='text' value={v9} className='Input_form' onChange={(e) => { setV9(e.target.value) }} /></td>
                        </tr>
                        {AddNumber === 0 ?
                            <tr>
                            </tr>
                            :
                            <tr>
                                <td><input type='text' value={textv10} className='Input_form' onChange={(e) => { setTextV10(e.target.value) }} /></td>
                                <td><input type='text' value={textv11} className='Input_form' onChange={(e) => { setTextV11(e.target.value) }} /></td>
                                <td><input type='text' value={v10} className='Input_form' onChange={(e) => { setV10(e.target.value) }} /></td>
                                <td><input type='text' value={v11} className='Input_form' onChange={(e) => { setV11(e.target.value) }} /></td>
                            </tr>
                        }
                        {AddNumber === 0 || AddNumber === 1 ?
                            <tr>
                            </tr>
                            :
                            <tr>
                                <td><input type='text' value={textv12} className='Input_form' onChange={(e) => { setTextV12(e.target.value) }} /></td>
                                <td><input type='text' value={textv13} className='Input_form' onChange={(e) => { setTextV13(e.target.value) }} /></td>
                                <td><input type='text' value={v12} className='Input_form' onChange={(e) => { setV12(e.target.value) }} /></td>
                                <td><input type='text' value={v13} className='Input_form' onChange={(e) => { setV13(e.target.value) }} /></td>
                            </tr>
                        }
                        {AddNumber === 0 || AddNumber === 1 || AddNumber === 2 ?
                            <tr>
                            </tr>
                            :
                            <tr>
                                <td><input type='text' value={textv14} className='Input_form' onChange={(e) => { setTextV14(e.target.value) }} /></td>
                                <td><input type='text' value={textv15} className='Input_form' onChange={(e) => { setTextV15(e.target.value) }} /></td>
                                <td><input type='text' value={v14} className='Input_form' onChange={(e) => { setV14(e.target.value) }} /></td>
                                <td><input type='text' value={v15} className='Input_form' onChange={(e) => { setV15(e.target.value) }} /></td>
                            </tr>
                        }
                        {AddNumber === 0 || AddNumber === 1 || AddNumber === 2 || AddNumber === 3 ?
                            <tr>
                            </tr>
                            :
                            <tr>
                                <td><input type='text' value={textv16} className='Input_form' onChange={(e) => { setTextV16(e.target.value) }} /></td>
                                <td><input type='text' value={textv17} className='Input_form' onChange={(e) => { setTextV17(e.target.value) }} /></td>
                                <td><input type='text' value={v16} className='Input_form' onChange={(e) => { setV16(e.target.value) }} /></td>
                                <td><input type='text' value={v17} className='Input_form' onChange={(e) => { setV17(e.target.value) }} /></td>
                            </tr>
                        }
                        {AddNumber === 0 || AddNumber === 1 || AddNumber === 2 || AddNumber === 3 || AddNumber === 4 ?
                            <tr>
                            </tr>
                            :
                            <tr>
                                <td><input type='text' value={textv18} className='Input_form' onChange={(e) => { setTextV18(e.target.value) }} /></td>
                                <td><input type='text' value={textv19} className='Input_form' onChange={(e) => { setTextV19(e.target.value) }} /></td>
                                <td><input type='text' value={v18} className='Input_form' onChange={(e) => { setV18(e.target.value) }} /></td>
                                <td><input type='text' value={v19} className='Input_form' onChange={(e) => { setV19(e.target.value) }} /></td>
                            </tr>
                        }
                        {/* <img src={AddRow} alt='Addrow' className='AddrowButton' onClick={handleAddNumber} /> */}
                        <div className='button' onClick={handleAddNumber} >AddRow</div>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PurchasedSupplier