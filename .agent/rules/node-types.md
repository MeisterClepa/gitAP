# Node Types

Nodes are the building blocks of the agent scenario. Each node is a YAML file in `nodes/<type>/` directory.
All YAML files use **kebab-case** field naming (e.g. `llm-model-key`, `next-step`).

## Common Node Fields

| YAML Field | Type | Required | Description | Example |
|------------|------|----------|-------------|---------|
| `id` | string | yes | Unique node identifier | agent-1 |
| `name` | string | yes | Human-readable node name | Main Agent |
| `next-step` | string | no | ID of the next node to execute after this one |  |
| `parameters` | params | yes | Node-type-specific parameters (varies by node type) |  |
| `position` | position | no | Node position on the visual canvas |  |

## Agent Node (`nodes/agents/`)

An LLM-powered agent node that can use tools and hand off to other agents.

| YAML Field | Type | Required | Description | Example |
|------------|------|----------|-------------|---------|
| `chat-history-limit` | number | yes | Maximum number of chat history messages to include | 50 |
| `enable-context` | boolean | yes | Whether to include conversation context in LLM calls |  |
| `handoff-agents` | handoffagents | no | Configuration for agent handoff (transfer to other agents) |  |
| `llm-model-key` | string | no | Key of the LLM model to use | openai-gpt4 |
| `llm-model-settings` | agentllmsettings | no | LLM generation settings (temperature, maxTokens, etc.) |  |
| `sequential-tool-calls-limit` | number | yes | Maximum number of sequential tool calls before forcing a response | 5 |
| `stay-in-agent` | boolean | yes | Whether to keep conversation within this agent after tool execution |  |
| `system-promts` | agentsystempromts | no | System prompts configuration for the agent |  |
| `telephony-config` | telephonyconfig | no | Telephony-specific configuration (barge-in, fillers) |  |
| `tools` | list | no | List of tool node IDs available to this agent |  |

### Handoff Agents

| YAML Field | Type | Required | Description | Example |
|------------|------|----------|-------------|---------|
| `allowed-agent-node-ids` | list | yes | List of specific agent node IDs that handoff is allowed to |  |
| `allowed-any` | boolean | yes | Whether handoff to any agent is allowed |  |

### Telephony Config

| YAML Field | Type | Required | Description | Example |
|------------|------|----------|-------------|---------|
| `barge-in-config` | bargeinconfig | no | Barge-in configuration (allow user to interrupt agent speech) |  |
| `enabled` | boolean | yes | Whether telephony features are enabled for this agent |  |
| `fillers-phrase-config` | fillersphraseconfig | no | Filler phrases configuration (spoken while waiting for LLM) |  |
| `llm-response-timeout-ms` | number | no | Timeout in ms to wait for LLM response before using filler |  |

## Function Node (`nodes/functions/`)

Executes a user-defined or system function.

| YAML Field | Type | Required | Description | Example |
|------------|------|----------|-------------|---------|
| `collection` | string | no | Name of the collection this function belongs to |  |
| `context-config` | functioncontextconfig | no | Configuration for storing function result in conversation context |  |
| `function` | string | yes | Function name |  |
| `is-tool` | boolean | yes | Whether this function is exposed as a tool for LLM agent |  |
| `parameters` | map | no | Map of parameter name to parameter value with type info |  |
| `type` | string | yes | Function source type: USER, SYSTEM oк MCP | USER |

### Function Context Config

| YAML Field | Type | Required | Description | Example |
|------------|------|----------|-------------|---------|
| `enabled` | boolean | yes | Whether context storage is enabled for this function |  |
| `handoff-agents` | handoffagents | no | Handoff agents configuration after function execution |  |
| `key` | string | no | Context key under which the result is stored |  |
| `put-if-error` | boolean | yes | Whether to store result in context even if function errors |  |
| `value-prefix` | string | yes | Prefix added to the stored value |  |

## Code Node (`nodes/code/`)

Executes custom JavaScript code. The code is stored in a separate `.js` file alongside the `.yml` file.

## Condition Node (`nodes/conditions/`)

Evaluates a JavaScript condition and branches the flow.

| YAML Field | Type | Required | Description | Example |
|------------|------|----------|-------------|---------|
| `condition` | string | no | JavaScript condition expression that returns boolean |  |
| `false-step` | string | no | Node ID to go to when condition is false |  |

## Trigger: Schedule (`nodes/triggers/schedule/`)

| YAML Field | Type | Required | Description | Example |
|------------|------|----------|-------------|---------|
| `cron` | string | no | Cron expression for scheduled execution | 0 0 * * * |
| `end-after-date` | string | no | Date after which the trigger stops firing | 2025-12-31T23:59:59Z |
| `interval-seconds` | number | no | Interval in seconds between trigger executions |  |
| `max-repeat-count` | number | no | Maximum number of times the trigger will fire |  |
| `start-date-time` | string | no | Date and time when the trigger starts | 2025-01-01T00:00:00Z |

## Trigger: Webhook (`nodes/triggers/webhook/`)

| YAML Field | Type | Required | Description | Example |
|------------|------|----------|-------------|---------|
| `url` | string | no | Webhook URL path for this trigger |  |

## Trigger: Message (`nodes/triggers/message/`)

Triggers when a user sends a message. No additional parameters.

## Trigger: IMAP (`nodes/triggers/imap/`)

| YAML Field | Type | Required | Description | Example |
|------------|------|----------|-------------|---------|
| `filter-rule` | map | no | Email filter rules for IMAP trigger |  |
