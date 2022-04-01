import { Menu, Dropdown } from "antd";
import {
  BellOutlined,
  MessageOutlined,
  UserOutlined,
  SettingOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";
import "./header.css";
const styles = {
  backgroundColor: "white",
  WebkitBoxShadow: "0px 2px 7px 2px rgba(0,0,0,0.64)",
  boxShadow: "0px 2px 7px 2px rgba(0,0,0,0.64)",
};
const Header = () => {
  const dropdown = (
    <Menu style={styles}>
      <Menu.Item key="1" icon={<UserOutlined />}>
        1st menu item
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        2nd menu item
      </Menu.Item>
      <Menu.Item key="3" icon={<UserOutlined />}>
        3rd menu item
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="top">
      <div className="topWrapper">
        <div className="topContainterLeft">
          <span className="logo">Document Page</span>
        </div>
        <div className="topContainterRight">
          <div className="topbarIconContainer">
            <Dropdown overlay={dropdown} trigger={["click"]}>
              <BellOutlined className="topbarIcon" />
            </Dropdown>
          </div>
          <div className="topbarIconContainer">
            <Dropdown overlay={dropdown} trigger={["click"]}>
              <MessageOutlined className="topbarIcon" />
            </Dropdown>
          </div>
          <div className="topbarIconContainer">
            <Dropdown overlay={dropdown} trigger={["click"]}>
              <CaretDownOutlined className="topbarIcon" />
            </Dropdown>
          </div>
          <div className="topbarIconContainer">
            <Dropdown overlay={dropdown} trigger={["click"]}>
              <SettingOutlined className="topbarIcon" />
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
