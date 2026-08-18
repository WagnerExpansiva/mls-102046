/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/declineChangeOrderDecision.defs.ts" enhancement="_blank"/>

export const operationDeclineChangeOrderDecision = {
  "operationId": "declineChangeOrderDecision",
  "title": "Recusar a ordem de mudança",
  "actors": [
    "projectManager"
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
    "managerActionableChangeOrder"
  ],
  "story": {
    "actor": "projectManager",
    "goal": "Recusar a ordem de mudança",
    "steps": [
      "Recusar a ordem de mudança",
      "A ordem fica registrada como recusada pelo gerente."
    ],
    "outcome": "A ordem fica registrada como recusada pelo gerente."
  },
  "accessPattern": {
    "kind": "transition",
    "description": "Recusar a ordem de mudança",
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
  "pageId": "declineChangeOrder",
  "commandName": "cmdDeclineChangeOrderDecision",
  "bffName": "cmdDeclineChangeOrderDecision"
} as const;

export default operationDeclineChangeOrderDecision;
