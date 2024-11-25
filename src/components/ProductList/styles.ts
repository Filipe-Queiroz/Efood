import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  margin-bottom: 120px;
`

export const ItemContainer = styled.li`
  background-color: ${colors.principal};
  padding: 8px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    max-width: 300px;
    width: 100%;
    max-height: 200px;
    object-fit: cover;
    margin-bottom: 8px;
  }
`

export const Title = styled.h2`
  color: ${colors.fundo};
  font-size: 16px;
  font-weight: 900;
`

export const Text = styled.p`
  color: ${colors.fundo};
  font-size: 14px;
  line-height: 22px;
  margin: 8px 0;
`

export const Button = styled.button`
  width: 100%;
  display: inline-block;
  background-color: ${colors.fundo};
  padding: 4px 0;
  color: ${colors.principal};
  font-weight: bold;
  font-size: 14px;
  border: none;
  cursor: pointer;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
  }
`

export const ModalContent = styled.div`
  padding: 32px;
  max-width: 960px;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  background-color: ${colors.principal};
`

export const Close = styled.button`
  background: transparent;
  width: 16px;
  align-self: flex-end;
  border: none;
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 8px;
  margin-right: 8px;
  cursor: pointer;
`

export const Detalhes = styled.div`
  display: flex;
  column-gap: 24px;
  color: ${colors.branco};

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }

  h2 {
    font-size: 18px;
    margin-top: 5px;
  }

  p {
    font-size: 14px;
    margin: 16px 0;
    line-height: 22px;
  }

  button {
    background-color: ${colors.branco};
    color: ${colors.principal};
    font-weight: bold;
    font-size: 14px;
    padding: 4px 8px;
    border: none;
    cursor: pointer;
  }
`
