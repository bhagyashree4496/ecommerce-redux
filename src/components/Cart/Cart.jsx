import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Button, Card } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

export default function Cart() {
  const cartItems = useSelector((state) => state.products.cartItems);
  // const temp = cartItems;

  return (
    <div>
      {cartItems?.map((item, i) => {
        item = { ...item, number: 1 };
        return (
          <Card key={i} sx={{ display: "flex", gap: "10px", padding: "20px" }}>
            <img src={item?.image} style={{ width: "200px" }}></img>
            <div>
              <h3>{item?.title}</h3>
              <p>{item?.description}</p>
              <div
                style={{ display: "flex", gap: "20px", alignItems: "center" }}
              >
                <h2>${item?.price * item.number}</h2>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <ChevronLeft
                    onClick={() => {
                      item.number = item.number - 1;
                      console.log(item.number);
                    }}
                  ></ChevronLeft>

                  <span>{item.number}</span>

                  <ChevronRight
                    onClick={() => (item.number = item.number + 1)}
                  ></ChevronRight>
                </div>
              </div>
              <Button variant="contained">Buy</Button>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
