/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/ports/changeOrderRepository.defs.ts" enhancement="_blank"/>

export const changeOrderRepositoryPort = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryPort",
  "artifactId": "ChangeOrderRepository",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryPort",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "ChangeOrder",
    "interfaceName": "IChangeOrderRepository",
    "methods": [
      {
        "name": "getById",
        "params": [
          "id: ChangeOrderId"
        ],
        "returns": "ChangeOrder | null",
        "description": "Retrieve a change order by its domain identifier."
      },
      {
        "name": "list",
        "params": [
          "filter: ChangeOrderFilter"
        ],
        "returns": "ChangeOrder[]",
        "description": "List change orders matching a domain filter."
      },
      {
        "name": "save",
        "params": [
          "aggregate: ChangeOrder"
        ],
        "returns": "void",
        "description": "Persist a change order aggregate."
      },
      {
        "name": "listByProjectId",
        "params": [
          "projectId: ProjectId"
        ],
        "returns": "ChangeOrder[]",
        "description": "List change orders belonging to a project."
      }
    ]
  }
} as const;

export default changeOrderRepositoryPort;

export const pipeline = [
  {
    "id": "changeOrderRepository__repositoryPort",
    "type": "repositoryPort",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/ports/changeOrderRepository.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/ports/changeOrderRepository.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/changeOrder.d.ts"
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
