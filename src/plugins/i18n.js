import { createI18n } from "vue-i18n";
import localeMessages from "@/assets/lang";
// import { App } from "vue";
import appConfigs from "@/app/appConfig.js";

const legacy = false;
const globalInjection = true;
const locale = appConfigs.defaultLocale || "en";
const fallbackLocale =
  import.meta.env.VUE_APP_I18N_FALLBACK_LOCALE || "en";

export default createI18n({
  legacy,
  globalInjection,
  locale,
  fallbackLocale,
  messages: localeMessages,
  allowComposition: true
});

// export default createI18n({
//   legacy,
//   globalInjection,
//   locale,
//   fallbackLocale,
//   messages: localeMessages,
//   allowComposition: true
// }) as { install: (app: App<I18nOptions>) => any };