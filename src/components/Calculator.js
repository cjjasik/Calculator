import { Container, Row, Col } from 'react-bootstrap';

import Display from './Display';
import Keyboard from './Keyboard';


export default function Calculator() {

    const styles = {
        calcContainer:{
            marginTop: "50px",
            width: "380px",
            position: 'relative'
            
        }
    }

    return (

        <Container style={styles.calcContainer}>
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