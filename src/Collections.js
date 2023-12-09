import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const Collections = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div >
      <h1 className='text-center mt-3' style={{textShadow:"2px 2px brown"}}>Collections</h1>
      <br></br>
      <Container className='collections'>
      <Carousel responsive={responsive}>
      <div><Card style={{ width: '17rem' }}>
      <Card.Img variant="top" src={require("./writing tables.avif")} />
      <Card.Body>
        <Card.Title>Writing Tables</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div className='text-center'><Button style={{backgroundColor:"brown"}}>Buy Now</Button></div>
        </Card.Body>
       </Card></div>
      
      <div><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={require("./ergonomic chairs.avif")} />
      <Card.Body>
        <Card.Title>Ergonomic Chairs</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div className='text-center'><Button style={{backgroundColor:"brown"}}>Buy Now</Button></div>
      </Card.Body>
    </Card></div>
      
      <div><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={require("./box storage beds.avif")}/>
      <Card.Body>
        <Card.Title>Box storage beds</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div className='text-center'><Button style={{backgroundColor:"brown"}}>Buy Now</Button></div>
      </Card.Body>
    </Card></div>
      
      <div><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={require("./door.avif")} />
      <Card.Body>
        <Card.Title>2 Door Wardrobes</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div className='text-center'><Button style={{backgroundColor:"brown"}}>Buy Now</Button></div>
      </Card.Body>
    </Card></div>

       <div><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={require("./coffee table.avif")} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div className='text-center'><Button style={{backgroundColor:"brown"}}>Buy Now</Button></div>
      </Card.Body>
    </Card></div>
      
       <div><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={require("./shoe cabinets.avif")} />
      <Card.Body>
        <Card.Title>Shoe Cabinets</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div className='text-center'><Button style={{backgroundColor:"brown"}}>Buy Now</Button></div>
      </Card.Body>
    </Card></div>
      </Carousel>
      </Container>
    </div>
  )
}

export default Collections