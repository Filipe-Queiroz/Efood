import styled from 'styled-components'
import { colors } from '../../styles'
import trash from '../../assets/images/lixeira.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`

export const CartContainer = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${colors.principal};
  z-index: 1;
  padding: 32px 8px 0 7px;
  max-width: 360px;
  width: 100%;
`

export const Card = styled.li`
  width: 100%;
  background-color: ${colors.cfooter};
  padding: 8px;
  display: flex;
  column-gap: 8px;
  position: relative;
  margin-bottom: 16px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }
`
export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.principal};
  margin-bottom: 16px;
`

export const Price = styled.p`
  font-size: 14px;
  color: ${colors.principal};
`

export const Trash = styled.button`
  position: absolute;
  bottom: 8px;
  right: 8px;
  background-image: url(${trash});
  width: 16px;
  height: 16px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`

export const TotalPrice = styled.p`
  display: flex;
  justify-content: space-between;
  color: ${colors.cfooter};
  margin-top: 40px;
  font-weight: bold;
  margin-bottom: 16px;
`

export const BuyButton = styled.button`
  width: 100%;
  background-color: ${colors.cfooter};
  padding: 4px 0;
  color: ${colors.principal};
  font-size: 14px;
  font-weight: bold;
  border: none;
  cursor: pointer;
`
