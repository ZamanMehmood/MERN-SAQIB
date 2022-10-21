import React, {useState, useEffect} from "react";
import axios from "axios";
import './homepage.scss'
import daraz1 from '../Assets/daraz1.jpg'

const Cards = () => {
const [products, setProducts] =  useState([]);

  useEffect(() => {
    const apiHandler = async () => {
         const data = await axios.get('http://localhost:8081/products/getProducts')
         console.log(data)
         setProducts(data.data)

    }
    apiHandler();
  },[])



  return (
    <div>
      <div className="container">
        <div className="row mt-5 pt-5">
          <div className="col-3 main-card">
            {products.map(product =>
              <div className="card"  height="50px" >
              <img src={"http://localhost:8081/"+product.Image} className="card-img-top" alt="card image" height="150px" />
              <div className="card-body">
                <p className="card-text">
                 <a  className="card-link">{product.Name}</a>
                </p>
                <p className="card-price">{product.price}</p>
                <strike className="strikeline">{product.discountPrice}</strike> 
                <span className="discount-price">{product.totalReviews}</span>
                   <div>
                   <i className="fa fa-star star-icon" aria-hidden="true"></i>
                   <i className="fa fa-star star-icon" aria-hidden="true"><i className="fa fa-star star-icon" aria-hidden="true"></i></i><i className="fa fa-star star-icon" aria-hidden="true"></i><i className="fa fa-star star-icon " aria-hidden="true"></i> <span className="discount-price">(362)</span>
                   </div>
              </div>
            </div>
              )}
            
          </div>
          
          {/* <div className="col-3">
          <div className="card"  height="50px" >
              <img src={daraz1} className="card-img-top" alt="card image" height="150px" />
              <div className="card-body">
                <p className="card-text">
                 <a  className="card-link">Electronic Fast Hair Straightener Portable Mini Hair Flat Iron</a>
                </p>
                <p className="card-price">Rs. 399</p>
                <strike className="strikeline">Rs. 599 </strike> 
                <span className="discount-price">-33%</span>
                   <div>
                   <i className="fa fa-star star-icon" aria-hidden="true"></i>
                   <i className="fa fa-star star-icon" aria-hidden="true"><i className="fa fa-star star-icon" aria-hidden="true"></i></i><i className="fa fa-star star-icon" aria-hidden="true"></i><i className="fa fa-star star-icon " aria-hidden="true"></i> <span className="discount-price">(362)</span>
                   </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>

    // <div className="card" style={{width: "18rem"}}>
    //   <img src="..." className="card-img-top" alt="..." />
    //   <div className="card-body">
    //     <h5 className="card-title">Card title</h5>
    //     <p className="card-text">
    //       Some quick example text to build on the card title and make up the
    //       bulk of the card's content.
    //     </p>
    //     <a href="#" className="btn btn-primary">
    //       Go somewhere
    //     </a>
    //   </div>
    // </div>
  );
};

export default Cards;
