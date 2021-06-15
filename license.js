const request = require('request');
const fs = require('fs');
let badgeName;
let licenseText;
let licenseURL;
// Gets the current year, so it can be input into the License Copyright Data.
let date = new Date().getFullYear();

// This function will generate the selected license both in a license file, and in the license section of the generated README.
function generateLicense(questionData) {
    let data = questionData;
    let switchData = data.licenseType;
    // This switch statement will make sure the correct license data is written to the license file and the generated README.
    switch (switchData) {
        case 'Apache License 2.0':
            // This is a simplified title that will be written into the license badge.
            badgeName = "Apache%202.0";
            // This URL will go into the 'request' call, so that the full license text will get generated to the license file.
            licenseURL = "https://www.apache.org/licenses/LICENSE-2.0.txt";
            // This is the text that will get written to the license section of the README; for the MIT and Unlicense licenses it will also be written to the license file.
            licenseText =
                `- Copyright [${date}] [${data.name}]

- Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

- https://www.apache.org/licenses/LICENSE-2.0

- Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`;
            break;
        case 'Boost Software License 1.0':
            badgeName = "Boost%20Software%201.0";
            licenseURL = "https://www.boost.org/LICENSE_1_0.txt"
            licenseText =
                `- Copyright [${date}] [${data.name}]

- Licensed under the Boost Software License, Version 1.0;
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

- https://opensource.org/licenses/bsl1.0.html`;
            break;
        case 'GNU Affero General Public License v3.0':
            badgeName = "GNU%20AGPL%203.0";
            licenseURL = "https://www.gnu.org/licenses/agpl-3.0.txt";
            licenseText =
                `- Copyright (C) [${date}] [${data.name}]

- This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

- This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

- You should have received a copy of the GNU Affero General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.`;
            break;
        case 'GNU General Public License v3.0':
            badgeName = "GNU%20GPL%203.0";
            licenseURL = "https://www.gnu.org/licenses/gpl-3.0.txt";
            licenseText =
                `- Copyright (C) [${date}] [${data.name}]

- This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

- This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

- You should have received a copy of the GNU General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.`;
            break;
        case 'MIT License':
            badgeName = "MIT";
            licenseURL = "";
            licenseText =
                `- MIT License

- Copyright (c) [${date}] [${data.name}]

- Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

- The above copyright notice and this permission notice (including the next paragraph) shall be included in all copies or substantial portions of the Software.

- THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
            break;
        case 'Mozilla Public License 2.0':
            badgeName = "Mozilla%20Public%202.0";
            licenseURL = "https://www.mozilla.org/media/MPL/2.0/index.815ca599c9df.txt";
            licenseText =
                `- This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.`;
            break;
        case 'The Unlicense':
            badgeName = "Unlicensed";
            licenseURL = "";
            licenseText =
                `- The Unlicense

- This is free and unencumbered software released into the public domain.

- Anyone is free to copy, modify, publish, use, compile, sell, or distribute this software, either in source code form or as a compiled binary, for any purpose, commercial or non-commercial, and by any means.

- In jurisdictions that recognize copyright laws, the author or authors of this software dedicate any and all copyright interest in the software to the public domain. We make this dedication for the benefit of the public at large and to the detriment of our heirs and successors. We intend this dedication to be an overt act of relinquishment in perpetuity of all present and future rights to this software under copyright law.

- THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

- For more information, please refer to <https://unlicense.org/>`;
            break;
    }
    // This is the location that the license file will be written to and the name it will be given.
    const licenseFile = "./demo/LICENSE";
    // This if statement will determine if the license file text will be taken from the license url or the license text section (for licenses that don't have a web page in txt format.)
    if (licenseURL === "") {
        fs.writeFile(
            licenseFile,
            licenseText,
            err => err ? console.error(err) : console.log("Wrote license!"));
    } else {
        // The request goes to the URL and takes the body of the web page and writes it to the license file.
        request(
            { uri: licenseURL },
            (error, response, body) => {
                fs.writeFile(
                    licenseFile,
                    body,
                    err => err ? console.error(err) : console.log("Wrote license!"));
            });
    }
    // This module export needs to be within the function otherwise it will export the two variables before they change to the correct data.
    module.exports = {
        badgeName,
        licenseText,
    };
    return;
}

module.exports = {
    generateLicense,
};