import React, { useEffect, useState, useRef } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setTab } from '../redux/actions/index';
import '../App.scss';
import PurchasedSupplier from './inputTable/1_1';
import PurchasedHybrid from './inputTable/1_2';
import PurchasedAverage from './inputTable/1_3';
import PurchasedSpend from './inputTable/1_4';
import UpstreamFuel from './inputTable/3_1';
import UpstreamDistance from './inputTable/3_2';
import UpstreamSpend from './inputTable/3_3';
import WasteWaste from './inputTable/4_1';
import WasteAverage from './inputTable/4_2';
import BusinessFuel from './inputTable/5_1';
import EmployeeDistance from './inputTable/6_1';
import EmployeeAverage from './inputTable/6_2';
import UpstreamAsset from './inputTable/7_1';
import ProcessingSite from './inputTable/9_1';
import ProcessingAverage from './inputTable/9_2';
import UseDirect from './inputTable/10_1';
import UseIndirect from './inputTable/10_2';
import EndWaste from './inputTable/11_1';
import Downstream from './inputTable/12_1';
import FranchisesSpecific from './inputTable/13_1';
import FranchisesAverage from './inputTable/13_2';
import InvestmentSpecific from './inputTable/14_1';
import InvestmentAverage from './inputTable/14_2';
import FuelTransmission from './inputTable/1_15';
import CapitalGoodSupplier from './inputTable/2_1';
import CapitalGoodHybrid from './inputTable/2_2';
import CapitalGoodProduct from './inputTable/2_3';
import CapitalGoodSpend from './inputTable/2_4';
import DownstreamTransportation from './inputTable/8_1';

