import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Cards from "../Card/Cards";
import { productData } from "../data";
import "./Home.css"

const Home = () => {
  return (
    <div className="card-container">
      {
        productData.map((e, i) => {
          return (
            <div key={i} className="card">
              <Cards 
                title={e.title}
                image={e.image}
                desc={e.description}
                id={e.id}
              />
            </div>
          );
        })
      }
    </div>
  );
};

export default Home;
