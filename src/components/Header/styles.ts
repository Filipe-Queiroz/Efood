import styled from 'styled-components'

import { Props } from '.'
import { colors } from '../../styles'

export const Container = styled.header<Props>`
  padding: ${(props: Props) =>
    props.content === 'Home' ? '40px 0' : '40px 0 0 0'};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 80px;

  .content {
    max-width: 539px;
  }
`

export const Title = styled.h1<Props>`
  text-align: center;
  margin-bottom: ${(props: Props) =>
    props.content === 'Home' ? '140px' : '0'};
`

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 60px;

  ${Title} {
    margin-left: 340px;
    margin-right: 190px;
  }
`

export const HLink = styled.a`
  color: ${colors.principal};
  font-weight: 900;
  font-size: 18px;
`
