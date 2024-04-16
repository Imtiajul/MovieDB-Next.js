import 'server-only';

const dictionaries = {
   en: () => import("@/db/en.json").then((module) => module.default),
   bn: () => import("@/db/bn.json").then((module) => module.default)
}

export const getDictionaries = async (dic) => dictionaries[dic]();