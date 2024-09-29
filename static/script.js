function previewBatches() {
  const batchIds = document.getElementById('batch_ids').value;
  if (batchIds.trim() == '') {
    alert('No batch IDs provided');
    return false;
  }

  // Show loading spinner
  document.getElementById('loading').style.display = 'block';
  document.getElementById('previewSection').style.display = 'block';

  fetch('/preview_batches', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `batch_ids=${encodeURIComponent(batchIds)}`,
  })
    .then((response) => response.json())
    .then((data) => {
      // Hide loading spinner
      document.getElementById('loading').style.display = 'none';
      const responseDiv = document.getElementById('response');

      if (data.error) {
        responseDiv.innerHTML = `<div class="error-message">Error: ${data.error}</div>`;
        return;
      }

      responseDiv.innerHTML = '';
      let previewHtml = '<ul class="batch-list">';

      data.forEach((batch) => {
        if (batch.error) {
          previewHtml += `<li class="batch-item"><strong>Batch ID:</strong> ${batch.batch_id} <span class="error-message">(Error: Failed to retrieve data)</span></li>`;
        } else {
          previewHtml += `<li class="batch-item"><strong>Batch ID:</strong> ${batch.batch_id}<br>`;
          previewHtml += `<pre class="json-preview">${JSON.stringify(batch.data, null, 2)}</pre></li>`;
        }
      });

      previewHtml += '</ul>';
      responseDiv.innerHTML = previewHtml;

      // Show the download button if there is data to download
      document.getElementById('previewSection').style.display = 'block';
      document.getElementById('downloadButton').style.display = 'block';
    })
    .catch((error) => {
      // Hide loading spinner
      document.getElementById('loading').style.display = 'none';
      document.getElementById('response').innerHTML = `<div class="error-message">Error: ${error}</div>`;
    });
}

function downloadBatches() {
  const batchIds = document.getElementById('batch_ids').value;

  fetch('/preview_batches', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `batch_ids=${encodeURIComponent(batchIds)}`,
  })
    .then((response) => response.json())
    .then((data) => {
      fetch('/download_batch_data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((downloadResponse) => downloadResponse.json())
        .then((downloadData) => {
          // Create a blob of the data and create a link to download
          const blob = new Blob([JSON.stringify(downloadData, null, 2)], {
            type: 'application/json',
          });
          const link = document.createElement('a');
          link.href = URL.createObjectURL(blob);
          link.download = 'failed_batches.json';
          link.click();
        })
        .catch((downloadError) => {
          document.getElementById('response').innerHTML = `<div class="error-message">Error: ${downloadError}</div>`;
        });
    })
    .catch((previewError) => {
      document.getElementById('response').innerHTML = `<div class="error-message">Error: ${previewError}</div>`;
    });
}
