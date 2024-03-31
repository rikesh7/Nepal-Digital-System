function CustomContainer(props) {
  return (
    <div className="blue-container  mb-5">
      <div className="container">{props.children}</div>
    </div>
  );
}

export default CustomContainer;
