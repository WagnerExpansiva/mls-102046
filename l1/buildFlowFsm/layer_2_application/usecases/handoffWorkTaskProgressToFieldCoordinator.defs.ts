/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/handoffWorkTaskProgressToFieldCoordinator.defs.ts" enhancement="_blank"/>

export const handoffWorkTaskProgressToFieldCoordinatorUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "handoffWorkTaskProgressToFieldCoordinator",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "handoffWorkTaskProgressToFieldCoordinator",
    "ports": [
      "WorkTask"
    ],
    "rulesApplied": [],
    "functions": [
      {
        "functionName": "handoffWorkTaskProgressToFieldCoordinator",
        "inputTypeName": "HandoffWorkTaskProgressToFieldCoordinatorInput",
        "outputTypeName": "HandoffWorkTaskProgressToFieldCoordinatorOutput",
        "input": [
          {
            "name": "workTaskId",
            "type": "string",
            "required": true,
            "description": "Tarefa de trabalho",
            "ofEntity": "WorkTask",
            "fieldRef": "WorkTask.workTaskId",
            "item": {
              "fields": []
            }
          },
          {
            "name": "description",
            "type": "string",
            "required": true,
            "description": "Descrição do trabalho a ser executado em campo.",
            "ofEntity": "WorkTask",
            "fieldRef": "WorkTask.description",
            "item": {
              "fields": []
            }
          },
          {
            "name": "dueDate",
            "type": "string",
            "required": true,
            "description": "Data prevista para conclusão da tarefa no cronograma da obra.",
            "ofEntity": "WorkTask",
            "fieldRef": "WorkTask.dueDate",
            "item": {
              "fields": []
            }
          },
          {
            "name": "progressUpdate",
            "type": "string",
            "required": false,
            "description": "Atualização de andamento registrada pelo trabalhador durante a execução da tarefa.",
            "ofEntity": "WorkTask",
            "fieldRef": "WorkTask.progressUpdate",
            "item": {
              "fields": []
            }
          }
        ],
        "output": [
          {
            "name": "workTaskId",
            "type": "string",
            "required": true,
            "ofEntity": "WorkTask"
          },
          {
            "name": "projectId",
            "type": "string",
            "required": true,
            "ofEntity": "WorkTask"
          },
          {
            "name": "assignedFieldWorkerId",
            "type": "string",
            "required": true,
            "ofEntity": "WorkTask"
          },
          {
            "name": "description",
            "type": "string",
            "required": true,
            "ofEntity": "WorkTask"
          },
          {
            "name": "dueDate",
            "type": "string",
            "required": true,
            "ofEntity": "WorkTask"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "WorkTask"
          },
          {
            "name": "progressUpdate",
            "type": "string",
            "required": false,
            "ofEntity": "WorkTask"
          }
        ],
        "ports": [
          "WorkTask"
        ],
        "rulesApplied": [],
        "transactional": true,
        "steps": [
          "Load the WorkTask aggregate through the WorkTask port using the selected workTaskId.",
          "Update description and dueDate with the supplied values and update progressUpdate when supplied.",
          "Persist the WorkTask aggregate through the WorkTask port.",
          "Return the canonical WorkTask output projection."
        ],
        "outputShape": {
          "kind": "object",
          "fields": [
            {
              "name": "workTaskId",
              "type": "string",
              "required": true,
              "fieldRef": "WorkTask.workTaskId"
            },
            {
              "name": "projectId",
              "type": "string",
              "required": true,
              "fieldRef": "WorkTask.projectId"
            },
            {
              "name": "assignedFieldWorkerId",
              "type": "string",
              "required": true,
              "fieldRef": "WorkTask.assignedFieldWorkerId"
            },
            {
              "name": "description",
              "type": "string",
              "required": true,
              "fieldRef": "WorkTask.description"
            },
            {
              "name": "dueDate",
              "type": "string",
              "required": true,
              "fieldRef": "WorkTask.dueDate"
            },
            {
              "name": "status",
              "type": "string",
              "required": true,
              "fieldRef": "WorkTask.status"
            },
            {
              "name": "progressUpdate",
              "type": "string",
              "required": false,
              "fieldRef": "WorkTask.progressUpdate"
            }
          ]
        }
      }
    ],
    "mdmRefs": []
  }
} as const;

export default handoffWorkTaskProgressToFieldCoordinatorUsecase;

export const pipeline = [
  {
    "id": "handoffWorkTaskProgressToFieldCoordinator__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/handoffWorkTaskProgressToFieldCoordinator.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/handoffWorkTaskProgressToFieldCoordinator.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/workTaskRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/workTask.d.ts"
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
