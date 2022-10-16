const Header = (props) => {
  return (
    <header className={`h-52 px-6 w-full ${props.headerColor}`}>
      <h1 className="text-4xl max-w-4xl mx-auto flex justify-center items-center h-full">
        {props.header}
      </h1>
    </header>
  );
};

export default Header;
