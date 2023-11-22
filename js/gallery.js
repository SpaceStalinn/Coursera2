document.addEventListener('DOMContentLoaded', function () {
    let imageList = document.querySelectorAll('.preview');

    const tabGenerator = () => {
        for (let i = 0; i < imageList.length; i++) {
            imageList[i].setAttribute("tabIndex", i + 1);
        }
    }
    tabGenerator();
});

function handleFocus(element) {
    console.log(`${element.alt} has received focus.`);
}

function handleBlur(element) {
    console.log(`${element.alt} has lost focus.`);
}