function CalculationPage({ sideBarFlag, setSideBarFlag, SERVER_URL }) {
    const fileRef = useRef()
    const [dataset, setDataset] = useState([])
    const [dataset1, setDataset1] = useState({})
    const [dataset2, setDataset2] = useState({})
    const onClick = () => {
        fileRef.current.click()
    }
    const handleFileParse = (e) => {
        const files = e.target.files;
        console.log("file", files);
        if (files) {
            const formData = new FormData()
            formData.append('csv', files[0]);
            axios.post('http://localhost:4000/read-file', formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            })
                .then(res => setDataset(res.data.data));
        }
    }
    const handleFileParseCSV = () => {
        axios.get('http://localhost:4000/load-factor')
            .then(res => setDataset1(res.data));
    }

    const handleFileParseScope = () => {
        axios.get('http://localhost:4000/load-scope')
            .then(res => setDataset2(res.data));
    }
    // console.log("dataset1", dataset1)
    console.log("dataset2", dataset2)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [category_method1, setCategory_method1] = useState(0);
    const [category_method2, setCategory_method2] = useState(0);
    const [category_method4, setCategory_method4] = useState(0);
    const [category_method5, setCategory_method5] = useState(0);
    const [category_method7, setCategory_method7] = useState(0);
    const [category_method10, setCategory_method10] = useState(0);
    const [category_method11, setCategory_method11] = useState(0);
    const [category_method14, setCategory_method14] = useState(0);
    const [category_method15, setCategory_method15] = useState(0);
    const [result1_1, setResult1_1] = useState(0);
    const [result1_2, setResult1_2] = useState(0);
    const [result1_3, setResult1_3] = useState(0);
    const [result1_4, setResult1_4] = useState(0);
    const [result2_1, setResult2_1] = useState(0);
    const [result2_2, setResult2_2] = useState(0);
    const [result2_3, setResult2_3] = useState(0);
    const [result2_4, setResult2_4] = useState(0);
    const [result3_1, setResult3_1] = useState(0);
    const [result3_2, setResult3_2] = useState(0);
    const [result1_15, setResult1_15] = useState(0);
    const [result3_3, setResult3_3] = useState(0);
    const [result4_1, setResult4_1] = useState(0);
    const [result4_2, setResult4_2] = useState(0);
    const [result5_1, setResult5_1] = useState(0);
    const [result6_1, setResult6_1] = useState(0);
    const [result6_2, setResult6_2] = useState(0);
    const [result7_1, setResult7_1] = useState(0);
    const [result8_1, setResult8_1] = useState(0);
    const [result9_1, setResult9_1] = useState(0);
    const [result9_2, setResult9_2] = useState(0);
    const [result10_1, setResult10_1] = useState(0);
    const [result10_2, setResult10_2] = useState(0);
    const [result11_1, setResult11_1] = useState(0);
    const [result12_1, setResult12_1] = useState(0);
    const [result13_1, setResult13_1] = useState(0);
    const [result13_2, setResult13_2] = useState(0);
    const [result14_1, setResult14_1] = useState(0);
    const [result14_2, setResult14_2] = useState(0);
    dispatch(setTab(2));
    const [listData, setListData] = useState([])
    const [category, setCategory] = useState(0)
    const [method, setMethod] = useState(0)
    const [startCalculation, setStartCalculation] = useState(false)
    console.log("Category", category)
    console.log("method", method)
    console.log("calculation", startCalculation)
    useEffect(() => {
        const cookies = new Cookies();
        if (!cookies.get('token')) {
            navigate('/login');
        }
        else {
            axios.get(SERVER_URL + '/calculation')
                .then(res => {
                    //   console.log(res.data)
                    setListData([...res.data])
                    setCategory(0)
                    setMethod(0)
                    setStartCalculation(false)
                })
        }
    }, [SERVER_URL, navigate])
    const displaycase = () => {
        if (category === 0 & method === 0) return <PurchasedSupplier dataset={dataset} dataset1={dataset1} onChange={(data) => { setResult1_1(data) }} />
        if (category === 0 & method === 1) return <PurchasedHybrid dataset1={dataset1} onChange={(data) => { setResult1_2(data) }} />
        if (category === 0 & method === 2) return <PurchasedAverage dataset1={dataset1} onChange={(data) => { setResult1_3(data) }} />
        if (category === 0 & method === 3) return <PurchasedSpend dataset1={dataset1} onChange={(data) => { setResult1_4(data) }} />
        if (category === 1 & method === 0) return <CapitalGoodSupplier dataset={dataset} dataset1={dataset1} onChange={(data) => { setResult2_1(data) }} />
        if (category === 1 & method === 1) return <CapitalGoodHybrid dataset1={dataset1} onChange={(data) => { setResult2_2(data) }} />
        if (category === 1 & method === 2) return <CapitalGoodProduct dataset1={dataset1} onChange={(data) => { setResult2_3(data) }} />
        if (category === 1 & method === 3) return <CapitalGoodSpend dataset1={dataset1} onChange={(data) => { setResult2_4(data) }} />
        if (category === 3 & method === 0) return <UpstreamFuel dataset1={dataset1} onChange={(data) => { setResult3_1(data) }} />
        if (category === 3 & method === 1) return <UpstreamDistance dataset1={dataset1} onChange={(data) => { setResult3_2(data) }} />
        if (category === 3 & method === 2) return <UpstreamSpend dataset1={dataset1} onChange={(data) => { setResult3_3(data) }} />
        if (category === 4 & method === 0) return <WasteWaste dataset1={dataset1} onChange={(data) => { setResult4_1(data) }} />
        if (category === 4 & method === 1) return <WasteAverage dataset1={dataset1} onChange={(data) => { setResult4_2(data) }} />
        if (category === 5 & method === 0) return <BusinessFuel onChange={(data) => { setResult5_1(data) }} />
        if (category === 6 & method === 0) return <EmployeeDistance onChange={(data) => { setResult6_1(data) }} />
        if (category === 6 & method === 1) return <EmployeeAverage onChange={(data) => { setResult6_2(data) }} />
        if (category === 7 & method === 0) return <UpstreamAsset onChange={(data) => { setResult7_1(data) }} />
        if (category === 8 & method === 0) return <DownstreamTransportation onChange={(data) => { setResult8_1(data) }} />
        if (category === 9 & method === 0) return <ProcessingSite onChange={(data) => { setResult9_1(data) }} />
        if (category === 9 & method === 1) return <ProcessingAverage onChange={(data) => { setResult9_2(data) }} />
        if (category === 10 & method === 0) return <UseDirect onChange={(data) => { setResult10_1(data) }} />
        if (category === 10 & method === 1) return <UseIndirect onChange={(data) => { setResult10_2(data) }} />
        if (category === 11 & method === 0) return <EndWaste onChange={(data) => { setResult11_1(data) }} />
        if (category === 12 & method === 0) return <Downstream onChange={(data) => { setResult12_1(data) }} />
        if (category === 13 & method === 0) return <FranchisesSpecific dataset2={dataset2} dataset={dataset} onChange={(data) => { setResult13_1(data) }} />
        if (category === 13 & method === 1) return <FranchisesAverage onChange={(data) => { setResult13_2(data) }} />
        if (category === 14 & method === 0) return <InvestmentSpecific dataset2={dataset2} onChange={(data) => { setResult14_1(data) }} />
        if (category === 14 & method === 1) return <InvestmentAverage onChange={(data) => { setResult14_2(data) }} />
        if (category === 2 & method === 0) return <FuelTransmission dataset1={dataset1} onChange={(data) => { setResult1_15(data) }} />
        else return <PurchasedSupplier dataset={dataset} dataset1={dataset1} onChange={(data) => { setResult1_1(data) }} />
    }
    useEffect(() => {
        localStorage.setItem('result1_1', result1_1)
        localStorage.setItem('result1_2', result1_2)
        localStorage.setItem('result1_3', result1_3)
        localStorage.setItem('result1_4', result1_4)
        localStorage.setItem('result2_1', result2_1)
        localStorage.setItem('result2_2', result2_2)
        localStorage.setItem('result2_3', result2_3)
        localStorage.setItem('result2_4', result2_4)
        localStorage.setItem('result1_15', result1_15)
        localStorage.setItem('result3_1', result3_1)
        localStorage.setItem('result3_2', result3_2)
        localStorage.setItem('result3_3', result3_3)
        localStorage.setItem('result4_1', result4_1)
        localStorage.setItem('result4_2', result4_2)
        localStorage.setItem('result5_1', result5_1)
        localStorage.setItem('result6_1', result6_1)
        localStorage.setItem('result6_2', result6_2)
        localStorage.setItem('result7_1', result7_1)
        localStorage.setItem('result8_1', result8_1)
        localStorage.setItem('result9_1', result9_1)
        localStorage.setItem('result9_2', result9_2)
        localStorage.setItem('result10_1', result10_1)
        localStorage.setItem('result10_2', result10_2)
        localStorage.setItem('result11_1', result11_1)
        localStorage.setItem('result12_1', result12_1)
        localStorage.setItem('result13_1', result13_1)
        localStorage.setItem('result13_2', result13_2)
        localStorage.setItem('result14_1', result14_1)
        localStorage.setItem('result14_2', result14_2)
    }, [result1_1, result1_2, result1_3, result1_4, result2_1, result2_2, result2_3, result2_4, result3_1, result3_2, result3_3, result4_1, result4_2, result5_1, result1_15, result6_1, result6_2, result7_1, result8_1, result9_1, result9_2, result10_1, result10_2, result11_1, result12_1, result13_1, result13_2, result14_1, result14_2])
    useEffect(() => {
        if (category === 0) {
            setCategory_method1(old => {
                return method
            })
            console.info('test->', method)
            sessionStorage.setItem('Category_method1', method)
        }
        if (category === 1) {
            setCategory_method2(old => {
                return method
            })
            console.info('test->', method)
            sessionStorage.setItem('Category_method2', method)
        }
        if (category === 3) {
            setCategory_method4(old => {
                return method
            })
            console.info('test->', method)
            sessionStorage.setItem('Category_method4', method)
        }
        if (category === 4) {
            setCategory_method5(old => {
                return method
            })
            console.info('test->', method)
            sessionStorage.setItem('Category_method5', method)
        }
        if (category === 6) {
            setCategory_method7(old => {
                return method
            })
            console.info('test->', method)
            sessionStorage.setItem('Category_method7', method)
        }
        if (category === 9) {
            setCategory_method10(old => {
                return method
            })
            console.info('test->', method)
            sessionStorage.setItem('Category_method10', method)
        }
        if (category === 10) {
            setCategory_method11(old => {
                return method
            })
            console.info('test->', method)
            sessionStorage.setItem('Category_method11', method)
        }
        if (category === 13) {
            setCategory_method14(old => {
                return method
            })
            console.info('test->', method)
            sessionStorage.setItem('Category_method14', method)
        }
        if (category === 14) {
            setCategory_method15(old => {
                return method
            })
            console.info('test->', method)
            sessionStorage.setItem('Category_method15', method)
        }

    }, [method, category])
    const displayresult = () => {
        if (category === 0 & method === 0 & startCalculation === true) return <div>
            <div className='scopes-container'>
                <div className='scopes'>
                    <div className='top'>
                        <span>Scope 3 Emission:</span>
                        <div>
                            <span>{(result1_1 / 1000).toFixed(1)}K</span>
                            <span>KgCO2e</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        if (category === 0 & method === 1 & startCalculation === true) return <div>
            <div className='scopes-container'>
                <div className='scopes'>
                    <div className='top'>
                        <span>Scope 3 Emission:</span>
                        <div>
                            <span>{(result1_2 / 1000).toFixed(1)}K</span>
                            <span>KgCO2e</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        if (category === 0 & method === 2 & startCalculation === true) return <div>
            <div className='scopes-container'>
                <div className='scopes'>
                    <div className='top'>
                        <span>Scope 3 Emission:</span>
                        <div>
                            <span>{(result1_3 / 1000).toFixed(1)}K</span>
                            <span>KgCO2e</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        if (category === 0 & method === 3 & startCalculation === true) return <div>
            <div className='scopes-container'>
                <div className='scopes'>
                    <div className='top'>
                        <span>Scope 3 Emission:</span>
                        <div>
                            <span>{(result1_4 / 1000).toFixed(1)}K</span>
                            <span>KgCO2e</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        if (category === 1 & method === 0 & startCalculation === true) return <div>
            <div className='scopes-container'>
                <div className='scopes'>
                    <div className='top'>
                        <span>Scope 3 Emission:</span>
                        <div>
                            <span>{(result2_1 / 1000).toFixed(1)}K</span>
                            <span>KgCO2e</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        if (category === 1 & method === 1 & startCalculation === true) return <div>
            <div className='scopes-container'>
                <div className='scopes'>
                    <div className='top'>
                        <span>Scope 3 Emission:</span>
                        <div>
                            <span>{(result2_2 / 1000).toFixed(1)}K</span>
                            <span>KgCO2e</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        if (category === 1 & method === 2 & startCalculation === true) return <div>
            <div className='scopes-container'>
                <div className='scopes'>
                    <div className='top'>
                        <span>Scope 3 Emission:</span>
                        <div>
                            <span>{(result2_3 / 1000).toFixed(1)}K</span>
                            <span>KgCO2e</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        if (category === 1 & method === 3 & startCalculation === true) return <div>
            <div className='scopes-container'>
                <div className='scopes'>
                    <div className='top'>
                        <span>Scope 3 Emission:</span>
                        <div>
                            <span>{(result2_4 / 1000).toFixed(1)}K</span>
                            <span>KgCO2e</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        if (category === 2 & method === 0 & startCalculation === true) return <div>
            <div className='scopes-container'>
                <div className='scopes'>
                    <div className='top'>
                        <span>Scope 3 Emission:</span>
                        <div>
                            <span>{(result1_15 / 1000).toFixed(1)}K</span>
                            <span>KgCO2e</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        if (category === 3 & method === 0 & startCalculation === true) return <div>
            <div className='scopes-container'>
                <div className='scopes'>
                    <div className='top'>
                        <span>Scope 3 Emission:</span>
                        <div>
                            <span>{(result3_1 / 1000).toFixed(1)}K</span>
                            <span>KgCO2e</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        if (category === 3 & method === 1 & startCalculation === true) return <div>
            <div className='scopes-container'>
                <div className='scopes'>
                    <div className='top'>
                        <span>Scope 3 Emission:</span>
                        <div>
                            <span>{(result3_2 / 1000).toFixed(1)}K</span>
                            <span>KgCO2e</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        if (category === 3 & method === 2 & startCalculation === true) return <div>
            <div className='scopes-container'>
                <div className='scopes'>
                    <div className='top'>
                        <span>Scope 3 Emission:</span>
                        <div>
                            <span>{(result3_3 / 1000).toFixed(1)}K</span>
                            <span>KgCO2e</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        if (category === 4 & method === 0 & startCalculation === true) return <div>
            <div className='scopes-container'>
                <div className='scopes'>
                    <div className='top'>
                        <span>Scope 3 Emission:</span>
                        <div>
                            <span>{(result4_1 / 1000).toFixed(1)}K</span>
                            <span>KgCO2e</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        if (category === 4 & method === 1 & startCalculation === true) return <div>
            <div className='scopes-container'>
                <div className='scopes'>
                    <div className='top'>
                        <span>Scope 3 Emission:</span>
                        <div>
                            <span>{(result4_2 / 1000).toFixed(1)}K</span>
                            <span>KgCO2e</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        if (category === 5 & method === 0 & startCalculation === true) return <div>
            <div className='scopes-container'>
                <div className='scopes'>
                    <div className='top'>
                        <span>Scope 3 Emission:</span>
                        <div>
                            <span>{(result5_1 / 1000).toFixed(1)}K</span>
                            <span>KgCO2e</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        if (category === 6 & method === 0 & startCalculation === true) return <div>
            <div className='scopes-container'>
                <div className='scopes'>
                    <div className='top'>
                        <span>Scope 3 Emission:</span>
                        <div>
                            <span>{(result6_1 / 1000).toFixed(1)}K</span>
                            <span>KgCO2e</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        if (category === 6 & method === 1 & startCalculation === true) return <div>
            <div className='scopes-container'>
                <div className='scopes'>
                    <div className='top'>
                        <span>Scope 3 Emission:</span>
                        <div>
                            <span>{(result6_2 / 1000).toFixed(1)}K</span>
                            <span>KgCO2e</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        if (category === 7 & method === 0 & startCalculation === true) return <div>
            <div className='scopes-container'>
                <div className='scopes'>
                    <div className='top'>
                        <span>Scope 3 Emission:</span>
                        <div>
                            <span>{(result7_1 / 1000).toFixed(1)}K</span>
                            <span>KgCO2e</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        if (category === 8 & method === 0 & startCalculation === true) return <div>
            <div className='scopes-container'>
                <div className='scopes'>
                    <div className='top'>
                        <span>Scope 3 Emission:</span>
                        <div>
                            <span>{(result8_1 / 1000).toFixed(1)}K</span>
                            <span>KgCO2e</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        if (category === 9 & method === 0 & startCalculation === true) return <div>
            <div className='scopes-container'>
                <div className='scopes'>
                    <div className='top'>
                        <span>Scope 3 Emission:</span>
                        <div>
                            <span>{(result9_1 / 1000).toFixed(1)}K</span>
                            <span>KgCO2e</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        if (category === 9 & method === 1 & startCalculation === true) return <div>
            <div className='scopes-container'>
                <div className='scopes'>
                    <div className='top'>
                        <span>Scope 3 Emission:</span>
                        <div>
                            <span>{(result9_2 / 1000).toFixed(1)}K</span>
                            <span>KgCO2e</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        if (category === 10 & method === 0 & startCalculation === true) return <div>
            <div className='scopes-container'>
                <div className='scopes'>
                    <div className='top'>
                        <span>Scope 3 Emission:</span>
                        <div>
                            <span>{(result10_1 / 1000).toFixed(1)}K</span>
                            <span>KgCO2e</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        if (category === 10 & method === 1 & startCalculation === true) return <div>
            <div className='scopes-container'>
                <div className='scopes'>
                    <div className='top'>
                        <span>Scope 3 Emission:</span>
                        <div>
                            <span>{(result10_2 / 1000).toFixed(1)}K</span>
                            <span>KgCO2e</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        if (category === 11 & method === 0 & startCalculation === true) return <div>
            <div className='scopes-container'>
                <div className='scopes'>
                    <div className='top'>
                        <span>Scope 3 Emission:</span>
                        <div>
                            <span>{(result11_1 / 1000).toFixed(1)}K</span>
                            <span>KgCO2e</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        if (category === 12 & method === 0 & startCalculation === true) return <div>
            <div className='scopes-container'>
                <div className='scopes'>
                    <div className='top'>
                        <span>Scope 3 Emission:</span>
                        <div>
                            <span>{(result12_1 / 1000).toFixed(1)}K</span>
                            <span>KgCO2e</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        if (category === 13 & method === 0 & startCalculation === true) return <div>
            <div className='scopes-container'>
                <div className='scopes'>
                    <div className='top'>
                        <span>Scope 3 Emission:</span>
                        <div>
                            <span>{(result13_1 / 1000).toFixed(1)}K</span>
                            <span>KgCO2e</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        if (category === 13 & method === 1 & startCalculation === true) return <div>
            <div className='scopes-container'>
                <div className='scopes'>
                    <div className='top'>
                        <span>Scope 3 Emission:</span>
                        <div>
                            <span>{(result13_2 / 1000).toFixed(1)}K</span>
                            <span>KgCO2e</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        if (category === 14 & method === 0 & startCalculation === true) return <div>
            <div className='scopes-container'>
                <div className='scopes'>
                    <div className='top'>
                        <span>Scope 3 Emission:</span>
                        <div>
                            <span>{(result14_1 / 1000).toFixed(1)}K</span>
                            <span>KgCO2e</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        if (category === 14 & method === 1 & startCalculation === true) return <div>
            <div className='scopes-container'>
                <div className='scopes'>
                    <div className='top'>
                        <span>Scope 3 Emission:</span>
                        <div>
                            <span>{(result14_2 / 1000).toFixed(1)}K</span>
                            <span>KgCO2e</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        else return <div>
            <div className='scopes-container'>
                <div className='scopes'>
                    <div className='top'>
                        <span>Scope 3 Emission:</span>
                        <div>
                            <span></span>
                            <span>KgCO2e</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
    return (
        <div className='CalculationPage' onClick={() => setSideBarFlag(false)}>
            <Header sideBarFlag={sideBarFlag} setSideBarFlag={setSideBarFlag} />
            <div className='cluster'>
                <span className='title'>Scope 3 Emission Performance (t of CO₂)</span>
                <div className='main'>
                    <div className='box'>
                        <span className='title'>15 Categories</span>
                        {
                            listData?.map((item, index) => {
                                return (
                                    <span className={index === category ? 'selected' : ''} key={'category' + index} onClick={() => {
                                        setCategory(index)
                                        setMethod(0)
                                    }}>• {item?.title}</span>
                                )
                            })
                        }
                    </div>
                    <div className='center'>
                        <div className='box'>
                            <span className='title'>Methods for category {category + 1}</span>
                            {
                                listData[category]?.details?.map((item, index) => {
                                    return (
                                        <span className={method === index ? 'selected' : ''} key={'method' + index} onClick={() => {
                                            setMethod(index)
                                        }}>• {item}</span>
                                    )
                                })
                            }
                        </div>
                        <div className='box'>

                            {displaycase()}

                            <div className='button' onClick={onClick}>Upload Data</div>
                            <input type="file" style={{ display: 'none' }} ref={fileRef} onChange={handleFileParse} />
                            <div className='button' onClick={handleFileParseCSV}>Import Emission Factor</div>
                            <div className='button' onClick={handleFileParseScope}>Import Scope1 & 2</div>
                        </div>
                    </div>
                    <div className='box'>
                        <span className='title'>Emission Overview</span>

                        {displayresult()}

                        {startCalculation ?
                            <div className='button red' onClick={() => { setStartCalculation(!startCalculation) }}>
                                Cancel Calculation
                            </div>
                            :
                            <div className='button' onClick={() => { setStartCalculation(!startCalculation) }}>
                                Start Calculation
                            </div>
                        }
                        <div className='button' onClick={() => navigate('/display')} >Emission display</div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CalculationPage