/**
 * Compress the given string by removing all newlines.
 *
 * @param text  The string that should be compressed.
 * @returns The string with all newlines stripped.
 */
export function ngNavigation(navigation: any, options:any): any {
    let obj = {};

    console.log('\n\n#######################################\n\n');


    console.log(navigation.children[0].parent);


    console.log('\n\n#######################################\n\n');

    return options.fn(obj);
}

function writeNavigation(navigation, depth: number = 1) {
    let prefix = genMarkers(depth);

    console.log(prefix, navigation.title);
}

function genMarkers(depth) {
    let markers = '';
    for(let i = 0; i < depth; i++) {
        markers += '> ';
    }
    return markers;
}
