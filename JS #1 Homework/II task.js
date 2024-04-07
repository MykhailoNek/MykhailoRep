var lines = 7;
for (var line = 0; line < lines; line++) {
    var spaces = ' '.repeat(lines - line - 1);
    var stars = '*'.repeat(2 * line + 1);
    console.log(spaces + stars);
}