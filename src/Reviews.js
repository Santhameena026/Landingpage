import React from 'react'
import Container from 'react-bootstrap/Container';
import './Review.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Reviews = () => {
  return (
    <Container className="py-5" style={{backgroundColor:"grey"}}>
      <Row className="d-flex justify-content-center">
        <Col md="10" xl="8" className="text-center">
          <h3 className="mb-4" style={{color:"brown", textShadow:"2px 2px black"}}>Cutomer Reviews</h3>
          <p className="mb-4 pb-2 mb-md-5 pb-md-0 text-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p>
        </Col>
      </Row>
      <Row className="text-center">
        <Col md="4" className="mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
              className="rounded-circle shadow-1-strong"
              width="150"
              height="150"
            />
          </div>
          <h5 className="mb-3  fs-4 text-warning">Maria Smantha</h5>
          <h6 className=" mb-3">general Manager</h6>
          <p className="px-xl-3 text-light">
          I ordered tables and chairs for our golf club dining room extension. A very helpful service prior to ordering and the delivery was very quick following our order with plenty of accurate info regarding date and time.
           The quality of the furniture is superb and comments from our members and visitors all positive. We'll be back for more. Thanks.
          </p>
        </Col>
        <Col md="4" className="mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
              className="rounded-circle shadow-1-strong"
              width="150"
              height="150"
            />
          </div>
          <h5 className="mb-3 fs-4 text-warning">Lisa Cudrow</h5>
          <h6 className=" mb-3">Graphic Designer</h6>
          <p className="px-xl-3 text-light">
          I have Just purchased 30 function chairs from Trent Furniture for our Sports Club, the service was excellent from start to finish and delivery was super 
          fast even in time for our big Christmas function. Thank you and will definitely come back and recommend your company...
          </p>
          </Col>
          <Col md="4" className="mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
              className="rounded-circle shadow-1-strong"
              width="150"
              height="150"
            />
          </div>
          <h5 className="mb-3  fs-4 text-warning">John Smith</h5>
          <h6 className=" mb-3 ">Marketing Specialist</h6>
          <p className="px-xl-3 text-light">
          Good products at competitive prices with really excellent service. The whole process from ordering, acknowledgement, delivery notification through to follow up after delivery, was extremely efficient and courteously followed through.
           Definitely a company who we will be pleased to deal with for any future requirements.
          </p>
          </Col>
      </Row>
    </Container>

  )
}

export default Reviews