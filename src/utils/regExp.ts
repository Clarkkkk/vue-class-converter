export const stringClassRegExp = /class="([^"]+)"/
export const arrayClassRegExp = /:class="\[([^"]+)\]"|class=\{\[([^}]+)\]\}/
export const partialArrayClassRegExp = /^:class="\[$|^class=\{\[$/
export const partialArrayClassEndRegExp = /^]["}]$/
export const arrayItemRegExp = /^'[a-zA-Z0-9_\-:@/[\]]+',?$/
