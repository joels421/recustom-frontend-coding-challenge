// stories/Toast.stories.tsx

import React, { useEffect } from "react";
import { Meta, Story } from "@storybook/react";
import { ToastContainer } from "react-toastify";
import Toast from "../components/Toast/Toast";
import CustomToast from "../components/Toast/CustomToast";
import "./toast.css";

export default {
  title: "Toast",
  component: Toast,
} as Meta;

type ToastArgs = {
  content: string;
  appearance: "success" | "error" | "info" | "warning";
  type: "one" | "two" | "three" | "four";
};

const Template: Story<ToastArgs> = (args) => {
  useEffect(() => {
    // Add the additional class to the .Toastify__toast element
    const toastElement = document.querySelector(".Toastify__toast");
    if (toastElement) {
      toastElement.classList.add(`toast-${args.type}`);
    }
  }, [args.type]);
  return (
    <>
      <ToastContainer />
      <Toast {...args} />
    </>
  );
};

const TemplateNew: Story<ToastArgs> = (args) => (
  <>
    <ToastContainer />
    <CustomToast {...args} />
  </>
);

export const Success: Story<ToastArgs> = Template.bind({});
Success.args = {
  content: "The action you have done was success! Well done",
  appearance: "success",
  type: "one",
};

export const SuccessAction: Story<ToastArgs> = Template.bind({});
SuccessAction.args = {
  content:
    "Well done, you successfully read this alert message. This example text is going to run a bit longer so that you can how spacing within an alert works with this kind of content. Be sure to use margin utilities to keep things nice and tidy.",
  appearance: "success",
  type: "two",
};

export const Error: Story<ToastArgs> = Template.bind({});
Error.args = {
  content: "The file flowbite-figma-pro was permanently deleted ",
  appearance: "error",
  type: "three",
};

export const ErrorAttention: Story<ToastArgs> = Template.bind({});
ErrorAttention.args = {
  content:
    "Oh Snap, you successfully read this important alert message. This example text is going to run a bit longer so that you can how spacing within an alert works with this kind of content. Be sure to use margin utilities to keep things nice and tidy.",
  appearance: "error",
  type: "four",
};

export const CustomToastNotification: Story<ToastArgs> = TemplateNew.bind({});

CustomToastNotification.args = {
  content: "Hi Neil, Thanks for sharing your thughts regarding FlowBite",
  appearance: "success",
};
