import { Button } from "react-bootstrap"

export default function Key({label, variant='secondary'}) {
    const styles ={
        buttonUniform: {
            height: '80px',
            width: '80px',
        }
    }
    
    return (
        <Button variant={variant} style={styles.buttonUniform}>{label}</Button>
    )
}