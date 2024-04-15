type Square = {
    kind: "square";
    sideLength: number;
  };
  
  type Circle = {
    kind: "circle";
    radius: number;
  };
  
  type Shape = Square | Circle;
  
  function calculateArea(shape: Shape): number | undefined {
    if (shape.kind === "square") {
      return shape.sideLength ** 2;
    } else if (shape.kind === "circle") {
      return Math.PI * shape.radius ** 2;
    }
  }
  