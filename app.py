from flask import Flask, render_template, request, jsonify
import requests
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Setup Flask app
app = Flask(__name__)

AEP_API_KEY = os.getenv("AEP_API_KEY")
AEP_TENANT_ID = os.getenv("AEP_TENANT_ID")
AEP_ENDPOINT = os.getenv("AEP_ENDPOINT")

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/preview_batches', methods=['POST'])
def preview_batches():
    batch_ids = request.form.get('batch_ids')
    # if not batch_ids:
    #     return jsonify({"error": "No batch IDs provided"}), 400

    batch_ids_list = batch_ids.split(',')
    batch_previews = []

    for batch_id in batch_ids_list:
        response = get_failed_batch(batch_id.strip())
        if response.status_code == 200:
            batch_previews.append({"batch_id": batch_id, "data": response.json()})
        else:
            batch_previews.append({"batch_id": batch_id, "error": "Failed to retrieve data"})

    return jsonify(batch_previews)

def get_failed_batch(batch_id):
    headers = {
        "Authorization": f"Bearer {os.getenv('AEP_ACCESS_TOKEN')}",
        "x-api-key": AEP_API_KEY,
        "Content-Type": "application/json"
    }

    url = f"{AEP_ENDPOINT}/batches/{batch_id}/failures"
    response = requests.get(url, headers=headers)

    return response

@app.route('/download_batch_data', methods=['POST'])
def download_batch_data():
    batch_data = request.get_json()
    if not batch_data:
        return jsonify({"error": "No batch data provided"}), 400

    return jsonify(batch_data), 200

if __name__ == '__main__':
    app.run() # debug=True, host='0.0.0.0'
