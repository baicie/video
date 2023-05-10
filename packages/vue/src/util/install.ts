import type { App, Plugin } from 'vue'
import type { SFCWithInstall } from '../type'

export const INSTALLED_KEY = Symbol('INSTALLED_KEY')

export function makeInstaller(components: Plugin[] = []) {
  const install = (app: App) => {
    if (app[INSTALLED_KEY])
      return
    app[INSTALLED_KEY] = true
    components.forEach(c => app.use(c))
  }

  return {
    install,
  }
}

export function withInstall<T, E extends Record<string, any>>(main: T,
  extra?: E) {
  (main as SFCWithInstall<T>).install = (app): void => {
    for (const comp of [main, ...Object.values(extra ?? {})])
      app.component(comp.name, comp)
  }

  if (extra) {
    for (const [key, comp] of Object.entries(extra))
      (main as any)[key] = comp
  }
  return main as SFCWithInstall<T> & E
}
