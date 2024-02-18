// const allMenuBtn = document.querySelector("#menu_btn li a");
// allMenuBtn.onclick = () => {
//   allMenuBtn.classList.remove("active");
//   console.log(allMenuBtn);
// };

const headerObj = [
  {
    id: 0,
    name: "Home",
  },
  {
    id: 1,
    name: "Discover",
  },
  {
    id: 2,
    name: "Activity",
  },
  {
    id: 3,
    name: "Page",
  },
  {
    id: 4,
    name: "Contact Us",
  },
];

const header = () => {
  const menuBtn = document.querySelector("#menu_btn");

  headerObj.forEach((item) => {
    const link = document.createElement("a");
    link.setAttribute("href", `#ch-${item.id}`);
    link.setAttribute("id", `ch-${item.id}`);
    link.textContent = item.name;

    link.addEventListener("click", (event) => {
      event.preventDefault();
      activateLink(event.target);
    });

    const li = document.createElement("li");
    li.appendChild(link);
    menuBtn.appendChild(li);
  });

  const selectedLinkId = localStorage.getItem("selectedLinkId");
  if (selectedLinkId) {
    const selectedLink = document.getElementById(selectedLinkId);
    if (selectedLink) {
      selectedLink.classList.add("active");
    }
  }
};

const activateLink = (clickedLink) => {
  const allLinks = document.querySelectorAll("#menu_btn li a");
  allLinks.forEach((link) => {
    if (link === clickedLink) {
      link.classList.add("active");
      localStorage.setItem("selectedLinkId", link.id);
    } else {
      link.classList.remove("active");
    }
  });
};

const init = () => {
  header();
};
