import React, {useState} from 'react'
import './shop.css'

const Shop = () => {
  const [curr , newcurr] = useState(0)
  return (
    <div className="App">
     <div className="maindiv">
        <br />
        <table height="7%" width="100%">
          <tbody><tr>
              <td><a href="./Home.js">HOME</a></td>
              <td><a href="!#">COUPONS</a></td>
              <td><input type="text" name="search" placeholder="Search Items" className='inputbox' />
              <button type="submit" className='search'>Search</button></td>
            </tr>
          </tbody></table>
        <h1>QUICK MART</h1>
        <div className="div3">
          <img src = "./images/sugar.jpg" alt='img1'className="img1" />
          <br /><br />
          <input type="checkbox" />Add to cart
        </div>
        <div className="div4">
          <img src = "./images/salt.jpg" alt='img2' className="img2" />
          <br /><br />
          <input type="checkbox" />Add to cart
        </div>
        <div className="div5">
          <img src = "./images/ghee.jpg" alt ='img3'className="img3" />
          <br /><br />
          <input type="checkbox" />Add to cart
        </div>        
        <div className="div6">
          <img src = "./images/aatta.jpg" alt='img4' className="img4" />
          <br /><br />
          <input type="checkbox" />Add to cart
        </div>
        <button type="button" onClick={() => newcurr(curr + 1)} className="btn">BUY</button>
        <input type="text" name="search" placeholder={curr} className='cart' />
      </div>
    </div>
  )
};

export default Shop
