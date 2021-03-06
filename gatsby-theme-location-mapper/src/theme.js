export const theme = {
  breakpoints: [
    '40em', '56em', '64em',
  ],
  space: [0, 4, 8, 16, 32],
  fonts: {
    body: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif",
  },
  fontSizes: [16, 18, 20, 22, 27, 36],
  lineHeights: {
    body: 1.45,
    heading: 1.1,
  },
  colors: {
    gray: ["#efefef", "#ddd", "#333", "#111"],
    background: "#fff",
    primary: "steelblue",
  },
  sizes: {
    default: "90vw",
    max: "920px",
    full: "100%",
  },
  styles: {
    Layout: {
      color: "gray.2",
      fontFamily: "body",
      fontSize: 1,
      lineHeight: "body",
      margin: "0",
    },
    Header: {
      backgroundColor: "primary",
      color: "background",
      fontWeight: "bold",
      margin: "0 auto",
      width: "full",
      maxWidth: "full",
      padding: 1,
      a: {
        color: "inherit",
      },
      h1: {
        margin: "0",
      },
    },
    Main: {
      margin: "0 auto",
      maxWidth: "full",
      width: "full",
    },
    Container: {
      padding: 2,
    },
    Footer: {
      backgroundColor: "primary",
      color: "background",
      fontWeight: "bold",
      margin: "0 auto",
      width: "full",
      maxWidth: "full",
      padding: 1,
      a: {
        color: "inherit",
      },
    },
    h1: {
      color: "gray.3",
      fontSize: 5,
      fontWeight: "bold",
      lineHeight: "heading",
      margin: "1rem 0 0",
    },
    ul: {
      borderTop: "1px solid",
      borderBottom: "1px solid",
      borderColor: "gray.0",
      listStyle: "none",
      padding: 0,
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
    },
    li: {
      a: {
        display: "inline-block",
        padding: 3,
        textTransform: "capitalize",
        "&:focus-within,&:hover": {
          backgroundColor: "gray.0",
        },
      },
    },
  },
}

export default theme
