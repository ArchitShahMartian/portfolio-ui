import * as React from "react";
import {
    Button,
    Card,
    Classes,
    Colors,
    H1, H3, H4,
    InputGroup,
    Navbar,
    NavbarHeading,
    NavbarGroup,
    NavbarDivider,
    Tab,
    Tabs,
    Text} from "@blueprintjs/core";

export class Page extends React.Component {

    render() {
        return (
            <div className="bp4-dark">
                <Navbar fixedToTop={true}  style={{backgroundColor: Colors.DARK_GRAY1}}>
                    <NavbarGroup>
                        <NavbarHeading>Archit Shah</NavbarHeading>
                    </NavbarGroup>
                     <NavbarGroup className="bp4-align-right">
                            <Button className={Classes.MINIMAL} text="About" />
                            <Button className={Classes.MINIMAL} text="Experience" />
                            <Button className={Classes.MINIMAL} text="Projects" />
                            <Button className={Classes.MINIMAL} text="Skills" />
                            <Button className={Classes.MINIMAL} text="Blogs" />
                             <Button className={Classes.MINIMAL} text="Education" />
                            <Button className={Classes.MINIMAL} text="Contact" />
                            <Button className="bp4-outlined bp4-intent-success" icon="document" text="Resume" />
                    </NavbarGroup>
                </Navbar>
                {/*<div className="container" style={{textAlign: "left", marginLeft: "30px", marginTop: "30px", backgroundColor: "blue"}}>*/}
                <div style={{width: "100vw", textAlign: "left", paddingLeft: "50px"}}>
                    <p className="bp4-text-large">Hello!</p>
                    <H1>I'm Archit Shah</H1>
                    <H4 className="bp4-text-muted">I like to build cool stuff.</H4>
                    <p className="bp4-text-large" style={{whiteSpace: "pre"}}>
                        I’m an engineer who loves to work with Robots,
                        build web applications and much more.
                    </p>
                    <Button className="bp4-large bp4-outlined bp4-intent-success">Checkout my work</Button>
                </div>
                <div className="container-column" style={{marginTop: "10px"}}>
                    <H3>Experience</H3>
                    <Tabs
                    id="TabsExample">
                    <Tab id="rx" title="Bloomberg LP" panel={<ReactPanel />} />
                    <Tab id="ng" title="Infinite Options" panel={<AngularPanel />} />
                    <Tab id="mb" title="Skycart" panel={<EmberPanel />} />
                    <Tabs.Expander />
                </Tabs>
                </div>
            </div>
        )
    }
}

const ReactPanel: React.FC = () => (
    <Card>
        <p>Aug 2020 - Present</p>
        <p className={Classes.RUNNING_TEXT}>
            Lots of people use React as the V in MVC. Since React makes no assumptions about the rest of your technology
            stack, it's easy to try it out on a small feature in an existing project.
        </p>
    </Card>
);

const AngularPanel: React.FC = () => (
    <Card>
        <p>Dec 2018 - Oct 2019</p>
        <p className={Classes.RUNNING_TEXT}>
            HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic
            views in web-applications. AngularJS lets you extend HTML vocabulary for your application. The resulting
            environment is extraordinarily expressive, readable, and quick to develop.
        </p>
    </Card>
);

const EmberPanel: React.FC = () => (
    <Card>
        <p>Aug 2018 - Dec 2018</p>
        <p className={Classes.RUNNING_TEXT}>
            Ember.js is an open-source JavaScript application framework, based on the model-view-controller (MVC)
            pattern. It allows developers to create scalable single-page web applications by incorporating common idioms
            and best practices into the framework. What is your favorite JS framework?
        </p>
    </Card>
);