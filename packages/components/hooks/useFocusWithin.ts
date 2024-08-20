// useFocusWithin hook detects if any element within has focus, it works the same way as :focus-within CSS selector:
import { useRef, useState, useEffect } from "react";

// Define options for the useFocusWithin hook, which includes onFocus and onBlur callbacks.
export interface UseFocusWithinOptions {
  onFocus?(event: FocusEvent): void;
  onBlur?(event: FocusEvent): void;
}

// Function to check if the event's related target is contained within the current target.
function containsRelatedTarget(event: FocusEvent) {
  if (event.currentTarget instanceof HTMLElement && event.relatedTarget instanceof HTMLElement) {
    return event.currentTarget.contains(event.relatedTarget);
  }

  return false;
}

// Custom React hook for handling focus events within an element.
export function useFocusWithin<T extends HTMLElement = any>({
  onBlur,
  onFocus,
}: UseFocusWithinOptions = {}): {
  ref: React.MutableRefObject<T>;
  focused: boolean;
} {
  // Create a ref to hold the target element.
  const ref = useRef<T>(null!);

  // State to track if the element is focused.
  const [focused, _setFocused] = useState(false);

  // Create a ref to store the focused state.
  const focusedRef = useRef(false);

  // Function to set the focused state and update the ref.
  const setFocused = (value: boolean) => {
    _setFocused(value);
    focusedRef.current = value;
  };

  // Handle focus-in event: when the element gains focus.
  const handleFocusIn = (event: FocusEvent) => {
    if (!focusedRef.current) {
      setFocused(true);
      onFocus?.(event); // Call the onFocus callback if provided.
    }
  };

  // Handle focus-out event: when the element loses focus.
  const handleFocusOut = (event: FocusEvent) => {
    if (focusedRef.current && !containsRelatedTarget(event)) {
      setFocused(false);
      onBlur?.(event); // Call the onBlur callback if provided.
    }
  };

  // Attach event listeners for focusin and focusout events.
  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener("focusin", handleFocusIn);
      ref.current.addEventListener("focusout", handleFocusOut);

      // Clean up event listeners when the component unmounts.
      return () => {
        ref.current?.removeEventListener("focusin", handleFocusIn);
        ref.current?.removeEventListener("focusout", handleFocusOut);
      };
    }

    return undefined;
  }, [handleFocusIn, handleFocusOut]);

  // Return the ref and focused state.
  return { ref, focused };
}
