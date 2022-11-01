import PropTypes from "prop-types";

export const HawaMenu = ({
  popMenuID,
  menuItems,
  withHeader,
  withIcons,
  headerTitle,
  headerSubtitle
}) => {
  return (
    <div
      id={popMenuID}
      className="z-10 w-44 bg-white rounded-lg divide-y divide-gray-100 shadow dark:bg-gray-700"
    >
      {withHeader && (
        <div class="py-3 px-4 text-sm text-gray-900 dark:text-white">
          <div>{headerTitle}</div>
          <div class="font-medium truncate">{headerSubtitle}</div>
        </div>
      )}
      {menuItems.map((group) => {
        return (
          <ul className="py-1  text-sm text-gray-700 dark:text-gray-200">
            {group.map((item) => {
              return (
                <li
                  onClick={item.action}
                  className={
                    item.button
                      ? "bg-primary-500 text-white hover:bg-primary-600 flex flex-row rtl:flex-row-reverse items-center cursor-pointer py-2 px-4 rounded-lg mx-1 hover:bg-gray-100 dark:hover:bg-primary-600 dark:hover:text-white"
                      : "flex flex-row rtl:flex-row-reverse items-center cursor-pointer py-2 px-4 rounded-lg mx-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  }
                >
                  {withIcons && (
                    <div className="mr-2 rtl:ml-2">{item.icon}</div>
                  )}
                  {item.label}
                </li>
              );
            })}
          </ul>
        );
      })}
    </div>
  );
};

HawaMenu.propTypes = {
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
