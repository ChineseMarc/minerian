const awardSection = document.querySelector("#award");
const servicesSection = document.querySelector("#services");
const projectSection = document.querySelector("#projects");
const projectMedia = document.querySelector("#project-media");
const projectDetails = document.querySelector("#project-details");
const caseName = document.querySelector("#case-name");
const projectChildren = Array.from(projectSection.children);
const firstItem = projectChildren[0];

export const projectIntoView = () => {
  if (
    firstItem.getBoundingClientRect().top < window.innerHeight &&
    services.getBoundingClientRect().top - window.innerHeight > 0
  ) {
    awardSection.classList.add("hide");
    servicesSection.classList.add("hide");

    if (!projectMedia.classList.contains("show")) {
      setTimeout(() => {
        projectMedia.classList.add("show");
        projectDetails.classList.add("show");

        projectSection.classList.remove("hide");
      }, 350);
    }
  } else {
    projectMedia.classList.remove("show");
    projectDetails.classList.remove("show");
    projectSection.classList.add("hide");

    if (awardSection.classList.contains("hide")) {
      setTimeout(() => {
        awardSection.classList.remove("hide");
      }, 350);
    } else if (servicesSection.classList.contains("hide")) {
      servicesSection.classList.remove("hide");
    }
  }
};

//

const img = document.createElement("img");
img.src = `assets/image/${projectChildren[0].dataset.image}.jpg`;
caseName.innerHTML = projectChildren[0].dataset.casename;
projectMedia.style.backgroundImage = `url(assets/image/${projectChildren[0].dataset.image}.jpg)`;

projectChildren.forEach((element) => {
  element.addEventListener("mouseover", (mouseEvent) => {
    const img = document.createElement("img");
    img.src = `assets/image/${element.dataset.image}.jpg`;

    caseName.innerHTML = element.dataset.casename;

    img.onload = () => {
      projectChildren.forEach((el) => {
        el.children[0].classList.remove("active");
      });

      element.children[0].classList.add("active");

      projectMedia.style.backgroundImage = `url(assets/image/${element.dataset.image}.jpg)`;
    };
  });
});
