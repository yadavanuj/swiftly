

import { SwiftlyDefinition } from "./SwiftlyDefinition"

export const jsonSchema = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "http://json-schema.org/draft-07/schema#",
  "title": "Bulk Head Schema",
  "type": "object",
  "properties": {
    "tenantId": {
        "description": "Tenant Name",
        "type": "string"
    },
    "operationId": {
        "description": "Operation name for which Bulkhead is being configured",
        "type": "string"
    },
    "maxConcurrentCalls": {
        "description": "Maximum concurrent calls allowed for the operation for given tenant per service instance",
        "type": "number",
        "exclusiveMinimum": 0
    },
    "maxWaitDurationInMillis": {
        "description": "Maximum wait duration to acquire permit, after this period bulkhead request will fail",
        "type": "number",
        "exclusiveMinimum": 0
    }
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
        "hint": "Millis"
    },
    "maxWaitDurationInMillis": {
        "hint": "Millis"
    }
  }
}


export const definition = new SwiftlyDefinition("bulkhead", viewProps, viewProps);

