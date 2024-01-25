const serverErrorHandler = (error) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    return error.response.data.error_description || error.response.data.message || error.response.data.msg || error.response.data.error;
  } else if (error.request) {
    // The request was made but no response was received
    return error.request;
  } else {
    // Something happened in setting up the request that triggered an Error
    return error.message;
  }
};

export default serverErrorHandler;
