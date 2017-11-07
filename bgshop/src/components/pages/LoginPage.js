import React from "react";

const LoginPage = () => (
  <div className="ui container fullHeightContainer">
    <div className="ui grid centered">
      <div className="eight wide column">
        <div className="block">
          <div className="ui segment">
            <form className="ui form">
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="abc@xyz.com"
                />
              </div>
              <div className="field">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Make it secure"
                />
              </div>
              <div className="ui fluid buttons">
                <button className="ui primary button">Login</button>
                <div className="or" />
                <button className="ui button">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LoginPage;
