const Content = () => {
  const title = "Welcome to the yato blog";
  const link = "https://noragami.fandom.com/wiki/Yato";

  return (
    <header className="App-header">
      <img src="./yato.png" alt="Yato-logo" className="logo" />
      <h1>Noragami Yato</h1>
      <h3>
        <a href={link}>{title}</a>
      </h3>
      {/*Use of dynamic data in JSP*/}
      <p>
        This is the land of the rising sun, your desecration shall not be
        allowed. Hear me! I am the god Yato, I now lay the waste with the seki
        and expel thy vast defilement.
      </p>
      <h5>Regalias</h5>
      <ul type="disc">
        <li>Tomone | Hanki</li>
        <li>Yukine | Sekki</li>
        <li>Nora | Hiki</li>
      </ul>
    </header>
  );
};

export default Content;
