# @sikka/hawa

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
- New component: `HerlperText`
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
