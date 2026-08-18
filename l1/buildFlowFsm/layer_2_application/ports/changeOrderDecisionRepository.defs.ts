/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/ports/changeOrderDecisionRepository.defs.ts" enhancement="_blank"/>

export const changeOrderDecisionRepositoryPort = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryPort",
  "artifactId": "ChangeOrderDecisionRepository",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryPort",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "ChangeOrderDecision",
    "interfaceName": "IChangeOrderDecisionRepository",
    "methods": [
      {
        "name": "getById",
        "params": [
          "id: ChangeOrderDecisionId"
        ],
        "returns": "ChangeOrderDecision | null",
        "description": "Retrieve a change order decision by its domain identifier."
      },
      {
        "name": "list",
        "params": [
          "filter: ChangeOrderDecisionFilter"
        ],
        "returns": "ChangeOrderDecision[]",
        "description": "List change order decisions matching a domain filter."
      },
      {
        "name": "save",
        "params": [
          "aggregate: ChangeOrderDecision"
        ],
        "returns": "void",
        "description": "Persist a change order decision aggregate."
      },
      {
        "name": "listByChangeOrderId",
        "params": [
          "changeOrderId: ChangeOrderId"
        ],
        "returns": "ChangeOrderDecision[]",
        "description": "List decisions associated with a change order."
      }
    ]
  }
} as const;

export default changeOrderDecisionRepositoryPort;

export const pipeline = [
  {
    "id": "changeOrderDecisionRepository__repositoryPort",
    "type": "repositoryPort",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/ports/changeOrderDecisionRepository.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/ports/changeOrderDecisionRepository.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/changeOrderDecision.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/repositoryPort.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
