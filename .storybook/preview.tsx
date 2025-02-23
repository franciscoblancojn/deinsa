import React from "react";
import type { Preview } from "@storybook/react";
import { PageProgress } from "fenextjs";
import { NotificationPop } from "fenextjs";
import { InputGoogleLoadScript } from "fenextjs";
import { useReportWebVitals } from "next/web-vitals";

import "../styles/index.css";

import { env_log } from "fenextjs-functions";

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [
        (Story) => {
            useReportWebVitals((metric) => {
                console.log(metric?.name,metric?.value,metric);
                
                env_log(metric, {
                    name: "metric",
                    color: "#cf00ff",
                });
            });
            return (
               <>
                <InputGoogleLoadScript
                    googleMapsApiKey={process?.env?.["NEXT_PUBLIC_GOOGLE_KEY"]}
                >
                    <NotificationPop />
                    <PageProgress />
                    <Story />
                </InputGoogleLoadScript>
               </>
            );
        },
    ],
};

export default preview;
