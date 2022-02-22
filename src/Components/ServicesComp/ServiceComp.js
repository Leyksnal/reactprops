import React from 'react'
import styled from 'styled-components'
import ButtonComp from '../ButtonComp/ButtonComp'

export default function ServiceComp({title, info, photo, reverse }) {
  return (
    <div>
      <Wrapper reverse={reverse}>
        <Image src={photo}/>
        <Content>
          <h1>{title}</h1>
          <p>{info}</p>
        <ButtonComp></ButtonComp>
        </Content>
      </Wrapper>
    </div>
  )
}


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${({reverse}) => reverse}
`;
const Image = styled.img`
  width: 400px;
  height: 400px;
  background-color: silver;
  border-radius: 50%;
  margin: 30px;
  object-fit: cover;
`;
const Content = styled.div`
  margin: 30px;

  p{
    width: 550px;
    font-size: 1.5rem;
  }

  h1{
    font-size: 2.5rem;
    font-weight: 700;
  }
`;