document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("cookie-popup");
  const prefsMenu = document.getElementById("preferences-menu");
  const btnAcceptAll = document.getElementById("btn-accept-all");
  const btnRejectAll = document.getElementById("btn-reject-all");
  const btnCustomize = document.getElementById("btn-customize");
  const btnSavePref = document.getElementById("btn-save-pref");
  const prefAnalytics = document.getElementById("pref-analytics");
  const prefMarketing = document.getElementById("pref-marketing");
  let autoHideTimer = null;

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
    return null;
  }
  function setCookie(name, value, days = 365) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${JSON.stringify(value)}; expires=${date.toUTCString()}; path=/`;
  }
  function applyPreferences(prefs) {
    console.log("Active Cookie Preferences:", prefs);
    if (prefs.analytics) {
        console.log("Analytics Enabled");
    }
    if (prefs.marketing) {
        console.log("Marketing Enabled");
    }
  }
  function hidePopup() {
    popup.classList.add("hidden");
    if (autoHideTimer) clearTimeout(autoHideTimer);
  }
  function saveconsent(preferences) {
    setCookie("user_cookie_consent", preferences, 365);
    applyPreferences(preferences);
    hidePopup();
  }
  const exisitingconsent = getCookie("user_cookie_consent");
  if (exisitingconsent) {
    applyPreferences(JSON.parse(exisitingconsent));
  } else {
    popup.classList.remove("hidden");
    autoHideTimer = setTimeout(() => {
      const defaultState = {
        necessary: true,
        analytics: false,
        marketing: false,
        autoDismissed: true,
      };
      saveconsent(defaultState);
    }, 12000);
  }
  btnAcceptAll.addEventListener("click", () => {
    saveconsent({ necessary: true, analytics: true, marketing: true });
  });
  btnRejectAll.addEventListener("click", () => {
    saveconsent({ necessary: true, analytics: false, marketing: false });
  });
  btnCustomize.addEventListener("click", () => {
    prefsMenu.classList.toggle("hidden");
    btnSavePref.classList.toggle("hidden");
    btnAcceptAll.classList.toggle("hidden");
    if (autoHideTimer) clearTimeout(autoHideTimer);
  });
  btnSavePref.addEventListener("click", () => {
    const customPrefs = {
      necessary: true,
      analytics: prefAnalytics.checked,
      marketing: prefMarketing.checked,
    };
    saveconsent(customPrefs);
  });
});
