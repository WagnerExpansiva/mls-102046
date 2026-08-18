/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectScheduleRiskAssessment.defs.ts" enhancement="_blank"/>

export const inspectScheduleRiskAssessmentUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "inspectScheduleRiskAssessment",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "inspectScheduleRiskAssessment",
    "ports": [
      "ScheduleRiskAssessment",
      "WorkTask"
    ],
    "rulesApplied": [
      "unfinishedWorkTask"
    ],
    "functions": [
      {
        "functionName": "inspectScheduleRiskAssessment",
        "inputTypeName": "InspectScheduleRiskAssessmentInput",
        "outputTypeName": "InspectScheduleRiskAssessmentOutput",
        "input": [
          {
            "name": "projectId",
            "type": "string",
            "required": true,
            "description": "Avaliação de risco de atraso",
            "ofEntity": "ScheduleRiskAssessment",
            "fieldRef": "ScheduleRiskAssessment.projectId",
            "item": {
              "fields": []
            }
          }
        ],
        "output": [
          {
            "name": "projectId",
            "type": "string",
            "required": true,
            "ofEntity": "ScheduleRiskAssessment"
          },
          {
            "name": "workTaskId",
            "type": "string",
            "required": true,
            "ofEntity": "ScheduleRiskAssessment"
          },
          {
            "name": "taskStatus",
            "type": "string",
            "required": true,
            "ofEntity": "ScheduleRiskAssessment"
          },
          {
            "name": "dueDate",
            "type": "string",
            "required": true,
            "ofEntity": "ScheduleRiskAssessment"
          },
          {
            "name": "progressPercent",
            "type": "number",
            "required": false,
            "ofEntity": "ScheduleRiskAssessment"
          },
          {
            "name": "riskIndicators",
            "type": "string",
            "required": true,
            "ofEntity": "ScheduleRiskAssessment"
          },
          {
            "name": "riskExplanation",
            "type": "string",
            "required": true,
            "ofEntity": "ScheduleRiskAssessment"
          },
          {
            "name": "assessedAt",
            "type": "string",
            "required": true,
            "ofEntity": "ScheduleRiskAssessment"
          }
        ],
        "ports": [
          "ScheduleRiskAssessment",
          "WorkTask"
        ],
        "rulesApplied": [
          "unfinishedWorkTask"
        ],
        "transactional": false,
        "steps": [
          "Receber o projectId selecionado e consultar a porta ScheduleRiskAssessment pelo campo ScheduleRiskAssessment.projectId.",
          "Validar a existência da avaliação e consultar a WorkTask referenciada pela avaliação através da porta WorkTask.",
          "Aplicar inline a regra unfinishedWorkTask: a tarefa deve estar em status planned ou inProgress; caso esteja completed ou cancelled, rejeitar a consulta com o identificador da regra nos detalhes do erro.",
          "Retornar exatamente a projeção canônica da avaliação, preservando riskIndicators conforme armazenado e os demais campos declarados."
        ],
        "outputShape": {
          "kind": "object",
          "fields": [
            {
              "name": "projectId",
              "type": "string",
              "required": true,
              "fieldRef": "ScheduleRiskAssessment.projectId"
            },
            {
              "name": "workTaskId",
              "type": "string",
              "required": true,
              "fieldRef": "ScheduleRiskAssessment.workTaskId"
            },
            {
              "name": "taskStatus",
              "type": "string",
              "required": true,
              "fieldRef": "ScheduleRiskAssessment.taskStatus"
            },
            {
              "name": "dueDate",
              "type": "string",
              "required": true,
              "fieldRef": "ScheduleRiskAssessment.dueDate"
            },
            {
              "name": "progressPercent",
              "type": "number",
              "required": false,
              "fieldRef": "ScheduleRiskAssessment.progressPercent"
            },
            {
              "name": "riskIndicators",
              "type": "string",
              "required": true,
              "fieldRef": "ScheduleRiskAssessment.riskIndicators"
            },
            {
              "name": "riskExplanation",
              "type": "string",
              "required": true,
              "fieldRef": "ScheduleRiskAssessment.riskExplanation"
            },
            {
              "name": "assessedAt",
              "type": "string",
              "required": true,
              "fieldRef": "ScheduleRiskAssessment.assessedAt"
            }
          ]
        }
      }
    ],
    "mdmRefs": []
  }
} as const;

export default inspectScheduleRiskAssessmentUsecase;

export const pipeline = [
  {
    "id": "inspectScheduleRiskAssessment__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectScheduleRiskAssessment.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectScheduleRiskAssessment.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/scheduleRiskAssessmentRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/workTaskRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/scheduleRiskAssessment.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/workTask.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "rulesApplied": [
      "unfinishedWorkTask"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
