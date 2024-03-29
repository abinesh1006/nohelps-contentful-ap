const color = require("color")

module.exports = theme => {
  const colors =
    typeof theme === "string" ? require(`./src/themes/${theme}`) : theme

  return {
    purge: {
      content: [`${__dirname}/src/**/*.js`, `./src/**/*.jsx`],
      options: {
        safelist: [/^text-skill/, /^border-skill/],
      },
    },
    darkMode: false,
    variants: {
      opacity: ({ after }) => after(['disabled'])
    },
    theme: {
      fontFamily: {
        header: ["Source Sans Pro", "sans-serif"],
        text: ["Roboto", "sans-serif"],
      },
      extend: {
        colors: {
          ...colors,
          "back-light": color(colors.back)
            .lighten(0.18)
            .hex(),
        },
        borderRadius: {
          lg: "1rem",
        },
        spacing: {
          "14": "3.5rem",
        },
        borderTopped:{
          "red":"2px solid red"
        },
      },
    },
  }
}
