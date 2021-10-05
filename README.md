# Client NFT Project

## Instructions:

### Metadata and image assets:

- You need to create metadata for each and every token and upload it on your own server
- This will be the basic JSON structure of the metadata

{
'name': '',
'image': 'https://example.com/5.jpg',
'description': ''
}

- You should be able to retrieve metadata for a token using the a link, for example, to get the metadata for tokenId = 3 there should be a 3.json file on the server retrievable through https://yourserver.com/metadata/3.json

- https://yourserver.com/metadata/ will be the baseURI which you will pass during contract deployment
