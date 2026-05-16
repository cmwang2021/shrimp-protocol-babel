/**
 * 🦐 PAIN-002: Tool Protocol Babel v0.1
 * 解決 OpenAI 與 Gemini 格式轉換的語意斷層。
 */
function translate(payload) {
    // OpenAI Format
    if (payload.choices && payload.choices[0].message.tool_calls) {
        return { 
            provider: 'openai', 
            calls: payload.choices[0].message.tool_calls.map(tc => ({
                id: tc.id,
                name: tc.function.name,
                args: JSON.parse(tc.function.arguments)
            }))
        };
    }
    // Gemini Format
    if (payload.candidates && payload.candidates[0].content.parts) {
        return { 
            provider: 'gemini', 
            calls: payload.candidates[0].content.parts
                .filter(p => p.functionCall)
                .map(p => ({
                    id: null,
                    name: p.functionCall.name,
                    args: p.functionCall.args
                }))
        };
    }
    return { provider: 'unknown', calls: [] };
}
module.exports = translate;
