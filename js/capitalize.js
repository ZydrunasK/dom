/**
 * Gautas tekstas performatuojamas i visu zodziu pirmos raides tampa didziosios o likusios mazos.
 * @param {string} str ivesties domuo
 * @returns performatuotas tekstas
 */
export function capitalize(str) {
    return str.split(' ').map(w => w[0].toUpperCase() + w.slice(1).toLowerCase()).join(' ');
}