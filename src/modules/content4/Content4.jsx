import React from "react";
import './content4.css'

const Content1 = () => {
  return (
    <div className="content4">
    <h3>Our contact info:</h3>
    <p>Address: Kaunas, Kauno g. 99-9</p>
    <p>Fax: 1919184848475</p>
    <p>Phone: +388 7551 55</p>
    <form>
    <h2>Let us send you our newsletter for discounts and other useless things!</h2>
      <input type="text" placeholder="Name"/>
      <input type="number" placeholder="Phone"/>
      <input type="email" placeholder="E-mail"/>
      <button>SEND NEWSLETTER</button>
    </form>
    </div>
  );
};

export default Content1;
