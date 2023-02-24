import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Badge from "@mui/material/Badge";
import Nav from "react-bootstrap/Nav";
import Menu from "@mui/material/Menu";
import { NavLink } from "react-router-dom";
import { useDispatch,useSelector } from 'react-redux'
import { Table } from "react-bootstrap";
import { ADD } from "../redux/actions/actions";
import { DLT,REMOVE } from "../redux/actions/actions";


 
const Header = () => {
  
  
  const send = (e)=> {
    // console.log(e);
    dispatch(ADD(e));
  }
  const remove =(item)=>{
    dispatch(REMOVE(item))
  }
    const getData = useSelector((state)=>state.cartreducer.carts);
    const dispatch=useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dlt=(id)=>{
    dispatch(DLT(id))
  }
  
  const cartItems = useSelector((state) => state.cartreducer.carts);
  const totalPrice=cartItems.reduce ((totalPrice, item) => {
    
    return  totalPrice+item.price*item.qnty

    
  },0)
 

 
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ height: "70px" }}>
        <Container>
          <NavLink to="/" className="text-decoration-none text-light ">
            Add to cart
          </NavLink>
          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none text-light mx-2">
              Home
            </NavLink>
          </Nav>
                    
          <Badge
            badgeContent={getData.length}
            color="primary"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <i
              class="fa-solid fa-cart-shopping text-light"
              style={{ fontSize: 25, cursor: "pointer" }}
            ></i>
          </Badge>
        </Container>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        > 
          {
            getData.length ?
            <div className="card_details" style={{width:"24rem",padding:10}}>
               <Table>
                <thead>
                  <tr>
                    <th>Photo</th>
                    <th>Restaurent Name</th>
                  </tr>
                </thead>
                <tbody>
                 
                  {
                      getData.map ((e)=>{
                        return(
                          <>
                            <tr>
                              <td>
                                <NavLink to={`/cart/${e.id}`}><img src={e.imgdata} style={{width:"5rem",height:"5rem"}} alt=""  onClick={handleClose}/></NavLink>
                                
                              </td>
                              <td>
                                <p>{e.rname}</p>
                                <p>Price  :  Rs{e.price}</p>
                                <p>
                                <div className="mt-4 d-flex justify-content-between allign-items-center" style={{width:100, cursor:"pointer",background:"#ddd",color:"#111"}}>
                        <span style={{fontSize:22}} onClick={e.qnty <=1? ()=>dlt(e): ()=>remove(e)}>-</span>
                        <span style={{fontSize:20}}>{e.qnty}</span>
                        <span style={{fontSize:22}} onClick={()=>send(e)}>+</span>
                    </div> Quantity  :  {e.qnty}</p>
                                <p style={{color:"red",fontSize:20,cursor:"pointer"}}onClick={()=>dlt(e.id)}>
                                  <i className="fas fa-trash smalltrash"></i>
                                </p>
                              </td>
                              <td className="m5-5" style={{color:"red",fontSize:20,cursor:"pointer"}} onClick={()=>dlt(e.id)}>
                              <i className="fas fa-trash largetrash"></i>
                              </td>
                            </tr>
                          </>
                        )
                      })
                  }
                  <p className="text-center">Total : Rs{totalPrice}</p>
                </tbody>
               </Table>
            </div>:
             <div className='card_details d-flex justify-content-center allign-items-center'>
             <i
               className="fas fa-close smallclose "
               onClick={handleClose}
               style={{
                 position: "absolute",
                 top: 1,
                 right: 10,
                 fontSize: 20,
                 cursor: "pointer",
               }}
             ></i>
             <p style={{ fontSize: 22,padding:10 }}> Your cart is 
             empty</p>
           </div>
          } 
         
        </Menu>
      </Navbar>
    </>
  );
};

export default Header;
