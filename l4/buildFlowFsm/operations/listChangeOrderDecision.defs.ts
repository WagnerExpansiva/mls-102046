/// <mls fileReference="_102046_/l4/buildFlowFsm/operations/listChangeOrderDecision.defs.ts" enhancement="_blank"/>

export const operationListChangeOrderDecision = {
  "operationId": "listChangeOrderDecision",
  "title": "Listar Decisão sobre ordem de mudança",
  "actors": [
    "billingStaff",
    "fieldCoordinator",
    "fieldWorker",
    "projectManager"
  ],
  "entity": "ChangeOrderDecision",
  "kind": "query",
  "reads": [
    "ChangeOrderDecision"
  ],
  "writes": [],
  "rulesApplied": [],
  "story": {
    "actor": "billingStaff",
    "goal": "Listar Decisão sobre ordem de mudança",
    "steps": [
      "Encontrar o registro."
    ],
    "outcome": "Encontrar o registro."
  },
  "accessPattern": {
    "kind": "list",
    "description": "Listar Decisão sobre ordem de mudança",
    "entity": "ChangeOrderDecision",
    "keyField": "ChangeOrderDecision.changeOrderDecisionId",
    "pagination": "none",
    "selection": "single",
    "output": [
      "ChangeOrderDecision.changeOrderDecisionId",
      "ChangeOrderDecision.changeOrder",
      "ChangeOrderDecision.madeByPlatformUser",
      "ChangeOrderDecision.decision",
      "ChangeOrderDecision.decidedAt"
    ]
  },
  "outputShape": {
    "kind": "list",
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
  "inputs": [],
  "pageId": "changeOrderDecisionCatalogue",
  "commandName": "qryListChangeOrderDecision",
  "bffName": "qryListChangeOrderDecision"
} as const;

export default operationListChangeOrderDecision;
