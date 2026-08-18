/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/handoffChangeOrderToProjectManager.defs.ts" enhancement="_blank"/>

export const operationHandoffChangeOrderToProjectManager = {
  "operationId": "handoffChangeOrderToProjectManager",
  "title": "Submeter a alteração para tratamento",
  "actors": [
    "fieldCoordinator"
  ],
  "entity": "ChangeOrder",
  "kind": "commandInput",
  "reads": [
    "ChangeOrder"
  ],
  "writes": [
    "ChangeOrder"
  ],
  "rulesApplied": [
    "managerActionableChangeOrder"
  ],
  "story": {
    "actor": "fieldCoordinator",
    "goal": "Submeter a alteração para tratamento",
    "steps": [
      "Submeter a alteração para tratamento",
      "O gerente recebe a ordem para recusá-la ou encaminhá-la ao cliente para aprovação."
    ],
    "outcome": "O gerente recebe a ordem para recusá-la ou encaminhá-la ao cliente para aprovação."
  },
  "accessPattern": {
    "kind": "commandInput",
    "description": "Submeter a alteração para tratamento",
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
      "inputId": "description",
      "fieldRef": "ChangeOrder.description",
      "required": true,
      "source": "userInput",
      "description": "Descrição da alteração proposta na obra para avaliação gerencial e comunicação ao cliente."
    },
    {
      "inputId": "scopeImpact",
      "fieldRef": "ChangeOrder.scopeImpact",
      "required": true,
      "source": "userInput",
      "description": "Impacto proposto da alteração no escopo da obra."
    },
    {
      "inputId": "scheduleImpact",
      "fieldRef": "ChangeOrder.scheduleImpact",
      "required": true,
      "source": "userInput",
      "description": "Impacto proposto da alteração no prazo de execução da obra."
    },
    {
      "inputId": "changeAmount",
      "fieldRef": "ChangeOrder.changeAmount",
      "required": true,
      "source": "userInput",
      "description": "Valor comercial da alteração proposto para aprovação do cliente, custeio e faturamento."
    }
  ],
  "pageId": "submitChangeOrder",
  "commandName": "cmdHandoffChangeOrderToProjectManager",
  "bffName": "cmdHandoffChangeOrderToProjectManager"
} as const;

export default operationHandoffChangeOrderToProjectManager;
