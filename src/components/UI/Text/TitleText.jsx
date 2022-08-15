import styled from 'styled-components'

const TitleTextStyle = styled.h1`
font-size: 76px;
font-weight: 700;
line-height: 78px;
letter-spacing: 12px;
text-align: center;
margin: 0;
margin-top: 15px

`

const TitleText = ({children}) => {
  return ( <TitleTextStyle>{children}</TitleTextStyle>)
}

export default TitleText