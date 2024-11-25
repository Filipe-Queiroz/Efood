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

export const AddCartButton = styled.a`
  background-color: ${colors.cfooter};
  color: ${colors.principal};
  border: none;
  padding: 4px;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
  display: block;
  width: 100%;
  cursor: pointer;
`

export const SubmitCartButton = styled.button`
  background-color: ${colors.cfooter};
  color: ${colors.principal};
  border: none;
  padding: 4px;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
  display: block;
  width: 100%;
  cursor: pointer;
`

export const CartStage = styled.div`
  display: block;
  &.is-checkout {
    display: none;
  }
`

export const ItemCart = styled.li`
  background-color: ${colors.cfooter};
  display: flex;
  padding: 8px;
  position: relative;
  margin-bottom: 16px;
`

export const ImageItem = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
`

export const InfosItem = styled.div`
  margin-left: 8px;
  display: flex;
  flex-direction: column;
  h3 {
    color: ${colors.principal};
    font-weight: 900;
    font-size: 18px;
    line-height: 21.09px;
  }
  span {
    color: ${colors.principal};
    margin: 16px 0 33px 0;
    font-weight: 400;
    font-size: 14px;
  }
`
export const EmptyText = styled.p`
  text-align: center;
  color: ${colors.cfooter};
`

export const DeleteItemButton = styled.button`
  width: 16px;
  height: 16px;
  position: absolute;
  bottom: 8px;
  right: 8px;
  background-image: url(${trash});
  background-color: transparent;
  border: none;
  cursor: pointer;
`

export const InfosCart = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0 16px 0;
  color: ${colors.fundo};
  weight: 700;
  font-size: 14px;
`
