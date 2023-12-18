import { Container, Row, Col } from 'react-bootstrap';

import Display from './Display';
import Keyboard from './Keyboard';


export default function Calculator() {
    return (
        <Container>
            <Row>
                <Col>
                    <Row>
                        <Display />
                    </Row>
                    <Row>
                        <Keyboard />
                    </Row>
                </Col>
            </Row>


        </Container>
    )
}