
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
          "file": "plugins/cordova-plugin-android-permissions/www/permissions-dummy.js",
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
          "file": "plugins/cordova.plugins.diagnostic/www/ios/diagnostic.js",
          "pluginId": "cordova.plugins.diagnostic",
        "merges": [
          "cordova.plugins.diagnostic"
        ]
        },
      {
          "id": "cordova.plugins.diagnostic.Diagnostic_Bluetooth",
          "file": "plugins/cordova.plugins.diagnostic/www/ios/diagnostic.bluetooth.js",
          "pluginId": "cordova.plugins.diagnostic",
        "merges": [
          "cordova.plugins.diagnostic.bluetooth"
        ]
        },
      {
          "id": "cordova.plugins.diagnostic.Diagnostic_Calendar",
          "file": "plugins/cordova.plugins.diagnostic/www/ios/diagnostic.calendar.js",
          "pluginId": "cordova.plugins.diagnostic",
        "merges": [
          "cordova.plugins.diagnostic.calendar"
        ]
        },
      {
          "id": "cordova.plugins.diagnostic.Diagnostic_Camera",
          "file": "plugins/cordova.plugins.diagnostic/www/ios/diagnostic.camera.js",
          "pluginId": "cordova.plugins.diagnostic",
        "merges": [
          "cordova.plugins.diagnostic.camera"
        ]
        },
      {
          "id": "cordova.plugins.diagnostic.Diagnostic_Contacts",
          "file": "plugins/cordova.plugins.diagnostic/www/ios/diagnostic.contacts.js",
          "pluginId": "cordova.plugins.diagnostic",
        "merges": [
          "cordova.plugins.diagnostic.contacts"
        ]
        },
      {
          "id": "cordova.plugins.diagnostic.Diagnostic_Location",
          "file": "plugins/cordova.plugins.diagnostic/www/ios/diagnostic.location.js",
          "pluginId": "cordova.plugins.diagnostic",
        "merges": [
          "cordova.plugins.diagnostic.location"
        ]
        },
      {
          "id": "cordova.plugins.diagnostic.Diagnostic_Microphone",
          "file": "plugins/cordova.plugins.diagnostic/www/ios/diagnostic.microphone.js",
          "pluginId": "cordova.plugins.diagnostic",
        "merges": [
          "cordova.plugins.diagnostic.microphone"
        ]
        },
      {
          "id": "cordova.plugins.diagnostic.Diagnostic_Motion",
          "file": "plugins/cordova.plugins.diagnostic/www/ios/diagnostic.motion.js",
          "pluginId": "cordova.plugins.diagnostic",
        "merges": [
          "cordova.plugins.diagnostic.motion"
        ]
        },
      {
          "id": "cordova.plugins.diagnostic.Diagnostic_Notifications",
          "file": "plugins/cordova.plugins.diagnostic/www/ios/diagnostic.notifications.js",
          "pluginId": "cordova.plugins.diagnostic",
        "merges": [
          "cordova.plugins.diagnostic.notifications"
        ]
        },
      {
          "id": "cordova.plugins.diagnostic.Diagnostic_Reminders",
          "file": "plugins/cordova.plugins.diagnostic/www/ios/diagnostic.reminders.js",
          "pluginId": "cordova.plugins.diagnostic",
        "merges": [
          "cordova.plugins.diagnostic.reminders"
        ]
        },
      {
          "id": "cordova.plugins.diagnostic.Diagnostic_Wifi",
          "file": "plugins/cordova.plugins.diagnostic/www/ios/diagnostic.wifi.js",
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
    