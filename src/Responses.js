const users = {};

const respondJson = (request, response, status, object) => {
  const content = JSON.stringify(object);

  const headers = {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(content),
  };

  response.writeHead(status, headers);

  if (request.method !== 'HEAD' && status !== 204) {
    response.write(content);
  }

  response.end();
}

const notFound = (request, response) =>{
  responseObject = {
    message: "This page you are looking for was not found",
    id: "notFound",
  }

  responseJson(request, response, 404, respondObject);
}

const getUsers = (request, response) => {
  const responseObject = {
    users,
  };  

  respondJson(request, response, 200, responseObject);  
};

const addUsers = (request, response, body) => {
  const responseData = {
    message: 'Name and Age are both required',
  }

  
  users[newUser.createdAt] = newUser;

  const responseObject = {
    message: 'Created Successfully',
    id: newUser.createdAt,
  };

  respondJson(request, response, 201, responseObject);
};

module.exports = {
  getUsers,
  addUsers,
  notFound,
};