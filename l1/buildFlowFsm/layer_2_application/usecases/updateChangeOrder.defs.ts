/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateChangeOrder.defs.ts" enhancement="_blank"/>

export const updateChangeOrderUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "updateChangeOrder",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "updateChangeOrder",
    "ports": [
      "ChangeOrder",
      "Client",
      "Project"
    ],
    "rulesApplied": [
      "changeOrderRequiresClientAndProject",
      "managerActionableChangeOrder",
      "clientApprovableChangeOrder",
      "approvedBillableChangeOrder",
      "clientVisibleApprovedChangeOrder"
    ],
    "functions": [
      {
        "functionName": "updateChangeOrder",
        "inputTypeName": "UpdateChangeOrderInput",
        "outputTypeName": "UpdateChangeOrderOutput",
        "input": [
          {
            "name": "changeOrderId",
            "type": "string",
            "required": true,
            "description": "Identificador estável da ordem de mudança, transportado entre as etapas conectadas.",
            "ofEntity": "ChangeOrder",
            "fieldRef": "ChangeOrder.changeOrderId",
            "item": {
              "fields": []
            }
          },
          {
            "name": "clientRef",
            "type": "string",
            "required": true,
            "description": "Referência de contexto ao cliente para o qual a alteração é proposta, selecionada no catálogo compartilhado.",
            "ofEntity": "ChangeOrder",
            "fieldRef": "ChangeOrder.clientRef",
            "item": {
              "fields": []
            }
          },
          {
            "name": "projectRef",
            "type": "string",
            "required": true,
            "description": "Referência de contexto à obra do cliente à qual a alteração está vinculada.",
            "ofEntity": "ChangeOrder",
            "fieldRef": "ChangeOrder.projectRef",
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
          "changeOrderRequiresClientAndProject",
          "managerActionableChangeOrder",
          "clientApprovableChangeOrder",
          "approvedBillableChangeOrder",
          "clientVisibleApprovedChangeOrder"
        ],
        "transactional": true,
        "steps": [
          "Within one transaction, load the ChangeOrder by changeOrderId through the ChangeOrder port.",
          "Validate that the referenced Client and Project exist through their ports and that the Project belongs to the selected Client; apply changeOrderRequiresClientAndProject, including the rule id in validation failures.",
          "Validate the current status and requested transition against managerActionableChangeOrder, clientApprovableChangeOrder, approvedBillableChangeOrder, and clientVisibleApprovedChangeOrder; reject blocked transitions with the corresponding rule id in error details.",
          "Apply the supplied writable fields to the ChangeOrder, preserve server-managed submittedAt unless the domain transition requires setting it, resolve status and timestamps with ctx.clock, and save the ChangeOrder through its port.",
          "Return exactly the declared ChangeOrder projection, including submittedAt and forwardedForClientApprovalAt."
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

export default updateChangeOrderUsecase;

export const pipeline = [
  {
    "id": "updateChangeOrder__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateChangeOrder.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateChangeOrder.defs.ts",
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
      "changeOrderRequiresClientAndProject",
      "managerActionableChangeOrder",
      "clientApprovableChangeOrder",
      "approvedBillableChangeOrder",
      "clientVisibleApprovedChangeOrder"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
