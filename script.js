// Select all elements with the class "counter"
const counters = document.querySelectorAll(".counter");

// Iterate over each counter element
counters.forEach((counter) => {
  // Set the initial text of the counter to "0"
  counter.innerText = "0";

  // Define a function to update the counter
  const updateCounter = () => {
    // Get the target value from the 'data-target' attribute and convert it to a number
    const target = +counter.getAttribute("data-target");

    // Get the current count value from the inner text of the counter and convert it to a number
    const count = +counter.innerText;

    // Calculate the increment value based on the target (to make the animation smoother)
    const increment = target / 200;

    // Check if the current count is less than the target
    if (count < target) {
      // Increment the count and update the inner text of the counter
      counter.innerText = `${Math.ceil(count + increment)}`;

      // Schedule the next update of the counter after a short delay
      setTimeout(updateCounter, 1);
    } else {
      // If the count has reached the target, set the inner text of the counter to the target value
      counter.innerText = target;
    }
  };

  // Call the updateCounter function to start the animation
  updateCounter();
});
