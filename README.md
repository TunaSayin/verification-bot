# Discord Verification Bot
This is simple verification bot for discord. Basically what it does is once you use `vf!verify` command in a channel it will create random code, will link the code with your id and put it into it's database. After that once you go to that link with your discord account it will check your discord id and your search parameter if your search parameter matches with id that is in bot's database it will verify you and change the message that it sent to the discord channel.

# Prerequisites
- NodeJS v12 or higher, <br />
- Microsoft Visual Studio Tools (your are going to need this to install [quick.db](https://www.npmjs.com/package/quick.db))

# Setup
- Install the project and use `npm install` command to install all node modules that bot needs. <br />
- Edit the `.env` folder for your bot and you are good to go!

# Usage
Use `vf!verify` in any channel that bot can see and follow the link that bot sent.

<iframe src="https://giphy.com/embed/gDHGEViMMrRZgStsuZ" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/gDHGEViMMrRZgStsuZ">via GIPHY</a></p>

# License
```
MIT License

Copyright (c) 2021 Tuna

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
