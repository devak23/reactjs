import React from "react";

const SignupPage = () => (
  <div className="ui container">
    <div className="ui grid centered">
      <div className="seven wide column">
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
            <div className="field">
              <label htmlFor="confirmPwd">Confirm Password</label>
              <input
                type="password"
                name="confirmPwd"
                id="confirmPwd"
                placeholder="... and one more time!"
              />
            </div>
            <div className="ui fluid buttons">
              <button className="ui primary button">Sign up</button>
              <div className="or" />
              <button className="ui button">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div className="nine wide column">&nbsp;</div>
  </div>
);

export default SignupPage;
