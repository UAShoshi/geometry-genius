function calculateTriangleArea() {
  // get triangle base value
  const triangleBaseInput = document.getElementById('triangle-base');
  const triangleBaseText = triangleBaseInput.value;
  const base = parseFloat(triangleBaseText);
  console.log(base);

  // get triangle height value
  const triangleHeightInput = document.getElementById('triangle-height');
  const triangleHeightText = triangleHeightInput.value;
  const  height = parseFloat(triangleHeightText);
  console.log(height);

  // calculate triangle area
  const area = 0.5 * base * height;
  console.log('area of the triangle', area);

  //  Display triangle area
  const triangleAreaSpan = document.getElementById('triangle-area');
  triangleAreaSpan.innerText = area;
}

function calculateRectangleArea() {
  // get rectangle width value 
  const rectangleWidthInput = document.getElementById('rectangle-width');
  const rectangleWidthText = rectangleWidthInput.value;
  const width = parseFloat(rectangleWidthText);
  console.log(width);

  // get rectangle langth value
  const rectangleLangthInput = document.getElementById('rectangle-langth');
  const rectangleLangthText = rectangleLangthInput.value;
  const langth = parseFloat(rectangleLangthText);
  console.log(langth);

  // calculate rectangle area
  const area =  width * langth;
  console.log('area of the rectangle', area);

  //  Display rectangle area
  const rectangleAreaSpan = document.getElementById('rectangle-area');
  rectangleAreaSpan.innerText = area;
}