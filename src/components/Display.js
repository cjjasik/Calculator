import { Container } from 'react-bootstrap';

export default function Display({display}) {
    
    const styles = {
        displayContainer: {
            backgroundColor: 'lightGrey',
            border: '5px solid black',
            height: '50px',
            fontSize: '40px',
            verticalAlign: 'text-top',
            textAlign: 'right',
            paddingBottom: '60px'
        }
    }
    
    return (

        <Container style={styles.displayContainer}>
            {display}
        </Container>
        
    )
}