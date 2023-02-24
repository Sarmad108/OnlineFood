import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ADD, DLT, REMOVE } from "../redux/actions/actions";

const CardsDetails = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  const history = useNavigate();
  const getData = useSelector((state) => state.cartreducer.carts);

  const compare = () => {
    let compareData = getData.filter((e) => {
      return e.id == id;
    });

    setData(compareData);
  };

  const send = (e) => {
    dispatch(ADD(e));
  };

  const dlt = (id) => {
    dispatch(DLT(id));
    history("/");
  };

  const remove = (item) => {
    dispatch(REMOVE(item));
  };

  const dispatch = useDispatch();

  useEffect(() => {
    compare(); //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      <div className="container m-2">
        <h2
          className="text-center text-decoration-underline  "
          style={{
            color: "blanchedalmond",
            fontSize: 40,
            padding: 10,
            fontWeight: "bold",
          }}
        >
          Item Details Page
        </h2>
        <section
          className="container mt-5"
          style={{ height: "73vh", width: "70vw", background: "white" }}
        >
          <div className="itemsdetails">
            {data.map((ele) => {
              return (
                <>
                  <div className="items_img d-flex justify-content-center allign-items-center">
                    <img
                      src={ele.imgdata}
                      alt=""
                      style={{ width: "20rem", height: "22.3555rem" }}
                    />

                    <div className="details mx-5 d-flex justify-content-center allign-items-center">
                      <Table>
                        <tr>
                          <td>
                            <p>
                              <strong>Restaurent: </strong> {ele.rname}
                            </p>
                            <p>
                              <strong>Price: </strong> {ele.price}
                            </p>
                            <p>
                              <strong>Dishes: </strong> {ele.address}
                            </p>
                            <p>
                              <strong>Total: </strong> Rs {ele.price * ele.qnty}
                            </p>
                            <div
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
                                  ele.qnty <= 1
                                    ? () => dlt(ele)
                                    : () => remove(ele)
                                }
                              >
                                -
                              </span>
                              <span style={{ fontSize: 20 }}> {ele.qnty}</span>
                              <span
                                style={{ fontSize: 22 }}
                                onClick={() => send(ele)}
                              >
                                +
                              </span>
                            </div>
                          </td>
                          <td>
                            <p>
                              <strong>Rating :</strong>
                              <span
                                style={{
                                  background: "green",
                                  color: "#fff",
                                  padding: "2px 5px",
                                  borderRadius: "5px",
                                }}
                              >
                                {ele.rating}★
                              </span>
                            </p>
                            <p>
                              <strong>Order Review :</strong>
                              <span>{ele.details}</span>
                            </p>
                            <p>
                              <strong>Remove : </strong>
                              <span>
                                <i
                                  className="fas fa-trash"
                                  onClick={() => dlt(ele.id)}
                                  style={{
                                    color: "red",
                                    fontSize: 20,
                                    cursor: "pointer",
                                  }}
                                ></i>
                              </span>
                            </p>
                          </td>
                        </tr>
                      </Table>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default CardsDetails;
