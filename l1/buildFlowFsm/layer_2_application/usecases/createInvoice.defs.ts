/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/createInvoice.defs.ts" enhancement="_blank"/>

export const createInvoiceUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "createInvoice",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "createInvoice",
    "ports": [
      "Invoice",
      "ChangeOrder",
      "Client",
      "InvoiceChangeOrder",
      "Project"
    ],
    "rulesApplied": [
      "invoiceIncludesApprovedChangeOrdersOnly",
      "invoiceRequiresClientAndProject"
    ],
    "functions": [
      {
        "functionName": "createInvoice",
        "inputTypeName": "CreateInvoiceInput",
        "outputTypeName": "CreateInvoiceOutput",
        "input": [
          {
            "name": "clientId",
            "type": "string",
            "required": true,
            "description": "Cliente",
            "ofEntity": "Client",
            "fieldRef": "Client.clientId",
            "item": {
              "fields": []
            }
          },
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
            "name": "commercialReference",
            "type": "string",
            "required": true,
            "description": "Referência comercial que identifica a fatura para faturamento e consulta do cliente.",
            "ofEntity": "Invoice",
            "fieldRef": "Invoice.commercialReference",
            "item": {
              "fields": []
            }
          },
          {
            "name": "amount",
            "type": "number",
            "required": true,
            "description": "Valor comercial total faturado para a obra.",
            "ofEntity": "Invoice",
            "fieldRef": "Invoice.amount",
            "item": {
              "fields": []
            }
          }
        ],
        "output": [
          {
            "name": "invoiceId",
            "type": "string",
            "required": true,
            "ofEntity": "Invoice"
          },
          {
            "name": "clientId",
            "type": "string",
            "required": true,
            "ofEntity": "Invoice"
          },
          {
            "name": "projectId",
            "type": "string",
            "required": true,
            "ofEntity": "Invoice"
          },
          {
            "name": "commercialReference",
            "type": "string",
            "required": true,
            "ofEntity": "Invoice"
          },
          {
            "name": "amount",
            "type": "number",
            "required": true,
            "ofEntity": "Invoice"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "Invoice"
          }
        ],
        "ports": [
          "Invoice",
          "ChangeOrder",
          "Client",
          "InvoiceChangeOrder",
          "Project"
        ],
        "rulesApplied": [
          "invoiceIncludesApprovedChangeOrdersOnly",
          "invoiceRequiresClientAndProject"
        ],
        "transactional": true,
        "steps": [
          "Validate that clientId references an existing Client; otherwise reject with rule invoiceRequiresClientAndProject.",
          "Validate that projectId references an existing Project and that the project belongs to clientId; otherwise reject with rule invoiceRequiresClientAndProject.",
          "Load ChangeOrder records for the project and client and select only records with status approved; reject any invoice composition that would include a non-approved change order with rule invoiceIncludesApprovedChangeOrdersOnly.",
          "Create an Invoice with a generated invoiceId, the supplied clientId, projectId, commercialReference, amount, and status issued.",
          "Persist the Invoice through the Invoice port in the transaction.",
          "Return exactly invoiceId, clientId, projectId, commercialReference, amount, and status from the created invoice."
        ],
        "outputShape": {
          "kind": "object",
          "fields": [
            {
              "name": "invoiceId",
              "type": "string",
              "required": true,
              "fieldRef": "Invoice.invoiceId"
            },
            {
              "name": "clientId",
              "type": "string",
              "required": true,
              "fieldRef": "Invoice.clientId"
            },
            {
              "name": "projectId",
              "type": "string",
              "required": true,
              "fieldRef": "Invoice.projectId"
            },
            {
              "name": "commercialReference",
              "type": "string",
              "required": true,
              "fieldRef": "Invoice.commercialReference"
            },
            {
              "name": "amount",
              "type": "number",
              "required": true,
              "fieldRef": "Invoice.amount"
            },
            {
              "name": "status",
              "type": "string",
              "required": true,
              "fieldRef": "Invoice.status"
            }
          ]
        }
      }
    ],
    "mdmRefs": []
  }
} as const;

export default createInvoiceUsecase;

export const pipeline = [
  {
    "id": "createInvoice__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/createInvoice.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/createInvoice.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/invoiceRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/changeOrderRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/clientRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/invoiceChangeOrderRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/invoice.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/changeOrder.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/client.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/invoiceChangeOrder.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/project.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "rulesApplied": [
      "invoiceIncludesApprovedChangeOrdersOnly",
      "invoiceRequiresClientAndProject"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
