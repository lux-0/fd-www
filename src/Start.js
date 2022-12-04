import './style.scss';
import {
  Container,
  Navbar,
  Button,
  Form,
  Nav,
  Col,
  Row,
  Alert,
  Badge,
} from 'react-bootstrap';

function Start() {
  return (
    <>
      <Navbar sticky='top' expand="lg" bg="white" variant="light" className='border-bottom justify-content-center'>
        <Container>
          <Navbar.Brand>
            <span className='fs-6 fw-bolder'>⚡️ Flashdrainer</span>
          </Navbar.Brand>
          <div className='d-flex'>
            <Nav>
              <Nav.Link href='http://t.me/samsungsemicon'>Contact me on Telegram</Nav.Link>
            </Nav>
          </div>
        </Container>
      </Navbar>

      <Row style={{ 'padding-top': '10em', 'padding-bottom': '10em' }} className="d-flex flex-column align-items-center border-bottom">
        <Col md="8" className='d-flex flex-column align-items-center'>
          <span className='text-center pb-3'>
            <h1>⚡️ Flashdrainer</h1>
            <h3 className='pt-1'>is the most profitable Ethereum drainer-as-a-service available today.</h3>
            <h3 className='text-danger'><s>25%</s> 10% fee for Christmas!</h3>
          </span>
          <Button href='http://t.me/samsungsemicon' className='bg-gradient'>Contact Me on Telegram</Button>
        </Col>
      </Row>

      <div className='border-bottom'>
        <Container>
          <Row style={{ 'padding-top': '3em', 'padding-bottom': '3em' }}>
            <Col className='d-flex flex-column justify-content-center border- ps-4'>
              <span>
                <h4>Automated Draining, Selling</h4>
                <span className='fs-5'>All draining methods are fully automated. No intervention is required to recieve assets from targets. Robust automated asset sale is currently under development.</span>
              </span>
            </Col>
            <Col className='d-flex flex-column justify-content-center ps-4'>
              <span>
                <h4>Many draining methods:</h4>
                <h5>(Non-standard or restricted methods are available upon request).</h5>
              </span>
              <ul className='fs-6'>
                <li>OpenSea order draining (ERC20, ERC721, ERC1155)</li>
                <li>Non-descript OpenSea draining method (details restricted)</li>
                <li>Permit (EIP2612) draining</li>
                <li>Uniswap draining</li>
                <li>1inch draining</li>
                <li>3x Non-descript ERC20 draining method (details restricted)</li>
                <li>2x Non-descript ERC721 draining method (details restricted)</li>
                <li>3x Non-descript ERC1155 draining methods (details restricted)</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>

      <Row style={{ 'padding-top': '5em', 'padding-bottom': '5em' }} className='d-flex flex-column align-items-center border-bottom'>
        <Col md={8} lg={6}>
          <Container className='d-flex flex-column align-items-center'>
            <span className='pb-3 text-center'>
              <h2>Site Creation and Integration Service</h2>
              <h3 className='text-danger'>Free for Christmas!</h3>
            </span>
            <span className='text-center fs-5'>
              I can offer assistance or consultancy in the creation of sites and other traffic recepticles. I aim to provide maximal value to clients regardless of stature or hit size, at all costs.
            </span>
          </Container>
        </Col>
      </Row>

      <Row style={{ 'padding-top': '5em', 'padding-bottom': '5em' }} className='d-flex flex-column align-items-center border-bottom'>
        <Col md={8} lg={6}>
          <Container className='d-flex flex-column align-items-center'>
            <h2 className='pb-3 text-center center-text'>Quality</h2>
            <span className='fs-5 pb-3 d-block text-center'>
              A multi-method drainer has a complicated control flow, and large attack surface. Given the lack of software engineering competence in this domain, many drainers are unreliable [miss hits, infrastructure failure], and are susceptible to cyber attacks.
              <br></br>
              <br></br>
              I am a university-trained computer scientist, and I employed professional-standard software development practices. You will never miss a hit due to incompetence. Further, by using my drainer, you fund advanced feature development beyond the capacity of other drainer devs. For example, Monkey Drainer's lack of features and reliability problems have resulted in lower profits for his clients. I think incompetence is disgusting.
            </span>
          </Container>
        </Col>
      </Row>
    </>
  );
}

export default Start;
