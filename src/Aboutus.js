import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './aboutus.css';
import Button from 'react-bootstrap/Button';

const Aboutus = () => {
  return (
    <section id='about'>
      <div className='text-center my-3 py-3'>
        <h2 className='display-5 ' style={{color:"brown", textShadow:"2px 2px brown"}}>Why Choose Us?</h2>
      </div>
      <Container>
        <Row className='align-items-center'>
          <Col md={7} >
            <Image src={require('./about.jpeg')} fluid={true} alt="about"></Image>
          </Col>
          <Col md={5}>
            <div className='py-3'>
              <h2 className='h1'> About My Products</h2>
              <p className='lead text-muted'>Best quality:Our commitment to excellence begins 
                with the materials we select and the craftmanship we employ</p>
              <p className='lead text-muted'>Time less design:Our commitment to excellence begins 
                with the materials we select and the craftmanship we employ</p>
                <Button style={{backgroundColor:'brown'}}>Read More</Button>
            </div>
          </Col>
        </Row>
        </Container> 
    </section>
  )
}

export default Aboutus