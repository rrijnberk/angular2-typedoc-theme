/**
 * Compress the given string by removing all newlines.
 *
 * @param text  The string that should be compressed.
 * @returns The string with all newlines stripped.
 */
export function escape(str: string):string {
    if(str)
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g,'&gt;');
    return '';
}
