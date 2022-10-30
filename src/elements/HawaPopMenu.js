import PropTypes from "prop-types";
export const HawaPopMenu = (props) => {
  return (
    <div>
      {/* <button
        id="dropdownDefault"
        data-dropdown-toggle={props.popMenuID}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Dropdown button{" "}
        <svg
          className="ml-2 w-4 h-4"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button> */}
      <div
        id={props.popMenuID}
        className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
        data-popper-reference-hidden=""
        data-popper-escaped=""
        data-popper-placement="bottom"
        // style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate3d(0px, 484.5px, 0px);"
      >
        <ul
          className="py-1 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefault"
        >
          {props.menuItems.map((item) => (
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                {item.label}
              </a>
            </li>
            // <MenuItem key={item.label} onClick={item.action}>
            //   {item.icon && <item.icon />}
            //   {item.icon && <div style={{ width: 10 }} />}
            //   <Typography textAlign="center">{item.label}</Typography>
            // </MenuItem>
          ))}
        </ul>
      </div>
    </div>

    // <Menu
    //   sx={{ mt: "45px" }}
    //   id="menu-appbar"
    //   anchorEl={props.anchor}
    //   anchorOrigin={{
    //     vertical: "top",
    //     horizontal: "right"
    //   }}
    //   keepMounted
    //   transformOrigin={{
    //     vertical: "top",
    //     horizontal: "right"
    //   }}
    //   open={Boolean(props.anchor)}
    //   onClose={props.handleClose}
    //   variant="themed"
    //   PaperProps={{
    //     style: {
    //       boxShadow: "none",
    //       border: `1px solid ${theme.primaryActionColor}`
    //     }
    //   }}
    // >

    // </Menu>
  );
};

HawaPopMenu.propTypes = {
  anchor: PropTypes.any,
  handleClose: PropTypes.func,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.element,
      label: PropTypes.string,
      action: PropTypes.func
    })
  )
};
