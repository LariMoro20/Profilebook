import Box from "../Box";
export default function ProfileSidebar(props) {
    return (
        <Box as="aside">
            <img
                alt="user profile"
                src={props.githubUser.image}
                style={{ borderRadius: "8px" }}
            />
            <hr />
            <a
                className="link"
                href={`https://github.com/${props.githubUser.username}`}
            >
                @{props.githubUser.username}
            </a>
            <hr />
            <h2 className="smallTitle">Sobre mim</h2>
            <small>{props.githubUser.location}</small>
            <p>{props.githubUser.bio}</p>
        </Box>
    );
}