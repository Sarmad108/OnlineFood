import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import Products from './Products';
import { useMemo } from "react";
const Search = () => {
    const [search, setSearch] = useState("");
    const storeItemsData=useSelector((state)=>{
        return state.cartreducer.storeData;
      });
    const filter = useMemo(() => {
        if (!search) return storeItemsData;
        return storeItemsData.filter((id) => {
          return id.rname.toLowerCase().includes(search.toLowerCase());
        });
      }, [search]);
  return (
    
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
        <div className="row d-flex justify-content-center allign-items-center">
        {filter.map((element)=>{
          return <Products />
        })}
      </div>
      </div>
    
  )
}

export default Search
