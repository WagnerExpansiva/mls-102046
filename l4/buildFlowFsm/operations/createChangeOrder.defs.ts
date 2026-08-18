/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/createChangeOrder.defs.ts" enhancement="_blank"/>

export const operationCreateChangeOrder = {
  "operationId": "createChangeOrder",
  "title": "Registrar a alteração proposta",
  "actors": [
    "client",
    "fieldCoordinator",
    "projectManager"
  ],
  "entity": "ChangeOrder",
  "kind": "commandInput",
  "reads": [
    "ChangeOrder",
    "Client",
    "Project"
  ],
  "writes": [
    "ChangeOrder"
  ],
  "rulesApplied": [
    "changeOrderRequiresClientAndProject"
  ],
  "story": {
    "actor": "client",
    "goal": "Registrar a alteração proposta",
    "steps": [
      "Registrar a alteração proposta",
      "Uma ordem de mudança vinculada ao cliente e à obra fica registrada."
    ],
    "outcome": "Uma ordem de mudança vinculada ao cliente e à obra fica registrada."
  },
  "accessPattern": {
    "kind": "commandInput",
    "description": "Registrar a alteração proposta",
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
  "pageId": "changeOrderCatalogue",
  "commandName": "cmdCreateChangeOrder",
  "bffName": "cmdCreateChangeOrder"
} as const;

export default operationCreateChangeOrder;
