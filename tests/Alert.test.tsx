// Alert.test.js
import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Alert } from "../components/elements"; // Adjust the import to your file structure

test("renders Alert with text", () => {
  render(<Alert text="This is an alert" />);
  expect(screen.getByText("This is an alert")).toBeInTheDocument();
});

test("renders Alert with title", () => {
  render(<Alert title="Alert Title" text="This is an alert" />);
  expect(screen.getByText("Alert Title")).toBeInTheDocument();
});

test("handles close button click", async () => {
  render(<Alert text="This is an alert" />);
  fireEvent.click(screen.getByLabelText("Close"));

  await waitFor(() => {
    expect(screen.queryByText("This is an alert")).not.toBeInTheDocument();
  });
});

// More tests as needed...
