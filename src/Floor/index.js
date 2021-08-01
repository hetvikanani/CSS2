import React, { Component } from "react";
import { Input } from "antd";
import { FloorStyle } from "./style";
import CollapseRe from "../Components/Collapse/index";

const header = ["Floor-1", "Floor-2", "Floor-3", "Floor-4"];

class Floor extends Component {
  collapse = () => {
    return header.map((gme) => (
      <FloorStyle>
        <CollapseRe
          header={
            <div className="panelSet">
              <h3 className="header">{gme}</h3>
            </div>
          }
          body={
            <div className="panel">
              <p>Location : Lorem ipsum</p>
              <p>Location : Lorem ipsum</p>
              <p>Location : Lorem ipsum</p>
            </div>
          }
        />
      </FloorStyle>
    ));
  };

  render() {
    return (
      <FloorStyle>
        <div className="mainDiv">
          <h3 className="heading">Floor / Location Master</h3>
          <div className="inputDiv">
            <Input />
          </div>

          <div className="centerDiv">{this.collapse()}</div>
        </div>
      </FloorStyle>
    );
  }
}

export default Floor;

// import React, { Component } from "react";
// import { AssignedStyle } from "./style";
// import { Row, Col, Image, Modal } from "antd";
// import { QuestionCircleOutlined } from "@ant-design/icons";
// import { Input, Menu, Header, Collapse1, LocationModal } from "components/Form";
// import { boxplus, location, editPen, fillClose } from "components/Images";
// import { RemoveConstant } from "App/AppConstant";
// import { FloorConst } from "./constant";
// const { confirm } = Modal;
// const header = ["Floor-1", "Floor-2", "Floor-3", "Floor-4"];
// class Floor extends Component {
//   constructor() {
//     super();
//     this.state = { activeKey: ["1"], visible: false, edit: false };
//   }
//   collapseKey = (key) => this.setState({ activeKey: key });
//   editCol = (i) => {
//     try {
//       this.toggleLocModal(true);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   removecol = (i) => {
//     try {
//       confirm({
//         title: RemoveConstant.header,
//         icon: <QuestionCircleOutlined />,
//         content: RemoveConstant.deleteMessage + FloorConst.flr,
//         okText: RemoveConstant.yes,
//         okType: "danger",
//         cancelText: RemoveConstant.no,
//         getContainer: () => document.getElementById("floor-form"),
//         onOk: () => {
//           this.deleteCol(i);
//         },
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   deleteCol = (i) => {};
//   toggleLocModal = (a) => {
//     try {
//       const { visible } = this.state;
//       this.setState({ visible: !visible, edit: a ? a : false });
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   colUI = () => {
//     try {
//       const { activeKey } = this.state;
//       return header.map((e, i) => (
//         <Collapse1
//           key={i}
//           header={
//             <div className="panelSet">
//               <h3>{e}</h3>
//               {activeKey === i.toString() && (
//                 <>
//                   <div className="edite">
//                     <Image
//                       src={editPen}
//                       preview={false}
//                       width={16}
//                       onClick={(event) => {
//                         event.stopPropagation();
//                         this.editCol(i);
//                       }}
//                     />
//                   </div>
//                   <div className="">
//                     <Image
//                       src={fillClose}
//                       preview={false}
//                       width={16}
//                       onClick={(event) => {
//                         event.stopPropagation();
//                         this.removecol(i);
//                       }}
//                     />
//                   </div>
//                 </>
//               )}
//             </div>
//           }
//           body={this.bodyUi()}
//           keyy={i}
//           collapseKey={this.collapseKey}
//         />
//       ));
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   bodyUi = () => {
//     try {
//       return (
//         <div className="panel_box">
//           <p>Location : Lorem ipsum</p>
//           <p>Location : Lorem ipsum</p>
//           <p>Location : Lorem ipsum</p>
//         </div>
//       );
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   render() {
//     const { visible, edit } = this.state;
//     return (
//       <>
//         <Row>
//           <Col xs={24} sm={10} md={8} lg={6} xl={5} className="menuItems">
//             <Menu />
//           </Col>
//           <Col xs={24} sm={14} md={16} lg={18} xl={19} className="dataItems">
//             <AssignedStyle>
//               <Header />
//               <div className="displayDiv" id="floor-form">
//                 <h2 className="title">{FloorConst.floor}</h2>
//                 <div className="headDiv">
//                   <div className="search">
//                     <Input />
//                   </div>
//                   <div className="icon_box">
//                     <div className="set_icon_box">
//                       <Image
//                         src={location}
//                         preview={false}
//                         className="locImg"
//                         onClick={this.toggleLocModal}
//                       />
//                     </div>
//                     <div className="set_icon_box">
//                       <Image src={boxplus} preview={false} className="boxImg" />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="midel_content">{this.colUI()}</div>
//               </div>
//             </AssignedStyle>
//           </Col>
//         </Row>
//         <LocationModal
//           visible={visible}
//           edit={edit}
//           title="Location"
//           onCancel={this.toggleLocModal}
//           onOk={this.toggleLocModal}
//         />
//         <LocationModal visible={false} title="Floor" />
//       </>
//     );
//   }
// }
// export default Floor;
