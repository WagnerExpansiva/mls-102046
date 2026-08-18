/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/createChangeOrderDecision.defs.ts" enhancement="_blank"/>

export const operationCreateChangeOrderDecision = {
  "operationId": "createChangeOrderDecision",
  "title": "Criar Decisão sobre ordem de mudança",
  "actors": [
    "billingStaff",
    "fieldCoordinator",
    "fieldWorker",
    "projectManager"
  ],
  "entity": "ChangeOrderDecision",
  "kind": "create",
  "reads": [
    "ChangeOrder",
    "ChangeOrderDecision",
    "PlatformUser"
  ],
  "writes": [
    "ChangeOrderDecision"
  ],
  "rulesApplied": [
    "onlyClientApprovesOwnChangeOrder",
    "onlyProjectManagerDeclinesChangeOrder"
  ],
  "story": {
    "actor": "billingStaff",
    "goal": "Criar Decisão sobre ordem de mudança",
    "steps": [
      "Informar os dados do novo registro."
    ],
    "outcome": "Informar os dados do novo registro."
  },
  "accessPattern": {
    "kind": "create",
    "description": "Criar Decisão sobre ordem de mudança",
    "entity": "ChangeOrderDecision",
    "keyField": "ChangeOrderDecision.changeOrderDecisionId",
    "pagination": "none",
    "selection": "none",
    "output": [
      "ChangeOrderDecision.changeOrderDecisionId",
      "ChangeOrderDecision.changeOrder",
      "ChangeOrderDecision.madeByPlatformUser",
      "ChangeOrderDecision.decision",
      "ChangeOrderDecision.decidedAt"
    ]
  },
  "outputShape": {
    "kind": "object",
    "fields": [
      {
        "name": "changeOrderDecisionId",
        "type": "string",
        "required": true,
        "fieldRef": "ChangeOrderDecision.changeOrderDecisionId"
      },
      {
        "name": "changeOrder",
        "type": "string",
        "required": true,
        "fieldRef": "ChangeOrderDecision.changeOrder"
      },
      {
        "name": "madeByPlatformUser",
        "type": "string",
        "required": true,
        "fieldRef": "ChangeOrderDecision.madeByPlatformUser"
      },
      {
        "name": "decision",
        "type": "string",
        "required": true,
        "fieldRef": "ChangeOrderDecision.decision"
      },
      {
        "name": "decidedAt",
        "type": "string",
        "required": true,
        "fieldRef": "ChangeOrderDecision.decidedAt"
      }
    ]
  },
  "inputs": [
    {
      "inputId": "changeOrder",
      "fieldRef": "ChangeOrderDecision.changeOrder",
      "required": true,
      "source": "selectedEntity",
      "description": "Referência à ordem de mudança que recebeu a decisão."
    },
    {
      "inputId": "madeByPlatformUser",
      "fieldRef": "ChangeOrderDecision.madeByPlatformUser",
      "required": true,
      "source": "actorSession",
      "description": "Referência ao usuário que aprovou ou recusou a ordem de mudança."
    },
    {
      "inputId": "decision",
      "fieldRef": "ChangeOrderDecision.decision",
      "required": true,
      "source": "userInput",
      "description": "Resultado registrado para a ordem de mudança."
    },
    {
      "inputId": "decidedAt",
      "fieldRef": "ChangeOrderDecision.decidedAt",
      "required": true,
      "source": "systemDefault",
      "description": "Data e hora em que a decisão foi registrada."
    }
  ],
  "pageId": "changeOrderDecisionCatalogue",
  "commandName": "cmdCreateChangeOrderDecision",
  "bffName": "cmdCreateChangeOrderDecision"
} as const;

export default operationCreateChangeOrderDecision;
