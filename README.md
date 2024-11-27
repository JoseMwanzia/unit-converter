# Unit Converter Application

## Description

This application is a simple, interactive unit converter built using HTML, JavaScript, and CSS. It allows users to convert values between different units of measurement for Length, Weight, and Temperature. The project is designed to enhance user experience with a tab-based interface for switching between different categories.

## Features

- Length Conversion: Converts between millimeters, centimeters, meters, kilometers, inches, feet, and miles.
- Weight Conversion: Converts between milligrams, grams, kilograms, ounces, and pounds.
- Temperature Conversion: Converts between Celsius, Fahrenheit, and Kelvin.
- Tab-based navigation for seamless switching between categories.
- Reset functionality to clear results and restart calculations.

## Tech Stack

- Frontend: HTML5, CSS3, JavaScript
- Library: convert-units
- Bundler: Webpack
- Styles: Bootstrap 5.3 (via CDN)

## Installation

1. Clone the repository:
```bash 
git clone https://github.com/josemwanzia/unit-converter.git
```

```bash
cd unit-converter
```

2. Install dependencies:
```bash
npm install
```
3. Install dependencies:
```bash
npx webpack
```

4. Start the development server:
```bash
npm run dev
```
5. Open the application in your browser at http://localhost:3000.

## Project Structure
```bash
.
├── length.js            # JavaScript for length conversion logic
├── weight.js            # JavaScript for weight conversion logic
├── temperature.js       # JavaScript for temperature conversion logic
├── index.html           # Main HTML file
├── index.css            # Styling for the application
├── webpack.config.js    # Webpack configuration
└── dist/                # Output folder for built files
```
## Usage

#### Length Conversion
1. Navigate to the Length tab.
2. Enter a value, select the units to convert from and to.
3. Click Convert to see the results.

#### Weight Conversion
1. Navigate to the Weight tab.
2. Enter a value, select the units to convert from and to.
3. Click Convert to see the results.

#### Temperature Conversion
1. Navigate to the Temperature tab.
2. Enter a value, select the units to convert from and to.
3. Click Convert to see the results.

#### Reset
After viewing the conversion result, click Reset to clear the result and start over.

## Development

#### Scripts
- ``npm run start``: Starts the development server.
- ``npm run build``: Builds the application for production.

#### Adding New Features
- Add a new tab in index.html.
- Create a new JavaScript file for the logic.
- Update webpack.config.js to include the new entry point.

#### Dependencies
- convert-units: Used for unit conversions.
- Bootstrap: Used for styling and layout.
- Webpack: Module bundler for development and production builds.

## Contributing

- Fork the repository.
- Create a new branch (git checkout -b feature/your-feature).
- Commit your changes (git commit -am 'Add your feature').
- Push to the branch (git push origin feature/your-feature).
- Open a pull request.
