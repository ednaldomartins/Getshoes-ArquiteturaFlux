import styled from 'styled-components'

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;

  footer {
    margin-top: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: #20bb10;
      color: #fff;
      border: 2px;
      border-radius: 4px;
      padding: 8px 16px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.25s;

      &:hover {
        background: #10aa05
      }
    }
  }
`

export const ProductTable= styled.table`
  width: 100%;
  border-bottom: 1px solid #ddd;

  thead th {
    color: #777;
    text-align: left;
    padding: 18px;
  }

  img {
    height: 128px;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    display: block;
    margin-top: 8px;
    font-size: 16px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #777;
      padding: 8px 4px;
      width: 40px;
    }
  }


  button {
    background: none;
    border: none;
    padding: 4px;
  }
`

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #777;
    font-weight: bold;
  }

  strong {
    font-size: 20px;
    margin-left: 4px;
  }
`
