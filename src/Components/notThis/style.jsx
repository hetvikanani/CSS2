import styled from 'styled-components';
 const MenuStyle = styled.div`
li a {
    text-decoration: none;
}
 .ant-image {
    position: relative;
    display: inline-block;
    width: 64px;
    // border:1px solid ;
}

.side-nav{
    // width: 230px;
    padding-right: 0rem;
//    padding-bottom: 4rem;
    // border:1px solid ;
}
.side-nav .logo {
    display: flex;
    // padding-left: 1.25rem;
    padding-top: 1rem;
    justify-content: center;
    align-items: center;
}
// .ant-divider-horizontal{
//     background-color: #336fb9;
//     height: 1px;
//     position: relative;
//     width: 90%;
//     margin-top: 1.5rem;
//     margin-bottom: 1.5rem;
// }
.Divider{
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    height: 1px;
    position: relative;
    width: 90%;
    z-index: 10;
    background-color: rgb(46 81 187);
}
.ant-image-img{
    width: 4rem;
   display: block;
   height: auto;
}
ul{
    list-style: none;
    margin: 0;
    padding: 0;
}
.side-menu{
    // border :1px solid black;
    display: flex;
    align-items: center;
    height: 50px;
    border-radius: 25px 0 0 25px;
    margin-bottom: .25rem;  
    padding-left: 1.25rem;
    position: relative;
    --tw-text-opacity: 1;
    color: rgba(255,255,255,var(--tw-text-opacity));
}

.side-menu__icon .ant-image{
    width: 20px;
    position: relative;
    display: inline-block;
}
.side-menu__icon .ant-image .ant-image-img{
   
    display: block;
    width: 100%;
    height: auto;
}
.title{
    display: flex;
    margin-left: 0.75rem;
    width: 100%;
    font-weight: 600;
    font-family: Roboto;
}
.title .side-menu__sub-icon {
    margin-left: auto;
    margin-right: 1.25rem;
    transition-duration: 0.1s;
    
}
.title .side-menu__sub-icon  .ant-image{
    width: 12px;
    position: relative;
    display: inline-block;
}
.title .side-menu__sub-icon  .ant-image .ant-image-img{

    display: block;
    width: 100%;
    height: auto;
    transform: rotate(
        90deg
        );
}
.title .side-menu__sub-icon  .ant-image .Aerro{
    transform: rotate(
        270deg
        );
}
.side-menu__sub-open {
    display: block;
    background-color: #1a389f;
    border-radius: 1.375rem;
   
}
.side-menu__sub-open .Action {

    border: 1px solid rgb(51, 75, 191);
    background-color: rgb(28, 63, 170);
}
.side-menu__sub-open .Action2 {
    border-radius: 1.375rem 0rem 0rem 0rem;
  
}
.side-menu__sub-open .Action3 {
    border-radius:  0rem 0rem 0rem 1.375rem;
  
}
.side-menu__sub-open a{
    // border :1px solid black;
    display: flex;
    align-items: center;
    height: 50px;
    border-radius: 25px 0 0 25px;
    margin-bottom: .25rem;  
    padding-left: 1.25rem;
    position: relative;
    --tw-text-opacity: 1;
    color: rgba(199,210,255,var(--tw-text-opacity));
}
.side-menu--active {
    --tw-bg-opacity: 1;
    background-color: rgba(241,245,248,var(--tw-bg-opacity));
    color: #1a389f;
}
.side-menu.side-menu--active:before {
    content: "";
    width: 30px;
    height: 30px;
    background-size: 100%;
    background-image: url(
       " data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='259.51' height='259.52'%3E%3Cpath data-name='Path 143'
         d='M259.51 259.52c-.167-2.608.05-5.319-.19-8.211-.084-1.012-.031-2.15-.118-3.12-.113-1.25-.1-2.682-.236-4.061-.172-1.722-.179-3.757-.365-5.394-.328-2.889-.478-5.857-.854-8.61-.509-3.714-.825-7.252-1.38-10.543-.934-5.535-2.009-11.312-3.189-16.692-.855-3.9-1.772-7.416-2.752-11.2-1.1-4.256-2.394-8.149-3.687-12.381-1.1-3.615-2.366-6.893-3.623-10.493-1.3-3.739-2.917-7.26-4.284-10.7-1.708-4.295-3.674-8.078-5.485-12.023-1.145-2.493-2.5-4.932-3.727-7.387-1.318-2.646-2.9-5.214-4.152-7.518-1.716-3.16-3.517-5.946-5.274-8.873-1.692-2.818-3.589-5.645-5.355-8.334-2.326-3.542-4.637-6.581-7.039-9.848-2.064-2.809-4.017-5.255-6.088-7.828a237.651 237.651 0 00-7.292-8.589c-3.027-3.411-6.049-6.744-9.055-9.763-2.4-2.412-4.776-4.822-7.108-6.975-3-2.767-5.836-5.471-8.692-7.854-3.332-2.779-6.657-5.663-9.815-8.028-2.958-2.216-5.784-4.613-8.7-6.6-3.161-2.159-6.251-4.414-9.219-6.254-3.814-2.365-7.533-4.882-11.168-6.89-4.213-2.327-8.513-4.909-12.478-6.834-4.61-2.239-9.234-4.619-13.51-6.416-4.1-1.725-8.11-3.505-11.874-4.888-4.5-1.652-8.506-3.191-12.584-4.47-6.045-1.9-12.071-3.678-17.431-5-9.228-2.284-17.608-3.757-24.951-4.9-7.123-1.112-13.437-1.64-18.271-2.035l-2.405-.2c-1.638-.136-3.508-.237-4.633-.3A115.051 115.051 0 000 .081h259.51z' fill='%23f1f5f8'/%3E%3C/svg%3E
    ");
    position: absolute;
    top: 0;
    right: 0;
    margin-top: -30px;
    transform: rotate( 90deg) scale(1.04);
}
.side-menu.side-menu--active:after {
    content: "";
    width: 30px;
    height: 30px;
    background-size: 100%;
    background-image: url(
       " data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='259.51' height='259.52'%3E%3Cpath data-name='Path 143'
         d='M259.51 259.52c-.167-2.608.05-5.319-.19-8.211-.084-1.012-.031-2.15-.118-3.12-.113-1.25-.1-2.682-.236-4.061-.172-1.722-.179-3.757-.365-5.394-.328-2.889-.478-5.857-.854-8.61-.509-3.714-.825-7.252-1.38-10.543-.934-5.535-2.009-11.312-3.189-16.692-.855-3.9-1.772-7.416-2.752-11.2-1.1-4.256-2.394-8.149-3.687-12.381-1.1-3.615-2.366-6.893-3.623-10.493-1.3-3.739-2.917-7.26-4.284-10.7-1.708-4.295-3.674-8.078-5.485-12.023-1.145-2.493-2.5-4.932-3.727-7.387-1.318-2.646-2.9-5.214-4.152-7.518-1.716-3.16-3.517-5.946-5.274-8.873-1.692-2.818-3.589-5.645-5.355-8.334-2.326-3.542-4.637-6.581-7.039-9.848-2.064-2.809-4.017-5.255-6.088-7.828a237.651 237.651 0 00-7.292-8.589c-3.027-3.411-6.049-6.744-9.055-9.763-2.4-2.412-4.776-4.822-7.108-6.975-3-2.767-5.836-5.471-8.692-7.854-3.332-2.779-6.657-5.663-9.815-8.028-2.958-2.216-5.784-4.613-8.7-6.6-3.161-2.159-6.251-4.414-9.219-6.254-3.814-2.365-7.533-4.882-11.168-6.89-4.213-2.327-8.513-4.909-12.478-6.834-4.61-2.239-9.234-4.619-13.51-6.416-4.1-1.725-8.11-3.505-11.874-4.888-4.5-1.652-8.506-3.191-12.584-4.47-6.045-1.9-12.071-3.678-17.431-5-9.228-2.284-17.608-3.757-24.951-4.9-7.123-1.112-13.437-1.64-18.271-2.035l-2.405-.2c-1.638-.136-3.508-.237-4.633-.3A115.051 115.051 0 000 .081h259.51z' fill='%23f1f5f8'/%3E%3C/svg%3E
    ");
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 50px;
    transform: scale(1.04);
}
.side_menu{
    // opacity: 0;
    // position: relative;
    // animation: intro-y-animation 0.4s ease-in-out 0.33333s;
    // animation-fill-mode: forwards;
    // animation-delay: 0.1s
}
@media (max-width:767px){
        
            display: none;
        
    
    }

`;
export {MenuStyle};