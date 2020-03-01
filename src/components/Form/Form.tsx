import * as React from "react"
import styled from "styled-components"

const FormContainer = styled.div`
  flex: 1;
  padding-right: 64px;
  position: relative;

  &:before {
    background-color: #d5d5d5;
    content: "";
    display: block;
    position: absolute;
    right: 31px;
    height: 100%;
    width: 1px;
  }
`
const TitleInput = styled.input`
  box-sizing: border-box;
  font-size: 16px;
  line-height: 32px;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 3px;
  border: #c5c5c5 1px solid;
  width: 100%;
`
const FormQuestionLabel = styled.label`
  display: block;
  padding-bottom: 9px;
`
const FormQuestionContainer = styled.div`
  padding-bottom: 16px;
`
const ChoicesContainer = styled.div`
  display: flex;
`
const ChoiceWrapper = styled.span`
  flex: 1;
`

export interface FormProps {
  initialValue: FormValue
  onChange?: (f: [keyof FormValue, string]) => void
}

export interface FormValue {
  title: string
  temperature: "F" | "C"
  wind: boolean
}

const handleInput = ({ onChange }: FormProps, key: keyof FormValue) => (
  event: React.FormEvent<HTMLInputElement>
): void => {
  if (typeof onChange === "function") {
    onChange([key, event.currentTarget.value])
  }
}

export const Form: React.FC<FormProps> = (props: FormProps) => {
  return (
    <FormContainer>
      <FormQuestionContainer>
        <div>
          <FormQuestionLabel htmlFor="widget-title">Title</FormQuestionLabel>
        </div>
        <TitleInput
          defaultValue={props.initialValue.title}
          id="widget-title"
          onInput={handleInput(props, "title")}
          placeholder="Title of widget"
          type="text"
        />
      </FormQuestionContainer>

      <FormQuestionContainer>
        <div>
          <FormQuestionLabel>Temperature</FormQuestionLabel>
        </div>
        <ChoicesContainer>
          <ChoiceWrapper>
            <input
              type="radio"
              name="widget-units"
              id="widget-unit-C"
              value="C"
              onChange={handleInput(props, "temperature")}
              checked={props.initialValue.temperature === "C"}
            />
            <label htmlFor="widget-unit-C">&deg;C</label>
          </ChoiceWrapper>
          <ChoiceWrapper>
            <input
              type="radio"
              name="widget-units"
              id="widget-unit-F"
              value="F"
              onChange={handleInput(props, "temperature")}
              checked={props.initialValue.temperature === "F"}
            />
            <label htmlFor="widget-unit-F">&deg;F</label>
          </ChoiceWrapper>
        </ChoicesContainer>
      </FormQuestionContainer>

      <FormQuestionContainer>
        <div>
          <FormQuestionLabel>Wind</FormQuestionLabel>
        </div>
        <ChoicesContainer>
          <ChoiceWrapper>
            <input
              id="widget-wind-on"
              name="widget-wind"
              onChange={handleInput(props, "wind")}
              type="radio"
              value={1}
              checked={props.initialValue.wind}
            />
            <label htmlFor="widget-wind-on">On</label>
          </ChoiceWrapper>
          <ChoiceWrapper>
            <input
              type="radio"
              name="widget-wind"
              id="widget-wind-off"
              value=""
              onChange={handleInput(props, "wind")}
              checked={!props.initialValue.wind}
            />
            <label htmlFor="widget-wind-off">Off</label>
          </ChoiceWrapper>
        </ChoicesContainer>
      </FormQuestionContainer>
    </FormContainer>
  )
}
