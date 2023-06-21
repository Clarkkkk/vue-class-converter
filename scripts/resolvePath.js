import { fileURLToPath } from 'node:url'

/**
 * 路径解析，用于取代path.resolve
 * @param {string} url 相对路径
 * @param {string} fileUrl import.meta.url
 * @returns {string}
 */
export const resolvePath = (url, fileUrl) => {
    return fileURLToPath(new URL(url, fileUrl))
}
