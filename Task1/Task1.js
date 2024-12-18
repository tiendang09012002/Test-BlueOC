const lengthFrequency = (array) => {
  const lengths = array.map((item) => item.length);
  const lengthCounts = {};
  lengths.forEach((item) => {
    lengthCounts[item] = (lengthCounts[item] || 0) + 1;
  });
  let maxKey = ''
  let maxValue = 0
  for (let key in lengthCounts) {
    if (lengthCounts[key] > maxValue) {
      maxValue = lengthCounts[key]
      maxKey = key
    }
  }
  const listFrequecy = array.filter((item) => item.length == maxKey)
  return listFrequecy
};

const testCase = () => {
  console.log(lengthFrequency(["123", "abv", "asd", "cd", "12", "hh"]))
  console.log(lengthFrequency(['asdh', 'asdasd', 'vxcvxv', 'sd13', '123fasd']))
  console.log(lengthFrequency(['tien']))
  console.log(lengthFrequency([]))
};
testCase();
