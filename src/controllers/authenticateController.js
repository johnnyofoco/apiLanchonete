async function get(req, res) {
  const { id, password } = req.params;

  //autenticação simplificada
  if (!id || !password) {

    res.statusCode = 401;
    res.send({ message: "User or password not informed, access denied" });

  } else if (id === "admin" && password === "admin") {

    res.statusCode = 200;
    res.send({ "message:": "Access permited" });

  } else {

    res.statusCode = 401;
    res.send({ message: "User or password incorrect, acess denied." });

  }
}

module.exports = {
  get,
};
