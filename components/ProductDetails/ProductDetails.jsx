import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Card, Button, Row, Col, Image } from "react-bootstrap";
import { useNavigate, useNavigation, useParams } from "react-router-dom";
import { useCart } from "../../Context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const {addToCart} = useCart();
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchProduct() {
      let response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      let data = response.data;

      setProduct(data);
    }
    fetchProduct();
    // setLoading(false);
  }, []);
  return (
    <div className="py-3">
      {product ? (
        <Row className="g-4 bg-dark text-white p-4">
          <h2 className="text-center p-3 border-bottom">
            {product.title} Details
          </h2>
          <Col md={6} className="d-flex justify-content-center text-center">
            <Image
              src={product.image}
              alt="product"
              style={{ width: "280px", height: "200px", objectFit: "contain" }}
              className="mt-3"
            />
          </Col>
          <Col md={6} className="pt-5 mt-3 ">
            <h2 className="mt-3  border-bottom">{product.title}</h2>
            <div className="mt-3 fw-bold border-bottom">
              Category : {product.category}
            </div>
            <div className="mt-3 fw-bold border-bottom">
              Price : {product.price}$
            </div>
            <div className="mt-3">{product.description}</div>
            <div className="d-flex justify-content-center gap-3 mt-5">
              <Button variant="primary" onClick={() => addToCart(product)}>
                Add To Cart
              </Button>
              <Button variant="secondary" onClick={() => navigate("/")}>
                Back To Products
              </Button>
            </div>
          </Col>
        </Row>
      ) : (
        <h1 className="text-center p-3">This product not found</h1>
      )}
    </div>
  );
};

export default ProductDetails;
