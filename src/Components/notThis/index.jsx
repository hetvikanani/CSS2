import React, { Component } from "react";
import { MenuStyle } from "./MenuStyle";
import { Image, Divider } from "antd";
import logo from "../../assets/images/Logo-a.png";
import Home from "../../assets/images/home.svg";
import Home_Blue from "../../assets/images/home-blue.svg";
import block from "../../assets/images/block.svg";
import block_Blue from "../../assets/images/block-blue.svg";
import Aerro from "../../assets/images/next.svg";
import Aerro_Blue from "../../assets/images/next-blue.svg";
import { NavLink } from "react-router-dom";

const master = [
  "machine_group",
  "machine",
  "headquarter",
  "branch",
  "allot_machine",
  "employee",
  "technician",
  "complaint_master",
  "complaints",
  "machine_group/add",
  "machine/add",
  "headquarter/add",
  "branch/add",
];
const complaints = ["assigned", "unassigned", "complaint_master"];
class Menu extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
      showCMenu: false,
      master: false,
      complaints: false,
      dashboard: true,
      selected: "",
      path: "",
      eid: 0,
      // redirect:"",
    };
  }
  componentDidMount() {
    // let path=window.location.pathname;
    //   this.setState({path});
    // let index=master.findIndex(x=>"/"+x===path)
    // if(index>-1)this.setState({selected:"master"})
    // let index2=complaints.findIndex(y=>"/"+y===path)
    // if(index2>-1)this.setState({selected:"complaints"})
    let path = window.location.pathname;

    if (this.state.path !== path) {
      let index = master.findIndex((x) => "/" + x === path);
      if (index > -1) this.setState({ selected: "master" });
      let index2 = complaints.findIndex((y) => "/" + y === path);
      if (index2 > -1) this.setState({ selected: "complaints" });
      let id = path.split("edit/")[1];
      this.setState({ path, eid: id ? id : 0 });
    }
  }
  componentDidUpdate(prevState) {
    let path = window.location.pathname;

    if (this.state.path !== path) {
      let index = master.findIndex((x) => "/" + x === path);
      if (index > -1) this.setState({ selected: "master" });
      let index2 = complaints.findIndex((y) => "/" + y === path);
      if (index2 > -1) this.setState({ selected: "complaints" });
      let id = path.split("edit/")[1];
      this.setState({ path, eid: id ? id : 0 });
    }
    // let path = window.location.pathname

    // if(this.state.path !== path){
    //   let index=master.findIndex(x=>"/"+x===path)
    // if(index>-1)this.setState({selected:"master"});
    // let index2=complaints.findIndex(y=>"/"+y===path)
    // if(index2>-1)this.setState({selected:"complaints"});
    //     let id=path.split("edit/")[1];
    //     this.setState({path});

    //    }
  }
  handleClick = (a) => {
    try {
      this.setState({
        master: false,
        complaints: false,
        dashboard: true,
        // redirect:a,
      });
      this.setState({ showMenu: false, showCMenu: false });
    } catch (error) {
      console.log(error);
    }
  };
  showMenu = (a) => {
    this.setState({
      showMenu: a === "master" && !this.state.showMenu,
    });
    this.setState({ showCMenu: false });
  };
  showCMenu = (a) => {
    this.setState({ showCMenu: a === "complaints" && !this.state.showCMenu });
    this.setState({ showMenu: false });
  };
  masterClick = (a) => {
    this.setState({
      master: true,
      complaints: false,
      // showMenu: false,
      dashboard: false,
      // redirect:a,
    });
    this.setState({ selected: a });
  };
  complaintsClick = (a) => {
    this.setState({
      dashboard: false,
      complaints: true,
      master: false,
      //  showCMenu: false,
      //  redirect:a,
    });
    this.setState({ selected: a });
  };
  render() {
    // if(this.state.redirect!=="")return <Redirect to={"/"+this.state.redirect} />;
    const { path, selected, eid } = this.state;
    const { id } = this.props;

    return (
      <MenuStyle>
        <nav className="side-nav">
          <a className="logo" href="/">
            <Image src={logo} preview={false}></Image>
          </a>
          {/* <Divider type="horizontal" /> */}
          <div className="Divider"></div>
          <ul>
            <li>
              <NavLink to="/dashboard">
                <div
                  className={
                    path === "/dashboard" || path === "/"
                      ? "side-menu side-menu--active"
                      : "side-menu"
                  }
                  onClick={() => this.handleClick("Dashboard")}
                >
                  <div className="side-menu__icon ">
                    {path === "/dashboard" || path === "/" ? (
                      <Image src={Home_Blue} preview={false}></Image>
                    ) : (
                      <Image src={Home} preview={false}></Image>
                    )}
                  </div>
                  <div className="title">Dashboard</div>
                </div>{" "}
              </NavLink>
            </li>
            <li>
              <div
                className=// "side-menu"
                {
                  this.state.master ||
                  selected === "master" ||
                  path === "/machine_group/edit/" + id ||
                  path === "/machine/edit/" + id ||
                  path === "/headquarter/edit/" + id ||
                  path === "/branch/edit/" + id
                    ? "side-menu side-menu--active"
                    : "side-menu"
                }
                onClick={() => this.showMenu("master")}
              >
                <div className="side-menu__icon ">
                  {this.state.master ||
                  selected === "master" ||
                  path === "/machine_group/edit/" + id ||
                  path === "/machine/edit/" + id ||
                  path === "/headquarter/edit/" + id ||
                  path === "/branch/edit/" + id ? (
                    <Image src={block_Blue} preview={false}></Image>
                  ) : (
                    <Image src={block} preview={false}></Image>
                  )}
                  {/* <Image src= {block} preview = {false}></Image> */}
                </div>
                <div className="title">
                  Master
                  <div className="side-menu__sub-icon ">
                    {this.state.master ||
                    selected === "master" ||
                    path === "/machine_group/edit/" + id ||
                    path === "/machine/edit/" + id ||
                    path === "/headquarter/edit/" + id ||
                    path === "/branch/edit/" + id ? (
                      <Image
                        className={this.state.showMenu ? "Aerro" : ""}
                        src={Aerro_Blue}
                        preview={false}
                      ></Image>
                    ) : (
                      <Image
                        className={this.state.showMenu ? "Aerro" : ""}
                        src={Aerro}
                        preview={false}
                      ></Image>
                    )}
                    {/* <Image className={this.state.showMenu ?"Aerro":""} src= {Aerro} preview = {false}></Image> */}
                  </div>
                </div>
              </div>

              {this.state.showMenu ? (
                <ul className="side-menu__sub-open ">
                  <li
                    onClick={() => this.masterClick("machine_group")}
                    className={
                      path === "/machine_group" || path === "/machine_group/add"
                        ? "Action Action2"
                        : ""
                    }
                  >
                    <NavLink className="side_menu" to="/machine_group">
                      <div className="side-menu__icon ">
                        <Image src={block} preview={false}></Image>
                      </div>
                      <div className="title">Machine Group</div>
                    </NavLink>
                  </li>
                  <li
                    onClick={() => this.masterClick("machine")}
                    className={
                      path === "/machine" || path === "/machine/add"
                        ? "Action "
                        : ""
                    }
                  >
                    <NavLink to="/machine">
                      <div className="side-menu__icon ">
                        <Image src={block} preview={false}></Image>
                      </div>
                      <div className="title">Machine</div>
                    </NavLink>
                  </li>
                  <li
                    onClick={() => this.masterClick("headquarter")}
                    className={
                      path === "/headquarter" || path === "/headquarter/add"
                        ? "Action"
                        : ""
                    }
                  >
                    <NavLink to="/headquarter">
                      <div className="side-menu__icon ">
                        <Image src={block} preview={false}></Image>
                      </div>
                      <div className="title">Headquarter</div>
                    </NavLink>
                  </li>
                  <li
                    onClick={() => this.masterClick("branch")}
                    className={
                      path === "/branch" || path === "/branch/add"
                        ? "Action"
                        : ""
                    }
                  >
                    <NavLink to="/branch">
                      <div className="side-menu__icon ">
                        <Image src={block} preview={false}></Image>
                      </div>
                      <div className="title">Branch</div>
                    </NavLink>
                  </li>
                  <li
                    onClick={() => this.masterClick("allot_machine")}
                    className={path === "/allot_machine  " ? "Action" : ""}
                  >
                    <NavLink to="/allot_machine">
                      <div className="side-menu__icon ">
                        <Image src={block} preview={false}></Image>
                      </div>
                      <div className="title">Allot Machine</div>
                    </NavLink>
                  </li>
                  <li
                    onClick={() => this.masterClick("employee")}
                    className={path === "/employee" ? "Action" : ""}
                  >
                    <NavLink to="/employee">
                      <div className="side-menu__icon ">
                        <Image src={block} preview={false}></Image>
                      </div>
                      <div className="title">Employee</div>
                    </NavLink>
                  </li>
                  <li
                    onClick={() => this.masterClick("technician")}
                    className={path === "/technician" ? "Action" : ""}
                  >
                    <NavLink to="/technician">
                      <div className="side-menu__icon ">
                        <Image src={block} preview={false}></Image>
                      </div>
                      <div className="title">Technician</div>
                    </NavLink>
                  </li>
                  <li
                    onClick={() => this.masterClick("complaint_master")}
                    className={
                      path === "/complaint_master" ? "Action Action3" : ""
                    }
                  >
                    <NavLink to="/complaint_master">
                      <div className="side-menu__icon ">
                        <Image src={block} preview={false}></Image>
                      </div>
                      <div className="title">Complaint Master</div>
                    </NavLink>
                  </li>
                </ul>
              ) : null}
            </li>
            <li>
              <div
                className=//  "side-menu "
                {
                  this.state.complaints || selected === "complaints"
                    ? "side-menu side-menu--active"
                    : "side-menu"
                }
                onClick={() => this.showCMenu("complaints")}
              >
                <div className="side-menu__icon ">
                  {this.state.complaints || selected === "complaints" ? (
                    <Image src={block_Blue} preview={false}></Image>
                  ) : (
                    <Image src={block} preview={false}></Image>
                  )}
                </div>
                <div className="title">
                  Complaints
                  <div className="side-menu__sub-icon ">
                    {this.state.complaints || selected === "complaints" ? (
                      <Image
                        className={this.state.showCMenu ? "Aerro" : ""}
                        src={Aerro_Blue}
                        preview={false}
                      ></Image>
                    ) : (
                      <Image
                        className={this.state.showCMenu ? "Aerro" : ""}
                        src={Aerro}
                        preview={false}
                      ></Image>
                    )}
                    {/* <Image className={this.state.showCMenu ?"Aerro":""} src= {Aerro} preview = {false}></Image> */}
                  </div>
                </div>
              </div>
              {this.state.showCMenu ? (
                <ul className="side-menu__sub-open">
                  <li
                    onClick={() => this.complaintsClick("assigned")}
                    className={path === "/assigned" ? "Action Action2" : ""}
                  >
                    <NavLink to="/assigned">
                      <div className="side-menu__icon ">
                        <Image src={block} preview={false}></Image>
                      </div>
                      <div className="title">Assigned</div>
                    </NavLink>
                  </li>
                  <li
                    onClick={() => this.complaintsClick("unassigned")}
                    className={path === "/unassigned" ? "Action" : ""}
                  >
                    <NavLink to="unassigned">
                      <div className="side-menu__icon ">
                        <Image src={block} preview={false}></Image>
                      </div>
                      <div className="title">Unassigned</div>
                    </NavLink>
                  </li>
                  <li
                    onClick={() => this.complaintsClick("complaint_master")}
                    className={path === "/complaint_master" ? "Action" : ""}
                  >
                    <NavLink to="complaint_master">
                      <div className="side-menu__icon ">
                        <Image src={block} preview={false}></Image>
                      </div>
                      <div className="title">Complaint Master</div>
                    </NavLink>
                  </li>
                </ul>
              ) : null}
            </li>
          </ul>
        </nav>
      </MenuStyle>
    );
  }
}
export default Menu;
