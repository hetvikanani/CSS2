import React, { Component } from "react";
import { Collapse } from "antd";
import { StyleContainer } from "./style";

const { Panel } = Collapse;

class CollapseRe extends Component {
  render() {
    let { header, body, key,collapseKey } = this.props;

    return (
      <StyleContainer>
        <Collapse accordion expandIconPosition="right" bordered={false} onChange={collapseKey}>
          <Panel header={<div className="topDiv">{header}</div>} key={key}>
            {body}
          </Panel>
        </Collapse>
      </StyleContainer>
    );
  }
}

export default CollapseRe;

// import React, { Component } from "react";
// import { StyleContainer } from "./style";
// import { Collapse } from "antd";
// const { Panel } = Collapse;
// class CollapseData extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   render() {
//     const { header, body, keyy, collapseKey } = this.props;
//     return (
//       <StyleContainer>
//         <Collapse
//           accordion
//           bordered={false}
//           onChange={collapseKey}
//           expandIconPosition="right"
//         >
//           <Panel header={<div className="topDiv">{header}</div>} key={keyy}>
//             {body}
//           </Panel>
//         </Collapse>
//       </StyleContainer>
//     );
//   }
// }
// export default CollapseData;
