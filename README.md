# AI Keyword Extractor

![AI Keyword Extractor](./assets/images/keyword-extractor.png)

AI Keyword Extractor is a web application that utilizes OpenAI's natural language processing capabilities to extract keywords from the provided text.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [How to Use](#how-to-use)
- [Built With](#built-with)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Introduction

AI Keyword Extractor is a project aimed at demonstrating the capabilities of OpenAI's natural language processing API. It allows users to extract keywords from a given text input and displays the result in a modal.

## Features

- Text Input: Users can enter their text in a textarea for keyword extraction.
- Keyword Extraction: The application sends the input text to the OpenAI API to extract keywords.
- Modal Display: Keywords are presented in a modal with an animated loading indicator during API call.
- Error Handling: The app provides appropriate error messages if there are any issues with the API call or empty input.
- Responsive: The application is designed to work well on different devices.

## How to Use

1. Clone this repository to your local machine or download the source code as a ZIP file.
2. Install the required dependencies (if any) using a package manager like npm or yarn.
3. Obtain your OpenAI API key and set it as an environment variable (e.g., `VITE_OPENAI_API_KEY`) in the project configuration file.
4. Optionally, you can set the OpenAI API URL as an environment variable (e.g., `VITE_OPENAI_API_URL`) if you are using a custom URL.
5. Run the development server using the appropriate command (e.g., `npm start` or `yarn start`).
6. Open the application in your web browser.
7. Paste the text you want to extract keywords from into the textarea.
8. Click the "Extract Keywords" button.
9. If the input is empty, an error message will appear, and the keywords will be displayed in the modal once extracted.

## Built With

- React: For building the frontend user interface and managing the application state.
- Chakra UI: For styling the components and ensuring a responsive design.
- OpenAI API: For extracting keywords from the input text.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- Frontend Mentor for providing the inspiration for the project and design challenge.
- [Sheneeza Volcov](#) for developing the AI Keyword Extractor app and conducting the code review.
