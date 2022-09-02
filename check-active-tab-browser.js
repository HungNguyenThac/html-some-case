const checkActiveTabs = () => {
  let timer = 0;
  const INTERVAL = 1000;
  let counter = 1;

  const handleSomething = () => {
    counter = counter - 1;
    // logic go here
  };

  const rePaint = (currentTimer) => {
    if (timer <= currentTimer) {
      handleSomething();
      timer = currentTimer + INTERVAL;
    }

    if (counter > 0) requestAnimationFrame(rePaint);
  };
  requestAnimationFrame(rePaint);
};

document.addEventListener("DOMContentLoaded", checkActiveTabs);
