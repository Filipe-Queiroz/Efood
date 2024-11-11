import { create } from 'domain'
import { createGlobalStyle } from 'styled-components'

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
    list-style: none;
    text-decoration: none;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 24px;
    margin-top: 40px;
  }
`
