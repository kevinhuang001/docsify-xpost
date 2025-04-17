(function () {
    var myPlugin = function (hook, vm) {
        const svgs = {
            comment: `<svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path></g></svg>`,
            rex: `<svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path></g></svg>`,
            like: `<svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path></g></svg>`,
            view: `<svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path></g></svg>`,
            bookmark: `<svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"></path></g></svg>`,
            share: `<svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path></g></svg>`,
            more: `<svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></g></svg>`
        };
        const verifiedBadgeSVG = `<svg viewBox="0 0 24 24" aria-label="Verified account" role="img" class="verified-badge"><g><path fill="#1d9bf0" d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.33 2.34 5.23-5.23 1.42 1.42-6.65 6.65z"></path></g></svg>`;
        function createx(avatarUrl, username, userId, timestamp, comments, retweets, likes, views, content, imageUrl, isVerified = true) {
            const xDiv = document.createElement('div');
            xDiv.className = 'x';

            // --- Header --- (No changes needed here)
            const headerDiv = document.createElement('div');
            headerDiv.className = 'x-header';
            // ... (avatar, user info, more options icon creation remains the same) ...
            const avatarImg = document.createElement('img');
            avatarImg.className = 'avatar';
            avatarImg.src = avatarUrl;
            avatarImg.alt = `${username} avatar`;
            headerDiv.appendChild(avatarImg);

            const userInfoWrapper = document.createElement('div');
            userInfoWrapper.className = 'user-info-wrapper';

            const userInfoDiv = document.createElement('div');
            userInfoDiv.className = 'user-info';

            const userDetailsDiv = document.createElement('div');
            userDetailsDiv.className = 'user-details';

            const usernameSpan = document.createElement('span');
            usernameSpan.className = 'username';
            usernameSpan.textContent = username;
            userDetailsDiv.appendChild(usernameSpan);

            if (isVerified) {
                const badgeContainer = document.createElement('span');
                badgeContainer.innerHTML = verifiedBadgeSVG;
                userDetailsDiv.appendChild(badgeContainer.firstChild);
            }

            const userIdSpan = document.createElement('span');
            userIdSpan.className = 'user-id';
            userIdSpan.textContent = userId;
            userDetailsDiv.appendChild(userIdSpan);

            const separatorSpan = document.createElement('span');
            separatorSpan.className = 'separator';
            separatorSpan.textContent = '·';
            userDetailsDiv.appendChild(separatorSpan);

            const timestampSpan = document.createElement('span');
            timestampSpan.className = 'timestamp';
            timestampSpan.textContent = timestamp;
            userDetailsDiv.appendChild(timestampSpan);

            userInfoDiv.appendChild(userDetailsDiv);
            userInfoWrapper.appendChild(userInfoDiv);
            headerDiv.appendChild(userInfoWrapper);

            const moreOptionsDiv = document.createElement('div');
            moreOptionsDiv.className = 'more-options';
            moreOptionsDiv.innerHTML = svgs.more;
            headerDiv.appendChild(moreOptionsDiv);

            xDiv.appendChild(headerDiv);


            // --- Content --- (No changes needed here)
            const contentDiv = document.createElement('div');
            contentDiv.className = 'x-content';
            content = content.replace('Show more', '<a href="#">Show more</a>');
            contentDiv.innerHTML = content;
            xDiv.appendChild(contentDiv);

            // --- Media (Optional) --- (No changes needed here)
            if (imageUrl) {
                const mediaDiv = document.createElement('div');
                mediaDiv.className = 'x-media';
                const image = document.createElement('img');
                image.className = 'x-image';
                image.src = imageUrl;
                image.alt = 'x image';
                mediaDiv.appendChild(image);
                xDiv.appendChild(mediaDiv);
            }

            // --- Footer (UPDATED STRUCTURE) ---
            const footerDiv = document.createElement('div');
            footerDiv.className = 'x-footer';

            // Helper function (no changes needed)
            const createAction = (iconSvg, count, actionClass) => {
                const actionDiv = document.createElement('div');
                actionDiv.className = `action-item ${actionClass}`;
                const countDisplay = count > 0 ? count : '';
                actionDiv.innerHTML = `${iconSvg}<span class="count">${countDisplay}</span>`;
                return actionDiv;
            };

            // Create the left group container
            const actionsLeftDiv = document.createElement('div');
            actionsLeftDiv.className = 'footer-actions-left';
            actionsLeftDiv.appendChild(createAction(svgs.comment, comments, 'comment'));
            actionsLeftDiv.appendChild(createAction(svgs.rex, retweets, 'rex'));
            actionsLeftDiv.appendChild(createAction(svgs.like, likes, 'like'));
            actionsLeftDiv.appendChild(createAction(svgs.view, views, 'view'));

            // Create the right group container
            const actionsRightDiv = document.createElement('div');
            actionsRightDiv.className = 'footer-actions-right';
            actionsRightDiv.appendChild(createAction(svgs.bookmark, 0, 'bookmark')); // No count usually shown
            actionsRightDiv.appendChild(createAction(svgs.share, 0, 'share')); // No count usually shown

            // Append the two groups to the main footer
            footerDiv.appendChild(actionsLeftDiv);
            footerDiv.appendChild(actionsRightDiv);

            xDiv.appendChild(footerDiv); // Add the footer to the main x div
            return xDiv; // Return the complete x element
        }

        function processxString(inputText) {
            // Regex to find the block between x:start and x:end
            // The 's' flag allows '.' to match newline characters
            const blockRegex = /<!--\s*x:start\s*-->(.*?)<!--\s*x:end\s*-->/s;
            const blockMatch = inputText.match(blockRegex);
        
            if (!blockMatch || !blockMatch[1]) {
                console.warn("x block markers <!-- x:start --> or <!-- x:end --> not found.");
                return inputText; // Return original string if block not found
            }
        
            const fullBlock = blockMatch[0]; // The entire matched block including markers
            const blockContent = blockMatch[1]; // Content between markers
        
            // Regex to extract key-value pairs from comments like <!-- key:value -->
            // Handles optional single quotes around the value
            const keyValueRegex = /<!--\s*(\w+):'?([^'\n]*?)'?\s*-->/;
        
            const xData = {
                avatarUrl: '',
                imageUrl: undefined, // Optional
                username: '',
                userId: '',
                timestamp: '',
                likes: 0,
                retweets: 0,
                comments: 0,
                views: 0,
                content: '', // Will be built from non-comment lines
                isVerified: true // Default assumption, could be added as a parameter too
            };
        
            const contentLines = [];
            const lines = blockContent.split('\n');
        
            lines.forEach(line => {
                const trimmedLine = line.trim();
                if (!trimmedLine) return; // Skip empty lines
        
                const keyValueMatch = trimmedLine.match(keyValueRegex);
        
                if (keyValueMatch) {
                    const key = keyValueMatch[1].trim();
                    const value = keyValueMatch[2].trim();
        
                    // Assign value based on key
                    switch (key) {
                        case 'avatarUrl':
                        case 'imageUrl':
                        case 'username':
                        case 'userId':
                        case 'timestamp':
                            xData[key] = value;
                            break;
                        case 'likes':
                        case 'retweets':
                        case 'comments':
                        case 'views':
                            xData[key] = parseInt(value, 10) || 0; // Parse as integer, default to 0 if NaN
                            break;
                        // Add cases for other potential keys like 'isVerified' if needed
                        // case 'isVerified':
                        //     xData[key] = value.toLowerCase() === 'true';
                        //     break;
                        default:
                            console.warn(`Unknown key found in x block: ${key}`);
                    }
                } else {
                    // If it's not a key-value comment, assume it's part of the x content
                    contentLines.push(trimmedLine);
                }
            });
        
            xData.content = contentLines.join('\n');
        
            // Basic validation: Check if essential data exists
            if (!xData.username || !xData.userId || !xData.timestamp) {
                console.error("Missing essential x data (username, userId, or timestamp) in the block.");
                // Optionally return original string or throw an error
                // return inputText;
            }
        
            // --- Ensure createx function is available in the scope ---
            if (typeof createx !== 'function') {
               console.error("Error: createx function is not defined.");
               return inputText; // Cannot proceed
            }
            // ---
        
            // Call the createx function with the extracted data
            const xDivElement = createx(
                xData.avatarUrl,
                xData.username,
                xData.userId,
                xData.timestamp,
                xData.comments,
                xData.retweets,
                xData.likes,
                xData.views,
                xData.content,
                xData.imageUrl, // Pass imageUrl or undefined
                xData.isVerified
            );
        
            // Get the HTML string representation of the created div
            const xHtml = xDivElement.outerHTML;
        
            // Replace the original block in the input string with the generated HTML
            const resultString = inputText.replace(fullBlock, xHtml);
        
            return resultString;
        }
        

        hook.beforeEach(function (markdown) {
            markdown = processxString(markdown);
            return markdown;
        });
    }

    $docsify = $docsify || {};
    $docsify.plugins = [].concat(myPlugin, $docsify.plugins || []);
})();