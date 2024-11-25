import { createGlobalStyle } from 'styled-components'

export const colors = {
  fundo: '#FFF8F2',
  principal: '#E66767',
  branco: '#fff',
  cfooter: '#FFEBD9'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '821px',
  mobile: '430px',
  iphone11: '414px'
}

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
        list-style: none;
        text-decoration: none;
    }

    body{
        background-color: ${colors.fundo}
    }

    .container{
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
    }
`

export default GlobalStyle
