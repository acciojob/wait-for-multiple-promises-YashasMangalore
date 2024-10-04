//your JS code here. If required.
// Function to create a promise that resolves after a random time between 1 and 3 seconds
function createRandomPromise(promiseNumber) {
  return new Promise((resolve) => {
    const timeTaken = (Math.random() * 2 + 1).toFixed(3); // Random time between 1 and 3 seconds
    setTimeout(() => {
      resolve({ promiseNumber, timeTaken: parseFloat(timeTaken) });
    }, timeTaken * 1000); // Convert seconds to milliseconds
  });
}

const outputElement = document.getElementById('output');

// Create and execute the promises
const promise1 = createRandomPromise(1);
const promise2 = createRandomPromise(2);
const promise3 = createRandomPromise(3);

const startTime = performance.now();

// Use Promise.all to wait for all the promises to resolve
Promise.all([promise1, promise2, promise3]).then((results) => {
  const endTime = performance.now();
  const totalTime = ((endTime - startTime) / 1000).toFixed(3); // Calculate total time

  // Remove the "Loading..." row
  outputElement.innerHTML = '';

  // Populate the table with the results of each promise
  results.forEach((result) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>Promise ${result.promiseNumber}</td>
      <td>${result.timeTaken}</td>
    `;
    outputElement.appendChild(row);
  });

  // Add the final row for the total time
  const totalRow = document.createElement('tr');
  totalRow.innerHTML = `
    <td>Total</td>
    <td>${totalTime}</td>
  `;
  outputElement.appendChild(totalRow);
});
