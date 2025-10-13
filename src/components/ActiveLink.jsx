const ActiveLink = (props) => {
  return (
    <a
      {...props}
      href={props.href}
    >
      {props.children}
    </a>
  );
};

export default ActiveLink;
