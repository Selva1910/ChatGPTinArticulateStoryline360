# Using JavaScript in Articulate Storyline 360 Calling ChatGPT API

This repository contains a simple JavaScript script to access the ChatGPT API from the Articulate Storyline 360 platform.

## Table of Contents

- [Introduction](#introduction)
- [Setup](#setup)
- [Usage](#usage)

## Introduction

The ChatGPT API allows you to integrate the power of OpenAI's language model directly into your applications. With this JavaScript script, you can easily interact with the API from the Articulate Storyline 360 platform, enabling various use cases such as chatbots, text generation, and more.

## Setup

To use this script, you need to include it in your Articulate Storyline 360 project. Follow these steps:

1. Copy the `ChatGPT_Library.js` file contents from this repository.
2. Using [JsDeliver](https://www.jsdelivr.com/github) get a cloud link for the `ChatGPT_Service.js`.
3. Replace the `customLibSrc` const in `ChatGPT_Library.js` with the link from the JsDeliver.
4. Add the `ChatGPT_Library.js` to your Articulate Storyline 360 project in the Trigger JavaScript.
5. Make Sure to create the following variables with the exact Spelling in the Articulate Storyline 360 Project. 
   `message` - PlaceHolder for User Input,
   `response` - PlaceHolder for Reply from ChatGPT,
   `chatHistory` - PlaceHolder for saving History in Temp,
   `role` - By Default you want to have it as `user`,
   `apiKey` - Your Secret API Key Created from ChatGPT
   
## Usage

Once you've included the `ChatGPT_Library.js` script in your  Articulate Storyline 360 project, you can start using the ChatGPT API. Here's a brief overview of how to use it:

1. Initialize the ChatGPT client by providing your API key in your Variable in Articulate Storyline 360 at `apiKey`.
2. Trigger the `ChatGPT_Library.js` function to send a prompt to the ChatGPT API by User Action Events.
3. Handle the response from the API, which contains the generated text and Display the Variable `response` in your UI PlaceHolder.
