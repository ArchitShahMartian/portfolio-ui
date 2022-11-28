import * as React from "react";
import {
    Button,
    H6, H5,
    Colors,
    Classes,
    Checkbox,
    Navbar,
    NavbarHeading,
    NavbarGroup,
    NavbarDivider,
    Icon,
    Intent,
    IconSize,
    ControlGroup,
    InputGroup} from "@blueprintjs/core";

export class Page extends React.Component {

    render() {
        return (
            <div className={"bp4-dark"}>
                <nav class="bp4-navbar bp4-dark">
                  <div style={{margin: "0 auto", width: "480px"}}>
                    <div class="bp4-navbar-group bp4-align-left">
                      <div class="bp4-navbar-heading">Blueprint</div>
                    </div>
                    <div class="bp4-navbar-group bp4-align-right">
                      <button class="bp4-button bp4-minimal bp4-icon-home">Home</button>
                      <button class="bp4-button bp4-minimal bp4-icon-document">Files</button>
                      <span class="bp4-navbar-divider"></span>
                      <button class="bp4-button bp4-minimal bp4-icon-user"></button>
                      <button class="bp4-button bp4-minimal bp4-icon-notifications"></button>
                      <button class="bp4-button bp4-minimal bp4-icon-cog"></button>
                    </div>
                  </div>
                </nav>
                TEST
            </div>
        )
    }
}