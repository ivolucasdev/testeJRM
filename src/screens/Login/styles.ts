import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#05253A",
  },
  input: {
    backgroundColor: "#E3E3E3",
    width: 296,
    height: 50,
    margin: 12,
    borderRadius: 8,
    padding: 16,
  },
  bemVindo: {
    color: "#FFFF",
    fontSize: 30,
    fontFamily: "Roboto_400Regular",
    fontWeight: "normal",
    justifyContent: "center",
    alignItems: "center",
  },
  btnSubmit: {
    backgroundColor: "#35AAFF",
    width: 296,
    height: 50,
    margin: 12,
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  submitText: {
    color: "#FFF",
    fontSize: 18,
  },
  btnRegister: {
    marginTop: 15,
  },
  registerText: {
    color: "#FFF",
    marginTop: 90,
  },
  criarContaText: {
    color: "#A3CDD9",
    fontFamily: "Roboto_400Regular",
    fontSize: 15,
    fontWeight: "normal",
    marginLeft: 150,
    textDecorationLine: "underline",
  },
  alerta: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
