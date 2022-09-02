import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const FooterWrapper = styled.div`
  display: grid;
  place-items: center;
  margin-top: auto;
  padding: 50px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`

const IconWrapper = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 15%;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    width: 50%;
  }
`

const Footer: FunctionComponent = function () {
  return (
    <FooterWrapper>
      <IconWrapper>
        <Link to="https://www.github.com">Github</Link>
        <Link to="/">Linked In</Link>
        <Link to="/">Instagram</Link>
      </IconWrapper>
      Thank You for Visiting My Blog, Have a Good Day 😍
      <br />© 2022 Developer Kim, Powered By Gatsby.
    </FooterWrapper>
  )
}

export default Footer
