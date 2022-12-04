import * as React from "react";
import {
    Button,
    Callout,
    Card,
    Classes,
    Colors,
    Divider,
    FormGroup,
    H1, H4, H6,
    Icon,
    InputGroup,
    UL,
    Navbar,
    NavbarHeading,
    NavbarGroup,
    Tab,
    Tabs,
    Text, TextArea} from "@blueprintjs/core";
import Cookies from "js-cookie";
import { SiteContent } from "../services/api/SiteContent.ts"
import background from "../img/profilepicture.jpg"
import { send } from "emailjs-com";

interface IPageState {
    experienceList? : []
    skillList? : []
    projectList? : []
    emailId?: string
    emailValid?: boolean
    name?: string
    message?: string
    emailStatus?: boolean
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export class Page extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            experienceList: undefined,
            skillList: undefined,
            projectList: undefined,
            emailId: '',
            name: '',
            message: '',
            emailValid: false,
        }
    }
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
                        <H1 className="bp4-text-muted">I like to build cool stuff.</H1>
                        <H4 className="bp4-text-muted">
                            I'm an engineer who specializes in building Robots,
                            Web Applications and much more.
                        </H4>
                        <p className="bp4-text-large">Here are some of the technologies, I've been working on recently:</p>
                        <UL className={`${Classes.TEXT_LARGE} skills`} style={{paddingTop: "10px"}}>
                            {this.state.skillList?.map((value, index) =>
                                <li>{value.name}</li>)}
                        </UL>
                        <Button className="bp4-large bp4-outlined bp4-intent-success" onClick={() => handleClickScroll('projects')}>Checkout my work</Button>
                    </div>
                    <img className= "img" src={background} style={{marginLeft: "10%"}} alt="Pic"/>
                </div>
                <div id="experience" style={{marginTop: "10%", textAlign: "left"}}>
                    <Text>Where I've Worked</Text>
                    <Divider/>
                    <Tabs id="Experience" defaultSelectedTabId={1} style={{paddingTop: "10px"}}>
                        {this.state.experienceList?.map((value, index) =>
                            <Tab id={value.id} title={value.company} panel={
                                <Card>
                                    <div className="container align-item-baseline" style={{display: "flex", justifyContent: "space-between"}}>
                                        <p className={`${Classes.TEXT_LARGE} ${Classes.TEXT_MUTED}`}>{value.title}</p>
                                        <p className={`${Classes.TEXT_LARGE} ${Classes.TEXT_MUTED}`}>
                                            {new Date(value.start_date).toLocaleString('default', {month: 'short'})} {new Date(value.start_date).getUTCFullYear()} - {value.end_date? `${new Date(value.end_date).toLocaleString('default', {month: 'short'})} ${new Date(value.start_date).getUTCFullYear()}` : "Present"}
                                        </p>
                                    </div>
                                    <p className={`${Classes.TEXT_LARGE} ${Classes.TEXT_MUTED}`}>{value.location}</p>
                                    <UL className={Classes.TEXT_LARGE}>
                                        {value.description.split(/\r?\n/).map(desc =>
                                            <li>{desc}</li>
                                        )}
                                    </UL>
                                </Card>
                            } />
                        )}
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
                <div id="contact" className="container" style={{marginTop: "10%", marginBottom:"30%", textAlign: "left"}}>
                    <Text>Get in Touch</Text>

                    <Divider/>
                    <form
                        id="contactForm"
                        // method="post"
                        onSubmit={this.handleSubmit.bind(this)}>
                        <FormGroup labelFor="text-input">
                            <Text style={{marginBottom: "3px"}} className={"bp4-text-large"}>Name:</Text>
                            <TextArea rows={1}
                                        style={{ width: "50%"}}
                                        fill={true}
                                        name={"name"}
                                        onChange={this.handleChange}
                                        placeholder={"Your Name"}
                                        value={this.state.name}
                                        required={true}/>
                        </FormGroup>

                        <FormGroup labelFor="text-input">
                            <Text style={{marginBottom: "3px"}} className={"bp4-text-large"}>Email:</Text>
                            <TextArea rows={1}
                                      style={{width: "50%"}}
                                      name={"email id"}
                                      fill={true}
                                      onChange={this.handleChange}
                                      placeholder={"Your Email"}
                                      value={this.state.emailId}/>
                        </FormGroup>

                        <FormGroup labelFor="text-input">
                            <Text style={{marginBottom: "3px"}} className={"bp4-text-large"}>Message:</Text>
                            <TextArea rows={10}
                                      style={{ width: "50%"}}
                                      name={"message"}
                                      fill={true}
                                      onChange={this.handleChange}
                                      placeholder={"Your Message..."}
                                      value={this.state.message}/>
                        </FormGroup>

                        <Button className="bp4-large bp4-outlined bp4-intent-success"
                                style={{width: "50%"}}
                                disabled={this.state.name === "" || this.state.message === "" || !this.state.emailValid ? true : false}
                                type="submit"
                                value="submit">
                            {this.state.emailStatus ? <Text><Icon icon="tick-circle" style={{marginRight:"3px"}}/> Sent</Text> :
                             this.state.emailStatus === false ? <Text><Icon icon="cross-circle" style={{marginRight:"3px"}}/> Failed to send Message. Please try again later</Text> :
                             <Text>Send Message</Text>}
                        </Button>
                        {this.state.name === "" || this.state.message === "" || !this.state.emailValid ?
                            <Callout className={"bp4-intent-danger"}
                                 style={{width: "50%", textAlign: "center"}}>
                                Please enter the above information
                                <UL style={{textAlign: "left"}}>
                                    {this.state.name === "" ? <li>Please enter your name</li>: null}
                                    {!this.state.emailValid ? <li>Please enter a valid email ID</li>: null}
                                    {this.state.message === "" ? <li>Please enter your message</li>: null}
                                </UL>
                           </Callout>
                            : null}
                    </form>
                </div>
            </div>
        )
    }

    componentDidMount(){
        Promise.all([
            this.getExperience(),
            this.getProject(),
            this.getSkill()]
        )
    }

    getExperience() {
        SiteContent.ExperienceList().then((response: any) => {
            this.setState({
                experienceList: response.data.experiences
            });
        })
    }


    getProject() {
        SiteContent.ProjectList().then((response: any) => {
            this.setState({
                projectList: response.data.projects
            });
        })
    }

    getSkill() {
        SiteContent.SkillList().then((response: any) => {
            this.setState({
                skillList: response.data.skills
            });
        })
    }

    handleSubmit(event: any){
        event.preventDefault();
        let templateParams = {
          name: this.state.name,
          from_emailId: this.state.emailId,
          to_name: 'Archit',
          message: this.state.message,
         }
        send(
          'service_yu03nyu',
          'template_y77ro4e',
           templateParams,
          'vpHuiyi-DfJZXKeho'
        ).then((response) => {
            this.setState({
                emailStatus: true
            })
            console.log('SUCCESS!', response.status, response.text);
          })
          .catch((err) => {
            this.setState({
                emailStatus: false
            })
            console.log('FAILED...', err);
          });
    }

    handleChange = (event) => {
        switch(event.target.name){
            case "name":
                this.setState({
                    name: event.target.value
                })
                break;
            case "email id":
                if (!validateEmail(event.target.value)){
                    this.setState({
                        emailValid: false,
                        emailId: event.target.value
                    })
                }
                else{
                    this.setState({
                        emailValid: true,
                        emailId: event.target.value
                    })
                }
                break;
            case "message":
                this.setState({
                    message: event.target.value
                })
                break;
        }
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
            <p className={`${Classes.TEXT_LARGE} ${Classes.TEXT_MUTED} bp4-align-right`}>June 2015 - July 2016</p>
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