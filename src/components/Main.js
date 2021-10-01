import React from "react";
import styled from "styled-components";

const Main = () => {
  return (
    <Container>
      <h1>
        Welcome <br />
        to book tracking app!
      </h1>


    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 60px;
    font-weight: 900;
    color: #ffff;
    @media (max-width: 900px) {
      display: none;
    }
  }
  

  
`;

export default Main;
