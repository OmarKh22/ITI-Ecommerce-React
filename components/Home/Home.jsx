import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaSearch } from "react-icons/fa";
import { Riple } from "react-loading-indicators";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../Context/ProductContext";

const Home = () => {
  const { products, loading, search, setSearch } = useProducts();
  const navigate = useNavigate()

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 text-primary">
        Explore Our Latest Products
      </h2>

      <div className="input-group mb-4 shadow-sm ">
        <span className="input-group-text bg-white border-end-0 ">
          <FaSearch />
        </span>
        <input
          type="text"
          className="form-control border-start-0 "
          placeholder="Search products..."
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>

      {loading ? (
        <div className="d-flex justify-content-center align-items-center min-vh-100">
          <Riple color="#007bff" size="medium" />
        </div>
      ) : products.length === 0 ? (
        <h1 className="text-center text-danger mt-5">Product not found</h1>
      ) : (
        <Row xs={1} md={2} lg={4} className="g-4">
          {products.map((product, index) => (
            <Col key={index}>
              <Card
                className="bg-dark text-white rounded-lg shadow-sm"
                style={{ height: "100%" }}
              >
                <Card.Img
                  variant="top"
                  src={product.image}
                  className="mx-auto d-block mt-3"
                  style={{
                    width: "200px",
                    height: "180px",
                    objectFit: "contain",
                  }}
                />
                <Card.Body>
                  <Card.Title className="text-center">
                    {product.title}
                  </Card.Title>
                  <Card.Text className="text-center">
                    {product.description.slice(0, 100)}...
                  </Card.Text>
                  <div className="text-center">
                    <Button
                      variant="primary"
                      onClick={() => navigate(`/productDetails/${product.id}`)}
                    >
                      More Details
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};


export default Home;
