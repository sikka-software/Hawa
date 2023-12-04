import React, { FC } from "react";

import { Card, CardContent } from "@elements/Card";

type TestimonialProps = {
  variant?: "outlined" | "contained" | "neobrutalism";
};

export const Testimonial: FC<TestimonialProps> = () => {
  return (
    <Card>
      <CardContent headless>
        <div>
          <p className="mb-4 max-w-sm">
            The team at Sikka Software is simply amazing. The tech is easy to
            follow, easy to work with, and infinitely flexible. The solution
            opportunities created by Tines are endless.
          </p>
        </div>
        <div className="flex flex-row gap-4">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <rect width="48" height="48" rx="24" fill="#45BE8B"></rect>
            <path
              d="M14.1412 22.4427L17.5803 16.5199C17.7671 16.1981 18.1112 16 18.4834 16H20.8581C21.653 16 22.1565 16.8528 21.7725 17.5488L19.3042 22.0225C19.2202 22.1747 19.1762 22.3458 19.1762 22.5196C19.1762 23.0879 19.6369 23.5486 20.2052 23.5486H21.5827C22.1594 23.5486 22.627 24.0162 22.627 24.5929V31.347C22.627 31.9237 22.1594 32.3913 21.5827 32.3913H15.0443C14.4676 32.3913 14 31.9237 14 31.347V22.9671C14 22.7829 14.0487 22.602 14.1412 22.4427Z"
              fill="#FFFFFF"
            ></path>
            <path
              d="M25.356 22.4427L28.7951 16.5199C28.982 16.1981 29.326 16 29.6982 16H32.0729C32.8679 16 33.3713 16.8528 32.9873 17.5488L30.5191 22.0225C30.4351 22.1747 30.391 22.3458 30.391 22.5196C30.391 23.0879 30.8518 23.5486 31.4201 23.5486H32.7975C33.3743 23.5486 33.8418 24.0162 33.8418 24.5929V31.347C33.8418 31.9237 33.3743 32.3913 32.7975 32.3913H26.2592C25.6824 32.3913 25.2148 31.9237 25.2148 31.347V22.9671C25.2148 22.7829 25.2636 22.602 25.356 22.4427Z"
              fill="#FFFFFF"
            ></path>
          </svg>
          <span className="border border-l "></span>{" "}
          <div>
            <strong>Brent Lassi</strong>
            <div> Chief Information Security Officer</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
