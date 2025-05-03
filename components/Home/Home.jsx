import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Riple } from 'react-loading-indicators';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [loading , setLoading] = useState(true)
    const [error, setError] = useState(null);
    const [data , setData] = useState([]);

    const navigate = useNavigate()

    useEffect(()=>{
        const fetchData = async()=>{
            try {
                const res = await axios.get('https://fakestoreapi.com/products');
                const data = res.data
                setData(data)
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }
        fetchData();
        console.log(data)
    } , [])

  return (
    <div>
      <h2 className="text-center p-3">Choose your product</h2>
      <div>
        {loading ? (
          <div className="loading-container d-flex justify-content-center align-items-center min-vh-100">
            <Riple color="#141514" size="medium" text="" textColor="" />
          </div>
        ) : (
          <Row xs={1} md={4} className="g-4 text-center">
            {data.map((product, index) => (
              <Col key={index}>
                <Card
                  style={{ width: "18rem", minHeight: "400px" }}
                  className="bg-dark text-white"
                >
                  <Card.Img
                    variant="top"
                    src={product.image}
                    className="mx-auto d-block mt-3 "
                    style={{
                      width: "200px",
                      height: "180px",
                      objectFit: "contain",
                    }}
                  />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                      {product.description.slice(0, 100)} ...
                    </Card.Text>
                    <Button
                      variant="primary"
                      onClick={() => navigate(`/productDetails/${product.id}`)}
                    >
                      More Details
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
}

export default Home


