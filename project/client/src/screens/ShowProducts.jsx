import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap'
import ProductCard from '../components/ProductCard'
const ShowProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("/api/products/allProducts") // returns promise  & show all the products in db 
      .then((response) => console.log(response));

    const getProductsData = async () => {
      const { data } = await axios.get('/api/products/allProducts');
      console.log(data)
      setProducts(data) //set data in products  variable
    }
    getProductsData()   //call the get product all data
  }, [])

  return (
    <>
      <Container className="justify-content-center mt-2 mb- p-2">
        {/* <h1 className="text-center" >Show Product</h1> */}
        <hr />
        <Row>
          {
            products.map(product => {
              return <Col md={6} lg={4} sm={12} key={product.id}>
                <ProductCard product={product} />  {/* to see all product in display use in map function */}
              </Col>
            })
          }
        </Row>
      </Container>

    </>
  )
}

export default ShowProducts