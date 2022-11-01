import Select from "react-select";
import CreatableSelect from "react-select/creatable";

const Option = ({
  cx,
  children,
  getStyles,
  innerProps,
  innerRef,
  ...props
}) => (
  <div
    ref={innerRef}
    className="m-2 p-1 px-3 rounded-lg flex flex-row items-center justify-between hover:bg-blue-200"
    {...innerProps}
  >
    {children}
  </div>
);

const Control = ({
  cx,
  children,
  getStyles,
  innerProps,
  innerRef,
  ...props
}) => {
  return (
    <div
      ref={innerRef}
      className="mb-2
      flex
       bg-gray-50 border
        border-gray-300
         text-gray-900
         text-sm rounded-lg
         h-11
          focus:ring-blue-500
           focus:border-blue-500
             w-full 
             dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      {...innerProps}
      // {...props}
    >
      {children}
    </div>
  );
};
const Menu = ({ cx, children, getStyles, innerProps, innerRef, ...props }) => {
  return (
    <div
      className="bg-white rounded-lg absolute w-full"
      ref={innerRef}
      {...innerProps}
      // {...props}
    >
      {children}
    </div>
  );
};

export const HawaSelect = (props) => {
  return (
    <>
      {props.label && (
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          {props.label}
        </label>
      )}
      {!props.isCreatable && (
        <Select
          styles={
            {
              // input: (base) => ({
              //   ...base,
              //   "input:focus": {
              //     boxShadow: "none"
              //   }
              // }),
              // control: (base) => ({
              //   ...base,
              //   borderRadius: "0.75rem"
              // }),
              // menu: (base) => ({
              //   ...base,
              //   borderRadius: "0.75rem",
              //   padding: 0,
              //   display: "flex",
              //   justifyContent: "center"
              // }),
              // menuList: (base) => ({
              //   ...base,
              //   display: "flex",
              //   flexDirection: "column",
              //   justifyContent: "center",
              //   alignItems: "center",
              //   width: "100%"
              // }),
              // option: (base) => ({
              //   ...base,
              //   borderRadius: "0.75rem",
              //   margin: 3,
              //   width: "98%"
              // }),
              // multiValue: (base) => ({
              //   ...base,
              //   borderRadius: "0.4rem"
              // })
            }
          }
          options={props.options}
          isClearable={props.isClearable}
          isMulti={props.isMulti}
          isSearchable={props.isSearchable}
          onChange={(newValue, action) => props.onChange(newValue, action)}
          components={{
            Control,
            Option,
            Menu
          }}
        />
      )}
      {props.isCreatable && (
        <CreatableSelect
          styles={{
            input: (base) => ({
              ...base,
              "input:focus": {
                boxShadow: "none"
              }
            }),

            control: (base) => ({
              ...base,
              borderRadius: "0.75rem"
            }),
            menu: (base) => ({
              ...base,
              borderRadius: "0.75rem",
              padding: 0,
              display: "flex",
              justifyContent: "center"
            }),
            menuList: (base) => ({
              ...base,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%"
            }),
            option: (base) => ({
              ...base,
              borderRadius: "0.75rem",
              margin: 3,
              width: "98%"
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
};
