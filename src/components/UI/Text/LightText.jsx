import styled from 'styled-components'

const Light = styled.span`
font-size: 28px;
font-weight: lighter;
letter-spacing: 4px;
`

const LightText = ({children}) => {
  return ( <Light>{children}</Light>)
}

export default LightText