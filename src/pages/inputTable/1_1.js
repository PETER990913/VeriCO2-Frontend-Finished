import React, { useEffect, useState } from 'react'
import '../../App.scss'
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
        onChange(Number(v0) * Number(v1) + Number(v2) * Number(v3) + Number(v4) * Number(v5) + Number(v6) * Number(v7) + Number(v8) * Number(v9))
        console.log(v0, v1, v2, v3, v4, v5, v6, v7, v8, v9)
    }, [
        v0, v1, v2, v3, v4, v5, v6, v7, v8, v9
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
                            <td>Cement</td>
                            <td>Supplier C</td>
                            <td><input type='text' value={v0} className='Input_form' onChange={(e) => { setV0(e.target.value) }} /></td>
                            <td><input type='text' value={v1} className='Input_form' onChange={(e) => { setV1(e.target.value) }} /></td>
                        </tr>
                        <tr>
                            <td>Plaster</td>
                            <td>Supplier D</td>
                            <td><input type='text' value={v2} className='Input_form' onChange={(e) => { setV2(e.target.value) }} /></td>
                            <td><input type='text' value={v3} className='Input_form' onChange={(e) => { setV3(e.target.value) }} /></td>
                        </tr>
                        <tr>
                            <td>Paint</td>
                            <td>Supplier E</td>
                            <td><input type='text' value={v4} className='Input_form' onChange={(e) => { setV4(e.target.value) }} /></td>
                            <td><input type='text' value={v5} className='Input_form' onChange={(e) => { setV5(e.target.value) }} /></td>
                        </tr>
                        <tr>
                            <td>Timber</td>
                            <td>Supplier F</td>
                            <td><input type='text' value={v6} className='Input_form' onChange={(e) => { setV6(e.target.value) }} /></td>
                            <td><input type='text' value={v7} className='Input_form' onChange={(e) => { setV7(e.target.value) }} /></td>
                        </tr>
                        <tr>
                            <td>Concrete</td>
                            <td>Supplier G</td>
                            <td><input type='text' value={v8} className='Input_form' onChange={(e) => { setV8(e.target.value) }} /></td>
                            <td><input type='text' value={v9} className='Input_form' onChange={(e) => { setV9(e.target.value) }} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PurchasedSupplier