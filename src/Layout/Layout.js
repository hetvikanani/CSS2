import React, { Component } from "react";
import logo from "../../src/images/Logo-a.png";
import {
  Layout,
  Menu,
  Breadcrumb,
  Input,
  Space,
  Badge,
  Avatar,
  Divider,
} from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  BellOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../images/NewLofo.svg";
import Mobile from "../Components/Mobile";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;
class MyLayout extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
      height: 0,
    };
  }

  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    console.log("state", this.state);
    return (
      <div>
        <Layout
          style={{
            minHeight: "100vh",
            padding: "1.25rem 2rem",
            background: "rgb(28, 63, 170)",
          }}
        >
          {this.state.width > 767 ? (
            <Sider className="site-layout-background" width={200}>
              <div className="myCustomLogo">
                <Link to="/css/dashboard">
                  <img
                    className="ant-image-img w-16"
                    src={logo}
                    style={{ width: "56px", height: "56px" }}
                  ></img>
                </Link>
              </div>
              <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{ fontWeight: "bold", color: "#FFFFFF" }}
              >
                <Menu.Item key="sub1" icon={<HomeOutlined />}>
                  <Link to="/css/dashboard">Dashboard</Link>
                </Menu.Item>
                <SubMenu key="sub2" icon={<LaptopOutlined />} title="Master">
                  <Menu.Item key="5">
                    <Link to="/css/machine-group">Machine Group</Link>
                  </Menu.Item>
                  <Menu.Item key="6">
                    <Link to="/css/machine">Machine</Link>
                  </Menu.Item>
                  <Menu.Item key="7">
                    {" "}
                    <Link to="/css/headquater">Headquater</Link>
                  </Menu.Item>
                  <Menu.Item key="8">
                    <Link to="/css/branch">Branch</Link>
                  </Menu.Item>
                  <Menu.Item key="9">
                    <Link to="/css/allotmachine">Allot Machine</Link>
                  </Menu.Item>
                  <Menu.Item key="10">Employee</Menu.Item>
                  <Menu.Item key="11">Technician</Menu.Item>
                  <Menu.Item key="12">Complaint Master</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub3"
                  icon={<NotificationOutlined />}
                  title="Complaints"
                >
                  <Menu.Item key="10">Assigned</Menu.Item>
                  <Menu.Item key="11">UnAssigned</Menu.Item>
                  <Menu.Item key="12">Raise Complaint</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
          ) : (
            <Mobile />
          )}

          <Layout
            className="site-layout"
            style={{
              borderRadius: "5%",
              background: "white",
            }}
          >
            <Content style={{ padding: "0 24px" }}>
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default MyLayout;

// import React, { Component } from "react";
// import {MenuStyle} from "./style";
// import logo from "../../src/images/Logo-a.png";
// // import Home from '../../assets/images/home.svg'
// // import block from '../../assets/images/block.svg'
// import { NavLink } from "react-router-dom";
// import { Image, Menu } from "antd";
// const { SubMenu } = Menu;

// class MMenu extends Component {
//   constructor() {
//     super();
//     this.state = {
//       showMenu: false,
//     };
//   }
//   openMenu = () => {
//     const { showMenu } = this.state;
//     try {
//       this.setState({
//         showMenu: !showMenu,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   render() {
//     return (
//       <MenuStyle>
//         <div className="mobilemenu">
//           <NavLink className="loGo" to="/">
//             <Image src={logo} preview={false}></Image>
//           </NavLink>
//           <div onClick={this.openMenu}>

//             <svg
//               height="30"
//               viewBox="0 0 24 24"
//               width="30"
//               fill="none"
//               stroke="currentColor"
//               xmlns="http://www.w3.org/2000/svg"
//               className="menu_Toggel"
//             >
//               <line x1="18" y1="20" x2="18" y2="10"></line>
//               <line x1="12" y1="20" x2="12" y2="4"></line>
//               <line x1="6" y1="20" x2="6" y2="14"></line>
//             </svg>
//           </div>
//         </div>
//         {this.state.showMenu && (
//           <div className="menuView">
//             <div className="MenuBox">
//               <Menu style={{ width: "auto" }} mode="inline">
//                 <Menu.Item
//                   key="1"
//                   icon={<Image  width={10} preview={false}></Image>}
//                 >
//                   <NavLink to="/dashboard">Dashboard</NavLink>
//                 </Menu.Item>
//                 <SubMenu
//                   key="sub1"
//                   icon={<Image  width={10} preview={false}></Image>}
//                   title="Master"
//                 >
//                   <Menu.Item
//                     key="2"
//                     icon={
//                       <Image  width={10} preview={false}></Image>
//                     }
//                   >
//                     <NavLink to="/machine_group"> Machine Group </NavLink>
//                   </Menu.Item>
//                   <Menu.Item
//                     key="3"
//                     icon={
//                       <Image  width={10} preview={false}></Image>
//                     }
//                   >
//                     <NavLink to="/machine"> Machine </NavLink>
//                   </Menu.Item>
//                   <Menu.Item
//                     key="4"
//                     icon={
//                       <Image  width={10} preview={false}></Image>
//                     }
//                   >
//                     <NavLink to="/headquarter">Headquarter</NavLink>
//                   </Menu.Item>
//                   <Menu.Item
//                     key="5"
//                     icon={
//                       <Image  width={10} preview={false}></Image>
//                     }
//                   >
//                     <NavLink to="/branch">Branch</NavLink>
//                   </Menu.Item>
//                 </SubMenu>
//                 <SubMenu
//                   key="sub2"
//                   icon={<Image  width={10} preview={false}></Image>}
//                   title="Complaints"
//                 ></SubMenu>
//               </Menu>
//             </div>
//           </div>
//         )}
//       </MenuStyle>
//     );
//   }
// }
// export default MMenu;
