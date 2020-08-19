// creating array using json obj

window.addEventListener("load", () => {
  const pbc = document.querySelector("#ParentBlockContainer");
  console.log(pbc);

  //json array
  //we will get this value fro server using AJAX
  let postList = [
    { id: 1, post: "Hello World" },
    { id: 2, post: "Hello rld" },
    { id: 3, post: "Hello Wld" },
    { id: 4, post: "Hello Wsdorld" },
    { id: 5, post: "Hello sdsrld" },
    { id: 6, post: "Helloe erWld" },
    { id: 7, post: "Helloe erWld" },
    { id: 8, post: "Helloe erWld" },
    { id: 9, post: "Helloe erWld" },
    { id: 10, post: "Helloe erWld" },
  ];

  for (let i = 0; i < postList.length; i++) {
    let item = postList[i];

    const newelement = pbc.children[0].cloneNode(true);

    newelement.children[0].innerHTML = item.post;

    pbc.insertBefore(newelement, pbc.firstChild);
  }
});


