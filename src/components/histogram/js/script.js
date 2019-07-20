export function updateScript(element) {
    if (element.scrollHeight > 320) {
        element.childNodes[0].classList.add("with-scroll");
    }
}