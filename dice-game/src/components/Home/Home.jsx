import styled from 'styled-components';


const Home = () => {
  return (
    <Container>
        <div>
            <img src="/images/dices.jpg" alt="dice" />
        </div>
        <div className='content'>
                <h1>DICE GAMES</h1>
                <Button>Play Now</Button>
        </div>
    </Container>
  )
}

export default Home

const Container = styled.div`
    max-width: 1180px;
    display: flex;
    height: 100vh;
    align-items: center;
    margin: 0 auto;

    .content{
        h1{
            
        font-size: 96px;
        white-space: nowrap;
        }
        
        
    }

`;


const Button = styled.button`
    display: flex;
    width: 220px;
    padding: 10px 18px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border: none;
    background: #000;
    color: white;
    font-size: 16px;
    border: 1px solid transparent;
    transition: 0.3s background ease-in;
    cursor: pointer;


    &:hover{
        background-color: white;
        color: black;
        border: 1px solid black;
        transition: 0.3s background ease-in;
    }
`;
