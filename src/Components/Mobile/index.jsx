import React, { Component } from "react";
import MobileStyle from "./style";
import logo from "../../images/Logo-a.png";
import Home from "../../images/home.svg";
import block from "../../images/block.svg";
import { NavLink } from "react-router-dom";
import { Image, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
const { SubMenu } = Menu;
class Mobile extends Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
    };
  }
  openMenu = () => {
    const { showMenu } = this.state;
    try {
      this.setState({
        showMenu: !showMenu,
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <MobileStyle>
        <div className="mobilemenu">
          <NavLink className="loGo" to="/">
            <Image src={logo} preview={false}></Image>
          </NavLink>
          <div onClick={this.openMenu}>
            <MenuOutlined className="outline"/>
          </div>
        </div>
        {this.state.showMenu && (
          <div className="menuView">
            <div className="MenuBox">
              <Menu style={{ width: "auto" }} mode="inline">
                <Menu.Item
                  key="1"
                  icon={<Image src={Home} width={10} preview={false}></Image>}
                >
                  <NavLink to="/dashboard">Dashboard</NavLink>
                </Menu.Item>
                <SubMenu
                  key="sub1"
                  icon={<Image src={block} width={10} preview={false}></Image>}
                  title="Master"
                >
                  <Menu.Item
                    key="2"
                    icon={
                      <Image src={block} width={10} preview={false}></Image>
                    }
                  >
                    <NavLink to="/machine_group"> Machine Group </NavLink>
                  </Menu.Item>
                  <Menu.Item
                    key="3"
                    icon={
                      <Image src={block} width={10} preview={false}></Image>
                    }
                  >
                    <NavLink to="/css/machine"> Machine </NavLink>
                  </Menu.Item>
                  <Menu.Item
                    key="4"
                    icon={
                      <Image src={block} width={10} preview={false}></Image>
                    }
                  >
                    <NavLink to="/css/headquater">Headquarter</NavLink>
                  </Menu.Item>
                  <Menu.Item
                    key="5"
                    icon={
                      <Image src={block} width={10} preview={false}></Image>
                    }
                  >
                    <NavLink to="/css/branch">Branch</NavLink>
                  </Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  icon={<Image src={block} width={10} preview={false}></Image>}
                  title="Complaints"
                ></SubMenu>
              </Menu>
            </div>
          </div>
        )}
      </MobileStyle>
    );
  }
}
export default Mobile;
