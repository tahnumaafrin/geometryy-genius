/******
 * objectives : get base and height of a triangle. calculate the area of the triangle using the provided formula.
 * Then display it in the UI.
 * step - 1: get base value of triangle
 * step - 2: set an id in the base input field
 * step - 3: using getElementById to access the input field
 * step - 4: get value from the input field(value is string now)
 * step - 5: convert the string to a number .
 * ********/

function triangleCalculateArea() {
  // triangle base calculation

  const triangleBaseInput = document.getElementById('triangle-base');
  const triangleBaseText = triangleBaseInput.value;
  const triangleBase = parseFloat(triangleBaseText);
  console.log(triangleBase);

  //   triangle height calculation

  const triangleHeightInputField = document.getElementById('triangle-height');
  const triangleHeightInputText = triangleHeightInputField.value;
  const height = parseFloat(triangleHeightInputText);
  console.log(height);

  // calculate the area of triangle

const area = 0.5 * triangleBase * height;
console.log('Area of the triangle is:', area);


// display the area in the UI

const displayTheArea = document.getElementById('triangle-area');
displayTheArea.innerText = area;
}