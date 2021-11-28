import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import "../../../styles.css"

const MuiRadioSelector = ({ props, handleClick, handleChange, value, defaultValue }) => {
  value = value || defaultValue;
  return (
    <div className={styles.radio_selector_container}>
      {props.options.map((option) => {
        return (
          <div
            key={option.label}
            className="radio_option"
            onClick={() => {
              if(handleChange){
                handleChange(option.label);
              }
              handleClick(option.label);
            }}
            style={
              value.toLowerCase() === option.label.toLowerCase()
                ? { backgroundColor: "var(--blue)", color: "var(--light)" }
                : null
            }
          >
            {option.text}
          </div>
        );
      })}
    </div>
  );
};

export const RadioSelector = (props) => {
  const { control } = useFormContext();
  const { name, defaultValue, rules, shouldUnregister } = props;

  return (
    <React.Fragment>
      <Controller
        render={({ field: { onChange, value } }) => (
          <MuiRadioSelector
            props={props}
            value={value}
            handleClick={onChange}
            handleChange={props.onChange}
            defaultValue={defaultValue}
          />
        )}
        name={name}
        rules={rules}
        control={control}
        defaultValue={defaultValue}
        shouldUnregister={shouldUnregister}
      />
    </React.Fragment>
  );
}
