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
  const responseObject = {
    message: "This page you are looking for was not found",
    id: "notFound",
  }

  respondJson(request, response, 404, responseObject);
}

const getUsers = (request, response) => {
  const responseObject = {
    users,
  };  

  respondJson(request, response, 200, responseObject);  
};

const addUsers = (request, response) => {
  // default json message
  const responseJSON = {
    message: 'Name and age are both required.',
  };

  const {name, age} = request.body;

  if (!name || !age) {
    responseJSON.id = 'missingParams';
    return respondJson(request, response, 400, responseJSON);
  }

  let responseCode = 204;

  if (!users[name]) {
    responseCode = 201;
    users[name] = {
      name: name,
    };
  }
  
  users[name].age = age;

  if (responseCode === 201) {
    responseJSON.message = 'Created \n Message: Created succesfully';
    return respondJson(request, response, responseCode, responseJSON);
  }

  return respondJson(request, response, responseCode, {});
};


module.exports = {
  getUsers,
  notFound,
  addUsers
};