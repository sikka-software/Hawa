import React from "react";
import PropTypes from "prop-types";
import HawaDrawerItem from "../elements/HawaDrawerItem";

const MenuButton = () => {
  return (
    <button
      data-drawer-target="drawer-navigation"
      data-drawer-show="drawer-navigation"
      aria-controls="drawer-navigation"
      type="button"
      className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    >
      <span className="sr-only">Open main menu</span>
      <svg
        aria-hidden="true"
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
  );
};
const ProfileDropdown = (props) => {
  return (
    <div
      id="userDropdown"
      className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
      data-popper-reference-hidden=""
      data-popper-escaped=""
      data-popper-placement="bottom-start"
      // style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate3d(0px, 295.5px, 0px);"
    >
      <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
        <div>{props.username}</div>
        <div className="font-medium truncate">{props.userEmail}</div>
      </div>
      <ul
        className="py-1 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="avatarButton"
      >
        {props.profileItems.map((it) => {
          return <ProfileItem text={it.text} link={it.slug} />;
        })}
      </ul>
      <div className="py-1">
        <a
          href="#"
          className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
        >
          Sign out
        </a>
      </div>
    </div>
  );
};
const DrawerContent = (props) => {
  return (
    <div
      id="drawer-navigation"
      className="fixed z-40 h-screen p-4 overflow-y-auto bg-white w-80 dark:bg-gray-800"
      tabindex="-1"
      aria-labelledby="drawer-navigation-label"
    >
      <div href={props.logoHref} className="flex items-center">
        <img
          src={
            "https://my.qawaim.app/_next/image?url=%2Fqawaim-logo.svg&w=256&q=75"
          }
          // src={props.logoLink}
          className="h-9"
          alt="Flowbite Logo"
        />
      </div>
      <CloseButton />
      <div className="py-4 overflow-y-auto">
        <ul className="space-y-2">
          {props.drawerItems.map((item, i) => {
            return (
              <HawaDrawerItem action={item.action} key={i} text={item.text} />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const ProfileItem = (props) => {
  return (
    <li>
      <a
        href={props.link}
        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      >
        {props.text}
      </a>
    </li>
  );
};
const CloseButton = () => {
  return (
    <button
      type="button"
      data-drawer-dismiss="drawer-navigation"
      aria-controls="drawer-navigation"
      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
    >
      <svg
        aria-hidden="true"
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
  );
};
export const HawaLayout = (props) => {
  return (
    <div className="font-plex">
      <div>
        <nav className="border-gray-200 rounded dark:bg-gray-900">
          <div className="flex p-3 flex-row-reverse items-center justify-between w-full">
            {/* <div href={props.logoHref} className="flex items-center">
              <img src={props.logoLink} className="h-9" alt="Flowbite Logo" />
            </div> */}
            <div
              data-dropdown-toggle="userDropdown"
              data-dropdown-placement="bottom-start"
              className="overflow-hidden mr-2 relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600"
            >
              <svg
                className="absolute -left-1 w-12 h-12 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>

            {/* <div href={props.logoHref} className="flex items-center">
              <img
                src={
                  // "https://my.qawaim.app/_next/image?url=%2Fqawaim-logo.svg&w=256&q=75"
                  "https://qawaim-images.s3-ap-southeast-1.amazonaws.com/614580f79706137eab618399"
                }
                // src={props.logoLink}
                className="h-12"
                alt="Flowbite Logo"
              />
            </div> */}
            <div>{props.pageTitle ?? "Home"}</div>
            <div className="flex flex-row-reverse">
              <MenuButton />
              {/* <img
                id="avatarButton"
                type="button"
                data-dropdown-toggle="userDropdown"
                data-dropdown-placement="bottom-start"
                className="w-10 h-10 rounded-full cursor-pointer"
                src="/docs/images/people/profile-picture-5.jpg"
                alt="User dropdown"
              /> */}
            </div>
          </div>
        </nav>
      </div>
      <ProfileDropdown profileItems={props.profileItems} />
      <DrawerContent
        logoHref={props.logoHref}
        appTitle={props.appTitle}
        drawerItems={props.drawerItems}
      />
      <div className="p-3">{props.children}</div>
    </div>
  );
};

HawaLayout.propTypes = {
  logoLink: PropTypes.string,
  username: PropTypes.string,
  userEmail: PropTypes.string,
  drawerItems: PropTypes.objectOf({
    text: PropTypes.string,
    slug: PropTypes.string,
    action: PropTypes.func
  })
};
