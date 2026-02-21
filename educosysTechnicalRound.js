const objectValue = {
  title: { 43: 40, 60: 32, 67: 28 },
  organization: { 75: 20, 87: 18, 98: 16 },
  author: { 75: 20, 87: 18, 98: 16 },
  email: { 75: 20, 87: 18, 98: 16 },
};

// Result
// {
//   title: [ [ 43, 60, 67 ], [ 40, 32, 28 ] ],
//   organization: [ [ 75, 87, 98 ], [ 20, 18, 16 ] ],
//   author: [ [ 75, 87, 98 ], [ 20, 18, 16 ] ],
//   email: [ [ 75, 87, 98 ], [ 20, 18, 16 ] ]
// }

function stringNumberExtractor(objectValue) {
  let res = {
    title: [[], []],
    organization: [[], []],
    author: [[], []],
    email: [[], []],
  };
  let { title, organization, author, email } = objectValue;

  //   console.log(res);

  for (let i in title) {
    res.title[0].push(i);
    res.title[1].push(title[i]);
  }

  for (let i in organization) {
    res.organization[0].push(i);
    res.organization[1].push(organization[i]);
  }

  for (let i in author) {
    res.author[0].push(i);
    res.author[1].push(author[i]);
  }

  for (let i in email) {
    res.email[0].push(i);
    res.email[1].push(email[i]);
  }

  return res;
}

let result = stringNumberExtractor(objectValue);
console.log(result);
