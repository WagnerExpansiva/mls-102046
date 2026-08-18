/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/approveChangeOrderDecision.defs.ts" enhancement="_blank"/>

export const operationApproveChangeOrderDecision = {
  "operationId": "approveChangeOrderDecision",
  "title": "Aprovar a ordem de mudança",
  "actors": [
    "client"
  ],
  "entity": "ChangeOrder",
  "kind": "transition",
  "reads": [
    "ChangeOrder",
    "ChangeOrderDecision"
  ],
  "writes": [
    "ChangeOrder"
  ],
  "rulesApplied": [
    "clientApprovableChangeOrder"
  ],
  "story": {
    "actor": "client",
    "goal": "Aprovar a ordem de mudança",
    "steps": [
      "Aprovar a ordem de mudança",
      "A ordem fica registrada como aprovada pelo cliente."
    ],
    "outcome": "A ordem fica registrada como aprovada pelo cliente."
  },
  "accessPattern": {
    "kind": "transition",
    "description": "Aprovar a ordem de mudança",
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
    },
    {
      "inputId": "clientClientId",
      "fieldRef": "Client.clientId",
      "required": true,
      "source": "selectedEntity",
      "description": "Cliente"
    },
    {
      "inputId": "projectProjectId",
      "fieldRef": "Project.projectId",
      "required": true,
      "source": "routeParam",
      "description": "Obra"
    },
    {
      "inputId": "status",
      "fieldRef": "ChangeOrder.status",
      "required": true,
      "source": "userInput",
      "description": "Decisão tomada."
    }
  ],
  "pageId": "approveChangeOrder",
  "commandName": "cmdApproveChangeOrderDecision",
  "bffName": "cmdApproveChangeOrderDecision"
} as const;

export default operationApproveChangeOrderDecision;
