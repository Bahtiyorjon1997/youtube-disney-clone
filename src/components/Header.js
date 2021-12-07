import React from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
import homeIcon from "../images/home-icon.svg";
import searchIcon from "../images/search-icon.svg";
import movieIcon from "../images/movie-icon.svg";
import originalIcon from "../images/original-icon.svg";
import seriesIcon from "../images/series-icon.svg";
import watchlistIcon from "../images/watchlist-icon.svg";
import { firebase } from "../firebase";
import db from "../firebase";

const Header = (props) => {
  const handleAuth = () => {
    // auth.signWithPopUp();
  };
  return (
    <Nav>
      <Logo>
        <img src={logo} alt="Disney" />
      </Logo>
      <NavMenu>
        <a href="/home">
          <img src={homeIcon} alt="" />
          <span>HOME</span>
        </a>
        <a href="/search">
          <img src={searchIcon} alt="" />
          <span>SEARCH</span>
        </a>
        <a href="/watch">
          <img src={watchlistIcon} alt="" />
          <span>WATCHLIST</span>
        </a>
        <a href="/original">
          <img src={originalIcon} alt="" />
          <span>ORIGINALS</span>
        </a>
        <a href="/movies">
          <img src={movieIcon} alt="" />
          <span>MOVIES</span>
        </a>
        <a href="/series">
          <img src={seriesIcon} alt="" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <Login>Login</Login>
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

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      line-height: 1.08;
      padding: 2px 0;
      white-space: nowrap;
      position: relative;
      letter-spacing: 1.42px;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        opacity: 0;
        position: absolute;
        left: 0px;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        visibility: visible;
        transform: scaleX(1);
        opacity: 1 !important;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  } ;
`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease-out 0s;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
    color: black;
    font-weight: 600;
    border-color: transparent;
  }
`;

export default Header;
