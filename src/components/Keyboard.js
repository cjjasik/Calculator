import { Container, Row, Col } from 'react-bootstrap';

import Key from './Key';

export default function Keyboard() {
    
    const styles = {
        keyboardContainer: {
            backgroundColor: 'black',
            border: '5px solid black',
            borderTop: '0px',
        },
        centerCol: {
            textAlign: 'center'
        }

    }
    
    return (
        <Container style={styles.keyboardContainer}>
            <Row>
                <Col style={styles.centerCol}>
                    <Key label="clear" variant="warning"/>
                </Col>
                <Col style={styles.centerCol}>
                    <Key label="()"/>
                </Col>
                <Col style={styles.centerCol}>
                    <Key label="/"/>
                </Col>
                <Col style={styles.centerCol}>
                    <Key label="delete" variant="danger"/>
                </Col>
            </Row>

            <Row>
                <Col style={styles.centerCol}>
                    <Key label="7"/>
                </Col>
                <Col style={styles.centerCol}>
                    <Key label="8"/>
                </Col>
                <Col style={styles.centerCol}>
                    <Key label="9"/>
                </Col>
                <Col  style={styles.centerCol}>
                    <Key label="X"/>
                </Col>
            </Row>

            <Row>
                <Col  style={styles.centerCol}>
                    <Key label="4"/>
                </Col>
                <Col  style={styles.centerCol}>
                    <Key label="5"/>
                </Col>
                <Col  style={styles.centerCol}>
                    <Key label="6"/>
                </Col>
                <Col  style={styles.centerCol}>
                    <Key label="-"/>
                </Col>
            </Row>

            <Row>
                <Col  style={styles.centerCol}>
                    <Key label="1"/>
                </Col>
                <Col  style={styles.centerCol}>
                    <Key label="2"/>
                </Col>
                <Col  style={styles.centerCol}>
                    <Key label="3"/>
                </Col>
                <Col  style={styles.centerCol}>
                    <Key label="+"/>
                </Col>
            </Row>

            <Row>
                <Col xs={6}  style={styles.centerCol}>
                    <Key label="0"/>
                </Col>
                <Col  style={styles.centerCol}>
                    <Key label="."/>
                </Col>
                <Col  style={styles.centerCol}>
                    <Key label="=" variant="success"/>
                </Col>
            </Row>
        </Container>
    )
}