import { Configuration, OpenAIApi } from 'openai'

//Inserta tu APIKEY desde https://plaform.openai.com//
const apiKey = "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"

const configuration = new configuration ({ apiKey })
const openai = new OpenAIApi (configuration)

const model = 'gpt-4-0314' //gpt v4
const messages = [
    {

        role : 'user',
        content :  'Iterar un array en JS'

    }
]


const completion = await openai.createChatCompletion ({
    model, 
    messages
})

console.log(completion.data.choices[0].message)

