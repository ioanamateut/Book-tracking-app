import React from "react";
import styled from "styled-components";
import { useHistory } from 'react-router'; 
import logo from "/Users/ioanamateut/Desktop/React/app/src/images/logo.svg";
import Input from "/Users/ioanamateut/Desktop/React/app/src/components/Input.js";

const Sidebar = () => {

  let history=useHistory();
  return (
    <Container>
      <LogoWrapper>
        <img src={logo} alt="" />
        <h3>
          Book <span>APP</span>
        </h3>
      </LogoWrapper>

      <Form>
        <h3>Sign Up</h3>
        <Input placeholder="Full Name" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confrim Password" />
        <button onClick={()=>{  history.push('/add')}}>Sign Up</button>
      </Form>
      
      <div>
        <Terms>
          By signing up, I agree to the Privacy Policy <br /> and Terms of
          Service
        </Terms>
        <h4>
          Already have an account? <span>Sign In</span>
        </h4>
      </div>
    </Container>
  );
};

const Terms = styled.p`
  padding: 0 1rem;
  text-align: center;
  font-size: 10px;
  color: #808080;
  font-weight: 300;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  h3 {
    color: #666666;
    margin-bottom: 2rem;
  }
  button {
    background-color:#c40a0a; /* Brown */
    height: 59px;
    max-width: 350px;
    min-width: 250px;
    left: 93px;
    top: 682px;
    top: 433px; 
    border: none;
    margin: 0.5rem 0;
    border-radius: 11px;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    box-shadow: 0px 14px 31px -23px rgba(0, 0, 0, 0.25);
    &:hover {
    
      transform: translateY(-3px);
    }
  }
`;


const LogoWrapper = styled.div`
  img {
    height: 6rem;
  }
  h3 {
    color: #c40a0a;
    text-align: center;
    font-size: 22px;
  }
  span {
    color: #3d322b;
    font-weight: 300;
    font-size: 18px;
  }
`;

const Container = styled.div`
  min-width: 500px;
  mix-blend-mode: normal;
  backdrop-filter: blur(4px);
  background-color: rgb(255, 255, 255,0.568);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 2rem;

  @media screen and (max-width:800px) {
    width: 100vw;
    position: absolute;
    padding: 0;
  }
  h4 {
    color: #808080;
    font-weight: bold;
    font-size: 13px;
    margin-top: 2rem;
    
    span {
      color: #c40a0a;
      cursor: pointer;
    }
  
  }
`;

export default Sidebar;
