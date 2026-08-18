/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/locateChangeOrder.defs.ts" enhancement="_blank"/>

export const operationLocateChangeOrder = {
  "operationId": "locateChangeOrder",
  "title": "Localizar a ordem de mudança submetida",
  "actors": [
    "client"
  ],
  "entity": "ChangeOrder",
  "kind": "query",
  "reads": [
    "ChangeOrder"
  ],
  "writes": [],
  "rulesApplied": [],
  "story": {
    "actor": "client",
    "goal": "Localizar a ordem de mudança submetida",
    "steps": [
      "Localizar a ordem de mudança submetida",
      "Uma ordem pendente de tratamento está selecionada."
    ],
    "outcome": "Uma ordem pendente de tratamento está selecionada."
  },
  "accessPattern": {
    "kind": "list",
    "description": "Localizar a ordem de mudança submetida",
    "entity": "ChangeOrder",
    "keyField": "ChangeOrder.changeOrderId",
    "pagination": "none",
    "selection": "single",
    "output": [
      "ChangeOrder.changeOrderId",
      "ChangeOrder.clientRef",
      "ChangeOrder.projectRef",
      "ChangeOrder.description",
      "ChangeOrder.scopeImpact",
      "ChangeOrder.scheduleImpact",
      "ChangeOrder.changeAmount",
      "ChangeOrder.submittedAt",
      "ChangeOrder.forwardedForClientApprovalAt",
      "ChangeOrder.status"
    ]
  },
  "outputShape": {
    "kind": "list",
    "fields": [
      {
        "name": "changeOrderId",
        "type": "string",
        "required": true,
        "fieldRef": "ChangeOrder.changeOrderId"
      },
      {
        "name": "clientRef",
        "type": "string",
        "required": true,
        "fieldRef": "ChangeOrder.clientRef"
      },
      {
        "name": "projectRef",
        "type": "string",
        "required": true,
        "fieldRef": "ChangeOrder.projectRef"
      },
      {
        "name": "description",
        "type": "string",
        "required": true,
        "fieldRef": "ChangeOrder.description"
      },
      {
        "name": "scopeImpact",
        "type": "string",
        "required": true,
        "fieldRef": "ChangeOrder.scopeImpact"
      },
      {
        "name": "scheduleImpact",
        "type": "string",
        "required": true,
        "fieldRef": "ChangeOrder.scheduleImpact"
      },
      {
        "name": "changeAmount",
        "type": "number",
        "required": true,
        "fieldRef": "ChangeOrder.changeAmount"
      },
      {
        "name": "submittedAt",
        "type": "string",
        "required": true,
        "fieldRef": "ChangeOrder.submittedAt"
      },
      {
        "name": "forwardedForClientApprovalAt",
        "type": "string",
        "required": false,
        "fieldRef": "ChangeOrder.forwardedForClientApprovalAt"
      },
      {
        "name": "status",
        "type": "string",
        "required": true,
        "fieldRef": "ChangeOrder.status"
      }
    ]
  },
  "inputs": [],
  "pageId": "approveChangeOrder",
  "commandName": "qryLocateChangeOrder",
  "bffName": "qryLocateChangeOrder"
} as const;

export default operationLocateChangeOrder;
