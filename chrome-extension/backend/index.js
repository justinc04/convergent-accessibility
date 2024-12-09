const express = require('express');
const puppeteer = require('puppeteer');
const cors = require('cors');
// const { OpenAI } = require("openai");
const fs = require("fs");
const path = require("path");
const axios = require("axios")
const cheerio = require('cheerio')


const app = express();
const port = 3000;


// const openai = new OpenAI( {
//     apiKey: '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',
// });

// Enable CORS to allow requests from other domains (including your Chrome extension)
app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

let index = -1; 






// Endpoint to receive the URL and process the page
app.post('/api/get-page', async (req, res) => {
    let browser;

    index++; 
    try {
        // Launch Puppeteer browser
        // const {imageFile, url, message} = req.body;
        const { url } = req.body; 


        browser = await puppeteer.launch();
        const page = await browser.newPage();

        // const response = await openai.chat.completions.create({
        //     model: "gpt-4o-mini",
        //     messages: [
        //       {
        //         role: "user",
        //         content: [
        //           { type: "text", text: 'Analyze the following UI elements and provide instructions and the word to click.'},
        //           {
        //             type: "image_url",
        //             image_url: {
        //               "url": imageFile,
        //             },
        //           },
        //         ],
        //       },
        //     ],
        //   });

        // console.log(response.choices[0]); 
      

        await page.setViewport({
            width: parseInt(1200),
            height: parseInt(700),
            deviceScaleFactor: parseFloat(1)
        });


        console.log(url);

        // Navigate to the URL
        await page.goto(url, { waitUntil: 'networkidle2' })
            .then(async () => {
                // Extract the full HTML of the page
                const html = await page.content();
                
                // Extract coordinates of the "Images" button
                await page.evaluate((selectors, index) => {
                    // Find the "Images" button based on innerText)
                    const imagesButton = document.querySelector(selectors[index]);


                    if (!imagesButton) {
                        return null;
                    }

                    // Get the bounding rectangle of the element
                    const rect = imagesButton.getBoundingClientRect();
                    return {
                        x: rect.x,
                        y: rect.y,
                        width: rect.width,
                        height: rect.height
                    };
                },
                ["#icp-nav-flyout > span > span.nav-line-2", "#icp-language-settings > div:nth-child(6) > div > label > i", "#icp-save-button > span > input"], // selectors
                index
            ).then((coordinates) => {
                    if (coordinates) {
                        console.log('Coordinates:', coordinates);
                        // Send the coordinates as the response
                        res.json({ coordinates });
                        
                        
                        console.log(index); 
                    } else {
                        console.log('Images button not found');
                        res.status(404).json({ error: 'Images button not found' });
                        console.log(index);
                    }
                })
                .catch((err) => {
                    console.error("Error extracting coordinates:", err);
                    res.status(500).json({ error: 'Error extracting coordinates' });
                });
            })
            .catch((err) => {
                console.error("Error loading the page:", err);
                res.status(500).json({ error: 'Error loading the page' });
            })
            .finally(() => {
                // Ensure the browser is closed
                if (browser) {
                    browser.close();
                }
            });
    } catch (error) {
        console.error('Unexpected error:', error);
        res.status(500).json({ error: 'Unexpected server error' });
        if (browser) {
            browser.close();
        }
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
