import * as React from "react";
import {
    Button,
    Card,
    Classes,
    Colors,
    Divider,
    H1, H3, H4, H6,
    UL,
    InputGroup,
    Navbar,
    NavbarHeading,
    NavbarGroup,
    NavbarDivider,
    Tab,
    Tabs,
    Text} from "@blueprintjs/core";
import { SiteContent } from "../services/api/SiteContent.ts"
import background from "../img/profilepicture.jpg"

export class Page extends React.Component {

    render() {
        return (
            <div className="bp4-dark container" style={{width: "60%"}}>
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
                            <Button className={Classes.MINIMAL} text="Contact" />
                            <Button className="bp4-outlined bp4-intent-success" icon="document" text="Resume" />
                    </NavbarGroup>
                </Navbar>
                {/*<div className="container" style={{textAlign: "left", marginLeft: "30px", marginTop: "30px", backgroundColor: "blue"}}>*/}
                <div className="align-item-baseline" style={{marginTop: "20%", display: "flex", width: "100", textAlign: "left"}}>
                    <div style={{paddingTop: "10%"}}>
                        <p className="bp4-text-large">Hello!</p>
                        <H1>I'm Archit Shah</H1>
                        <H4 className="bp4-text-muted">I like to build cool stuff.</H4>
                        <p className="bp4-text-large" style={{whiteSpace: "pre"}}>
                            An engineer who loves to build Robots,
                            Web Applications and much more.
                        </p>
                        <Button className="bp4-large bp4-outlined bp4-intent-success">Checkout my work</Button>
                    </div>
                    <img className= "img" src={background} style={{marginLeft: "5%"}} alt="Pic"/>
                </div>
                <div style={{marginTop: "10%", textAlign: "left"}}>
                    <Text>Where I've Worked</Text>
                    <Divider/>
                    <Tabs id="Experience" style={{paddingTop: "10px"}}>
                        <Tab id="rx" title="Bloomberg LP" panel={<ReactPanel />} />
                        <Tab id="ng" title="Infinite Options" panel={<AngularPanel />} />
                        <Tab id="mb" title="Skycart" panel={<EmberPanel />} />
                    </Tabs>
                </div>
                <div style={{marginTop: "10%", textAlign: "left"}}>
                    <Text>What I've built</Text>
                    <Divider/>
                    <div className="container align-item-baseline" style={{display: "flex", paddingTop: "10px"}}>
                        <Card ellipsize={true} style={{marginLeft: "2px", marginRight: "2px"}}>
                            <H6><a href="#">Vertical Farm</a></H6>
                            <p className={Classes.TEXT_LARGE} ellipsize={true}>
                                User interfaces that enable people to interact smoothly with data, ask better questions, and
                                make better decisions.
                            </p>
                            <Button text="More Info" className={`${Classes.BUTTON} bp4-outlined bp4-intent-success`} />
                        </Card>
                        <Card ellipsize={true} style={{marginLeft: "2px", marginRight: "2px"}}>
                            <H6><a href="#">Autonomous Robot</a></H6>
                            <p className={Classes.TEXT_LARGE} ellipsize={true}>
                                User interfaces that enable people to interact smoothly with data, ask better questions, and
                                make better decisions.
                            </p>
                            <Button text="More Info" className={`${Classes.BUTTON} bp4-outlined bp4-intent-success`} />
                        </Card>
                        <Card ellipsize={true} style={{marginLeft: "2px", marginRight: "2px"}}>
                            <H6><a href="#">Supply Chain App</a></H6>
                            <p className={Classes.TEXT_LARGE} ellipsize={true}>
                                User interfaces that enable people to interact smoothly with data, ask better questions, and
                                make better decisions.
                            </p>
                            <Button text="More Info" className={`${Classes.BUTTON} bp4-outlined bp4-intent-success`} />
                        </Card>
                    </div>
                </div>
                <div style={{marginTop: "10%", textAlign: "left"}}>
                    <Text>Blogs</Text>
                    <Divider/>
                    <div className="container align-item-baseline" style={{display: "flex", paddingTop: "10px"}}>
                        <Card ellipsize={true} style={{marginLeft: "2px", marginRight: "2px"}}>
                            <H6><a href="#">Vertical Farm</a></H6>
                            <p className={Classes.TEXT_LARGE} ellipsize={true}>
                                User interfaces that enable people to interact smoothly with data, ask better questions, and
                                make better decisions.
                            </p>
                            <Button text="More Info" className={`${Classes.BUTTON} bp4-outlined bp4-intent-success`} />
                        </Card>
                        <Card ellipsize={true} style={{marginLeft: "2px", marginRight: "2px"}}>
                            <H6><a href="#">Autonomous Robot</a></H6>
                            <p className={Classes.TEXT_LARGE} ellipsize={true}>
                                User interfaces that enable people to interact smoothly with data, ask better questions, and
                                make better decisions.
                            </p>
                            <Button text="More Info" className={`${Classes.BUTTON} bp4-outlined bp4-intent-success`} />
                        </Card>
                        <Card ellipsize={true} style={{marginLeft: "2px", marginRight: "2px"}}>
                            <H6><a href="#">Supply Chain App</a></H6>
                            <p className={Classes.TEXT_LARGE} ellipsize={true}>
                                User interfaces that enable people to interact smoothly with data, ask better questions, and
                                make better decisions.
                            </p>
                            <Button text="More Info" className={`${Classes.BUTTON} bp4-outlined bp4-intent-success`} />
                        </Card>
                    </div>
                </div>
                <div style={{marginTop: "10%", textAlign: "left"}}>
                    <Text>What I'am Good At</Text>
                    <Divider/>
                    <UL className={Classes.TEXT_LARGE} style={{paddingTop: "10px"}}>
                        <li>C++</li>
                        <li>Python</li>
                        <li>ROS</li>
                        <li>Django</li>
                        <li>React</li>
                        <li>Javascript</li> `
                    </UL>
                </div>
                <div className="container" style={{marginTop: "10%", textAlign: "center", align: "center", paddingLeft: "10%", paddingRight: "10%", paddingBottom: "30%"}}>
                    <Text>Get in Touch</Text>
                    <Divider/>
                    <p className={Classes.TEXT_LARGE} ellipsize={true} style={{paddingTop: "10px"}}>
                        I'm currently looking for opportunities in Robotics field.
                        If you have some opportunity or just want to connect with me, shoot me an email.
                    </p>
                    <Button className="bp4-large bp4-outlined bp4-intent-success">Say Hello</Button>
                </div>
            </div>
        )
    }

    componentDidMount(){
        Promise.all([
            this.getExperience()]
        )
    }

    getExperience = () => {
        console.log("=get Experience=")
        // SiteContent.list().then((response: any) => {
        //     console.log("response=", response)
        //     // this.setState({
        //     //     productList: response.data.data
        //     // });
        // })
    }
}

const ReactPanel: React.FC = () => (
    <Card>
        <p className={Classes.TEXT_SMALL} style={{textAlign: 'left'}}>Aug 2020 - Present</p>
        <UL className={Classes.TEXT_LARGE}>
            <li>Test 1</li>
            <li>Test 2</li>
            <li>Test 3</li>
        </UL>
    </Card>
);

const AngularPanel: React.FC = () => (
    <Card>
        <p className={Classes.TEXT_SMALL} style={{textAlign: 'left'}}>Dec 2018 - Oct 2019</p>
        <UL className={Classes.TEXT_LARGE}>
            <li>Test 1</li>
            <li>Test 2</li>
            <li>Test 3</li>
        </UL>
    </Card>
);

const EmberPanel: React.FC = () => (
    <Card>
        <p className={Classes.TEXT_SMALL} style={{textAlign: 'left'}}>Aug 2018 - Dec 2018</p>
        <UL className={Classes.TEXT_LARGE}>
            <li>Test 1</li>
            <li>Test 2</li>
            <li>Test 3</li>
        </UL>
    </Card>
);