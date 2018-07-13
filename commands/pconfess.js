module.exports = (client, msg, args) => {
  return require("./confess.js")(client, msg, args, { public: true });
};
