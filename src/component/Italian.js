import React, { useState } from "react";
import cardsData from "./CardsData";
import "./Style.css";
import { NavLink } from "react-router-dom";
import Products from "./Products";
import { useDispatch,useSelector } from "react-redux";
import { ADD, MEMORIZE } from "../redux/actions/actions";
import { useMemo } from "react";

const Cards = () => {
  const dispatch = useDispatch();
  const increment = (e) => {
    dispatch(ADD(e));
  };
  dispatch(MEMORIZE(cardsData));
  const storeItemsData=useSelector((state)=>{
    return state.cartreducer.storeData;
  });
  const [search, setSearch] = useState("");
  const filterCatagory=storeItemsData.filter(storeItemsData=>{
    return storeItemsData.catagory==='italian';
  })
  const filter = useMemo(() => {
    if (!search) return storeItemsData;
    return storeItemsData.filter((id) => {
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
      <h5 style={{ color: "black" }}>Catagories</h5>
      <NavLink to='/starter'>
        <button type="button" class="btn btn-outline-primary">
          Starter
        </button>
      </NavLink>
      <NavLink to='/chineese'>
      <button type="button" class="btn btn-outline-secondary">
        Chineese
      </button>
      </NavLink>
      <NavLink to='/fastFood'>
      <button type="button" class="btn btn-outline-success">
        FastFood
      </button>
     </NavLink>
     <NavLink to='/SindhiFood'>
      <button type="button" class="btn btn-outline-danger">
        SindhiFood
      </button>
      </NavLink>
      <NavLink to='/Biscuits'>
      <button type="button" class="btn btn-outline-warning">
        Biscuits
      </button>
     </NavLink>
     <NavLink to='/desi'>
      <button type="button" class="btn btn-outline-info">
        Desi
      </button>
        </NavLink>
      <div className="row d-flex justify-content-center allign-items-center">
        {filterCatagory.map((element)=>{
          return <Products data={element} increment={increment}/>
        })}
        {/* {filter.map((element) => {
          return <Products data={element} increment={increment} />;
        })} */}
      </div>1
    </div>
  );
};

export default Cards;
