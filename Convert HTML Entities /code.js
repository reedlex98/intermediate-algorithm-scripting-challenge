/*
        Intermediate Algorithm Scripting: Convert HTML Entities
    Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/
function convertHTML(str) {

    return str.split('').map(char => {
        switch (char) {
            case "'":
                return '&apos;';
                break;
            case '"':
                return '&​quot;';
                break;
            case '&':
                return '&amp;';
                break;
            case '<':
                return '&lt;';
                break;
            case '>':
                return '&gt;';
                break;
            default:
                return char
                break;
        }
    }).join('')
}

console.log(convertHTML('Stuff in "quotation marks"'));