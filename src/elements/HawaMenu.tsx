import PropTypes from "prop-types"

type MenuTypes = {
  popMenuID: any
  menuItems: any
  //
  //         icon: PropTypes.element,
  //         label: PropTypes.string,
  //        action: PropTypes.func,
  //
  withHeader: any
  withIcons: any
  headerTitle: any
  headerSubtitle: any
  open: any
  handleClose: any
  anchor: any
}

export const HawaMenu: React.FunctionComponent<MenuTypes> = ({
  popMenuID,
  menuItems,
  withHeader,
  withIcons,
  headerTitle,
  headerSubtitle,
  open,
  handleClose,
}) => {
  return (
    <div>
      <button
        className="w-44 rounded border bg-blue-700 p-2 text-white"
        onClick={() => handleClose(!open)}
      >
        Menu Dropdown
      </button>
      <div
        id={popMenuID}
        className={`${
          open ? "block" : "hidden"
        } z-10 w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700`}
      >
        {withHeader && (
          <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
            <div>{headerTitle}</div>
            <div className="truncate font-medium">{headerSubtitle}</div>
          </div>
        )}
        {menuItems.map((group: any) => {
          return (
            <ul className="py-1  text-sm text-gray-700 dark:text-gray-200">
              {group.map((item: any) => {
                return (
                  <li
                    onClick={item.action}
                    className={
                      item.button
                        ? "mx-1 flex cursor-pointer flex-row items-center rounded-lg bg-primary-500 py-2 px-4 text-white hover:bg-primary-600 rtl:flex-row-reverse dark:hover:bg-primary-600 dark:hover:text-white"
                        : "mx-1 flex cursor-pointer flex-row items-center rounded-lg py-2 px-4 hover:bg-gray-100 rtl:flex-row-reverse dark:hover:bg-gray-600 dark:hover:text-white"
                    }
                  >
                    {withIcons && (
                      <div className="mr-2 rtl:ml-2">{item.icon}</div>
                    )}
                    {item.label}
                  </li>
                )
              })}
            </ul>
          )
        })}
      </div>
    </div>
  )
}
