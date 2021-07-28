import styled from 'styled-components'

const MainGrid = styled.main`
  width: 100%;
  display:flex;
  margin-left: auto;
  margin-right: auto;
  .menuArea{
    width:100%;
  }
  .profileArea{
    width:25%;
    display:flex;
  }
  .followersArea{
    width:100%;
    display:flex;
  }
  .folloingArea{
    width:100%;
    display:flex;
  }
  .messagesArea{
    width:100%;
    display:flex;
  }
  .welcomeArea{
    width:75%;
  }
  .profileRelationsArea{
   width:25%;
  }
max-width: 1110px;
  
`;

export default MainGrid;