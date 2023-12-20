import { Container, Row, Col } from 'react-bootstrap';

import Key from './Key';

export default function Keyboard({setDisplay}) {
    
    const styles = {
        keyboardContainer: {
            backgroundColor: 'black',
            border: '5px solid black',
            borderTop: '0px',
            paddingTop: '10px'
        },

        centerCol: {
            textAlign: 'center',
        },

        keyRows: {
            paddingBottom: '10px',
        },
    }

    const handleClick = (label) => {
        setDisplay(label)
    }

    
    return (
        <Container style={styles.keyboardContainer}>
            <Row style={styles.keyRows}>
                <Col style={styles.centerCol}>
                    <Key label="C" variant="warning" handleClick={handleClick}/>
                </Col>
                <Col style={styles.centerCol}>
                    <Key label="( )"/>
                </Col>
                <Col style={styles.centerCol}>
                    <Key label="/"/>
                </Col>
                <Col style={styles.centerCol}>
                    <Key label="delete" variant="danger" handleClick={handleClick}/>
                </Col>
            </Row>

            <Row  style={styles.keyRows}>
                <Col style={styles.centerCol}>
                    <Key label="7" handleClick={handleClick}/>
                </Col>
                <Col style={styles.centerCol}>
                    <Key label="8" handleClick={handleClick}/>
                </Col>
                <Col style={styles.centerCol}>
                    <Key label="9" handleClick={handleClick}/>
                </Col>
                <Col  style={styles.centerCol}>
                    <Key label="*" handleClick={handleClick}/>
                </Col>
            </Row>

            <Row  style={styles.keyRows}>
                <Col  style={styles.centerCol}>
                    <Key label="4" handleClick={handleClick}/>
                </Col>
                <Col  style={styles.centerCol}>
                    <Key label="5" handleClick={handleClick}/>
                </Col>
                <Col  style={styles.centerCol}>
                    <Key label="6" handleClick={handleClick}/>
                </Col>
                <Col  style={styles.centerCol}>
                    <Key label="-" handleClick={handleClick}/>
                </Col>
            </Row>

            <Row  style={styles.keyRows}>
                <Col  style={styles.centerCol}>
                    <Key label="1" handleClick={handleClick}/>
                </Col>
                <Col  style={styles.centerCol}>
                    <Key label="2" handleClick={handleClick}/>
                </Col>
                <Col  style={styles.centerCol}>
                    <Key label="3" handleClick={handleClick}/>
                </Col>
                <Col  style={styles.centerCol}>
                    <Key label="+" handleClick={handleClick}/>
                </Col>
            </Row>

            <Row  style={styles.keyRows}>
                <Col xs={6}  style={styles.centerCol}>
                    <Key label="0" isZero={true} handleClick={handleClick}/>
                </Col>
                <Col  style={styles.centerCol}>
                    <Key label="." handleClick={handleClick}/>
                </Col>
                <Col  style={styles.centerCol}>
                    <Key label="=" variant="success" handleClick={handleClick}/>
                </Col>
            </Row>
        </Container>
    )
}