import commonES from "../../locales/ro/common.json";
import commonEN from "../../locales/en/common.json";
import dynamicES from "../../locales/ro/dynamic.json";
import dynamicEN from "../../locales/en/dynamic.json";
import { Locale } from "@/types/i18n.type";

/**
 * Retrieves the language file based on the specified language.
 *
 * @param lang - The language code.
 * @returns The language file containing common and dynamic translations.
 */
export const getLanguageFile = (lang: Locale) => {
  switch (lang) {
    case "ro":
      return {
        common: commonES,
        dynamic: dynamicES,
      };
    case "en":
      return {
        common: commonEN,
        dynamic: dynamicEN,
      };
    default:
      return {
        common: commonEN,
        dynamic: dynamicEN,
      };
  }
};
