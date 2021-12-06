import React from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";

const Header = (props) => {
  return (
    <Nav>
      <Logo>
        <img src={logo} alt="Disney" />
      </Logo>
      <NavMenu>Menu</NavMenu>
    </Nav>
  );
};

const Nav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 1rem;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  padding-top: 0.25rem;
  max-height: 70px;
  font-size: 0;
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  margin-right: auto;
  margin-left: 24px;

  @media (max-width: 768px) {
    display: none;
  } ;
`;

export default Header;
