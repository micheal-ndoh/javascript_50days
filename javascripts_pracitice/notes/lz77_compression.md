# LZ77 Compression

## What is LZ77?

LZ77 is a lossless data compression algorithm that works by finding repeated sequences of data and replacing them with references to previous occurrences. It's the basis for many modern compression algorithms like DEFLATE (used in ZIP and GZIP).

## How it Works

LZ77 uses a sliding window approach:

1. The algorithm maintains a "window" of recently seen data
2. For each new byte, it looks for the longest match in the window
3. It then outputs either:
   - A literal: 0x00 + the byte (for new data)
   - A match: 0x01 + offset + length (for repeated data)

## Implementation Example

Here's a simplified implementation in JavaScript:

```javascript
function compressLZ77(data, windowSize = 20) {
    let result = [];
    let i = 0;
    
    while (i < data.length) {
        let bestMatch = { offset: 0, length: 0 };
        
        // Look for matches in the sliding window
        for (let offset = 1; offset <= Math.min(windowSize, i); offset++) {
            let length = 0;
            while (i + length < data.length && 
                   data[i + length] === data[i - offset + length]) {
                length++;
            }
            
            if (length > bestMatch.length) {
                bestMatch = { offset, length };
            }
        }
        
        if (bestMatch.length > 2) {
            // Output match
            result.push(0x01, bestMatch.offset, bestMatch.length);
            i += bestMatch.length;
        } else {
            // Output literal
            result.push(0x00, data[i]);
            i++;
        }
    }
    
    return Buffer.from(result);
}

function decompressLZ77(data) {
    let result = [];
    let i = 0;
    
    while (i < data.length) {
        if (data[i] === 0x00) {
            // Literal
            result.push(data[i + 1]);
            i += 2;
        } else if (data[i] === 0x01) {
            // Match
            const offset = data[i + 1];
            const length = data[i + 2];
            
            for (let j = 0; j < length; j++) {
                result.push(result[result.length - offset]);
            }
            
            i += 3;
        }
    }
    
    return Buffer.from(result);
}
```

## Use in the Project

In this project, LZ77 will be used as the second compression algorithm. It's particularly effective for:

- Text files with repeated phrases
- Files with patterns that repeat at different positions
- Generally more effective than RLE for complex data

## Resources for Learning More

1. [Wikipedia: LZ77 and LZ78](https://en.wikipedia.org/wiki/LZ77_and_LZ78)
2. [GeeksforGeeks: LZ77 Data Compression](https://www.geeksforgeeks.org/lz77-data-compression/)
3. [Data Compression: LZ77](https://www.cs.duke.edu/csed/curious/compression/lz77.html)
