// Function to display loading row
function displayLoading() {
  const tbody = document.getElementById('output');
  const loadingRow = document.createElement('tr');
  loadingRow.id = 'loading';
  loadingRow.innerHTML = `<td colspan="2">Loading...</td>`;
  tbody.appendChild(loadingRow);
}

// Function to remove loading row
function removeLoading() {
  const loadingRow = document.getElementById('loading');
  if (loadingRow) {
    loadingRow.remove();
  }
}

// Function to create and handle promises
function runPromises() {
  const tbody = document.getElementById('output');
  displayLoading(); // Display loading before promises start

  // Create 3 promises that resolve after a random time between 1 and 3 seconds
  const promises = [
    new Promise((resolve) => {
      const time = Math.random() * 2 + 1; // Random time between 1 and 3 seconds
      setTimeout(() => resolve(time.toFixed(3)), time * 1000);
    }),
    new Promise((resolve) => {
      const time = Math.random() * 2 + 1;
      setTimeout(() => resolve(time.toFixed(3)), time * 1000);
    }),
    new Promise((resolve) => {
      const time = Math.random() * 2 + 1;
      setTimeout(() => resolve(time.toFixed(3)), time * 1000);
    }),
  ];

  // Use Promise.all to wait for all promises to resolve
  Promise.all(promises).then((times) => {
    removeLoading(); // Remove the loading text once all promises are resolved

    // Append rows with the resolved promise times
    times.forEach((time, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `<td>Promise ${index + 1}</td><td>${time}</td>`;
      tbody.appendChild(row);
    });

    // Calculate and append total time row
    const totalTime = times.reduce((acc, curr) => acc + parseFloat(curr), 0).toFixed(3);
    const totalRow = document.createElement('tr');
    totalRow.innerHTML = `<td>Total</td><td>${totalTime}</td>`;
    tbody.appendChild(totalRow);
  });
}

// Attach event listener to start the promises when the button is clicked
document.getElementById('start-button').addEventListener('click', runPromises);
