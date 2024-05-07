import React, { useState, useEffect } from "react";
import IMG from "../../assets/2024-03-29 16.24 1.png";
import Heading from "../common/heading/Heading";
import Accordion from "react-bootstrap/Accordion";
import "./singleproduct.css";
import Slider from "../slider/Slider";

const SingleProduct = (props) => {
  const [product, setProduct] = useState({});
  const [vipPlan, setVipPlan] = useState({});
  const [standardPlan, setStandardPlan] = useState({});

  useEffect(() => {
    const { id } = props.match.params;

    // Запрос к API для получения данных о продукте
    fetch(`http://127.0.0.1:8000/service/getsingl/${id}/`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setProduct(data[0]);
          
          // Если есть данные о продукте, делаем запрос для получения данных о стандартном плане
          if (data[0].single) {
            fetch(`http://127.0.0.1:8000/service/standart/${data[0].single}/`)
              .then((response) => response.json())
              .then((standardData) => {
                if (standardData.length > 0) {
                  setStandardPlan(standardData[0]);
                }
              })
              .catch((error) =>
                console.error("Error fetching standard plan data:", error)
              );
          }
        }
      })
      .catch((error) => console.error("Error fetching product data:", error));
  }, [props.match.params]);
  return (
    <>
      <div className="single-product">
        <div className="container flexSB">
          <div className="left row">
            <img src={product.img} alt="" />
          </div>
          <div className="right row product1">
            <Heading id="title-plan" title={product.name_ru}/>
            <div className="items">
              <div className="product-description">
                {product.description_en}
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <Accordion defaultActiveKey="0" className="accordion">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Accordion Item #3</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <div className="bg-plan">
      <div className="container-plan">
          <div className="plan1">
            <Heading subtitle={"Vip plan"} className="title-plan" />
            <ul className="list-plan">
              <li>{product.description_ru}</li>
            </ul>
          </div>
          <div className="plan2">
            <Heading subtitle={"Standard plan"} className="title-plan" />
            <ul className="list-plan">
              <li>{standardPlan.description_ru}</li>
            </ul>
          </div>
        </div>
      </div>
      <Slider />
    </>
  );
};

export default SingleProduct;
