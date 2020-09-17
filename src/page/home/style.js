import styled from 'styled-components'

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 16px;

    img {
      align-self: center;
      max-width: 256;
    }

    /** '>' alterar localmente o 'p' */
    > p {
      font-size: 20px;
      line-height: 20px;
      color: #222;
      margin-top: 8px;
    }

    > span {
      font-size: 18px;
      font-weight: bold;
      margin: 4px 4px 16px
    }

    button {
      background: #20bb10;
      color: #fff;
      border: 2px;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto; /** alinhar os botoes de diferentes cards */
      display: flex;
      align-items: center;
      transition: background 0.25s;

      &:hover {
        background: #10aa05
      }

      div {
        display: flex;
        align-items: center;
        padding: 8px;
        background: rgba(0,0,0,0.15);
      }

      svg {
        margin-right: 16px;
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`
