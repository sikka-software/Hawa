# @sikka/hawa

## 0.42.3

### Patch Changes

- Fix extra space when no filters are provided to `DataTable`

## 0.42.2

### Patch Changes

- Fix `DialogFooter` flex issue on mobile screens

## 0.42.1

### Patch Changes

- Allow conumer to pass `contentProps` to `DropdownMenu` component

## 0.42.0

### Minor Changes

- `DataTable`: add ability to set quick filters and apply them.

## 0.41.0

### Minor Changes

- Add `Behance`, `Linkedin`, `Telegram`, `Youtube`, and `Tiktok` logos to the `Logo` component
- `DataTable`: add ability to select rows and trigger bulk actions on them

## 0.40.0

### Minor Changes

- Remove `Floatbox` in favor of a radix-ui `Popover` within the `Tab` trigger
- Fix missing gap in `DialogFooter`
- Rename `inForm` to `asInput` prop in `Button` component.
- Add `userViewportSize` hook
- Add `useWindowEvent` hook
- Add `onDrawerExpanded` prop in `AppLayout` to allow consumer to trigger their custom functions when drawer state changes
- Add aria props to `DropdownMenuRadio`
- Allow consumer to pass all default props to `DropdownMenuRadioGroup` and `DropdownMenuRadioItem`
- Allow consumer to pass `containerClassNames` to `Radio`

## 0.39.0

### Minor Changes

