const Navbar = () => {
  const time = new Date();
  let message;
  if (time.getHours() < 12) {
    message = "Good Morning";
  } else if (time.getHours() >= 12 && time.getHours() < 17) {
    message = "Good Afternoon";
  } else {
    message = "Good Night";
  }
  return (
    <nav className="navbar">
      <h1>Yato Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create"> New Blog</a>
      </div>
      <h4 className="greet">
        {`Time- ${time.getHours()} : ${
          time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes()
        }`}
        <p>{message}</p>
      </h4>
    </nav>
  );
};
export default Navbar;
