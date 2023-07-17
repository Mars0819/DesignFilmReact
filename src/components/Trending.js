import Card from "react-bootstrap/Card";
import DuneImage from "../assets/images/trending/dune.jpg";
import Everything from "../assets/images/trending/everything.jpg";
import Infinite from "../assets/images/trending/infinite.jpg";
import Joker from "../assets/images/trending/joker.jpg";
import Lightyear from "../assets/images/trending/lightyear.jpg";
import Morbius from "../assets/images/trending/morbius.jpg";
import { Container, Row, Col,Image } from "react-bootstrap";

export const Trending = () => {
  return (
    <div>
      <Container>
        <br/>
        <h1 id="trending" className="text-white">TRENDING MOVIES</h1>
        <br/>
        <Row>
          <Col md={4} className="movieWrapper">
            <Card className="bg-light text-white movieImage">
              <Image
                src={DuneImage}
                alt="Dune Movies"className="images"
              />
              <div className="bg-dark text-center p-2">
                
              <Card.Title>Dune</Card.Title>
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
                src={Everything}
                alt="Dune Movies"className="images"
              />
              <div className="bg-dark text-center p-2">
              <Card.Title>Everything</Card.Title>
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
                src={Infinite}
                alt="Dune Movies"className="images"
              />
              <div className="bg-dark text-center p-2">
              <Card.Title>Infinite Strom</Card.Title>
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
                src={Joker}
                alt="Dune Movies"className="images"
              />
              <div className="bg-dark text-center p-2">
              <Card.Title>Joker</Card.Title>
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
                src={Lightyear}
                alt="Dune Movies"className="images"
              />
              <div className="bg-dark text-center p-2">
              <Card.Title>Lightyear</Card.Title>
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
                src={Morbius}
                alt="Dune Movies" className="images"
              />
              <div className="bg-dark text-center p-2">
              <Card.Title>Morbius</Card.Title>
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
