// src/components/Cart/Cart.jsx
import React from "react";
import { useCart } from "../../Context/CartContext";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  return (
    <Container className="py-5 text-white bg-dark min-vh-100">
      <h2 className="text-center mb-4">Cart</h2>

      {cartItems.length === 0 ? (
        <>
          <h4 className="text-center">oops , Your cart is empty!</h4>
          <div className="d-flex justify-content-center mt-4">
            <Link to="/" >
            <Button>Back To Products</Button>
            </Link>
          </div>
        </>
      ) : (
        <>
          <Row className="g-4">
            {cartItems.map((item, index) => (
              <Col md={6} lg={4} key={index}>
                <Card className="h-100">
                  <Card.Img
                    variant="top"
                    src={item.image}
                    style={{ height: "250px", objectFit: "contain" }}
                  />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>${item.price}</Card.Text>
                    <Button
                      variant="danger"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-4">
            <Button variant="outline-warning" onClick={clearCart}>
              Clear Cart
            </Button>
          </div>
        </>
      )}
    </Container>
  );
};

export default Cart;
