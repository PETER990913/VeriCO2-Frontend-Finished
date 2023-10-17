import React, {useState, useEffect} from 'react'
import '../../App.scss'
function UpstreamDistance({onChange}) {
    const [v0, setV0]= useState(2);
    const [v1, setV1]= useState(20000);
    const [v2, setV2]= useState(0.2);
    const [v3, setV3]= useState(1);
    const [v4, setV4]= useState(30000);
    const [v5, setV5]= useState(1.0);
    const [v6, setV6]= useState(6);
    const [v7, setV7]= useState(40000);
    const [v8, setV8]= useState(0.05);
    useEffect(()=>{
        onChange(Number(v0)*Number(v1)*Number(v2)+Number(v3)*Number(v4)*Number(v5)+Number(v6)*Number(v7)*Number(v8))
    },[
        v0,v1,v2,v3,v4,v5,v6,v7,v8
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
                            <th>Mass of transported goods (tonnes)</th>
                            <th>Distance transported (km)</th>
                            <th>Transport mode or vehicle type</th>
                            <th>Emission factor(kg CO2e/TEU-km)</th>
                        </tr>
                        <tr>
                            <td>B</td>
                            <td><input type='text' value={v0} className='Input_form' onChange={(e)=>{setV0(e.target.value)}}/></td>
                            <td><input type='text' value={v1} className='Input_form' onChange={(e)=>{setV1(e.target.value)}}/></td>
                            <td>Truck (rigid, 3.5-7.5t)</td>
                            <td><input type='text' value={v2} className='Input_form' onChange={(e)=>{setV2(e.target.value)}}/></td>
                        </tr>
                        <tr>
                            <td>C</td>
                            <td><input type='text' value={v3} className='Input_form' onChange={(e)=>{setV3(e.target.value)}}/></td>
                            <td><input type='text' value={v4} className='Input_form' onChange={(e)=>{setV4(e.target.value)}}/></td>
                            <td>Air (long haul) </td>
                            <td><input type='text' value={v5} className='Input_form' onChange={(e)=>{setV5(e.target.value)}}/></td>
                        </tr>
                        <tr>
                            <td>D</td>
                            <td><input type='text' value={v6} className='Input_form' onChange={(e)=>{setV6(e.target.value)}}/></td>
                            <td><input type='text' value={v7} className='Input_form' onChange={(e)=>{setV7(e.target.value)}}/></td>
                            <td>Container 2,000–2,999 TEU</td>
                            <td><input type='text' value={v8} className='Input_form' onChange={(e)=>{setV8(e.target.value)}}/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UpstreamDistance