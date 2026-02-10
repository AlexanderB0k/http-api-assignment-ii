const users = {};

const respondJson = (request, response, status, object) => {
  const content = JSON.stringify(object);

  const headers = {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(content),
  };

  response.writeHead(status, headers);

  if (request.method !== 'HEAD') {
    response.write(content);
  }

  response.end();
}

const getUsers = (request, response) => {
  const responseObject = {
    users,
  };  

  respondJson(request, response, 200, responseObject);  
};

const updateUsers = (request, response, body) => {
  users[newUser.createdAt] = newUser;

  const responseObject = {
    message: 'Created Successfully',
    id: newUser.createdAt,
  };

  respondJson(request, response, 201, responseObject);
};

module.exports = {
  getUsers,
  updateUsers,
};