

import { SwiftlyDefinition } from "./SwiftlyDefinition"

export const jsonSchema = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "http://json-schema.org/draft-07/schema#",
  "title": "Tenant Schema",
  "type": "object",
  "properties": {
    "tenantId": {
        "description": "Tenant Unique Id",
        "type": "string"
    },
    "name": {
        "description": "Tenant Name",
        "type": "string"
    },
    "description": {
        "description": "Tenant Description",
        "type": "number",
        "exclusiveMinimum": 0
    },
    "required": ["tenantId", "name"]
  }
}

export const viewProps = {
  "properties": {
    "tenantId": {
        "hint": "Text"
    },
    "operationId": {
        "hint": "Text"
    },
    "maxConcurrentCalls": {
        "hint": "Nanos"
    },
    "maxWaitDurationInMillis": {
        "hint": "Milliseconds"
    }
  }
}


export const definition = new SwiftlyDefinition("bulkhead", viewProps, viewProps);

