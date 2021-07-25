import { Link, useRoute } from "wouter";

const ActiveLink = (props) => {
  const [isActive] = useRoute(props.href);

  return (
    <Link {...props}>
      <a {...props} className={isActive ? "on" : "font"}>
        {props.children}
      </a>
    </Link>
  );
};

export default ActiveLink;
