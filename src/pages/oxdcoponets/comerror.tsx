import "../../css/componetspage.css";
import "../../css/common.css";
import Notfoundimg from "../../assets/img/notfound.png";

function OxdComError() {
  return (
    <>
      <div className="ComPageWarp">
        <div className="errorwrap">
          <img src={Notfoundimg} className="notfoundimg" />
          <div className="not-found-container">
            <h1 className="not-found-title">Oops! Page Not Found</h1>
            <p className="not-found-message">
              Looks like the page you’re searching for has gone on a coffee
              break.
            </p>
            <p className="not-found-options">
              But don’t worry, you can:
              <ul>
                <li>
                  <b>Double-check the URL</b> to make sure it's correct.
                </li>
                <li>
                  <b>Head back to our homepage</b> and start fresh.
                </li>
                <li>
                  <b>Contact UX Team</b> if you think something's broken.
                </li>
              </ul>
            </p>
            <p className="not-found-coffee">
              In the meantime, enjoy a virtual coffee on us! ☕
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default OxdComError;
