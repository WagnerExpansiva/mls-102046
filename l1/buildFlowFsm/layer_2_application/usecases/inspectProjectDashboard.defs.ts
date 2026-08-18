/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectProjectDashboard.defs.ts" enhancement="_blank"/>

export const inspectProjectDashboardUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "inspectProjectDashboard",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "inspectProjectDashboard",
    "ports": [
      "ProjectDashboard",
      "Project"
    ],
    "rulesApplied": [
      "activeProjectCostVisibility"
    ],
    "functions": [
      {
        "functionName": "inspectProjectDashboard",
        "inputTypeName": "InspectProjectDashboardInput",
        "outputTypeName": "InspectProjectDashboardOutput",
        "input": [],
        "output": [
          {
            "name": "activeProjects",
            "type": "string",
            "required": true,
            "ofEntity": "ProjectDashboard"
          },
          {
            "name": "activeProjectCount",
            "type": "number",
            "required": true,
            "ofEntity": "ProjectDashboard"
          },
          {
            "name": "totalBudget",
            "type": "number",
            "required": true,
            "ofEntity": "ProjectDashboard"
          },
          {
            "name": "totalActualCost",
            "type": "number",
            "required": true,
            "ofEntity": "ProjectDashboard"
          },
          {
            "name": "budgetVariance",
            "type": "number",
            "required": true,
            "ofEntity": "ProjectDashboard"
          },
          {
            "name": "costAttentionProjects",
            "type": "string",
            "required": true,
            "ofEntity": "ProjectDashboard"
          },
          {
            "name": "upcomingTasks",
            "type": "string",
            "required": true,
            "ofEntity": "ProjectDashboard"
          }
        ],
        "ports": [
          "ProjectDashboard",
          "Project"
        ],
        "rulesApplied": [
          "activeProjectCostVisibility"
        ],
        "transactional": false,
        "steps": [
          "Load the ProjectDashboard projection through the ProjectDashboard port using the getById contract key represented by the dashboard context or canonical aggregate identity; the malformed keyField ProjectDashboard. requires a modeling-gap fallback to the singleton dashboard projection.",
          "Load active Project records through the Project port and derive the visible active-project set.",
          "Apply activeProjectCostVisibility inline: expose cost totals and cost attention only for projects permitted by the rule; do not invent a client-supplied visibility input.",
          "Return the canonical dashboard fields exactly as declared by outputShape, including computed counts, totals, variance, cost-attention projects, and upcoming tasks."
        ],
        "outputShape": {
          "kind": "object",
          "fields": [
            {
              "name": "activeProjects",
              "type": "string",
              "required": true,
              "fieldRef": "ProjectDashboard.activeProjects"
            },
            {
              "name": "activeProjectCount",
              "type": "number",
              "required": true,
              "fieldRef": "ProjectDashboard.activeProjectCount"
            },
            {
              "name": "totalBudget",
              "type": "number",
              "required": true,
              "fieldRef": "ProjectDashboard.totalBudget"
            },
            {
              "name": "totalActualCost",
              "type": "number",
              "required": true,
              "fieldRef": "ProjectDashboard.totalActualCost"
            },
            {
              "name": "budgetVariance",
              "type": "number",
              "required": true,
              "fieldRef": "ProjectDashboard.budgetVariance"
            },
            {
              "name": "costAttentionProjects",
              "type": "string",
              "required": true,
              "fieldRef": "ProjectDashboard.costAttentionProjects"
            },
            {
              "name": "upcomingTasks",
              "type": "string",
              "required": true,
              "fieldRef": "ProjectDashboard.upcomingTasks"
            }
          ]
        }
      }
    ],
    "mdmRefs": []
  }
} as const;

export default inspectProjectDashboardUsecase;

export const pipeline = [
  {
    "id": "inspectProjectDashboard__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectProjectDashboard.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/inspectProjectDashboard.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/projectDashboardRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/projectDashboard.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/project.d.ts"
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
