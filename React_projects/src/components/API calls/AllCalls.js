import React from "react";
import AsyncAxios from "./asyncAxios";
import AsyncFetch from "./asyncFetch";
import AsyncTryFetch from "./asyncTryCatchFetch";
import Axios from "./axios";
import Fetch from "./fetch";
import UseSWRMethod from "./swr";

import "./apiCalls.css";

const AllCalls = () => {
  return (
    <div className="apiCall">
      <h2>API Calls</h2>
      <Fetch text="Fetch " />
      <AsyncFetch text="async Fetch " />
      <AsyncTryFetch text="asyncTryFetch " />
      <Axios text="Axios " />
      <AsyncAxios text="asyncAxios " />
      <UseSWRMethod text="swr method " />
    </div>
  );
};

export default AllCalls;
