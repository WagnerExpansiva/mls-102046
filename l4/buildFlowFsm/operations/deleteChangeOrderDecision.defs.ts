/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/deleteChangeOrderDecision.defs.ts" enhancement="_blank"/>

export const operationDeleteChangeOrderDecision = {
  "operationId": "deleteChangeOrderDecision",
  "title": "Excluir Decisão sobre ordem de mudança",
  "actors": [
    "billingStaff",
    "fieldCoordinator",
    "fieldWorker",
    "projectManager"
  ],
  "entity": "ChangeOrderDecision",
  "kind": "delete",
  "reads": [
    "ChangeOrderDecision"
  ],
  "writes": [
    "ChangeOrderDecision"
  ],
  "rulesApplied": [],
  "story": {
    "actor": "billingStaff",
    "goal": "Excluir Decisão sobre ordem de mudança",
    "steps": [
      "Remover o registro escolhido."
    ],
    "outcome": "Remover o registro escolhido."
  },
  "accessPattern": {
    "kind": "delete",
    "description": "Excluir Decisão sobre ordem de mudança",
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
      "inputId": "changeOrderDecisionId",
      "fieldRef": "ChangeOrderDecision.changeOrderDecisionId",
      "required": true,
      "source": "selectedEntity",
      "description": "Identificador estável da decisão registrada sobre uma ordem de mudança."
    }
  ],
  "pageId": "changeOrderDecisionCatalogue",
  "commandName": "cmdDeleteChangeOrderDecision",
  "bffName": "cmdDeleteChangeOrderDecision"
} as const;

export default operationDeleteChangeOrderDecision;
