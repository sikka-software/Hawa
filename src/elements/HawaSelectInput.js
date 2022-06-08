import Select from "react-select";
import Creatable from "react-select/creatable";

export default function HawaSelectInput(props) {
  return (
    <>
      {!props.isCreatable && (
        <Select
          options={props.options}
          isClearable={props.isClearable}
          isMulti={props.isMulti}
          isSearchable={props.isSearchable}
          onChange={(newValue, action) => props.onChange(newValue, action)}
        />
      )}
      {props.isCreatable && (
        <Creatable
          options={props.options}
          isClearable={props.isClearable}
          isMulti={props.isMulti}
          isSearchable={props.isSearchable}
          onChange={(newValue, action) => props.onChange(newValue, action)}
          onInputChange={(newValue, action) =>
            props.onInputChange(newValue, action)
          }
        />
      )}
    </>
  );
}
