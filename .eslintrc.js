module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint"
  },
  env: {
    browser: true
  },
  extends: ["plugin:vue/essential", "prettier"],
  plugins: ["vue", "prettier"],
  rules: {
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  }
};
