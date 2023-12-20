import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';

import Display from './Display';
import Keyboard from './Keyboard';


export default function Calculator() {

    const [display, setDisplay] = useState("0")

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
                        <Display display={display}/>
                    </Row>
                    <Row>
                        <Keyboard display={display} setDisplay={setDisplay}/>
                    </Row>
                </Col>
            </Row>


        </Container>
    )
}