# Integrations

Integrations are stored in `integrations/<type>/` directories. Each integration is a separate YAML file named `<key>.yml`.

All integrations (LLM, MCP, SMTP, database, inbound channel, RAG, SIP, ASR, TTS, IMAP and JayGuard) are declarations: their `key` is a declaration id, the same on every stand the project is moved to, and they carry no credential.
The credential of such an integration is NOT stored in git: after the project is imported or pulled on a stand, the user binds a credential to the integration on that stand.
Do NOT add `credential-key` to these files and do NOT create credentials in `credentials/` for them.

## MCP Integration (`integrations/mcp/`)

| YAML Field | Type | Required | Description | Example |
------------|------|----------|-------------|---------|
 `collection-name` | string | yes | Name of the function collection exposed by this MCP server |  |
 `custom-headers` | map | no | Custom HTTP headers sent with every request to the MCP server |  |
 `key` | string | yes | Declaration id of the MCP integration, the same on every stand | 1000001-my-mcp-server-k8mxp2 |
 `name` | string | yes | Human-readable integration name |  |
 `transport-type` | string | no | Transport type |  |
 `url` | string | yes | URL of the MCP server | https://mcp.example.com |

## SMTP Integration (`integrations/smtp/`)

| YAML Field | Type | Required | Description | Example |
------------|------|----------|-------------|---------|
 `host` | string | yes | SMTP server hostname | smtp.gmail.com |
 `is-direct-access` | boolean | yes | Whether direct access mode is used |  |
 `is-ssl-enabled` | boolean | yes | Whether SSL is enabled |  |
 `is-tls-enabled` | boolean | yes | Whether TLS is enabled |  |
 `key` | string | yes | Declaration id of the SMTP integration, the same on every stand. Function nodes reference it |  |
 `name` | string | yes | Human-readable integration name |  |
 `port` | number | no | SMTP server port | 587 |
 `sender` | string | yes | Sender email address | bot@example.com |

## LLM Integration (`integrations/llm/`)

| YAML Field | Type | Required | Description | Example |
------------|------|----------|-------------|---------|
 `custom-headers` | jsonnode | no | Custom headers for direct access LLM model |  |
 `custom-url` | string | no | Custom URL for direct access LLM model |  |
 `is-direct-access` | boolean | yes | Whether this is a direct access (custom) LLM model |  |
 `key` | string | yes | Declaration id of the LLM integration, the same on every stand. Agent and function nodes reference it | 1000001-open_ai_gpt52-lht |
 `model` | string | yes | Model identifier | gpt-4 |
 `name` | string | yes | Human-readable integration name |  |
 `provider` | string | yes | LLM provider name | OpenAI |

`is-direct-access: false` (default) — the platform manages LLM credentials automatically, no credential is needed.
`is-direct-access: true` — the model is called with the user's own API key: the user binds a credential to it on each stand after the import. Nothing about the credential goes into the file.
Unless the user explicitly asks for direct access, always use `is-direct-access: false`.

## Database (`integrations/databases/`)

| YAML Field | Type | Required | Description | Example |
------------|------|----------|-------------|---------|
 `document-count` | number | no | Number of documents committed next to this file |  |
 `key` | string | yes | Declaration id of the database, the same on every stand. Function nodes reference it |  |
 `name` | string | yes | Human-readable database name |  |
 `scope` | string | yes | Database scope: PROJECT or ACCOUNT | PROJECT |
 `versioned-in-git` | boolean | yes | Whether the documents of this database are versioned together with the project |  |

## Inbound Channel (`integrations/inbound-channels/`)

| YAML Field | Type | Required | Description | Example |
------------|------|----------|-------------|---------|
 `key` | string | yes | Declaration id of the inbound channel, the same on every stand |  |
 `name` | string | yes | Human-readable channel name |  |
 `operator-channel-key` | string | no | Key of the linked operator channel |  |
 `settings` | map | no | Channel-specific settings. A telephony channel references its SIP trunk, ASR and TTS by their ids in `sipTrunkKey`, `asrIntegrationKey` and `ttsIntegrationKey` |  |
 `type` | string | yes | Channel type (e.g. telegram, whatsapp) | telegram |

A telephony channel references its SIP trunk, ASR and TTS by their `key` in `settings` (`sipTrunkKey`, `asrIntegrationKey`, `ttsIntegrationKey`).
A channel that authenticates at its messenger (e.g. a Telegram bot token) is imported without the token and stays inactive until the user binds a credential on the stand.

## RAG (`integrations/rag/`)

