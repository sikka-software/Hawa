import React from "react";

import { InvoiceAccordion as InvAccordion } from "../../elements";

export default {
  title: "Elements/Invoice",
  component: InvAccordion,
  argTypes: {
    label: {
      control: "text",
      description: "The title of the alert in bold"
    },
    number: {
      control: "text",
      description: "The content text of the alert"
    },
    helperText: {
      control: "text",
      description: "The content text of the alert"
    },
    variant: {
      control: "select",
      options: ["plain", "contained", "outlined"]
    }
  }
};

const Template = (args) => {
  return (
    <div
      dir={args.direction}
      className="flex flex-wrap items-start justify-start gap-2"
    >
      <InvAccordion
        direction={args.direction}
        total="2,201 SAR"
        invoiceTitle={"Jan 2021"}
        invoiceSubtitle="Starter Plan"
        invoiceActions={[[{ label: "Download PDF" }]]}
        invoiceDescription={"Paid on Jan 22, 2022"}
        status="paid"
        products={[
          {
            plan: "Starter",
            usage: 23.22,
            price: 322.11,
            amount: 22.11
          },
          {
            plan: "Starter",
            usage: 273.22,
            price: 3282.11,
            amount: 229.11
          }
        ]}
      />

      <InvAccordion
        direction={args.direction}
        total="2,201 SAR"
        invoiceTitle={"Jan 2021"}
        invoiceSubtitle="Starter Plan"
        invoiceDescription={"Paid on Jan 22, 2022"}
        status="overdue"
        invoiceActions={[[{ label: "Download PDF" }]]}
        products={[
          {
            usage: 23.22,
            price: 322.11,
            amount: 22.11
          },
          {
            usage: 273.22,
            price: 3282.11,
            amount: 229.11
          }
        ]}
      />

      <InvAccordion
        direction={args.direction}
        total="2,201 SAR"
        invoiceTitle={"Jan 2021"}
        invoiceSubtitle="Starter Plan"
        invoiceActions={[[{ label: "Download PDF" }]]}
        invoiceDescription={"Paid on Jan 22, 2022"}
        products={[
          {
            usage: 23.22,
            price: 322.11,
            amount: 22.11
          },
          {
            usage: 273.22,
            price: 3282.11,
            amount: 229.11
          }
        ]}
      />
    </div>
  );
};

export const InvoiceAccordion = Template.bind({});
InvoiceAccordion.args = {
  label: "Profit",
  number: "SAR 333.22",
  variant: "contained",
  helperText: "warning"
};
