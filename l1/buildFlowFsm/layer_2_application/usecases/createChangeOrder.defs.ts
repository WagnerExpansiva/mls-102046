/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/createChangeOrder.defs.ts" enhancement="_blank"/>

export const createChangeOrderUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "createChangeOrder",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "createChangeOrder",
    "ports": [
      "ChangeOrder",
      "Client",
      "Project"
    ],
    "rulesApplied": [
      "changeOrderRequiresClientAndProject"
    ],
    "functions": [
      {
        "functionName": "createChangeOrder",
        "inputTypeName": "CreateChangeOrderInput",
        "outputTypeName": "CreateChangeOrderOutput",
        "input": [
          {
            "name": "clientClientId",
            "type": "string",
            "required": true,
            "description": "Cliente",
            "fieldRef": "Client.clientId",
            "item": {
              "fields": []
            }
          },
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
            "name": "description",
            "type": "string",
            "required": true,
            "description": "Descrição da alteração proposta na obra para avaliação gerencial e comunicação ao cliente.",
            "ofEntity": "ChangeOrder",
            "fieldRef": "ChangeOrder.description",
            "item": {
              "fields": []
            }
          },
          {
            "name": "scopeImpact",
            "type": "string",
            "required": true,
            "description": "Impacto proposto da alteração no escopo da obra.",
            "ofEntity": "ChangeOrder",
            "fieldRef": "ChangeOrder.scopeImpact",
            "item": {
              "fields": []
            }
          },
          {
            "name": "scheduleImpact",
            "type": "string",
            "required": true,
            "description": "Impacto proposto da alteração no prazo de execução da obra.",
            "ofEntity": "ChangeOrder",
            "fieldRef": "ChangeOrder.scheduleImpact",
            "item": {
              "fields": []
            }
          },
          {
            "name": "changeAmount",
            "type": "number",
            "required": true,
            "description": "Valor comercial da alteração proposto para aprovação do cliente, custeio e faturamento.",
            "ofEntity": "ChangeOrder",
            "fieldRef": "ChangeOrder.changeAmount",
            "item": {
              "fields": []
            }
          }
        ],
        "output": [
          {
            "name": "changeOrderId",
            "type": "string",
            "required": true,
            "ofEntity": "ChangeOrder"
          },
          {
            "name": "clientRef",
            "type": "string",
            "required": true,
            "ofEntity": "ChangeOrder"
          },
          {
            "name": "projectRef",
            "type": "string",
            "required": true,
            "ofEntity": "ChangeOrder"
          },
          {
            "name": "description",
            "type": "string",
            "required": true,
            "ofEntity": "ChangeOrder"
          },
          {
            "name": "scopeImpact",
            "type": "string",
            "required": true,
            "ofEntity": "ChangeOrder"
          },
          {
            "name": "scheduleImpact",
            "type": "string",
            "required": true,
            "ofEntity": "ChangeOrder"
          },
          {
            "name": "changeAmount",
            "type": "number",
            "required": true,
            "ofEntity": "ChangeOrder"
          },
          {
            "name": "submittedAt",
            "type": "string",
            "required": true,
            "ofEntity": "ChangeOrder"
          },
          {
            "name": "forwardedForClientApprovalAt",
            "type": "string",
            "required": false,
            "ofEntity": "ChangeOrder"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "ChangeOrder"
          }
        ],
        "ports": [
          "ChangeOrder",
          "Client",
          "Project"
        ],
        "rulesApplied": [
          "changeOrderRequiresClientAndProject"
        ],
        "transactional": true,
        "steps": [
          "Load the Client through the Client port using clientClientId and fail validation with rule changeOrderRequiresClientAndProject if it does not exist.",
          "Load the Project through the Project port using projectProjectId and fail validation with rule changeOrderRequiresClientAndProject if it does not exist or its clientId does not match the selected client.",
          "Apply changeOrderRequiresClientAndProject inline before persistence.",
          "Create a ChangeOrder with a generated changeOrderId, ctx.clock submittedAt, status submitted, the validated clientRef and projectRef, and the supplied proposal fields.",
          "Persist the ChangeOrder through the ChangeOrder port within the transaction and return the complete canonical output shape."
        ],
        "outputShape": {
          "kind": "object",
          "fields": [
            {
              "name": "changeOrderId",
              "type": "string",
              "required": true,
              "fieldRef": "ChangeOrder.changeOrderId"
            },
            {
              "name": "clientRef",
              "type": "string",
              "required": true,
              "fieldRef": "ChangeOrder.clientRef"
            },
            {
              "name": "projectRef",
              "type": "string",
              "required": true,
              "fieldRef": "ChangeOrder.projectRef"
            },
            {
              "name": "description",
              "type": "string",
              "required": true,
              "fieldRef": "ChangeOrder.description"
            },
            {
              "name": "scopeImpact",
              "type": "string",
              "required": true,
              "fieldRef": "ChangeOrder.scopeImpact"
            },
            {
              "name": "scheduleImpact",
              "type": "string",
              "required": true,
              "fieldRef": "ChangeOrder.scheduleImpact"
            },
            {
              "name": "changeAmount",
              "type": "number",
              "required": true,
              "fieldRef": "ChangeOrder.changeAmount"
            },
            {
              "name": "submittedAt",
              "type": "string",
              "required": true,
              "fieldRef": "ChangeOrder.submittedAt"
            },
            {
              "name": "forwardedForClientApprovalAt",
              "type": "string",
              "required": false,
              "fieldRef": "ChangeOrder.forwardedForClientApprovalAt"
            },
            {
              "name": "status",
              "type": "string",
              "required": true,
              "fieldRef": "ChangeOrder.status"
            }
          ]
        }
      }
    ],
    "mdmRefs": []
  }
} as const;

export default createChangeOrderUsecase;

export const pipeline = [
  {
    "id": "createChangeOrder__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/createChangeOrder.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/createChangeOrder.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/changeOrderRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/clientRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/changeOrder.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/client.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/project.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "rulesApplied": [
      "changeOrderRequiresClientAndProject"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
