# Locus

Car spotting iOS app.

## Getting Started

Locus needs a Mongo database to connect to, so make sure that's installed and an instance is running. The backend REST API also needs to be running.

Install all dependencies with npm:
```sh
npm install
```

Start running the React Native packager:
```sh
npm start
```

## Running the app on iOS

1. Open `ios/locus.xcodeproj` with Xcode.
2. Edit the `jsCodeLocation` variable in the `AppDelegate.m` file to your machine's IP address.
3. Select a device or simulator to run the app on.
4. Build and Run.

## Development

Run the Enzyme component tests:

```sh
```