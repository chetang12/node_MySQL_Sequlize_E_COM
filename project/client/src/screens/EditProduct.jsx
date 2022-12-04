
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useNavigate  } from "react-router-dom";
const EditProduct = () => {
  const { id } = useParams();  //use to take value form params
  const navigate= useNavigate();
  const [title, setTitle] = useState('');   //to store the value
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');

  const data = {
    title: title,
    price: price,
    description: description,
    published: true

  }
  useEffect(() => {
    const getDataById = async () => {
      const { data } = await axios.get(`/api/products/${id}`);
      console.log(data)
      setTitle(data.title)
      setPrice(data.price)
      setDescription(data.description)

    }
    getDataById()
  }, [id])
  const updateHandler = async (e) => {
    e.preventDefault();

    console.log(data)
    await axios.put(`/api/products/${id}`, data)  //backend api call from here
    alert("Update product ",navigate("/products"))
   
  }
  return (
    <>
      <Container className='mt=5 p-2'>
        <h1>Update Product</h1>
        <hr />
        <Form onSubmit={updateHandler}>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text" />
          </Form.Group>
          <Form>
            <Form.Group className="mb-3" controlId="Price">
              <Form.Label>Price($) </Form.Label>
              <Form.Control
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type="number" />

            </Form.Group>
            <Form>
              <Form.Group className="mb-3" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  as="textarea" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
              </Form.Group>
              <Button variant="primary" onClick={updateHandler}>
                Update Product
              </Button>
            </Form>
          </Form>
        </Form>
      </Container>
    </>
  )
}

export default EditProduct