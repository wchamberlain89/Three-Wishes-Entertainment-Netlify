import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

const WidthContainer = styled.div`
  max-width: ${props => props.width || "1140px"};
  width: 90%;
  margin: 0 auto;
`;

const MaxWidth = ({ children, classes, ...restProps }) => {
  return (
    <WidthContainer className={classNames('mWidth', classes)} { ...restProps }>{ children }</WidthContainer>
  )
}

export default MaxWidth;
