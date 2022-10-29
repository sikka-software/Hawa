import Select from "react-select";
import CreatableSelect from "react-select/creatable";

export default function HawaSelectInput(props) {
  return (
    <>
      {!props.isCreatable && (
        <Select
          styles={{
            input: (base) => ({
              ...base,
              "input:focus": {
                boxShadow: "none"
              }
            }),
            control: (base) => ({
              ...base,
              borderRadius: "0.75rem",
              padding: 3
            }),
            menu: (base) => ({
              ...base,
              borderRadius: "0.75rem"
            })
          }}
          options={props.options}
          isClearable={props.isClearable}
          isMulti={props.isMulti}
          isSearchable={props.isSearchable}
          onChange={(newValue, action) => props.onChange(newValue, action)}
          components={props.components}
        />
      )}
      {props.isCreatable && (
        <CreatableSelect
          styles={{
            input: (base) => ({
              ...base,
              "input:focus": {
                padding: 20,
                boxShadow: "none"
              }
            }),
            control: (base) => ({
              ...base,
              borderRadius: "0.75rem",
              padding: 8
            })
          }}
          options={props.options}
          isClearable={props.isClearable}
          isMulti={props.isMulti}
          isSearchable={props.isSearchable}
          onCreateOption={() => console.log("im changing")}
          onChange={(newValue, action) => {
            console.log("this is onChange", newValue);
            props.onChange(newValue, action);
          }}
          onInputChange={(newValue, action) => {
            console.log("onInputChange====", newValue);
            props.onInputChange(newValue, action);
          }}
        />
      )}
    </>
  );
}
