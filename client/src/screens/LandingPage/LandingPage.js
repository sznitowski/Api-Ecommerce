import { Button, Container, Row } from 'react-bootstrap';
import './landingPage.css';

const LandingPage = () => {

  /*   useEffect(() => {
        const userInfo = localStorage.getItem("userInfo");

        if(userInfo) {
            history.push("/posts")
        }

    }, [history]) */

    return (
        <div className='main'>
            <Container>
                <Row>
                    <div className='intro-text'>
                        <h1 className='title'>Welcome</h1>
                        <p className='subtitle'>Hi there</p>
                        
                    <div className='buttonContainer'>

                        <a href='/login'>
                            <Button 
                            className='landingButton' 
                            variant='outline-primary'
                            size='lg'>
                                Login
                            </Button>
                        </a>
                        <a href='/register'>
                            <Button 
                            className='landingButton' 
                            variant='outline-primary'
                            size='lg'>
                                Regist
                            </Button>
                        </a>
                        
                    </div>

                    </div>

                </Row>
            </Container>
        </div>
    )
}

export default LandingPage
