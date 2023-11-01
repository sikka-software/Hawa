import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Alert } from "../components/elements";

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

describe("Alert Component Prop Testing", () => {
  // Testing severity prop
  it("renders with different severity levels", () => {
    let commonClasses =
      "hawa-opacity-100 hawa-text-sm hawa-transition-all hawa-relative hawa-mb-4 hawa-flex hawa-flex-col hawa-rounded hawa-p-4";

    const { rerender } = render(<Alert text="Info Alert" severity="info" />);
    expect(screen.getByTestId("alert")).toHaveClass(
      `${commonClasses} hawa-text-info-foreground hawa-bg-info/90`
    );
    rerender(<Alert text="Warning Alert" severity="warning" />);
    expect(screen.getByTestId("alert")).toHaveClass(
      `${commonClasses} hawa-text-warning-foreground hawa-bg-warning/90`
    );
    rerender(<Alert text="Error Alert" severity="error" />);
    expect(screen.getByTestId("alert")).toHaveClass(
      `${commonClasses} hawa-text-destructive-foreground hawa-bg-destructive/90`
    );
    rerender(<Alert text="Success Alert" severity="success" />);
    expect(screen.getByTestId("alert")).toHaveClass(
      `${commonClasses} hawa-text-success-foreground hawa-bg-success/90`
    );
  });

  // Testing variant prop
  it("renders with different variants", () => {
    const { rerender } = render(
      <Alert text="Normal Variant" variant="normal" />
    );
    expect(screen.getByText("Normal Variant")).toBeInTheDocument();

    // Assuming you have specific classes or elements for each variant
    rerender(<Alert text="Solid Variant" variant="solid" />);
    expect(screen.getByText("Solid Variant")).toBeInTheDocument();

    // ... continue for other variants
  });

  // Testing duration prop
  it("disappears after the specified duration", async () => {
    render(<Alert text="Temporary Alert" duration={500} />);
    expect(screen.getByText("Temporary Alert")).toBeInTheDocument();

    // Await disappearance of the Alert
    await waitFor(
      () => {
        expect(screen.queryByText("Temporary Alert")).not.toBeInTheDocument();
      },
      { timeout: 1600 }
    ); // Adjusted timeout to 1600 milliseconds
  });

  // Testing actions prop
  it("renders actions correctly", () => {
    const handleClick = jest.fn();
    render(
      <Alert
        text="Action Alert"
        actions={[
          {
            label: "Action 1",
            onClick: handleClick,
            variant: "default",
          },
        ]}
      />
    );
    fireEvent.click(screen.getByText("Action 1"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // Testing persistent prop
  it("renders close button based on persistent prop", () => {
    const { rerender } = render(
      <Alert text="Persistent Alert" persistent={true} />
    );
    expect(screen.queryByLabelText("Close")).not.toBeInTheDocument();

    rerender(<Alert text="Non-Persistent Alert" persistent={false} />);
    expect(screen.queryByLabelText("Close")).toBeInTheDocument();
  });

  // Testing icon prop
  it("renders icon correctly", () => {
    render(<Alert text="Icon Alert" icon={<svg data-testid="test-icon" />} />);
    expect(screen.getByTestId("test-icon")).toBeInTheDocument();
  });
});
