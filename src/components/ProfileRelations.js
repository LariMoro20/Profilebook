import styled from 'styled-components';

const ProfileRelationsWrapper = styled.div`
   padding: 0px;
   
  ul {
    display: grid;
    grid-gap: 8px;
    grid-template-columns: 1fr 1fr 1fr 1fr  1fr 1fr;
    @media(min-width: 860px) {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    }
    list-style: none;
  }
  img {
    object-fit: cover;
    background-position: center center;
    width: 100%;
    height: 100%;
    position: relative;
  }
  ul li a {
    display: inline-block;
    height: 100px;
    width: 100px;
    position: relative;
    overflow: hidden;
    border-radius: 8px;
  }
`;

export default function ProfileRelations(props) {
  return (
    <ProfileRelationsWrapper>
      <h2 className="subTitle">
        {props.title} ({props.items.length})
      </h2>
      <ul>
        {props.items.map((follower) => {
          return (
            <li key={follower}>
              <a href={`/users/${follower.id}`}>
                <img
                  alt="follower"
                  src={`${follower.avatar_url}`}
                  style={{ borderRadius: "8px" }}
                />
                <span>{follower.login}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </ProfileRelationsWrapper>
  );
}