- `ContactForm`: ability to customize submit button
- `DataTable`: ability to hide header with `hideHeader` prop
- `Logos`: adds `X`, `AppleStore`, `GooglePlay`, `Visa, and `MasterCard` logos

## 0.38.11

### Patch Changes

- Fix spacing style in `Sonner`

## 0.38.9

### Patch Changes

- Add ability to pass `overlayProps` to `DialogContent`

## 0.38.7

### Patch Changes

- Add ability to pass custom id's to Dialog components

## 0.38.6

### Patch Changes

- Ability to stylize `DialogOverlay` and the Dialog close button using `classNames` object

## 0.38.5

### Patch Changes

- Ability to stylize `DropdownMenuSeparator`

## 0.38.1

### Patch Changes

- `Button`: add `asInput` prop to include a label above the button and a helper text under it.

## 0.38.0

### Minor Changes

- `PinInput` revamped entierly to use `input-otp` package
- `CodeConfirmation` ability to control the code length
- Use `HelperText` component in all places it should be used

## 0.37.2

### Patch Changes

`AppCommand`:

- change text prop to `label`
- add callback to be triggerd with subitem.action is triggered

## 0.37.1

### Patch Changes

- Fix wrong height in `AppCommand`
- Add `actions` in `CardHeader`

## 0.37.0

### Minor Changes

- `Tabs`: add a new property `scrollable` to cancel wrapping and make it horizontally scrollable (and draggable!). And forces scrollabilities on screens smaller than 768px
- Adds fade on right/left when the tabs are dragged/scrolled horizontally
- `useShortcuts`: a new hook to handle shortcuts on windows and mac.
- `ScrollArea` add ability to make it draggable on non-mobile
- `FullCommand` a single component to construct a command using the `Command` pieces
- `AppCommand` a `FullCommand` within a controllable `Dialog` which can be triggered with a shortcut using `useShortcuts`

## 0.36.2

### Patch Changes

- `AppLayout`: add layout when side drawer is open while on mobile
- `Dialog`: fix width on mobile

## 0.36.1

### Patch Changes

- `AppLayout`: fix drawer flashes open on mobile for a sec on initial load
- `DataTable`: update storage item key

## 0.36.0

### Minor Changes

- `Select`: Remove autofocus
- `Input`, `PinInput`, `PhoneInput`, and `ColorPicker`: standardize placeholder text color
  `DatePickerButton`
- ability to customize placeholder text
- fix wrong icon position when in RTL
  `Input`
- add `isLoadingError` boolean to replace input with error skeleton
- ability to set `loadingErrorMessage` for when `isLoadingError` is true
  `DataTable`
- resolve issue with column visibility not persistant on page refresh

## 0.35.6

### Patch Changes

- `AppLayout` final fix for click outside on mobile
- Improve `useClickOutside` hook

## 0.35.4

### Patch Changes

- Use the `Portal` component from `@headlessui/react` in `DropdownMenu`

## 0.35.3

### Patch Changes

- Ability to pass `triggerProps` to `DropdownMenu` components
- Make dropdown menu trigger `asChild: true` by default in `AppLayout`

## 0.35.2

### Patch Changes

- `HelperText`: fix missing React import

## 0.35.1

### Patch Changes

- `DatePickerButton`: ablility to pass `buttonProps`

## 0.35.0

### Minor Changes

- `CodeConfirmation` fix cancel button variant
- `Button`: ability to pass `labelProps`
- `Button`: adds `HelperText` and the ability to show/hide it with `showHelperText` prop
- `DataTable` an X button in the search input to clear search
- `DatePicker`: ability to pass `popoverContentProps`
- `DatePickerButton`: additional customization with `buttonClassNames`
- New component: `HelperText`
- `Input`: fix width issues
- `Radio`: ability to pass `tooltip` and `tooltipContentProps` to a radio option

## 0.34.2

### Patch Changes

- `AppLayout`: minor UI fixes + cleanup

## 0.34.1

### Patch Changes

- Improve `Chip` colors in dark mode

## 0.34.0

### Minor Changes

- `ContactForm` add `showSuccess` prop with ablility to customize success message
- New component: `ImageCard`

## 0.33.0

### Minor Changes

- New components: `Calendar`, `DatePicker`, and `DatePickerButton`

## 0.32.3

### Patch Changes

- `DataTable` fix `i18nKey` to use existing `translateFn`

## 0.32.2

### Patch Changes

- `DataTable`: add `i18nKey` meta property in the `ColumnDef` to allow consumer to pass custom text for the column hiding list

## 0.32.1

### Patch Changes

- Make `phoneInputProps` optional in `LoginForm`

## 0.32.0

### Minor Changes

- Fix phone validation in `LoginForm`
- Ability to pass custom list of `countryCodes` in `PhoneInput`

## 0.31.17

### Patch Changes

- `RegisterForm`, `LoginForm`, `ResetPassword`: Trim email fields to ignore whitespace and make it lowercase.

## 0.31.16

### Patch Changes

- `AppLayout`: improve drawer UX in mobile

## 0.31.12

### Patch Changes

- `AppLayout`: Disallow collapsing side drawer on click outside when screen larger than 600px

## 0.31.11

### Patch Changes

- Fix clicking outside the drawer of `AppLayout`
- Add `useOutsideClick` hook

## 0.31.7

### Patch Changes

- `PhoneInput`: ability to pass input props via `inputProps`

## 0.31.6

### Patch Changes

- `Select`: fix styling of when `isMulti` prop is true

## 0.31.5

### Patch Changes

- `Combobox`: ability to pass custom element as the selected option via `renderSelected` prop

## 0.31.4

### Patch Changes

- `Sonner`: use IBM Plex Sans font and make the title bold
- `Combobox`: remove unneeded scrollbar
- `Card`: add `asContainer` prop to remove card styles
- `AppLayout`: add `bordered` prop to add a border

## 0.31.2

### Patch Changes

- Ability to display error in `ResetPasswordForm` and `NewPasswordForm`

## 0.31.0

### Minor Changes

- New `Sonner` component to replace the `Toaster`

## 0.30.30

### Patch Changes

- `RegisterForm`: Add `tooLong` username validation when username is longer than 12 characters.
- `ResetPassword`: Add `isLoading` boolean to show spinner during submission
- `NewPassword`: Add `isLoading` boolean to show spinner during submission

## 0.30.29

### Patch Changes

- Fix not returning value in `onChange` of `Radio` component
- Make `withArrow` false by default in `FloatBox`

## 0.30.28

### Patch Changes

- Add tailwind arrow plugin
- Display an arrow in `FloatBox`

## 0.30.27

### Patch Changes

- Add `useMeasureDirty` hook to be used to measure components by passing its ref.
- Adjust the positioning of `FloatBox` component
- Complete the integration of `FloatBox` in `TabsTrigger` component.

## 0.30.26

### Patch Changes

- Export `PopoverRoot` to be available for consumers
- `FloatBox`: a new component that's inspired from the `Popover` component but doesn't require a trigger.
- Use `FloatBox` in `TabsTrigger` to show an optional hint/feedback to users about a tab.

## 0.30.25

### Patch Changes

- Export `BreadcrumbItemProps` to be user as a type by consumers
- Add size variant for `Breadcrumb` component

## 0.30.24

### Patch Changes

- Remove scroll arrow from `Comobox` when no items are in the popover.
- Ability to use radio groups in `DropdownMenu` via the itemType: radio

## 0.30.23

### Patch Changes

- `Combobox`: ability to use nested properties in labelKey

## 0.30.22

### Patch Changes

- Extract `CommandInput` props to be accessable in `Combobox` via the `inputProps` property
- Fix search filtering in `Command`

## 0.30.21

### Patch Changes

- Fix aria-disabled issue in `CommandItem` according to [this](https://github.com/shadcn-ui/ui/issues/2944#issuecomment-1985153126)

## 0.30.20

### Patch Changes

- Fix conditional props in `Codeblock`

## 0.30.19

### Patch Changes

- Fix missing rounded radius in `Dialog` when screen is `sm`

## 0.30.18

### Patch Changes

- Fix ref forwarding in `Command`

## 0.30.17

### Patch Changes

- Allow making column hidden by default in `DataTable`

## 0.30.15

### Patch Changes

- Fix `Radio` tabs height to be 40px

## 0.30.14

### Patch Changes

- Fix required types for `Select` and `DropdownMenu`
- Fix dark mode colos for `Radio` when design is "cards"

## 0.30.13

### Patch Changes

- Add forwardRef for `Radio` component

## 0.30.12

### Patch Changes

- Ability to hide redirection to login from within `RegisterForm`

## 0.30.11

### Patch Changes

- Apply `maxSize` option in `DataTable` and `SimpleTable`

## 0.30.9

### Patch Changes

- Add `noPadding` prop to `CardFooter`

## 0.30.7

### Patch Changes

- Add `cardless` boolean prop to `LoginForm` and `RegisterForm` for hiding the card UI

## 0.30.6

### Patch Changes

- Fix background color of `Alert` when severity is "none"

## 0.30.5

### Patch Changes

- Add `headerless` option to `SimpleTable` to hide the table header
- Add `extra` prop to `SimpleTable` to allow the consumer to append extra JSX at the end of the table

## 0.30.4

### Patch Changes

- Fix trigger option inside the `Accordion` items array to be a react node instead of text.

## 0.30.3

### Patch Changes

- Add `label` and `labelProps` to `Progress` component
- Add `prefixText` in `Input`

## 0.30.1

### Patch Changes

- Add `noDestroy` prop in `Alert` to prevent the element from being removed from DOM
- Add `onErrorDismissed` prop in `RegisterForm` to control what happens when the alert is closed

## 0.30.0

### Minor Changes

- Add ability to customize option for `Combobox`
- Fix issue with not able to scroll a `Combobox` while inside a `Dialog`
- Fix missing types from `SimpleTable`

## 0.29.14

### Patch Changes

- Add `disabled` prop to `Radio` component when the design prop is set to `tabs`

## 0.29.9

### Patch Changes

- Fix link component in `DropdownMenuItem`

## 0.29.8

### Patch Changes

- Add custom link component to `DropDownMenuItem` and `DropDownMenu`
- Add `MenuLinkComponent` to `AppLayout`

## 0.29.7

### Patch Changes

- Replace anchor in `AppLayout`

## 0.29.6

### Patch Changes

- Fix change event in `ColorPicker`

## 0.29.5

### Patch Changes

- Ability to pass custom anchor component for `AppLayout` subitems

## 0.29.4

### Patch Changes

- Adds `value` prop to `Radio`

## 0.29.3

### Patch Changes

- Adds `helperText` props to `Radio` when design is `tabs`

## 0.29.2

### Patch Changes

- Adds ability to stylize the logo in `AppLayout`

## 0.29.1

### Patch Changes

- Adds label option to `Radio` when design is `tabs`

## 0.29.0

### Minor Changes

- Add `PhoneMockup` element for iPhone and Andriod

## 0.28.1

### Patch Changes

- handling submit screen in `FeedbackForm`
- Added Nafath and Metamask auth buttons in `AuthButtons`
- Fixed tos text wrapping in `RegisterForm`
- Fixed overflow and text wrapping in `CodeBlock`

## 0.28.0

### Minor Changes

- Adds new variants (`underlined` and `underlined_tabs`) to `Tabs`
- Initial integration of 'tailwind-variants' package

## 0.27.24

### Patch Changes

- Exported `AuthButtons` from the blocks directory

## 0.27.23

### Patch Changes

- Added `hideIcon` prop to `Avatar`
- Added `placeholder` prop to `PhoneInput`

## 0.27.22

### Patch Changes

- Removed unused old prop from `Alert`

## 0.27.21

### Patch Changes

- ContactForm: added default text strings and made `onSubmit` a required prop

## 0.27.20

### Patch Changes

- RegisterForm: added classnames to allow consumers to customize the block.

## 0.27.16

### Patch Changes

- Fixed `maxWidth` and `maxHeight` to not exceed the screen width & height for `Tooltip` and `Popover`

## 0.27.14

### Patch Changes

- Added default texts in `RegisterForm`
- Made the terms checkbox conditional rendering false by default in `RegisterForm`

## 0.27.13

### Patch Changes

- Made essential props required in `LoginForm`

## 0.27.12

### Patch Changes

- Added `use client` directive to all components via `tsup` config

## 0.27.9

### Patch Changes

- Added `prefixText` to `Input` which adds a non-editable text before the input itself.
- Added ability to disable `Tooltip`
- Added `loadingCard` and `loadingPrice` to `PricingCard` which will show a skeleton if true.
- Added loading ability to cards in `PricingPlans`

## 0.27.7

### Patch Changes

- Fixed fade direction in `Skeleton`

## 0.27.6

### Patch Changes

- Added `fade` feature to `Skeleton`
- Made `name` property required in `Radio`

## 0.27.5

### Patch Changes

- Added sizes to `Loading`
- Added sizes to `Tooltip`
- Fixed missing loading state in `FeedbackForm`

## 0.27.4

### Patch Changes

- Made usernameOptions optional in `RegisterForm`
- `FeedbackForm` : add min-h for the textarea

## 0.27.3

### Patch Changes

- Removed padding when `cardless` is true for `ContactForm` and `FeedbackForm`
- Fixed label spacing in `FeedbackForm`
- Fixed textarea submission for `FeedbackForm`

## 0.27.2

### Patch Changes

- `Loading`: progress design now inherits the global `--radius` CSS variable

## 0.27.1

### Patch Changes

- Fixed textarea height in `ContactForm`

## 0.27.0

### Patch Changes

- Fixed max height UI issue in `CodeBlock`

## 0.26.41

### Patch Changes

- Added `usernameOptions` in `RegisterForm` to allow consumer to customize the username field.

## 0.26.40

### Patch Changes

- Fixed `DropdownMenu` height exceeding the screen.

## 0.26.39

### Patch Changes

- Exported `TextFieldTypes`
- `ContactForm` block now accepts `customFields` to allow consumer to add their own custom fields.

## 0.26.35

### Patch Changes

- `Loading`: added classnames for `container`, `track`, and `car` to customize loading designs

## 0.26.22

### Patch Changes

- Fixed RTL width issue in `ColorPicker`
- Optimized internal import aliases

## 0.26.20

### Patch Changes

- Added `embla-carousel` as a devDependency
- Fixed types for `useDialogCarousel` hook

## 0.26.19

### Patch Changes

- General cleanup
- Created a `util` folder containing all the utility files

## 0.26.19

### Patch Changes

- Allowed hiding a column by default in `DataTable` using `meta: { hidden: true }`

## 0.26.17

### Patch Changes

- Updated dependencies

## 0.26.16

### Patch Changes

- Fixed `DropDownMenu` items array props

## 0.26.5

### Patch Changes

- Minor fixes & cleanup

## 0.26.4

### Patch Changes

- Updated `Textarea` classNames
- Fixed all className uses of `Textarea` in other components
- Fixed `Radio` label color in dark mode
- Fixed `helperText` in `Signature`

## 0.26.2

### Patch Changes

- Added `--constant-background` global variable
- Made `Signature` background color constant regardless of color mode
- Added `helperText` to `Signature` for validation

## 0.26.1

### Patch Changes

- Added `Label` to `Signature`
- Added `texts` object prop to `Signature` to enable consumer based texts

## 0.26.0

### Minor Changes

- Added `Signature` component for users to draw their signature.

## 0.25.2

### Patch Changes

- Updated packages
- Updated `Carousel` props
- General cleanup

## 0.25.1

### Patch Changes

- `PinInput`: now shows numeric keyboard on phone
- Exported `Glow` to be built via `tsup`
- Replaced `tsup.config.ts` with `tsup.config.js`

## 0.25.0

### Minor Changes

- Added `Glow` component that can be used to apply glow effect on it's children

## 0.24.15

### Patch Changes

- `Label`: fixed clicking on the hint submits a form
- `Label`: fixed clicking tab to go to the next field in a form accidentally focuses on the hint icon

## 0.24.14

### Patch Changes

- Fixed `CommandInput` direction
- Fixed margins of check mark of `CommandItem` in `Combobox`

## 0.24.13

### Patch Changes

- `Combobox`: fixed text color from primary to pure white/black

## 0.24.12

### Patch Changes

- `Combobox`: added `RTL` support
- Fixed icon spacing in `CommandInput`

## 0.24.11

### Patch Changes

- `Radio`: fixed full width when `bordered` design
- `Radio`: disabled selecting text when design is `bordered`
- `Checkbox`: fixed line height of `label`
- General cleanup

## 0.24.10

### Patch Changes

- Replaced all references of `onChangeTab` to `onChange`

## 0.24.9

### Patch Changes

- Added `name` prop to `Radio` component
- Change `onChangeTab` to `onChange`
- Added handling change to all types of `Radio`

## 0.24.8

### Patch Changes

- Fixed missing translation of soon `Chip` in `PricingCard`

## 0.24.7

### Patch Changes

- `AppTabs`: fixed horizontal align of icon and label in a single tab

## 0.24.6

### Patch Changes

- `AppTabs`: fixed inactive tab hover color
- `ItemCard`: fixed spaceing when height is larger
- `ItemCard`: fixed UI when in RTL direction

## 0.24.5

### Patch Changes

- Fixed background color of `AppTabs`
- Codesplitting `Layout` components each component in it's own folder
- Updated the build process for `Layout` components to be grouped 3 at a time during build
- Updated story imports

## 0.24.4

### Patch Changes

- Added click handling to `AppTabs`

## 0.24.3

### Patch Changes

- Changed `content` type to `React.ReactNode`
- Tested nesting an `Accordion` inside an `Accordion` content field.

## 0.24.2

### Patch Changes

- Added `sm` and `default` sizes to `Toaster`
- Updated the way `Toast`, `ToastTitle`, `ToastDescription`, and `ToastClose` are styled and moved the conditional styling to `Toaster`

## 0.24.1

### Patch Changes

- Organized tsup configuration
- Added `clickable` prop to `Stats`
- Added `type='button'` to `Combobox` to fix submit behavior while in form
- Updated dependencies

## 0.24.0

### Minor Changes

- Improved imports in all stories
- Removed unused story docs
- `Elements` bundling code is now more readable
- Optimized imports within `Navbar`, `Sidebar`, `Stats`, `AppLayout`, `LandingCard`, `PricingCard`, `DestroyableCard`, and `AppTopbar`

## 0.23.11

### Patch Changes

- Code splitting the following components: `Carousel`, `CodeBlock`,`Collapsible`,`ColorPicker`,`DestroyableCard`,`FileUploader`,`InterfaceSettings`,`Pagination`,`PasswordInput`,`ProgressCircle`,`ScrollIndicator`,`Separator`,`SimpleTable`,`Slider`,`Toast`, `Toaster`

## 0.23.10

### Patch Changes

- Fixed clearing `dist` folder on each build

## 0.23.9

### Patch Changes

- Included `blocks` and `layout` to the build process

## 0.23.7

### Patch Changes

- Removed `--dts` flag from `build-lib` script
- Attempting to fix out-of-memory build issue

## 0.23.6

### Patch Changes

- Code splitting `ScrollArea`
- General cleanup

## 0.23.5

### Patch Changes

- Code splitting `PinInput`, `PhoneInput`, and `StopPropagationWrapper`

## 0.23.4

### Patch Changes

8ba2587: - Moved `Chip` to it's own folder

- Moved `Breadcrumb` to it's own folder
- Moved `AppStores` to it's own folder
- Moved `Badge` to it's own folder

## 0.23.3

### Patch Changes

- Improved size of `NoPermission` and `ResetPassword` blocks

## 0.23.2

### Patch Changes

- Moved `Checkbox` to it's own folder
- Moved `Switch` to it's own folder

## 0.23.1

### Patch Changes

- Moved `Popover` to it's own folder
- Improved the imports within `Comobobox`

## 0.23.0

### Minor Changes

- Updated `tsup.config.ts`
- Splitting the bundling process by `tsup` to prevent no-memory breaking error

## 0.22.8

### Patch Changes

- Moved `Input` to it's own exported folder

## 0.22.7

### Patch Changes

- Moved `Tabs` to it's own folder
- Updated `tsup` configuration

## 0.22.6

### Patch Changes

- Moved `Combobox` to it's own folder
- Updated `hawa-beta.yml` github action file

## 0.22.5

### Patch Changes

- moved `Alert` to it's own folder
- moved `FileDropzone` to it's own folder
- moved `Table` to it's own folder
- moved `DataTable` to it's own folder
- moved `Label` to it's own folder
- moved `BackToTop` to it's own folder
- moved `Avatar` to it's own folder
- moved `Textarea` to it's own folder

## 0.22.4

### Patch Changes

- Updated packages

## 0.22.3

### Patch Changes

- Exporting `Radio` individually

## 0.22.2

### Patch Changes

- Fixed types in `PricingPlans` block
- Exporting `Alert` individually

## 0.22.1

### Patch Changes

- Exported `/types` to be imported by consumer via `@sikka/hawa/types`
- Organized types within `/blocks/pricing`

## 0.22.0

### Minor Changes

- `blocks` can now be imported via `@sikka/hawa/blocks`
- auth blocks can now be imported via `@sikka/hawa/blocks/auth`
- feedback blocks can now be imported via `@sikka/hawa/blocks/feedback`
- pricing blocks can now be imported via `@sikka/hawa/blocks/pricing`
- misc blocks can now be imported via `@sikka/hawa/blocks/misc`
- `elements` can now be imported via `@sikka/hawa/elements`
- `layout` can now be imported via `@sikka/hawa/layout`

## 0.21.15

### Patch Changes

- Moved `Logos` to it's own folder

## 0.21.14

### Patch Changes

- Moved `Card` to it's own folder

## 0.21.13

### Patch Changes

- Moved `Tooltip` to it's own folder
- Moved `hooks` to `/hooks` folder

## 0.21.12

### Patch Changes

- Moved `NavigationMenu` to it's own folder

## 0.21.11

### Patch Changes

- Split all `Accordion` subcomponents to seperate files
- Moved `DropdownMenu` to it's own folder
- Moved `Sheet` to it's own folder

## 0.21.10

### Patch Changes

- Moved `SplitButton` to its own directory
- Updated exports in `package.json`

## 0.21.9

### Patch Changes

- Moved `Skeleton` to a separate directory

## 0.21.8

### Patch Changes

- Added `/Button` export to `package.json`

## 0.21.7

### Patch Changes

- Fixing build issue

## 0.21.6

### Patch Changes

- Moved `Button` and `SplitButton` and `SortButton` to `/elements/Button` folder

## 0.21.5

### Patch Changes

- Added `DropdownMenuRadio` to a storybook
- Fixed cursor design in `DropdownMenuRadio`

## 0.21.4

### Patch Changes

- Added `unstyled` to `AccordionTrigger` and `AccordionContent`
- Added `hideArrow` to `AccordionTrigger` to hide arrow

## 0.21.3

### Patch Changes

- Fixed `ContactForm` width on mobile

## 0.21.2

### Patch Changes

- Added `chip` prop to `Accordion` item [#SIKKA-5849](https://app.clickup.com/t/613523/SIKKA-5849)

## 0.21.1

### Patch Changes

- Updated imports to use aliases
- General cleanup

## 0.21.0

### Minor Changes

- Added `prettier-plugin-tailwindcss`
- Added `@trivago/prettier-plugin-sort-imports`
- Cleaned up

## 0.20.10

### Patch Changes

- Added `actionFirst` prop to `NavigationMenu` for router usage in next.js apps

## 0.20.8

### Patch Changes

- `ContactForm` now resets on submision

## 0.20.7

### Patch Changes

- Updated dependencies
- Fixed the way IBM Plex Sans Arabic is applied

## 0.20.6

### Patch Changes

- Removing IBM font references

## 0.20.5

### Patch Changes

- Added `formId` to `ContactForm`
- Added `formAutoComplete` to `ContactForm`
- Added `disabled` to `AccordionTrigger`
- Exported `AccordionItemProps` type

## 0.20.4

### Patch Changes

- Exposed `triggerClassNames` in `NavigationMenu`

## 0.20.3

### Patch Changes

- Updated storybook
- Fixed default design of `Accordion`

## 0.20.2

### Patch Changes

- Added `Separated` variant to `Accordion`

## 0.20.1

### Patch Changes

- Fixed close button in `Sheet`

## 0.20.0

### Minor Changes

- Added `ContactForm`
- Fixed `Textarea` placeholder text color
- Removed all shadows of `FeedbackForm` and `ContactForm` when `cardless` prop is true
- exporting `TextInputType`
- General cleanup

## 0.19.41

### Patch Changes

- Minor cleanup

## 0.19.40

### Patch Changes

- Added sizes to `Radio` tabs

## 0.19.39

### Patch Changes

- Added background to `Radio`
- Fixed responsiveness of `PricingPlans`
- Added priceless option to `PricingCard`

## 0.19.38

### Patch Changes

- ComparingPlans: added background to scroll area

## < 0.19.38

- [131524b4](https://github.com/sikka-software/Hawa/commit/131524b4) - 2023-11-29 - fix(build): ts error in build-lib
- [3bc735c1](https://github.com/sikka-software/Hawa/commit/3bc735c1) - 2023-11-29 - Fix(Icons): sizes and classname application
- [a5202ed2](https://github.com/sikka-software/Hawa/commit/a5202ed2) - 2023-11-28 - Minor UI fixes + translations
- [6debb019](https://github.com/sikka-software/Hawa/commit/6debb019) - 2023-11-28 - Minor UI fixes
- [8f9ca773](https://github.com/sikka-software/Hawa/commit/8f9ca773) - 2023-11-28 - Updated types + cleanup
- [8dc417ae](https://github.com/sikka-software/Hawa/commit/8dc417ae) - 2023-11-28 - SIKKA-5814[closed]
- [aee69b50](https://github.com/sikka-software/Hawa/commit/aee69b50) - 2023-11-28 - added topPosition prop to ComparingPlans
- [d585d00d](https://github.com/sikka-software/Hawa/commit/d585d00d) - 2023-11-28 - Fixing comparingplans
- [6381b6e3](https://github.com/sikka-software/Hawa/commit/6381b6e3) - 2023-11-28 - #86bwjjtzf[closed]
- [64d269c0](https://github.com/sikka-software/Hawa/commit/64d269c0) - 2023-11-27 - #86bwjju5g[closed]
- [d36e0431](https://github.com/sikka-software/Hawa/commit/d36e0431) - 2023-11-27 - fix(ComparingPlans): fixed colors
- [42122b03](https://github.com/sikka-software/Hawa/commit/42122b03) - 2023-11-27 - fix(ComparingPlans): fixing white and black hex
- [5ec2a907](https://github.com/sikka-software/Hawa/commit/5ec2a907) - 2023-11-27 - fix(ComparingPlans) : updated colors in darkmode
- [62e7d03f](https://github.com/sikka-software/Hawa/commit/62e7d03f) - 2023-11-27 - Update package.json
- [5f5211fc](https://github.com/sikka-software/Hawa/commit/5f5211fc) - 2023-11-27 - SIKKA-5803[closed]
- [56296df9](https://github.com/sikka-software/Hawa/commit/56296df9) - 2023-11-27 - updating comparing plans component
- [7ff3491a](https://github.com/sikka-software/Hawa/commit/7ff3491a) - 2023-11-27 - fix(ComparingPlans): table works fine now
- [9148fade](https://github.com/sikka-software/Hawa/commit/9148fade) - 2023-11-27 - Fix(Icons): fixed missing React import
- [d60bc215](https://github.com/sikka-software/Hawa/commit/d60bc215) - 2023-11-26 - fix(PricingPlans): fixed price issue
- [11dc1b21](https://github.com/sikka-software/Hawa/commit/11dc1b21) - 2023-11-26 - fix(PricingPlans): value of currentCycle
- [46e8d30d](https://github.com/sikka-software/Hawa/commit/46e8d30d) - 2023-11-25 - SIKKA-5798[closed]
- [13aaadc2](https://github.com/sikka-software/Hawa/commit/13aaadc2) - 2023-11-25 - #86bwhxwva[closed] - #86bwhxwu5[closed]
- [4665124c](https://github.com/sikka-software/Hawa/commit/4665124c) - 2023-11-25 - SIKKA-5794[closed]
- [b9ce2ad4](https://github.com/sikka-software/Hawa/commit/b9ce2ad4) - 2023-11-24 - SIKKA-5792[closed]
- [68152931](https://github.com/sikka-software/Hawa/commit/68152931) - 2023-11-24 - SIKKA-5793[closed]
- [3a9d1a09](https://github.com/sikka-software/Hawa/commit/3a9d1a09) - 2023-11-24 - SIKKA-5791[closed]
- [a68ddfd2](https://github.com/sikka-software/Hawa/commit/a68ddfd2) - 2023-11-24 - chore: fixed Radio return value
- [7913b860](https://github.com/sikka-software/Hawa/commit/7913b860) - 2023-11-24 - SIKKA-5789[closed]
- [6b2c8bc4](https://github.com/sikka-software/Hawa/commit/6b2c8bc4) - 2023-11-24 - SIKKA-5787[closed]
- [98b853c5](https://github.com/sikka-software/Hawa/commit/98b853c5) - 2023-11-24 - SIKKA-5781[closed]
- [2c41f35d](https://github.com/sikka-software/Hawa/commit/2c41f35d) - 2023-11-24 - SIKKA-5775[closed]
- [09142ceb](https://github.com/sikka-software/Hawa/commit/09142ceb) - 2023-11-23 - fix: pricing plans currency/cycle
- [6d4efe28](https://github.com/sikka-software/Hawa/commit/6d4efe28) - 2023-11-23 - chore: fixed `PricingPlans`
- [b7b0d756](https://github.com/sikka-software/Hawa/commit/b7b0d756) - 2023-11-22 - Fixed many warnings
- [03809097](https://github.com/sikka-software/Hawa/commit/03809097) - 2023-11-21 - SIKKA-5751[closed]
- [6c116e15](https://github.com/sikka-software/Hawa/commit/6c116e15) - 2023-11-21 - #86bwgg6h0[closed]
- [239ae456](https://github.com/sikka-software/Hawa/commit/239ae456) - 2023-11-21 - #86bwgf2gc[closed]
- [c035750c](https://github.com/sikka-software/Hawa/commit/c035750c) - 2023-11-21 - SIKKA-5748[closed] - #86bwgfpyc[closed]
- [f1e53de5](https://github.com/sikka-software/Hawa/commit/f1e53de5) - 2023-11-21 - SIKKA-5746[closed]
- [55d22998](https://github.com/sikka-software/Hawa/commit/55d22998) - 2023-11-20 - Minor fixes
- [619ed569](https://github.com/sikka-software/Hawa/commit/619ed569) - 2023-11-20 - SIKKA-5735[closed]
- [65cfb4ae](https://github.com/sikka-software/Hawa/commit/65cfb4ae) - 2023-11-20 - SIKKA-5734[closed]
- [0ecf5175](https://github.com/sikka-software/Hawa/commit/0ecf5175) - 2023-11-20 - SIKKA-5731[closed]
- [9a175c07](https://github.com/sikka-software/Hawa/commit/9a175c07) - 2023-11-20 - Testing out multilang input
- [d5feda28](https://github.com/sikka-software/Hawa/commit/d5feda28) - 2023-11-18 - SIKKA-5722[closed]
- [eb446f77](https://github.com/sikka-software/Hawa/commit/eb446f77) - 2023-11-18 - SIKKA-5718[closed] - SIKKA-5717[closed]
- [a5869dd7](https://github.com/sikka-software/Hawa/commit/a5869dd7) - 2023-11-18 - SIKKA-5707[closed]
- [9c7793bc](https://github.com/sikka-software/Hawa/commit/9c7793bc) - 2023-11-18 - SIKKA-5705[closed]
- [96e1b9a2](https://github.com/sikka-software/Hawa/commit/96e1b9a2) - 2023-11-17 - #86bwfe5pd[closed] - #86bwfe5pm[closed]
- [22180fc2](https://github.com/sikka-software/Hawa/commit/22180fc2) - 2023-11-16 - #86bwf2uua[closed]
- [8715cf21](https://github.com/sikka-software/Hawa/commit/8715cf21) - 2023-11-15 - SIKKA-5699[closed]
- [39ca8b7f](https://github.com/sikka-software/Hawa/commit/39ca8b7f) - 2023-11-15 - SIKKA-5702[closed]
- [4e59e039](https://github.com/sikka-software/Hawa/commit/4e59e039) - 2023-11-15 - SIKKA-5700[closed] - #86bweb77f[closed] - #86bwebavm[closed]
- [1473a200](https://github.com/sikka-software/Hawa/commit/1473a200) - 2023-11-15 - attempting to fix classe for switch
- [b8663c77](https://github.com/sikka-software/Hawa/commit/b8663c77) - 2023-11-15 - attempting to fix color of Switch
- [500c5c74](https://github.com/sikka-software/Hawa/commit/500c5c74) - 2023-11-15 - #86bweb77f[in progress]
- [05f6dd73](https://github.com/sikka-software/Hawa/commit/05f6dd73) - 2023-11-15 - SIKKA-5689[closed]
- [6516b4d7](https://github.com/sikka-software/Hawa/commit/6516b4d7) - 2023-11-15 - #86bweadfg[closed]
- [a4484493](https://github.com/sikka-software/Hawa/commit/a4484493) - 2023-11-13 - SIKKA-5685[closed]
- [f90cfd42](https://github.com/sikka-software/Hawa/commit/f90cfd42) - 2023-11-13 - SIKKA-5641[closed]
- [3bac7277](https://github.com/sikka-software/Hawa/commit/3bac7277) - 2023-11-12 - Update package.json
- [e29c1661](https://github.com/sikka-software/Hawa/commit/e29c1661) - 2023-11-12 - SIKKA-5660[closed]
- [63595b34](https://github.com/sikka-software/Hawa/commit/63595b34) - 2023-11-12 - SIKKA-5671[closed]
- [e447bbf6](https://github.com/sikka-software/Hawa/commit/e447bbf6) - 2023-11-12 - Fixing DropdownMenu anchor href
- [9a5b8dcb](https://github.com/sikka-software/Hawa/commit/9a5b8dcb) - 2023-11-12 - SIKKA-5670[closed]
- [55b4afc2](https://github.com/sikka-software/Hawa/commit/55b4afc2) - 2023-11-12 - SIKKA-5650[closed]
- [75e765d2](https://github.com/sikka-software/Hawa/commit/75e765d2) - 2023-11-12 - SIKKA-5654[closed]
- [7e4247d7](https://github.com/sikka-software/Hawa/commit/7e4247d7) - 2023-11-12 - SIKKA-5659[closed]
- [dd52d912](https://github.com/sikka-software/Hawa/commit/dd52d912) - 2023-11-12 - SIKKA-5665[closed]
- [ef483914](https://github.com/sikka-software/Hawa/commit/ef483914) - 2023-11-12 - SIKKA-5669[closed]
- [20bad6fc](https://github.com/sikka-software/Hawa/commit/20bad6fc) - 2023-11-12 - Fixed chart issue in stats + other fixes
- [8a90bfe3](https://github.com/sikka-software/Hawa/commit/8a90bfe3) - 2023-11-10 - Update package.json
- [800e14b4](https://github.com/sikka-software/Hawa/commit/800e14b4) - 2023-11-08 - Updated TS props for Auth blocks
- [e38a7964](https://github.com/sikka-software/Hawa/commit/e38a7964) - 2023-11-08 - Moved `InterfaceSettings` outside Auth blocks
- [731abfa1](https://github.com/sikka-software/Hawa/commit/731abfa1) - 2023-11-08 - Fixed `AppLayout` props
- [12fd89bd](https://github.com/sikka-software/Hawa/commit/12fd89bd) - 2023-11-08 - SIKKA-5614[completed]
- [9689b0d1](https://github.com/sikka-software/Hawa/commit/9689b0d1) - 2023-11-08 - SIKKA-5615[completed]
- [2e3cb12c](https://github.com/sikka-software/Hawa/commit/2e3cb12c) - 2023-11-08 - Updated packages
- [c3953bae](https://github.com/sikka-software/Hawa/commit/c3953bae) - 2023-11-08 - SIKKA-5621[completed] SIKKA-5620[completed]
- [7faf6e96](https://github.com/sikka-software/Hawa/commit/7faf6e96) - 2023-11-08 - #86bwcdn04[completed]
- [a629fc20](https://github.com/sikka-software/Hawa/commit/a629fc20) - 2023-11-08 - Moved typescript to devDependency
- [d9043d76](https://github.com/sikka-software/Hawa/commit/d9043d76) - 2023-11-07 - SIKKA-5589[completed] + updated package.json
- [216a9d88](https://github.com/sikka-software/Hawa/commit/216a9d88) - 2023-11-07 - SIKKA-5612[completed]
- [83607ef1](https://github.com/sikka-software/Hawa/commit/83607ef1) - 2023-11-07 - SIKKA-5598[completed]
- [4780dba4](https://github.com/sikka-software/Hawa/commit/4780dba4) - 2023-11-07 - Added tsup config file
- [93b97d1b](https://github.com/sikka-software/Hawa/commit/93b97d1b) - 2023-11-06 - changed label hint icon to question mark
- [249bb142](https://github.com/sikka-software/Hawa/commit/249bb142) - 2023-11-06 - Fixed Table warnings
- [8f18fa1c](https://github.com/sikka-software/Hawa/commit/8f18fa1c) - 2023-11-06 - Added forwardRef for Input component
- [012ad7e6](https://github.com/sikka-software/Hawa/commit/012ad7e6) - 2023-11-06 - Updated onMiddleClick in DropDownMenu
- [9bb5acbb](https://github.com/sikka-software/Hawa/commit/9bb5acbb) - 2023-11-06 - added middle click to dropdown menu items/subitems
- [d8be282b](https://github.com/sikka-software/Hawa/commit/d8be282b) - 2023-11-06 - Fixed onMouseDown in drawer subitem
- [f3195e9a](https://github.com/sikka-software/Hawa/commit/f3195e9a) - 2023-11-06 - Added onMouseDown for item.subitems in AppLayout
- [181eaf76](https://github.com/sikka-software/Hawa/commit/181eaf76) - 2023-11-06 - Added onMouseDown to drawer items in AppLayout
- [60f70b6f](https://github.com/sikka-software/Hawa/commit/60f70b6f) - 2023-11-06 - Fixed Stats helperText & props
- [76f36ab6](https://github.com/sikka-software/Hawa/commit/76f36ab6) - 2023-11-06 - Changed onClick to onMouseDown in AppLayout + Stats
- [a05a98d6](https://github.com/sikka-software/Hawa/commit/a05a98d6) - 2023-11-06 - SIKKA-5605[completed]
- [1cc814cc](https://github.com/sikka-software/Hawa/commit/1cc814cc) - 2023-11-05 - Update package.json
- [2c3b4d3a](https://github.com/sikka-software/Hawa/commit/2c3b4d3a) - 2023-11-05 - SIKKA-5597
- [4ac9b65d](https://github.com/sikka-software/Hawa/commit/4ac9b65d) - 2023-11-05 - SIKKA-5596[completed]
- [d80dbc4e](https://github.com/sikka-software/Hawa/commit/d80dbc4e) - 2023-11-05 - Finished regular DialogSteps
- [a9151406](https://github.com/sikka-software/Hawa/commit/a9151406) - 2023-11-05 - SIKKA-5594[completed] - #86bwbedtf[completed] - SIKKA-5587[completed]
- [4f0f98f1](https://github.com/sikka-software/Hawa/commit/4f0f98f1) - 2023-11-05 - SIKKA-5593[completed]
- [76b08c58](https://github.com/sikka-software/Hawa/commit/76b08c58) - 2023-11-04 - added FileUploader story
- [1b8cdb59](https://github.com/sikka-software/Hawa/commit/1b8cdb59) - 2023-11-04 - SIKKA-5580[completed]
- [8179378b](https://github.com/sikka-software/Hawa/commit/8179378b) - 2023-11-04 - SIKKA-5579[completed]
- [ac004313](https://github.com/sikka-software/Hawa/commit/ac004313) - 2023-11-04 - Fixed Email input when RTL
- [d746d587](https://github.com/sikka-software/Hawa/commit/d746d587) - 2023-11-04 - Added Auth booleans for loading status
- [62523890](https://github.com/sikka-software/Hawa/commit/62523890) - 2023-11-04 - Fixed stroke-width warning
- [f2d47053](https://github.com/sikka-software/Hawa/commit/f2d47053) - 2023-11-04 - Minor warning fixes
- [0b833f40](https://github.com/sikka-software/Hawa/commit/0b833f40) - 2023-11-03 - Fixed build
- [689dfd91](https://github.com/sikka-software/Hawa/commit/689dfd91) - 2023-11-03 - SIKKA-5572[completed]
- [e34ba17b](https://github.com/sikka-software/Hawa/commit/e34ba17b) - 2023-11-03 - Updated table stories
- [92cd33be](https://github.com/sikka-software/Hawa/commit/92cd33be) - 2023-11-03 - Minor Table update
- [89ebb984](https://github.com/sikka-software/Hawa/commit/89ebb984) - 2023-11-03 - Updated SimpleTable
- [67fde529](https://github.com/sikka-software/Hawa/commit/67fde529) - 2023-11-03 - SIKKA-5571[completed]
- [f4572deb](https://github.com/sikka-software/Hawa/commit/f4572deb) - 2023-11-03 - Updated Radio to avoid throwing error
- [d7f7cb69](https://github.com/sikka-software/Hawa/commit/d7f7cb69) - 2023-11-03 - Attempting to fix AppLayout zIndex
- [2580c5eb](https://github.com/sikka-software/Hawa/commit/2580c5eb) - 2023-11-03 - Minor fixes
- [9b591b52](https://github.com/sikka-software/Hawa/commit/9b591b52) - 2023-11-03 - incremented version
- [a5afc727](https://github.com/sikka-software/Hawa/commit/a5afc727) - 2023-11-03 - SIKKA-5560[completed]
- [df232a76](https://github.com/sikka-software/Hawa/commit/df232a76) - 2023-11-03 - SIKKA-5553[completed]
- [dd19e011](https://github.com/sikka-software/Hawa/commit/dd19e011) - 2023-11-03 - SIKKA-5557[completed]
- [c467aad8](https://github.com/sikka-software/Hawa/commit/c467aad8) - 2023-11-03 - SIKKA-5562[completed]
- [877ea111](https://github.com/sikka-software/Hawa/commit/877ea111) - 2023-11-02 - Updated `Badge` component
- [77746126](https://github.com/sikka-software/Hawa/commit/77746126) - 2023-11-02 - Finished fixing `PricingCard`
- [264e66c6](https://github.com/sikka-software/Hawa/commit/264e66c6) - 2023-11-02 - Added `onAlertClosed` prop to `Alert`
- [5da285ec](https://github.com/sikka-software/Hawa/commit/5da285ec) - 2023-11-02 - Minor fixes + story updates
- [0440441d](https://github.com/sikka-software/Hawa/commit/0440441d) - 2023-11-02 - Major cleanup
- [6022a5cb](https://github.com/sikka-software/Hawa/commit/6022a5cb) - 2023-11-02 - Minor updates + cleanup
- [96d6fe43](https://github.com/sikka-software/Hawa/commit/96d6fe43) - 2023-11-02 - #SIKKA-5510[completed]
- [05ec2876](https://github.com/sikka-software/Hawa/commit/05ec2876) - 2023-11-02 - #SIKKA-4903[completed] - added AppTabs
- [24f02821](https://github.com/sikka-software/Hawa/commit/24f02821) - 2023-11-02 - #SIKKA-5507[completed]
- [047fa68a](https://github.com/sikka-software/Hawa/commit/047fa68a) - 2023-11-02 - #SIKKA-5355[completed]
- [fdec760f](https://github.com/sikka-software/Hawa/commit/fdec760f) - 2023-11-02 - #SIKKA-5533[completed]
- [07dcee57](https://github.com/sikka-software/Hawa/commit/07dcee57) - 2023-11-02 - #SIKKA-5541[completed] - added autoplay to carousel
- [5de1feee](https://github.com/sikka-software/Hawa/commit/5de1feee) - 2023-11-02 - #SIKKA-5542[completed] - Fixed AppStore badge
- [ab206eea](https://github.com/sikka-software/Hawa/commit/ab206eea) - 2023-11-01 - #SIKKA-5543[completed] - Fixed phone input
- [c80ed658](https://github.com/sikka-software/Hawa/commit/c80ed658) - 2023-11-01 - #SIKKA-5544[completed]
- [495c1690](https://github.com/sikka-software/Hawa/commit/495c1690) - 2023-11-01 - #SIKKA-5545[completed]
- [88e109ce](https://github.com/sikka-software/Hawa/commit/88e109ce) - 2023-11-01 - Fixed `PhoneInput` + Standardized Icon size
- [f74fb5a9](https://github.com/sikka-software/Hawa/commit/f74fb5a9) - 2023-11-01 - Minor UI Fix in `AppLayout`
- [6501048e](https://github.com/sikka-software/Hawa/commit/6501048e) - 2023-11-01 - Fixed Dropdownmenu alignment in DataTable
- [30a3b6a9](https://github.com/sikka-software/Hawa/commit/30a3b6a9) - 2023-11-01 - Fixed condition in DataTable
- [d103a3a3](https://github.com/sikka-software/Hawa/commit/d103a3a3) - 2023-11-01 - Updated DataTable
- [3b639a48](https://github.com/sikka-software/Hawa/commit/3b639a48) - 2023-11-01 - #SIKKA-5208[completed]
- [15cf3a8f](https://github.com/sikka-software/Hawa/commit/15cf3a8f) - 2023-11-01 - Cleanup
- [f4478c27](https://github.com/sikka-software/Hawa/commit/f4478c27) - 2023-11-01 - #SIKKA-5527[completed] AppLayout header + cleanup
- [e9b66cbf](https://github.com/sikka-software/Hawa/commit/e9b66cbf) - 2023-11-01 - #SIKKA-5539[completed]
- [7df33658](https://github.com/sikka-software/Hawa/commit/7df33658) - 2023-11-01 - #SIKKA-5057[completed]
- [81ba6c2c](https://github.com/sikka-software/Hawa/commit/81ba6c2c) - 2023-11-01 - #SIKKA-5528[completed]
- [08e2e1cd](https://github.com/sikka-software/Hawa/commit/08e2e1cd) - 2023-11-01 - Fixed helpertexts
- [2324d312](https://github.com/sikka-software/Hawa/commit/2324d312) - 2023-11-01 - #SIKKA-5538[completed] fixed helperText in Combobox
- [fb29db14](https://github.com/sikka-software/Hawa/commit/fb29db14) - 2023-11-01 - Fixed alert tests
- [0f3c4b43](https://github.com/sikka-software/Hawa/commit/0f3c4b43) - 2023-11-01 - #SIKKA-5526[completed]
- [2593d7e9](https://github.com/sikka-software/Hawa/commit/2593d7e9) - 2023-11-01 - Added Jest testing
- [f397c017](https://github.com/sikka-software/Hawa/commit/f397c017) - 2023-10-31 - #SIKKA-5537[completed] - Updated Alert
- [8930cf31](https://github.com/sikka-software/Hawa/commit/8930cf31) - 2023-10-31 - #SIKKA-5536[completed]
- [4640aba5](https://github.com/sikka-software/Hawa/commit/4640aba5) - 2023-10-31 - Fixed missing react from icons file
- [f1bb0a7f](https://github.com/sikka-software/Hawa/commit/f1bb0a7f) - 2023-10-31 - #SIKKA-4661[completed]
- [0f855ddc](https://github.com/sikka-software/Hawa/commit/0f855ddc) - 2023-10-30 - #SIKKA-5519[in progress]
- [66315b16](https://github.com/sikka-software/Hawa/commit/66315b16) - 2023-10-30 - #SIKKA-5505[completed] - updated to next@14
- [b490c2b2](https://github.com/sikka-software/Hawa/commit/b490c2b2) - 2023-10-30 - #SIKKA-5517[completed]
- [8939f56d](https://github.com/sikka-software/Hawa/commit/8939f56d) - 2023-10-30 - #SIKKA-5531[completed]
- [6b6fce03](https://github.com/sikka-software/Hawa/commit/6b6fce03) - 2023-10-30 - #SIKKA-5524[completed]
- [3129353d](https://github.com/sikka-software/Hawa/commit/3129353d) - 2023-10-30 - #SIKKA-5529[completed]
- [3eff4052](https://github.com/sikka-software/Hawa/commit/3eff4052) - 2023-10-30 - #SIKKA-5530[completed]
- [3a9c3905](https://github.com/sikka-software/Hawa/commit/3a9c3905) - 2023-10-30 - #SIKKA-4949[completed]
- [ac39b49a](https://github.com/sikka-software/Hawa/commit/ac39b49a) - 2023-10-30 - #SIKKA-5131[completed]
- [70f38ef5](https://github.com/sikka-software/Hawa/commit/70f38ef5) - 2023-10-30 - #SIKKA-5523[completed] + cleanup
- [805d546f](https://github.com/sikka-software/Hawa/commit/805d546f) - 2023-10-29 - Added common types + other improvements
- [b87d3d90](https://github.com/sikka-software/Hawa/commit/b87d3d90) - 2023-10-29 - finished fixing AppLayout component
- [5e4deb79](https://github.com/sikka-software/Hawa/commit/5e4deb79) - 2023-10-29 - #SIKKA-5275[completed]
- [dc23cd3f](https://github.com/sikka-software/Hawa/commit/dc23cd3f) - 2023-10-29 - Updating AppLayout + added AppTopbar + AppMenubar
- [535d9d17](https://github.com/sikka-software/Hawa/commit/535d9d17) - 2023-10-29 - Attempting to fix AppLayout
- [de323978](https://github.com/sikka-software/Hawa/commit/de323978) - 2023-10-29 - another attempt fixing useBreakpoint
- [02899f58](https://github.com/sikka-software/Hawa/commit/02899f58) - 2023-10-29 - attempting to fix useBreakpoint
- [157ca409](https://github.com/sikka-software/Hawa/commit/157ca409) - 2023-10-29 - Minor fixes and updated docs
- [1482f71d](https://github.com/sikka-software/Hawa/commit/1482f71d) - 2023-10-28 - #SIKKA-5282[completed]
- [cd11f8f6](https://github.com/sikka-software/Hawa/commit/cd11f8f6) - 2023-10-28 - #SIKKA-4769[completed] - finished ScrollIndicator
- [1bd9de57](https://github.com/sikka-software/Hawa/commit/1bd9de57) - 2023-10-28 - #SIKKA-4769[completed] - Added ScrollIndicator
- [8415a5ee](https://github.com/sikka-software/Hawa/commit/8415a5ee) - 2023-10-28 - #SIKKA-5185[completed] - DataTable: added go to page
- [2393b0c6](https://github.com/sikka-software/Hawa/commit/2393b0c6) - 2023-10-28 - #SIKKA-5183[completed] - Updated DataTable
- [3c93fbf8](https://github.com/sikka-software/Hawa/commit/3c93fbf8) - 2023-10-28 - Added SplitButton component
- [d68d2f82](https://github.com/sikka-software/Hawa/commit/d68d2f82) - 2023-10-28 - #SIKKA-5513[completed] - Added SplitButton
- [261ef275](https://github.com/sikka-software/Hawa/commit/261ef275) - 2023-10-28 - #SIKKA-5514[completed] - added instagram icon to Logos
- [b1f58396](https://github.com/sikka-software/Hawa/commit/b1f58396) - 2023-10-28 - #SIKKA-5131[in progress] added gauge and other components
- [a543e891](https://github.com/sikka-software/Hawa/commit/a543e891) - 2023-10-27 - #SIKKA-4867[completed]
- [ee50cd88](https://github.com/sikka-software/Hawa/commit/ee50cd88) - 2023-10-27 - #SIKKA-5327[completed]
- [7f96cb89](https://github.com/sikka-software/Hawa/commit/7f96cb89) - 2023-10-27 - #SIKKA-5470[completed]
- [dc86d32e](https://github.com/sikka-software/Hawa/commit/dc86d32e) - 2023-10-27 - Added AccordionRoot component
- [5c439118](https://github.com/sikka-software/Hawa/commit/5c439118) - 2023-10-27 - Updated dependencies
- [aefa92ff](https://github.com/sikka-software/Hawa/commit/aefa92ff) - 2023-10-27 - #SIKKA-5340[completed]
- [64fe29ee](https://github.com/sikka-software/Hawa/commit/64fe29ee) - 2023-10-27 - Perventing default form validation skip_publish
- [d2d9ae79](https://github.com/sikka-software/Hawa/commit/d2d9ae79) - 2023-10-27 - #SIKKA-5340[in progress] - skip_publish skip_storybook
- [c55046bb](https://github.com/sikka-software/Hawa/commit/c55046bb) - 2023-10-27 - #SIKKA-5508[completed] - added DocsLayout
- [2e790335](https://github.com/sikka-software/Hawa/commit/2e790335) - 2023-10-27 - Updated DocsLayout
- [b6aaeb04](https://github.com/sikka-software/Hawa/commit/b6aaeb04) - 2023-10-27 - #SIKKA-5508[in progress] - working on DocsLayout
- [100c10b5](https://github.com/sikka-software/Hawa/commit/100c10b5) - 2023-10-26 - Restored next.js to 13.5.6 to fix build issue
- [15e1408a](https://github.com/sikka-software/Hawa/commit/15e1408a) - 2023-10-26 - #SIKKA-4649[in progress]
- [51d2ceb7](https://github.com/sikka-software/Hawa/commit/51d2ceb7) - 2023-10-26 - #SIKKA-5505[completed]
- [4f06e439](https://github.com/sikka-software/Hawa/commit/4f06e439) - 2023-10-26 - Updated some types
- [8ff1e01c](https://github.com/sikka-software/Hawa/commit/8ff1e01c) - 2023-10-26 - #SIKKA-5504[completed]
- [7a6faaf4](https://github.com/sikka-software/Hawa/commit/7a6faaf4) - 2023-10-26 - #SIKKA-5498[completed]
- [94fce808](https://github.com/sikka-software/Hawa/commit/94fce808) - 2023-10-26 - #SIKKA-5502[completed]
- [08eb61bd](https://github.com/sikka-software/Hawa/commit/08eb61bd) - 2023-10-26 - #SIKKA-5268[completed]
- [cbec93f7](https://github.com/sikka-software/Hawa/commit/cbec93f7) - 2023-10-26 - Updated packages using npm-check
- [eead31d2](https://github.com/sikka-software/Hawa/commit/eead31d2) - 2023-10-26 - #SIKKA-5493[completed]
- [52506908](https://github.com/sikka-software/Hawa/commit/52506908) - 2023-10-25 - #SIKKA-5497[completed]
- [fc878710](https://github.com/sikka-software/Hawa/commit/fc878710) - 2023-10-25 - #SIKKA-5270[completed]
- [9416b6ff](https://github.com/sikka-software/Hawa/commit/9416b6ff) - 2023-10-25 - #SIKKA-5494[completed] - hidden direction prop from story
- [6aa0073a](https://github.com/sikka-software/Hawa/commit/6aa0073a) - 2023-10-25 - #SIKKA-5492[completed] - Updated <Label/> component
- [9a161590](https://github.com/sikka-software/Hawa/commit/9a161590) - 2023-10-25 - #SIKKA-4867 - Removed "What's New" from Storybook
- [f48f581f](https://github.com/sikka-software/Hawa/commit/f48f581f) - 2023-10-25 - Minor Fixes
- [e4bc857c](https://github.com/sikka-software/Hawa/commit/e4bc857c) - 2023-10-25 - #SIKKA-5393 - added neobrutalism to card and button
- [b038209c](https://github.com/sikka-software/Hawa/commit/b038209c) - 2023-10-25 - #SIKKA-5447[completed] - Updated Storybook
- [36eeb4e8](https://github.com/sikka-software/Hawa/commit/36eeb4e8) - 2023-10-25 - #SIKKA-5482[completed] fixed Alert
- [730830de](https://github.com/sikka-software/Hawa/commit/730830de) - 2023-10-25 - Added more texts and other improvments to authblocks
- [6a15cac9](https://github.com/sikka-software/Hawa/commit/6a15cac9) - 2023-10-25 - Fixed texts object keys for RegisterForm
- [547f1b88](https://github.com/sikka-software/Hawa/commit/547f1b88) - 2023-10-25 - skip_publish
- [9fb7ebeb](https://github.com/sikka-software/Hawa/commit/9fb7ebeb) - 2023-10-23 - Working on make AppLayout state persistant on refresh
- [945ceb91](https://github.com/sikka-software/Hawa/commit/945ceb91) - 2023-10-23 - fixing app layout expansion default status
- [cba67d2f](https://github.com/sikka-software/Hawa/commit/cba67d2f) - 2023-10-23 - #SIKKA-5061[completed] - updated AppLayout
- [e5d6f032](https://github.com/sikka-software/Hawa/commit/e5d6f032) - 2023-10-23 - Fixed password length in LoginForm
- [607b965e](https://github.com/sikka-software/Hawa/commit/607b965e) - 2023-10-23 - Updated Navbar + LoginForm prop
- [1f0eb234](https://github.com/sikka-software/Hawa/commit/1f0eb234) - 2023-10-23 - #SIKKA-4661 - Created Navbar component
- [ce27a209](https://github.com/sikka-software/Hawa/commit/ce27a209) - 2023-10-23 - #SIKKA-5472[completed]
- [a79cbbd0](https://github.com/sikka-software/Hawa/commit/a79cbbd0) - 2023-10-23 - #SIKKA-5469[completed]
- [4cd4584e](https://github.com/sikka-software/Hawa/commit/4cd4584e) - 2023-10-23 - Fixed username validation in LoginForm & RegisterForm
- [44876c49](https://github.com/sikka-software/Hawa/commit/44876c49) - 2023-10-23 - #SIKKA-5407[completed]
- [9ceeab17](https://github.com/sikka-software/Hawa/commit/9ceeab17) - 2023-10-23 - Standardized px in Input & Combobox
- [36a43401](https://github.com/sikka-software/Hawa/commit/36a43401) - 2023-10-23 - Fixed background color of Combobox
- [04073990](https://github.com/sikka-software/Hawa/commit/04073990) - 2023-10-23 - #SIKKA-5474[completed] - Added preview mode to Combobox
- [74d6b69e](https://github.com/sikka-software/Hawa/commit/74d6b69e) - 2023-10-23 - #SIKKA-5473[completed] enabled isLoading for Combobox
- [b9b53caa](https://github.com/sikka-software/Hawa/commit/b9b53caa) - 2023-10-22 - Fixed hardcoded hint in RegisterForm
- [ec029aee](https://github.com/sikka-software/Hawa/commit/ec029aee) - 2023-10-22 - #SIKKA-5468[completed] - added hintSide prop to Label and Input
- [ae3908e9](https://github.com/sikka-software/Hawa/commit/ae3908e9) - 2023-10-22 - #SIKKA-5463[completed] added hint prop to Input
- [c9367371](https://github.com/sikka-software/Hawa/commit/c9367371) - 2023-10-22 - deploy_landing - updated ItemCard
- [c4788792](https://github.com/sikka-software/Hawa/commit/c4788792) - 2023-10-22 - #SIKKA-5461[completed]
- [a7335ecf](https://github.com/sikka-software/Hawa/commit/a7335ecf) - 2023-10-22 - Updated version number
- [74a12014](https://github.com/sikka-software/Hawa/commit/74a12014) - 2023-10-22 - #SIKKA-5462[completed]
- [7de2d05f](https://github.com/sikka-software/Hawa/commit/7de2d05f) - 2023-10-22 - Updated the types of <Input/> + Cleanup
- [2215f29c](https://github.com/sikka-software/Hawa/commit/2215f29c) - 2023-10-22 - #SIKKA-5403[completed]
- [2543e4cd](https://github.com/sikka-software/Hawa/commit/2543e4cd) - 2023-10-22 - #SIKKA-5362[completed]
- [f2b3f2db](https://github.com/sikka-software/Hawa/commit/f2b3f2db) - 2023-10-22 - #SIKKA-5459[completed]
- [54ead92f](https://github.com/sikka-software/Hawa/commit/54ead92f) - 2023-10-22 - Finalized Combobox [deploy_landing]
- [905d63c3](https://github.com/sikka-software/Hawa/commit/905d63c3) - 2023-10-22 - #SIKKA-5458[completed] - deploy_landing - skip_publish
- [b11756e1](https://github.com/sikka-software/Hawa/commit/b11756e1) - 2023-10-22 - deploy_landing restored navigation icons
- [f37965e3](https://github.com/sikka-software/Hawa/commit/f37965e3) - 2023-10-22 - deploy_landing attempting to fix darkmode
- [d7f58a0f](https://github.com/sikka-software/Hawa/commit/d7f58a0f) - 2023-10-22 - Added Combobox component
- [428d7c91](https://github.com/sikka-software/Hawa/commit/428d7c91) - 2023-10-21 - #SIKKA-5451[completed] Fixed PhontInput width
- [c08c8e74](https://github.com/sikka-software/Hawa/commit/c08c8e74) - 2023-10-20 - Fixed skeleton height
- [b881d943](https://github.com/sikka-software/Hawa/commit/b881d943) - 2023-10-20 - Fixed Input height
- [2bb3a84b](https://github.com/sikka-software/Hawa/commit/2bb3a84b) - 2023-10-20 - Fixed non-existant arrow in Select
- [8d8c06a3](https://github.com/sikka-software/Hawa/commit/8d8c06a3) - 2023-10-20 - Fixed build issue
- [8f93f07d](https://github.com/sikka-software/Hawa/commit/8f93f07d) - 2023-10-20 - #SIKKA-5442[completed] Minor fixes
- [f5617aaf](https://github.com/sikka-software/Hawa/commit/f5617aaf) - 2023-10-20 - Fixed ItemCard
- [86503a89](https://github.com/sikka-software/Hawa/commit/86503a89) - 2023-10-20 - #SIKKA-5431[completed]
- [f0df0d72](https://github.com/sikka-software/Hawa/commit/f0df0d72) - 2023-10-20 - #SIKKA-5436[completed]
- [5dd0dad3](https://github.com/sikka-software/Hawa/commit/5dd0dad3) - 2023-10-20 - #SIKKA-5420[completed] - skip_publish
- [3e31e6f5](https://github.com/sikka-software/Hawa/commit/3e31e6f5) - 2023-10-20 - #SIKKA-5421[completed]
- [a24ef62d](https://github.com/sikka-software/Hawa/commit/a24ef62d) - 2023-10-18 - Fixed NavigationMenu trigger hover color
- [35e326e6](https://github.com/sikka-software/Hawa/commit/35e326e6) - 2023-10-18 - Added action to `NavigationMenu`
- [d559b642](https://github.com/sikka-software/Hawa/commit/d559b642) - 2023-10-17 - skip_publish
- [0befc11b](https://github.com/sikka-software/Hawa/commit/0befc11b) - 2023-10-17 - #SIKKA-5410[completed]
- [fda5ea67](https://github.com/sikka-software/Hawa/commit/fda5ea67) - 2023-10-17 - #SIKKA-5358[completed]
- [fe501304](https://github.com/sikka-software/Hawa/commit/fe501304) - 2023-10-17 - #SIKKA-5370[completed]
- [dd500cf6](https://github.com/sikka-software/Hawa/commit/dd500cf6) - 2023-10-17 - #SIKKA-5367[completed]
- [807c24a6](https://github.com/sikka-software/Hawa/commit/807c24a6) - 2023-10-17 - [deploy_landing, skip_publish] fixed build issue
- [41dc4420](https://github.com/sikka-software/Hawa/commit/41dc4420) - 2023-10-17 - [deploy_landing] Organize landing + other minor fixes
- [e1f4c0dc](https://github.com/sikka-software/Hawa/commit/e1f4c0dc) - 2023-10-17 - [deploy_landing] added /theme page + minor ui fixes
- [b106f0d6](https://github.com/sikka-software/Hawa/commit/b106f0d6) - 2023-10-17 - Minor UI fixes + /theme page added
- [b9e6d865](https://github.com/sikka-software/Hawa/commit/b9e6d865) - 2023-10-16 - #SIKKA-5059[completed]
- [6801be7b](https://github.com/sikka-software/Hawa/commit/6801be7b) - 2023-10-16 - ##85zu4pk1a[completed]
- [4061cde5](https://github.com/sikka-software/Hawa/commit/4061cde5) - 2023-10-16 - #SIKKA-5351[completed]
- [df88042a](https://github.com/sikka-software/Hawa/commit/df88042a) - 2023-10-16 - Fixed Select + PhoneInput + Cleanup
- [3faa7f7a](https://github.com/sikka-software/Hawa/commit/3faa7f7a) - 2023-10-16 - Added direction to NavigationMenu
- [eb3d1dfe](https://github.com/sikka-software/Hawa/commit/eb3d1dfe) - 2023-10-16 - Fixed width inside NavigationMenu
- [f1a1bee7](https://github.com/sikka-software/Hawa/commit/f1a1bee7) - 2023-10-15 - Updatd NavigationMenu component
- [8379a455](https://github.com/sikka-software/Hawa/commit/8379a455) - 2023-10-15 - Added NavigationMenu component
- [425eb434](https://github.com/sikka-software/Hawa/commit/425eb434) - 2023-10-14 - #SIKKA-5384[completed]
- [081e0365](https://github.com/sikka-software/Hawa/commit/081e0365) - 2023-10-14 - #SIKKA-5356[completed]
- [f691916b](https://github.com/sikka-software/Hawa/commit/f691916b) - 2023-10-14 - #SIKKA-5385[completed]
- [37d58d4b](https://github.com/sikka-software/Hawa/commit/37d58d4b) - 2023-10-13 - Removed unneeded comments
- [527a2193](https://github.com/sikka-software/Hawa/commit/527a2193) - 2023-10-13 - added useWindowSize
- [6b76fb52](https://github.com/sikka-software/Hawa/commit/6b76fb52) - 2023-10-13 - fixed importing useBreakpoint
- [eb3d3c1e](https://github.com/sikka-software/Hawa/commit/eb3d3c1e) - 2023-10-13 - Fixed exporting useBreakpoint hook
- [84dce108](https://github.com/sikka-software/Hawa/commit/84dce108) - 2023-10-13 - Fixed & tested PricingPlans block
- [f0ca4673](https://github.com/sikka-software/Hawa/commit/f0ca4673) - 2023-10-13 - Fixed extra border in DataTable + cleanup
- [1aabb8a5](https://github.com/sikka-software/Hawa/commit/1aabb8a5) - 2023-10-12 - Fixed missing key in DDM
- [2b4bc0f4](https://github.com/sikka-software/Hawa/commit/2b4bc0f4) - 2023-10-12 - Multiple DDMs can be switched between now
- [47362ef2](https://github.com/sikka-software/Hawa/commit/47362ef2) - 2023-10-12 - Added NavMenu + Customizable DDM items
- [df1fa65e](https://github.com/sikka-software/Hawa/commit/df1fa65e) - 2023-10-11 - Storybook cleanup
- [1f98df04](https://github.com/sikka-software/Hawa/commit/1f98df04) - 2023-10-11 - Incremented verion
- [4b416587](https://github.com/sikka-software/Hawa/commit/4b416587) - 2023-10-11 - Updated @types + added SB favicon
- [a36079fb](https://github.com/sikka-software/Hawa/commit/a36079fb) - 2023-10-11 - Attempting to fix tsconfig + README updated + cleanup
- [f915db41](https://github.com/sikka-software/Hawa/commit/f915db41) - 2023-10-11 - deploy_landing fixed build warnings
- [6998bcad](https://github.com/sikka-software/Hawa/commit/6998bcad) - 2023-10-11 - skip_publish deploy_landing skip_storybook
- [7ffde9be](https://github.com/sikka-software/Hawa/commit/7ffde9be) - 2023-10-11 - #SIKKA-5334[completed]
- [ce555dbf](https://github.com/sikka-software/Hawa/commit/ce555dbf) - 2023-10-11 - #SIKKA-5249[completed] Finished <Chip/>
- [f5e7cb99](https://github.com/sikka-software/Hawa/commit/f5e7cb99) - 2023-10-11 - Attempting to fix text color in Input in dark mode
- [2b32acb1](https://github.com/sikka-software/Hawa/commit/2b32acb1) - 2023-10-11 - #SIKKA-5273[completed]
- [8bee103e](https://github.com/sikka-software/Hawa/commit/8bee103e) - 2023-10-11 - #SIKKA-5246[completed]
- [202a1705](https://github.com/sikka-software/Hawa/commit/202a1705) - 2023-10-11 - #SIKKA-5250[completed] No animation skeleton
- [63c36599](https://github.com/sikka-software/Hawa/commit/63c36599) - 2023-10-11 - Cleanup and performance update
- [e29a09a3](https://github.com/sikka-software/Hawa/commit/e29a09a3) - 2023-10-11 - #SIKKA-4634[completed] Added syntax highlight to codeblock
- [aa484361](https://github.com/sikka-software/Hawa/commit/aa484361) - 2023-10-10 - Updated RegisterForm docs
- [f03e8b6a](https://github.com/sikka-software/Hawa/commit/f03e8b6a) - 2023-10-10 - Updated Docs + cleanup
- [a0a98b34](https://github.com/sikka-software/Hawa/commit/a0a98b34) - 2023-10-10 - #SIKKA-5287[completed]
- [6ccbb966](https://github.com/sikka-software/Hawa/commit/6ccbb966) - 2023-10-10 - #SIKKA-5341[completed]
- [049d365e](https://github.com/sikka-software/Hawa/commit/049d365e) - 2023-10-10 - #SIKKA-5346[completed]
- [d9fc8c4c](https://github.com/sikka-software/Hawa/commit/d9fc8c4c) - 2023-10-10 - #SIKKA-5336[completed]
- [418f8d9c](https://github.com/sikka-software/Hawa/commit/418f8d9c) - 2023-10-10 - Verified Auth blocks working fine + cleanup
- [0196cb69](https://github.com/sikka-software/Hawa/commit/0196cb69) - 2023-10-09 - 85zu3x5rd[completed]
- [4ffdaba9](https://github.com/sikka-software/Hawa/commit/4ffdaba9) - 2023-10-08 - Another attempt at fixing hawa prefix in tayar
- [7926bcc3](https://github.com/sikka-software/Hawa/commit/7926bcc3) - 2023-10-08 - fixed preflight issue
- [152264a0](https://github.com/sikka-software/Hawa/commit/152264a0) - 2023-10-08 - testing no prefix
- [d5e74b52](https://github.com/sikka-software/Hawa/commit/d5e74b52) - 2023-10-08 - attempting to fix prefix in tayar
- [efa7e52e](https://github.com/sikka-software/Hawa/commit/efa7e52e) - 2023-10-08 - Attempting to fix no prefix in tayar
- [0e259b79](https://github.com/sikka-software/Hawa/commit/0e259b79) - 2023-10-08 - Fixed Hawa issue in Tayar (inshallah)
- [a11673f1](https://github.com/sikka-software/Hawa/commit/a11673f1) - 2023-10-08 - Fixed version number
- [5665fb29](https://github.com/sikka-software/Hawa/commit/5665fb29) - 2023-10-08 - Attempting to fix tailwind classes in Tayar
- [d5bec454](https://github.com/sikka-software/Hawa/commit/d5bec454) - 2023-10-08 - Fixed table background color
- [6bcf9d94](https://github.com/sikka-software/Hawa/commit/6bcf9d94) - 2023-10-08 - Fixed Input width
- [78558eb0](https://github.com/sikka-software/Hawa/commit/78558eb0) - 2023-10-08 - Fixed type warnings in hooks
- [aa9e4ed5](https://github.com/sikka-software/Hawa/commit/aa9e4ed5) - 2023-10-08 - Exported hooks
- [d249a681](https://github.com/sikka-software/Hawa/commit/d249a681) - 2023-10-08 - Fixed auth blocks submission
- [c02784e3](https://github.com/sikka-software/Hawa/commit/c02784e3) - 2023-10-08 - another attempt fixing tailwind in tayar
- [8d42b5ef](https://github.com/sikka-software/Hawa/commit/8d42b5ef) - 2023-10-08 - Attempting to fix tailwind while in tayar
- [00592efa](https://github.com/sikka-software/Hawa/commit/00592efa) - 2023-10-08 - Finished Pricing blocks
- [a7bd5bcb](https://github.com/sikka-software/Hawa/commit/a7bd5bcb) - 2023-10-08 - Finished HorizontalPricing Block
- [f6ab0842](https://github.com/sikka-software/Hawa/commit/f6ab0842) - 2023-10-08 - Added pricing cards & stories
- [9fe987d9](https://github.com/sikka-software/Hawa/commit/9fe987d9) - 2023-10-08 - Finished AdCard & organized stories
- [be2c6168](https://github.com/sikka-software/Hawa/commit/be2c6168) - 2023-10-07 - SIKKA-5324[completed] fixed Radio issue
- [65d816de](https://github.com/sikka-software/Hawa/commit/65d816de) - 2023-10-07 - Added Copyrights component
- [b41776f1](https://github.com/sikka-software/Hawa/commit/b41776f1) - 2023-10-07 - Finished manual mdx files
- [8b34805d](https://github.com/sikka-software/Hawa/commit/8b34805d) - 2023-10-07 - Finished AppLayout and Sidebar
- [bdaf43c2](https://github.com/sikka-software/Hawa/commit/bdaf43c2) - 2023-10-07 - Added Layout components
- [8be4c1e2](https://github.com/sikka-software/Hawa/commit/8be4c1e2) - 2023-10-06 - Added validation to auth forms
- [bb19c464](https://github.com/sikka-software/Hawa/commit/bb19c464) - 2023-10-06 - Fixed build issue
- [3b5fdf39](https://github.com/sikka-software/Hawa/commit/3b5fdf39) - 2023-10-06 - Added Misc Blocks
- [45bcf4f1](https://github.com/sikka-software/Hawa/commit/45bcf4f1) - 2023-10-05 - Added all auth blocks
- [f2e271e8](https://github.com/sikka-software/Hawa/commit/f2e271e8) - 2023-10-05 - Added type checking in DataTable columns & rows
- [16daad4d](https://github.com/sikka-software/Hawa/commit/16daad4d) - 2023-10-05 - #SIKKA-5286[completed]
- [0c6c4a64](https://github.com/sikka-software/Hawa/commit/0c6c4a64) - 2023-10-05 - Updated LoginForm docs
- [d5e532e0](https://github.com/sikka-software/Hawa/commit/d5e532e0) - 2023-10-05 - fixed docs link + incremented to v0.3.0
- [3010bea4](https://github.com/sikka-software/Hawa/commit/3010bea4) - 2023-10-05 - Finished LoginForm
- [2da927f0](https://github.com/sikka-software/Hawa/commit/2da927f0) - 2023-10-04 - Finished PhoneInput + cleanup
- [a39bd847](https://github.com/sikka-software/Hawa/commit/a39bd847) - 2023-10-04 - Added additional components
- [12e0e771](https://github.com/sikka-software/Hawa/commit/12e0e771) - 2023-10-04 - Added 2 Feedback components & stories
- [71d64283](https://github.com/sikka-software/Hawa/commit/71d64283) - 2023-10-04 - Minor updates
- [3996b355](https://github.com/sikka-software/Hawa/commit/3996b355) - 2023-10-03 - Added <Command/> component
- [34fb4508](https://github.com/sikka-software/Hawa/commit/34fb4508) - 2023-10-03 - incremented version
- [58033a56](https://github.com/sikka-software/Hawa/commit/58033a56) - 2023-10-03 - Added ScrollArea component
- [0ee19dde](https://github.com/sikka-software/Hawa/commit/0ee19dde) - 2023-10-03 - Added Tabs component + Organized stories
- [4870f05b](https://github.com/sikka-software/Hawa/commit/4870f05b) - 2023-10-02 - Added more components
- [26aa493d](https://github.com/sikka-software/Hawa/commit/26aa493d) - 2023-10-02 - incremented version
- [12342b4b](https://github.com/sikka-software/Hawa/commit/12342b4b) - 2023-10-02 - Added more components
- [49b3245e](https://github.com/sikka-software/Hawa/commit/49b3245e) - 2023-10-02 - Added PinInput & Label & Alert components
- [b3d8564f](https://github.com/sikka-software/Hawa/commit/b3d8564f) - 2023-10-02 - Added Chip Component
- [182b74d1](https://github.com/sikka-software/Hawa/commit/182b74d1) - 2023-10-02 - Skeleton & Switch Components added
- [83d3c5aa](https://github.com/sikka-software/Hawa/commit/83d3c5aa) - 2023-10-02 - Added more components and stories
- [4d8eca48](https://github.com/sikka-software/Hawa/commit/4d8eca48) - 2023-10-02 - Added Hooks and more components
- [901c8587](https://github.com/sikka-software/Hawa/commit/901c8587) - 2023-10-01 - Added stories
- [bc17c3d3](https://github.com/sikka-software/Hawa/commit/bc17c3d3) - 2023-10-01 - fixed path in workflow deploy_landing
- [c728c989](https://github.com/sikka-software/Hawa/commit/c728c989) - 2023-10-01 - trying all three deploy_landing
- [12353ac3](https://github.com/sikka-software/Hawa/commit/12353ac3) - 2023-10-01 - skip_publish skip_storybook build_landing
- [23b620a9](https://github.com/sikka-software/Hawa/commit/23b620a9) - 2023-10-01 - skip_publish build_landing updated readme
- [cf41ba3c](https://github.com/sikka-software/Hawa/commit/cf41ba3c) - 2023-10-01 - skip_publish updated next.js port
- [5e0e9fc2](https://github.com/sikka-software/Hawa/commit/5e0e9fc2) - 2023-10-01 - fixed deployment workflow
- [1b12f6e3](https://github.com/sikka-software/Hawa/commit/1b12f6e3) - 2023-10-01 - bismillah trying to make a test deployment
- [f4f032e1](https://github.com/sikka-software/Hawa/commit/f4f032e1) - 2023-10-01 - added darkmode to storybook
- [c94babdb](https://github.com/sikka-software/Hawa/commit/c94babdb) - 2023-10-01 - finished landing page
- [9aebe3b0](https://github.com/sikka-software/Hawa/commit/9aebe3b0) - 2023-10-01 - fixed global css
- [a67d70f6](https://github.com/sikka-software/Hawa/commit/a67d70f6) - 2023-09-30 - made it all work alhamdulellah
- [501b4c71](https://github.com/sikka-software/Hawa/commit/501b4c71) - 2023-09-30 - attempting to do a build
- [a1e03ec2](https://github.com/sikka-software/Hawa/commit/a1e03ec2) - 2023-09-30 - first commit
