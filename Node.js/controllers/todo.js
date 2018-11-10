exports.list = (req, res) => {
  res.send("List todos");
}

exports.create = (req, res) => {
  res.send("Create new todo");
}

exports.show = (req, res) => {
  res.send("Show specific todo");
}

exports.update = (req, res) => {
  res.send("Update specific todo");
}

exports.delete = (req, res) => {
  res.send("Delete specific todo");
}
