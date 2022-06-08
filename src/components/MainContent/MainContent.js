import './MainContent.css';
import RadialBackground from '../RadialBackground/RadialBackground';
import useOnScreen from '../../hooks/useOnScreen';
import React, { useRef } from 'react';


function MainContent() {
    const visibleContainerRef = useRef();
    const [visibleContainer] = useOnScreen({threshold: 0.7}, visibleContainerRef)
    return (
      <div className="MainContent" id='MainContent' ref={visibleContainerRef}>
        <div className='WeAre'>
            <h4>Who we are</h4>
            <p> DLT Captial is a firm that specialises in high-speed technology solutions for hedge funds and liquidity providers using cryptocurrency exchanges.</p>
        </div>
        <div className='services'>
            <div className='services_mainText'>
                <h4>Do you</h4>
                <p>Do you trade significant volumes on the main global exchanges?</p>
            </div>
            <div className='services_point1'>
                <p>We can provide <strong>high-speed </strong> price feeds, <strong>lowest fees</strong> as well as <strong>high-speed order executions</strong>.</p>
            </div>
            <div className='services_point2'>
                <p>Technology optimisation can add 2 basis points to trading profitability</p>
            </div>
        </div>
        <div className='more_info'>
            <h4>What makes us stand out in crypto market?</h4>
            <div className='more_info_points more_info_pointOne'>
                <h5>Volumes</h5>
                <p>Monthly trading volumes exceeding $1B globally.</p>
            </div> 
            <div className='more_info_points more_info_pointTwo'>
                <h5>Access</h5>
                <p>Access to top volume rebates on major exchanges.</p>
            </div>   
            <div className='more_info_points more_info_pointThree'>
                <h5>High Speed</h5>
                <p>High speed network infrastructure.</p>
            </div>   
            <div className='more_info_points more_info_pointFour'>
                <h5>Low  Latency</h5>
                <p>Low latency order execution.</p>
            </div>                                           
        </div>
        <RadialBackground style={visibleContainer} />

      </div>
    );
  }
  
  export default MainContent;