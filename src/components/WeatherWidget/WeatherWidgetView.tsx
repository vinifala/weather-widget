import * as React from "react"
import styled from "styled-components"

const Container = styled.div`
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 3px 8px #d4d4d4;
  box-sizing: border-box;
  color: #252525;
  display: flex;
  flex-wrap: wrap;
  padding: 32px;
  padding-bottom: 28px;
  width: 284px;
`
const TitleContainer = styled.div`
  font-weight: bold;
  flex: 2 0 100%;
  letter-spacing: 0.21pt;
  padding-bottom: 38px;
`
const IconContainer = styled.div`
  flex: 1;
  height: 100px;
  width: 100px;
  img {
    width: 100px;
  }
`
const DataContainer = styled.div`
  flex: 1;
  padding-left: 20px;
`
const TempContainer = styled.div`
  font-size: 44px;
  font-weight: bold;
  line-height: 50px;
`
const WindContainer = styled.div`
  display: flex;
  font-size: 12px;
  justify-content: space-between;
  letter-spacing: -0.21pt;
`
const WindLabel = styled.span`
  font-weight: bold;
`
const WindValue = styled.span``

export interface WeatherWidgetViewProps {
  icon?: string
  location: string
  temperature: number
  title: string
  wind?: string
}

export const WeatherWidgetView: React.FC<WeatherWidgetViewProps> = (
  props: WeatherWidgetViewProps
) => (
  <Container>
    <TitleContainer>{props.title}</TitleContainer>
    <IconContainer>{props.icon && <img src={props.icon} />}</IconContainer>
    <DataContainer>
      <div>{props.location}</div>
      <TempContainer>{props.temperature}&deg;</TempContainer>
      {props.wind && (
        <WindContainer>
          <WindLabel>Wind</WindLabel>
          <WindValue>{props.wind}</WindValue>
        </WindContainer>
      )}
    </DataContainer>
  </Container>
)
