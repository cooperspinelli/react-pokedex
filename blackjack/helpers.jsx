
function choice(items) {
    const chosen = Math.floor(Math.random() * items.length);
    return items[chosen];
}

export default choice