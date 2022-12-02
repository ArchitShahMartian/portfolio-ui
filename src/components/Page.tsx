import * as React from "react";
import {
    Button,
    Card,
    Classes,
    Colors,
    Divider,
    H1, H4, H6,
    Icon,
    UL,
    Navbar,
    NavbarHeading,
    NavbarGroup,
    Tab,
    Tabs,
    Text, TextArea} from "@blueprintjs/core";
import { SiteContent } from "../services/api/SiteContent.ts"
import background from "../img/profilepicture.jpg"

export class Page extends React.Component {
    constructor(props){
        super(props);
        this.scrollToRef = React.createRef();
    }
    // scrollToElement = () => this.scrollToRef.current.scrollIntoView();
    render() {
        return (
            <div className="bp4-dark container" style={{width: "60%"}}>
                <Navbar fixedToTop={true}  style={{backgroundColor: Colors.DARK_GRAY1}}>
                    <NavbarGroup>
                        <NavbarHeading>Archit Shah</NavbarHeading>
                        <NavbarHeading className="flash1">
                            {/*<p >*/}
                                <Icon icon="symbol-circle" className="bp4-intent-success"/> Actively looking for opportunities in Robotics
                            {/*</p>*/}
                        </NavbarHeading>
                    </NavbarGroup>
                     <NavbarGroup className="bp4-align-right">
                            <Button className={Classes.MINIMAL} onClick={() => handleClickScroll('about')} text="About" />
                            <Button className={Classes.MINIMAL} onClick={() => handleClickScroll('experience')} text="Experience" />
                            <Button className={Classes.MINIMAL} onClick={() => handleClickScroll('projects')} text="Projects" />
                            <Button className={Classes.MINIMAL} onClick={() => handleClickScroll('blogs')} text="Blogs" />
                            <Button className={Classes.MINIMAL} onClick={() => handleClickScroll('contact')} text="Contact" />
                            <Button className="bp4-outlined bp4-intent-success" icon="document" text="Resume" />
                    </NavbarGroup>
                </Navbar>
                {/*<div className="container" style={{textAlign: "left", marginLeft: "30px", marginTop: "30px", backgroundColor: "blue"}}>*/}
                <div id="about" className="align-item-baseline" style={{marginTop: "20%", display: "flex", width: "100%", textAlign: "left"}}>
                    <div style={{paddingTop: "5%", width: "50%"}}>
                        <p className="bp4-text-large">Hello!</p>
                        <H1>I'm Archit Shah</H1>
                        {/*<div className="bp4-text-large align-item-baseline" style={{display: "flex"}}>*/}
                        {/*    <p className="flash1 bp4-text-large"><Icon icon="symbol-circle" className="bp4-intent-success"/> Actively looking for opportunities in Robotics</p>*/}
                        {/*</div>*/}
                        <H1 className="bp4-text-muted">I like to build cool stuff.</H1>
                        <H4 className="bp4-text-muted">
                            I'm an engineer who specializes in building Robots,
                            Web Applications and much more.
                        </H4>
                        <p className="bp4-text-large">Here are some of the technologies, I've been working on recently:</p>
                        <UL className={`${Classes.TEXT_LARGE} skills`} style={{paddingTop: "10px"}}>
                            <li>C++</li>
                            <li>Python</li>
                            <li>ROS</li>
                            <li>Django</li>
                            <li>React</li>
                            <li>Javascript</li>
                        </UL>
                        <Button className="bp4-large bp4-outlined bp4-intent-success">Checkout my work</Button>
                    </div>
                    <img className= "img" src={background} style={{marginLeft: "10%"}} alt="Pic"/>
                </div>
                <div id="experience" style={{marginTop: "10%", textAlign: "left"}}>
                    <Text>Where I've Worked</Text>
                    <Divider/>
                    <Tabs id="Experience" style={{paddingTop: "10px"}}>
                        <Tab id="bi" title="Bloomberg LP" panel={<BloombergInfo/>} />
                        <Tab id="io" title="Infinite Options" panel={<InfiniteOptionsInfo/>} />
                        <Tab id="sc" title="Skycart" panel={<SkyCartInfo/>} />
                        <Tab id="vw" title="Vinay Wire Products" panel={<VinayWireInfo/>} />
                    </Tabs>
                </div>
                <div id="projects" style={{marginTop: "10%", textAlign: "left"}}>
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
                <div id="blogs" style={{marginTop: "10%", textAlign: "left"}}>
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
                <div id="contact" className="container" style={{marginTop: "10%", textAlign: "left"}}>
                    <Text>Get in Touch</Text>

                    <Divider/>

                    <Text style={{marginBottom: "3px"}} className={"bp4-text-large"}>Name:</Text>
                    <TextArea rows={1} style={{marginBottom: "3%", width: "50%"}} fill={true}/>

                    <Text style={{marginBottom: "3px"}} className={"bp4-text-large"}>Email:</Text>
                    <TextArea rows={1} style={{marginBottom: "3%", width: "50%"}} fill={true}/>

                    <Text style={{marginBottom: "3px"}} className={"bp4-text-large"}>Message:</Text>
                    <TextArea rows={10} style={{marginBottom: "3%", width: "50%"}} fill={true}/>
                </div>
                <div className="container" style={{textAlign: "left", align: "left"}}>
                    <Button className="bp4-large bp4-outlined bp4-intent-success" style={{marginBottom: "30%", width: "50%"}}>
                        Submit
                    </Button>
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

const BloombergInfo: React.FC = () => (
    <Card>
        <div className="container align-item-baseline" style={{display: "flex", justifyContent: "space-between"}}>
            <p className={`${Classes.TEXT_LARGE} ${Classes.TEXT_MUTED}`}>Full Stack Python Developer</p>
            <p className={`${Classes.TEXT_LARGE} ${Classes.TEXT_MUTED}`}>Aug 2020 - Present</p>
        </div>
        <p className={`${Classes.TEXT_LARGE} ${Classes.TEXT_MUTED}`}>New York, NY</p>
        <UL className={Classes.TEXT_LARGE}>
            <li>Developed and maintained Dashboard type Web-application that track events from various intelligence sources and scan results which is used to identify, monitor and report Security vulnerabilities in the systems and software that runs in the Network Infrastructure</li>
            <li>Wrote various Automated Scripts in Python to Ingest the Intelligence data in our database</li>
            <li>Performed Testing and wrote unit tests on various Django applications.</li>
            <li>Developed and maintained User Interface using React JS, CSS and HTML.</li>
        </UL>
    </Card>
);

const InfiniteOptionsInfo: React.FC = () => (
    <Card>
        <div className="container align-item-baseline" style={{display: "flex", justifyContent: "space-between"}}>
            <p className={`${Classes.TEXT_LARGE} ${Classes.TEXT_MUTED}`}>Robotics Engineer</p>
            <p className={`${Classes.TEXT_LARGE} ${Classes.TEXT_MUTED} bp4-align-right`}>Dec 2018 - Oct 2019</p>
        </div>
        <p className={`${Classes.TEXT_LARGE} ${Classes.TEXT_MUTED}`}>San Jose, CA</p>
        <UL className={Classes.TEXT_LARGE}>
            <li>Building an Indoor autonomous robot prototype using ROS that can navigate in an unknown environment and shoot live videos</li>
            <li>Integrated hardware to get autonomy and control stack running on the robot prototype</li>
            <li>Built & trained a Notes Classifier using Convolutional Neural Network (CNN) in python that can classify & file handwritten notes</li>
            <li>Established and maintained relationships with collaborating hardware suppliers to meet project goals</li>
        </UL>
    </Card>
);

const SkyCartInfo: React.FC = () => (
    <Card>
        <div className="container align-item-baseline" style={{display: "flex", justifyContent: "space-between"}}>
            <p className={`${Classes.TEXT_LARGE} ${Classes.TEXT_MUTED}`}>Robotics Engineer</p>
            <p className={`${Classes.TEXT_LARGE} ${Classes.TEXT_MUTED} bp4-align-right`}>Aug 2018 - Dec 2018</p>
        </div>
        <p className={`${Classes.TEXT_LARGE} ${Classes.TEXT_MUTED}`}>San Jose, CA</p>
        <UL className={Classes.TEXT_LARGE}>
            <li>Performed simulation of Model Free Adaptive Controller (MFAC) for discrete Non-Linear systems using python and compared its performance with conventional PID controller</li>
            <li>Designed & simulated a Model Free Adaptive Control algorithm in Simulink for precision landing of a Hexacopter</li>
            <li>Implemented SITL (Software in the loop) using ROS (Robot Operating System) for precision landing of a Hexacopter</li>
        </UL>
    </Card>
);

const VinayWireInfo: React.FC = () => (
    <Card>
        <div className="container align-item-baseline" style={{display: "flex", justifyContent: "space-between"}}>
            <p className={`${Classes.TEXT_LARGE} ${Classes.TEXT_MUTED}`}>Mechanical Engineering Intern</p>
            <p className={`${Classes.TEXT_LARGE} ${Classes.TEXT_MUTED} bp4-align-right`}>June 15 - July 16</p>
        </div>
        <p className={`${Classes.TEXT_LARGE} ${Classes.TEXT_MUTED}`}>Gujarat, India</p>
        <UL className={Classes.TEXT_LARGE}>
            <li>Designed an Automatic spot-welding machine to perform wire-mesh welding operation which improved productivity by 70 percent</li>
            <li>Developed a Semi-Automatic wire bending machine using an existing pneumatic cylinder</li>
        </UL>
    </Card>
);

function handleClickScroll(id) {
    const element = document.getElementById(id);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
};