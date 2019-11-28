var path = require("path");
module.exports = {
  entry: {
    main: ["webpack/hot/poll?1000", "./index.js"]
  },
  output: {
    path: path.join(__dirname, "out"),
    filename: "bundle.js"
  },
  target: "node",
  mode: "development"
};
