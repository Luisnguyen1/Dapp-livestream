const accountId = '4b2a18b950a78bf5596388af0940bdd7';
const cloudflareEmail = 'luisaccforwork@gmail.com'; // Replace with your Cloudflare email
const cloudflareApiKey = '57e332c814b8d347f2ea1f7dd57f830433ec2'; // Replace with your Cloudflare API key


const apiUrl = `https://api.cloudflare.com/client/v4/accounts/${accountId}/stream/live_inputs`;

async function createLiveInput() {
    const fetch = (await import('node-fetch')).default;

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Auth-Email': cloudflareEmail,
            'X-Auth-Key': cloudflareApiKey
        },
        body: JSON.stringify({
            deleteRecordingAfterDays: 45,
            meta: {
                name: "test stream 1"
            },
            recording: {}
        })
    });

    const data = await response.json();
    console.log('Live Input Created:', data);
}

createLiveInput();
