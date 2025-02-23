import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { Col1frAuto, Col1frAutoProps } from "./index";

export default {
    title: "Component/Col1frAuto",
    component: Col1frAuto,
} as Meta;

const Profile: StoryFn<PropsWithChildren<Col1frAutoProps>> = (args) => (
    <Col1frAuto {...args}>Test Children</Col1frAuto>
);

export const Index = Profile.bind({});
const args : Col1frAutoProps = {
    
}
Index.args = args
