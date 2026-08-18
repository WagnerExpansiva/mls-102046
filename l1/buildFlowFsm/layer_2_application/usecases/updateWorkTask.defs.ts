/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateWorkTask.defs.ts" enhancement="_blank"/>

export const updateWorkTaskUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "updateWorkTask",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "updateWorkTask",
    "ports": [
      "WorkTask",
      "Project"
    ],
    "rulesApplied": [
      "onlyAssignedWorkerReportsTaskProgress"
    ],
    "functions": [
      {
        "functionName": "updateWorkTask",
        "inputTypeName": "UpdateWorkTaskInput",
        "outputTypeName": "UpdateWorkTaskOutput",
        "input": [
          {
            "name": "projectId",
            "type": "string",
            "required": true,
            "description": "Obra",
            "ofEntity": "Project",
            "fieldRef": "Project.projectId",
            "item": {
              "fields": []
            }
          },
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
            "description": "Identificador da tarefa de trabalho.",
            "ofEntity": "WorkTask",
            "fieldRef": "WorkTask.workTaskId",
            "item": {
              "fields": []
            }
          },
          {
            "name": "projectId",
            "type": "string",
            "required": true,
            "description": "Identificador da obra.",
            "ofEntity": "WorkTask",
            "fieldRef": "WorkTask.projectId",
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
            "name": "status",
            "type": "string",
            "required": true,
            "description": "Estado atual da tarefa.",
            "ofEntity": "WorkTask",
            "fieldRef": "WorkTask.status",
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
        "ports": [
          "WorkTask",
          "Project"
        ],
        "rulesApplied": [
          "onlyAssignedWorkerReportsTaskProgress"
        ],
        "transactional": true,
        "steps": [
          "Load the Project through the Project port using projectId and reject when it does not exist.",
          "Load the WorkTask through the WorkTask port using workTaskId and reject when it does not exist or its projectId differs from projectId.",
          "When progressUpdate is supplied, resolve the authenticated field worker from ctx.sessionContext and apply onlyAssignedWorkerReportsTaskProgress by requiring that actor id to equal the task assignedFieldWorkerId; if the rule blocks the operation, return a validation error whose details include onlyAssignedWorkerReportsTaskProgress.",
          "Update the task description, dueDate, and optional progressUpdate, preserving its identity, project association, assigned worker, and status, then save it through the WorkTask port in the transaction wrapper.",
          "Return the persisted task projection with exactly workTaskId, projectId, assignedFieldWorkerId, description, dueDate, status, and progressUpdate."
        ]
      }
    ],
    "mdmRefs": []
  }
} as const;

export default updateWorkTaskUsecase;

export const pipeline = [
  {
    "id": "updateWorkTask__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateWorkTask.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateWorkTask.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/workTaskRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/workTask.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/project.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "rulesApplied": [
      "onlyAssignedWorkerReportsTaskProgress"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
