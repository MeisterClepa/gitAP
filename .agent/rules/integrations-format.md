# Integrations Format

Integrations are stored in `integrations/<type>/` directories. Each integration is a separate YAML file named `<key>.yml`.

## MCP Integration (`integrations/mcp/`)

| YAML Field | Type | Required | Description | Example |
|------------|------|----------|-------------|---------|
| `collection-name` | string | yes | Name of the function collection exposed by this MCP server |  |
| `credential-key` | string | no | Reference to credential used for authentication |  |
| `key` | string | yes | Unique integration key | my-mcp-server |
| `name` | string | yes | Human-readable integration name |  |
| `url` | string | yes | URL of the MCP server | https://mcp.example.com |

## SMTP Integration (`integrations/smtp/`)

| YAML Field | Type | Required | Description | Example |
|------------|------|----------|-------------|---------|
| `credential-key` | string | no | Reference to credential used for authentication |  |
| `host` | string | yes | SMTP server hostname | smtp.gmail.com |
| `is-direct-access` | boolean | yes | Whether direct access mode is used |  |
| `is-ssl-enabled` | boolean | yes | Whether SSL is enabled |  |
| `is-tls-enabled` | boolean | yes | Whether TLS is enabled |  |
| `key` | string | yes | Unique integration key |  |
| `name` | string | yes | Human-readable integration name |  |
| `port` | number | yes | SMTP server port | 587 |
| `sender` | string | yes | Sender email address | bot@example.com |

## LLM Integration (`integrations/llm/`)

| YAML Field | Type | Required | Description | Example |
|------------|------|----------|-------------|---------|
| `credential-key` | string | no | Reference to credential used for authentication |  |
| `key` | string | yes | Unique integration key | openai-gpt4 |
| `model` | string | yes | Model identifier | gpt-4 |
| `name` | string | yes | Human-readable integration name |  |
| `provider` | string | yes | LLM provider name | OpenAI |

## Database (`integrations/databases/`)

| YAML Field | Type | Required | Description | Example |
|------------|------|----------|-------------|---------|
| `key` | string | yes | Unique database key |  |
| `name` | string | yes | Human-readable database name |  |
| `scope` | string | yes | Database scope: PROJECT or ACCOUNT | PROJECT |

## Inbound Channel (`integrations/inbound-channels/`)

| YAML Field | Type | Required | Description | Example |
|------------|------|----------|-------------|---------|
| `credential-key` | string | no | Reference to credential used for authentication |  |
| `is-auto-deploy` | boolean | yes | Whether auto-deploy is enabled for this channel |  |
| `key` | string | yes | Unique channel key |  |
| `name` | string | yes | Human-readable channel name |  |
| `operator-channel-key` | string | no | Key of the linked operator channel |  |
| `settings` | map | no | Channel-specific settings |  |
| `type` | string | yes | Channel type (e.g. telegram, whatsapp) | telegram |

## RAG (`integrations/rag/`)

| YAML Field | Type | Required | Description | Example |
|------------|------|----------|-------------|---------|
| `credential-key` | string | no | Reference to credential used for authentication |  |
| `key` | string | yes | Unique integration key |  |
| `name` | string | yes | Human-readable integration name |  |

## SIP (`integrations/sip/`)

| YAML Field | Type | Required | Description | Example |
|------------|------|----------|-------------|---------|
| `accept-incoming` | boolean | no | Whether to accept incoming calls |  |
| `credential-key` | string | no | Reference to credential used for authentication |  |
| `host` | string | yes | SIP server hostname |  |
| `key` | string | yes | Unique integration key |  |
| `lines-available` | number | yes | Number of available SIP lines |  |
| `name` | string | yes | Human-readable integration name |  |
| `port` | number | yes | SIP server port | 5060 |

## ASR (`integrations/asr/`)

| YAML Field | Type | Required | Description | Example |
|------------|------|----------|-------------|---------|
| `credential-key` | string | no | Reference to credential used for authentication |  |
| `key` | string | yes | Unique integration key |  |
| `name` | string | yes | Human-readable integration name |  |
| `provider-type` | string | yes | ASR provider type | google |
| `settings` | map | no | Provider-specific settings |  |

## TTS (`integrations/tts/`)

| YAML Field | Type | Required | Description | Example |
|------------|------|----------|-------------|---------|
| `credential-key` | string | no | Reference to credential used for authentication |  |
| `key` | string | yes | Unique integration key |  |
| `name` | string | yes | Human-readable integration name |  |
| `provider-type` | string | yes | TTS provider type | google |
| `settings` | map | no | Provider-specific settings |  |

## IMAP (`integrations/imap/`)

| YAML Field | Type | Required | Description | Example |
|------------|------|----------|-------------|---------|
| `credential-key` | string | no | Reference to credential used for authentication |  |
| `key` | string | yes | Unique integration key |  |
| `name` | string | yes | Human-readable integration name |  |

## Jayguard (`integrations/jayguard/`)

| YAML Field | Type | Required | Description | Example |
|------------|------|----------|-------------|---------|
| `credential-key` | string | no | Reference to credential used for authentication |  |
| `key` | string | yes | Unique integration key |  |
| `name` | string | yes | Human-readable integration name |  |
