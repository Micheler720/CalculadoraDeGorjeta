import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';

const Titulo = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  aling-items: center;
  background-color: #CCC;
`;

const H1 = styled.h1`

`;

const Input = styled.input`
  height: 30px;
  width: 400px;
  border: 1px solid #0000FF;
  border-radius: 5px;  
  margin: 5px;
`;
const Label = styled.label`
  color: #000000;
  font-weght: bold;
  font-size: 18px;
  margin: 5px;
`;

const Container = styled.div`
  margin: 10px;
  border-bottom: 1px solid #CCC;
`;




function App() {
  const [conta, setConta] = useState('');
  const [percentualGorjeta, setPercentualGorjeta] = useState(10);
  return (
    <>
    <Titulo>
        <H1>Calculadora de Gorjeta</H1>
    </Titulo>
    <br />
    <Container>
      <Label>Quanto deu a conta?</Label><br />
      <Input type='number' name="conta" onChange={(e)=>setConta(parseFloat(e.target.value))} value={conta} /><br />
      <Label>Qual porcentagem de Gorjeta?</Label><br />
      <Input type='number' onChange={e=>setPercentualGorjeta(parseFloat(e.target.value))} value={percentualGorjeta} />
    </Container> 
    { conta > 0 &&
    <Container>
      <Label><strong>Subtotal:</strong> R$ {conta}</Label><br />
      <Label><strong>Gorjeta ({percentualGorjeta}%): </strong>R$ { conta * (percentualGorjeta/100)}</Label><br />      
      <Label><strong>Total: </strong> R$ { (conta) + ((conta) * (percentualGorjeta/100))}</Label><br />      
    </Container> 
    }   
    </>
  );
  
}

export default App;
