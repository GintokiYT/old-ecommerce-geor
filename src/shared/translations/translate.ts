// Welcome Select-country
const welcomSelectCountry = {
  es_ES: {
    "welcomSelectCountry.title": "¡Bienvenido!"
  },
  en_US: {
    "welcomSelectCountry.title": "Welcome!"
  },
  pt_PT: {
    "welcomSelectCountry.title": "Bem-vindo!"
  }
}

export const AppTranslations = {
  es_ES: {
    ...welcomSelectCountry.es_ES,
    "welcome.dialog.title": "Aviso",
    "welcome.dialog.description": "¿Estas seguro de salir?",
    "test": "Hola en español",
  },
  en_US: {
    ...welcomSelectCountry.en_US,
    "welcome.dialog.title": "Warning",
    "welcome.dialog.description": "Are you sure?",
    "test": "Hi! on english",
  },
  pt_PT: {
    ...welcomSelectCountry.pt_PT,
    "welcome.dialog.title": "Warning",
    "welcome.dialog.description": "Are you sure?",
    "test": "Hi! on english",
  }
}
