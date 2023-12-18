import { Container } from 'react-bootstrap';

export default function Display() {
    const styles = {
        displayContainer: {
            backgroundColor: 'lightGrey',
            border: '5px solid black',
        }
    }
    
    return (
        <Container style={styles.displayContainer}>0</Container>
    )
}