import { Classes } from "@blueprintjs/core";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Page } from "./Page.tsx";

storiesOf("Page", module)
    .addDecorator(story =>{
        document.body.classList.add(Classes.DARK);
        return story();
    })
    .add("Page1", () =>
        <Page/>
    )