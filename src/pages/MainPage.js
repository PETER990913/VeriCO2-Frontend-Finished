import React from 'react'
import Header from '../components/Header'
import mainBack from '../assets/images/co2-Recovered4.png'
import earthOnly from '../assets/images/earth-only.png'
import coTwoBubble from '../assets/images/co2-bubble.png'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setTab } from '../redux/actions/index';
import Cookies from 'universal-cookie';

function MainPage({ sideBarFlag, setSideBarFlag }) {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const cookies = new Cookies();
  const token = cookies.get('token')
  dispatch(setTab(0));
  return (
    <div className='MainPage' onClick={() => setSideBarFlag(false)}>
      <Header sideBarFlag={sideBarFlag} setSideBarFlag={setSideBarFlag} />
      <div className='main'>
        <img src={mainBack} alt="Main Back" className='main-back' />
        <div className='title-polygon'>
          <span>Automated Quantification</span>
          <span> </span>
          <span>of Scope 3 Emissions</span>
          <div className='button' onClick={() => {
            if (!token) {
              navigate('/signup')
            }
            else {
              navigate('/calculation')
            }
          }}>
            Get Started</div>          
        </div>
        <img src={earthOnly} alt="Earth on Hand" className='earth-on-hand' />
        <div className='bubbles'>
          <img src={coTwoBubble} alt="CO2-bubble" className='co2' />
          <img src={coTwoBubble} alt="CO2-bubble" className='co2' />
          <img src={coTwoBubble} alt="CO2-bubble" className='co2' />
          <img src={coTwoBubble} alt="CO2-bubble" className='co2' />
          <img src={coTwoBubble} alt="CO2-bubble" className='co2' />
          <img src={coTwoBubble} alt="CO2-bubble" className='co2' />
          <img src={coTwoBubble} alt="CO2-bubble" className='co2' />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MainPage