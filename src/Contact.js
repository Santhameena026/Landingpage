import React from 'react'
//import './signup.css';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './signup.css';


const Signup = () => {
  return (
    <section className='sign' >
    <Container>
    <Row className='justify-content-center align-items-center'>
        <Col lg={6}>
         <Form className='my-5 p-4'>
             <h2 className='text-center pt-2'>Sign Up</h2>
             <Form.Group className="mb-3" controlId="formGroupEmail">
             <Form.Label>Name</Form.Label>
             <Form.Control type="text" placeholder="Name" className='input' />
             </Form.Group>
             <Form.Group className="mb-3" controlId="formGroupEmail">
             <Form.Label>Email address</Form.Label>
             <Form.Control type="email" placeholder="Email" className='input'/>
             </Form.Group>
             <Form.Group className="mb-3" controlId="formGroupPassword">
             <Form.Label>Password</Form.Label>
             <Form.Control type="password" placeholder="Password" className='input' />
             </Form.Group>
             <Form.Group className="mb-3" controlId="formGroupPassword">
             <Form.Label> Confirm Password</Form.Label>
             <Form.Control type="password" placeholder="Confirm Password" className='input' />
             </Form.Group>
             <div className='text-center'><Button className='mb-3 w-25 mt-2 signbtn'>Sign Up</Button></div>
         </Form>
       </Col>
    </Row>
    </Container>
    <Container fluid className='contact'>
        <Row>
            <h3 className='text-center pb-4'>Contact Us</h3>
            <Col sm={12} lg={4} md={4}>
             <p className='h5 text-center'>HOURS OF OPERATION</p>
             <p className='text-center'>9.00 to 17.00, Mon-Fri(Excluding Holidays)</p>
            </Col>
            <Col sm={12} lg={4} md={4}>
             <p className='h5 text-center'>PHONE</p>
             <p className='text-center'>+91 XXXXXXXXXX</p>
            </Col>
            <Col sm={12} lg={4} md={4}>
             <p className='h5 text-center'>GENERAL INQUIRIES</p>
             <p className='text-center'>beautifly@gmail.com</p>
            </Col>

        </Row>
        <Row>
            
            <p className='text-center pt-3'>Our customer service team is waiting to assist you</p>
            <p className='text-center'>Please allow up to 2-Business days response time in order for
                us to fully address your inquiries.
            </p>
            <p className='text-center'>You can also check your <a href='#'>order status </a>through our website</p>
        </Row>
    </Container>
    </section>
    
  )
}

export default Signup
