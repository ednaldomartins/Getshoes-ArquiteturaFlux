import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px;
`

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.25s;

  &:hover {
    opacity: 0.75;
  }

  div {
    text-align: right;
    margin-right: 8px;
    color: #fff;

    strong {
      display: block;
    }

    span {
      font-size: 12px;
    }
  }
`
