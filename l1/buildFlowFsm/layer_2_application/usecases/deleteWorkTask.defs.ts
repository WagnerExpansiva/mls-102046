/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteWorkTask.defs.ts" enhancement="_blank"/>

export const deleteWorkTaskUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "deleteWorkTask",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "deleteWorkTask",
    "ports": [
      "WorkTask"
    ],
    "rulesApplied": [],
    "functions": [
      {
        "functionName": "deleteWorkTask",
        "inputTypeName": "DeleteWorkTaskInput",
        "outputTypeName": "DeleteWorkTaskOutput",
        "input": [
          {
            "name": "workTaskId",
            "type": "string",
            "required": true,
            "description": "Identificador estável da tarefa, mantido entre as etapas conectadas.",
            "ofEntity": "WorkTask",
            "fieldRef": "WorkTask.workTaskId",
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
          "Iniciar uma transação usando ctx.data apenas como wrapper transacional.",
          "Carregar a WorkTask pelo workTaskId através da porta WorkTask.",
          "Se a tarefa não existir, retornar erro de recurso não encontrado.",
          "Capturar a representação da tarefa conforme o outputShape antes da exclusão.",
          "Excluir a WorkTask através da porta WorkTask dentro da mesma transação.",
          "Confirmar a transação e retornar os campos da tarefa excluída conforme o outputShape."
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

export default deleteWorkTaskUsecase;

export const pipeline = [
  {
    "id": "deleteWorkTask__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteWorkTask.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/deleteWorkTask.defs.ts",
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
