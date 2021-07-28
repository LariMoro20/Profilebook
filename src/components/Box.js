import styled from 'styled-components';

const Box = styled.div`
  background: #FFFFFF;
  border-radius: 8px;
  padding: 16px;
  margin:10px;
  height:auto;

  margin-bottom: 10px;
  .boxLink {
    font-size: 14px;
    color: #000;
    text-decoration: none;
    font-weight: 800;
  }
  .title {
    font-size: 2em; 
    font-weight: 400;
    margin-bottom: 5px;
  }
  .subTitle {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 5px;
  }
  .smallTitle {
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 700;
    color: #333333;
    margin-bottom: 5px;
  }
  hr {
    margin-top: 12px;
    margin-bottom: 8px;
    border-color: transparent;
    border-bottom-color: #ECF2FA;
  }
  input, textarea {
    max-width: 100%;
    width: 100%;
    background-color: #F4F4F4;
    color: #333333;
    border: 0;
    padding: 14px 16px;
    margin-bottom: 14px;
    border-radius: 10px;
    ::placeholder {
      color: #333333;
      opacity: 1;
    }
  }
  button {
    border: 0;
    padding: 8px 12px;
    color: #000;
    border-radius: 10000px;
    background-color: #7fff00;
  }
  .full-w{
   width: 100%;
  }
  .flex {
    display:flex;
  }
  .justify-center{
    justify-content:center;
  }
  .justify-between{
    justify-content: space-between;
  }
  .post-header_user{
    font-size: 16px;
    font-weight: 700;
    display: flex;
  }
  
  .align-center{
    align-items: center;
  }
  .post-header_icon{
    border-radius:50px;
    margin:5px;
  }
  .post-content{
    padding: 20px;
    background-color: #cdcdcd24;
    border-radius: 20px;
    width: 100%;
    margin:10px;
  }
  .post-content_title{
    font-size: 16px;
    font-weight: 700;
    display: flex;
  }
  .post-content_content{

  }
 
`;

export default Box