import { Button } from "react-bootstrap"

export default function Key({label, variant='secondary', isZero=false}) {
    
    let buttonWidth = '65px';
    
    if (isZero) {
        buttonWidth = '158px'
    }
    
    const styles ={
        buttonUniform: {
            height: '65px',
            width: buttonWidth
        }
    }
    
    return (
        <Button variant={variant} style={styles.buttonUniform}>{label}</Button>
    )
}