const pbc1 = document.querySelector("ParentBlockContainer");

window.addEventListener("load", () => {
  console.log("Hello");
  const pbc = document.querySelector("#ParentBlockContainer");
  console.log(pbc);

  //to read child element of ParentBlockContainer (pbc)

  // console.log(pbc.children[0]);
  for (let i = 0; i < 20; i++) {
    const newelement = pbc.children[0].cloneNode(true);
    // we need to add this newelement  in the parent
    newelement.children[0].innerHTML = "DADA" + i;//adding hard-coded value here

    pbc.insertBefore(newelement, pbc.firstChild);
    //node.insertBefore(newnode, existingnode) --insertBefore DOM Syntax
  }
});




