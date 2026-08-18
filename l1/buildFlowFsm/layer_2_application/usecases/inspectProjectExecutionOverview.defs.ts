/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectProjectExecutionOverview.defs.ts" enhancement="_blank"/>

export const inspectProjectExecutionOverviewUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "inspectProjectExecutionOverview",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "inspectProjectExecutionOverview",
    "ports": [
      "ProjectExecutionOverview"
    ],
    "rulesApplied": [
      "activeProjectCostVisibility"
    ],
    "functions": [
      {
        "functionName": "inspectProjectExecutionOverview",
        "inputTypeName": "InspectProjectExecutionOverviewInput",
        "outputTypeName": "InspectProjectExecutionOverviewOutput",
        "input": [
          {
            "name": "projectId",
            "type": "string",
            "required": true,
            "description": "Identificador da visão consolidada de execução da obra selecionada.",
            "ofEntity": "ProjectExecutionOverview",
            "fieldRef": "ProjectExecutionOverview.projectId",
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
            "ofEntity": "ProjectExecutionOverview"
          },
          {
            "name": "projectName",
            "type": "string",
            "required": true,
            "ofEntity": "ProjectExecutionOverview"
          },
          {
            "name": "projectStatus",
            "type": "string",
            "required": true,
            "ofEntity": "ProjectExecutionOverview"
          },
          {
            "name": "workTaskIds",
            "type": "string",
            "required": false,
            "ofEntity": "ProjectExecutionOverview"
          },
          {
            "name": "taskSummary",
            "type": "string",
            "required": true,
            "ofEntity": "ProjectExecutionOverview"
          },
          {
            "name": "upcomingCommitments",
            "type": "string",
            "required": true,
            "ofEntity": "ProjectExecutionOverview"
          },
          {
            "name": "timeLogIds",
            "type": "string",
            "required": false,
            "ofEntity": "ProjectExecutionOverview"
          },
          {
            "name": "totalLoggedHours",
            "type": "number",
            "required": true,
            "ofEntity": "ProjectExecutionOverview"
          },
          {
            "name": "materialUsageIds",
            "type": "string",
            "required": false,
            "ofEntity": "ProjectExecutionOverview"
          },
          {
            "name": "materialUsageSummary",
            "type": "string",
            "required": true,
            "ofEntity": "ProjectExecutionOverview"
          },
          {
            "name": "actualLaborCost",
            "type": "number",
            "required": true,
            "ofEntity": "ProjectExecutionOverview"
          },
          {
            "name": "actualMaterialCost",
            "type": "number",
            "required": true,
            "ofEntity": "ProjectExecutionOverview"
          },
          {
            "name": "actualCost",
            "type": "number",
            "required": true,
            "ofEntity": "ProjectExecutionOverview"
          },
          {
            "name": "budgetAmount",
            "type": "number",
            "required": true,
            "ofEntity": "ProjectExecutionOverview"
          },
          {
            "name": "costVariance",
            "type": "number",
            "required": true,
            "ofEntity": "ProjectExecutionOverview"
          },
          {
            "name": "changeOrderIds",
            "type": "string",
            "required": false,
            "ofEntity": "ProjectExecutionOverview"
          },
          {
            "name": "changeOrderImpactSummary",
            "type": "string",
            "required": true,
            "ofEntity": "ProjectExecutionOverview"
          },
          {
            "name": "calculatedAt",
            "type": "string",
            "required": true,
            "ofEntity": "ProjectExecutionOverview"
          }
        ],
        "ports": [
          "ProjectExecutionOverview"
        ],
        "rulesApplied": [
          "activeProjectCostVisibility"
        ],
        "transactional": false,
        "steps": [
          "Validar que projectId foi fornecido pela entidade selecionada.",
          "Consultar ProjectExecutionOverview pelo campo projectId através do port ProjectExecutionOverview.",
          "Aplicar inline a regra activeProjectCostVisibility: verificar a autorização do contexto da sessão para visualizar custos do projeto; bloquear a consulta com erro contendo o identificador da regra quando a visibilidade não for permitida.",
          "Retornar a projeção completa declarada no outputShape, incluindo os campos de custos e calculados, sem mutação."
        ],
        "outputShape": {
          "kind": "object",
          "fields": [
            {
              "name": "projectId",
              "type": "string",
              "required": true,
              "fieldRef": "ProjectExecutionOverview.projectId"
            },
            {
              "name": "projectName",
              "type": "string",
              "required": true,
              "fieldRef": "ProjectExecutionOverview.projectName"
            },
            {
              "name": "projectStatus",
              "type": "string",
              "required": true,
              "fieldRef": "ProjectExecutionOverview.projectStatus"
            },
            {
              "name": "workTaskIds",
              "type": "string",
              "required": false,
              "fieldRef": "ProjectExecutionOverview.workTaskIds"
            },
            {
              "name": "taskSummary",
              "type": "string",
              "required": true,
              "fieldRef": "ProjectExecutionOverview.taskSummary"
            },
            {
              "name": "upcomingCommitments",
              "type": "string",
              "required": true,
              "fieldRef": "ProjectExecutionOverview.upcomingCommitments"
            },
            {
              "name": "timeLogIds",
              "type": "string",
              "required": false,
              "fieldRef": "ProjectExecutionOverview.timeLogIds"
            },
            {
              "name": "totalLoggedHours",
              "type": "number",
              "required": true,
              "fieldRef": "ProjectExecutionOverview.totalLoggedHours"
            },
            {
              "name": "materialUsageIds",
              "type": "string",
              "required": false,
              "fieldRef": "ProjectExecutionOverview.materialUsageIds"
            },
            {
              "name": "materialUsageSummary",
              "type": "string",
              "required": true,
              "fieldRef": "ProjectExecutionOverview.materialUsageSummary"
            },
            {
              "name": "actualLaborCost",
              "type": "number",
              "required": true,
              "fieldRef": "ProjectExecutionOverview.actualLaborCost"
            },
            {
              "name": "actualMaterialCost",
              "type": "number",
              "required": true,
              "fieldRef": "ProjectExecutionOverview.actualMaterialCost"
            },
            {
              "name": "actualCost",
              "type": "number",
              "required": true,
              "fieldRef": "ProjectExecutionOverview.actualCost"
            },
            {
              "name": "budgetAmount",
              "type": "number",
              "required": true,
              "fieldRef": "ProjectExecutionOverview.budgetAmount"
            },
            {
              "name": "costVariance",
              "type": "number",
              "required": true,
              "fieldRef": "ProjectExecutionOverview.costVariance"
            },
            {
              "name": "changeOrderIds",
              "type": "string",
              "required": false,
              "fieldRef": "ProjectExecutionOverview.changeOrderIds"
            },
            {
              "name": "changeOrderImpactSummary",
              "type": "string",
              "required": true,
              "fieldRef": "ProjectExecutionOverview.changeOrderImpactSummary"
            },
            {
              "name": "calculatedAt",
              "type": "string",
              "required": true,
              "fieldRef": "ProjectExecutionOverview.calculatedAt"
            }
          ]
        }
      }
    ],
    "mdmRefs": []
  }
} as const;

export default inspectProjectExecutionOverviewUsecase;

export const pipeline = [
  {
    "id": "inspectProjectExecutionOverview__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectProjectExecutionOverview.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectProjectExecutionOverview.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/projectExecutionOverviewRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/projectExecutionOverview.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "rulesApplied": [
      "activeProjectCostVisibility"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
