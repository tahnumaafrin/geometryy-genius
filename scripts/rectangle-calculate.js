function calculateRectangleArea(){
    // get the width value

    const rectangleInputWidth = document.getElementById('rectangle-width');
    const rectangleInputText = rectangleInputWidth.value;
    const width = parseFloat(rectangleInputText);
    console.log(width);

    // get the length value

    const rectangleInputLength = document.getElementById('rectangle-length');
    const rectangleInputLengthText = rectangleInputLength.value;
    const length = parseFloat(rectangleInputLengthText);
    console.log(length);

    // calculate the area of rectangle

    const rectangleArea = width * length;
    console.log(rectangleArea);

    // display the area

    const displayRectangleArea = document.getElementById('rectangle-area');
    displayRectangleArea.innerText = rectangleArea;
}