import './index.css'
export default function ProfileRelations(props) {
  return (
    <div className="profile_relations">
      <h2 className="sub-title">
        {props.title} ({props.items.length})
      </h2>
      <ul>
        {props.items.map((follower) => {
          return (
            <li key={follower}>
              <a href={`/users/${follower.login}`}>
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
    </div>
  );
}