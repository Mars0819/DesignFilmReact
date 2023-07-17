import Card from "react-bootstrap/Card";
import antmanImage from "../assets/images/superhero/antman.jpg";
import AvengeImage from "../assets/images/superhero/avenger.jpg";
import BatmanImage from "../assets/images/superhero/batman.jpg";
import RobinhoodImage from "../assets/images/superhero/robinhood.jpg";
import SpidermanImage from "../assets/images/superhero/spiderman-cover.jpg";
import SupermanImage from "../assets/images/superhero/superman.jpg";

import { Container, Row, Col,Image } from "react-bootstrap";

export const Superhero = () => {
  return (
    <div>
      <Container>
        <br/>
        <h1   id="superhero"className="text-white">SUPERHERO MOVIES</h1>
        <br/>
        <Row>
          <Col md={4} className="movieWrapper">
            <Card className="bg-light text-white movieImage">
              <Image
                src={antmanImage}
                alt="Dune Movies"className="images"
              />
              <div className="bg-dark text-center p-2">
                
              <Card.Title>Ant-Man</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4}  className="movieWrapper">
            <Card className="bg-light text-white movieImage">
              <Image
                src={AvengeImage}
                alt="Dune Movies"className="images"
              />
              <div className="bg-dark text-center p-2">
              <Card.Title>Avengers</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4}  className="movieWrapper">
            <Card className="bg-light text-white movieImage">
              <Image
                src={RobinhoodImage}
                alt="Dune Movies"className="images"
              />
              <div className="bg-dark text-center p-2">
              <Card.Title>Robin Hood</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4}  className="movieWrapper">
            <Card className="bg-light text-white movieImage">
              <Image
                src={BatmanImage}
                alt="Dune Movies"className="images"
              />
              <div className="bg-dark text-center p-2">
              <Card.Title>Batman</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4}  className="movieWrapper">
            <Card className="bg-light text-white movieImage">
              <Image
                src={SpidermanImage}
                alt="Dune Movies"className="images"
              />
              <div className="bg-dark text-center p-2">
              <Card.Title>Spiderman</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4}  className="movieWrapper">
            <Card className="bg-light text-white movieImage">
              <Image
                src={SupermanImage}
                alt="Dune Movies" className="images"
              />
              <div className="bg-dark text-center p-2">
              <Card.Title>Superman</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
