/// <mls fileReference="_102046_/l4/buildFlowFsm/ontology/index.defs.ts" enhancement="_blank"/>

import type { Ns4OntologyIndexArtifact } from '/_102020_/l2/agentNewSolution4/types.js';

export const buildFlowFsmOntologyIndex = {
  "schemaVersion": "2026-08-11-ns4-ontology-v6",
  "moduleName": "buildFlowFsm",
  "userLanguage": "pt-BR",
  "solutionMode": "new",
  "title": "Ontologia de negócios do BuildFlow FSM",
  "businessDomain": "Operações de construção, reforma e serviços de campo nos Estados Unidos",
  "entities": [
    {
      "entityId": "PlatformUser",
      "title": "Usuário da plataforma",
      "kind": "core",
      "storage": {
        "target": "external",
        "scope": "platform"
      },
      "definitionRef": "l4/buildFlowFsm/ontology/PlatformUser.defs.ts"
    },
    {
      "entityId": "Client",
      "title": "Cliente",
      "kind": "mdm",
      "storage": {
        "target": "mdm",
        "scope": "organization",
        "idField": "clientId",
        "mdmType": "buildFlowFsm.Client"
      },
      "definitionRef": "l4/buildFlowFsm/ontology/Client.defs.ts"
    },
    {
      "entityId": "ClientPortalAccess",
      "title": "Vínculo de acesso do cliente",
      "kind": "core",
      "storage": {
        "target": "moduleDatabase",
        "scope": "module",
        "idField": "clientPortalAccessId"
      },
      "definitionRef": "l4/buildFlowFsm/ontology/ClientPortalAccess.defs.ts"
    },
    {
      "entityId": "FieldWorker",
      "title": "Trabalhador de campo",
      "kind": "core",
      "storage": {
        "target": "external",
        "scope": "platform"
      },
      "definitionRef": "l4/buildFlowFsm/ontology/FieldWorker.defs.ts"
    },
    {
      "entityId": "FieldCoordinator",
      "title": "Coordenador de campo",
      "kind": "core",
      "storage": {
        "target": "external",
        "scope": "platform"
      },
      "definitionRef": "l4/buildFlowFsm/ontology/FieldCoordinator.defs.ts"
    },
    {
      "entityId": "Project",
      "title": "Obra",
      "kind": "mdm",
      "storage": {
        "target": "mdm",
        "scope": "organization",
        "idField": "projectId",
        "mdmType": "buildFlowFsm.Project"
      },
      "definitionRef": "l4/buildFlowFsm/ontology/Project.defs.ts"
    },
    {
      "entityId": "ProjectCoordinationAssignment",
      "title": "Atribuição de coordenação da obra",
      "kind": "core",
      "storage": {
        "target": "moduleDatabase",
        "scope": "module",
        "idField": "projectCoordinationAssignmentId"
      },
      "definitionRef": "l4/buildFlowFsm/ontology/ProjectCoordinationAssignment.defs.ts"
    },
    {
      "entityId": "InventoryItem",
      "title": "Item de estoque",
      "kind": "mdm",
      "storage": {
        "target": "mdm",
        "scope": "organization",
        "idField": "inventoryItemId",
        "mdmType": "buildFlowFsm.InventoryItem"
      },
      "definitionRef": "l4/buildFlowFsm/ontology/InventoryItem.defs.ts"
    },
    {
      "entityId": "InventoryBalance",
      "title": "Saldo de estoque",
      "kind": "core",
      "storage": {
        "target": "moduleDatabase",
        "scope": "module",
        "idField": "inventoryBalanceId"
      },
      "definitionRef": "l4/buildFlowFsm/ontology/InventoryBalance.defs.ts"
    },
    {
      "entityId": "WorkTask",
      "title": "Tarefa de trabalho",
      "kind": "core",
      "storage": {
        "target": "moduleDatabase",
        "scope": "module",
        "idField": "workTaskId"
      },
      "definitionRef": "l4/buildFlowFsm/ontology/WorkTask.defs.ts"
    },
    {
      "entityId": "TimeLog",
      "title": "Registro de horas",
      "kind": "core",
      "storage": {
        "target": "moduleDatabase",
        "scope": "module",
        "idField": "timeLogId"
      },
      "definitionRef": "l4/buildFlowFsm/ontology/TimeLog.defs.ts"
    },
    {
      "entityId": "MaterialUsage",
      "title": "Consumo de material",
      "kind": "core",
      "storage": {
        "target": "moduleDatabase",
        "scope": "module",
        "idField": "materialUsageId"
      },
      "definitionRef": "l4/buildFlowFsm/ontology/MaterialUsage.defs.ts"
    },
    {
      "entityId": "ChangeOrder",
      "title": "Ordem de mudança",
      "kind": "core",
      "storage": {
        "target": "moduleDatabase",
        "scope": "module",
        "idField": "changeOrderId"
      },
      "definitionRef": "l4/buildFlowFsm/ontology/ChangeOrder.defs.ts"
    },
    {
      "entityId": "ChangeOrderDecision",
      "title": "Decisão sobre ordem de mudança",
      "kind": "core",
      "storage": {
        "target": "moduleDatabase",
        "scope": "module",
        "idField": "changeOrderDecisionId"
      },
      "definitionRef": "l4/buildFlowFsm/ontology/ChangeOrderDecision.defs.ts"
    },
    {
      "entityId": "Invoice",
      "title": "Fatura",
      "kind": "core",
      "storage": {
        "target": "moduleDatabase",
        "scope": "module",
        "idField": "invoiceId"
      },
      "definitionRef": "l4/buildFlowFsm/ontology/Invoice.defs.ts"
    },
    {
      "entityId": "InvoiceChangeOrder",
      "title": "Aplicação de ordem de mudança na fatura",
      "kind": "core",
      "storage": {
        "target": "moduleDatabase",
        "scope": "module",
        "idField": "invoiceChangeOrderId"
      },
      "definitionRef": "l4/buildFlowFsm/ontology/InvoiceChangeOrder.defs.ts"
    },
    {
      "entityId": "StatusReport",
      "title": "Relatório de status",
      "kind": "core",
      "storage": {
        "target": "moduleDatabase",
        "scope": "module",
        "idField": "statusReportId"
      },
      "definitionRef": "l4/buildFlowFsm/ontology/StatusReport.defs.ts"
    },
    {
      "entityId": "ProjectDashboard",
      "title": "Painel de portfólio de obras",
      "kind": "projection",
      "storage": {
        "target": "derived",
        "scope": "none"
      },
      "definitionRef": "l4/buildFlowFsm/ontology/ProjectDashboard.defs.ts"
    },
    {
      "entityId": "ProjectTimeline",
      "title": "Cronograma da obra",
      "kind": "projection",
      "storage": {
        "target": "derived",
        "scope": "none"
      },
      "definitionRef": "l4/buildFlowFsm/ontology/ProjectTimeline.defs.ts"
    },
    {
      "entityId": "ProjectExecutionOverview",
      "title": "Visão consolidada de execução da obra",
      "kind": "projection",
      "storage": {
        "target": "derived",
        "scope": "none"
      },
      "definitionRef": "l4/buildFlowFsm/ontology/ProjectExecutionOverview.defs.ts"
    },
    {
      "entityId": "ScheduleRiskAssessment",
      "title": "Avaliação de risco de atraso",
      "kind": "projection",
      "storage": {
        "target": "derived",
        "scope": "none"
      },
      "definitionRef": "l4/buildFlowFsm/ontology/ScheduleRiskAssessment.defs.ts"
    },
    {
      "entityId": "ClientBillingSummary",
      "title": "Resumo de faturamento do cliente",
      "kind": "projection",
      "storage": {
        "target": "derived",
        "scope": "none"
      },
      "definitionRef": "l4/buildFlowFsm/ontology/ClientBillingSummary.defs.ts"
    }
  ],
  "relationships": [
    {
      "relationshipId": "clientPortalAccessBelongsToClient",
      "fromEntity": "ClientPortalAccess",
      "toEntity": "Client",
      "type": "manyToOne",
      "required": true,
      "description": "Cada vínculo externo identifica o cliente ao qual o usuário autenticado está associado.",
      "persistence": {
        "mode": "crossStoreReference"
      },
      "realization": {
        "kind": "fieldReference",
        "ownerEntity": "ClientPortalAccess",
        "from": {
          "entityId": "ClientPortalAccess",
          "fieldIds": [
            "clientId"
          ]
        },
        "to": {
          "entityId": "Client",
          "fieldIds": [
            "clientId"
          ]
        },
        "description": "O vínculo de acesso armazena o identificador do cliente MDM associado."
      }
    },
    {
      "relationshipId": "clientPortalAccessMapsToPlatformUser",
      "fromEntity": "ClientPortalAccess",
      "toEntity": "PlatformUser",
      "type": "manyToOne",
      "required": true,
      "description": "Cada vínculo de cliente é associado a um usuário externo fornecido pela plataforma.",
      "persistence": {
        "mode": "externalReference"
      },
      "realization": {
        "kind": "externalReference",
        "ownerEntity": "ClientPortalAccess",
        "from": {
          "entityId": "ClientPortalAccess",
          "fieldIds": [
            "platformUserId"
          ]
        },
        "to": {
          "entityId": "PlatformUser",
          "fieldIds": [
            "platformUserId"
          ]
        },
        "description": "O vínculo de acesso referencia o usuário externo autenticado pela plataforma."
      }
    },
    {
      "relationshipId": "fieldWorkerMapsToPlatformUser",
      "fromEntity": "FieldWorker",
      "toEntity": "PlatformUser",
      "type": "oneToOne",
      "required": true,
      "description": "O trabalhador de campo é uma referência qualificada a um usuário da plataforma.",
      "persistence": {
        "mode": "externalReference"
      },
      "realization": {
        "kind": "externalReference",
        "ownerEntity": "FieldWorker",
        "from": {
          "entityId": "FieldWorker",
          "fieldIds": [
            "platformUserId"
          ]
        },
        "to": {
          "entityId": "PlatformUser",
          "fieldIds": [
            "platformUserId"
          ]
        },
        "description": "O trabalhador de campo é qualificado pelo identificador do usuário da plataforma."
      }
    },
    {
      "relationshipId": "fieldCoordinatorMapsToPlatformUser",
      "fromEntity": "FieldCoordinator",
      "toEntity": "PlatformUser",
      "type": "oneToOne",
      "required": true,
      "description": "O coordenador de campo é uma referência qualificada a um usuário da plataforma.",
      "persistence": {
        "mode": "externalReference"
      },
      "realization": {
        "kind": "externalReference",
        "ownerEntity": "FieldCoordinator",
        "from": {
          "entityId": "FieldCoordinator",
          "fieldIds": [
            "platformUserRef"
          ]
        },
        "to": {
          "entityId": "PlatformUser",
          "fieldIds": [
            "platformUserId"
          ]
        },
        "description": "O coordenador de campo referencia o usuário organizacional da plataforma."
      }
    },
    {
      "relationshipId": "projectBelongsToClient",
      "fromEntity": "Project",
      "toEntity": "Client",
      "type": "manyToOne",
      "required": true,
      "description": "Cada obra pertence a um cliente cadastrado.",
      "persistence": {
        "mode": "mdmRelationship"
      },
      "realization": {
        "kind": "mdmRelationship",
        "ownerEntity": "Project",
        "from": {
          "entityId": "Project",
          "fieldIds": [
            "projectId"
          ]
        },
        "to": {
          "entityId": "Client",
          "fieldIds": [
            "clientId"
          ]
        },
        "description": "A associação entre as identidades mestre da obra e do cliente é mantida pela relação MDM."
      }
    },
    {
      "relationshipId": "projectCoordinationAssignmentForProject",
      "fromEntity": "ProjectCoordinationAssignment",
      "toEntity": "Project",
      "type": "manyToOne",
      "required": true,
      "description": "O encaminhamento operacional sempre se refere a uma obra específica.",
      "persistence": {
        "mode": "crossStoreReference"
      },
      "realization": {
        "kind": "fieldReference",
        "ownerEntity": "ProjectCoordinationAssignment",
        "from": {
          "entityId": "ProjectCoordinationAssignment",
          "fieldIds": [
            "projectId"
          ]
        },
        "to": {
          "entityId": "Project",
          "fieldIds": [
            "projectId"
          ]
        },
        "description": "O encaminhamento operacional armazena a obra MDM acompanhada."
      }
    },
    {
      "relationshipId": "projectCoordinationAssignmentAssignedToCoordinator",
      "fromEntity": "ProjectCoordinationAssignment",
      "toEntity": "FieldCoordinator",
      "type": "manyToOne",
      "required": true,
      "description": "O encaminhamento torna um coordenador específico responsável pelo acompanhamento de campo.",
      "persistence": {
        "mode": "externalReference"
      },
      "realization": {
        "kind": "externalReference",
        "ownerEntity": "ProjectCoordinationAssignment",
        "from": {
          "entityId": "ProjectCoordinationAssignment",
          "fieldIds": [
            "fieldCoordinatorId"
          ]
        },
        "to": {
          "entityId": "FieldCoordinator",
          "fieldIds": [
            "platformUserRef"
          ]
        },
        "description": "O encaminhamento referencia o coordenador de campo responsável."
      }
    },
    {
      "relationshipId": "inventoryBalanceForInventoryItem",
      "fromEntity": "InventoryBalance",
      "toEntity": "InventoryItem",
      "type": "manyToOne",
      "required": true,
      "description": "Cada saldo operacional corresponde a um item do catálogo de materiais.",
      "persistence": {
        "mode": "crossStoreReference"
      },
      "realization": {
        "kind": "fieldReference",
        "ownerEntity": "InventoryBalance",
        "from": {
          "entityId": "InventoryBalance",
          "fieldIds": [
            "inventoryItemId"
          ]
        },
        "to": {
          "entityId": "InventoryItem",
          "fieldIds": [
            "inventoryItemId"
          ]
        },
        "description": "O saldo operacional armazena a referência ao item do catálogo MDM."
      }
    },
    {
      "relationshipId": "workTaskBelongsToProject",
      "fromEntity": "WorkTask",
      "toEntity": "Project",
      "type": "manyToOne",
      "required": true,
      "description": "Cada tarefa é planejada e executada no contexto de uma obra.",
      "persistence": {
        "mode": "crossStoreReference"
      },
      "realization": {
        "kind": "fieldReference",
        "ownerEntity": "WorkTask",
        "from": {
          "entityId": "WorkTask",
          "fieldIds": [
            "projectId"
          ]
        },
        "to": {
          "entityId": "Project",
          "fieldIds": [
            "projectId"
          ]
        },
        "description": "A tarefa armazena a obra em cujo contexto é executada."
      }
    },
    {
      "relationshipId": "workTaskAssignedToFieldWorker",
      "fromEntity": "WorkTask",
      "toEntity": "FieldWorker",
      "type": "manyToOne",
      "required": true,
      "description": "Cada tarefa registrada já possui um trabalhador responsável para execução e atualização.",
      "persistence": {
        "mode": "externalReference"
      },
      "realization": {
        "kind": "externalReference",
        "ownerEntity": "WorkTask",
        "from": {
          "entityId": "WorkTask",
          "fieldIds": [
            "assignedFieldWorkerId"
          ]
        },
        "to": {
          "entityId": "FieldWorker",
          "fieldIds": [
            "platformUserId"
          ]
        },
        "description": "A tarefa referencia o trabalhador de campo responsável."
      }
    },
    {
      "relationshipId": "timeLogForWorkTask",
      "fromEntity": "TimeLog",
      "toEntity": "WorkTask",
      "type": "manyToOne",
      "required": true,
      "description": "Cada apontamento de horas é atribuído a uma tarefa, que disponibiliza o contexto da obra.",
      "persistence": {
        "mode": "moduleReference"
      },
      "realization": {
        "kind": "fieldReference",
        "ownerEntity": "TimeLog",
        "from": {
          "entityId": "TimeLog",
          "fieldIds": [
            "workTaskId"
          ]
        },
        "to": {
          "entityId": "WorkTask",
          "fieldIds": [
            "workTaskId"
          ]
        },
        "description": "O apontamento de horas armazena a tarefa à qual as horas são atribuídas."
      }
    },
    {
      "relationshipId": "timeLogRecordedByFieldWorker",
      "fromEntity": "TimeLog",
      "toEntity": "FieldWorker",
      "type": "manyToOne",
      "required": true,
      "description": "Cada apontamento identifica o trabalhador que realizou as horas.",
      "persistence": {
        "mode": "externalReference"
      },
      "realization": {
        "kind": "externalReference",
        "ownerEntity": "TimeLog",
        "from": {
          "entityId": "TimeLog",
          "fieldIds": [
            "fieldWorkerId"
          ]
        },
        "to": {
          "entityId": "FieldWorker",
          "fieldIds": [
            "platformUserId"
          ]
        },
        "description": "O apontamento referencia o trabalhador que realizou as horas."
      }
    },
    {
      "relationshipId": "materialUsageForProject",
      "fromEntity": "MaterialUsage",
      "toEntity": "Project",
      "type": "manyToOne",
      "required": true,
      "description": "Cada consumo é registrado diretamente contra uma obra.",
      "persistence": {
        "mode": "crossStoreReference"
      },
      "realization": {
        "kind": "fieldReference",
        "ownerEntity": "MaterialUsage",
        "from": {
          "entityId": "MaterialUsage",
          "fieldIds": [
            "projectId"
          ]
        },
        "to": {
          "entityId": "Project",
          "fieldIds": [
            "projectId"
          ]
        },
        "description": "O consumo armazena a obra contra a qual o material foi utilizado."
      }
    },
    {
      "relationshipId": "materialUsageForInventoryItem",
      "fromEntity": "MaterialUsage",
      "toEntity": "InventoryItem",
      "type": "manyToOne",
      "required": true,
      "description": "Cada consumo identifica o item de material efetivamente utilizado.",
      "persistence": {
        "mode": "crossStoreReference"
      },
      "realization": {
        "kind": "fieldReference",
        "ownerEntity": "MaterialUsage",
        "from": {
          "entityId": "MaterialUsage",
          "fieldIds": [
            "inventoryItemId"
          ]
        },
        "to": {
          "entityId": "InventoryItem",
          "fieldIds": [
            "inventoryItemId"
          ]
        },
        "description": "O consumo armazena o item de catálogo efetivamente utilizado."
      }
    },
    {
      "relationshipId": "materialUsageDrawsFromInventoryBalance",
      "fromEntity": "MaterialUsage",
      "toEntity": "InventoryBalance",
      "type": "manyToOne",
      "required": true,
      "description": "Cada consumo é suportado por um saldo operacional disponível, preservando a rastreabilidade do estoque e do custo.",
      "persistence": {
        "mode": "moduleReference"
      },
      "realization": {
        "kind": "fieldReference",
        "ownerEntity": "MaterialUsage",
        "from": {
          "entityId": "MaterialUsage",
          "fieldIds": [
            "inventoryBalanceId"
          ]
        },
        "to": {
          "entityId": "InventoryBalance",
          "fieldIds": [
            "inventoryBalanceId"
          ]
        },
        "description": "O consumo referencia o saldo operacional que forneceu o material."
      }
    },
    {
      "relationshipId": "changeOrderForClient",
      "fromEntity": "ChangeOrder",
      "toEntity": "Client",
      "type": "manyToOne",
      "required": true,
      "description": "Cada ordem de mudança é proposta para um cliente específico.",
      "persistence": {
        "mode": "crossStoreReference"
      },
      "realization": {
        "kind": "fieldReference",
        "ownerEntity": "ChangeOrder",
        "from": {
          "entityId": "ChangeOrder",
          "fieldIds": [
            "clientRef"
          ]
        },
        "to": {
          "entityId": "Client",
          "fieldIds": [
            "clientId"
          ]
        },
        "description": "A ordem de mudança armazena o cliente para o qual foi proposta."
      }
    },
    {
      "relationshipId": "changeOrderForProject",
      "fromEntity": "ChangeOrder",
      "toEntity": "Project",
      "type": "manyToOne",
      "required": true,
      "description": "Cada ordem de mudança está vinculada à obra do cliente selecionado.",
      "persistence": {
        "mode": "crossStoreReference"
      },
      "realization": {
        "kind": "fieldReference",
        "ownerEntity": "ChangeOrder",
        "from": {
          "entityId": "ChangeOrder",
          "fieldIds": [
            "projectRef"
          ]
        },
        "to": {
          "entityId": "Project",
          "fieldIds": [
            "projectId"
          ]
        },
        "description": "A ordem de mudança armazena a obra afetada."
      }
    },
    {
      "relationshipId": "changeOrderDecisionForChangeOrder",
      "fromEntity": "ChangeOrderDecision",
      "toEntity": "ChangeOrder",
      "type": "manyToOne",
      "required": true,
      "description": "Cada decisão registrada trata uma ordem de mudança específica.",
      "persistence": {
        "mode": "moduleReference"
      },
      "realization": {
        "kind": "fieldReference",
        "ownerEntity": "ChangeOrderDecision",
        "from": {
          "entityId": "ChangeOrderDecision",
          "fieldIds": [
            "changeOrder"
          ]
        },
        "to": {
          "entityId": "ChangeOrder",
          "fieldIds": [
            "changeOrderId"
          ]
        },
        "description": "A decisão registrada referencia a ordem de mudança decidida."
      }
    },
    {
      "relationshipId": "changeOrderDecisionMadeByPlatformUser",
      "fromEntity": "ChangeOrderDecision",
      "toEntity": "PlatformUser",
      "type": "manyToOne",
      "required": true,
      "description": "A decisão mantém o usuário que a tomou para evidenciar aprovação do cliente ou recusa do gerente.",
      "persistence": {
        "mode": "externalReference"
      },
      "realization": {
        "kind": "externalReference",
        "ownerEntity": "ChangeOrderDecision",
        "from": {
          "entityId": "ChangeOrderDecision",
          "fieldIds": [
            "madeByPlatformUser"
          ]
        },
        "to": {
          "entityId": "PlatformUser",
          "fieldIds": [
            "platformUserId"
          ]
        },
        "description": "A decisão preserva o usuário da plataforma que a tomou."
      }
    },
    {
      "relationshipId": "invoiceForClient",
      "fromEntity": "Invoice",
      "toEntity": "Client",
      "type": "manyToOne",
      "required": true,
      "description": "Cada fatura é emitida para um cliente específico.",
      "persistence": {
        "mode": "crossStoreReference"
      },
      "realization": {
        "kind": "fieldReference",
        "ownerEntity": "Invoice",
        "from": {
          "entityId": "Invoice",
          "fieldIds": [
            "clientId"
          ]
        },
        "to": {
          "entityId": "Client",
          "fieldIds": [
            "clientId"
          ]
        },
        "description": "A fatura armazena o cliente faturado."
      }
    },
    {
      "relationshipId": "invoiceForProject",
      "fromEntity": "Invoice",
      "toEntity": "Project",
      "type": "manyToOne",
      "required": true,
      "description": "Cada fatura é emitida no contexto de uma obra do cliente.",
      "persistence": {
        "mode": "crossStoreReference"
      },
      "realization": {
        "kind": "fieldReference",
        "ownerEntity": "Invoice",
        "from": {
          "entityId": "Invoice",
          "fieldIds": [
            "projectId"
          ]
        },
        "to": {
          "entityId": "Project",
          "fieldIds": [
            "projectId"
          ]
        },
        "description": "A fatura armazena a obra em cujo contexto foi emitida."
      }
    },
    {
      "relationshipId": "invoiceChangeOrderForInvoice",
      "fromEntity": "InvoiceChangeOrder",
      "toEntity": "Invoice",
      "type": "manyToOne",
      "required": true,
      "description": "Cada aplicação comercial pertence a uma fatura emitida.",
      "persistence": {
        "mode": "moduleReference"
      },
      "realization": {
        "kind": "fieldReference",
        "ownerEntity": "InvoiceChangeOrder",
        "from": {
          "entityId": "InvoiceChangeOrder",
          "fieldIds": [
            "invoiceId"
          ]
        },
        "to": {
          "entityId": "Invoice",
          "fieldIds": [
            "invoiceId"
          ]
        },
        "description": "A aplicação comercial armazena a fatura que incorpora a alteração."
      }
    },
    {
      "relationshipId": "invoiceChangeOrderForChangeOrder",
      "fromEntity": "InvoiceChangeOrder",
      "toEntity": "ChangeOrder",
      "type": "manyToOne",
      "required": true,
      "description": "Cada aplicação vincula uma ordem de mudança aprovada à fatura que a incorpora.",
      "persistence": {
        "mode": "moduleReference"
      },
      "realization": {
        "kind": "fieldReference",
        "ownerEntity": "InvoiceChangeOrder",
        "from": {
          "entityId": "InvoiceChangeOrder",
          "fieldIds": [
            "changeOrderId"
          ]
        },
        "to": {
          "entityId": "ChangeOrder",
          "fieldIds": [
            "changeOrderId"
          ]
        },
        "description": "A aplicação comercial armazena a ordem de mudança faturada."
      }
    },
    {
      "relationshipId": "statusReportForProject",
      "fromEntity": "StatusReport",
      "toEntity": "Project",
      "type": "manyToOne",
      "required": true,
      "description": "Cada relatório comunica o status de uma obra específica.",
      "persistence": {
        "mode": "crossStoreReference"
      },
      "realization": {
        "kind": "fieldReference",
        "ownerEntity": "StatusReport",
        "from": {
          "entityId": "StatusReport",
          "fieldIds": [
            "projectId"
          ]
        },
        "to": {
          "entityId": "Project",
          "fieldIds": [
            "projectId"
          ]
        },
        "description": "O relatório armazena a obra cuja situação é comunicada."
      }
    },
    {
      "relationshipId": "projectDashboardIncludesProjects",
      "fromEntity": "ProjectDashboard",
      "toEntity": "Project",
      "type": "manyToMany",
      "required": false,
      "description": "O painel de portfólio apresenta as obras que satisfazem seus filtros organizacionais.",
      "persistence": {
        "mode": "derivedJoin"
      },
      "realization": {
        "kind": "derived",
        "ownerEntity": "ProjectDashboard",
        "from": {
          "entityId": "ProjectDashboard",
          "fieldIds": [
            "activeProjects"
          ]
        },
        "to": {
          "entityId": "Project",
          "fieldIds": [
            "projectId"
          ]
        },
        "description": "A coleção de obras ativas é derivada dos projetos que atendem aos filtros do painel."
      }
    },
    {
      "relationshipId": "projectTimelineForProject",
      "fromEntity": "ProjectTimeline",
      "toEntity": "Project",
      "type": "manyToOne",
      "required": true,
      "description": "Cada cronograma é apresentado no contexto de uma obra selecionada.",
      "persistence": {
        "mode": "derivedJoin"
      },
      "realization": {
        "kind": "derived",
        "ownerEntity": "ProjectTimeline",
        "from": {
          "entityId": "ProjectTimeline",
          "fieldIds": [
            "projectId"
          ]
        },
        "to": {
          "entityId": "Project",
          "fieldIds": [
            "projectId"
          ]
        },
        "description": "O cronograma é derivado para a obra identificada pelo seu contexto de projeto."
      }
    },
    {
      "relationshipId": "projectTimelineIncludesWorkTasks",
      "fromEntity": "ProjectTimeline",
      "toEntity": "WorkTask",
      "type": "manyToMany",
      "required": false,
      "description": "O cronograma organiza as tarefas da obra por sequência e prazo.",
      "persistence": {
        "mode": "derivedJoin"
      },
      "realization": {
        "kind": "derived",
        "ownerEntity": "ProjectTimeline",
        "from": {
          "entityId": "ProjectTimeline",
          "fieldIds": [
            "workTasks"
          ]
        },
        "to": {
          "entityId": "WorkTask",
          "fieldIds": [
            "workTaskId"
          ]
        },
        "description": "A lista derivada do cronograma contém as tarefas da obra organizadas por prazo e sequência."
      }
    },
    {
      "relationshipId": "projectExecutionOverviewForProject",
      "fromEntity": "ProjectExecutionOverview",
      "toEntity": "Project",
      "type": "manyToOne",
      "required": true,
      "description": "A visão consolidada é calculada para uma obra específica.",
      "persistence": {
        "mode": "derivedJoin"
      },
      "realization": {
        "kind": "derived",
        "ownerEntity": "ProjectExecutionOverview",
        "from": {
          "entityId": "ProjectExecutionOverview",
          "fieldIds": [
            "projectId"
          ]
        },
        "to": {
          "entityId": "Project",
          "fieldIds": [
            "projectId"
          ]
        },
        "description": "A visão de execução é calculada para a obra identificada em seu contexto."
      }
    },
    {
      "relationshipId": "projectExecutionOverviewIncludesWorkTasks",
      "fromEntity": "ProjectExecutionOverview",
      "toEntity": "WorkTask",
      "type": "manyToMany",
      "required": false,
      "description": "A visão de execução consolida andamento e prazos das tarefas da obra.",
      "persistence": {
        "mode": "derivedJoin"
      },
      "realization": {
        "kind": "derived",
        "ownerEntity": "ProjectExecutionOverview",
        "from": {
          "entityId": "ProjectExecutionOverview",
          "fieldIds": [
            "workTaskIds"
          ]
        },
        "to": {
          "entityId": "WorkTask",
          "fieldIds": [
            "workTaskId"
          ]
        },
        "description": "A visão consolida as tarefas derivadas vinculadas à obra."
      }
    },
    {
      "relationshipId": "projectExecutionOverviewIncludesTimeLogs",
      "fromEntity": "ProjectExecutionOverview",
      "toEntity": "TimeLog",
      "type": "manyToMany",
      "required": false,
      "description": "A visão de execução incorpora os apontamentos de horas que compõem custo e progresso.",
      "persistence": {
        "mode": "derivedJoin"
      },
      "realization": {
        "kind": "derived",
        "ownerEntity": "ProjectExecutionOverview",
        "from": {
          "entityId": "ProjectExecutionOverview",
          "fieldIds": [
            "timeLogIds"
          ]
        },
        "to": {
          "entityId": "TimeLog",
          "fieldIds": [
            "timeLogId"
          ]
        },
        "description": "A visão inclui os apontamentos de horas derivados para custo e progresso da obra."
      }
    },
    {
      "relationshipId": "projectExecutionOverviewIncludesMaterialUsages",
      "fromEntity": "ProjectExecutionOverview",
      "toEntity": "MaterialUsage",
      "type": "manyToMany",
      "required": false,
      "description": "A visão de execução incorpora os consumos de material da obra.",
      "persistence": {
        "mode": "derivedJoin"
      },
      "realization": {
        "kind": "derived",
        "ownerEntity": "ProjectExecutionOverview",
        "from": {
          "entityId": "ProjectExecutionOverview",
          "fieldIds": [
            "materialUsageIds"
          ]
        },
        "to": {
          "entityId": "MaterialUsage",
          "fieldIds": [
            "materialUsageId"
          ]
        },
        "description": "A visão inclui os consumos de material derivados para a obra."
      }
    },
    {
      "relationshipId": "projectExecutionOverviewIncludesChangeOrders",
      "fromEntity": "ProjectExecutionOverview",
      "toEntity": "ChangeOrder",
      "type": "manyToMany",
      "required": false,
      "description": "A visão de execução considera impactos de ordens de mudança conforme seu estado.",
      "persistence": {
        "mode": "derivedJoin"
      },
      "realization": {
        "kind": "derived",
        "ownerEntity": "ProjectExecutionOverview",
        "from": {
          "entityId": "ProjectExecutionOverview",
          "fieldIds": [
            "changeOrderIds"
          ]
        },
        "to": {
          "entityId": "ChangeOrder",
          "fieldIds": [
            "changeOrderId"
          ]
        },
        "description": "A visão inclui as ordens de mudança consideradas conforme seus estados."
      }
    },
    {
      "relationshipId": "scheduleRiskAssessmentForProject",
      "fromEntity": "ScheduleRiskAssessment",
      "toEntity": "Project",
      "type": "manyToOne",
      "required": true,
      "description": "Cada avaliação de risco é apresentada no contexto de uma obra.",
      "persistence": {
        "mode": "derivedJoin"
      },
      "realization": {
        "kind": "derived",
        "ownerEntity": "ScheduleRiskAssessment",
        "from": {
          "entityId": "ScheduleRiskAssessment",
          "fieldIds": [
            "projectId"
          ]
        },
        "to": {
          "entityId": "Project",
          "fieldIds": [
            "projectId"
          ]
        },
        "description": "A avaliação de risco é derivada no contexto da obra identificada."
      }
    },
    {
      "relationshipId": "scheduleRiskAssessmentForWorkTask",
      "fromEntity": "ScheduleRiskAssessment",
      "toEntity": "WorkTask",
      "type": "manyToOne",
      "required": true,
      "description": "Cada avaliação identifica a tarefa não concluída à qual o risco se refere.",
      "persistence": {
        "mode": "derivedJoin"
      },
      "realization": {
        "kind": "derived",
        "ownerEntity": "ScheduleRiskAssessment",
        "from": {
          "entityId": "ScheduleRiskAssessment",
          "fieldIds": [
            "workTaskId"
          ]
        },
        "to": {
          "entityId": "WorkTask",
          "fieldIds": [
            "workTaskId"
          ]
        },
        "description": "A avaliação identifica a tarefa não concluída analisada quanto ao risco."
      }
    },
    {
      "relationshipId": "clientBillingSummaryForClient",
      "fromEntity": "ClientBillingSummary",
      "toEntity": "Client",
      "type": "manyToOne",
      "required": true,
      "description": "O resumo de faturamento é calculado para o cliente selecionado.",
      "persistence": {
        "mode": "derivedJoin"
      },
      "realization": {
        "kind": "derived",
        "ownerEntity": "ClientBillingSummary",
        "from": {
          "entityId": "ClientBillingSummary",
          "fieldIds": [
            "clientId"
          ]
        },
        "to": {
          "entityId": "Client",
          "fieldIds": [
            "clientId"
          ]
        },
        "description": "O resumo de faturamento é calculado para o cliente selecionado."
      }
    },
    {
      "relationshipId": "clientBillingSummaryForProject",
      "fromEntity": "ClientBillingSummary",
      "toEntity": "Project",
      "type": "manyToOne",
      "required": true,
      "description": "O resumo de faturamento é segmentado pela obra faturável do cliente.",
      "persistence": {
        "mode": "derivedJoin"
      },
      "realization": {
        "kind": "derived",
        "ownerEntity": "ClientBillingSummary",
        "from": {
          "entityId": "ClientBillingSummary",
          "fieldIds": [
            "projectId"
          ]
        },
        "to": {
          "entityId": "Project",
          "fieldIds": [
            "projectId"
          ]
        },
        "description": "O resumo de faturamento é segmentado pela obra faturável identificada."
      }
    },
    {
      "relationshipId": "clientBillingSummaryIncludesInvoices",
      "fromEntity": "ClientBillingSummary",
      "toEntity": "Invoice",
      "type": "manyToMany",
      "required": false,
      "description": "O resumo consolida faturas da obra e seus valores disponibilizados.",
      "persistence": {
        "mode": "derivedJoin"
      },
      "realization": {
        "kind": "derived",
        "ownerEntity": "ClientBillingSummary",
        "from": {
          "entityId": "ClientBillingSummary",
          "fieldIds": [
            "invoiceReferences"
          ]
        },
        "to": {
          "entityId": "Invoice",
          "fieldIds": [
            "invoiceId"
          ]
        },
        "description": "As referências derivadas consolidam as faturas da obra no resumo comercial."
      }
    },
    {
      "relationshipId": "clientBillingSummaryIncludesChangeOrders",
      "fromEntity": "ClientBillingSummary",
      "toEntity": "ChangeOrder",
      "type": "manyToMany",
      "required": false,
      "description": "O resumo consolida apenas ordens de mudança aprovadas e seus reflexos comerciais.",
      "persistence": {
        "mode": "derivedJoin"
      },
      "realization": {
        "kind": "derived",
        "ownerEntity": "ClientBillingSummary",
        "from": {
          "entityId": "ClientBillingSummary",
          "fieldIds": [
            "approvedChangeOrderReferences"
          ]
        },
        "to": {
          "entityId": "ChangeOrder",
          "fieldIds": [
            "changeOrderId"
          ]
        },
        "description": "As referências derivadas consolidam somente as ordens de mudança aprovadas."
      }
    },
    {
      "relationshipId": "statusReportBasedOnProjectExecutionOverview",
      "fromEntity": "StatusReport",
      "toEntity": "ProjectExecutionOverview",
      "type": "manyToOne",
      "required": true,
      "description": "O relatório é gerado a partir da visão consolidada de execução da obra.",
      "persistence": {
        "mode": "derivedJoin"
      },
      "realization": {
        "kind": "derived",
        "ownerEntity": "StatusReport",
        "from": {
          "entityId": "StatusReport",
          "fieldIds": [
            "projectId"
          ]
        },
        "to": {
          "entityId": "ProjectExecutionOverview",
          "fieldIds": [
            "projectId"
          ]
        },
        "description": "O relatório usa a visão de execução derivada para a mesma obra como base de geração."
      }
    },
    {
      "relationshipId": "statusReportCommunicatesScheduleRiskAssessment",
      "fromEntity": "StatusReport",
      "toEntity": "ScheduleRiskAssessment",
      "type": "manyToMany",
      "required": false,
      "description": "O relatório pode comunicar avaliações de risco de atraso relevantes para o cliente.",
      "persistence": {
        "mode": "derivedJoin"
      },
      "realization": {
        "kind": "derived",
        "ownerEntity": "StatusReport",
        "from": {
          "entityId": "StatusReport",
          "fieldIds": [
            "communicatedRisks"
          ]
        },
        "to": {
          "entityId": "ScheduleRiskAssessment",
          "fieldIds": [
            "projectId",
            "workTaskId"
          ]
        },
        "description": "Os riscos comunicados no relatório são selecionados das avaliações derivadas por obra e tarefa."
      }
    }
  ],
  "ontologyHash": "sha256:ccf85b9aa79778e03472ce6b85f7a5115aac1833953bd2dbe33518d92ab2aeb7",
  "approvedBy": "human",
  "approvedAt": "2026-08-17T19:09:05.326Z",
  "realization": {
    "status": "pending",
    "compiledFromOntologyHash": "sha256:ccf85b9aa79778e03472ce6b85f7a5115aac1833953bd2dbe33518d92ab2aeb7"
  }
} as const satisfies Ns4OntologyIndexArtifact;

export type BuildFlowFsmOntologyIndexType = typeof buildFlowFsmOntologyIndex;

export default buildFlowFsmOntologyIndex;
