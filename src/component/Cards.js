import React, { useState, useEffect } from "react";
import cardsData from "./CardsData";
import "./Style.css";
import { NavLink } from "react-router-dom";
import Products from "./Products";
import { useDispatch, useSelector } from "react-redux";
import { ADD, MEMORIZE } from "../redux/actions/actions";
import { useMemo } from "react";

const Cards = () => {
  const [price, setPrice] = useState(1000);
  const [displayData, setDisplayData] = useState('');

  useEffect(() => {
    
  });

  const handleInput = (e) => {
    setPrice(e.target.value);
  };
  const dispatch = useDispatch();
  const increment = (e) => {
    dispatch(ADD(e));
  };
  dispatch(MEMORIZE(cardsData));
  const storeItemsData = useSelector((state) => {
    return state.cartreducer.storeData;
    
  });

  console.log(storeItemsData)
  setDisplayData(storeItemsData)

  const [search, setSearch] = useState("");

  
const renderData = ()=>{

  const filterCatagory = storeItemsData.filter((storeItemsData) => {
    //console.log(filterCatagory)
    return storeItemsData.catagory === "Starter" ;
  } )
  console.log(filterCatagory)
  setDisplayData(filterCatagory)

}
  

  const filterPrice = storeItemsData.filter((storeItemsData) => {
    let priceStore;
    return storeItemsData.price === priceStore;
  });
  const filter = useMemo(() => {
    if (!search) return storeItemsData;
    return cardsData.filter((id) => {
      return id.rname.toLowerCase().includes(search.toLowerCase());
    });
  }, [search]);

  return (
    <div className="container mt-3">
      <h2
        className="text-center text-decoration-underline "
        style={{
          color: "black",
          fontSize: 40,
          padding: 10,
          fontWeight: "lighter",
        }}
      >
        We are here to serve
      </h2>

      <div>
        <input
          type="text"
          className="form-control"
          placeholder="Search Product"
          aria-label="Search"
          aria-describedby="basic=addon"
          value={search}
          onChange={(element) => setSearch(element.target.value)}
        />
      </div>
      {/* <div>
      <h5 style={{ color: "black" }}>Catagories</h5>
     <div>{filterCatagory.map((curElem,index)=>{
      return (<button
      key={index}
      type="button"
      name="category"
      value={curElem  }
      onClick={filterCatagory} 
      debugger
      >
     
        Starter

      </button>
      
     )})};</div>
      </div> */}


      <button
        onClick={renderData}
        formtarget="_blank"
        type="button"
        class="btn btn-outline-primary"
      >
        Starter
      </button>
      <NavLink to="/chineese">
        <button type="button" class="btn btn-outline-secondary">
          Chineese
        </button>
      </NavLink>
      <NavLink to="/fastFood">
        <button type="button" class="btn btn-outline-success">
          FastFood
        </button>
      </NavLink>
      <NavLink to="/SindhiFood">
        <button type="button" class="btn btn-outline-danger">
          SindhiFood
        </button>
      </NavLink>
      <NavLink to="/Biscuits">
        <button type="button" class="btn btn-outline-warning">
          Biscuits
        </button>
      </NavLink>
      <NavLink to="/desi">
        <button type="button" class="btn btn-outline-info">
          Desi
        </button>
      </NavLink>

      <div className="filter_Price">
        <h3>Price Range {price}</h3>
        <input type="range" onInput={handleInput} />

        <div>
          {storeItemsData
            .filter((storeItemsData) => {
              return storeItemsData.price > parseInt(price, 1000);
            })
            .map((storeItemsData) => {
              return price.map((element) => {
                return <Products data={element} increment={element} />;
              });
            })}
        </div>
      </div>

      <div className="row d-flex justify-content-center allign-items-center">
        {filter.map((element) => {
          return <Products data={element} increment={increment} />;
        })}
      </div>
    </div>
  );
};

export default Cards;
