import * as React from "react"

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
    <div>
      <div>
        <div>
          <label htmlFor="widget-title">Title</label>
        </div>
        <input
          defaultValue={props.initialValue.title}
          id="widget-title"
          onInput={handleInput(props, "title")}
          placeholder="Title of widget"
          type="text"
        />
      </div>

      <div>
        <div>
          <label>Temperature</label>
        </div>
        <input
          type="radio"
          name="widget-units"
          id="widget-unit-C"
          value="C"
          onChange={handleInput(props, "temperature")}
          checked={props.initialValue.temperature === "C"}
        />
        <label htmlFor="widget-unit-C">C&deg;</label>
        <input
          type="radio"
          name="widget-units"
          id="widget-unit-F"
          value="F"
          onChange={handleInput(props, "temperature")}
          checked={props.initialValue.temperature === "F"}
        />
        <label htmlFor="widget-unit-F">F&deg;</label>
      </div>

      <div>
        <div>
          <label>Wind</label>
        </div>
        <input
          id="widget-wind-on"
          name="widget-wind"
          onChange={handleInput(props, "wind")}
          type="radio"
          value={1}
          checked={props.initialValue.wind}
        />
        <label htmlFor="widget-wind-on">On</label>
        <input
          type="radio"
          name="widget-wind"
          id="widget-wind-off"
          value=""
          onChange={handleInput(props, "wind")}
          checked={!props.initialValue.wind}
        />
        <label htmlFor="widget-wind-off">Off</label>
      </div>
    </div>
  )
}
