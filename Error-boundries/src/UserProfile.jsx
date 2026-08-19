function UserProfile({ userData }) {
  return (
    <div
      style={{
        border: "2px #999",
        padding: "40px",
        margin: "40px",
      }}
    >
      <h4>UserProfile</h4>

      <p>Name: {userData.name}</p>
      <p>Age: {userData.age}</p>

    </div>
  );
}

export default UserProfile;