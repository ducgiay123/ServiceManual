import React from "react";
import "./nav.css";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { FolderAddOutlined, BookOutlined } from "@ant-design/icons";
import Icon from "./icon.png";
const Nav = () => {
  const { Sider } = Layout;
  const { SubMenu } = Menu;

  return (
    <Sider
      className="sider-antd"
      style={{
        height: "100vh",
        overflow: "auto",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div className="filler">
        <img src={Icon} alt="" />
      </div>
      <Menu
        style={{}}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode={"inline"}
      >
        <SubMenu key="GENERAL" icon={<FolderAddOutlined />} title="GENERAL">
          {/* <SubMenu
            key="GENERAL1"
            icon={<FolderAddOutlined />}
            title="GENERAL <ELECTRICAL>"
          >
            <Menu.Item key="GENERALHOW" icon={<BookOutlined />}>
              <Link to="/page1">HOW TO READ WIRING DIAGRAMS</Link>
            </Menu.Item>
          </SubMenu> */}

          <Menu.Item key="HOW TO USE MANUAL" icon={<BookOutlined />}>
            <Link to="/page2">HOW TO USE MANUAL</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu title="COOLING" icon={<FolderAddOutlined />} key="COOLING">
          <Menu.Item key="COOLING1" icon={<BookOutlined />}>
            <Link to="/page3">
              <Link to="/page3">SERVICE SPECIFICATIONS</Link>
            </Link>
          </Menu.Item>
          <Menu.Item key="COOLING2C" icon={<BookOutlined />}>
            LUBRICANTS
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="MOTOR"
          icon={<FolderAddOutlined />}
          title="MOTOR (ELECTRIC MOTOR UNIT) CONTROL"
        >
          <Menu.Item key="ACCELERATOR" icon={<BookOutlined />}>
            <Link to="/page4">
              <Link to="/page4">ACCELERATOR PEDAL</Link>
            </Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item
          key="ACCELWheelsandTyreServiceSpecificationsERATOR"
          icon={<BookOutlined />}
        >
          <Link to="/page8">
            <Link to="/page8">DISCHARGING BATTERY</Link>
          </Link>
        </Menu.Item>
        <SubMenu
          key="TRANSMISSION"
          icon={<FolderAddOutlined />}
          title="TRANSMISSION"
        >
          <Menu.Item key="LUBRICANTS1" icon={<BookOutlined />}>
            <Link to="/page7">LUBRICANTS</Link>
          </Menu.Item>
          <Menu.Item key="8" icon={<BookOutlined />}>
            SPECIAL TOOLS
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="TRANSMISSION OVERHAUL"
          icon={<FolderAddOutlined />}
          title="TRANSMISSION OVERHAUL"
        >
          <Menu.Item key="GENERAL INFORMATION1" icon={<BookOutlined />}>
            <Link to="/page4">GENERAL INFORMATION</Link>
          </Menu.Item>
          <Menu.Item key="GENERAL SPECIFICATIONS" icon={<BookOutlined />}>
            GENERAL SPECIFICATIONS
          </Menu.Item>
          <Menu.Item key="LUBRICANTST" icon={<BookOutlined />}>
            LUBRICANTS
          </Menu.Item>
          <Menu.Item key="SEALANTS" icon={<BookOutlined />}>
            SEALANTS
          </Menu.Item>
          <Menu.Item key="SNAP" icon={<BookOutlined />}>
            SNAP, SPRING SPACER AND THRUST PLATE
          </Menu.Item>
          <Menu.Item key="TORQUE SPECIFICATION" icon={<BookOutlined />}>
            TORQUE SPECIFICATION
          </Menu.Item>
          <Menu.Item key="SPECIAL TOOLS1" icon={<BookOutlined />}>
            SPECIAL TOOLS
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="FRONT AXLE"
          icon={<FolderAddOutlined />}
          title="FRONT AXLE"
        >
          <Menu.Item key="SERVICE SPECIFICATIONS1" icon={<BookOutlined />}>
            SERVICE SPECIFICATIONS
          </Menu.Item>
          <Menu.Item key="SPECIAL TOOLS2" icon={<BookOutlined />}>
            SPECIAL TOOLS
          </Menu.Item>
        </SubMenu>
        <SubMenu key="REAR AXLE" icon={<FolderAddOutlined />} title="REAR AXLE">
          <Menu.Item key="SERVICE SPECIFICATIONS2" icon={<BookOutlined />}>
            SERVICE SPECIFICATIONS
          </Menu.Item>
          <Menu.Item key="SPECIAL TOOLS3" icon={<BookOutlined />}>
            SPECIAL TOOLS
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="FRONT SUSPENSION"
          icon={<FolderAddOutlined />}
          title="FRONT SUSPENSION"
        >
          <Menu.Item key="SERVICE SPECIFICATIONS4" icon={<BookOutlined />}>
            <Link to="/page6">SERVICE SPECIFICATIONS</Link>
          </Menu.Item>
          <Menu.Item key="LUBRICANTSFront" icon={<BookOutlined />}>
            LUBRICANTS
          </Menu.Item>
          <Menu.Item key="SPECIAL TOOLS5" icon={<BookOutlined />}>
            SPECIAL TOOLS
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="WHEEL AND TYRE"
          icon={<FolderAddOutlined />}
          title="WHEEL AND TYRE"
        >
          <Menu.Item key="SERVICE SPECIFICATIONS3" icon={<BookOutlined />}>
            <Link to="/page5">SERVICE SPECIFICATIONS</Link>
          </Menu.Item>
          <SubMenu
            key="SPECIAL TOOLS4"
            icon={<FolderAddOutlined />}
            title="SPECIAL TOOLS"
          >
            <Menu.Item key="TROUBLESHOOTING2" icon={<BookOutlined />}>
              TROUBLESHOOTING
            </Menu.Item>
            <Menu.Item key="WHEEL BALANCE ACCURACY" icon={<BookOutlined />}>
              WHEEL BALANCE ACCURACY
            </Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu
          key="POWER PLANT MOUNT"
          icon={<FolderAddOutlined />}
          title="POWER PLANT MOUNT"
        >
          <Menu.Item key="MOTOR MOUNTING" icon={<BookOutlined />}>
            MOTOR MOUNTING
          </Menu.Item>
        </SubMenu>

        <SubMenu
          key="REAR SUSPENSION"
          icon={<FolderAddOutlined />}
          title="REAR SUSPENSION"
        >
          <Menu.Item key="SERVICE SPECIFICATIONS5" icon={<BookOutlined />}>
            SERVICE SPECIFICATIONS
          </Menu.Item>
          <Menu.Item key="SPECIAL TOOLS6" icon={<BookOutlined />}>
            SPECIAL TOOLS
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="ASC"
          icon={<FolderAddOutlined />}
          title="ACTIVE STABILITY CONTROL SYSTEM (ASC)"
        >
          <Menu.Item key="SERVICE SPEFIFICATIONS" icon={<BookOutlined />}>
            SERVICE SPEFIFICATIONS
          </Menu.Item>
          <Menu.Item key="SPECIAL TOOLS7" icon={<BookOutlined />}>
            SPECIAL TOOLS
          </Menu.Item>
          <Menu.Item key="TROUBLESHOOTING" icon={<BookOutlined />}>
            TROUBLESHOOTING
          </Menu.Item>
          <Menu.Item key="ON-VEHICLE SERVICE" icon={<BookOutlined />}>
            ON-VEHICLE SERVICE
          </Menu.Item>
          <Menu.Item key="ASC OFF SWITCH" icon={<BookOutlined />}>
            ASC OFF SWITCH
          </Menu.Item>
          <Menu.Item key="HYDRAULIC UNIT" icon={<BookOutlined />}>
            HYDRAULIC UNIT
          </Menu.Item>
          <Menu.Item key="WHEEL SPEED SENSOR" icon={<BookOutlined />}>
            WHEEL SPEED SENSOR
          </Menu.Item>
          <Menu.Item key="G AND YAW RATE SENSOR" icon={<BookOutlined />}>
            G AND YAW RATE SENSOR
          </Menu.Item>
          <Menu.Item key="STEERING WHEEL SENSOR" icon={<BookOutlined />}>
            STEERING WHEEL SENSOR
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="PARKING BRAKES"
          icon={<FolderAddOutlined />}
          title="PARKING BRAKES"
        >
          <Menu.Item key="SERVICE SPECIFICATIONS6" icon={<BookOutlined />}>
            SERVICE SPECIFICATIONS
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="POWER STEERING"
          icon={<FolderAddOutlined />}
          title="POWER STEERING"
        >
          <Menu.Item key="SERVICE SPECIFICATIONS7" icon={<BookOutlined />}>
            SERVICE SPECIFICATIONS
          </Menu.Item>
          <Menu.Item key="LUBRICANTSP" icon={<BookOutlined />}>
            LUBRICANTS
          </Menu.Item>
          <Menu.Item key="SPECIAL TOOLS8" icon={<BookOutlined />}>
            SPECIAL TOOLS
          </Menu.Item>
        </SubMenu>
        <SubMenu key="BODY" icon={<FolderAddOutlined />} title="BODY">
          <Menu.Item key="HOOD" icon={<BookOutlined />}>
            HOOD
          </Menu.Item>
          <Menu.Item key="FENDER" icon={<BookOutlined />}>
            FENDER
          </Menu.Item>
          <Menu.Item key="SPLASH SHIELD" icon={<BookOutlined />}>
            SPLASH SHIELD
          </Menu.Item>
          <Menu.Item key="CHARGUNG LID" icon={<BookOutlined />}>
            CHARGUNG LID
          </Menu.Item>
          <Menu.Item key="WINDOW GLASS" icon={<BookOutlined />}>
            WINDOW GLASS
          </Menu.Item>
          <Menu.Item key="DOOR" icon={<BookOutlined />}>
            DOOR
          </Menu.Item>
          <Menu.Item key="TAILGATE" icon={<BookOutlined />}>
            TAILGATE
          </Menu.Item>
          <Menu.Item key="KEY ENTRANCE SYSTEM" icon={<BookOutlined />}>
            KEY ENTRANCE SYSTEM
          </Menu.Item>
          <Menu.Item key="LOOSE PANEL" icon={<BookOutlined />}>
            LOOSE PANEL
          </Menu.Item>
        </SubMenu>
        <SubMenu key="EXTERIOR" icon={<FolderAddOutlined />} title="EXTERIOR">
          <Menu.Item key="FRONT BUMPER ASSEMBLY" icon={<BookOutlined />}>
            FRONT BUMPER ASSEMBLY
          </Menu.Item>
          <Menu.Item key="REAR BUMBER ASSEMBLY" icon={<BookOutlined />}>
            REAR BUMBER ASSEMBLY
          </Menu.Item>
          <Menu.Item key="MOULDINGS" icon={<BookOutlined />}>
            MOULDINGS
          </Menu.Item>
          <Menu.Item key="GARNISHES" icon={<BookOutlined />}>
            GARNISHES
          </Menu.Item>
          <Menu.Item key="SIDE AUR DAM" icon={<BookOutlined />}>
            SIDE AUR DAM
          </Menu.Item>
          <Menu.Item key="UNDER COVER" icon={<BookOutlined />}>
            UNDER COVER
          </Menu.Item>
          <Menu.Item key="TAIL GATE SPOILER" icon={<BookOutlined />}>
            TAIL GATE SPOILER
          </Menu.Item>
          <Menu.Item key="WINSHIELD WIPER AND WASHER" icon={<BookOutlined />}>
            WINSHIELD WIPER AND WASHER
          </Menu.Item>
          <Menu.Item key="REAR WIPER AND WASHER" icon={<BookOutlined />}>
            REAR WIPER AND WASHER
          </Menu.Item>
          <Menu.Item key="MARK" icon={<BookOutlined />}>
            MARK
          </Menu.Item>
          <Menu.Item key="OUTSIDE MIRROR" icon={<BookOutlined />}>
            OUTSIDE MIRROR
          </Menu.Item>
        </SubMenu>
        <SubMenu key="INTERIOR" icon={<FolderAddOutlined />} title="INTERIOR">
          <Menu.Item key="SERVICE SPECIFICATIONS8" icon={<BookOutlined />}>
            SERVICE SPECIFICATIONS
          </Menu.Item>
          <Menu.Item key="INSTRUMENTAL PANEL ASSEMBLY" icon={<BookOutlined />}>
            INSTRUMENTAL PANEL ASSEMBLY
          </Menu.Item>
          <Menu.Item key="FLOOR CONSOLE ASSEMBLY" icon={<BookOutlined />}>
            FLOOR CONSOLE ASSEMBLY
          </Menu.Item>
          <Menu.Item key="TRIMS" icon={<BookOutlined />}>
            TRIMS
          </Menu.Item>
          <Menu.Item key="HEADLINING" icon={<BookOutlined />}>
            HEADLINING
          </Menu.Item>
          <Menu.Item key="SEAT ASSEMBLY" icon={<BookOutlined />}>
            SEAT ASSEMBLY
          </Menu.Item>
          <Menu.Item key="SEAT BELT" icon={<BookOutlined />}>
            SEAT BELT
          </Menu.Item>
          <Menu.Item key="TETHER ANCHOR" icon={<BookOutlined />}>
            TETHER ANCHOR
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="SRS" icon={<BookOutlined />}>
          SUPPLEMENTAL RESTRAINT SYSTEM (SRS)
        </Menu.Item>
        <SubMenu
          key="CHASSIS ELECTRICAL"
          icon={<FolderAddOutlined />}
          title="CHASSIS ELECTRICAL"
        >
          <Menu.Item key="AUXILIARY BATTERY" icon={<BookOutlined />}>
            AUXILIARY BATTERY
          </Menu.Item>
          <Menu.Item key="ELECTRIC MOTOR SWITCH" icon={<BookOutlined />}>
            ELECTRIC MOTOR SWITCH
          </Menu.Item>
          <Menu.Item key="INMOBILIZER SYSTEM" icon={<BookOutlined />}>
            INMOBILIZER SYSTEM
          </Menu.Item>
          <Menu.Item key="COMBINATION METER" icon={<BookOutlined />}>
            COMBINATION METER
          </Menu.Item>
          <Menu.Item key="HEADLAMP" icon={<BookOutlined />}>
            HEADLAMP
          </Menu.Item>
          <Menu.Item
            key="HEADLAMP AUTOMATIC LEVELLING SYSTEM"
            icon={<BookOutlined />}
          >
            HEADLAMP AUTOMATIC LEVELLING SYSTEM
          </Menu.Item>
          <Menu.Item key="REAR COMBINATION LAMP" icon={<BookOutlined />}>
            REAR COMBINATION LAMP
          </Menu.Item>
          <Menu.Item key="FOG LAMP" icon={<BookOutlined />}>
            FOG LAMP
          </Menu.Item>
          <Menu.Item key="SIDE TURN-SIGNAL LAMP" icon={<BookOutlined />}>
            SIDE TURN-SIGNAL LAMP
          </Menu.Item>
          <Menu.Item key="DAYTIME RUNNING LAMP" icon={<BookOutlined />}>
            DAYTIME RUNNING LAMP
          </Menu.Item>
          <Menu.Item key="INTERIOR LAMP" icon={<BookOutlined />}>
            INTERIOR LAMP
          </Menu.Item>
          <Menu.Item key="HIGH-MOUNTED STOP LAMP" icon={<BookOutlined />}>
            HIGH-MOUNTED STOP LAMP
          </Menu.Item>
          <Menu.Item key="LICENCE PLATE LAMP" icon={<BookOutlined />}>
            LICENCE PLATE LAMP
          </Menu.Item>
          <Menu.Item key="REGULAR CHARGE PORT LAMP" icon={<BookOutlined />}>
            REGULAR CHARGE PORT LAMP
          </Menu.Item>
          <Menu.Item key="HAZARD WARNING LAMP SWITCH" icon={<BookOutlined />}>
            HAZARD WARNING LAMP SWITCH
          </Menu.Item>
          <Menu.Item key="HORN" icon={<BookOutlined />}>
            HORN
          </Menu.Item>
          <Menu.Item key="COLUMN SWITCH" icon={<BookOutlined />}>
            COLUMN SWITCH
          </Menu.Item>
          <Menu.Item key="ACCESORY SOCKET" icon={<BookOutlined />}>
            ACCESORY SOCKET
          </Menu.Item>
          <Menu.Item key="RADIO" icon={<BookOutlined />}>
            RADIO
          </Menu.Item>
          <Menu.Item key="SPEAKER" icon={<BookOutlined />}>
            SPEAKER
          </Menu.Item>
          <Menu.Item key="ANTENNA" icon={<BookOutlined />}>
            ANTENNA
          </Menu.Item>
          <Menu.Item key="USB ADAPTER" icon={<BookOutlined />}>
            USB ADAPTER
          </Menu.Item>
          <Menu.Item key="MIEV REMOTE SYSTEM" icon={<BookOutlined />}>
            MIEV REMOTE SYSTEM
          </Menu.Item>
          <Menu.Item key="AVAS" icon={<BookOutlined />}>
            ACCOUSTIC VEHICLE ALERTING SYSTEM (AVAS)
          </Menu.Item>
          <Menu.Item key="ETACS" icon={<BookOutlined />}>
            ETACS
          </Menu.Item>
          <Menu.Item key="DEFOGGER" icon={<BookOutlined />}>
            DEFOGGER
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="LIN" icon={<BookOutlined />}>
          LOCAL INTERCONNECT NETWORK (LIN)
        </Menu.Item>
        <SubMenu
          key="CAN"
          icon={<FolderAddOutlined />}
          title="CONTROLLER AREA NETWORK (CAN)"
        >
          <Menu.Item key="SPECIAL TOOLS9" icon={<BookOutlined />}>
            SPECIAL TOOLS
          </Menu.Item>
          <Menu.Item key="TEST EQUIPMENT" icon={<BookOutlined />}>
            TEST EQUIPMENT
          </Menu.Item>
          <Menu.Item key="SERVICE PRECAUTIONS" icon={<BookOutlined />}>
            SERVICE PRECAUTIONS
          </Menu.Item>
        </SubMenu>
        <SubMenu key="EV-ECU" icon={<FolderAddOutlined />} title="EV-ECU">
          <Menu.Item key="GENERAL INFORMATION" icon={<BookOutlined />}>
            GENERAL INFORMATION
          </Menu.Item>
          <Menu.Item
            key="PRECAUTIONS ON HOW TO USE HIGH-VOLTAGE"
            icon={<BookOutlined />}
          >
            PRECAUTIONS ON HOW TO USE HIGH-VOLTAGE
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="ELECTRIC MOTOR UNIT" icon={<BookOutlined />}>
          ELECTRIC MOTOR CONTROL UNIT (EMCU) AND MOTOR (ELECTRIC MOTOR UNIT)
        </Menu.Item>
        <Menu.Item key="BMU" icon={<BookOutlined />}>
          BATTERY MANAGEMENT UNIT (BMU) AND TRACTION BATTERY
        </Menu.Item>
        <Menu.Item key="OBC" icon={<BookOutlined />}>
          ON BOARD CHARGER (OBC) /DC-DC CONVERTER
        </Menu.Item>
        <SubMenu
          key="QUICK CHARGING SYSTEM"
          icon={<FolderAddOutlined />}
          title="QUICK CHARGING SYSTEM"
        >
          <Menu.Item
            key="PRECAUTIONS ON HOW TO USE THE HIGH-VOLTAGE"
            icon={<BookOutlined />}
          >
            PRECAUTIONS ON HOW TO USE THE HIGH-VOLTAGE
          </Menu.Item>
          <Menu.Item
            key="SERVICE PLUG REMOVAL STEPS CHECK SHEET"
            icon={<BookOutlined />}
          >
            SERVICE PLUG REMOVAL STEPS CHECK SHEET
          </Menu.Item>
          <Menu.Item key="SYMPTOM CHART" icon={<BookOutlined />}>
            SYMPTOM CHART
          </Menu.Item>
        </SubMenu>
        <Menu.Item
          key="HEATER, AIR CONDITIONER AND VENTILATION"
          icon={<BookOutlined />}
        >
          HEATER, AIR CONDITIONER AND VENTILATION
        </Menu.Item>
        <SubMenu
          key="COMPONENT LOCATION"
          icon={<FolderAddOutlined />}
          title="COMPONENT LOCATION"
        >
          <Menu.Item key="RELAY" icon={<BookOutlined />}>
            RELAY
          </Menu.Item>
          <Menu.Item key="SOLENOID AND SOLENOID VALVE" icon={<BookOutlined />}>
            SOLENOID AND SOLENOID VALVE
          </Menu.Item>
          <Menu.Item key="SENSOR" icon={<BookOutlined />}>
            SENSOR
          </Menu.Item>
          <Menu.Item key="ECU" icon={<BookOutlined />}>
            ECU
          </Menu.Item>
          <Menu.Item key="FUSIBLE LINK AND FUSE" icon={<BookOutlined />}>
            FUSIBLE LINK AND FUSE
          </Menu.Item>
          <Menu.Item
            key="INSPECTION CONNECTOR AND SPARE CONNECTOR"
            icon={<BookOutlined />}
          >
            INSPECTION CONNECTOR AND SPARE CONNECTOR
          </Menu.Item>
          <Menu.Item key="EARTH CABLE" icon={<BookOutlined />}>
            EARTH CABLE
          </Menu.Item>
          <Menu.Item key="EARTH" icon={<BookOutlined />}>
            EARTH
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="CONFIGURATION DIAGRAMS"
          icon={<FolderAddOutlined />}
          title="CONFIGURATION DIAGRAMS"
        >
          <Menu.Item
            key="OVERALL CONFIGURATION DIAGRAM"
            icon={<BookOutlined />}
          >
            OVERALL CONFIGURATION DIAGRAM
          </Menu.Item>
          <Menu.Item key="HOOD ROOM" icon={<BookOutlined />}>
            HOOD ROOM
          </Menu.Item>
          <Menu.Item key="INSTRUMENT PANEL" icon={<BookOutlined />}>
            INSTRUMENT PANEL
          </Menu.Item>
          <Menu.Item
            key="UNDER FLOOR AND ELECTRIC MOTOR UNIT ROOM"
            icon={<BookOutlined />}
          >
            UNDER FLOOR AND ELECTRIC MOTOR UNIT ROOM
          </Menu.Item>
          <Menu.Item key="TRACTION BATTERY" icon={<BookOutlined />}>
            TRACTION BATTERY
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="CIRCUIT DIAGRAMS"
          icon={<FolderAddOutlined />}
          title="CIRCUIT DIAGRAMS"
        >
          <Menu.Item key="JUNCTION BLOCK" icon={<BookOutlined />}>
            JUNCTION BLOCK
          </Menu.Item>
          <Menu.Item key="POWER DISTRIBUTION SYSTEM" icon={<BookOutlined />}>
            POWER DISTRIBUTION SYSTEM
          </Menu.Item>
          <Menu.Item
            key="HIGH VOLTAGE POWER SUPPLY CONTROL SYSTEM"
            icon={<BookOutlined />}
          >
            HIGH VOLTAGE POWER SUPPLY CONTROL SYSTEM
          </Menu.Item>
          <Menu.Item
            key="QUICK CHARGING CONSTROL SYSTEM"
            icon={<BookOutlined />}
          >
            QUICK CHARGING CONSTROL SYSTEM
          </Menu.Item>
          <Menu.Item
            key="REGULAR CHARGING CONTROL SYSTEM"
            icon={<BookOutlined />}
          >
            REGULAR CHARGING CONTROL SYSTEM
          </Menu.Item>
          <Menu.Item
            key="AUXILIARY BATTERY CHARGING CONTROL SYSTEM"
            icon={<BookOutlined />}
          >
            AUXILIARY BATTERY CHARGING CONTROL SYSTEM
          </Menu.Item>
          <Menu.Item
            key="TRACTION BATTERY MANAGEMENT SYSTEM"
            icon={<BookOutlined />}
          >
            TRACTION BATTERY MANAGEMENT SYSTEM
          </Menu.Item>
          <Menu.Item
            key="ELECTRIC MOTOR UNIT CONTROL SYSTEM"
            icon={<BookOutlined />}
          >
            ELECTRIC MOTOR UNIT CONTROL SYSTEM
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default Nav;
