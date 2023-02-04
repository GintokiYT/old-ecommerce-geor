
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "mx.ferreyra.callnumber.CallNumber",
          "file": "plugins/mx.ferreyra.callnumber/www/CallNumber.js",
          "pluginId": "mx.ferreyra.callnumber",
        "clobbers": [
          "call"
        ]
        },
      {
          "id": "cordova-plugin-android-permissions.Permissions",
          "file": "plugins/cordova-plugin-android-permissions/www/permissions.js",
          "pluginId": "cordova-plugin-android-permissions",
        "clobbers": [
          "cordova.plugins.permissions"
        ]
        },
      {
          "id": "cordova-open-native-settings.Settings",
          "file": "plugins/cordova-open-native-settings/www/settings.js",
          "pluginId": "cordova-open-native-settings",
        "clobbers": [
          "cordova.plugins.settings"
        ]
        },
      {
          "id": "cordova-plugin-theme-detection.ThemeDetection",
          "file": "plugins/cordova-plugin-theme-detection/www/ThemeDetection.js",
          "pluginId": "cordova-plugin-theme-detection",
        "clobbers": [
          "cordova.plugins.ThemeDetection"
        ]
        },
      {
          "id": "cordova.plugins.diagnostic.Diagnostic",
          "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.js",
          "pluginId": "cordova.plugins.diagnostic",
        "merges": [
          "cordova.plugins.diagnostic"
        ]
        },
      {
          "id": "cordova.plugins.diagnostic.Diagnostic_Bluetooth",
          "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.bluetooth.js",
          "pluginId": "cordova.plugins.diagnostic",
        "merges": [
          "cordova.plugins.diagnostic.bluetooth"
        ]
        },
      {
          "id": "cordova.plugins.diagnostic.Diagnostic_Calendar",
          "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.calendar.js",
          "pluginId": "cordova.plugins.diagnostic",
        "merges": [
          "cordova.plugins.diagnostic.calendar"
        ]
        },
      {
          "id": "cordova.plugins.diagnostic.Diagnostic_Camera",
          "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.camera.js",
          "pluginId": "cordova.plugins.diagnostic",
        "merges": [
          "cordova.plugins.diagnostic.camera"
        ]
        },
      {
          "id": "cordova.plugins.diagnostic.Diagnostic_Contacts",
          "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.contacts.js",
          "pluginId": "cordova.plugins.diagnostic",
        "merges": [
          "cordova.plugins.diagnostic.contacts"
        ]
        },
      {
          "id": "cordova.plugins.diagnostic.Diagnostic_External_Storage",
          "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.external_storage.js",
          "pluginId": "cordova.plugins.diagnostic",
        "merges": [
          "cordova.plugins.diagnostic.external_storage"
        ]
        },
      {
          "id": "cordova.plugins.diagnostic.Diagnostic_Location",
          "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.location.js",
          "pluginId": "cordova.plugins.diagnostic",
        "merges": [
          "cordova.plugins.diagnostic.location"
        ]
        },
      {
          "id": "cordova.plugins.diagnostic.Diagnostic_Microphone",
          "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.microphone.js",
          "pluginId": "cordova.plugins.diagnostic",
        "merges": [
          "cordova.plugins.diagnostic.microphone"
        ]
        },
      {
          "id": "cordova.plugins.diagnostic.Diagnostic_NFC",
          "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.nfc.js",
          "pluginId": "cordova.plugins.diagnostic",
        "merges": [
          "cordova.plugins.diagnostic.nfc"
        ]
        },
      {
          "id": "cordova.plugins.diagnostic.Diagnostic_Notifications",
          "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.notifications.js",
          "pluginId": "cordova.plugins.diagnostic",
        "merges": [
          "cordova.plugins.diagnostic.notifications"
        ]
        },
      {
          "id": "cordova.plugins.diagnostic.Diagnostic_Wifi",
          "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.wifi.js",
          "pluginId": "cordova.plugins.diagnostic",
        "merges": [
          "cordova.plugins.diagnostic.wifi"
        ]
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "mx.ferreyra.callnumber": "0.0.2",
      "cordova-open-native-settings": "1.5.5",
      "cordova-plugin-android-permissions": "1.1.5",
      "cordova-plugin-theme-detection": "1.3.0",
      "cordova.plugins.diagnostic": "7.1.1"
    };
    // BOTTOM OF METADATA
    });
    