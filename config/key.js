//proc.env.node_env는 환경변수, production = deploy후 (배포후)
if (process.env.NODE_ENV === "production") {
  module.exports = require("./prod");
} else {
  module.exports = require("./dev");
}
