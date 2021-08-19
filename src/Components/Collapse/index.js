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


