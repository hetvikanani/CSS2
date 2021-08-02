import styled from "styled-components";
const FloorStyle = styled.div`
  
max-height: 100vh;
overflow-y: auto;
.mainDiv {
  padding: 2em;
  margin-top: 2em;
  .heading {
    color: #616161;
    margin-left: 0.5em;
  }
  .headDiv {
    margin-left: 0.7em;
    margin-top: 10px;
    display: flex;
  
     .search {
      position: relative;
      display: flex;
      width: 13rem;
    
      .ant-input-affix-wrapper {
        box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.15);
      }
      .ant-input-affix-wrapper:hover {
        border-color: #ffff;
      }
      input {
        box-shadow: inset 0px 0px 4px rgb(0 0 0 / 15%);
        border-radius: 5px;
      }
    }
    .icon_box {
      display: flex;
      margin-left: auto;
     
      .set_icon_box {
        width: 2.5em;
        height: 29px;
        box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        margin:9px;
       
        .ant-image-img {
          height: 20px;
          width: 25px;
          margin: 5px;
        }
      }
    }
  }
  .ant-layout-header {
    margin-top: 10px;
    padding: 0;
    background: #f1f5f8;
  }
  .centerDiv {
    margin-top: 2rem;
    .panelSet {
      display: flex;
      h3 {
        margin-bottom: 0;
      }
      .edite {
        margin-left: auto;
        margin-right: 10px;
        height: 20px;
      }
    }
    .panel {
      p {
        color: #f89c32;
        font-weight: 500;
      }
    }
  }
}




// .inputDiv{
//     margin-left: 0.7em;
//     margin-top: 10px;
//     display: flex;
// }
    
// .centerDiv{
//     margin-top: 2rem;
//     margin-left:0.7em;
//     margin-right:1em;
// }



// .header{
//     margin-bottom: 0;
//     font-weight:300;
// }










`;
export {FloorStyle};