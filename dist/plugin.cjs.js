'use strict';

var core = require('@capacitor/core');

exports.AndroidSettings = void 0;
(function (AndroidSettings) {
    /**
     * Show settings for accessibility modules
     */
    AndroidSettings["Accessibility"] = "accessibility";
    /**
     * Show add account screen for creating a new account
     */
    AndroidSettings["Account"] = "account";
    /**
     * Show settings to allow entering/exiting airplane mode
     */
    AndroidSettings["AirplaneMode"] = "airplane_mode";
    /**
     * Show settings to allow configuration of APNs
     */
    AndroidSettings["Apn"] = "apn";
    /**
     * Show screen of details about a particular application
     */
    AndroidSettings["ApplicationDetails"] = "application_details";
    /**
     * Show settings to allow configuration of application development-related settings
     */
    AndroidSettings["ApplicationDevelopment"] = "application_development";
    /**
     * Show settings to allow configuration of application-related settings
     */
    AndroidSettings["Application"] = "application";
    /**
     * Show settings to allow configuration of application-specific notifications
     */
    AndroidSettings["AppNotification"] = "app_notification";
    /**
     * Show screen for controlling which apps can ignore battery optimizations
     */
    AndroidSettings["BatteryOptimization"] = "battery_optimization";
    /**
     * Show settings to allow configuration of Bluetooth
     */
    AndroidSettings["Bluetooth"] = "bluetooth";
    /**
     * Show settings for video captioning
     */
    AndroidSettings["Captioning"] = "captioning";
    /**
     * Show settings to allow configuration of cast endpoints
     */
    AndroidSettings["Cast"] = "cast";
    /**
     * Show settings for selection of 2G/3G/4G
     */
    AndroidSettings["DataRoaming"] = "data_roaming";
    /**
     * Show settings to allow configuration of date and time
     */
    AndroidSettings["Date"] = "date";
    /**
     * Show settings to allow configuration of display
     */
    AndroidSettings["Display"] = "display";
    /**
     * Show Daydream settings
     */
    AndroidSettings["Dream"] = "dream";
    /**
     * Show Home selection settings
     */
    AndroidSettings["Home"] = "home";
    /**
     *    Show settings to configure input methods, in particular allowing the user to enable input methods
     */
    AndroidSettings["Keyboard"] = "keyboard";
    /**
     * Show settings to enable/disable input method subtypes
     */
    AndroidSettings["KeyboardSubType"] = "keyboard_subtype";
    /**
     * Show settings to allow configuration of locale
     */
    AndroidSettings["Locale"] = "locale";
    /**
     * Show settings to allow configuration of current location sources
     */
    AndroidSettings["Location"] = "location";
    /**
     *    Show settings to manage installed applications
     */
    AndroidSettings["ManageApplications"] = "manage_applications";
    /**
     * Show settings to manage all applications
     */
    AndroidSettings["ManageAllApplications"] = "manage_all_applications";
    /**
     * Show settings for memory card storage
     */
    AndroidSettings["MemoryCard"] = "memory_card";
    /**
     * Show settings for selecting the network operator
     */
    AndroidSettings["Network"] = "network";
    /**
     * Show NFC Sharing settings
     */
    AndroidSettings["NfcSharing"] = "nfcsharing";
    /**
     * Show NFC Tap & Pay settings
     */
    AndroidSettings["NfcPayment"] = "nfc_payment";
    /**
     * Show NFC settings
     */
    AndroidSettings["NfcSettings"] = "nfc_settings";
    /**
     * Show the top level print settings
     */
    AndroidSettings["Print"] = "print";
    /**
     * Show settings to allow configuration of privacy options
     */
    AndroidSettings["Privacy"] = "privacy";
    /**
     * Show settings to allow configuration of quick launch shortcuts
     */
    AndroidSettings["QuickLaunch"] = "quick_launch";
    /**
     * Show settings for global search
     */
    AndroidSettings["Search"] = "search";
    /**
     * Show settings to allow configuration of security and location privacy
     */
    AndroidSettings["Security"] = "security";
    /**
     * Show system settings
     */
    AndroidSettings["Settings"] = "settings";
    /**
     * Show the regulatory information screen for the device
     */
    AndroidSettings["ShowRegulatoryInfo"] = "show_regulatory_info";
    /**
     * Show settings to a llow configuration of sound and volume
     */
    AndroidSettings["Sound"] = "sound";
    /**
     * Show settings for internal storage
     */
    AndroidSettings["Storage"] = "storage";
    /**
     * Show settings to allow configuration of sync settings
     */
    AndroidSettings["Sync"] = "sync";
    /**
     * Show settings to control access to usage information
     */
    AndroidSettings["Usage"] = "usage";
    /**
     * Show settings to manage the user input dictionary
     */
    AndroidSettings["UserDictionary"] = "user_dictionary";
    /**
     * Show settings to configure input methods, in particular allowing the user to enable input methods
     */
    AndroidSettings["VoiceInput"] = "voice_input";
    /**
     * Show settings to allow configuration of Wi-Fi
     */
    AndroidSettings["Wifi"] = "wifi";
    /**
     * Show settings to allow configuration of a static IP address for Wi-Fi
     */
    AndroidSettings["WifiIp"] = "wifi_ip";
    /**
     * Show settings to allow configuration of wireless controls such as Wi-Fi, Bluetooth and Mobile networks
     */
    AndroidSettings["Wireless"] = "wireless";
    /**
     * Zen mode settings.
     */
    AndroidSettings["ZenMode"] = "zen_mode";
    /**
     * Zen mode priority settings.
     * Note that this may not work on every single device.
     * See: https://github.com/RaphaelWoude/capacitor-native-settings/pull/63
     */
    AndroidSettings["ZenModePriority"] = "zen_mode_priority";
    /**
     * Zen mode blocked effects settings.
     * Note that this may not work on every single device.
     * See: https://github.com/RaphaelWoude/capacitor-native-settings/pull/63
     */
    AndroidSettings["ZenModeBlockedEffects"] = "zen_mode_blocked_effects";
})(exports.AndroidSettings || (exports.AndroidSettings = {}));
exports.IOSSettings = void 0;
(function (IOSSettings) {
    /**
     * Settings > About page
     */
    IOSSettings["About"] = "about";
    /**
     * Opens your app-specific settings screen. Note that this is the only officially supported settings screen by Apple.
     */
    IOSSettings["App"] = "app";
    /**
     * Opens app-specific notification settings screen for iOS 15.4+; opens general app-specific settings for earlier versions."
     */
    IOSSettings["AppNotification"] = "appNotification";
    /**
     * Used to set if and when the screen should be automatically locked.
     */
    IOSSettings["AutoLock"] = "autoLock";
    /**
     * Bluetooth settings. Allows the users to enable/disable bluetooth and to search for devices.
     */
    IOSSettings["Bluetooth"] = "bluetooth";
    /**
     * Date and time settings.
     */
    IOSSettings["DateTime"] = "dateTime";
    /**
     * FaceTime settings.
     */
    IOSSettings["FaceTime"] = "facetime";
    /**
     * Opens iOS general settings screen.
     */
    IOSSettings["General"] = "general";
    /**
     * Keyboard settings.
     */
    IOSSettings["Keyboard"] = "keyboard";
    /**
     * iCloud settings.
     */
    IOSSettings["ICloud"] = "iCloud";
    /**
     * iCloud Storage and Backup settings.
     */
    IOSSettings["ICloudStorageBackup"] = "iCloudStorageBackup";
    /**
     * Language and region settings.
     */
    IOSSettings["International"] = "international";
    /**
     * Show settings to allow configuration of current location sources
     */
    IOSSettings["LocationServices"] = "locationServices";
    /**
     * Music settings.
     */
    IOSSettings["Music"] = "music";
    /**
     * Notes settings.
     */
    IOSSettings["Notes"] = "notes";
    /**
     * Notifications settings.
     */
    IOSSettings["Notifications"] = "notifications";
    /**
     * Phone settings.
     */
    IOSSettings["Phone"] = "phone";
    /**
     * Photos settings.
     */
    IOSSettings["Photos"] = "photos";
    /**
     * Allows the user to manage configuration profiles that are installed on the phone.
     */
    IOSSettings["ManagedConfigurationList"] = "managedConfigurationList";
    /**
     * Screen where the user can reset the phone to factory settings.
     */
    IOSSettings["Reset"] = "reset";
    /**
     * Ringtone settings.
     */
    IOSSettings["Ringtone"] = "ringtone";
    /**
     * Used to set phone volume, vibration settings, etc.
     */
    IOSSettings["Sounds"] = "sounds";
    /**
     * Software update screen.
     */
    IOSSettings["SoftwareUpdate"] = "softwareUpdate";
    /**
     * Store settings.
     */
    IOSSettings["Store"] = "store";
    /**
     * Tracking settings.
     */
    IOSSettings["Tracking"] = "tracking";
    /**
     * Wallpaper settings.
     */
    IOSSettings["Wallpaper"] = "wallpaper";
    /**
     * WiFi settings.
     */
    IOSSettings["WiFi"] = "wifi";
    /**
     * Tethering settings (used to create a hotspot with mobile data).
     */
    IOSSettings["Tethering"] = "tethering";
    /**
     * Do Not Disturb settings.
     */
    IOSSettings["DoNotDisturb"] = "doNotDisturb";
    /**
     * Touch id passcode settings.
     */
    IOSSettings["TouchIdPasscode"] = "touchIdPasscode";
    /**
     * Screen Time settings.
     */
    IOSSettings["ScreenTime"] = "screenTime";
    /**
     * Accessibility settings.
     */
    IOSSettings["Accessibility"] = "accessibility";
})(exports.IOSSettings || (exports.IOSSettings = {}));

const NativeSettings = core.registerPlugin('NativeSettings', {
    web: () => Promise.resolve().then(function () { return web; }).then((m) => new m.NativeSettingsWeb()),
});

class NativeSettingsWeb extends core.WebPlugin {
    /**
     * Open iOS & Android settings.
     * Not implemented for web!
     */
    async open() {
        return new Promise((_resolve, reject) => {
            reject(new Error('Not implemented for web.'));
        });
    }
    /**
     * Open android settings.
     * Not implemented for web!
     */
    async openAndroid() {
        return new Promise((_resolve, reject) => {
            reject(new Error('Not implemented for web.'));
        });
    }
    /**
     * Open iOS settings.
     * Not implemented for web!
     */
    async openIOS() {
        return new Promise((_resolve, reject) => {
            reject(new Error('Not implemented for web.'));
        });
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    NativeSettingsWeb: NativeSettingsWeb
});

exports.NativeSettings = NativeSettings;
//# sourceMappingURL=plugin.cjs.js.map
