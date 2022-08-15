import styled from 'styled-components'

const Bold = styled.span`
font-size: 28px;
font-weight: 700;
letter-spacing: 4px;
`

const BoldText = ({children}) => {
  return ( <Bold>{children}</Bold>)
}

export default BoldText