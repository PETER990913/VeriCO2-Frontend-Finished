import React, {useState, useEffect} from 'react'
import '../../App.scss'
function FranchisesSpecific({onChange, dataset, dataset2}) {
    const [v0, setV0]= useState(100000);
    const [v1, setV1]= useState(20000);
    const [v2, setV2]= useState(25000);
    const [v3, setV3]= useState(10000);
    const [v4, setV4]= useState(30000);
    const [v5, setV5]= useState(10000);
    const [v6, setV6]= useState(90000);
    const [v7, setV7]= useState(30000);
    const [v8, setV8]= useState(30000);
    const [v9, setV9]= useState(10000);
    const [v30, setV30]= useState(40000);
    const [v31, setV31]= useState(10000);
    const [v32, setV32]= useState(60000);
    const [v33, setV33]= useState(20000);
    const [v34, setV34]= useState(10000);
    const [v35, setV35]= useState(90000);
    const [v10, setV10]= useState('1');
    const [v11, setV11]= useState('2');
    const [v12, setV12]= useState('3');
    const [v13, setV13]= useState('4');
    const [v14, setV14]= useState('5');
    const [v15, setV15]= useState('6');
    const [v16, setV16]= useState('7');
    const [v17, setV17]= useState('8');

    useEffect(() => {
        console.log('dataset', dataset)
        if(dataset.length){
            setV0(dataset[1][0][1])
            setV1(dataset[1][0][2])
            setV2(dataset[1][1][1])
            setV3(dataset[1][1][2])
            setV4(dataset[1][2][1])
            setV5(dataset[1][2][2])
            setV6(dataset[1][3][1])
            setV7(dataset[1][3][2])
            setV8(dataset[1][4][1])
            setV9(dataset[1][4][2])
        }
    }, [dataset])

    const handleOnChange = (e) => {
        console.log('handle change->', e.target.value);
        const keyVal = e.target.value
        setV10(e.target.value)
        const v0 = dataset2[keyVal] ? dataset2[keyVal][0] : 0
        const v1 = dataset2[keyVal] ? dataset2[keyVal][1] : 0
        if(v0) setV0(v0)
        if(v1) setV1(v1)
    }
    const handleOnChange1 = (e) => {
        console.log('handle change->', e.target.value);
        const keyVal = e.target.value
        setV11(e.target.value)
        const v2 = dataset2[keyVal] ? dataset2[keyVal][0] : 0
        const v3 = dataset2[keyVal] ? dataset2[keyVal][1] : 0
        if(v2) setV2(v2)
        if(v3) setV3(v3)
    }
    const handleOnChange2 = (e) => {
        console.log('handle change->', e.target.value);
        const keyVal = e.target.value
        setV12(e.target.value)
        const v4 = dataset2[keyVal] ? dataset2[keyVal][0] : 0
        const v5 = dataset2[keyVal] ? dataset2[keyVal][1] : 0
        if(v4) setV4(v4)
        if(v5) setV5(v5)
    }
    const handleOnChange3 = (e) => {
        console.log('handle change->', e.target.value);
        const keyVal = e.target.value
        setV13(e.target.value)
        const v6 = dataset2[keyVal] ? dataset2[keyVal][0] : 0
        const v7 = dataset2[keyVal] ? dataset2[keyVal][1] : 0
        if(v6) setV6(v6)
        if(v7) setV7(v7)
    }
    const handleOnChange4 = (e) => {
        console.log('handle change->', e.target.value);
        const keyVal = e.target.value
        setV14(e.target.value)
        const v8 = dataset2[keyVal] ? dataset2[keyVal][0] : 0
        const v9 = dataset2[keyVal] ? dataset2[keyVal][1] : 0
        if(v8) setV8(v8)
        if(v9) setV9(v9)
    }
    const handleOnChange5 = (e) => {
        console.log('handle change->', e.target.value);
        const keyVal = e.target.value
        setV15(e.target.value)
        const v30 = dataset2[keyVal] ? dataset2[keyVal][0] : 0
        const v31 = dataset2[keyVal] ? dataset2[keyVal][1] : 0
        if(v30) setV30(v30)
        if(v31) setV31(v31)
    }
    const handleOnChange6 = (e) => {
        console.log('handle change->', e.target.value);
        const keyVal = e.target.value
        setV16(e.target.value)
        const v32 = dataset2[keyVal] ? dataset2[keyVal][0] : 0
        const v33 = dataset2[keyVal] ? dataset2[keyVal][1] : 0
        if(v32) setV32(v32)
        if(v33) setV33(v33)
    }
    const handleOnChange7 = (e) => {
        console.log('handle change->', e.target.value);
        const keyVal = e.target.value
        setV17(e.target.value)
        const v34 = dataset2[keyVal] ? dataset2[keyVal][0] : 0
        const v35 = dataset2[keyVal] ? dataset2[keyVal][1] : 0
        if(v35) setV35(v35)
        if(v34) setV34(v34)
    }
    useEffect(()=>{
        onChange(Number(v0)+Number(v1)+Number(v2)+Number(v3)+Number(v4)+Number(v5)+Number(v6)+Number(v7)+Number(v8)+Number(v9)+Number(v30)+Number(v31)+Number(v32)+Number(v33)+Number(v34)+Number(v35))
    },[
        v0,v1,v2,v3,v4,v5,v6,v7,v8,v9,v10,v30,v31,v32,v33,v34,v35
    ])
    return (
        // <div className='SignupPage' onClick={() => setfake1(true)}>
        <div className='container'>
            <span className='title'>Input Data</span>
            <div className='table-container'>
                <table>
                    <tbody>
                        <tr>
                            <th>Franchisee</th>
                            <th> Scope 1 emissions (kg CO2e)</th>
                            <th>Scope 2 emissions (kg CO2e)</th>
                        </tr>
                        <tr>
                            <td><input type='text' value={v10} className='Input_form' onChange={handleOnChange}/></td>
                            <td><input type='text' value={v0} className='Input_form' onChange={(e)=>{setV0(e.target.value)}}/></td>
                            <td><input type='text' value={v1} className='Input_form' onChange={(e)=>{setV1(e.target.value)}}/></td>
                        </tr>
                        <tr>
                            <td><input type='text' value={v11} className='Input_form' onChange={handleOnChange1}/></td>
                            <td><input type='text' value={v2} className='Input_form' onChange={(e)=>{setV2(e.target.value)}}/></td>
                            <td><input type='text' value={v3} className='Input_form' onChange={(e)=>{setV3(e.target.value)}}/></td>
                        </tr>
                        <tr>
                            <td><input type='text' value={v12} className='Input_form' onChange={handleOnChange2}/></td>
                            <td><input type='text' value={v4} className='Input_form' onChange={(e)=>{setV4(e.target.value)}}/></td>
                            <td><input type='text' value={v5} className='Input_form' onChange={(e)=>{setV5(e.target.value)}}/></td>
                        </tr>
                        <tr>
                            <td><input type='text' value={v13} className='Input_form' onChange={handleOnChange3}/></td>
                            <td><input type='text' value={v6} className='Input_form' onChange={(e)=>{setV6(e.target.value)}}/></td>
                            <td><input type='text' value={v7} className='Input_form' onChange={(e)=>{setV7(e.target.value)}}/></td>
                        </tr>
                        <tr>
                            <td><input type='text' value={v14} className='Input_form' onChange={handleOnChange4}/></td>
                            <td><input type='text' value={v8} className='Input_form' onChange={(e)=>{setV8(e.target.value)}}/></td>
                            <td><input type='text' value={v9} className='Input_form' onChange={(e)=>{setV9(e.target.value)}}/></td>
                        </tr>
                        <tr>
                            <td><input type='text' value={v15} className='Input_form' onChange={handleOnChange5}/></td>
                            <td><input type='text' value={v30} className='Input_form' onChange={(e)=>{setV30(e.target.value)}}/></td>
                            <td><input type='text' value={v31} className='Input_form' onChange={(e)=>{setV31(e.target.value)}}/></td>
                        </tr>
                        <tr>
                            <td><input type='text' value={v16} className='Input_form' onChange={handleOnChange6}/></td>
                            <td><input type='text' value={v32} className='Input_form' onChange={(e)=>{setV32(e.target.value)}}/></td>
                            <td><input type='text' value={v33} className='Input_form' onChange={(e)=>{setV33(e.target.value)}}/></td>
                        </tr>
                        <tr>
                            <td><input type='text' value={v17} className='Input_form' onChange={handleOnChange7}/></td>
                            <td><input type='text' value={v34} className='Input_form' onChange={(e)=>{setV34(e.target.value)}}/></td>
                            <td><input type='text' value={v35} className='Input_form' onChange={(e)=>{setV35(e.target.value)}}/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default FranchisesSpecific