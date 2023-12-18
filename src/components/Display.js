import { Container } from 'react-bootstrap';

export default function Display() {
    
    const styles = {
        displayContainer: {
            backgroundColor: 'lightGrey',
            border: '5px solid black',
            height: '50px',
            fontSize: '40px',
            verticalAlign: 'text-top'
        }
    }
    
    return (
        <Container style={styles.displayContainer}>0</Container>
    )
}