import React, { Component } from "react";
import { UserConsumer } from "./UseContext";
import { UserContext, ChannelContext } from "../App";

function ComponentF() {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => (
          <ChannelContext.Consumer>
            {(channel) => (
              <div>
                User context {user}, ChannelContext value {channel}
              </div>
            )}
          </ChannelContext.Consumer>
        )}
      </UserContext.Consumer>
    </div>
  );
}
export default ComponentF;
