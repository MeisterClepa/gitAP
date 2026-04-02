# Agent Platform Project

This is an Agent Platform project exported as a file structure.
All YAML files use **kebab-case** field naming.

## Project Info

- Schema version: `1.0`
- Project key: `test-1000175-MtH`
- Language: `ru`
- Engine version: `1`

## Documentation

Detailed format documentation is in `.agent/rules/`:

- [Project Structure](.agent/rules/project-structure.md) — directory layout and file locations
- [Node Types](.agent/rules/node-types.md) — all node types and their YAML fields
- [Functions Format](.agent/rules/functions-format.md) — user function schema.yml and code.js
- [Integrations Format](.agent/rules/integrations-format.md) — integration YAML formats

### System Functions

JSON Schemas for available system functions are in `.agent/rules/system-functions/`:

- `Context/getAccountId` — [schema](.agent/rules/system-functions/Context/getAccountId.json)
- `Context/getProjectShortName` — [schema](.agent/rules/system-functions/Context/getProjectShortName.json)
- `Context/getBotId` — [schema](.agent/rules/system-functions/Context/getBotId.json)
- `Context/getChannelType` — [schema](.agent/rules/system-functions/Context/getChannelType.json)
- `Context/isAsyncChannel` — [schema](.agent/rules/system-functions/Context/isAsyncChannel.json)
- `Context/isTestChannel` — [schema](.agent/rules/system-functions/Context/isTestChannel.json)
- `Context/getRequestId` — [schema](.agent/rules/system-functions/Context/getRequestId.json)
- `Context/getMessageContent` — [schema](.agent/rules/system-functions/Context/getMessageContent.json)
- `Context/getChatId` — [schema](.agent/rules/system-functions/Context/getChatId.json)
- `Context/getSessionId` — [schema](.agent/rules/system-functions/Context/getSessionId.json)
- `Context/getClientInfo` — [schema](.agent/rules/system-functions/Context/getClientInfo.json)
- `Context/getRawRequest` — [schema](.agent/rules/system-functions/Context/getRawRequest.json)
- `Context/getLastFunctionResult` — [schema](.agent/rules/system-functions/Context/getLastFunctionResult.json)
- `Context/getChatHistory` — [schema](.agent/rules/system-functions/Context/getChatHistory.json)
- `Context/getEmailContent` — [schema](.agent/rules/system-functions/Context/getEmailContent.json)
- `Credentials/get` — [schema](.agent/rules/system-functions/Credentials/get.json)
- `Db/get` — [schema](.agent/rules/system-functions/Db/get.json)
- `Db/findByFilters` — [schema](.agent/rules/system-functions/Db/findByFilters.json)
- `Db/countByFilters` — [schema](.agent/rules/system-functions/Db/countByFilters.json)
- `Db/put` — [schema](.agent/rules/system-functions/Db/put.json)
- `Db/delete` — [schema](.agent/rules/system-functions/Db/delete.json)
- `Db/deleteByFilters` — [schema](.agent/rules/system-functions/Db/deleteByFilters.json)
- `Db/updateByFilters` — [schema](.agent/rules/system-functions/Db/updateByFilters.json)
- `Email/send` — [schema](.agent/rules/system-functions/Email/send.json)
- `Http/get` — [schema](.agent/rules/system-functions/Http/get.json)
- `Http/post` — [schema](.agent/rules/system-functions/Http/post.json)
- `Http/put` — [schema](.agent/rules/system-functions/Http/put.json)
- `Http/delete` — [schema](.agent/rules/system-functions/Http/delete.json)
- `Http/patch` — [schema](.agent/rules/system-functions/Http/patch.json)
- `Http/send` — [schema](.agent/rules/system-functions/Http/send.json)
- `Llm/sendRequest` — [schema](.agent/rules/system-functions/Llm/sendRequest.json)
- `Llm/sendText` — [schema](.agent/rules/system-functions/Llm/sendText.json)
- `Llm/getChatHistory` — [schema](.agent/rules/system-functions/Llm/getChatHistory.json)
- `Llm/summarizeText` — [schema](.agent/rules/system-functions/Llm/summarizeText.json)
- `Rag/retrieveChunks` — [schema](.agent/rules/system-functions/Rag/retrieveChunks.json)
- `Rag/generateAnswer` — [schema](.agent/rules/system-functions/Rag/generateAnswer.json)
- `Reactions/sendText` — [schema](.agent/rules/system-functions/Reactions/sendText.json)
- `Reactions/sendHtml` — [schema](.agent/rules/system-functions/Reactions/sendHtml.json)
- `Reactions/sendAudio` — [schema](.agent/rules/system-functions/Reactions/sendAudio.json)
- `Reactions/sendImage` — [schema](.agent/rules/system-functions/Reactions/sendImage.json)
- `Reactions/sendVideo` — [schema](.agent/rules/system-functions/Reactions/sendVideo.json)
- `Reactions/sendFile` — [schema](.agent/rules/system-functions/Reactions/sendFile.json)
- `Reactions/sendLocation` — [schema](.agent/rules/system-functions/Reactions/sendLocation.json)
- `Reactions/sendRawRequest` — [schema](.agent/rules/system-functions/Reactions/sendRawRequest.json)
- `SessionDb/get` — [schema](.agent/rules/system-functions/SessionDb/get.json)
- `SessionDb/findByFilters` — [schema](.agent/rules/system-functions/SessionDb/findByFilters.json)
- `SessionDb/countByFilters` — [schema](.agent/rules/system-functions/SessionDb/countByFilters.json)
- `SessionDb/put` — [schema](.agent/rules/system-functions/SessionDb/put.json)
- `SessionDb/delete` — [schema](.agent/rules/system-functions/SessionDb/delete.json)
- `SessionDb/deleteByFilters` — [schema](.agent/rules/system-functions/SessionDb/deleteByFilters.json)
- `SessionDb/updateByFilters` — [schema](.agent/rules/system-functions/SessionDb/updateByFilters.json)
- `Telegram/sendText` — [schema](.agent/rules/system-functions/Telegram/sendText.json)
- `Telegram/sendImage` — [schema](.agent/rules/system-functions/Telegram/sendImage.json)
- `Telegram/sendAudio` — [schema](.agent/rules/system-functions/Telegram/sendAudio.json)
- `Telegram/sendVoice` — [schema](.agent/rules/system-functions/Telegram/sendVoice.json)
- `Telegram/sendButtons` — [schema](.agent/rules/system-functions/Telegram/sendButtons.json)
- `AgentContext/addNote` — [schema](.agent/rules/system-functions/AgentContext/addNote.json)
- `AgentContext/getNotes` — [schema](.agent/rules/system-functions/AgentContext/getNotes.json)
- `AgentContext/deleteNotes` — [schema](.agent/rules/system-functions/AgentContext/deleteNotes.json)
- `AgentContext/putValue` — [schema](.agent/rules/system-functions/AgentContext/putValue.json)
- `AgentContext/getValue` — [schema](.agent/rules/system-functions/AgentContext/getValue.json)
- `AgentContext/deleteValue` — [schema](.agent/rules/system-functions/AgentContext/deleteValue.json)
- `AgentContext/clearContext` — [schema](.agent/rules/system-functions/AgentContext/clearContext.json)
- `Asr/recognize` — [schema](.agent/rules/system-functions/Asr/recognize.json)
- `ProjectRouter/callProject` — [schema](.agent/rules/system-functions/ProjectRouter/callProject.json)
- `ProjectRouter/switchTo` — [schema](.agent/rules/system-functions/ProjectRouter/switchTo.json)
- `ProjectRouter/backToOriginalProject` — [schema](.agent/rules/system-functions/ProjectRouter/backToOriginalProject.json)
- `ProjectRouter/getCustomData` — [schema](.agent/rules/system-functions/ProjectRouter/getCustomData.json)
- `Tts/synthesize` — [schema](.agent/rules/system-functions/Tts/synthesize.json)
- `Log/info` — [schema](.agent/rules/system-functions/Log/info.json)
- `Log/debug` — [schema](.agent/rules/system-functions/Log/debug.json)
- `Log/trace` — [schema](.agent/rules/system-functions/Log/trace.json)
- `Log/warn` — [schema](.agent/rules/system-functions/Log/warn.json)
- `Log/error` — [schema](.agent/rules/system-functions/Log/error.json)

