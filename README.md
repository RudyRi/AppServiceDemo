# Demo Web App
A simple App Service demo repo for testing Azure Web App deployment

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FRudyRi%2FAppServiceDemo%2Frefs%2Fheads%2Fmain%2Fazuredeploy.json)

## Overview

This repository contains a demo application designed to showcase the deployment of an Azure Web App using Azure App Service. The purpose of this demo is to provide a simple and straightforward example of how to deploy a web application to Azure, making it easier for developers to understand the process and get started with Azure App Service.

## Features

- **Easy Deployment**: Deploy the application to Azure with a single click using the "Deploy to Azure" button.
- **Sample Code**: Includes sample code for a basic web application.
- **Infrastructure as Code**: Uses an ARM template (`azuredeploy.json`) to define the Azure resources required for the application.
- **Connectivity Checks**: The demo includes a frontend that sends a request to the backend to connect to a second demo app service to check connectivity between app services. It also works with other websites to check connectivity, useful when troubleshooting VNET configurations, load balancers, NAT gateways, etc.

## Getting Started

To get started with this demo, follow these steps:

1. **Deploy to Azure**: Click the "Deploy to Azure" button at the top of this document to deploy the application to your Azure subscription.
2. **Clone the Repository**: Clone this repository to your local machine using the following command:
    ```bash
    git clone https://github.com/RudyRi/AppServiceDemo.git
    ```
3. **Explore the Code**: Open the project in your favorite code editor and explore the sample code provided.
4. **Modify and Extend**: Feel free to modify and extend the application to suit your needs.

## Prerequisites

- An Azure subscription
- Basic knowledge of Azure App Service
- Git installed on your local machine

## Resources

- [Azure App Service Documentation](https://docs.microsoft.com/en-us/azure/app-service/)
- [ARM Templates Documentation](https://docs.microsoft.com/en-us/azure/azure-resource-manager/templates/)

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request. We welcome contributions of all kinds, including bug fixes, new features, and documentation improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.