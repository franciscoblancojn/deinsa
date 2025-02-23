import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { Col2Auto, Col2AutoProps } from "./index";

export default {
    title: "Component/Col2Auto",
    component: Col2Auto,
} as Meta;

const Profile: StoryFn<PropsWithChildren<Col2AutoProps>> = (args) => (
    <Col2Auto {...args}>Test Children</Col2Auto>
);

export const Index = Profile.bind({});
const args : Col2AutoProps = {
    
}
Index.args = args
