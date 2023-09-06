import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "../../elements/Card";

export default {
  title: "Elements/Cards/Default",
  component: Card
};

export const Default = () => {
  return (
    <div>
      <h2>Default Card</h2>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>

        <CardContent>
          Card content goes here. This is a default card component showcasing
          basic structure and styling.
        </CardContent>
        <CardFooter>This is the footer of the card</CardFooter>
      </Card>
    </div>
  );
};
