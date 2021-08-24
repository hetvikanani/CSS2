import styled from "styled-components";
const MobileStyle = styled.div`
  display: none;
  margin: -1rem -1rem 1.5rem;
  border-bottom: 1px solid rgb(46 81 187);

  .mobilemenu {
    height: 70px;
    display: flex;
    align-items: center;
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .mobilemenu .loGo {
    display: flex;
    margin-right: auto;
  }
  .mobilemenu a {
    text-decoration: none;
  }

  .ant-image {
    width: 35px;
  }
  .menu_Toggel {
    height: 35px;
    width: 35px;

    height: 2rem;
    display: inline-block;
    stroke-width: 2;
    vertical-align: middle;
    color: rgb(255 255 255 / 85%);
    transform: rotate(-90deg);
  }
  .menuView {
    border-top: 1px solid rgb(46 81 187);
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
    .MenuBox {
    
      height: auto;
      width: 100%;
    }
  
  }

  .outline {
    color: white;
  }
  .ant-menu {
  
    background: #1c3faa;
  }
  .ant-menu {
    border-right: none;
  }

  .ant-menu-item {
    padding-left: 0px !important;
    padding-left: 2.5rem !important;
    padding-right: 2.5rem !important;
    height: 30px;
    margin: 0px !important;
    display: flex;

    .ant-image {
      width: 20px !important;
    }
    span {
      line-height: 24px;
    }
    a {
      display: flex;
      margin-left: 0.75rem;
      width: 100%;
      font-weight: 600;
      font-family: Arial, Helvetica, sans-serif;
      color: #ffffff;
    }
    a:hover {
      color: #ffffff;
    }
  }

  .ant-menu-submenu {
    padding-left: 2.5rem !important;
    padding-right: 2.5rem !important;
    border-radius: 10px;

   
    .ant-menu-submenu-title {
      align-items: center;
      padding: 0px !important;
      height: 30px;
      line-height: 25px;
      display: flex;
    }
    :not(.ant-menu-horizontal) .ant-menu-item-selected,
    .ant-menu-item:active,
    .ant-menu-submenu-title:active {
      background-color: #18358c;
    }
    .ant-image {
      width: 20px !important;
    }
    span {
      margin-left: 0.75rem;
      width: 100%;
      font-weight: 600;
      font-family: Arial, Helvetica, sans-serif;
      color: #ffffff;
      line-height: 18px;
    }
    span:hover {
      color: #ffffff;
    }
    .ant-menu-submenu-arrow {
      width: 0px;
      color: rgb(255 255 255 / 85%);
    }
    .ant-menu-submenu-arrow::before,
    .ant-menu-submenu-arrow::after {
      background-color: #fff;
    }
  
    }
    .ant-menu {
      background-color: rgb(26 56 159);
     
    }
    .ant-menu-item {
      padding-left: 1rem !important;
      padding-right: 0rem !important;
        align-items: center;
    }
  }


  @media (max-width: 767px) {
    display: block;
  }
`;
export default MobileStyle;
