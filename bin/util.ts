import { MAPPING } from './mapping';

export function getParent(mod: string) {
  const top = MAPPING.find(x => x.module === mod);
  if (!top) {
    const sub = MAPPING
      .filter(x => !!x.children && x.children.length)
      .find(x => {
        return !!x.children.find(y => y.module === mod);
      });

    return sub && sub.module;
  } else {
    return mod;
  }
}
