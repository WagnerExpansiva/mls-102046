/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/locateFieldWorker.defs.ts" enhancement="_blank"/>

export const locateFieldWorkerUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "locateFieldWorker",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "locateFieldWorker",
    "ports": [
      "FieldWorker"
    ],
    "rulesApplied": [],
    "functions": [
      {
        "functionName": "locateFieldWorker",
        "inputTypeName": "LocateFieldWorkerInput",
        "outputTypeName": "LocateFieldWorkerOutput",
        "input": [],
        "output": [
          {
            "name": "platformUserId",
            "type": "string",
            "required": true,
            "ofEntity": "FieldWorker"
          }
        ],
        "ports": [
          "FieldWorker"
        ],
        "rulesApplied": [],
        "transactional": false,
        "steps": [
          "List FieldWorker records through the FieldWorker port.",
          "Project the platformUserId field for each record.",
          "Return the collection for single-worker selection."
        ],
        "outputShape": {
          "kind": "list",
          "fields": [
            {
              "name": "platformUserId",
              "type": "string",
              "required": true,
              "fieldRef": "FieldWorker.platformUserId"
            }
          ]
        }
      }
    ],
    "mdmRefs": []
  }
} as const;

export default locateFieldWorkerUsecase;

export const pipeline = [
  {
    "id": "locateFieldWorker__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/locateFieldWorker.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/locateFieldWorker.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/fieldWorkerRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/fieldWorker.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
