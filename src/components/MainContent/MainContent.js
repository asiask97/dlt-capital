import './MainContent.css';


function MainContent() {
    return (
      <div className="MainContent" id='MainContent' >
        <div className='WeAre'>
            <h4>Who we are </h4>
            <p> DLT Captial is a firm that specialises in high-speed technology solutions for hedge funds and liquidity providers using cryptocurrency exchanges.</p>
        </div>
        <div className='services'>
            <div className='services_mainText'>
                <h4>What do you need</h4>
                <p>Do you trade significant volumes on the main global exchanges?</p>
            </div>
            <div className='services_point1'>
                <p>We can provide <strong>high-speed </strong> price feeds, <strong>lowest fees</strong> as well as <strong>high-speed order executions</strong>.</p>
            </div>
            <div className='services_point2'>
                <p>Technology optimisation can add 2 basis points to trading profitability</p>
            </div>
        </div>
        <div className='services'>
            <div className='services_mainText'>
                <h4> <bold>CT Competition</bold></h4>
                <p className='competition'>Take a look <a  href='https://ct-competition-2023.dltcapital.ie/'  target="_blank">HERE</a>                                                                      </p>

            </div>
        </div>
      </div>
    );
  }
  
  export default MainContent;