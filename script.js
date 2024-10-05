function displayLoading() {
  console.log("Displaying loading...");
  const tbody = document.getElementById('output');
  
  // Clear any existing rows
  tbody.innerHTML = '';
  
  // Add loading row
  const loadingRow = document.createElement('tr');
  loadingRow.id = 'loading';
  loadingRow.innerHTML = `<td colspan="2">Loading...</td>`;
  tbody.appendChild(loadingRow);
}

function removeLoading() {
  const loadingRow = document.getElementById('loading');
  if (loadingRow) {
    loadingRow.remove();
  }
}

function runPromises() {
  displayLoading(); // Display loading immediately
  
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

  Promise.all(promises).then((times) => {
    removeLoading(); // Remove the loading text after promises resolve

    const tbody = document.getElementById('output');
    
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

document.getElementById('start-button').addEventListener('click', runPromises);
