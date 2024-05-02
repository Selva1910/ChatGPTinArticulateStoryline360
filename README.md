# Using JavaScript in Articulate Storyline 360 Calling ChatGPT API

This repository contains a simple JavaScript script to access the ChatGPT API from the Articulate Storyline 360 platform.

## Table of Contents

- [Introduction](#introduction)
- [Setup](#setup)
- [Usage](#usage)

## Introduction

The ChatGPT API allows you to integrate the power of OpenAI's language model directly into your applications. With this JavaScript script, you can easily interact with the API from the  Articulate Storyline 360 platform, enabling various use cases such as chatbots, text generation, and more.

## Setup

To use this script, you need to include it in your  Articulate Storyline 360 project. Follow these steps:

1. Copy the `ChatGPT_Service.js` file contents from this repository.
2. Add the `ChatGPT_Service.js` file to your  Articulate Storyline 360 project in the Trigger JavaScript.
3. Make Sure create the following variables with the exact Spelling in the  Articulate Storyline 360 Project. 
   `message` - PlaceHolder for User Input,
   `response` - PlaceHolder for Reply from ChatGPT,
   `chatHistory` - PlaceHolder for saving History in Temp,
   `role` - By Default you want to have it as `user`,
   `apiKey` - Your Secret API Key Created from ChatGPT
## Usage

Once you've included the `ChatGPT_Service.js` script in your  Articulate Storyline 360 project, you can start using the ChatGPT API. Here's a brief overview of how to use it:

1. Initialize the ChatGPT client by providing your API key.
2. Set Trigger to Use the `sendMessage` function to send a prompt to the ChatGPT API.
3. Handle the response from the API, which contains the generated text and Display the Variable response in your UI PlaceHolder.
