const ready = () => {
  const imageListLazyLoad = document.querySelectorAll("body");

  if ("IntersectionObserver" in window) {
    const optionIntersection = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    const handleImage = (image) => {
      // login go here
    };

    let handleLazyLoadImages = (entries, observer) => {
      // entries is an array

      entries.forEach(async (entry) => {
        if (entry.isIntersecting) {
          await handleImage(entry.target);
          observer.unobserve(entry.target);
        }
      });
    };

    let observer = new IntersectionObserver(
      handleLazyLoadImages,
      optionIntersection
    );

    imageListLazyLoad.forEach((image) => {
      observer.observe(image);
    });
  } else {
    imageListLazyLoad.forEach((image) => {
      // logic go here
    });
  }
};
document.addEventListener("DOMContentLoaded", ready);
