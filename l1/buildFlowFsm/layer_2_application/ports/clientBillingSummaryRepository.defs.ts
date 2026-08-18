/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/ports/clientBillingSummaryRepository.defs.ts" enhancement="_blank"/>

export const clientBillingSummaryRepositoryPort = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryPort",
  "artifactId": "ClientBillingSummaryRepository",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryPort",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "ClientBillingSummary",
    "interfaceName": "IClientBillingSummaryRepository",
    "methods": [
      {
        "name": "getById",
        "params": [
          "id: ClientBillingSummaryId"
        ],
        "returns": "ClientBillingSummary | null",
        "description": "Retrieve a client billing summary by its domain identifier."
      },
      {
        "name": "list",
        "params": [
          "filter: ClientBillingSummaryFilter"
        ],
        "returns": "ClientBillingSummary[]",
        "description": "List client billing summaries matching a domain filter."
      },
      {
        "name": "save",
        "params": [
          "aggregate: ClientBillingSummary"
        ],
        "returns": "void",
        "description": "Persist a client billing summary aggregate."
      },
      {
        "name": "getByClientId",
        "params": [
          "clientId: ClientId"
        ],
        "returns": "ClientBillingSummary | null",
        "description": "Retrieve the billing summary for a client."
      }
    ]
  }
} as const;

export default clientBillingSummaryRepositoryPort;

export const pipeline = [
  {
    "id": "clientBillingSummaryRepository__repositoryPort",
    "type": "repositoryPort",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/ports/clientBillingSummaryRepository.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/ports/clientBillingSummaryRepository.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/clientBillingSummary.d.ts"
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
