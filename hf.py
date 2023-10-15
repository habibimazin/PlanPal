import requests
import json
import sseclient

api_key = "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"
endpoint = "https://api.openai.com/v1/chat/completions"

#parameters that will go with request body
input ={
    "model": "text-davinci-003",
    "prompt": "get me a stat about lebron james the nba player",
    #  age: ageInput,
    #     occupation: occupationInput,
    #     location: locationInput,
    #     travels: travelsInput,
    #     gender: genderInput,

    "stream": True
}

headers = {
    "Acecept": 'text/event-stream',
    "Authorization": 'Bearer' + api_key
}

response = requests.post(endpoint, stream = True, headers=headers, json=input)
sseClient = sseclient.SSEClient(response)

for event in sseClient.events():
    if event.data != '[DONE]':
        print(json.loads(event.data)['choices'][0]['text'], end='', flush=True)