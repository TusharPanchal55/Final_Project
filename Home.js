import React from 'react';
import './Home.css';

function Home() {
  return (
    <div>
      <h1>QuickMart</h1>
    
    <div className='main'>
    <div className = 'outerbox'>
        <div className = 'sliderbox'>
          <img src="/images/oil.jpg" alt='img1' className='slideimg'/>
          <img src="/images/almond.jpg" alt='img2' className='slideimg'/>
          <img src="/images/maida.jpg" alt='img3' className='slideimg'/>

        </div>
    </div>
    
      <table>
            <tbody><tr>
                <td align="center">HOME</td>
              </tr>
              <tr>
                <td align="center">SHOP NOW</td>
              </tr>
              <tr>
                <td align="center">ABOUT US</td>
              </tr>
            </tbody></table>

      </div>      
    </div>
  );
}

export default Home