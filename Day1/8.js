const pbc1 = document.querySelector("ParentBlockContainer");

window.addEventListener("load", () => {
  console.log("Hello");
  const pbc = document.querySelector("#ParentBlockContainer")
  console.log(pbc);

  //to read child element of ParentBlockContainer (pbc)

  // console.log(pbc.children[0]);
  for (let i = 0; i < 20; i++) {
    const newelement = pbc.children[0].cloneNode(true);
    // we need to add this newelement  in the parent

    pbc.insertBefore(newelement, pbc.firstChild);
  }
});




