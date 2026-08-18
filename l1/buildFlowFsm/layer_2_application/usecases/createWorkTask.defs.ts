/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/createWorkTask.defs.ts" enhancement="_blank"/>

export const createWorkTaskUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "createWorkTask",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "createWorkTask",
    "ports": [
      "WorkTask",
      "FieldWorker",
      "Project"
    ],
    "rulesApplied": [
      "workTaskRequiresActiveProject",
      "workTaskRequiresAssigneeAndDueDate"
    ],
    "functions": [
      {
        "functionName": "createWorkTask",
        "inputTypeName": "CreateWorkTaskInput",
        "outputTypeName": "CreateWorkTaskOutput",
        "input": [
          {
            "name": "projectProjectId",
            "type": "string",
            "required": true,
            "description": "Obra",
            "fieldRef": "Project.projectId",
            "item": {
              "fields": []
            }
          },
          {
            "name": "assignedFieldWorkerId",
            "type": "string",
            "required": true,
            "description": "Trabalhador de campo atribuído à tarefa.",
            "ofEntity": "WorkTask",
            "fieldRef": "WorkTask.assignedFieldWorkerId",
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
          "WorkTask",
          "FieldWorker",
          "Project"
        ],
        "rulesApplied": [
          "workTaskRequiresActiveProject",
          "workTaskRequiresAssigneeAndDueDate"
        ],
        "transactional": true,
        "steps": [
          "Load the Project through the Project port using projectProjectId and reject with rule workTaskRequiresActiveProject if it does not exist or is not active.",
          "Validate that assignedFieldWorkerId and dueDate are present; load the FieldWorker through the FieldWorker port and reject with rule workTaskRequiresAssigneeAndDueDate if the assignee is invalid.",
          "Generate workTaskId, create a WorkTask with projectId, assignedFieldWorkerId, description, dueDate, optional progressUpdate, and initial status planned.",
          "Persist the WorkTask through the WorkTask port in the transaction and return all fields declared by CreateWorkTaskOutput."
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

export default createWorkTaskUsecase;

export const pipeline = [
  {
    "id": "createWorkTask__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/createWorkTask.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/createWorkTask.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/workTaskRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/fieldWorkerRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/workTask.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/fieldWorker.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/project.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "rulesApplied": [
      "workTaskRequiresActiveProject",
      "workTaskRequiresAssigneeAndDueDate"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
