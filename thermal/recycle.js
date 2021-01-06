function recycle(array) {
  let arr = [];
  let arr2 = [];
  array.map((s) => {
    if (s.material == "paper" || s.secondMaterial == "paper") {
      arr2.push(s.type);
    }
  });
  arr.push(arr2);

  let arr3 = [];
  array.map((s) => {
    if (s.material == "glass" || s.secondMaterial == "glass") {
      arr3.push(s.type);
    }
  });
  arr.push(arr3);
  let arr5 = [];
  array.map((s) => {
    if (s.material == "organic" || s.secondMaterial == "organic") {
      arr5.push(s.type);
    }
  });
  arr.push(arr5);
  let arr4 = [];
  array.map((s) => {
    if (s.material == "plastic" || s.secondMaterial == "plastic") {
      arr4.push(s.type);
    }
  });
  arr.push(arr4);

  return arr;
}
console.log(
  recycle([
    {
      type: "rotten apples",
      material: "organic",
    },
    {
      type: "out of date yogurt",
      material: "organic",
      secondMaterial: "plastic",
    },
    {
      type: "wine bottle",
      material: "glass",
      secondMaterial: "paper",
    },
    {
      type: "amazon box",
      material: "paper",
    },
    {
      type: "beer bottle",
      material: "glass",
      secondMaterial: "paper",
    },
  ])
);
