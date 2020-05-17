
export function clearModuleCache(module: string) {
  const mod = require.cache[require.resolve(module)];
  if (mod) {
    mod.children.forEach((m => {
      clearModuleCache(require.resolve(m.id));
    }))
    delete require.cache[require.resolve(module)]
  }
}