import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { DeinsaInfo, DeinsaInfoProps } from "./index";

export default {
    title: "Component/DeinsaInfo",
    component: DeinsaInfo,
} as Meta;

const Profile: StoryFn<PropsWithChildren<DeinsaInfoProps>> = (args) => (
    <DeinsaInfo {...args}>Test Children</DeinsaInfo>
);

export const Index = Profile.bind({});
const args : DeinsaInfoProps = {
    
}
Index.args = args
