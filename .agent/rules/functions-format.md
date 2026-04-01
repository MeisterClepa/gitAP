# User Functions Format

User functions are stored in `functions/<collection-name>/<function-name>/` directories.
Each function directory contains:
- `schema.yml` — function metadata and parameter definitions
- `code.js` — function implementation in JavaScript (optional)

## schema.yml Fields

| YAML Field | Type | Required | Description | Example |
|------------|------|----------|-------------|---------|
| `description` | string | yes | Function description for LLM tool calling |  |
| `id` | string | yes | Unique function identifier |  |
| `name` | string | yes | Function name | sendEmail |
| `parameters` | list | no | List of function input parameters |  |
| `response-description` | string | no | Description of what the function returns |  |

## Parameter Definition

| YAML Field | Type | Required | Description | Example |
|------------|------|----------|-------------|---------|
| `description` | string | yes | Parameter description for LLM |  |
| `items` | parameterdef | no | Item definition for ARRAY type parameters |  |
| `name` | string | yes | Parameter name | email |
| `properties` | list | no | Nested properties for OBJECT type parameters |  |
| `required` | boolean | yes | Whether the parameter is required |  |
| `type` | string | yes | Parameter type: STRING, NUMBER, INTEGER, BOOLEAN, OBJECT, ARRAY | STRING |

### Parameter Types

| Type | Description |
|------|-------------|
| `STRING` | Text value |
| `NUMBER` | Floating-point number |
| `INTEGER` | Integer number |
| `BOOLEAN` | True/false |
| `OBJECT` | Nested object (use `properties` to define fields) |
| `ARRAY` | Array (use `items` to define element type) |
