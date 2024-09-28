# Adobe Experience Platform Dataset Batch Download

## Project Overview

The **AEP Failed Batches Preview and Download** application is a web-based tool that facilitates interaction with Adobe Experience Platform (AEP). It enables users to preview and download JSON data for batches that have failed during ingestion into AEP. Users input the IDs of the failed batches, and the app allows them to view a detailed structure of the data before deciding to download it. This feature ensures that users have complete visibility over the data before taking action, reducing errors and improving efficiency in managing batch processes.

The tool's front end is built with HTML, CSS, and vanilla JavaScript, providing an easy-to-use interface for inputting batch IDs, previewing, and downloading data. The backend is powered by Python using the Flask framework, which communicates securely with Adobe Experience Platform via API requests, enabling the retrieval of failed batch information.

The project is designed to be hosted on Render.com, simplifying deployment and offering a platform for hosting the application while maintaining security by using environment variables for API credentials.

## Technologies Involved

This project utilizes the following technologies:

1. **Front-End:**

   - **HTML**: Provides the structure of the web pages, allowing users to input batch IDs and view batch previews.
   - **CSS**: Used to style the interface, providing a modern, user-friendly design with a responsive layout and visually appealing elements.
   - **Vanilla JavaScript**: This script handles client-side logic for communicating with the backend, showing loading indicators, and managing user interactions such as previews and downloads.

2. **Back-End:**

   - **Python**: Is the primary programming language for creating server-side logic.
   - **Flask**: A lightweight Python framework used to build the REST API that handles requests from the front end, retrieves data from AEP, and serves it to the client.
   - **Requests Library**: This library is used in Python to make HTTP requests to Adobe Experience Platform, allowing the retrieval of batch information.

3. **Environment & Security:**

   - **dotenv**: A Python library used to load sensitive credentials from a `.env` file, ensuring security by keeping API keys and access tokens out of the source code.
     **Adobe Experience Platform (AEP) API**: Provides the interface for querying batch data, which the application uses to retrieve failed batches.

4. **Deployment:**
   - **Render.com**: A cloud hosting platform that hosts the application, allowing easy scaling and management. The render is configured with environment variables to secure API keys and token access.

## Skills Demonstrated

1. **Web Development**:

   - Developed a full-stack web application using Flask for the backend and HTML/CSS/JavaScript for the front end.
   - Created a responsive and intuitive user interface that seamlessly interacts with different components.

2. **API Integration**:

   - Integrated with the **Adobe Experience Platform (AEP)** API to retrieve batch data.
   - Utilized Python's `requests` library to make secure API calls, demonstrating a strong understanding of RESTful APIs and authentication mechanisms.

3. **Authentication and Security**:

   - Employed OAuth 2.0 tokens and API keys to securely access AEP services.
   - Used a `.env` file to manage environment variables, which enhanced security by ensuring sensitive information such as access tokens and API keys are not exposed in the codebase.

4. **User Experience Design**:

   - Enhanced the front end with a user-friendly interface, including modern styles, responsive layouts, clear action flows, and loading indicators.
   - Ensured that users could preview data before downloading, providing better control and reducing errors.

5. **Cloud Deployment**:

   - Hosted the application on Render.com, showcasing skills in configuring a cloud-hosted environment.
   - Set up environment variables for secure, hassle-free deployment.

6. **Error Handling and User Feedback**:
   - Implemented error messages and loading indicators to give users real-time feedback during data retrieval.
   - Enabled a seamless user flow, from inputting batch IDs to previewing and downloading data, with a clear visual distinction between different actions.

These skills and technologies together demonstrate the ability to develop secure, user-friendly, and fully functional applications for working with external APIs in a cloud-hosted environment, emphasizing both the technical and user experience aspects of web development.

## Project URL

The project is hosted in Render.com and can be accessed via the following live URL:

[AEP Dataset: Preview and Download Failed Batches](https://aep-batch-download.onrender.com)

=====

Copyright 2024 | [Arturo Santiago-Rivera](mailto:asantiago@arsari.com) | [MIT License](LICENSE) | Updated: September 28, 2024
