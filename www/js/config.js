/**
 * Environment variable for the remote server. This is used to select the appropriate remote URL
 * @type {string} Environment Name
 */
const RemoteServerEnvironment = "Dev2";

/**
 * Remote URL Variables. One for each possible RemoteServerEnvironment value. Must Be named like
 * RemoteServerEnvironment + "_RemoteURL"
 */
const Dev_RemoteURL     = "http://www.youngevity.reurgency.com/90forLifeMobile#/";
const Dev2_RemoteURL     = "http://dev2.youngevity.reurgency.com/90forLifeMobile#/";
const Test1_RemoteURL   = "http://test1.youngevity.reurgency.com/90forLifeMobile#/";
const QA_RemoteURL      = "";
const Staging_RemoteURL = "http://appstest.youngevity.com/90forLifeMobile/";
const Demo_RemoteURL    = "http://www.reurgency.com/#/Demo";
const Prod_RemoteURL    = "https://apps.youngevity.com/90ForLifeMobile/";
//END REMOTE URL VARIABLES

/**
 * The apps title. This will be injected into document.title
 * @type {string}
 */
const AppTitle = "90forLife Mobile";
/**
 * The Title in the config block. Typically the company name
 * @type {string}
 */
const ConfigTitle = "Youngevity";
/**
 * The msg to display while we wait for PhoneGaps deviceready event
 * @type {string}
 */
const ConfigMsg = "Configuring Application";
/**
 * The msg to display after PhoneGaps deviceready event is caught and while the app is doing the online check before
 * redirecting to the remote URL
 * @type {string}
 */
const ConfigCompleteMsg = "Configuration Complete";
/**
 * The title inside the section that appears when PhoneGap detects that the device doesn't have a network connection
 * @type {string}
 */
const OfflineTitle = "Offline";
/**
 * The message inside the section that appears when PhoneGap detects that the device doesn't have a network connection
 * @type {string}
 */
const OfflineMsg = "This app requires an active internet connection. Please check your connection and try again";
/**
 * The yext on the button inside the section that appears when PhoneGap detects that the device doesn't have a network
 * connection used to manually re-check the connection
 * @type {string}
 */
const RetryConnectionBtnMsg = "Retry";

/**
 * Bootstrapping function. Place any code here that needs to run at startup, before index.js creates
 * reference to our actual PhoneGap App
 */
var init = (function(){
    //START SET THE DOM VALUES FROM THE CONFIG CONSTANTS
    document.title = AppTitle;
    document.getElementById("config_title").innerHTML = ConfigTitle;
    document.getElementById("config_msg").innerHTML = ConfigMsg;
    document.getElementById("configComplete_msg").innerHTML = ConfigCompleteMsg;
    document.getElementById("offline_title").innerHTML = OfflineTitle;
    document.getElementById("offline_msg").innerHTML = OfflineMsg;
    document.getElementById("retryConnection_btn").value = RetryConnectionBtnMsg;
    //END
})();
