/**
 * Compress the given string by removing all newlines.
 *
 * @param text  The string that should be compressed.
 * @returns The string with all newlines stripped.
 */
export function ng2Comments(comments: Array<any>, options):void {
    const EXAMPLE_DESCRIPTOR = 'example';

    let obj = {
        examples: []
    };

    comments
        .map(cleanup)
        .forEach((tag) => {
            if(tag.key.toLowerCase() === EXAMPLE_DESCRIPTOR) {
                obj.examples.push({
                    example: tag.value
                });
            } else {
                obj[tag.key] = tag.value;
            }
        });

    return options.fn(obj);
}

/**
 * Simplify construct
 * @param tag The tag to simplify
 * @returns {{key: String, value: String}}
 */
function cleanup(tag) {
    return {
        key: tag.tagName,
        value: tag.text
    };
}