| YAML Field | Type | Required | Description | Example |
------------|------|----------|-------------|---------|
 `is-current-account` | boolean | yes | Whether this integration uses the current account's KHub token |  |
 `key` | string | yes | Declaration id of the RAG integration, the same on every stand. Function nodes reference it |  |
 `name` | string | yes | Human-readable integration name |  |

## SIP (`integrations/sip/`)

| YAML Field | Type | Required | Description | Example |
------------|------|----------|-------------|---------|
 `accept-incoming` | boolean | no | Whether to accept incoming calls |  |
 `host` | string | yes | SIP server hostname |  |
 `key` | string | yes | Declaration id of the SIP trunk, the same on every stand. Telephony channels reference it |  |
 `lines-available` | number | yes | Number of available SIP lines |  |
 `name` | string | yes | Human-readable integration name |  |
 `port` | number | yes | SIP server port | 5060 |

## ASR (`integrations/asr/`)

| YAML Field | Type | Required | Description | Example |
------------|------|----------|-------------|---------|
 `access-type` | string | no | INTERNAL for platform credentials, CUSTOM for the user's own credential bound on every stand. Absent means CUSTOM | CUSTOM |
 `key` | string | yes | Declaration id of the ASR integration, the same on every stand. Telephony channels and function nodes reference it |  |
 `name` | string | yes | Human-readable integration name |  |
 `provider-type` | string | yes | ASR provider type | google |
 `settings` | map | no | Provider-specific settings |  |

## TTS (`integrations/tts/`)

| YAML Field | Type | Required | Description | Example |
------------|------|----------|-------------|---------|
 `access-type` | string | no | INTERNAL for platform credentials, CUSTOM for the user's own credential bound on every stand. Absent means CUSTOM | CUSTOM |
 `key` | string | yes | Declaration id of the TTS integration, the same on every stand. Telephony channels and function nodes reference it |  |
 `name` | string | yes | Human-readable integration name |  |
 `provider-type` | string | yes | TTS provider type | google |
 `settings` | map | no | Provider-specific settings |  |

## IMAP (`integrations/imap/`)

| YAML Field | Type | Required | Description | Example |
------------|------|----------|-------------|---------|
 `host` | string | yes | IMAP server hostname |  |
 `is-ssl-enabled` | boolean | yes | Whether SSL is enabled for the connection |  |
 `key` | string | yes | Declaration id of the IMAP integration, the same on every stand |  |
 `name` | string | yes | Human-readable integration name |  |
 `port` | number | yes | IMAP server port | 993 |

## Jayguard (`integrations/jayguard/`)

| YAML Field | Type | Required | Description | Example |
------------|------|----------|-------------|---------|
 `key` | string | yes | Declaration id of the JayGuard integration, the same on every stand |  |
 `name` | string | yes | Human-readable integration name |  |

## Credentials

Credentials are stored in `credentials/<group>/<key>.yml`. They contain only metadata — actual secrets are never stored in files.
Only credentials referenced by `CREDENTIAL` parameters of function nodes or by code are stored here; integrations never reference a credential file.

| YAML Field | Type | Required | Description | Example |
------------|------|----------|-------------|---------|
 `expired-at` | instant | no | Credential expiration date-time (ISO-8601), preserved across export/import | 2026-01-01T00:00:00Z |
 `group` | string | no | Credential group | LLM |
 `key` | string | yes | Key of the credential, the same on every stand: the key it had where it was first committed. CREDENTIAL parameters of function nodes and code reference it | 1000001-openai-cred-k8m |
 `name` | string | yes | Human-readable credential name | OpenAI API Key |
 `sub-group` | string | no | Credential sub-group | OPEN_AI |
 `type` | string | yes | Credential type (e.g. API_KEY, OAUTH2) | API_KEY |

## Rules

- Integration and credential `key` values must be globally unique. When creating a new integration or credential, always append a short random suffix (5-6 lowercase alphanumeric characters) to the logical name. For example, use `food-db-nsubyd` instead of `food-db`, or `openai-llm-k8mxp2` instead of `openai-llm`. This prevents accidental collisions when keys are replaced in code during project synchronization.
- An integration `key` is set once, when the integration is created, and never changed afterwards: nodes, code and every stand the project is moved to identify the integration by it. To replace an integration, create a new one with a new `key`.
- The `key` is also used as the YAML filename (e.g. `integrations/llm/openai-llm-k8mxp2.yml`), so it must be a valid filename.
- When referencing an integration in nodes or in code (inside `code.js`/`code.py` of code blocks or user functions), use the exact same `key` value. On every stand it is replaced with the key of the integration there, so unique ids prevent unintended replacements.
