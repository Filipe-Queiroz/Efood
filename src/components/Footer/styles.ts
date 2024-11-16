import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.footer`
  background-color: ${colors.cfooter};
  padding: 40px 0;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ImgLogo = styled.img`
  margin-bottom: 32px;
`

export const Social = styled.ul`
  display: flex;
  gap: 8px;
  margin-bottom: 80px;
`

export const Text = styled.p`
  color: ${colors.principal};
  font-size: 10px;
  text-align: center;
  max-width: 480px;
`
