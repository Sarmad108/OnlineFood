import React from 'react'
import Card from "react-bootstrap/Card";
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import { DLT, REMOVE,MEMORIZE } from "../redux/actions/actions";

const Products = (props) => {

    const cartItemsData=useSelector((state) => state.cartreducer.carts);
    const itemAdded=cartItemsData.find((data)=>data.id===props.data.id);
    const filterCatagory=cartItemsData.filter(cartItemsData=>{
      return cartItemsData.catagory==='Starter';
      
    })
    console.log(cartItemsData.catagory)
    const dispatch=useDispatch;
      const decrement = (item) => {
        dispatch(REMOVE(item));
      }; 
      const history = useNavigate();
      const dlt = (id) => {
        dispatch(DLT(id));
        history("/");
      };
     

  return (
    <>
       {/* <button onClick={filterCatagory } type="button" class="btn btn-outline-primary">
          Starter
        </button> */}
        

    <Card
      style={{ width: "22rem", border: "none" }}
      className="mx-2 mt-4 card_style"
    >
      <Card.Img
        variant="top"
        src={props.data.imgdata}
        style={{ height: "16rem" }}
        className="mt-3"
      />
      <Card.Body>
        <Card.Title>{props.data.rname} </Card.Title>
        <Card.Text>Price: Rs {props.data.price}</Card.Text>
        <div className="button_div d-flex justify-content-center">
          {itemAdded && (<div
                              className="mt-4 d-flex justify-content-between allign-items-center"
                              style={{
                                width: 120,
                                cursor: "pointer",
                                background: "#ddd",
                                color: "#111",
                              }}
                            >
                              <span
                                style={{ fontSize: 22 }}
                                onClick={
                                props.data.qnty <= 1
                                    ? () => dlt(props.data)
                                    : () => decrement(props.data)
                                }
                              >
                                -
                              </span>
                              <span style={{ fontSize: 20 }}> {props.cartItemsData.qnty}</span>
                              <span
                                style={{ fontSize: 22 }}
                                onClick={() => props.increment(props.data)}
                              >
                                +
                              </span>
                            </div>)
             || (<Button 
              variant="primary"
              onClick={()=>props.increment(props.data)}
              className="col-lg-12"
              >
                Add to cart
              </Button>
             )
             
}

        </div>
      </Card.Body>
    </Card>
    
    
  </>
  )
}

export default Products
