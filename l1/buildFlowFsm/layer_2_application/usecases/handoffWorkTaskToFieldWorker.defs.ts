/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/handoffWorkTaskToFieldWorker.defs.ts" enhancement="_blank"/>

export const handoffWorkTaskToFieldWorkerUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "handoffWorkTaskToFieldWorker",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "handoffWorkTaskToFieldWorker",
    "ports": [
      "WorkTask",
      "FieldWorker"
    ],
    "rulesApplied": [
      "workTaskRequiresAssigneeAndDueDate"
    ],
    "functions": [
      {
        "functionName": "handoffWorkTaskToFieldWorker",
        "inputTypeName": "HandoffWorkTaskToFieldWorkerInput",
        "outputTypeName": "HandoffWorkTaskToFieldWorkerOutput",
        "input": [
          {
            "name": "workTaskId",
            "type": "string",
            "required": true,
            "description": "Tarefa de trabalho selecionada para encaminhamento.",
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
          "WorkTask",
          "FieldWorker"
        ],
        "rulesApplied": [
          "workTaskRequiresAssigneeAndDueDate"
        ],
        "transactional": true,
        "steps": [
          "Iniciar uma transação usando ctx.data apenas como wrapper e carregar a WorkTask pelo port WorkTask usando workTaskId.",
          "Validar inline a regra workTaskRequiresAssigneeAndDueDate: a tarefa deve possuir assignedFieldWorkerId e dueDate; se falhar, rejeitar com erro contendo o identificador da regra.",
          "Carregar o FieldWorker atribuído pelo port FieldWorker e validar que o trabalhador existe antes do encaminhamento.",
          "Atualizar description, dueDate e, quando fornecido, progressUpdate; encaminhar a tarefa alterando status para inProgress.",
          "Salvar a WorkTask pelo port WorkTask dentro da mesma transação.",
          "Retornar exatamente workTaskId, projectId, assignedFieldWorkerId, description, dueDate, status e progressUpdate da tarefa persistida."
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

export default handoffWorkTaskToFieldWorkerUsecase;

export const pipeline = [
  {
    "id": "handoffWorkTaskToFieldWorker__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/handoffWorkTaskToFieldWorker.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/handoffWorkTaskToFieldWorker.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/workTaskRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/fieldWorkerRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/workTask.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/fieldWorker.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "rulesApplied": [
      "workTaskRequiresAssigneeAndDueDate"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
