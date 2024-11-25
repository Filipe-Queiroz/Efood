import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { AddCartButton, SubmitCartButton } from '../Cart/styles'

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.cfooter};
  margin-bottom: 16px;
`

export const InputGroup = styled.div`
  width: 100%;
  margin-bottom: 8px;

  label {
    display: block;
    color: ${colors.cfooter};
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  input {
    width: 100%;
    height: 32px;
    background-color: ${colors.cfooter};
    border: 1px solid ${colors.cfooter};
    padding-left: 8px;

    &.error {
      border: 1px solid red;
    }
  }
`

export const EnderecoContainer = styled.div`
  display: none;
  &.show {
    display: block;
  }

  .CEPNumber {
    display: flex;
    column-gap: 34px;
  }

  .buttomContainer {
    margin-top: 24px;
  }

  color: ${colors.cfooter};
  h2 {
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 16px;
  }
  label {
    font-weight: 700;
    font-size: 14px;
  }
  &.show {
    display: block;
  }
  ${AddCartButton} {
    margin-top: 8px;
  }
`

export const PaidStage = styled.div`
  p {
    font-size: 16px;
    font-weight: 700;
  }
  label {
    font-weight: 700;
    font-size: 14px;
  }
  color: ${colors.cfooter};
  display: none;
  &.show {
    display: block;
  }
  .buttomContainer {
    margin-top: 24px;
    ${SubmitCartButton} {
      margin-bottom: 8px;
    }
  }
  .fieldContainer {
    display: flex;
    column-gap: 34px;
    #cardNumber {
      width: 228px;
    }
    #mesVencimento {
      width: 155px;
    }
  }
  @media (max-width: ${breakpoints.tablet}) {
    .fieldContainer {
      display: block;
      column-gap: 34px;
      #cardNumber {
        width: 100%;
      }
      #mesVencimento {
        width: 100%;
      }
    }
  }
`

export const ConfirmedContainer = styled.div`
  color: ${colors.cfooter};
  display: none;
  &.show {
    display: block;
  }
  .buttomContainer {
    margin-top: 24px;
  }
  p {
    font-size: 14px;
    font-weight: 400;

    line-height: 22px;
  }
  h2 {
    font-size: 16px;
    font-weight: 700;
    line-height: 18.75px;
    margin-bottom: 8px;
  }
`
