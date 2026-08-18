/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/updateChangeOrder.defs.ts" enhancement="_blank"/>

export const operationUpdateChangeOrder = {
  "operationId": "updateChangeOrder",
  "title": "Atualizar Ordem de mudança",
  "actors": [
    "client",
    "fieldCoordinator",
    "projectManager"
  ],
  "entity": "ChangeOrder",
  "kind": "update",
  "reads": [
    "ChangeOrder",
    "Client",
    "Project"
  ],
  "writes": [
    "ChangeOrder"
  ],
  "rulesApplied": [
    "changeOrderRequiresClientAndProject",
    "managerActionableChangeOrder",
    "clientApprovableChangeOrder",
    "approvedBillableChangeOrder",
    "clientVisibleApprovedChangeOrder"
  ],
  "story": {
    "actor": "client",
    "goal": "Atualizar Ordem de mudança",
    "steps": [
      "Corrigir os dados do registro escolhido."
    ],
    "outcome": "Corrigir os dados do registro escolhido."
  },
  "accessPattern": {
    "kind": "update",
    "description": "Atualizar Ordem de mudança",
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
      "inputId": "changeOrderId",
      "fieldRef": "ChangeOrder.changeOrderId",
      "required": true,
      "source": "selectedEntity",
      "description": "Identificador estável da ordem de mudança, transportado entre as etapas conectadas."
    },
    {
      "inputId": "clientRef",
      "fieldRef": "ChangeOrder.clientRef",
      "required": true,
      "source": "selectedEntity",
      "description": "Referência de contexto ao cliente para o qual a alteração é proposta, selecionada no catálogo compartilhado."
    },
    {
      "inputId": "projectRef",
      "fieldRef": "ChangeOrder.projectRef",
      "required": true,
      "source": "selectedEntity",
      "description": "Referência de contexto à obra do cliente à qual a alteração está vinculada."
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
    },
    {
      "inputId": "submittedAt",
      "fieldRef": "ChangeOrder.submittedAt",
      "required": true,
      "source": "systemDefault",
      "description": "Data e hora em que a alteração foi formalizada e submetida para tratamento gerencial."
    },
    {
      "inputId": "forwardedForClientApprovalAt",
      "fieldRef": "ChangeOrder.forwardedForClientApprovalAt",
      "required": false,
      "source": "systemDefault",
      "description": "Data e hora em que a ordem foi encaminhada ao cliente para decisão."
    },
    {
      "inputId": "status",
      "fieldRef": "ChangeOrder.status",
      "required": true,
      "source": "systemDefault",
      "description": "Estado atual da ordem de mudança no ciclo de tratamento, aprovação do cliente e faturamento."
    }
  ],
  "pageId": "changeOrderCatalogue",
  "commandName": "cmdUpdateChangeOrder",
  "bffName": "cmdUpdateChangeOrder"
} as const;

export default operationUpdateChangeOrder;
