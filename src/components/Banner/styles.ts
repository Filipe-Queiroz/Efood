import styled from 'styled-components'
import { colors } from '../../styles'
import apresentacao from '../../assets/images/apresentacao.png'

export const Text = styled.h3`
  text-align: center;
  font-size: 32px;
  color: ${colors.principal};
  margin-top: 138px;
`

export const BgImg = styled.div`
  width: 100%;
  padding: 32px 0;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${apresentacao});
  background-size: cover;
`
export const Text1 = styled.h2`
  font-size: 32px;
  font-weight: 100;
  color: ${colors.branco};
  margin-bottom: 250px;
`

export const Text2 = styled.h2`
  color: ${colors.branco};
  font-weight: 900;
  font-size: 32px;
`
