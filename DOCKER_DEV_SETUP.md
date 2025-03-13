# Docker Dev Setup

## Prerequisites

-   Docker installed on your machine
-   Git (to clone the repository)

## Getting Started

1. Clone the repository:

    ```
    git clone https://github.com/Longhorn-Developers/UT-Registration-Minus.git
    cd UT-Registration-Minus
    ```

2. Build the Docker image:

    ```
    docker build -t ut-registration-minus .
    ```

## Using Docker for Different Modes

The Docker setup supports three modes of operation: build, zip, and dev. You can choose the mode either by passing it as a command or by setting the `BUILD_MODE` environment variable.

### Build Mode (Default)

This mode builds the extension and places the output in the `dist` folder.

```
docker run -it --rm -v $(pwd)/dist:/extension/dist ut-registration-minus build
```

or

```
docker run -it --rm -v $(pwd)/dist:/extension/dist -e BUILD_MODE=build ut-registration-minus
```

### Zip Mode

This mode builds the extension and creates a zipped package in the `package` folder.

```
docker run -it --rm -v $(pwd)/package:/extension/package ut-registration-minus zip
```

or

```
docker run -it --rm -v $(pwd)/package:/extension/package -e BUILD_MODE=zip ut-registration-minus
```

### Development Mode with Hot Module Replacement (HMR)

This mode runs the extension in development mode with HMR support.

_Note_: This currently doesn't work.

```
docker run -it --rm -v $(pwd)/dist:/extension/dist -v $(pwd)/dist:/extension/dist -p 5173:5173 ut-registration-minus dev
```

or

```
docker run -it --rm -v $(pwd)/dist:/extension/dist -p 5173:5173 -e BUILD_MODE=dev ut-registration-minus
```

## Accessing the Built Extension

-   For build mode, the extension files will be in the `dist` directory on your host machine.
-   For zip mode, the zipped extension will be in the `package` directory on your host machine.
-   For dev mode, the extension will be continuously built in the `dist` directory, and you can load it as an unpacked extension in Chrome.

## Docker Development Workflow

When working on the extension:

1. Run the container in dev mode
2. Make changes to your source code
3. The extension will automatically rebuild thanks to HMR
4. Reload the extension in Chrome to see your changes

## Troubleshooting

-   If you encounter permission issues with the output directories, ensure that the directories exist on your host machine and have the correct permissions.
-   For any other issues, please check the Docker logs or open an issue in the GitHub repository.
