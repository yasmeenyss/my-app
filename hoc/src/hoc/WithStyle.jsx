

function WithStyle(WrappedComponent) {
  return function NewComponent(props) {
    return (
      <div
        style={{
          border: "5px solid red",
          padding: "20px",
          margin: "20px",
        }}
      >
        <WrappedComponent {...props} />
      </div>
    );
  };
}

export default WithStyle;