import React, { useState } from 'react'
import axios from 'axios';
// import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap'
import Box from '@mui/material/Box';
const AddProduct = () => {
  const [title, setTitle] = useState('')   //to store the value
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState('')
  const [published, setPublished] = useState(true)
  const [image, setImage] = useState('')

  // const data = {
  //   title: title,
  //   price: price,
  //   description: description,

  // }

  const formData = new FormData()

  formData.append('image', image)
  formData.append('title', title)
  formData.append('price', price)
  formData.append('description', description)
  formData.append('published', published)
  const addProductHandler = async (e) => {
    // e.preventDefault()

  
    await axios.post("/api/products/addProduct", formData)
    alert("product add")
  }

  return (
    <Box m={10}>
      <Container className='mt=5 p-2'   >
        <h1>Add Product</h1>
        <hr />
        
        <Form onSubmit={addProductHandler} method="POST" encType='multipart/form-data'>
        <Form.Group controlId="fileName" className="mb-3">
                    <Form.Label>Upload Image</Form.Label>
                    <Form.Control
                        type="file"
                        name='image'
                        onChange={(e) => setImage(e.target.files[0])}
                        size="lg" />
                </Form.Group>

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
              <Button variant="primary" onClick={addProductHandler}>
                Add Product
              </Button>
            </Form>
          </Form>
        </Form>
      </Container>

    </Box>
  )
}
export default AddProduct
