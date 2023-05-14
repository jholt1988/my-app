import logo from './logo.svg';
import Editor from './features/Editor';
import Preview from './features/Preview';
// import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Container >
      <Row className="justify-content-md-center">
        <Col  ></Col>
        <Col >
       <Editor />
       </Col>
       <Col></Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col></Col>
        <Col>
      <Preview/>
      </Col >
      <Col></Col>
      </Row>
      </Container>
  );
}

export default App;
