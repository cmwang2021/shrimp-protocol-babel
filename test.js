const translate = require('./tool_translator');
const openaiPayload = { 
    choices: [{ 
        message: { 
            tool_calls: [{ 
                id: 'call_123', 
                function: { name: 'get_weather', arguments: '{"location":"Taipei"}' } 
            }] 
        } 
    }] 
};
const res = translate(openaiPayload);
console.log('Testing OpenAI Translation...');
if (res.provider === 'openai' && res.calls[0].name === 'get_weather') {
    console.log('✅ OpenAI Test PASS');
} else {
    process.exit(1);
}
