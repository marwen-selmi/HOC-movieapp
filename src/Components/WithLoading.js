import React from "react";
import LoadingSpinner from "./LoadingSpinner";

const loader = WrappedComponent => {
  const WithLoading = props => {
    return props.isLoading ? (
      <LoadingSpinner />
    ) : (
      <WrappedComponent {...props} />
    );
  };
  return WithLoading;
};
export default loader;
