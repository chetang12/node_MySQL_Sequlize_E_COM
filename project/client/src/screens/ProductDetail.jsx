import React, { useEffect, useState } from "react";
import { Card, Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { useParams } from 'react-router';
import axios from 'axios';


const ProductDetail = () => {
  const { id } = useParams() //hooks
  const navigate = useNavigate();
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState(0)
  const [productdescription, setProductDescription] = useState('')
  const [reviews, setReviews] = useState([]);
  const [productImage,setProductImage]=useState('')
  //review rating , description
  const [rating, setRating] = useState(0)
  const [description, setDescription] = useState('')
  useEffect(() => {

    const getSingleProductData = async () => {
      const { data } = await axios.get(`/api/products/getProductReview/${id}`);
      console.log(data)
      setTitle(data.title)
      setPrice(data.price)
      setProductDescription(data.description)
      setProductImage(data.image)
      //for reviews
      setReviews(data.reviews)  // set data in  reviews var
    }
    getSingleProductData();
  }, [id])
  //handling Delete
  const handlerDelete = async (id) => {
    // id.preventDefault();
    await axios.delete(`/api/products/${id}`)
    alert("Delete product ", navigate("/products"))
  }
  const addReviewHandler = async (e) => {
    e.preventDefault();
    let review = {
      product_id: id,
      rating: rating,
      description: description
    }
    await axios.post(`/api/products/addreview/${id}`, review) //addreview/:id
    alert("Review Created", navigate("/products"))
  } //!get error  review . length not reading
  return (
    <>
      <Container className="mt-10 p-4">
        <h1>Detail Product</h1>
        <Card className='shadow-lg m-3 p-2 rounded' style={{ width: '18rem' }}>
        <Card.Img src={`http://localhost:3000/${productImage}`}/>
          <Card.Body>
            <Card.Title>Title:{title}</Card.Title>
            <Card.Title>Price:{price}</Card.Title>
            <Card.Text>
              Description:{productdescription}
            </Card.Text>
            <br />
            <h4>Reviews:</h4>
            <br />
            {reviews.length > 0 ? (
              reviews.map(review => {
                return <p key={review.id} style={{ fontWeight: 'bold' }}> Rating: {review.rating} <br /> Comments: {review.description}</p>
              })
            ) : (<p>No review for this product</p>)}
            <Link to={`/product/edit/${id}`}>
              <Button> Edit </Button>

            </Link>
            <Button className="btn btn-danger m-2" onClick={() => handlerDelete(id)}> Delete </Button>
          </Card.Body>
        </Card>
      </Container>
      <Container>
        <h2>Add Review</h2>
        <br />
        <Form onSubmit={addReviewHandler}>
          <Form.Group className="mb-3" controlId="rating">
            <Form.Label>Rating</Form.Label>
            <Form.Control
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              type="number" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              as="textarea" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
          </Form.Group>
          <Button variant="primary" onClick={addReviewHandler}>
            Add Review
          </Button>
        </Form>
      </Container>
    </>
  )
}

export default ProductDetail

