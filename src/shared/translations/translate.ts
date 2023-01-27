

const inbox={
    es_ES:{
        "inbox.title": "Bandeja"
    },
    en_US:{
        "inbox.title": "tray"
    }
}

export const AppTranslations = {
    es_ES: {
        "welcome.dialog.title": "Aviso",
        "welcome.dialog.description": "¿Estas seguro de salir?",
        "test": "Hola en español",
        ...inbox.es_ES
    },
    en_US: {
        "welcome.dialog.title": "Warning",
        "welcome.dialog.description": "Are you sure?",
        "test": "Hi! on english",
        ...inbox.en_US
    }
}