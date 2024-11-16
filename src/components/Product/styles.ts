import styled from 'styled-components'
import { colors } from '../../styles'
import { Link } from 'react-router-dom'

export const Container = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  margin-bottom: 120px;
`

export const ItemContainer = styled.li`
  border: 1px solid ${colors.principal};
  margin-bottom: 48px;
  position: relative;

  img {
    max-width: 472px;
    max-height: 310px;
    width: 100%;
    object-fit: cover;
  }
`

export const Content = styled.div`
  padding: 8px;
  background-color: ${colors.branco};
  max-height: 200px;
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Score = styled.div`
  display: flex;
  gap: 8px;

  span {
    font-size: 18px;
    font-weight: bold;
    color: ${colors.principal};
  }
`

export const Title = styled.h2`
  font-size: 18px;
  color: ${colors.principal};
`

export const Text = styled.p`
  font-size: 14px;
  color: ${colors.principal};
  line-height: 22px;
  margin: 16px 0;
`

export const Button = styled(Link)`
  padding: 4px 6px;
  background-color: ${colors.principal};
  color: ${colors.fundo};
  font-size: 14px;
  font-weight: bold;
  border: none;
  cursor: pointer;
`

export const TagContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Tag = styled.span`
  padding: 6px 4px;
  font-size: 12px;
  font-weight: bold;
  background-color: ${colors.principal};
  color: ${colors.fundo};
  text-align: center;
  margin-left: 8px;
`
