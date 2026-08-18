/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/inspectApprovedChangeOrders.defs.ts" enhancement="_blank"/>

export const operationInspectApprovedChangeOrders = {
  "operationId": "inspectApprovedChangeOrders",
  "title": "Consultar as alterações aprovadas",
  "actors": [
    "client"
  ],
  "entity": "ChangeOrder",
  "kind": "query",
  "reads": [
    "ChangeOrder"
  ],
  "writes": [],
  "rulesApplied": [
    "clientVisibleApprovedChangeOrder"
  ],
  "story": {
    "actor": "client",
    "goal": "Consultar as alterações aprovadas",
    "steps": [
      "Consultar as alterações aprovadas",
      "Ordens aprovadas da obra, descrições e valores estão visíveis."
    ],
    "outcome": "Ordens aprovadas da obra, descrições e valores estão visíveis."
  },
  "accessPattern": {
    "kind": "getById",
    "description": "Consultar as alterações aprovadas",
    "entity": "ChangeOrder",
    "keyField": "ChangeOrder.changeOrderId",
    "pagination": "none",
    "selection": "none",
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
    "kind": "object",
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
  "inputs": [
    {
      "inputId": "changeOrderChangeOrderId",
      "fieldRef": "ChangeOrder.changeOrderId",
      "required": true,
      "source": "selectedEntity",
      "description": "Ordem de mudança"
    }
  ],
  "pageId": "consultApprovedProjectChangeOrders",
  "commandName": "qryInspectApprovedChangeOrders",
  "bffName": "qryInspectApprovedChangeOrders"
} as const;

export default operationInspectApprovedChangeOrders;