### MCP Functions

JSON Schemas for MCP tool functions are in `.agent/rules/mcp-functions/`:

- `test/add` — [schema](.agent/rules/mcp-functions/test/add.json)
- `test/subtract` — [schema](.agent/rules/mcp-functions/test/subtract.json)
- `test/multiply` — [schema](.agent/rules/mcp-functions/test/multiply.json)
- `test/division` — [schema](.agent/rules/mcp-functions/test/division.json)
- `test/sum` — [schema](.agent/rules/mcp-functions/test/sum.json)
- `test/modulo` — [schema](.agent/rules/mcp-functions/test/modulo.json)
- `test/mean` — [schema](.agent/rules/mcp-functions/test/mean.json)
- `test/median` — [schema](.agent/rules/mcp-functions/test/median.json)
- `test/mode` — [schema](.agent/rules/mcp-functions/test/mode.json)
- `test/min` — [schema](.agent/rules/mcp-functions/test/min.json)
- `test/max` — [schema](.agent/rules/mcp-functions/test/max.json)
- `test/floor` — [schema](.agent/rules/mcp-functions/test/floor.json)
- `test/ceiling` — [schema](.agent/rules/mcp-functions/test/ceiling.json)
- `test/round` — [schema](.agent/rules/mcp-functions/test/round.json)
- `test/sin` — [schema](.agent/rules/mcp-functions/test/sin.json)
- `test/arcsin` — [schema](.agent/rules/mcp-functions/test/arcsin.json)
- `test/cos` — [schema](.agent/rules/mcp-functions/test/cos.json)
- `test/arccos` — [schema](.agent/rules/mcp-functions/test/arccos.json)
- `test/tan` — [schema](.agent/rules/mcp-functions/test/tan.json)
- `test/arctan` — [schema](.agent/rules/mcp-functions/test/arctan.json)
- `test/radiansToDegrees` — [schema](.agent/rules/mcp-functions/test/radiansToDegrees.json)
- `test/degreesToRadians` — [schema](.agent/rules/mcp-functions/test/degreesToRadians.json)
- `bright/add` — [schema](.agent/rules/mcp-functions/bright/add.json)
- `bright/subtract` — [schema](.agent/rules/mcp-functions/bright/subtract.json)
- `bright/multiply` — [schema](.agent/rules/mcp-functions/bright/multiply.json)
- `bright/division` — [schema](.agent/rules/mcp-functions/bright/division.json)
- `bright/sum` — [schema](.agent/rules/mcp-functions/bright/sum.json)
- `bright/modulo` — [schema](.agent/rules/mcp-functions/bright/modulo.json)
- `bright/mean` — [schema](.agent/rules/mcp-functions/bright/mean.json)
- `bright/median` — [schema](.agent/rules/mcp-functions/bright/median.json)
- `bright/mode` — [schema](.agent/rules/mcp-functions/bright/mode.json)
- `bright/min` — [schema](.agent/rules/mcp-functions/bright/min.json)
- `bright/max` — [schema](.agent/rules/mcp-functions/bright/max.json)
- `bright/floor` — [schema](.agent/rules/mcp-functions/bright/floor.json)
- `bright/ceiling` — [schema](.agent/rules/mcp-functions/bright/ceiling.json)
- `bright/round` — [schema](.agent/rules/mcp-functions/bright/round.json)
- `bright/sin` — [schema](.agent/rules/mcp-functions/bright/sin.json)
- `bright/arcsin` — [schema](.agent/rules/mcp-functions/bright/arcsin.json)
- `bright/cos` — [schema](.agent/rules/mcp-functions/bright/cos.json)
- `bright/arccos` — [schema](.agent/rules/mcp-functions/bright/arccos.json)
- `bright/tan` — [schema](.agent/rules/mcp-functions/bright/tan.json)
- `bright/arctan` — [schema](.agent/rules/mcp-functions/bright/arctan.json)
- `bright/radiansToDegrees` — [schema](.agent/rules/mcp-functions/bright/radiansToDegrees.json)
- `bright/degreesToRadians` — [schema](.agent/rules/mcp-functions/bright/degreesToRadians.json)

## Rules

- Do NOT modify `manifest.yml` unless you know what you are doing.
- Node IDs must be unique across the entire project.
- `next-step` fields reference other node IDs to define the execution flow.
- Agent node `tools` list references node IDs of function/code nodes that are available as tools.
- Function code is always in JavaScript and stored in separate `.js` files.
- Credentials contain only metadata (type, key, name) — actual secrets are never stored in files.
