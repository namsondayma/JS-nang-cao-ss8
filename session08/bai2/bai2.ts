type people = {
    name: string;
    age: number;
    address: object;
  };
  
  function validatePerson(obj: any): obj is people {
    return (
      typeof obj === "object" &&
      typeof obj.name === "string" &&
      typeof obj.age === "number" &&
      typeof obj.address === "object"
    );
  }