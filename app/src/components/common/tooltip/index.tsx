import React, { HTMLAttributes } from 'react'
import ReactTooltip from 'react-tooltip'
import styled from 'styled-components'
import { IconInfo } from './img/IconInfo'

const TooltipPopup = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  outline: none;
  position: relative;
  white-space: normal;

  > svg {
    margin-left: 5px;

    path {
      fill: rgba(0, 0, 0, 0.5);
    }

    &:hover {
      path {
        fill: #000;
      }
    }
  }

  .__react_component_tooltip.type-dark.place-top:after {
    border-top-color: #313131;
    border-top-width: 10px;
    bottom: -8px;
  }

  .reactTooltip {
    background-color: #313131;
    color: #fff;
    font-size: 11px;
    line-height: 1.3;
    max-width: 180px;
    opacity: 1;
    padding: 5px 8px;
    text-align: left;

    > a {
      color: #fff;
      text-decoration: underline;
    }
    > a:hover {
      color: #00f;
    }

    &.place-left:after {
      border-left-color: #000;
    }

    &.place-right:after {
      border-right-color: #000;
    }

    &.place-top:after {
      border-top-color: #000;
    }

    &.place-bottom:after {
      border-bottom-color: #000;
    }

    .multi-line {
      text-align: left;
    }
  }
`

interface Props extends HTMLAttributes<HTMLDivElement> {
  id: string
  description: string
}

export const Tooltip = (props: Props) => {
  const { id, description, ...restProps } = props

  return (
    <TooltipPopup
      data-class="reactTooltip"
      data-multiline={true}
      data-tip={description}
      data-html={true}
      data-for={id}
      {...restProps}
    >
      <IconInfo />
      <ReactTooltip id={id} clickable={true} effect="solid" delayHide={500} />
    </TooltipPopup>
  )
}

export default Tooltip
