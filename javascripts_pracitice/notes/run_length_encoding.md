# Run-Length Encoding (RLE)

## What is RLE?

Run-Length Encoding is a simple form of data compression where consecutive identical elements are stored as a single data value and its count, rather than as the original run.

## How it Works

For example, the string "AAAABBBCCDAA" would be encoded as "4A3B2C1D2A".

In binary form, RLE typically works by:

1. Reading the input data byte by byte
2. When a sequence of identical bytes is found, it's replaced with:
   - The byte value
   - The count of how many times it appears

## Implementation Example

Here's a simple implementation in JavaScript:

```javascript
function compressRLE(data) {
    let result = [];
    let count = 1;
    
    for (let i = 0; i < data.length; i++) {
        if (i + 1 < data.length && data[i] === data[i + 1]) {
            count++;
        } else {
            result.push(count, data[i]);
            count = 1;
        }
    }
    
    return Buffer.from(result);
}

function decompressRLE(data) {
    let result = [];
    
    for (let i = 0; i < data.length; i += 2) {
        const count = data[i];
        const value = data[i + 1];
        result.push(...Array(count).fill(value));
    }
    
    return Buffer.from(result);
}
```

## Use in the Project

In this project, RLE will be used as one of two compression algorithms. It's particularly effective for:

- Files with many repeated bytes
- Simple text files with repeated characters
- Binary files with large areas of the same value

## Resources for Learning More

1. [Wikipedia: Run-Length Encoding](https://en.wikipedia.org/wiki/Run-length_encoding)
2. [GeeksforGeeks: Run Length Encoding](https://www.geeksforgeeks.org/run-length-encoding/)
3. [TutorialsPoint: Data Compression - Run Length Encoding](https://www.tutorialspoint.com/data_compression/run_length_encoding.htm)
