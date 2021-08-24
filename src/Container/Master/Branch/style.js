import styled from "styled-components";
import { size } from "../../../Components/Responsible";

const BranchStyle = styled.div`
  .btnAdd {
    background-color: rgb(28, 63, 170);
    color: white;
    font-weight: 600;
    border-radius: 7px;
  }
  .btnPlus {
    border-radius: 10px;
  }

  .btnRow {
    padding: 15px;
  }

  .header {
    font-weight: bold;
    font-size: 21px;
  }

  .headerInfo {
    font-size: 17.5px;
    text-align: center;
  }
  .ant-table-wrapper{
    overflow: auto;
  }

  @media ${size["tablet-max"]} {
    .ant-row {
      display: block;
    }
    .ant-col-12 {
      max-width: 100%;
    }
  }

  @media ${size["laptop-max"]} {
    .btnCol {
      padding-left: 1px;
    }
    .btnPlus {
      padding-left: 20px;
    }
  }

  @media ${size["laptop-sm-max"]} {
    .btnCol {
      padding-left: 0px;
    }
    .btnPlus {
      padding-left: 35px;
    }
  }
`;
export { BranchStyle };
