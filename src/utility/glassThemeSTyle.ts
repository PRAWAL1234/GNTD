export const glassTheme = {
  fontFamily: "Inter, sans-serif",
  components: {
    Card: {
      defaultProps: {
        shadow: "xl",
        radius: "lg",
        withBorder: true
      },
      styles: {
        root: {
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          color: "white"
        }
      }
    },
    TextInput: {
      styles: {
        input: {
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          color: "white"
        },
        label: {
          color: "rgba(255, 255, 255, 0.9)"
        }
      }
    },
    Button: {
      defaultProps: {
        variant: "white"
      },
      styles: {
        root: {
          backgroundColor: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(10px)",
          color: "white",
          border: "1px solid rgba(255, 255, 255, 0.3)"
        }
      }
    }
  }
}
