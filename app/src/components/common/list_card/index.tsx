import React, { HTMLAttributes } from 'react'
import { Card } from '../card'
import styled from 'styled-components'

const CardStyled = styled(Card)`
  margin: 0 auto;
  max-width: ${props => props.theme.list.maxWidth};
  min-height: 530px;
  width: 100%;
`

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const ListCard: React.FC<Props> = (props: Props) => {
  const { children, ...restProps } = props
  return (
    <CardStyled noPadding={true} {...restProps}>
      {children}
    </CardStyled>
  )
}
