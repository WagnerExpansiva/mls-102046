/// <mls fileReference="_102046_/l4/buildFlowFsm/workspace-model.defs.ts" enhancement="_blank"/>

export const buildFlowFsmWorkspaceModel = {
  "planId": "e8-workspace-model",
  "schemaVersion": "2026-08-14-ns4-e8-model-v1",
  "moduleName": "buildFlowFsm",
  "userLanguage": "pt-BR",
  "title": "Workspaces",
  "reviewRound": 1,
  "hubEntity": "Project",
  "workspaces": [
    {
      "workspaceId": "approveChangeOrder",
      "tier": "journey",
      "title": "Aprovar ordem de mudança",
      "purpose": "Decidir favoravelmente uma ordem de mudança recebida e encaminhá-la ao faturamento.",
      "kind": "workflow",
      "entity": "ChangeOrder",
      "workflowId": "changeOrderLifecycle",
      "actors": [
        "client"
      ],
      "profileRefs": [
        "client"
      ],
      "featureRefs": [
        "changeOrderControl",
        "clientBilling",
        "clientCommunication",
        "jobCostTracking"
      ],
      "hostedStepRefs": [
        "approveChangeOrder.locateChangeOrder",
        "approveChangeOrder.approveChangeOrderDecision",
        "approveChangeOrder.handoffApprovedChangeOrderToBilling"
      ],
      "journeyRef": "approveChangeOrder",
      "categoryRef": "approvalWorkflow",
      "bffCalls": [
        {
          "bffId": "qryLocateChangeOrder",
          "kind": "query",
          "operationId": "locateChangeOrder",
          "outputKind": "paginated",
          "entityRef": "ChangeOrder"
        },
        {
          "bffId": "cmdApproveChangeOrderDecision",
          "kind": "command",
          "operationId": "approveChangeOrderDecision",
          "outputKind": "object",
          "entityRef": "ChangeOrder",
          "inputSources": [
            {
              "inputId": "clientClientId",
              "bffId": "qryClientPicker"
            }
          ]
        },
        {
          "bffId": "cmdHandoffApprovedChangeOrderToBilling",
          "kind": "command",
          "operationId": "handoffApprovedChangeOrderToBilling",
          "outputKind": "object",
          "entityRef": "ChangeOrder"
        },
        {
          "bffId": "qryClientPicker",
          "kind": "query",
          "operationId": "listClient",
          "outputKind": "paginated",
          "entityRef": "Client"
        }
      ],
      "sections": [
        {
          "sectionId": "locateChangeOrder",
          "intent": "Uma ordem de mudança pendente de aprovação do cliente está selecionada.",
          "organisms": [
            {
              "role": "primarySurface",
              "dataSource": "qryLocateChangeOrder",
              "usage": "picker"
            }
          ]
        },
        {
          "sectionId": "approveChangeOrderDecision",
          "intent": "A ordem fica registrada como aprovada pelo cliente.",
          "organisms": [
            {
              "role": "primarySurface",
              "action": "cmdApproveChangeOrderDecision"
            },
            {
              "role": "filterControl",
              "dataSource": "qryClientPicker",
              "usage": "picker"
            }
          ]
        },
        {
          "sectionId": "handoffApprovedChangeOrderToBilling",
          "intent": "A equipe de faturamento recebe a ordem aprovada.",
          "organisms": [
            {
              "role": "contextualAction",
              "action": "cmdHandoffApprovedChangeOrderToBilling"
            }
          ]
        }
      ]
    },
    {
      "workspaceId": "assignWorkTask",
      "tier": "journey",
      "title": "Planejar e atribuir tarefa de campo",
      "purpose": "Criar uma tarefa vinculada à obra e encaminhá-la ao trabalhador responsável.",
      "kind": "operation",
      "entity": "WorkTask",
      "actors": [
        "fieldCoordinator"
      ],
      "profileRefs": [
        "fieldCoordinator"
      ],
      "featureRefs": [
        "fieldTaskCoordination",
        "projectScheduleVisibility"
      ],
      "hostedStepRefs": [
        "assignWorkTask.locateProject",
        "assignWorkTask.inspectProjectTimeline",
        "assignWorkTask.locateFieldWorker",
        "assignWorkTask.createWorkTask",
        "assignWorkTask.handoffWorkTaskToFieldWorker"
      ],
      "journeyRef": "assignWorkTask",
      "categoryRef": "processWizard",
      "bffCalls": [
        {
          "bffId": "qryLocateProject",
          "kind": "query",
          "operationId": "locateProject",
          "outputKind": "paginated",
          "entityRef": "Project"
        },
        {
          "bffId": "qryInspectProjectTimeline",
          "kind": "query",
          "operationId": "inspectProjectTimeline",
          "outputKind": "object",
          "entityRef": "ProjectTimeline"
        },
        {
          "bffId": "qryLocateFieldWorker",
          "kind": "query",
          "operationId": "locateFieldWorker",
          "outputKind": "paginated",
          "entityRef": "FieldWorker"
        },
        {
          "bffId": "cmdCreateWorkTask",
          "kind": "command",
          "operationId": "createWorkTask",
          "outputKind": "object",
          "entityRef": "WorkTask"
        },
        {
          "bffId": "cmdHandoffWorkTaskToFieldWorker",
          "kind": "command",
          "operationId": "handoffWorkTaskToFieldWorker",
          "outputKind": "object",
          "entityRef": "WorkTask"
        }
      ],
      "sections": [
        {
          "sectionId": "locateProject",
          "intent": "Uma obra ativa do catálogo compartilhado de projetos está selecionada.",
          "organisms": [
            {
              "role": "primarySurface",
              "dataSource": "qryLocateProject",
              "usage": "picker"
            }
          ]
        },
        {
          "sectionId": "inspectProjectTimeline",
          "intent": "A sequência de tarefas e prazos está visível para planejamento.",
          "organisms": [
            {
              "role": "detailPanel",
              "dataSource": "qryInspectProjectTimeline"
            }
          ]
        },
        {
          "sectionId": "locateFieldWorker",
          "intent": "Um trabalhador do diretório de usuários da organização está selecionado.",
          "organisms": [
            {
              "role": "primarySurface",
              "dataSource": "qryLocateFieldWorker",
              "usage": "picker"
            }
          ]
        },
        {
          "sectionId": "createWorkTask",
          "intent": "Uma nova tarefa com descrição, prazo e responsável fica registrada para a obra.",
          "organisms": [
            {
              "role": "primarySurface",
              "action": "cmdCreateWorkTask"
            }
          ]
        },
        {
          "sectionId": "handoffWorkTaskToFieldWorker",
          "intent": "O trabalhador recebe a tarefa para execução em campo.",
          "organisms": [
            {
              "role": "contextualAction",
              "action": "cmdHandoffWorkTaskToFieldWorker"
            }
          ]
        }
      ]
    },
    {
      "workspaceId": "changeOrderCatalogue",
      "tier": "recordCatalogue",
      "title": "Ordem de mudança",
      "purpose": "Cadastro de Ordem de mudança.",
      "kind": "operation",
      "entity": "ChangeOrder",
      "actors": [
        "client",
        "fieldCoordinator",
        "projectManager"
      ],
      "profileRefs": [
        "client",
        "fieldCoordinator",
        "projectManager"
      ],
      "featureRefs": [],
      "hostedStepRefs": [],
      "categoryRef": "entityRecordManagement",
      "bffCalls": [
        {
          "bffId": "qryListChangeOrder",
          "kind": "query",
          "operationId": "listChangeOrder",
          "outputKind": "paginated",
          "entityRef": "ChangeOrder"
        },
        {
          "bffId": "cmdCreateChangeOrder",
          "kind": "command",
          "operationId": "createChangeOrder",
          "outputKind": "object",
          "entityRef": "ChangeOrder",
          "inputSources": [
            {
              "inputId": "clientClientId",
              "bffId": "qryClientPicker"
            }
          ]
        },
        {
          "bffId": "cmdUpdateChangeOrder",
          "kind": "command",
          "operationId": "updateChangeOrder",
          "outputKind": "object",
          "entityRef": "ChangeOrder",
          "inputSources": [
            {
              "inputId": "clientRef",
              "bffId": "qryClientPicker"
            },
            {
              "inputId": "projectRef",
              "bffId": "qryProjectPicker"
            }
          ]
        },
        {
          "bffId": "cmdDeleteChangeOrder",
          "kind": "command",
          "operationId": "deleteChangeOrder",
          "outputKind": "object",
          "entityRef": "ChangeOrder"
        },
        {
          "bffId": "qryClientPicker",
          "kind": "query",
          "operationId": "listClient",
          "outputKind": "paginated",
          "entityRef": "Client"
        },
        {
          "bffId": "qryProjectPicker",
          "kind": "query",
          "operationId": "listProject",
          "outputKind": "paginated",
          "entityRef": "Project"
        }
      ],
      "sections": [
        {
          "sectionId": "recordList",
          "intent": "Localizar Ordem de mudança.",
          "organisms": [
            {
              "role": "primarySurface",
              "dataSource": "qryListChangeOrder"
            },
            {
              "role": "contextualAction",
              "action": "cmdDeleteChangeOrder"
            }
          ]
        },
        {
          "sectionId": "recordForm",
          "intent": "Criar ou corrigir Ordem de mudança.",
          "organisms": [
            {
              "role": "primarySurface",
              "action": "cmdCreateChangeOrder"
            },
            {
              "role": "contextualAction",
              "action": "cmdUpdateChangeOrder"
            },
            {
              "role": "filterControl",
              "dataSource": "qryClientPicker",
              "usage": "picker"
            },
            {
              "role": "filterControl",
              "dataSource": "qryProjectPicker",
              "usage": "picker"
            }
          ]
        }
      ]
    },
    {
      "workspaceId": "changeOrderDecisionCatalogue",
      "tier": "recordCatalogue",
      "title": "Decisão sobre ordem de mudança",
      "purpose": "Cadastro de Decisão sobre ordem de mudança.",
      "kind": "operation",
      "entity": "ChangeOrderDecision",
      "actors": [
        "billingStaff",
        "fieldCoordinator",
        "fieldWorker",
        "projectManager"
      ],
      "profileRefs": [
        "billingStaff",
        "fieldCoordinator",
        "fieldWorker",
        "projectManager"
      ],
      "featureRefs": [],
      "hostedStepRefs": [],
      "categoryRef": "entityRecordManagement",
      "bffCalls": [
        {
          "bffId": "qryListChangeOrderDecision",
          "kind": "query",
          "operationId": "listChangeOrderDecision",
          "outputKind": "paginated",
          "entityRef": "ChangeOrderDecision"
        },
        {
          "bffId": "cmdCreateChangeOrderDecision",
          "kind": "command",
          "operationId": "createChangeOrderDecision",
          "outputKind": "object",
          "entityRef": "ChangeOrderDecision",
          "inputSources": [
            {
              "inputId": "changeOrder",
              "bffId": "qryChangeOrderPicker"
            }
          ]
        },
        {
          "bffId": "cmdUpdateChangeOrderDecision",
          "kind": "command",
          "operationId": "updateChangeOrderDecision",
          "outputKind": "object",
          "entityRef": "ChangeOrderDecision",
          "inputSources": [
            {
              "inputId": "changeOrder",
              "bffId": "qryChangeOrderPicker"
            }
          ]
        },
        {
          "bffId": "cmdDeleteChangeOrderDecision",
          "kind": "command",
          "operationId": "deleteChangeOrderDecision",
          "outputKind": "object",
          "entityRef": "ChangeOrderDecision"
        },
        {
          "bffId": "qryChangeOrderPicker",
          "kind": "query",
          "operationId": "listChangeOrder",
          "outputKind": "paginated",
          "entityRef": "ChangeOrder"
        }
      ],
      "sections": [
        {
          "sectionId": "recordList",
          "intent": "Localizar Decisão sobre ordem de mudança.",
          "organisms": [
            {
              "role": "primarySurface",
              "dataSource": "qryListChangeOrderDecision"
            },
            {
              "role": "contextualAction",
              "action": "cmdDeleteChangeOrderDecision"
            }
          ]
        },
        {
          "sectionId": "recordForm",
          "intent": "Criar ou corrigir Decisão sobre ordem de mudança.",
          "organisms": [
            {
              "role": "primarySurface",
              "action": "cmdCreateChangeOrderDecision"
            },
            {
              "role": "contextualAction",
              "action": "cmdUpdateChangeOrderDecision"
            },
            {
              "role": "filterControl",
              "dataSource": "qryChangeOrderPicker",
              "usage": "picker"
            }
          ]
        }
      ]
    },
    {
      "workspaceId": "clientBillingSummaryView",
      "tier": "projection",
      "title": "Resumo de faturamento do cliente",
      "purpose": "Projeção comercial por cliente e obra que consolida alterações aprovadas, valores faturáveis, faturas emitidas e valores disponibilizados ao cliente.",
      "kind": "landing",
      "entity": "ClientBillingSummary",
      "actors": [
        "billingStaff"
      ],
      "profileRefs": [
        "billingStaff"
      ],
      "featureRefs": [],
      "hostedStepRefs": [
        "issueProjectInvoice.inspectClientBillingSummary"
      ],
      "categoryRef": "dashboardCommandCenter",
      "bffCalls": [
        {
          "bffId": "qryClientBillingSummaryView",
          "kind": "query",
          "operationId": "inspectClientBillingSummary",
          "outputKind": "object",
          "entityRef": "ClientBillingSummary"
        }
      ],
      "sections": [
        {
          "sectionId": "overview",
          "intent": "Projeção comercial por cliente e obra que consolida alterações aprovadas, valores faturáveis, faturas emitidas e valores disponibilizados ao cliente.",
          "organisms": [
            {
              "role": "primarySurface",
              "dataSource": "qryClientBillingSummaryView"
            }
          ]
        }
      ]
    },
    {
      "workspaceId": "clientCatalogue",
      "tier": "recordCatalogue",
      "title": "Cliente",
      "purpose": "Cadastro de Cliente.",
      "kind": "operation",
      "entity": "Client",
      "actors": [
        "billingStaff",
        "fieldCoordinator"
      ],
      "profileRefs": [
        "billingStaff",
        "fieldCoordinator"
      ],
      "featureRefs": [],
      "hostedStepRefs": [],
      "categoryRef": "entityRecordManagement",
      "bffCalls": [
        {
          "bffId": "qryListClient",
          "kind": "query",
          "operationId": "listClient",
          "outputKind": "paginated",
          "entityRef": "Client"
        },
        {
          "bffId": "cmdCreateClient",
          "kind": "command",
          "operationId": "createClient",
          "outputKind": "object",
          "entityRef": "Client"
        },
        {
          "bffId": "cmdUpdateClient",
          "kind": "command",
          "operationId": "updateClient",
          "outputKind": "object",
          "entityRef": "Client"
        },
        {
          "bffId": "cmdDeleteClient",
          "kind": "command",
          "operationId": "deleteClient",
          "outputKind": "object",
          "entityRef": "Client"
        }
      ],
      "sections": [
        {
          "sectionId": "recordList",
          "intent": "Localizar Cliente.",
          "organisms": [
            {
              "role": "primarySurface",
              "dataSource": "qryListClient"
            },
            {
              "role": "contextualAction",
              "action": "cmdDeleteClient"
            }
          ]
        },
        {
          "sectionId": "recordForm",
          "intent": "Criar ou corrigir Cliente.",
          "organisms": [
            {
              "role": "primarySurface",
              "action": "cmdCreateClient"
            },
            {
              "role": "contextualAction",
              "action": "cmdUpdateClient"
            }
          ]
        }
      ]
    },
    {
      "workspaceId": "clientPortalAccessCatalogue",
      "tier": "recordCatalogue",
      "title": "Vínculo de acesso do cliente",
      "purpose": "Cadastro de Vínculo de acesso do cliente.",
      "kind": "operation",
      "entity": "ClientPortalAccess",
      "actors": [
        "billingStaff",
        "fieldCoordinator",
        "fieldWorker",
        "projectManager"
      ],
      "profileRefs": [
        "billingStaff",
        "fieldCoordinator",
        "fieldWorker",
        "projectManager"
      ],
      "featureRefs": [],
      "hostedStepRefs": [],
      "categoryRef": "entityRecordManagement",
      "bffCalls": [
        {
          "bffId": "qryListClientPortalAccess",
          "kind": "query",
          "operationId": "listClientPortalAccess",
          "outputKind": "paginated",
          "entityRef": "ClientPortalAccess"
        },
        {
          "bffId": "cmdCreateClientPortalAccess",
          "kind": "command",
          "operationId": "createClientPortalAccess",
          "outputKind": "object",
          "entityRef": "ClientPortalAccess",
          "inputSources": [
            {
              "inputId": "clientId",
              "bffId": "qryClientPicker"
            }
          ]
        },
        {
          "bffId": "cmdUpdateClientPortalAccess",
          "kind": "command",
          "operationId": "updateClientPortalAccess",
          "outputKind": "object",
          "entityRef": "ClientPortalAccess",
          "inputSources": [
            {
              "inputId": "clientId",
              "bffId": "qryClientPicker"
            }
          ]
        },
        {
          "bffId": "cmdDeleteClientPortalAccess",
          "kind": "command",
          "operationId": "deleteClientPortalAccess",
          "outputKind": "object",
          "entityRef": "ClientPortalAccess"
        },
        {
          "bffId": "qryClientPicker",
          "kind": "query",
          "operationId": "listClient",
          "outputKind": "paginated",
          "entityRef": "Client"
        }
      ],
      "sections": [
        {
          "sectionId": "recordList",
          "intent": "Localizar Vínculo de acesso do cliente.",
          "organisms": [
            {
              "role": "primarySurface",
              "dataSource": "qryListClientPortalAccess"
            },
            {
              "role": "contextualAction",
              "action": "cmdDeleteClientPortalAccess"
            }
          ]
        },
        {
          "sectionId": "recordForm",
          "intent": "Criar ou corrigir Vínculo de acesso do cliente.",
          "organisms": [
            {
              "role": "primarySurface",
              "action": "cmdCreateClientPortalAccess"
            },
            {
              "role": "contextualAction",
              "action": "cmdUpdateClientPortalAccess"
            },
            {
              "role": "filterControl",
              "dataSource": "qryClientPicker",
              "usage": "picker"
            }
          ]
        }
      ]
    },
    {
      "workspaceId": "consultApprovedProjectChangeOrders",
      "tier": "journey",
      "title": "Consultar alterações aprovadas da obra",
      "purpose": "Consultar ordens aprovadas da própria obra e seus valores no faturamento.",
      "kind": "operation",
      "entity": "Project",
      "actors": [
        "client"
      ],
      "profileRefs": [
        "client"
      ],
      "featureRefs": [
        "changeOrderControl",
        "clientBilling",
        "clientCommunication"
      ],
      "hostedStepRefs": [
        "consultApprovedProjectChangeOrders.locateProject",
        "consultApprovedProjectChangeOrders.inspectApprovedChangeOrders",
        "consultApprovedProjectChangeOrders.inspectClientBillingSummary"
      ],
      "journeyRef": "consultApprovedProjectChangeOrders",
      "categoryRef": "processWizard",
      "bffCalls": [
        {
          "bffId": "qryLocateProject",
          "kind": "query",
          "operationId": "locateProject",
          "outputKind": "paginated",
          "entityRef": "Project"
        },
        {
          "bffId": "qryInspectApprovedChangeOrders",
          "kind": "query",
          "operationId": "inspectApprovedChangeOrders",
          "outputKind": "object",
          "entityRef": "ChangeOrder"
        },
        {
          "bffId": "qryInspectClientBillingSummary",
          "kind": "query",
          "operationId": "inspectClientBillingSummary",
          "outputKind": "object",
          "entityRef": "ClientBillingSummary"
        }
      ],
      "sections": [
        {
          "sectionId": "locateProject",
          "intent": "Uma obra associada ao cliente está selecionada.",
          "organisms": [
            {
              "role": "primarySurface",
              "dataSource": "qryLocateProject",
              "usage": "picker"
            }
          ]
        },
        {
          "sectionId": "inspectApprovedChangeOrders",
          "intent": "Ordens aprovadas da obra, descrições e valores estão visíveis.",
          "organisms": [
            {
              "role": "detailPanel",
              "dataSource": "qryInspectApprovedChangeOrders"
            }
          ]
        },
        {
          "sectionId": "inspectClientBillingSummary",
          "intent": "O resumo apresenta alterações aprovadas, faturas e valores.",
          "organisms": [
            {
              "role": "detailPanel",
              "dataSource": "qryInspectClientBillingSummary"
            }
          ]
        }
      ]
    },
    {
      "workspaceId": "consultClientProjectUpdates",
      "tier": "journey",
      "title": "Consultar status e faturamento da obra",
      "purpose": "Acompanhar informações publicadas sobre a execução e os valores da própria obra.",
      "kind": "operation",
      "entity": "Project",
      "actors": [
        "client"
      ],
      "profileRefs": [
        "client"
      ],
      "featureRefs": [
        "aiStatusReporting",
        "clientBilling",
        "clientCommunication"
      ],
      "hostedStepRefs": [
        "consultClientProjectUpdates.locateProject",
        "consultClientProjectUpdates.inspectStatusReport",
        "consultClientProjectUpdates.inspectClientBillingSummary"
      ],
      "journeyRef": "consultClientProjectUpdates",
      "categoryRef": "processWizard",
      "bffCalls": [
        {
          "bffId": "qryLocateProject",
          "kind": "query",
          "operationId": "locateProject",
          "outputKind": "paginated",
          "entityRef": "Project"
        },
        {
          "bffId": "qryInspectStatusReport",
          "kind": "query",
          "operationId": "inspectStatusReport",
          "outputKind": "object",
          "entityRef": "StatusReport"
        },
        {
          "bffId": "qryInspectClientBillingSummary",
          "kind": "query",
          "operationId": "inspectClientBillingSummary",
          "outputKind": "object",
          "entityRef": "ClientBillingSummary"
        }
      ],
      "sections": [
        {
          "sectionId": "locateProject",
          "intent": "Uma obra associada ao cliente está selecionada.",
          "organisms": [
            {
              "role": "primarySurface",
              "dataSource": "qryLocateProject",
              "usage": "picker"
            }
          ]
        },
        {
          "sectionId": "inspectStatusReport",
          "intent": "O relatório publicado, incluindo riscos comunicados, está visível.",
          "organisms": [
            {
              "role": "detailPanel",
              "dataSource": "qryInspectStatusReport"
            }
          ]
        },
        {
          "sectionId": "inspectClientBillingSummary",
          "intent": "Faturas e valores relacionados à obra estão visíveis.",
          "organisms": [
            {
              "role": "detailPanel",
              "dataSource": "qryInspectClientBillingSummary"
            }
          ]
        }
      ]
    },
    {
      "workspaceId": "declineChangeOrder",
      "tier": "journey",
      "title": "Recusar ordem de mudança",
      "purpose": "Decidir desfavoravelmente uma ordem submetida e devolver o resultado ao campo.",
      "kind": "workflow",
      "entity": "ChangeOrder",
      "workflowId": "changeOrderLifecycle",
      "actors": [
        "projectManager"
      ],
      "profileRefs": [
        "projectManager"
      ],
      "featureRefs": [
        "changeOrderControl"
      ],
      "hostedStepRefs": [
        "declineChangeOrder.locateChangeOrder",
        "declineChangeOrder.declineChangeOrderDecision",
        "declineChangeOrder.handoffDeclinedChangeOrderToFieldCoordinator"
      ],
      "journeyRef": "declineChangeOrder",
      "categoryRef": "approvalWorkflow",
      "bffCalls": [
        {
          "bffId": "qryLocateChangeOrder",
          "kind": "query",
          "operationId": "locateChangeOrder",
          "outputKind": "paginated",
          "entityRef": "ChangeOrder"
        },
        {
          "bffId": "cmdDeclineChangeOrderDecision",
          "kind": "command",
          "operationId": "declineChangeOrderDecision",
          "outputKind": "object",
          "entityRef": "ChangeOrder",
          "inputSources": [
            {
              "inputId": "clientClientId",
              "bffId": "qryClientPicker"
            }
          ]
        },
        {
          "bffId": "cmdHandoffDeclinedChangeOrderToFieldCoordinator",
          "kind": "command",
          "operationId": "handoffDeclinedChangeOrderToFieldCoordinator",
          "outputKind": "object",
          "entityRef": "ChangeOrder"
        },
        {
          "bffId": "qryClientPicker",
          "kind": "query",
          "operationId": "listClient",
          "outputKind": "paginated",
          "entityRef": "Client"
        }
      ],
      "sections": [
        {
          "sectionId": "locateChangeOrder",
          "intent": "Uma ordem pendente de tratamento está selecionada.",
          "organisms": [
            {
              "role": "primarySurface",
              "dataSource": "qryLocateChangeOrder",
              "usage": "picker"
            }
          ]
        },
        {
          "sectionId": "declineChangeOrderDecision",
          "intent": "A ordem fica registrada como recusada pelo gerente.",
          "organisms": [
            {
              "role": "primarySurface",
              "action": "cmdDeclineChangeOrderDecision"
            },
            {
              "role": "filterControl",
              "dataSource": "qryClientPicker",
              "usage": "picker"
            }
          ]
        },
        {
          "sectionId": "handoffDeclinedChangeOrderToFieldCoordinator",
          "intent": "O coordenador recebe a ordem recusada para tratar o resultado.",
          "organisms": [
            {
              "role": "contextualAction",
              "action": "cmdHandoffDeclinedChangeOrderToFieldCoordinator"
            }
          ]
        }
      ]
    },
    {
      "workspaceId": "forwardChangeOrderForClientApproval",
      "tier": "journey",
      "title": "Encaminhar ordem de mudança ao cliente",
      "purpose": "Enviar ao cliente uma ordem de mudança submetida para a decisão de aprovação.",
      "kind": "workflow",
      "entity": "ChangeOrder",
      "workflowId": "changeOrderLifecycle",
      "actors": [
        "projectManager"
      ],
      "profileRefs": [
        "projectManager"
      ],
      "featureRefs": [
        "changeOrderControl",
        "clientCommunication"
      ],
      "hostedStepRefs": [
        "forwardChangeOrderForClientApproval.locateChangeOrder",
        "forwardChangeOrderForClientApproval.handoffChangeOrderToClient"
      ],
      "journeyRef": "forwardChangeOrderForClientApproval",
      "categoryRef": "processWizard",
      "bffCalls": [
        {
          "bffId": "qryLocateChangeOrder",
          "kind": "query",
          "operationId": "locateChangeOrder",
          "outputKind": "paginated",
          "entityRef": "ChangeOrder"
        },
        {
          "bffId": "cmdHandoffChangeOrderToClient",
          "kind": "command",
          "operationId": "handoffChangeOrderToClient",
          "outputKind": "object",
          "entityRef": "ChangeOrder"
        }
      ],
      "sections": [
        {
          "sectionId": "locateChangeOrder",
          "intent": "Uma ordem de mudança pendente de tratamento está selecionada.",
          "organisms": [
            {
              "role": "primarySurface",
              "dataSource": "qryLocateChangeOrder",
              "usage": "picker"
            }
          ]
        },
        {
          "sectionId": "handoffChangeOrderToClient",
          "intent": "O cliente recebe a ordem de mudança para decidir sua aprovação.",
          "organisms": [
            {
              "role": "contextualAction",
              "action": "cmdHandoffChangeOrderToClient"
            }
          ]
        }
      ]
    },
    {
      "workspaceId": "generateAndPublishProjectStatusReport",
      "tier": "journey",
      "title": "Gerar e publicar relatório de status",
      "purpose": "Produzir comunicação profissional sobre a obra, incluindo riscos de atraso, e disponibilizá-la ao cliente.",
      "kind": "workflow",
      "entity": "StatusReport",
      "workflowId": "statusReportLifecycle",
      "actors": [
        "projectManager"
      ],
      "profileRefs": [
        "projectManager"
      ],
      "featureRefs": [
        "aiStatusReporting",
        "clientCommunication",
        "jobCostTracking",
        "projectScheduleVisibility"
      ],
      "hostedStepRefs": [
        "generateAndPublishProjectStatusReport.locateProject",
        "generateAndPublishProjectStatusReport.inspectProjectExecutionOverview",
        "generateAndPublishProjectStatusReport.inspectScheduleRiskAssessment",
        "generateAndPublishProjectStatusReport.createStatusReport",
        "generateAndPublishProjectStatusReport.publishStatusReport",
        "generateAndPublishProjectStatusReport.handoffStatusReportToClient"
      ],
      "journeyRef": "generateAndPublishProjectStatusReport",
      "categoryRef": "approvalWorkflow",
      "bffCalls": [
        {
          "bffId": "qryLocateProject",
          "kind": "query",
          "operationId": "locateProject",
          "outputKind": "paginated",
          "entityRef": "Project"
        },
        {
          "bffId": "qryInspectProjectExecutionOverview",
          "kind": "query",
          "operationId": "inspectProjectExecutionOverview",
          "outputKind": "object",
          "entityRef": "ProjectExecutionOverview"
        },
        {
          "bffId": "qryInspectScheduleRiskAssessment",
          "kind": "query",
          "operationId": "inspectScheduleRiskAssessment",
          "outputKind": "object",
          "entityRef": "ScheduleRiskAssessment"
        },
        {
          "bffId": "cmdCreateStatusReport",
          "kind": "command",
          "operationId": "createStatusReport",
          "outputKind": "object",
          "entityRef": "StatusReport",
          "inputSources": [
            {
              "inputId": "projectExecutionOverviewProjectId",
              "bffId": "qryLocateProject"
            }
          ]
        },
        {
          "bffId": "cmdPublishStatusReport",
          "kind": "command",
          "operationId": "publishStatusReport",
          "outputKind": "object",
          "entityRef": "StatusReport",
          "inputSources": [
            {
              "inputId": "projectExecutionOverviewProjectId",
              "bffId": "qryLocateProject"
            }
          ]
        },
        {
          "bffId": "cmdHandoffStatusReportToClient",
          "kind": "command",
          "operationId": "handoffStatusReportToClient",
          "outputKind": "object",
          "entityRef": "StatusReport"
        }
      ],
      "sections": [
        {
          "sectionId": "locateProject",
          "intent": "Uma obra está selecionada para comunicação de status.",
          "organisms": [
            {
              "role": "primarySurface",
              "dataSource": "qryLocateProject",
              "usage": "picker"
            }
          ]
        },
        {
          "sectionId": "inspectProjectExecutionOverview",
          "intent": "Tarefas, horas e materiais da obra estão consolidados.",
          "organisms": [
            {
              "role": "detailPanel",
              "dataSource": "qryInspectProjectExecutionOverview"
            }
          ]
        },
        {
          "sectionId": "inspectScheduleRiskAssessment",
          "intent": "Tarefas em risco e seus indicadores estão identificados.",
          "organisms": [
            {
              "role": "detailPanel",
              "dataSource": "qryInspectScheduleRiskAssessment"
            }
          ]
        },
        {
          "sectionId": "createStatusReport",
          "intent": "Um relatório baseado nos dados da obra fica gerado para revisão.",
          "organisms": [
            {
              "role": "primarySurface",
              "action": "cmdCreateStatusReport"
            }
          ]
        },
        {
          "sectionId": "publishStatusReport",
          "intent": "O relatório fica aprovado para comunicação ao cliente.",
          "organisms": [
            {
              "role": "primarySurface",
              "action": "cmdPublishStatusReport"
            }
          ]
        },
        {
          "sectionId": "handoffStatusReportToClient",
          "intent": "O cliente recebe o relatório publicado.",
          "organisms": [
            {
              "role": "contextualAction",
              "action": "cmdHandoffStatusReportToClient"
            }
          ]
        }
      ]
    },
    {
      "workspaceId": "inventoryBalanceCatalogue",
      "tier": "recordCatalogue",
      "title": "Saldo de estoque",
      "purpose": "Cadastro de Saldo de estoque.",
      "kind": "operation",
      "entity": "InventoryBalance",
      "actors": [
        "billingStaff",
        "fieldCoordinator",
        "fieldWorker",
        "projectManager"
      ],
      "profileRefs": [
        "billingStaff",
        "fieldCoordinator",
        "fieldWorker",
        "projectManager"
      ],
      "featureRefs": [],
      "hostedStepRefs": [],
      "categoryRef": "entityRecordManagement",
      "bffCalls": [
        {
          "bffId": "qryListInventoryBalance",
          "kind": "query",
          "operationId": "listInventoryBalance",
          "outputKind": "paginated",
          "entityRef": "InventoryBalance"
        },
        {
          "bffId": "cmdCreateInventoryBalance",
          "kind": "command",
          "operationId": "createInventoryBalance",
          "outputKind": "object",
          "entityRef": "InventoryBalance",
          "inputSources": [
            {
              "inputId": "inventoryItemId",
              "bffId": "qryInventoryItemPicker"
            }
          ]
        },
        {
          "bffId": "cmdUpdateInventoryBalance",
          "kind": "command",
          "operationId": "updateInventoryBalance",
          "outputKind": "object",
          "entityRef": "InventoryBalance",
          "inputSources": [
            {
              "inputId": "inventoryItemId",
              "bffId": "qryInventoryItemPicker"
            }
          ]
        },
        {
          "bffId": "cmdDeleteInventoryBalance",
          "kind": "command",
          "operationId": "deleteInventoryBalance",
          "outputKind": "object",
          "entityRef": "InventoryBalance"
        },
        {
          "bffId": "qryInventoryItemPicker",
          "kind": "query",
          "operationId": "listInventoryItem",
          "outputKind": "paginated",
          "entityRef": "InventoryItem"
        }
      ],
      "sections": [
        {
          "sectionId": "recordList",
          "intent": "Localizar Saldo de estoque.",
          "organisms": [
            {
              "role": "primarySurface",
              "dataSource": "qryListInventoryBalance"
            },
            {
              "role": "contextualAction",
              "action": "cmdDeleteInventoryBalance"
            }
          ]
        },
        {
          "sectionId": "recordForm",
          "intent": "Criar ou corrigir Saldo de estoque.",
          "organisms": [
            {
              "role": "primarySurface",
              "action": "cmdCreateInventoryBalance"
            },
            {
              "role": "contextualAction",
              "action": "cmdUpdateInventoryBalance"
            },
            {
              "role": "filterControl",
              "dataSource": "qryInventoryItemPicker",
              "usage": "picker"
            }
          ]
        }
      ]
    },
    {
      "workspaceId": "inventoryItemCatalogue",
      "tier": "recordCatalogue",
      "title": "Item de estoque",
      "purpose": "Cadastro de Item de estoque.",
      "kind": "operation",
      "entity": "InventoryItem",
      "actors": [
        "fieldWorker"
      ],
      "profileRefs": [
        "fieldWorker"
      ],
      "featureRefs": [],
      "hostedStepRefs": [],
      "categoryRef": "entityRecordManagement",
      "bffCalls": [
        {
          "bffId": "qryListInventoryItem",
          "kind": "query",
          "operationId": "listInventoryItem",
          "outputKind": "paginated",
          "entityRef": "InventoryItem"
        },
        {
          "bffId": "cmdCreateInventoryItem",
          "kind": "command",
          "operationId": "createInventoryItem",
          "outputKind": "object",
          "entityRef": "InventoryItem"
        },
        {
          "bffId": "cmdUpdateInventoryItem",
          "kind": "command",
          "operationId": "updateInventoryItem",
          "outputKind": "object",
          "entityRef": "InventoryItem"
        },
        {
          "bffId": "cmdDeleteInventoryItem",
          "kind": "command",
          "operationId": "deleteInventoryItem",
          "outputKind": "object",
          "entityRef": "InventoryItem"
        }
      ],
      "sections": [
        {
          "sectionId": "recordList",
          "intent": "Localizar Item de estoque.",
          "organisms": [
            {
              "role": "primarySurface",
              "dataSource": "qryListInventoryItem"
            },
            {
              "role": "contextualAction",
              "action": "cmdDeleteInventoryItem"
            }
          ]
        },
        {
          "sectionId": "recordForm",
          "intent": "Criar ou corrigir Item de estoque.",
          "organisms": [
            {
              "role": "primarySurface",
              "action": "cmdCreateInventoryItem"
            },
            {
              "role": "contextualAction",
              "action": "cmdUpdateInventoryItem"
            }
          ]
        }
      ]
    },
    {
      "workspaceId": "invoiceCatalogue",
      "tier": "recordCatalogue",
      "title": "Fatura",
      "purpose": "Cadastro de Fatura.",
      "kind": "operation",
      "entity": "Invoice",
      "actors": [
        "billingStaff"
      ],
      "profileRefs": [
        "billingStaff"
      ],
      "featureRefs": [],
      "hostedStepRefs": [],
      "categoryRef": "entityRecordManagement",
      "bffCalls": [
        {
          "bffId": "qryListInvoice",
          "kind": "query",
          "operationId": "listInvoice",
          "outputKind": "paginated",
          "entityRef": "Invoice"
        },
        {
          "bffId": "cmdCreateInvoice",
          "kind": "command",
          "operationId": "createInvoice",
          "outputKind": "object",
          "entityRef": "Invoice",
          "inputSources": [
            {
              "inputId": "clientClientId",
              "bffId": "qryClientPicker"
            }
          ]
        },
        {
          "bffId": "cmdUpdateInvoice",
          "kind": "command",
          "operationId": "updateInvoice",
          "outputKind": "object",
          "entityRef": "Invoice",
          "inputSources": [
            {
              "inputId": "clientId",
              "bffId": "qryClientPicker"
            },
            {
              "inputId": "projectId",
              "bffId": "qryProjectPicker"
            }
          ]
        },
        {
          "bffId": "cmdDeleteInvoice",
          "kind": "command",
          "operationId": "deleteInvoice",
          "outputKind": "object",
          "entityRef": "Invoice"
        },
        {
          "bffId": "qryClientPicker",
          "kind": "query",
          "operationId": "listClient",
          "outputKind": "paginated",
          "entityRef": "Client"
        },
        {
          "bffId": "qryProjectPicker",
          "kind": "query",
          "operationId": "listProject",
          "outputKind": "paginated",
          "entityRef": "Project"
        }
      ],
      "sections": [
        {
          "sectionId": "recordList",
          "intent": "Localizar Fatura.",
          "organisms": [
            {
              "role": "primarySurface",
              "dataSource": "qryListInvoice"
            },
            {
              "role": "contextualAction",
              "action": "cmdDeleteInvoice"
            }
          ]
        },
        {
          "sectionId": "recordForm",
          "intent": "Criar ou corrigir Fatura.",
          "organisms": [
            {
              "role": "primarySurface",
              "action": "cmdCreateInvoice"
            },
            {
              "role": "contextualAction",
              "action": "cmdUpdateInvoice"
            },
            {
              "role": "filterControl",
              "dataSource": "qryClientPicker",
              "usage": "picker"
            },
            {
              "role": "filterControl",
              "dataSource": "qryProjectPicker",
              "usage": "picker"
            }
          ]
        }
      ]
    },
    {
      "workspaceId": "invoiceChangeOrderCatalogue",
      "tier": "recordCatalogue",
      "title": "Aplicação de ordem de mudança na fatura",
      "purpose": "Cadastro de Aplicação de ordem de mudança na fatura.",
      "kind": "operation",
      "entity": "InvoiceChangeOrder",
      "actors": [
        "billingStaff",
        "fieldCoordinator",
        "fieldWorker",
        "projectManager"
      ],
      "profileRefs": [
        "billingStaff",
        "fieldCoordinator",
        "fieldWorker",
        "projectManager"
      ],
      "featureRefs": [],
      "hostedStepRefs": [],
      "categoryRef": "entityRecordManagement",
      "bffCalls": [
        {
          "bffId": "qryListInvoiceChangeOrder",
          "kind": "query",
          "operationId": "listInvoiceChangeOrder",
          "outputKind": "paginated",
          "entityRef": "InvoiceChangeOrder"
        },
        {
          "bffId": "cmdCreateInvoiceChangeOrder",
          "kind": "command",
          "operationId": "createInvoiceChangeOrder",
          "outputKind": "object",
          "entityRef": "InvoiceChangeOrder",
          "inputSources": [
            {
              "inputId": "changeOrderId",
              "bffId": "qryChangeOrderPicker"
            },
            {
              "inputId": "invoiceId",
              "bffId": "qryInvoicePicker"
            }
          ]
        },
        {
          "bffId": "cmdUpdateInvoiceChangeOrder",
          "kind": "command",
          "operationId": "updateInvoiceChangeOrder",
          "outputKind": "object",
          "entityRef": "InvoiceChangeOrder",
          "inputSources": [
            {
              "inputId": "changeOrderId",
              "bffId": "qryChangeOrderPicker"
            },
            {
              "inputId": "invoiceId",
              "bffId": "qryInvoicePicker"
            }
          ]
        },
        {
          "bffId": "cmdDeleteInvoiceChangeOrder",
          "kind": "command",
          "operationId": "deleteInvoiceChangeOrder",
          "outputKind": "object",
          "entityRef": "InvoiceChangeOrder"
        },
        {
          "bffId": "qryInvoicePicker",
          "kind": "query",
          "operationId": "listInvoice",
          "outputKind": "paginated",
          "entityRef": "Invoice"
        },
        {
          "bffId": "qryChangeOrderPicker",
          "kind": "query",
          "operationId": "listChangeOrder",
          "outputKind": "paginated",
          "entityRef": "ChangeOrder"
        }
      ],
      "sections": [
        {
          "sectionId": "recordList",
          "intent": "Localizar Aplicação de ordem de mudança na fatura.",
          "organisms": [
            {
              "role": "primarySurface",
              "dataSource": "qryListInvoiceChangeOrder"
            },
            {
              "role": "contextualAction",
              "action": "cmdDeleteInvoiceChangeOrder"
            }
          ]
        },
        {
          "sectionId": "recordForm",
          "intent": "Criar ou corrigir Aplicação de ordem de mudança na fatura.",
          "organisms": [
            {
              "role": "primarySurface",
              "action": "cmdCreateInvoiceChangeOrder"
            },
            {
              "role": "contextualAction",
              "action": "cmdUpdateInvoiceChangeOrder"
            },
            {
              "role": "filterControl",
              "dataSource": "qryInvoicePicker",
              "usage": "picker"
            },
            {
              "role": "filterControl",
              "dataSource": "qryChangeOrderPicker",
              "usage": "picker"
            }
          ]
        }
      ]
    },
    {
      "workspaceId": "issueProjectInvoice",
      "tier": "journey",
      "title": "Emitir fatura da obra",
      "purpose": "Emitir uma fatura para o cliente com base no resumo de faturamento da obra.",
      "kind": "workflow",
      "entity": "Invoice",
      "workflowId": "invoiceLifecycle",
      "actors": [
        "billingStaff"
      ],
      "profileRefs": [
        "billingStaff"
      ],
      "featureRefs": [
        "changeOrderControl",
        "clientBilling",
        "clientCommunication",
        "jobCostTracking"
      ],
      "hostedStepRefs": [
        "issueProjectInvoice.locateClient",
        "issueProjectInvoice.locateProject",
        "issueProjectInvoice.inspectClientBillingSummary",
        "issueProjectInvoice.createInvoice",
        "issueProjectInvoice.handoffInvoiceToClient"
      ],
      "journeyRef": "issueProjectInvoice",
      "categoryRef": "processWizard",
      "bffCalls": [
        {
          "bffId": "qryLocateClient",
          "kind": "query",
          "operationId": "locateClient",
          "outputKind": "paginated",
          "entityRef": "Client"
        },
        {
          "bffId": "qryLocateProject",
          "kind": "query",
          "operationId": "locateProject",
          "outputKind": "paginated",
          "entityRef": "Project"
        },
        {
          "bffId": "qryInspectClientBillingSummary",
          "kind": "query",
          "operationId": "inspectClientBillingSummary",
          "outputKind": "object",
          "entityRef": "ClientBillingSummary"
        },
        {
          "bffId": "cmdCreateInvoice",
          "kind": "command",
          "operationId": "createInvoice",
          "outputKind": "object",
          "entityRef": "Invoice",
          "inputSources": [
            {
              "inputId": "clientClientId",
              "bffId": "qryLocateClient"
            }
          ]
        },
        {
          "bffId": "cmdHandoffInvoiceToClient",
          "kind": "command",
          "operationId": "handoffInvoiceToClient",
          "outputKind": "object",
          "entityRef": "Invoice"
        }
      ],
      "sections": [
        {
          "sectionId": "locateClient",
          "intent": "Um cliente do catálogo compartilhado está selecionado.",
          "organisms": [
            {
              "role": "primarySurface",
              "dataSource": "qryLocateClient",
              "usage": "picker"
            }
          ]
        },
        {
          "sectionId": "locateProject",
          "intent": "Uma obra do cliente selecionado está selecionada.",
          "organisms": [
            {
              "role": "primarySurface",
              "dataSource": "qryLocateProject",
              "usage": "picker"
            }
          ]
        },
        {
          "sectionId": "inspectClientBillingSummary",
          "intent": "Faturas, ordens aprovadas e valores estão consolidados.",
          "organisms": [
            {
              "role": "detailPanel",
              "dataSource": "qryInspectClientBillingSummary"
            }
          ]
        },
        {
          "sectionId": "createInvoice",
          "intent": "Uma fatura vinculada ao cliente e à obra fica registrada.",
          "organisms": [
            {
              "role": "primarySurface",
              "action": "cmdCreateInvoice"
            }
          ]
        },
        {
          "sectionId": "handoffInvoiceToClient",
          "intent": "O cliente recebe a fatura para consulta.",
          "organisms": [
            {
              "role": "contextualAction",
              "action": "cmdHandoffInvoiceToClient"
            }
          ]
        }
      ]
    },
    {
      "workspaceId": "materialUsageCatalogue",
      "tier": "recordCatalogue",
      "title": "Consumo de material",
      "purpose": "Cadastro de Consumo de material.",
      "kind": "operation",
      "entity": "MaterialUsage",
      "actors": [
        "fieldCoordinator",
        "fieldWorker"
      ],
      "profileRefs": [
        "fieldCoordinator",
        "fieldWorker"
      ],
      "featureRefs": [],
      "hostedStepRefs": [],
      "categoryRef": "entityRecordManagement",
      "bffCalls": [
        {
          "bffId": "qryListMaterialUsage",
          "kind": "query",
          "operationId": "listMaterialUsage",
          "outputKind": "paginated",
          "entityRef": "MaterialUsage"
        },
        {
          "bffId": "cmdCreateMaterialUsage",
          "kind": "command",
          "operationId": "createMaterialUsage",
          "outputKind": "object",
          "entityRef": "MaterialUsage",
          "inputSources": [
            {
              "inputId": "inventoryBalanceInventoryBalanceId",
              "bffId": "qryInventoryBalancePicker"
            },
            {
              "inputId": "inventoryItemInventoryItemId",
              "bffId": "qryInventoryItemPicker"
            }
          ]
        },
        {
          "bffId": "cmdUpdateMaterialUsage",
          "kind": "command",
          "operationId": "updateMaterialUsage",
          "outputKind": "object",
          "entityRef": "MaterialUsage",
          "inputSources": [
            {
              "inputId": "inventoryBalanceId",
              "bffId": "qryInventoryBalancePicker"
            },
            {
              "inputId": "inventoryItemId",
              "bffId": "qryInventoryItemPicker"
            },
            {
              "inputId": "projectId",
              "bffId": "qryProjectPicker"
            }
          ]
        },
        {
          "bffId": "cmdDeleteMaterialUsage",
          "kind": "command",
          "operationId": "deleteMaterialUsage",
          "outputKind": "object",
          "entityRef": "MaterialUsage"
        },
        {
          "bffId": "qryInventoryBalancePicker",
          "kind": "query",
          "operationId": "listInventoryBalance",
          "outputKind": "paginated",
          "entityRef": "InventoryBalance"
        },
        {
          "bffId": "qryInventoryItemPicker",
          "kind": "query",
          "operationId": "listInventoryItem",
          "outputKind": "paginated",
          "entityRef": "InventoryItem"
        },
        {
          "bffId": "qryProjectPicker",
          "kind": "query",
          "operationId": "listProject",
          "outputKind": "paginated",
          "entityRef": "Project"
        }
      ],
      "sections": [
        {
          "sectionId": "recordList",
          "intent": "Localizar Consumo de material.",
          "organisms": [
            {
              "role": "primarySurface",
              "dataSource": "qryListMaterialUsage"
            },
            {
              "role": "contextualAction",
              "action": "cmdDeleteMaterialUsage"
            }
          ]
        },
        {
          "sectionId": "recordForm",
          "intent": "Criar ou corrigir Consumo de material.",
          "organisms": [
            {
              "role": "primarySurface",
              "action": "cmdCreateMaterialUsage"
            },
            {
              "role": "contextualAction",
              "action": "cmdUpdateMaterialUsage"
            },
            {
              "role": "filterControl",
              "dataSource": "qryInventoryBalancePicker",
              "usage": "picker"
            },
            {
              "role": "filterControl",
              "dataSource": "qryInventoryItemPicker",
              "usage": "picker"
            },
            {
              "role": "filterControl",
              "dataSource": "qryProjectPicker",
              "usage": "picker"
            }
          ]
        }
      ]
    },
    {
      "workspaceId": "monitorDailyProjectRecords",
      "tier": "journey",
      "title": "Acompanhar registros diários da obra",
      "purpose": "Consultar horas e materiais recebidos para acompanhar execução e cronograma.",
      "kind": "operation",
      "entity": "Project",
      "actors": [
        "fieldCoordinator"
      ],
      "profileRefs": [
        "fieldCoordinator"
      ],
      "featureRefs": [
        "dailyFieldLogging",
        "jobCostTracking",
        "projectMaterialTracking"
      ],
      "hostedStepRefs": [
        "monitorDailyProjectRecords.locateProject",
        "monitorDailyProjectRecords.inspectProjectTimeLogs",
        "monitorDailyProjectRecords.inspectProjectMaterialUsages",
        "monitorDailyProjectRecords.inspectProjectExecutionOverview"
      ],
      "journeyRef": "monitorDailyProjectRecords",
      "categoryRef": "processWizard",
      "bffCalls": [
        {
          "bffId": "qryLocateProject",
          "kind": "query",
          "operationId": "locateProject",
          "outputKind": "paginated",
          "entityRef": "Project"
        },
        {
          "bffId": "qryInspectProjectTimeLogs",
          "kind": "query",
          "operationId": "inspectProjectTimeLogs",
          "outputKind": "object",
          "entityRef": "TimeLog"
        },
        {
          "bffId": "qryInspectProjectMaterialUsages",
          "kind": "query",
          "operationId": "inspectProjectMaterialUsages",
          "outputKind": "object",
          "entityRef": "MaterialUsage"
        },
        {
          "bffId": "qryInspectProjectExecutionOverview",
          "kind": "query",
          "operationId": "inspectProjectExecutionOverview",
          "outputKind": "object",
          "entityRef": "ProjectExecutionOverview"
        }
      ],
      "sections": [
        {
          "sectionId": "locateProject",
          "intent": "Uma obra ativa está selecionada para acompanhamento.",
          "organisms": [
            {
              "role": "primarySurface",
              "dataSource": "qryLocateProject",
              "usage": "picker"
            }
          ]
        },
        {
          "sectionId": "inspectProjectTimeLogs",
          "intent": "Registros de horas da obra estão visíveis.",
          "organisms": [
            {
              "role": "detailPanel",
              "dataSource": "qryInspectProjectTimeLogs"
            }
          ]
        },
        {
          "sectionId": "inspectProjectMaterialUsages",
          "intent": "Consumos associados à obra estão visíveis.",
          "organisms": [
            {
              "role": "detailPanel",
              "dataSource": "qryInspectProjectMaterialUsages"
            }
          ]
        },
        {
          "sectionId": "inspectProjectExecutionOverview",
          "intent": "Andamento, registros e próximos prazos estão consolidados.",
          "organisms": [
            {
              "role": "detailPanel",
              "dataSource": "qryInspectProjectExecutionOverview"
            }
          ]
        }
      ]
    },
    {
      "workspaceId": "projectCatalogue",
      "tier": "recordCatalogue",
      "title": "Obra",
      "purpose": "Cadastro de Obra.",
      "kind": "operation",
      "entity": "Project",
      "actors": [
        "billingStaff",
        "client",
        "fieldCoordinator",
        "fieldWorker",
        "projectManager"
      ],
      "profileRefs": [
        "billingStaff",
        "client",
        "fieldCoordinator",
        "fieldWorker",
        "projectManager"
      ],
      "featureRefs": [],
      "hostedStepRefs": [],
      "categoryRef": "entityRecordManagement",
      "bffCalls": [
        {
          "bffId": "qryListProject",
          "kind": "query",
          "operationId": "listProject",
          "outputKind": "paginated",
          "entityRef": "Project"
        },
        {
          "bffId": "cmdCreateProject",
          "kind": "command",
          "operationId": "createProject",
          "outputKind": "object",
          "entityRef": "Project"
        },
        {
          "bffId": "cmdUpdateProject",
          "kind": "command",
          "operationId": "updateProject",
          "outputKind": "object",
          "entityRef": "Project",
          "inputSources": [
            {
              "inputId": "projectId",
              "bffId": "qryClientPicker"
            }
          ]
        },
        {
          "bffId": "cmdDeleteProject",
          "kind": "command",
          "operationId": "deleteProject",
          "outputKind": "object",
          "entityRef": "Project",
          "inputSources": [
            {
              "inputId": "projectId",
              "bffId": "qryClientPicker"
            }
          ]
        },
        {
          "bffId": "qryClientPicker",
          "kind": "query",
          "operationId": "listClient",
          "outputKind": "paginated",
          "entityRef": "Client"
        }
      ],
      "sections": [
        {
          "sectionId": "recordList",
          "intent": "Localizar Obra.",
          "organisms": [
            {
              "role": "primarySurface",
              "dataSource": "qryListProject"
            },
            {
              "role": "contextualAction",
              "action": "cmdDeleteProject"
            }
          ]
        },
        {
          "sectionId": "recordForm",
          "intent": "Criar ou corrigir Obra.",
          "organisms": [
            {
              "role": "primarySurface",
              "action": "cmdCreateProject"
            },
            {
              "role": "contextualAction",
              "action": "cmdUpdateProject"
            },
            {
              "role": "filterControl",
              "dataSource": "qryClientPicker",
              "usage": "picker"
            }
          ]
        }
      ]
    },
    {
      "workspaceId": "projectCoordinationAssignmentCatalogue",
      "tier": "recordCatalogue",
      "title": "Atribuição de coordenação da obra",
      "purpose": "Cadastro de Atribuição de coordenação da obra.",
      "kind": "operation",
      "entity": "ProjectCoordinationAssignment",
      "actors": [
        "billingStaff",
        "fieldCoordinator",
        "fieldWorker",
        "projectManager"
      ],
      "profileRefs": [
        "billingStaff",
        "fieldCoordinator",
        "fieldWorker",
        "projectManager"
      ],
      "featureRefs": [],
      "hostedStepRefs": [],
      "categoryRef": "entityRecordManagement",
      "bffCalls": [
        {
          "bffId": "qryListProjectCoordinationAssignment",
          "kind": "query",
          "operationId": "listProjectCoordinationAssignment",
          "outputKind": "paginated",
          "entityRef": "ProjectCoordinationAssignment"
        },
        {
          "bffId": "cmdCreateProjectCoordinationAssignment",
          "kind": "command",
          "operationId": "createProjectCoordinationAssignment",
          "outputKind": "object",
          "entityRef": "ProjectCoordinationAssignment",
          "inputSources": [
            {
              "inputId": "projectId",
              "bffId": "qryProjectPicker"
            }
          ]
        },
        {
          "bffId": "cmdUpdateProjectCoordinationAssignment",
          "kind": "command",
          "operationId": "updateProjectCoordinationAssignment",
          "outputKind": "object",
          "entityRef": "ProjectCoordinationAssignment",
          "inputSources": [
            {
              "inputId": "projectId",
              "bffId": "qryProjectPicker"
            }
          ]
        },
        {
          "bffId": "cmdDeleteProjectCoordinationAssignment",
          "kind": "command",
          "operationId": "deleteProjectCoordinationAssignment",
          "outputKind": "object",
          "entityRef": "ProjectCoordinationAssignment"
        },
        {
          "bffId": "qryProjectPicker",
          "kind": "query",
          "operationId": "listProject",
          "outputKind": "paginated",
          "entityRef": "Project"
        }
      ],
      "sections": [
        {
          "sectionId": "recordList",
          "intent": "Localizar Atribuição de coordenação da obra.",
          "organisms": [
            {
              "role": "primarySurface",
              "dataSource": "qryListProjectCoordinationAssignment"
            },
            {
              "role": "contextualAction",
              "action": "cmdDeleteProjectCoordinationAssignment"
            }
          ]
        },
        {
          "sectionId": "recordForm",
          "intent": "Criar ou corrigir Atribuição de coordenação da obra.",
          "organisms": [
            {
              "role": "primarySurface",
              "action": "cmdCreateProjectCoordinationAssignment"
            },
            {
              "role": "contextualAction",
              "action": "cmdUpdateProjectCoordinationAssignment"
            },
            {
              "role": "filterControl",
              "dataSource": "qryProjectPicker",
              "usage": "picker"
            }
          ]
        }
      ]
    },
    {
      "workspaceId": "projectDashboardView",
      "tier": "projection",
      "title": "Painel de portfólio de obras",
      "purpose": "Projeção organizacional que consolida obras ativas, orçamento versus realizado, atenção de custo e tarefas próximas para monitoramento gerencial.",
      "kind": "landing",
      "entity": "ProjectDashboard",
      "actors": [
        "projectManager"
      ],
      "profileRefs": [
        "projectManager"
      ],
      "featureRefs": [],
      "hostedStepRefs": [
        "reviewProjectPortfolio.inspectProjectDashboard"
      ],
      "categoryRef": "dashboardCommandCenter",
      "bffCalls": [
        {
          "bffId": "qryProjectDashboardView",
          "kind": "query",
          "operationId": "inspectProjectDashboard",
          "outputKind": "object",
          "entityRef": "ProjectDashboard"
        }
      ],
      "sections": [
        {
          "sectionId": "overview",
          "intent": "Projeção organizacional que consolida obras ativas, orçamento versus realizado, atenção de custo e tarefas próximas para monitoramento gerencial.",
          "organisms": [
            {
              "role": "primarySurface",
              "dataSource": "qryProjectDashboardView"
            }
          ]
        }
      ]
    },
    {
      "workspaceId": "projectExecutionOverviewView",
      "tier": "projection",
      "title": "Visão consolidada de execução da obra",
      "purpose": "Projeção por obra que reúne andamento de tarefas, próximos compromissos, horas, materiais, custos realizados e impactos de alterações para acompanhamento e comunicação.",
      "kind": "landing",
      "entity": "ProjectExecutionOverview",
      "actors": [
        "projectManager"
      ],
      "profileRefs": [
        "projectManager"
      ],
      "featureRefs": [],
      "hostedStepRefs": [
        "reviewProjectPortfolio.inspectProjectExecutionOverview"
      ],
      "categoryRef": "dashboardCommandCenter",
      "bffCalls": [
        {
          "bffId": "qryProjectExecutionOverviewView",
          "kind": "query",
          "operationId": "inspectProjectExecutionOverview",
          "outputKind": "object",
          "entityRef": "ProjectExecutionOverview"
        }
      ],
      "sections": [
        {
          "sectionId": "overview",
          "intent": "Projeção por obra que reúne andamento de tarefas, próximos compromissos, horas, materiais, custos realizados e impactos de alterações para acompanhamento e comunicação.",
          "organisms": [
            {
              "role": "primarySurface",
              "dataSource": "qryProjectExecutionOverviewView"
            }
          ]
        }
      ]
    },
    {
      "workspaceId": "projectHub",
      "tier": "hub",
      "title": "Obra",
      "purpose": "Painel de Obra.",
      "kind": "landing",
      "entity": "Project",
      "actors": [
        "billingStaff",
        "client",
        "fieldCoordinator",
        "fieldWorker",
        "projectManager"
      ],
      "profileRefs": [
        "billingStaff",
        "client",
        "fieldCoordinator",
        "fieldWorker",
        "projectManager"
      ],
      "featureRefs": [],
      "hostedStepRefs": [],
      "categoryRef": "dashboardCommandCenter",
      "bffCalls": [
        {
          "bffId": "qryListProject",
          "kind": "query",
          "operationId": "listProject",
          "outputKind": "paginated",
          "entityRef": "Project"
        },
        {
          "bffId": "qryClientBillingSummaryView",
          "kind": "query",
          "operationId": "inspectClientBillingSummary",
          "outputKind": "object",
          "entityRef": "ClientBillingSummary"
        },
        {
          "bffId": "qryProjectDashboardView",
          "kind": "query",
          "operationId": "inspectProjectDashboard",
          "outputKind": "object",
          "entityRef": "ProjectDashboard"
        },
        {
          "bffId": "qryProjectExecutionOverviewView",
          "kind": "query",
          "operationId": "inspectProjectExecutionOverview",
          "outputKind": "object",
          "entityRef": "ProjectExecutionOverview"
        },
        {
          "bffId": "qryProjectTimelineView",
          "kind": "query",
          "operationId": "inspectProjectTimeline",
          "outputKind": "object",
          "entityRef": "ProjectTimeline"
        },
        {
          "bffId": "qryScheduleRiskAssessmentView",
          "kind": "query",
          "operationId": "inspectScheduleRiskAssessment",
          "outputKind": "object",
          "entityRef": "ScheduleRiskAssessment"
        },
        {
          "bffId": "qryListChangeOrder",
          "kind": "query",
          "operationId": "listChangeOrder",
          "outputKind": "paginated",
          "entityRef": "ChangeOrder"
        },
        {
          "bffId": "qryListInvoice",
          "kind": "query",
          "operationId": "listInvoice",
          "outputKind": "paginated",
          "entityRef": "Invoice"
        },
        {
          "bffId": "qryListMaterialUsage",
          "kind": "query",
          "operationId": "listMaterialUsage",
          "outputKind": "paginated",
          "entityRef": "MaterialUsage"
        },
        {
          "bffId": "qryListProjectCoordinationAssignment",
          "kind": "query",
          "operationId": "listProjectCoordinationAssignment",
          "outputKind": "paginated",
          "entityRef": "ProjectCoordinationAssignment"
        },
        {
          "bffId": "qryListStatusReport",
          "kind": "query",
          "operationId": "listStatusReport",
          "outputKind": "paginated",
          "entityRef": "StatusReport"
        },
        {
          "bffId": "qryListWorkTask",
          "kind": "query",
          "operationId": "listWorkTask",
          "outputKind": "paginated",
          "entityRef": "WorkTask"
        }
      ],
      "sections": [
        {
          "sectionId": "collection",
          "intent": "Carteira e busca.",
          "organisms": [
            {
              "role": "primarySurface",
              "dataSource": "qryListProject"
            }
          ]
        },
        {
          "sectionId": "record",
          "intent": "Registro selecionado e o que gira em volta dele.",
          "organisms": [
            {
              "role": "detailPanel",
              "dataSource": "qryClientBillingSummaryView"
            },
            {
              "role": "detailPanel",
              "dataSource": "qryProjectDashboardView"
            },
            {
              "role": "detailPanel",
              "dataSource": "qryProjectExecutionOverviewView"
            },
            {
              "role": "detailPanel",
              "dataSource": "qryProjectTimelineView"
            },
            {
              "role": "detailPanel",
              "dataSource": "qryScheduleRiskAssessmentView"
            },
            {
              "role": "detailPanel",
              "dataSource": "qryListChangeOrder"
            },
            {
              "role": "detailPanel",
              "dataSource": "qryListInvoice"
            },
            {
              "role": "detailPanel",
              "dataSource": "qryListMaterialUsage"
            },
            {
              "role": "detailPanel",
              "dataSource": "qryListProjectCoordinationAssignment"
            },
            {
              "role": "detailPanel",
              "dataSource": "qryListStatusReport"
            },
            {
              "role": "detailPanel",
              "dataSource": "qryListWorkTask"
            }
          ]
        }
      ],
      "hubCatalogue": {
        "anchorEntity": "Project",
        "items": [
          {
            "itemId": "tileClientBillingSummary",
            "kind": "projectionTile",
            "label": "Resumo de faturamento do cliente",
            "entityRef": "ClientBillingSummary",
            "targetRef": "clientBillingSummaryView",
            "sourceOperationId": "inspectClientBillingSummary",
            "sourceBffId": "qryClientBillingSummaryView",
            "sourceOutputKind": "object",
            "score": 3
          },
          {
            "itemId": "tileProjectDashboard",
            "kind": "projectionTile",
            "label": "Painel de portfólio de obras",
            "entityRef": "ProjectDashboard",
            "targetRef": "projectDashboardView",
            "sourceOperationId": "inspectProjectDashboard",
            "sourceBffId": "qryProjectDashboardView",
            "sourceOutputKind": "object",
            "score": 3
          },
          {
            "itemId": "tileProjectExecutionOverview",
            "kind": "projectionTile",
            "label": "Visão consolidada de execução da obra",
            "entityRef": "ProjectExecutionOverview",
            "targetRef": "projectExecutionOverviewView",
            "sourceOperationId": "inspectProjectExecutionOverview",
            "sourceBffId": "qryProjectExecutionOverviewView",
            "sourceOutputKind": "object",
            "score": 3
          },
          {
            "itemId": "tileProjectTimeline",
            "kind": "projectionTile",
            "label": "Cronograma da obra",
            "entityRef": "ProjectTimeline",
            "targetRef": "projectTimelineView",
            "sourceOperationId": "inspectProjectTimeline",
            "sourceBffId": "qryProjectTimelineView",
            "sourceOutputKind": "object",
            "score": 3
          },
          {
            "itemId": "tileScheduleRiskAssessment",
            "kind": "projectionTile",
            "label": "Avaliação de risco de atraso",
            "entityRef": "ScheduleRiskAssessment",
            "targetRef": "scheduleRiskAssessmentView",
            "sourceOperationId": "inspectScheduleRiskAssessment",
            "sourceBffId": "qryScheduleRiskAssessmentView",
            "sourceOutputKind": "object",
            "score": 3
          },
          {
            "itemId": "actionAssignWorkTask",
            "kind": "action",
            "label": "Planejar e atribuir tarefa de campo",
            "entityRef": "WorkTask",
            "targetRef": "assignWorkTask",
            "score": 2
          },
          {
            "itemId": "actionConsultApprovedProjectChangeOrders",
            "kind": "action",
            "label": "Consultar alterações aprovadas da obra",
            "entityRef": "Project",
            "targetRef": "consultApprovedProjectChangeOrders",
            "score": 2
          },
          {
            "itemId": "actionConsultClientProjectUpdates",
            "kind": "action",
            "label": "Consultar status e faturamento da obra",
            "entityRef": "Project",
            "targetRef": "consultClientProjectUpdates",
            "score": 2
          },
          {
            "itemId": "actionGenerateAndPublishProjectStatusReport",
            "kind": "action",
            "label": "Gerar e publicar relatório de status",
            "entityRef": "StatusReport",
            "targetRef": "generateAndPublishProjectStatusReport",
            "score": 2
          },
          {
            "itemId": "actionIssueProjectInvoice",
            "kind": "action",
            "label": "Emitir fatura da obra",
            "entityRef": "Invoice",
            "targetRef": "issueProjectInvoice",
            "score": 2
          },
          {
            "itemId": "actionMonitorDailyProjectRecords",
            "kind": "action",
            "label": "Acompanhar registros diários da obra",
            "entityRef": "Project",
            "targetRef": "monitorDailyProjectRecords",
            "score": 2
          },
          {
            "itemId": "actionRecordProjectMaterialUsage",
            "kind": "action",
            "label": "Registrar consumo de material da obra",
            "entityRef": "MaterialUsage",
            "targetRef": "recordProjectMaterialUsage",
            "score": 2
          },
          {
            "itemId": "actionReviewProjectPortfolio",
            "kind": "action",
            "label": "Monitorar portfólio e direcionar obra",
            "entityRef": "ProjectDashboard",
            "targetRef": "reviewProjectPortfolio",
            "score": 2
          },
          {
            "itemId": "actionSubmitChangeOrder",
            "kind": "action",
            "label": "Registrar e submeter ordem de mudança",
            "entityRef": "ChangeOrder",
            "targetRef": "submitChangeOrder",
            "score": 2
          },
          {
            "itemId": "relatedChangeOrder",
            "kind": "relatedList",
            "label": "Ordem de mudança",
            "entityRef": "ChangeOrder",
            "targetRef": "changeOrderCatalogue",
            "sourceOperationId": "listChangeOrder",
            "sourceBffId": "qryListChangeOrder",
            "sourceOutputKind": "paginated",
            "score": 2
          },
          {
            "itemId": "relatedInvoice",
            "kind": "relatedList",
            "label": "Fatura",
            "entityRef": "Invoice",
            "targetRef": "invoiceCatalogue",
            "sourceOperationId": "listInvoice",
            "sourceBffId": "qryListInvoice",
            "sourceOutputKind": "paginated",
            "score": 2
          },
          {
            "itemId": "relatedMaterialUsage",
            "kind": "relatedList",
            "label": "Consumo de material",
            "entityRef": "MaterialUsage",
            "targetRef": "materialUsageCatalogue",
            "sourceOperationId": "listMaterialUsage",
            "sourceBffId": "qryListMaterialUsage",
            "sourceOutputKind": "paginated",
            "score": 2
          },
          {
            "itemId": "relatedProjectCoordinationAssignment",
            "kind": "relatedList",
            "label": "Atribuição de coordenação da obra",
            "entityRef": "ProjectCoordinationAssignment",
            "targetRef": "projectCoordinationAssignmentCatalogue",
            "sourceOperationId": "listProjectCoordinationAssignment",
            "sourceBffId": "qryListProjectCoordinationAssignment",
            "sourceOutputKind": "paginated",
            "score": 2
          },
          {
            "itemId": "relatedStatusReport",
            "kind": "relatedList",
            "label": "Relatório de status",
            "entityRef": "StatusReport",
            "targetRef": "statusReportCatalogue",
            "sourceOperationId": "listStatusReport",
            "sourceBffId": "qryListStatusReport",
            "sourceOutputKind": "paginated",
            "score": 2
          },
          {
            "itemId": "relatedWorkTask",
            "kind": "relatedList",
            "label": "Tarefa de trabalho",
            "entityRef": "WorkTask",
            "targetRef": "workTaskCatalogue",
            "sourceOperationId": "listWorkTask",
            "sourceBffId": "qryListWorkTask",
            "sourceOutputKind": "paginated",
            "score": 2
          },
          {
            "itemId": "pendingChangeOrder",
            "kind": "pending",
            "label": "Ordem de mudança",
            "entityRef": "ChangeOrder",
            "targetRef": "submitChangeOrder",
            "score": 1
          },
          {
            "itemId": "pendingInvoice",
            "kind": "pending",
            "label": "Fatura",
            "entityRef": "Invoice",
            "targetRef": "issueProjectInvoice",
            "score": 1
          },
          {
            "itemId": "pendingStatusReport",
            "kind": "pending",
            "label": "Relatório de status",
            "entityRef": "StatusReport",
            "targetRef": "generateAndPublishProjectStatusReport",
            "score": 1
          }
        ]
      },
      "navigation": [
        {
          "targetWorkspaceId": "assignWorkTask",
          "label": "Planejar e atribuir tarefa de campo",
          "prominence": "primary",
          "order": 5
        },
        {
          "targetWorkspaceId": "consultApprovedProjectChangeOrders",
          "label": "Consultar alterações aprovadas da obra",
          "prominence": "primary",
          "order": 6
        },
        {
          "targetWorkspaceId": "consultClientProjectUpdates",
          "label": "Consultar status e faturamento da obra",
          "prominence": "contextual",
          "order": 7
        },
        {
          "targetWorkspaceId": "generateAndPublishProjectStatusReport",
          "label": "Gerar e publicar relatório de status",
          "prominence": "contextual",
          "order": 8
        },
        {
          "targetWorkspaceId": "issueProjectInvoice",
          "label": "Emitir fatura da obra",
          "prominence": "contextual",
          "order": 9
        },
        {
          "targetWorkspaceId": "monitorDailyProjectRecords",
          "label": "Acompanhar registros diários da obra",
          "prominence": "contextual",
          "order": 10
        },
        {
          "targetWorkspaceId": "recordProjectMaterialUsage",
          "label": "Registrar consumo de material da obra",
          "prominence": "contextual",
          "order": 11
        },
        {
          "targetWorkspaceId": "reviewProjectPortfolio",
          "label": "Monitorar portfólio e direcionar obra",
          "prominence": "contextual",
          "order": 12
        },
        {
          "targetWorkspaceId": "submitChangeOrder",
          "label": "Registrar e submeter ordem de mudança",
          "prominence": "contextual",
          "order": 13
        },
        {
          "targetWorkspaceId": "submitChangeOrder",
          "label": "Ordem de mudança",
          "prominence": "contextual",
          "order": 20
        },
        {
          "targetWorkspaceId": "issueProjectInvoice",
          "label": "Fatura",
          "prominence": "contextual",
          "order": 21
        },
        {
          "targetWorkspaceId": "generateAndPublishProjectStatusReport",
          "label": "Relatório de status",
          "prominence": "contextual",
          "order": 22
        }
      ]
    },
    {
      "workspaceId": "projectTimelineView",
      "tier": "projection",
      "title": "Cronograma da obra",
      "purpose": "Projeção do sequenciamento das tarefas e prazos de uma obra para planejamento, atribuição e acompanhamento de campo.",
      "kind": "landing",
      "entity": "ProjectTimeline",
      "actors": [
        "fieldCoordinator"
      ],
      "profileRefs": [
        "fieldCoordinator"
      ],
      "featureRefs": [],
      "hostedStepRefs": [
        "assignWorkTask.inspectProjectTimeline"
      ],
      "categoryRef": "dashboardCommandCenter",
      "bffCalls": [
        {
          "bffId": "qryProjectTimelineView",
          "kind": "query",
          "operationId": "inspectProjectTimeline",
          "outputKind": "object",
          "entityRef": "ProjectTimeline"
        }
      ],
      "sections": [
        {
          "sectionId": "overview",
          "intent": "Projeção do sequenciamento das tarefas e prazos de uma obra para planejamento, atribuição e acompanhamento de campo.",
          "organisms": [
            {
              "role": "primarySurface",
              "dataSource": "qryProjectTimelineView"
            }
          ]
        }
      ]
    },
    {
      "workspaceId": "recordProjectMaterialUsage",
      "tier": "journey",
      "title": "Registrar consumo de material da obra",
      "purpose": "Rastrear materiais consumidos em uma obra para apoiar execução e custeio.",
      "kind": "operation",
      "entity": "MaterialUsage",
      "actors": [
        "fieldWorker"
      ],
      "profileRefs": [
        "fieldWorker"
      ],
      "featureRefs": [
        "jobCostTracking",
        "projectMaterialTracking"
      ],
      "hostedStepRefs": [
        "recordProjectMaterialUsage.locateProject",
        "recordProjectMaterialUsage.locateInventoryItem",
        "recordProjectMaterialUsage.createMaterialUsage",
        "recordProjectMaterialUsage.handoffMaterialUsageToFieldCoordinator"
      ],
      "journeyRef": "recordProjectMaterialUsage",
      "categoryRef": "processWizard",
      "bffCalls": [
        {
          "bffId": "qryLocateProject",
          "kind": "query",
          "operationId": "locateProject",
          "outputKind": "paginated",
          "entityRef": "Project"
        },
        {
          "bffId": "qryLocateInventoryItem",
          "kind": "query",
          "operationId": "locateInventoryItem",
          "outputKind": "paginated",
          "entityRef": "InventoryItem"
        },
        {
          "bffId": "cmdCreateMaterialUsage",
          "kind": "command",
          "operationId": "createMaterialUsage",
          "outputKind": "object",
          "entityRef": "MaterialUsage",
          "inputSources": [
            {
              "inputId": "inventoryBalanceInventoryBalanceId",
              "bffId": "qryInventoryBalancePicker"
            },
            {
              "inputId": "inventoryItemInventoryItemId",
              "bffId": "qryLocateInventoryItem"
            }
          ]
        },
        {
          "bffId": "cmdHandoffMaterialUsageToFieldCoordinator",
          "kind": "command",
          "operationId": "handoffMaterialUsageToFieldCoordinator",
          "outputKind": "object",
          "entityRef": "MaterialUsage"
        },
        {
          "bffId": "qryInventoryBalancePicker",
          "kind": "query",
          "operationId": "listInventoryBalance",
          "outputKind": "paginated",
          "entityRef": "InventoryBalance"
        }
      ],
      "sections": [
        {
          "sectionId": "locateProject",
          "intent": "Uma obra ativa do catálogo compartilhado está selecionada.",
          "organisms": [
            {
              "role": "primarySurface",
              "dataSource": "qryLocateProject",
              "usage": "picker"
            }
          ]
        },
        {
          "sectionId": "locateInventoryItem",
          "intent": "Um item do catálogo compartilhado de materiais e estoque está selecionado.",
          "organisms": [
            {
              "role": "primarySurface",
              "dataSource": "qryLocateInventoryItem",
              "usage": "picker"
            }
          ]
        },
        {
          "sectionId": "createMaterialUsage",
          "intent": "O consumo fica vinculado à obra e disponível para o custo realizado.",
          "organisms": [
            {
              "role": "primarySurface",
              "action": "cmdCreateMaterialUsage"
            },
            {
              "role": "filterControl",
              "dataSource": "qryInventoryBalancePicker",
              "usage": "picker"
            }
          ]
        },
        {
          "sectionId": "handoffMaterialUsageToFieldCoordinator",
          "intent": "O coordenador recebe o consumo para acompanhamento.",
          "organisms": [
            {
              "role": "contextualAction",
              "action": "cmdHandoffMaterialUsageToFieldCoordinator"
            }
          ]
        }
      ]
    },
    {
      "workspaceId": "recordWorkTime",
      "tier": "journey",
      "title": "Registrar horas trabalhadas",
      "purpose": "Registrar horas de execução para apoiar o custo realizado da obra.",
      "kind": "operation",
      "entity": "TimeLog",
      "actors": [
        "fieldWorker"
      ],
      "profileRefs": [
        "fieldWorker"
      ],
      "featureRefs": [
        "dailyFieldLogging",
        "jobCostTracking"
      ],
      "hostedStepRefs": [
        "recordWorkTime.locateFieldWorker",
        "recordWorkTime.locateWorkTask",
        "recordWorkTime.createTimeLog",
        "recordWorkTime.handoffTimeLogToFieldCoordinator"
      ],
      "journeyRef": "recordWorkTime",
      "categoryRef": "processWizard",
      "bffCalls": [
        {
          "bffId": "qryLocateFieldWorker",
          "kind": "query",
          "operationId": "locateFieldWorker",
          "outputKind": "paginated",
          "entityRef": "FieldWorker"
        },
        {
          "bffId": "qryLocateWorkTask",
          "kind": "query",
          "operationId": "locateWorkTask",
          "outputKind": "paginated",
          "entityRef": "WorkTask"
        },
        {
          "bffId": "cmdCreateTimeLog",
          "kind": "command",
          "operationId": "createTimeLog",
          "outputKind": "object",
          "entityRef": "TimeLog",
          "inputSources": [
            {
              "inputId": "workTaskWorkTaskId",
              "bffId": "qryLocateWorkTask"
            }
          ]
        },
        {
          "bffId": "cmdHandoffTimeLogToFieldCoordinator",
          "kind": "command",
          "operationId": "handoffTimeLogToFieldCoordinator",
          "outputKind": "object",
          "entityRef": "TimeLog"
        }
      ],
      "sections": [
        {
          "sectionId": "locateFieldWorker",
          "intent": "O trabalhador que realizou o trabalho está selecionado no diretório da organização.",
          "organisms": [
            {
              "role": "primarySurface",
              "dataSource": "qryLocateFieldWorker",
              "usage": "picker"
            }
          ]
        },
        {
          "sectionId": "locateWorkTask",
          "intent": "Uma tarefa da obra está selecionada para o registro.",
          "organisms": [
            {
              "role": "primarySurface",
              "dataSource": "qryLocateWorkTask",
              "usage": "picker"
            }
          ]
        },
        {
          "sectionId": "createTimeLog",
          "intent": "Um registro diário vinculado ao trabalhador e à tarefa fica armazenado.",
          "organisms": [
            {
              "role": "primarySurface",
              "action": "cmdCreateTimeLog"
            }
          ]
        },
        {
          "sectionId": "handoffTimeLogToFieldCoordinator",
          "intent": "O coordenador recebe o registro de horas para acompanhamento.",
          "organisms": [
            {
              "role": "contextualAction",
              "action": "cmdHandoffTimeLogToFieldCoordinator"
            }
          ]
        }
      ]
    },
    {
      "workspaceId": "reviewProjectPortfolio",
      "tier": "journey",
      "title": "Monitorar portfólio e direcionar obra",
      "purpose": "Identificar obras ativas que exigem atenção de custo ou prazo e direcionar seu acompanhamento.",
      "kind": "operation",
      "entity": "ProjectDashboard",
      "actors": [
        "projectManager"
      ],
      "profileRefs": [
        "projectManager"
      ],
      "featureRefs": [
        "projectPortfolioMonitoring",
        "projectScheduleVisibility"
      ],
      "hostedStepRefs": [
        "reviewProjectPortfolio.inspectProjectDashboard",
        "reviewProjectPortfolio.locateProject",
        "reviewProjectPortfolio.inspectProjectExecutionOverview",
        "reviewProjectPortfolio.handoffProjectToFieldCoordinator"
      ],
      "journeyRef": "reviewProjectPortfolio",
      "categoryRef": "processWizard",
      "bffCalls": [
        {
          "bffId": "qryInspectProjectDashboard",
          "kind": "query",
          "operationId": "inspectProjectDashboard",
          "outputKind": "object",
          "entityRef": "ProjectDashboard"
        },
        {
          "bffId": "qryLocateProject",
          "kind": "query",
          "operationId": "locateProject",
          "outputKind": "paginated",
          "entityRef": "Project"
        },
        {
          "bffId": "qryInspectProjectExecutionOverview",
          "kind": "query",
          "operationId": "inspectProjectExecutionOverview",
          "outputKind": "object",
          "entityRef": "ProjectExecutionOverview"
        },
        {
          "bffId": "cmdHandoffProjectToFieldCoordinator",
          "kind": "command",
          "operationId": "handoffProjectToFieldCoordinator",
          "outputKind": "object",
          "entityRef": "Project"
        }
      ],
      "sections": [
        {
          "sectionId": "inspectProjectDashboard",
          "intent": "Projetos ativos, orçamento versus realizado e tarefas próximas estão visíveis.",
          "organisms": [
            {
              "role": "detailPanel",
              "dataSource": "qryInspectProjectDashboard"
            }
          ]
        },
        {
          "sectionId": "locateProject",
          "intent": "Uma obra do catálogo compartilhado de projetos está selecionada.",
          "organisms": [
            {
              "role": "primarySurface",
              "dataSource": "qryLocateProject",
              "usage": "picker"
            }
          ]
        },
        {
          "sectionId": "inspectProjectExecutionOverview",
          "intent": "Andamento, custos e próximos compromissos da obra estão consolidados.",
          "organisms": [
            {
              "role": "detailPanel",
              "dataSource": "qryInspectProjectExecutionOverview"
            }
          ]
        },
        {
          "sectionId": "handoffProjectToFieldCoordinator",
          "intent": "O coordenador de campo recebe a obra para coordenar a execução.",
          "organisms": [
            {
              "role": "contextualAction",
              "action": "cmdHandoffProjectToFieldCoordinator"
            }
          ]
        }
      ]
    },
    {
      "workspaceId": "scheduleRiskAssessmentView",
      "tier": "projection",
      "title": "Avaliação de risco de atraso",
      "purpose": "Projeção que identifica tarefas não concluídas com risco de atraso e os indicadores que explicam o risco para a obra e o relatório de status.",
      "kind": "landing",
      "entity": "ScheduleRiskAssessment",
      "actors": [
        "projectManager"
      ],
      "profileRefs": [
        "projectManager"
      ],
      "featureRefs": [],
      "hostedStepRefs": [
        "generateAndPublishProjectStatusReport.inspectScheduleRiskAssessment"
      ],
      "categoryRef": "dashboardCommandCenter",
      "bffCalls": [
        {
          "bffId": "qryScheduleRiskAssessmentView",
          "kind": "query",
          "operationId": "inspectScheduleRiskAssessment",
          "outputKind": "object",
          "entityRef": "ScheduleRiskAssessment"
        }
      ],
      "sections": [
        {
          "sectionId": "overview",
          "intent": "Projeção que identifica tarefas não concluídas com risco de atraso e os indicadores que explicam o risco para a obra e o relatório de status.",
          "organisms": [
            {
              "role": "primarySurface",
              "dataSource": "qryScheduleRiskAssessmentView"
            }
          ]
        }
      ]
    },
    {
      "workspaceId": "statusReportCatalogue",
      "tier": "recordCatalogue",
      "title": "Relatório de status",
      "purpose": "Cadastro de Relatório de status.",
      "kind": "operation",
      "entity": "StatusReport",
      "actors": [
        "client",
        "projectManager"
      ],
      "profileRefs": [
        "client",
        "projectManager"
      ],
      "featureRefs": [],
      "hostedStepRefs": [],
      "categoryRef": "entityRecordManagement",
      "bffCalls": [
        {
          "bffId": "qryListStatusReport",
          "kind": "query",
          "operationId": "listStatusReport",
          "outputKind": "paginated",
          "entityRef": "StatusReport"
        },
        {
          "bffId": "cmdCreateStatusReport",
          "kind": "command",
          "operationId": "createStatusReport",
          "outputKind": "object",
          "entityRef": "StatusReport",
          "inputSources": [
            {
              "inputId": "projectExecutionOverviewProjectId",
              "bffId": "qryProjectPicker"
            }
          ]
        },
        {
          "bffId": "cmdUpdateStatusReport",
          "kind": "command",
          "operationId": "updateStatusReport",
          "outputKind": "object",
          "entityRef": "StatusReport",
          "inputSources": [
            {
              "inputId": "projectId",
              "bffId": "qryProjectPicker"
            }
          ]
        },
        {
          "bffId": "cmdDeleteStatusReport",
          "kind": "command",
          "operationId": "deleteStatusReport",
          "outputKind": "object",
          "entityRef": "StatusReport"
        },
        {
          "bffId": "qryProjectPicker",
          "kind": "query",
          "operationId": "listProject",
          "outputKind": "paginated",
          "entityRef": "Project"
        }
      ],
      "sections": [
        {
          "sectionId": "recordList",
          "intent": "Localizar Relatório de status.",
          "organisms": [
            {
              "role": "primarySurface",
              "dataSource": "qryListStatusReport"
            },
            {
              "role": "contextualAction",
              "action": "cmdDeleteStatusReport"
            }
          ]
        },
        {
          "sectionId": "recordForm",
          "intent": "Criar ou corrigir Relatório de status.",
          "organisms": [
            {
              "role": "primarySurface",
              "action": "cmdCreateStatusReport"
            },
            {
              "role": "contextualAction",
              "action": "cmdUpdateStatusReport"
            },
            {
              "role": "filterControl",
              "dataSource": "qryProjectPicker",
              "usage": "picker"
            }
          ]
        }
      ]
    },
    {
      "workspaceId": "submitChangeOrder",
      "tier": "journey",
      "title": "Registrar e submeter ordem de mudança",
      "purpose": "Formalizar uma alteração da obra para tratamento do gerente de projeto.",
      "kind": "workflow",
      "entity": "ChangeOrder",
      "workflowId": "changeOrderLifecycle",
      "actors": [
        "fieldCoordinator"
      ],
      "profileRefs": [
        "fieldCoordinator"
      ],
      "featureRefs": [
        "changeOrderControl",
        "clientCommunication",
        "jobCostTracking"
      ],
      "hostedStepRefs": [
        "submitChangeOrder.locateClient",
        "submitChangeOrder.locateProject",
        "submitChangeOrder.createChangeOrder",
        "submitChangeOrder.handoffChangeOrderToProjectManager"
      ],
      "journeyRef": "submitChangeOrder",
      "categoryRef": "processWizard",
      "bffCalls": [
        {
          "bffId": "qryLocateClient",
          "kind": "query",
          "operationId": "locateClient",
          "outputKind": "paginated",
          "entityRef": "Client"
        },
        {
          "bffId": "qryLocateProject",
          "kind": "query",
          "operationId": "locateProject",
          "outputKind": "paginated",
          "entityRef": "Project"
        },
        {
          "bffId": "cmdCreateChangeOrder",
          "kind": "command",
          "operationId": "createChangeOrder",
          "outputKind": "object",
          "entityRef": "ChangeOrder",
          "inputSources": [
            {
              "inputId": "clientClientId",
              "bffId": "qryLocateClient"
            }
          ]
        },
        {
          "bffId": "cmdHandoffChangeOrderToProjectManager",
          "kind": "command",
          "operationId": "handoffChangeOrderToProjectManager",
          "outputKind": "object",
          "entityRef": "ChangeOrder"
        }
      ],
      "sections": [
        {
          "sectionId": "locateClient",
          "intent": "Um cliente do catálogo compartilhado está selecionado.",
          "organisms": [
            {
              "role": "primarySurface",
              "dataSource": "qryLocateClient",
              "usage": "picker"
            }
          ]
        },
        {
          "sectionId": "locateProject",
          "intent": "Uma obra do cliente selecionado está selecionada.",
          "organisms": [
            {
              "role": "primarySurface",
              "dataSource": "qryLocateProject",
              "usage": "picker"
            }
          ]
        },
        {
          "sectionId": "createChangeOrder",
          "intent": "Uma ordem de mudança vinculada ao cliente e à obra fica registrada.",
          "organisms": [
            {
              "role": "primarySurface",
              "action": "cmdCreateChangeOrder"
            }
          ]
        },
        {
          "sectionId": "handoffChangeOrderToProjectManager",
          "intent": "O gerente recebe a ordem para recusá-la ou encaminhá-la ao cliente para aprovação.",
          "organisms": [
            {
              "role": "contextualAction",
              "action": "cmdHandoffChangeOrderToProjectManager"
            }
          ]
        }
      ]
    },
    {
      "workspaceId": "timeLogCatalogue",
      "tier": "recordCatalogue",
      "title": "Registro de horas",
      "purpose": "Cadastro de Registro de horas.",
      "kind": "operation",
      "entity": "TimeLog",
      "actors": [
        "fieldCoordinator",
        "fieldWorker"
      ],
      "profileRefs": [
        "fieldCoordinator",
        "fieldWorker"
      ],
      "featureRefs": [],
      "hostedStepRefs": [],
      "categoryRef": "entityRecordManagement",
      "bffCalls": [
        {
          "bffId": "qryListTimeLog",
          "kind": "query",
          "operationId": "listTimeLog",
          "outputKind": "paginated",
          "entityRef": "TimeLog"
        },
        {
          "bffId": "cmdCreateTimeLog",
          "kind": "command",
          "operationId": "createTimeLog",
          "outputKind": "object",
          "entityRef": "TimeLog",
          "inputSources": [
            {
              "inputId": "workTaskWorkTaskId",
              "bffId": "qryWorkTaskPicker"
            }
          ]
        },
        {
          "bffId": "cmdUpdateTimeLog",
          "kind": "command",
          "operationId": "updateTimeLog",
          "outputKind": "object",
          "entityRef": "TimeLog",
          "inputSources": [
            {
              "inputId": "workTaskId",
              "bffId": "qryWorkTaskPicker"
            }
          ]
        },
        {
          "bffId": "cmdDeleteTimeLog",
          "kind": "command",
          "operationId": "deleteTimeLog",
          "outputKind": "object",
          "entityRef": "TimeLog"
        },
        {
          "bffId": "qryWorkTaskPicker",
          "kind": "query",
          "operationId": "listWorkTask",
          "outputKind": "paginated",
          "entityRef": "WorkTask"
        }
      ],
      "sections": [
        {
          "sectionId": "recordList",
          "intent": "Localizar Registro de horas.",
          "organisms": [
            {
              "role": "primarySurface",
              "dataSource": "qryListTimeLog"
            },
            {
              "role": "contextualAction",
              "action": "cmdDeleteTimeLog"
            }
          ]
        },
        {
          "sectionId": "recordForm",
          "intent": "Criar ou corrigir Registro de horas.",
          "organisms": [
            {
              "role": "primarySurface",
              "action": "cmdCreateTimeLog"
            },
            {
              "role": "contextualAction",
              "action": "cmdUpdateTimeLog"
            },
            {
              "role": "filterControl",
              "dataSource": "qryWorkTaskPicker",
              "usage": "picker"
            }
          ]
        }
      ]
    },
    {
      "workspaceId": "updateWorkTaskProgress",
      "tier": "journey",
      "title": "Atualizar andamento da tarefa",
      "purpose": "Manter o status da tarefa alinhado à execução observada.",
      "kind": "operation",
      "entity": "WorkTask",
      "actors": [
        "fieldWorker"
      ],
      "profileRefs": [
        "fieldWorker"
      ],
      "featureRefs": [
        "fieldTaskCoordination",
        "projectScheduleVisibility"
      ],
      "hostedStepRefs": [
        "updateWorkTaskProgress.locateWorkTask",
        "updateWorkTaskProgress.updateWorkTask",
        "updateWorkTaskProgress.handoffWorkTaskProgressToFieldCoordinator"
      ],
      "journeyRef": "updateWorkTaskProgress",
      "categoryRef": "processWizard",
      "bffCalls": [
        {
          "bffId": "qryLocateWorkTask",
          "kind": "query",
          "operationId": "locateWorkTask",
          "outputKind": "paginated",
          "entityRef": "WorkTask"
        },
        {
          "bffId": "cmdUpdateWorkTask",
          "kind": "command",
          "operationId": "updateWorkTask",
          "outputKind": "object",
          "entityRef": "WorkTask"
        },
        {
          "bffId": "cmdHandoffWorkTaskProgressToFieldCoordinator",
          "kind": "command",
          "operationId": "handoffWorkTaskProgressToFieldCoordinator",
          "outputKind": "object",
          "entityRef": "WorkTask"
        }
      ],
      "sections": [
        {
          "sectionId": "locateWorkTask",
          "intent": "Uma tarefa atribuída ao trabalhador está selecionada.",
          "organisms": [
            {
              "role": "primarySurface",
              "dataSource": "qryLocateWorkTask",
              "usage": "picker"
            }
          ]
        },
        {
          "sectionId": "updateWorkTask",
          "intent": "O status e o andamento atual ficam registrados.",
          "organisms": [
            {
              "role": "primarySurface",
              "action": "cmdUpdateWorkTask"
            }
          ]
        },
        {
          "sectionId": "handoffWorkTaskProgressToFieldCoordinator",
          "intent": "O coordenador recebe a tarefa com andamento atualizado.",
          "organisms": [
            {
              "role": "contextualAction",
              "action": "cmdHandoffWorkTaskProgressToFieldCoordinator"
            }
          ]
        }
      ]
    },
    {
      "workspaceId": "workTaskCatalogue",
      "tier": "recordCatalogue",
      "title": "Tarefa de trabalho",
      "purpose": "Cadastro de Tarefa de trabalho.",
      "kind": "operation",
      "entity": "WorkTask",
      "actors": [
        "fieldCoordinator",
        "fieldWorker"
      ],
      "profileRefs": [
        "fieldCoordinator",
        "fieldWorker"
      ],
      "featureRefs": [],
      "hostedStepRefs": [],
      "categoryRef": "entityRecordManagement",
      "bffCalls": [
        {
          "bffId": "qryListWorkTask",
          "kind": "query",
          "operationId": "listWorkTask",
          "outputKind": "paginated",
          "entityRef": "WorkTask"
        },
        {
          "bffId": "cmdCreateWorkTask",
          "kind": "command",
          "operationId": "createWorkTask",
          "outputKind": "object",
          "entityRef": "WorkTask"
        },
        {
          "bffId": "cmdUpdateWorkTask",
          "kind": "command",
          "operationId": "updateWorkTask",
          "outputKind": "object",
          "entityRef": "WorkTask"
        },
        {
          "bffId": "cmdDeleteWorkTask",
          "kind": "command",
          "operationId": "deleteWorkTask",
          "outputKind": "object",
          "entityRef": "WorkTask"
        }
      ],
      "sections": [
        {
          "sectionId": "recordList",
          "intent": "Localizar Tarefa de trabalho.",
          "organisms": [
            {
              "role": "primarySurface",
              "dataSource": "qryListWorkTask"
            },
            {
              "role": "contextualAction",
              "action": "cmdDeleteWorkTask"
            }
          ]
        },
        {
          "sectionId": "recordForm",
          "intent": "Criar ou corrigir Tarefa de trabalho.",
          "organisms": [
            {
              "role": "primarySurface",
              "action": "cmdCreateWorkTask"
            },
            {
              "role": "contextualAction",
              "action": "cmdUpdateWorkTask"
            }
          ]
        }
      ]
    }
  ],
  "operations": [
    {
      "operationId": "listChangeOrder",
      "title": "Listar Ordem de mudança",
      "kind": "query",
      "entityRef": "ChangeOrder",
      "entityRefs": [
        "ChangeOrder"
      ],
      "accessPattern": {
        "kind": "list",
        "pagination": "optional"
      },
      "inputs": [],
      "outputRefs": [
        "ChangeOrder.changeOrderId",
        "ChangeOrder.clientRef",
        "ChangeOrder.projectRef",
        "ChangeOrder.description",
        "ChangeOrder.scopeImpact",
        "ChangeOrder.scheduleImpact",
        "ChangeOrder.changeAmount",
        "ChangeOrder.submittedAt",
        "ChangeOrder.forwardedForClientApprovalAt",
        "ChangeOrder.status"
      ],
      "useRules": [],
      "transitionRefs": [],
      "story": [
        "Encontrar o registro."
      ]
    },
    {
      "operationId": "createChangeOrder",
      "title": "Registrar a alteração proposta",
      "kind": "command",
      "entityRef": "ChangeOrder",
      "entityRefs": [
        "ChangeOrder",
        "Client",
        "Project"
      ],
      "accessPattern": {
        "kind": "commandInput"
      },
      "inputs": [
        {
          "inputId": "clientClientId",
          "fieldRef": {
            "entityId": "Client",
            "fieldId": "clientId"
          },
          "source": "selectedEntity",
          "required": true,
          "description": "Cliente"
        },
        {
          "inputId": "projectProjectId",
          "fieldRef": {
            "entityId": "Project",
            "fieldId": "projectId"
          },
          "source": "routeParam",
          "required": true,
          "description": "Obra"
        },
        {
          "inputId": "description",
          "fieldRef": {
            "entityId": "ChangeOrder",
            "fieldId": "description"
          },
          "source": "userInput",
          "required": true,
          "description": "Descrição da alteração proposta na obra para avaliação gerencial e comunicação ao cliente."
        },
        {
          "inputId": "scopeImpact",
          "fieldRef": {
            "entityId": "ChangeOrder",
            "fieldId": "scopeImpact"
          },
          "source": "userInput",
          "required": true,
          "description": "Impacto proposto da alteração no escopo da obra."
        },
        {
          "inputId": "scheduleImpact",
          "fieldRef": {
            "entityId": "ChangeOrder",
            "fieldId": "scheduleImpact"
          },
          "source": "userInput",
          "required": true,
          "description": "Impacto proposto da alteração no prazo de execução da obra."
        },
        {
          "inputId": "changeAmount",
          "fieldRef": {
            "entityId": "ChangeOrder",
            "fieldId": "changeAmount"
          },
          "source": "userInput",
          "required": true,
          "description": "Valor comercial da alteração proposto para aprovação do cliente, custeio e faturamento."
        }
      ],
      "outputRefs": [
        "ChangeOrder.changeOrderId",
        "ChangeOrder.clientRef",
        "ChangeOrder.projectRef",
        "ChangeOrder.description",
        "ChangeOrder.scopeImpact",
        "ChangeOrder.scheduleImpact",
        "ChangeOrder.changeAmount",
        "ChangeOrder.submittedAt",
        "ChangeOrder.forwardedForClientApprovalAt",
        "ChangeOrder.status"
      ],
      "useRules": [
        "changeOrderRequiresClientAndProject"
      ],
      "transitionRefs": [],
      "story": [
        "Registrar a alteração proposta",
        "Uma ordem de mudança vinculada ao cliente e à obra fica registrada."
      ],
      "useCaseId": "createChangeOrder"
    },
    {
      "operationId": "updateChangeOrder",
      "title": "Atualizar Ordem de mudança",
      "kind": "command",
      "entityRef": "ChangeOrder",
      "entityRefs": [
        "ChangeOrder",
        "Client",
        "Project"
      ],
      "accessPattern": {
        "kind": "update"
      },
      "inputs": [
        {
          "inputId": "changeOrderId",
          "fieldRef": {
            "entityId": "ChangeOrder",
            "fieldId": "changeOrderId"
          },
          "description": "Identificador estável da ordem de mudança, transportado entre as etapas conectadas.",
          "source": "selectedEntity",
          "required": true
        },
        {
          "inputId": "clientRef",
          "fieldRef": {
            "entityId": "ChangeOrder",
            "fieldId": "clientRef"
          },
          "description": "Referência de contexto ao cliente para o qual a alteração é proposta, selecionada no catálogo compartilhado.",
          "source": "selectedEntity",
          "required": true
        },
        {
          "inputId": "projectRef",
          "fieldRef": {
            "entityId": "ChangeOrder",
            "fieldId": "projectRef"
          },
          "description": "Referência de contexto à obra do cliente à qual a alteração está vinculada.",
          "source": "selectedEntity",
          "required": true
        },
        {
          "inputId": "description",
          "fieldRef": {
            "entityId": "ChangeOrder",
            "fieldId": "description"
          },
          "description": "Descrição da alteração proposta na obra para avaliação gerencial e comunicação ao cliente.",
          "source": "userInput",
          "required": true
        },
        {
          "inputId": "scopeImpact",
          "fieldRef": {
            "entityId": "ChangeOrder",
            "fieldId": "scopeImpact"
          },
          "description": "Impacto proposto da alteração no escopo da obra.",
          "source": "userInput",
          "required": true
        },
        {
          "inputId": "scheduleImpact",
          "fieldRef": {
            "entityId": "ChangeOrder",
            "fieldId": "scheduleImpact"
          },
          "description": "Impacto proposto da alteração no prazo de execução da obra.",
          "source": "userInput",
          "required": true
        },
        {
          "inputId": "changeAmount",
          "fieldRef": {
            "entityId": "ChangeOrder",
            "fieldId": "changeAmount"
          },
          "description": "Valor comercial da alteração proposto para aprovação do cliente, custeio e faturamento.",
          "source": "userInput",
          "required": true
        },
        {
          "inputId": "submittedAt",
          "fieldRef": {
            "entityId": "ChangeOrder",
            "fieldId": "submittedAt"
          },
          "description": "Data e hora em que a alteração foi formalizada e submetida para tratamento gerencial.",
          "source": "systemDefault",
          "required": true
        },
        {
          "inputId": "forwardedForClientApprovalAt",
          "fieldRef": {
            "entityId": "ChangeOrder",
            "fieldId": "forwardedForClientApprovalAt"
          },
          "description": "Data e hora em que a ordem foi encaminhada ao cliente para decisão.",
          "source": "systemDefault",
          "required": false
        },
        {
          "inputId": "status",
          "fieldRef": {
            "entityId": "ChangeOrder",
            "fieldId": "status"
          },
          "description": "Estado atual da ordem de mudança no ciclo de tratamento, aprovação do cliente e faturamento.",
          "enumValues": [
            "submitted",
            "pendingClientApproval",
            "approved",
            "declined"
          ],
          "source": "systemDefault",
          "required": true
        }
      ],
      "outputRefs": [
        "ChangeOrder.changeOrderId"
      ],
      "useRules": [
        "changeOrderRequiresClientAndProject",
        "managerActionableChangeOrder",
        "clientApprovableChangeOrder",
        "approvedBillableChangeOrder",
        "clientVisibleApprovedChangeOrder"
      ],
      "transitionRefs": [],
      "story": [
        "Corrigir os dados do registro escolhido."
      ]
    },
    {
      "operationId": "deleteChangeOrder",
      "title": "Excluir Ordem de mudança",
      "kind": "command",
      "entityRef": "ChangeOrder",
      "entityRefs": [
        "ChangeOrder"
      ],
      "accessPattern": {
        "kind": "delete"
      },
      "inputs": [
        {
          "inputId": "changeOrderId",
          "fieldRef": {
            "entityId": "ChangeOrder",
            "fieldId": "changeOrderId"
          },
          "description": "Identificador estável da ordem de mudança, transportado entre as etapas conectadas.",
          "source": "selectedEntity",
          "required": true
        }
      ],
      "outputRefs": [
        "ChangeOrder.changeOrderId"
      ],
      "useRules": [],
      "transitionRefs": [],
      "story": [
        "Remover o registro escolhido."
      ]
    },
    {
      "operationId": "listChangeOrderDecision",
      "title": "Listar Decisão sobre ordem de mudança",
      "kind": "query",
      "entityRef": "ChangeOrderDecision",
      "entityRefs": [
        "ChangeOrderDecision"
      ],
      "accessPattern": {
        "kind": "list",
        "pagination": "optional"
      },
      "inputs": [],
      "outputRefs": [
        "ChangeOrderDecision.changeOrderDecisionId",
        "ChangeOrderDecision.changeOrder",
        "ChangeOrderDecision.madeByPlatformUser",
        "ChangeOrderDecision.decision",
        "ChangeOrderDecision.decidedAt"
      ],
      "useRules": [],
      "transitionRefs": [],
      "story": [
        "Encontrar o registro."
      ]
    },
    {
      "operationId": "createChangeOrderDecision",
      "title": "Criar Decisão sobre ordem de mudança",
      "kind": "command",
      "entityRef": "ChangeOrderDecision",
      "entityRefs": [
        "ChangeOrder",
        "ChangeOrderDecision",
        "PlatformUser"
      ],
      "accessPattern": {
        "kind": "create"
      },
      "inputs": [
        {
          "inputId": "changeOrder",
          "fieldRef": {
            "entityId": "ChangeOrderDecision",
            "fieldId": "changeOrder"
          },
          "description": "Referência à ordem de mudança que recebeu a decisão.",
          "source": "selectedEntity",
          "required": true
        },
        {
          "inputId": "madeByPlatformUser",
          "fieldRef": {
            "entityId": "ChangeOrderDecision",
            "fieldId": "madeByPlatformUser"
          },
          "description": "Referência ao usuário que aprovou ou recusou a ordem de mudança.",
          "source": "actorSession",
          "required": true
        },
        {
          "inputId": "decision",
          "fieldRef": {
            "entityId": "ChangeOrderDecision",
            "fieldId": "decision"
          },
          "description": "Resultado registrado para a ordem de mudança.",
          "enumValues": [
            "approved",
            "declined"
          ],
          "source": "userInput",
          "required": true
        },
        {
          "inputId": "decidedAt",
          "fieldRef": {
            "entityId": "ChangeOrderDecision",
            "fieldId": "decidedAt"
          },
          "description": "Data e hora em que a decisão foi registrada.",
          "source": "systemDefault",
          "required": true
        }
      ],
      "outputRefs": [
        "ChangeOrderDecision.changeOrderDecisionId"
      ],
      "useRules": [
        "onlyClientApprovesOwnChangeOrder",
        "onlyProjectManagerDeclinesChangeOrder"
      ],
      "transitionRefs": [],
      "story": [
        "Informar os dados do novo registro."
      ]
    },
    {
      "operationId": "updateChangeOrderDecision",
      "title": "Atualizar Decisão sobre ordem de mudança",
      "kind": "command",
      "entityRef": "ChangeOrderDecision",
      "entityRefs": [
        "ChangeOrder",
        "ChangeOrderDecision",
        "PlatformUser"
      ],
      "accessPattern": {
        "kind": "update"
      },
      "inputs": [
        {
          "inputId": "changeOrderDecisionId",
          "fieldRef": {
            "entityId": "ChangeOrderDecision",
            "fieldId": "changeOrderDecisionId"
          },
          "description": "Identificador estável da decisão registrada sobre uma ordem de mudança.",
          "source": "selectedEntity",
          "required": true
        },
        {
          "inputId": "changeOrder",
          "fieldRef": {
            "entityId": "ChangeOrderDecision",
            "fieldId": "changeOrder"
          },
          "description": "Referência à ordem de mudança que recebeu a decisão.",
          "source": "selectedEntity",
          "required": true
        },
        {
          "inputId": "madeByPlatformUser",
          "fieldRef": {
            "entityId": "ChangeOrderDecision",
            "fieldId": "madeByPlatformUser"
          },
          "description": "Referência ao usuário que aprovou ou recusou a ordem de mudança.",
          "source": "actorSession",
          "required": true
        },
        {
          "inputId": "decision",
          "fieldRef": {
            "entityId": "ChangeOrderDecision",
            "fieldId": "decision"
          },
          "description": "Resultado registrado para a ordem de mudança.",
          "enumValues": [
            "approved",
            "declined"
          ],
          "source": "userInput",
          "required": true
        },
        {
          "inputId": "decidedAt",
          "fieldRef": {
            "entityId": "ChangeOrderDecision",
            "fieldId": "decidedAt"
          },
          "description": "Data e hora em que a decisão foi registrada.",
          "source": "systemDefault",
          "required": true
        }
      ],
      "outputRefs": [
        "ChangeOrderDecision.changeOrderDecisionId"
      ],
      "useRules": [
        "onlyClientApprovesOwnChangeOrder",
        "onlyProjectManagerDeclinesChangeOrder"
      ],
      "transitionRefs": [],
      "story": [
        "Corrigir os dados do registro escolhido."
      ]
    },
    {
      "operationId": "deleteChangeOrderDecision",
      "title": "Excluir Decisão sobre ordem de mudança",
      "kind": "command",
      "entityRef": "ChangeOrderDecision",
      "entityRefs": [
        "ChangeOrderDecision"
      ],
      "accessPattern": {
        "kind": "delete"
      },
      "inputs": [
        {
          "inputId": "changeOrderDecisionId",
          "fieldRef": {
            "entityId": "ChangeOrderDecision",
            "fieldId": "changeOrderDecisionId"
          },
          "description": "Identificador estável da decisão registrada sobre uma ordem de mudança.",
          "source": "selectedEntity",
          "required": true
        }
      ],
      "outputRefs": [
        "ChangeOrderDecision.changeOrderDecisionId"
      ],
      "useRules": [],
      "transitionRefs": [],
      "story": [
        "Remover o registro escolhido."
      ]
    },
    {
      "operationId": "listClient",
      "title": "Listar Cliente",
      "kind": "query",
      "entityRef": "Client",
      "entityRefs": [
        "Client"
      ],
      "accessPattern": {
        "kind": "list",
        "pagination": "optional"
      },
      "inputs": [],
      "outputRefs": [
        "Client.clientId",
        "Client.clientName",
        "Client.contactEmail",
        "Client.contactPhone"
      ],
      "useRules": [],
      "transitionRefs": [],
      "story": [
        "Encontrar o registro."
      ]
    },
    {
      "operationId": "createClient",
      "title": "Criar Cliente",
      "kind": "command",
      "entityRef": "Client",
      "entityRefs": [
        "Client"
      ],
      "accessPattern": {
        "kind": "create"
      },
      "inputs": [
        {
          "inputId": "clientName",
          "fieldRef": {
            "entityId": "Client",
            "fieldId": "clientName"
          },
          "description": "Nome de identificação do cliente organizacional usado para localizá-lo e relacionar suas obras, faturamento e comunicações.",
          "source": "userInput",
          "required": true
        },
        {
          "inputId": "contactEmail",
          "fieldRef": {
            "entityId": "Client",
            "fieldId": "contactEmail"
          },
          "description": "Endereço de e-mail de contato do cliente para a comunicação sobre informações e documentos disponibilizados.",
          "source": "userInput",
          "required": false
        },
        {
          "inputId": "contactPhone",
          "fieldRef": {
            "entityId": "Client",
            "fieldId": "contactPhone"
          },
          "description": "Telefone de contato do cliente para comunicação relacionada às suas obras.",
          "source": "userInput",
          "required": false
        }
      ],
      "outputRefs": [
        "Client.clientId"
      ],
      "useRules": [],
      "transitionRefs": [],
      "story": [
        "Informar os dados do novo registro."
      ]
    },
    {
      "operationId": "updateClient",
      "title": "Atualizar Cliente",
      "kind": "command",
      "entityRef": "Client",
      "entityRefs": [
        "Client"
      ],
      "accessPattern": {
        "kind": "update"
      },
      "inputs": [
        {
          "inputId": "clientId",
          "fieldRef": {
            "entityId": "Client",
            "fieldId": "clientId"
          },
          "description": "Identificador estável do cadastro mestre do cliente, transportado como contexto entre obras, ordens de mudança, faturas e consultas relacionadas.",
          "source": "selectedEntity",
          "required": true
        },
        {
          "inputId": "clientName",
          "fieldRef": {
            "entityId": "Client",
            "fieldId": "clientName"
          },
          "description": "Nome de identificação do cliente organizacional usado para localizá-lo e relacionar suas obras, faturamento e comunicações.",
          "source": "userInput",
          "required": true
        },
        {
          "inputId": "contactEmail",
          "fieldRef": {
            "entityId": "Client",
            "fieldId": "contactEmail"
          },
          "description": "Endereço de e-mail de contato do cliente para a comunicação sobre informações e documentos disponibilizados.",
          "source": "userInput",
          "required": false
        },
        {
          "inputId": "contactPhone",
          "fieldRef": {
            "entityId": "Client",
            "fieldId": "contactPhone"
          },
          "description": "Telefone de contato do cliente para comunicação relacionada às suas obras.",
          "source": "userInput",
          "required": false
        }
      ],
      "outputRefs": [
        "Client.clientId"
      ],
      "useRules": [],
      "transitionRefs": [],
      "story": [
        "Corrigir os dados do registro escolhido."
      ]
    },
    {
      "operationId": "deleteClient",
      "title": "Excluir Cliente",
      "kind": "command",
      "entityRef": "Client",
      "entityRefs": [
        "Client"
      ],
      "accessPattern": {
        "kind": "delete"
      },
      "inputs": [
        {
          "inputId": "clientId",
          "fieldRef": {
            "entityId": "Client",
            "fieldId": "clientId"
          },
          "description": "Identificador estável do cadastro mestre do cliente, transportado como contexto entre obras, ordens de mudança, faturas e consultas relacionadas.",
          "source": "selectedEntity",
          "required": true
        }
      ],
      "outputRefs": [
        "Client.clientId"
      ],
      "useRules": [],
      "transitionRefs": [],
      "story": [
        "Remover o registro escolhido."
      ]
    },
    {
      "operationId": "listClientPortalAccess",
      "title": "Listar Vínculo de acesso do cliente",
      "kind": "query",
      "entityRef": "ClientPortalAccess",
      "entityRefs": [
        "ClientPortalAccess"
      ],
      "accessPattern": {
        "kind": "list",
        "pagination": "optional"
      },
      "inputs": [],
      "outputRefs": [
        "ClientPortalAccess.clientPortalAccessId",
        "ClientPortalAccess.clientId",
        "ClientPortalAccess.platformUserId",
        "ClientPortalAccess.status"
      ],
      "useRules": [],
      "transitionRefs": [],
      "story": [
        "Encontrar o registro."
      ]
    },
    {
      "operationId": "createClientPortalAccess",
      "title": "Criar Vínculo de acesso do cliente",
      "kind": "command",
      "entityRef": "ClientPortalAccess",
      "entityRefs": [
        "Client",
        "ClientPortalAccess",
        "PlatformUser"
      ],
      "accessPattern": {
        "kind": "create"
      },
      "inputs": [
        {
          "inputId": "clientId",
          "fieldRef": {
            "entityId": "ClientPortalAccess",
            "fieldId": "clientId"
          },
          "description": "Referência de contexto ao cliente ao qual o usuário externo está associado.",
          "source": "selectedEntity",
          "required": true
        },
        {
          "inputId": "platformUserId",
          "fieldRef": {
            "entityId": "ClientPortalAccess",
            "fieldId": "platformUserId"
          },
          "description": "Referência de contexto ao usuário externo da plataforma associado ao cliente.",
          "source": "actorSession",
          "required": true
        },
        {
          "inputId": "status",
          "fieldRef": {
            "entityId": "ClientPortalAccess",
            "fieldId": "status"
          },
          "description": "Indica se o vínculo atualmente concede ou não associação do usuário ao cliente.",
          "enumValues": [
            "active",
            "revoked"
          ],
          "source": "systemDefault",
          "required": true
        }
      ],
      "outputRefs": [
        "ClientPortalAccess.clientPortalAccessId"
      ],
      "useRules": [
        "activeClientPortalAccess"
      ],
      "transitionRefs": [],
      "story": [
        "Informar os dados do novo registro."
      ]
    },
    {
      "operationId": "updateClientPortalAccess",
      "title": "Atualizar Vínculo de acesso do cliente",
      "kind": "command",
      "entityRef": "ClientPortalAccess",
      "entityRefs": [
        "Client",
        "ClientPortalAccess",
        "PlatformUser"
      ],
      "accessPattern": {
        "kind": "update"
      },
      "inputs": [
        {
          "inputId": "clientPortalAccessId",
          "fieldRef": {
            "entityId": "ClientPortalAccess",
            "fieldId": "clientPortalAccessId"
          },
          "description": "Identificador estável do vínculo de acesso, transportado entre etapas conectadas da jornada.",
          "source": "selectedEntity",
          "required": true
        },
        {
          "inputId": "clientId",
          "fieldRef": {
            "entityId": "ClientPortalAccess",
            "fieldId": "clientId"
          },
          "description": "Referência de contexto ao cliente ao qual o usuário externo está associado.",
          "source": "selectedEntity",
          "required": true
        },
        {
          "inputId": "platformUserId",
          "fieldRef": {
            "entityId": "ClientPortalAccess",
            "fieldId": "platformUserId"
          },
          "description": "Referência de contexto ao usuário externo da plataforma associado ao cliente.",
          "source": "actorSession",
          "required": true
        },
        {
          "inputId": "status",
          "fieldRef": {
            "entityId": "ClientPortalAccess",
            "fieldId": "status"
          },
          "description": "Indica se o vínculo atualmente concede ou não associação do usuário ao cliente.",
          "enumValues": [
            "active",
            "revoked"
          ],
          "source": "systemDefault",
          "required": true
        }
      ],
      "outputRefs": [
        "ClientPortalAccess.clientPortalAccessId"
      ],
      "useRules": [
        "activeClientPortalAccess"
      ],
      "transitionRefs": [],
      "story": [
        "Corrigir os dados do registro escolhido."
      ]
    },
    {
      "operationId": "deleteClientPortalAccess",
      "title": "Excluir Vínculo de acesso do cliente",
      "kind": "command",
      "entityRef": "ClientPortalAccess",
      "entityRefs": [
        "ClientPortalAccess"
      ],
      "accessPattern": {
        "kind": "delete"
      },
      "inputs": [
        {
          "inputId": "clientPortalAccessId",
          "fieldRef": {
            "entityId": "ClientPortalAccess",
            "fieldId": "clientPortalAccessId"
          },
          "description": "Identificador estável do vínculo de acesso, transportado entre etapas conectadas da jornada.",
          "source": "selectedEntity",
          "required": true
        }
      ],
      "outputRefs": [
        "ClientPortalAccess.clientPortalAccessId"
      ],
      "useRules": [],
      "transitionRefs": [],
      "story": [
        "Remover o registro escolhido."
      ]
    },
    {
      "operationId": "listInventoryBalance",
      "title": "Listar Saldo de estoque",
      "kind": "query",
      "entityRef": "InventoryBalance",
      "entityRefs": [
        "InventoryBalance"
      ],
      "accessPattern": {
        "kind": "list",
        "pagination": "optional"
      },
      "inputs": [],
      "outputRefs": [
        "InventoryBalance.inventoryBalanceId",
        "InventoryBalance.inventoryItemId",
        "InventoryBalance.physicalQuantity",
        "InventoryBalance.applicableUnitCost",
        "InventoryBalance.status"
      ],
      "useRules": [],
      "transitionRefs": [],
      "story": [
        "Encontrar o registro."
      ]
    },
    {
      "operationId": "createInventoryBalance",
      "title": "Criar Saldo de estoque",
      "kind": "command",
      "entityRef": "InventoryBalance",
      "entityRefs": [
        "InventoryBalance",
        "InventoryItem"
      ],
      "accessPattern": {
        "kind": "create"
      },
      "inputs": [
        {
          "inputId": "inventoryItemId",
          "fieldRef": {
            "entityId": "InventoryBalance",
            "fieldId": "inventoryItemId"
          },
          "description": "Referência ao item do catálogo de materiais ao qual este saldo operacional corresponde; é selecionada como contexto, não digitada como identificador bruto.",
          "source": "selectedEntity",
          "required": true
        },
        {
          "inputId": "physicalQuantity",
          "fieldRef": {
            "entityId": "InventoryBalance",
            "fieldId": "physicalQuantity"
          },
          "description": "Quantidade física atualmente registrada para o item de estoque e usada para atender apontamentos de consumo.",
          "source": "userInput",
          "required": true
        },
        {
          "inputId": "applicableUnitCost",
          "fieldRef": {
            "entityId": "InventoryBalance",
            "fieldId": "applicableUnitCost"
          },
          "description": "Custo unitário operacional aplicável ao consumo de material para apoiar o custeio realizado da obra.",
          "source": "userInput",
          "required": true
        },
        {
          "inputId": "status",
          "fieldRef": {
            "entityId": "InventoryBalance",
            "fieldId": "status"
          },
          "description": "Estado operacional que indica se o saldo pode atender consumo, está esgotado ou foi desativado.",
          "enumValues": [
            "available",
            "depleted",
            "retired"
          ],
          "source": "systemDefault",
          "required": true
        }
      ],
      "outputRefs": [
        "InventoryBalance.inventoryBalanceId"
      ],
      "useRules": [
        "availableInventoryBalance"
      ],
      "transitionRefs": [],
      "story": [
        "Informar os dados do novo registro."
      ]
    },
    {
      "operationId": "updateInventoryBalance",
      "title": "Atualizar Saldo de estoque",
      "kind": "command",
      "entityRef": "InventoryBalance",
      "entityRefs": [
        "InventoryBalance",
        "InventoryItem"
      ],
      "accessPattern": {
        "kind": "update"
      },
      "inputs": [
        {
          "inputId": "inventoryBalanceId",
          "fieldRef": {
            "entityId": "InventoryBalance",
            "fieldId": "inventoryBalanceId"
          },
          "description": "Identificador estável do saldo operacional de estoque, transportado entre etapas conectadas.",
          "source": "selectedEntity",
          "required": true
        },
        {
          "inputId": "inventoryItemId",
          "fieldRef": {
            "entityId": "InventoryBalance",
            "fieldId": "inventoryItemId"
          },
          "description": "Referência ao item do catálogo de materiais ao qual este saldo operacional corresponde; é selecionada como contexto, não digitada como identificador bruto.",
          "source": "selectedEntity",
          "required": true
        },
        {
          "inputId": "physicalQuantity",
          "fieldRef": {
            "entityId": "InventoryBalance",
            "fieldId": "physicalQuantity"
          },
          "description": "Quantidade física atualmente registrada para o item de estoque e usada para atender apontamentos de consumo.",
          "source": "userInput",
          "required": true
        },
        {
          "inputId": "applicableUnitCost",
          "fieldRef": {
            "entityId": "InventoryBalance",
            "fieldId": "applicableUnitCost"
          },
          "description": "Custo unitário operacional aplicável ao consumo de material para apoiar o custeio realizado da obra.",
          "source": "userInput",
          "required": true
        },
        {
          "inputId": "status",
          "fieldRef": {
            "entityId": "InventoryBalance",
            "fieldId": "status"
          },
          "description": "Estado operacional que indica se o saldo pode atender consumo, está esgotado ou foi desativado.",
          "enumValues": [
            "available",
            "depleted",
            "retired"
          ],
          "source": "systemDefault",
          "required": true
        }
      ],
      "outputRefs": [
        "InventoryBalance.inventoryBalanceId"
      ],
      "useRules": [
        "availableInventoryBalance"
      ],
      "transitionRefs": [],
      "story": [
        "Corrigir os dados do registro escolhido."
      ]
    },
    {
      "operationId": "deleteInventoryBalance",
      "title": "Excluir Saldo de estoque",
      "kind": "command",
      "entityRef": "InventoryBalance",
      "entityRefs": [
        "InventoryBalance"
      ],
      "accessPattern": {
        "kind": "delete"
      },
      "inputs": [
        {
          "inputId": "inventoryBalanceId",
          "fieldRef": {
            "entityId": "InventoryBalance",
            "fieldId": "inventoryBalanceId"
          },
          "description": "Identificador estável do saldo operacional de estoque, transportado entre etapas conectadas.",
          "source": "selectedEntity",
          "required": true
        }
      ],
      "outputRefs": [
        "InventoryBalance.inventoryBalanceId"
      ],
      "useRules": [],
      "transitionRefs": [],
      "story": [
        "Remover o registro escolhido."
      ]
    },
    {
      "operationId": "listInventoryItem",
      "title": "Listar Item de estoque",
      "kind": "query",
      "entityRef": "InventoryItem",
      "entityRefs": [
        "InventoryItem"
      ],
      "accessPattern": {
        "kind": "list",
        "pagination": "optional"
      },
      "inputs": [],
      "outputRefs": [
        "InventoryItem.inventoryItemId",
        "InventoryItem.name",
        "InventoryItem.description",
        "InventoryItem.unitOfMeasure",
        "InventoryItem.referenceUnitCost",
        "InventoryItem.status"
      ],
      "useRules": [],
      "transitionRefs": [],
      "story": [
        "Encontrar o registro."
      ]
    },
    {
      "operationId": "createInventoryItem",
      "title": "Criar Item de estoque",
      "kind": "command",
      "entityRef": "InventoryItem",
      "entityRefs": [
        "InventoryItem"
      ],
      "accessPattern": {
        "kind": "create"
      },
      "inputs": [
        {
          "inputId": "name",
          "fieldRef": {
            "entityId": "InventoryItem",
            "fieldId": "name"
          },
          "description": "Nome pelo qual o material ou consumível é identificado no catálogo.",
          "source": "userInput",
          "required": true
        },
        {
          "inputId": "description",
          "fieldRef": {
            "entityId": "InventoryItem",
            "fieldId": "description"
          },
          "description": "Descrição complementar para distinguir e especificar o material no catálogo.",
          "source": "userInput",
          "required": false
        },
        {
          "inputId": "unitOfMeasure",
          "fieldRef": {
            "entityId": "InventoryItem",
            "fieldId": "unitOfMeasure"
          },
          "description": "Unidade usada para registrar o consumo do material, como unidade, metro ou saco.",
          "source": "userInput",
          "required": true
        },
        {
          "inputId": "referenceUnitCost",
          "fieldRef": {
            "entityId": "InventoryItem",
            "fieldId": "referenceUnitCost"
          },
          "description": "Custo unitário de referência do material para apoiar os apontamentos e o custeio da obra.",
          "source": "userInput",
          "required": true
        },
        {
          "inputId": "status",
          "fieldRef": {
            "entityId": "InventoryItem",
            "fieldId": "status"
          },
          "description": "Situação do item no catálogo, determinando se pode ser selecionado para consumo.",
          "enumValues": [
            "active",
            "retired"
          ],
          "source": "systemDefault",
          "required": true
        }
      ],
      "outputRefs": [
        "InventoryItem.inventoryItemId"
      ],
      "useRules": [
        "selectableInventoryItem"
      ],
      "transitionRefs": [],
      "story": [
        "Informar os dados do novo registro."
      ]
    },
    {
      "operationId": "updateInventoryItem",
      "title": "Atualizar Item de estoque",
      "kind": "command",
      "entityRef": "InventoryItem",
      "entityRefs": [
        "InventoryItem"
      ],
      "accessPattern": {
        "kind": "update"
      },
      "inputs": [
        {
          "inputId": "inventoryItemId",
          "fieldRef": {
            "entityId": "InventoryItem",
            "fieldId": "inventoryItemId"
          },
          "description": "Identificador estável do item no catálogo mestre de materiais.",
          "source": "selectedEntity",
          "required": true
        },
        {
          "inputId": "name",
          "fieldRef": {
            "entityId": "InventoryItem",
            "fieldId": "name"
          },
          "description": "Nome pelo qual o material ou consumível é identificado no catálogo.",
          "source": "userInput",
          "required": true
        },
        {
          "inputId": "description",
          "fieldRef": {
            "entityId": "InventoryItem",
            "fieldId": "description"
          },
          "description": "Descrição complementar para distinguir e especificar o material no catálogo.",
          "source": "userInput",
          "required": false
        },
        {
          "inputId": "unitOfMeasure",
          "fieldRef": {
            "entityId": "InventoryItem",
            "fieldId": "unitOfMeasure"
          },
          "description": "Unidade usada para registrar o consumo do material, como unidade, metro ou saco.",
          "source": "userInput",
          "required": true
        },
        {
          "inputId": "referenceUnitCost",
          "fieldRef": {
            "entityId": "InventoryItem",
            "fieldId": "referenceUnitCost"
          },
          "description": "Custo unitário de referência do material para apoiar os apontamentos e o custeio da obra.",
          "source": "userInput",
          "required": true
        },
        {
          "inputId": "status",
          "fieldRef": {
            "entityId": "InventoryItem",
            "fieldId": "status"
          },
          "description": "Situação do item no catálogo, determinando se pode ser selecionado para consumo.",
          "enumValues": [
            "active",
            "retired"
          ],
          "source": "systemDefault",
          "required": true
        }
      ],
      "outputRefs": [
        "InventoryItem.inventoryItemId"
      ],
      "useRules": [
        "selectableInventoryItem"
      ],
      "transitionRefs": [],
      "story": [
        "Corrigir os dados do registro escolhido."
      ]
    },
    {
      "operationId": "deleteInventoryItem",
      "title": "Excluir Item de estoque",
      "kind": "command",
      "entityRef": "InventoryItem",
      "entityRefs": [
        "InventoryItem"
      ],
      "accessPattern": {
        "kind": "delete"
      },
      "inputs": [
        {
          "inputId": "inventoryItemId",
          "fieldRef": {
            "entityId": "InventoryItem",
            "fieldId": "inventoryItemId"
          },
          "description": "Identificador estável do item no catálogo mestre de materiais.",
          "source": "selectedEntity",
          "required": true
        }
      ],
      "outputRefs": [
        "InventoryItem.inventoryItemId"
      ],
      "useRules": [],
      "transitionRefs": [],
      "story": [
        "Remover o registro escolhido."
      ]
    },
    {
      "operationId": "listInvoice",
      "title": "Listar Fatura",
      "kind": "query",
      "entityRef": "Invoice",
      "entityRefs": [
        "Invoice"
      ],
      "accessPattern": {
        "kind": "list",
        "pagination": "optional"
      },
      "inputs": [],
      "outputRefs": [
        "Invoice.invoiceId",
        "Invoice.clientId",
        "Invoice.projectId",
        "Invoice.commercialReference",
        "Invoice.amount",
        "Invoice.status"
      ],
      "useRules": [],
      "transitionRefs": [],
      "story": [
        "Encontrar o registro."
      ]
    },
    {
      "operationId": "createInvoice",
      "title": "Emitir a fatura",
      "kind": "command",
      "entityRef": "Invoice",
      "entityRefs": [
        "ChangeOrder",
        "Client",
        "Invoice",
        "InvoiceChangeOrder",
        "Project"
      ],
      "accessPattern": {
        "kind": "commandInput"
      },
      "inputs": [
        {
          "inputId": "clientClientId",
          "fieldRef": {
            "entityId": "Client",
            "fieldId": "clientId"
          },
          "source": "selectedEntity",
          "required": true,
          "description": "Cliente"
        },
        {
          "inputId": "projectProjectId",
          "fieldRef": {
            "entityId": "Project",
            "fieldId": "projectId"
          },
          "source": "routeParam",
          "required": true,
          "description": "Obra"
        },
        {
          "inputId": "commercialReference",
          "fieldRef": {
            "entityId": "Invoice",
            "fieldId": "commercialReference"
          },
          "source": "userInput",
          "required": true,
          "description": "Referência comercial que identifica a fatura para faturamento e consulta do cliente."
        },
        {
          "inputId": "amount",
          "fieldRef": {
            "entityId": "Invoice",
            "fieldId": "amount"
          },
          "source": "userInput",
          "required": true,
          "description": "Valor comercial total faturado para a obra."
        }
      ],
      "outputRefs": [
        "Invoice.invoiceId",
        "Invoice.clientId",
        "Invoice.projectId",
        "Invoice.commercialReference",
        "Invoice.amount",
        "Invoice.status"
      ],
      "useRules": [
        "invoiceIncludesApprovedChangeOrdersOnly",
        "invoiceRequiresClientAndProject"
      ],
      "transitionRefs": [],
      "story": [
        "Emitir a fatura",
        "Uma fatura vinculada ao cliente e à obra fica registrada."
      ],
      "useCaseId": "createInvoice"
    },
    {
      "operationId": "updateInvoice",
      "title": "Atualizar Fatura",
      "kind": "command",
      "entityRef": "Invoice",
      "entityRefs": [
        "Client",
        "Invoice",
        "Project"
      ],
      "accessPattern": {
        "kind": "update"
      },
      "inputs": [
        {
          "inputId": "invoiceId",
          "fieldRef": {
            "entityId": "Invoice",
            "fieldId": "invoiceId"
          },
          "description": "Identificador estável da fatura, mantido entre as etapas conectadas da jornada.",
          "source": "selectedEntity",
          "required": true
        },
        {
          "inputId": "clientId",
          "fieldRef": {
            "entityId": "Invoice",
            "fieldId": "clientId"
          },
          "description": "Referência de contexto ao cliente para o qual a fatura é emitida.",
          "source": "selectedEntity",
          "required": true
        },
        {
          "inputId": "projectId",
          "fieldRef": {
            "entityId": "Invoice",
            "fieldId": "projectId"
          },
          "description": "Referência de contexto à obra faturável à qual a fatura está vinculada.",
          "source": "selectedEntity",
          "required": true
        },
        {
          "inputId": "commercialReference",
          "fieldRef": {
            "entityId": "Invoice",
            "fieldId": "commercialReference"
          },
          "description": "Referência comercial que identifica a fatura para faturamento e consulta do cliente.",
          "source": "userInput",
          "required": true
        },
        {
          "inputId": "amount",
          "fieldRef": {
            "entityId": "Invoice",
            "fieldId": "amount"
          },
          "description": "Valor comercial total faturado para a obra.",
          "source": "userInput",
          "required": true
        },
        {
          "inputId": "status",
          "fieldRef": {
            "entityId": "Invoice",
            "fieldId": "status"
          },
          "description": "Situação da fatura, incluindo sua disponibilidade para consulta externa pelo cliente.",
          "enumValues": [
            "issued",
            "availableToClient",
            "cancelled"
          ],
          "source": "systemDefault",
          "required": true
        }
      ],
      "outputRefs": [
        "Invoice.invoiceId"
      ],
      "useRules": [
        "invoiceRequiresClientAndProject",
        "invoiceIncludesApprovedChangeOrdersOnly",
        "clientVisibleInvoice"
      ],
      "transitionRefs": [],
      "story": [
        "Corrigir os dados do registro escolhido."
      ]
    },
    {
      "operationId": "deleteInvoice",
      "title": "Excluir Fatura",
      "kind": "command",
      "entityRef": "Invoice",
      "entityRefs": [
        "Invoice"
      ],
      "accessPattern": {
        "kind": "delete"
      },
      "inputs": [
        {
          "inputId": "invoiceId",
          "fieldRef": {
            "entityId": "Invoice",
            "fieldId": "invoiceId"
          },
          "description": "Identificador estável da fatura, mantido entre as etapas conectadas da jornada.",
          "source": "selectedEntity",
          "required": true
        }
      ],
      "outputRefs": [
        "Invoice.invoiceId"
      ],
      "useRules": [],
      "transitionRefs": [],
      "story": [
        "Remover o registro escolhido."
      ]
    },
    {
      "operationId": "listInvoiceChangeOrder",
      "title": "Listar Aplicação de ordem de mudança na fatura",
      "kind": "query",
      "entityRef": "InvoiceChangeOrder",
      "entityRefs": [
        "InvoiceChangeOrder"
      ],
      "accessPattern": {
        "kind": "list",
        "pagination": "optional"
      },
      "inputs": [],
      "outputRefs": [
        "InvoiceChangeOrder.invoiceChangeOrderId",
        "InvoiceChangeOrder.invoiceId",
        "InvoiceChangeOrder.changeOrderId",
        "InvoiceChangeOrder.billedAmount"
      ],
      "useRules": [],
      "transitionRefs": [],
      "story": [
        "Encontrar o registro."
      ]
    },
    {
      "operationId": "createInvoiceChangeOrder",
      "title": "Criar Aplicação de ordem de mudança na fatura",
      "kind": "command",
      "entityRef": "InvoiceChangeOrder",
      "entityRefs": [
        "ChangeOrder",
        "Invoice",
        "InvoiceChangeOrder"
      ],
      "accessPattern": {
        "kind": "create"
      },
      "inputs": [
        {
          "inputId": "invoiceId",
          "fieldRef": {
            "entityId": "InvoiceChangeOrder",
            "fieldId": "invoiceId"
          },
          "description": "Referência de contexto à fatura emitida que incorpora a ordem de mudança.",
          "source": "selectedEntity",
          "required": true
        },
        {
          "inputId": "changeOrderId",
          "fieldRef": {
            "entityId": "InvoiceChangeOrder",
            "fieldId": "changeOrderId"
          },
          "description": "Referência de contexto à ordem de mudança aprovada incorporada na fatura.",
          "source": "selectedEntity",
          "required": true
        },
        {
          "inputId": "billedAmount",
          "fieldRef": {
            "entityId": "InvoiceChangeOrder",
            "fieldId": "billedAmount"
          },
          "description": "Valor efetivamente faturado nesta fatura em razão da ordem de mudança vinculada.",
          "source": "userInput",
          "required": true
        }
      ],
      "outputRefs": [
        "InvoiceChangeOrder.invoiceChangeOrderId"
      ],
      "useRules": [
        "invoiceIncludesApprovedChangeOrdersOnly"
      ],
      "transitionRefs": [],
      "story": [
        "Informar os dados do novo registro."
      ]
    },
    {
      "operationId": "updateInvoiceChangeOrder",
      "title": "Atualizar Aplicação de ordem de mudança na fatura",
      "kind": "command",
      "entityRef": "InvoiceChangeOrder",
      "entityRefs": [
        "ChangeOrder",
        "Invoice",
        "InvoiceChangeOrder"
      ],
      "accessPattern": {
        "kind": "update"
      },
      "inputs": [
        {
          "inputId": "invoiceChangeOrderId",
          "fieldRef": {
            "entityId": "InvoiceChangeOrder",
            "fieldId": "invoiceChangeOrderId"
          },
          "description": "Identificador estável do vínculo de faturamento entre uma fatura e uma ordem de mudança aprovada.",
          "source": "selectedEntity",
          "required": true
        },
        {
          "inputId": "invoiceId",
          "fieldRef": {
            "entityId": "InvoiceChangeOrder",
            "fieldId": "invoiceId"
          },
          "description": "Referência de contexto à fatura emitida que incorpora a ordem de mudança.",
          "source": "selectedEntity",
          "required": true
        },
        {
          "inputId": "changeOrderId",
          "fieldRef": {
            "entityId": "InvoiceChangeOrder",
            "fieldId": "changeOrderId"
          },
          "description": "Referência de contexto à ordem de mudança aprovada incorporada na fatura.",
          "source": "selectedEntity",
          "required": true
        },
        {
          "inputId": "billedAmount",
          "fieldRef": {
            "entityId": "InvoiceChangeOrder",
            "fieldId": "billedAmount"
          },
          "description": "Valor efetivamente faturado nesta fatura em razão da ordem de mudança vinculada.",
          "source": "userInput",
          "required": true
        }
      ],
      "outputRefs": [
        "InvoiceChangeOrder.invoiceChangeOrderId"
      ],
      "useRules": [
        "invoiceIncludesApprovedChangeOrdersOnly"
      ],
      "transitionRefs": [],
      "story": [
        "Corrigir os dados do registro escolhido."
      ]
    },
    {
      "operationId": "deleteInvoiceChangeOrder",
      "title": "Excluir Aplicação de ordem de mudança na fatura",
      "kind": "command",
      "entityRef": "InvoiceChangeOrder",
      "entityRefs": [
        "InvoiceChangeOrder"
      ],
      "accessPattern": {
        "kind": "delete"
      },
      "inputs": [
        {
          "inputId": "invoiceChangeOrderId",
          "fieldRef": {
            "entityId": "InvoiceChangeOrder",
            "fieldId": "invoiceChangeOrderId"
          },
          "description": "Identificador estável do vínculo de faturamento entre uma fatura e uma ordem de mudança aprovada.",
          "source": "selectedEntity",
          "required": true
        }
      ],
      "outputRefs": [
        "InvoiceChangeOrder.invoiceChangeOrderId"
      ],
      "useRules": [],
      "transitionRefs": [],
      "story": [
        "Remover o registro escolhido."
      ]
    },
    {
      "operationId": "listMaterialUsage",
      "title": "Listar Consumo de material",
      "kind": "query",
      "entityRef": "MaterialUsage",
      "entityRefs": [
        "MaterialUsage"
      ],
      "accessPattern": {
        "kind": "list",
        "pagination": "optional"
      },
      "inputs": [],
      "outputRefs": [
        "MaterialUsage.materialUsageId",
        "MaterialUsage.status",
        "MaterialUsage.projectId",
        "MaterialUsage.inventoryItemId",
        "MaterialUsage.inventoryBalanceId",
        "MaterialUsage.quantity",
        "MaterialUsage.usageDescription",
        "MaterialUsage.consumedOn",
        "MaterialUsage.unitCostBasis"
      ],
      "useRules": [],
      "transitionRefs": [],
      "story": [
        "Encontrar o registro."
      ]
    },
    {
      "operationId": "createMaterialUsage",
      "title": "Registrar o consumo de material",
      "kind": "command",
      "entityRef": "MaterialUsage",
      "entityRefs": [
        "InventoryBalance",
        "InventoryItem",
        "MaterialUsage",
        "Project"
      ],
      "accessPattern": {
        "kind": "commandInput"
      },
      "inputs": [
        {
          "inputId": "inventoryBalanceInventoryBalanceId",
          "fieldRef": {
            "entityId": "InventoryBalance",
            "fieldId": "inventoryBalanceId"
          },
          "source": "selectedEntity",
          "required": true,
          "description": "Saldo de estoque"
        },
        {
          "inputId": "inventoryItemInventoryItemId",
          "fieldRef": {
            "entityId": "InventoryItem",
            "fieldId": "inventoryItemId"
          },
          "source": "selectedEntity",
          "required": true,
          "description": "Item de estoque"
        },
        {
          "inputId": "projectProjectId",
          "fieldRef": {
            "entityId": "Project",
            "fieldId": "projectId"
          },
          "source": "routeParam",
          "required": true,
          "description": "Obra"
        },
        {
          "inputId": "quantity",
          "fieldRef": {
            "entityId": "MaterialUsage",
            "fieldId": "quantity"
          },
          "source": "userInput",
          "required": true,
          "description": "Quantidade do item efetivamente consumida na obra."
        },
        {
          "inputId": "usageDescription",
          "fieldRef": {
            "entityId": "MaterialUsage",
            "fieldId": "usageDescription"
          },
          "source": "userInput",
          "required": true,
          "description": "Descrição informada do consumo de material realizado em campo."
        },
        {
          "inputId": "consumedOn",
          "fieldRef": {
            "entityId": "MaterialUsage",
            "fieldId": "consumedOn"
          },
          "source": "userInput",
          "required": true,
          "description": "Data em que o material foi efetivamente consumido na obra."
        },
        {
          "inputId": "unitCostBasis",
          "fieldRef": {
            "entityId": "MaterialUsage",
            "fieldId": "unitCostBasis"
          },
          "source": "userInput",
          "required": true,
          "description": "Custo unitário preservado como base para o custeio realizado do consumo."
        }
      ],
      "outputRefs": [
        "MaterialUsage.materialUsageId",
        "MaterialUsage.status",
        "MaterialUsage.projectId",
        "MaterialUsage.inventoryItemId",
        "MaterialUsage.inventoryBalanceId",
        "MaterialUsage.quantity",
        "MaterialUsage.usageDescription",
        "MaterialUsage.consumedOn",
        "MaterialUsage.unitCostBasis"
      ],
      "useRules": [
        "materialUsageRequiresActiveProjectAndAvailableInventory"
      ],
      "transitionRefs": [],
      "story": [
        "Registrar o consumo de material",
        "O consumo fica vinculado à obra e disponível para o custo realizado."
      ],
      "useCaseId": "createMaterialUsage"
    },
    {
      "operationId": "updateMaterialUsage",
      "title": "Atualizar Consumo de material",
      "kind": "command",
      "entityRef": "MaterialUsage",
      "entityRefs": [
        "InventoryBalance",
        "InventoryItem",
        "MaterialUsage",
        "Project"
      ],
      "accessPattern": {
        "kind": "update"
      },
      "inputs": [
        {
          "inputId": "materialUsageId",
          "fieldRef": {
            "entityId": "MaterialUsage",
            "fieldId": "materialUsageId"
          },
          "description": "Identificador estável do apontamento de consumo de material, preservado entre etapas conectadas.",
          "source": "selectedEntity",
          "required": true
        },
        {
          "inputId": "status",
          "fieldRef": {
            "entityId": "MaterialUsage",
            "fieldId": "status"
          },
          "description": "Situação do apontamento de consumo para determinar sua elegibilidade no custo realizado e na execução consolidada.",
          "enumValues": [
            "recorded",
            "voided"
          ],
          "source": "systemDefault",
          "required": true
        },
        {
          "inputId": "projectId",
          "fieldRef": {
            "entityId": "MaterialUsage",
            "fieldId": "projectId"
          },
          "description": "Referência de contexto à obra contra a qual o material foi efetivamente consumido.",
          "source": "selectedEntity",
          "required": true
        },
        {
          "inputId": "inventoryItemId",
          "fieldRef": {
            "entityId": "MaterialUsage",
            "fieldId": "inventoryItemId"
          },
          "description": "Referência de contexto ao item de material efetivamente utilizado.",
          "source": "selectedEntity",
          "required": true
        },
        {
          "inputId": "inventoryBalanceId",
          "fieldRef": {
            "entityId": "MaterialUsage",
            "fieldId": "inventoryBalanceId"
          },
          "description": "Referência ao saldo operacional que suportou o consumo, para manter a rastreabilidade de disponibilidade e custo.",
          "source": "selectedEntity",
          "required": true
        },
        {
          "inputId": "quantity",
          "fieldRef": {
            "entityId": "MaterialUsage",
            "fieldId": "quantity"
          },
          "description": "Quantidade do item efetivamente consumida na obra.",
          "source": "userInput",
          "required": true
        },
        {
          "inputId": "usageDescription",
          "fieldRef": {
            "entityId": "MaterialUsage",
            "fieldId": "usageDescription"
          },
          "description": "Descrição informada do consumo de material realizado em campo.",
          "source": "userInput",
          "required": true
        },
        {
          "inputId": "consumedOn",
          "fieldRef": {
            "entityId": "MaterialUsage",
            "fieldId": "consumedOn"
          },
          "description": "Data em que o material foi efetivamente consumido na obra.",
          "source": "userInput",
          "required": true
        },
        {
          "inputId": "unitCostBasis",
          "fieldRef": {
            "entityId": "MaterialUsage",
            "fieldId": "unitCostBasis"
          },
          "description": "Custo unitário preservado como base para o custeio realizado do consumo.",
          "source": "userInput",
          "required": true
        }
      ],
      "outputRefs": [
        "MaterialUsage.materialUsageId"
      ],
      "useRules": [
        "materialUsageRequiresActiveProjectAndAvailableInventory",
        "costEligibleMaterialUsage"
      ],
      "transitionRefs": [],
      "story": [
        "Corrigir os dados do registro escolhido."
      ]
    },
    {
      "operationId": "deleteMaterialUsage",
      "title": "Excluir Consumo de material",
      "kind": "command",
      "entityRef": "MaterialUsage",
      "entityRefs": [
        "MaterialUsage"
      ],
      "accessPattern": {
        "kind": "delete"
      },
      "inputs": [
        {
          "inputId": "materialUsageId",
          "fieldRef": {
            "entityId": "MaterialUsage",
            "fieldId": "materialUsageId"
          },
          "description": "Identificador estável do apontamento de consumo de material, preservado entre etapas conectadas.",
          "source": "selectedEntity",
          "required": true
        }
      ],
      "outputRefs": [
        "MaterialUsage.materialUsageId"
      ],
      "useRules": [],
      "transitionRefs": [],
      "story": [
        "Remover o registro escolhido."
      ]
    },
    {
      "operationId": "listProject",
      "title": "Listar Obra",
      "kind": "query",
      "entityRef": "Project",
      "entityRefs": [
        "Project"
      ],
      "accessPattern": {
        "kind": "list",
        "pagination": "optional"
      },
      "inputs": [],
      "outputRefs": [
        "Project.projectId",
        "Project.clientId",
        "Project.name",
        "Project.address",
        "Project.status",
        "Project.authorizedBudget",
        "Project.plannedStartDate",
        "Project.plannedEndDate"
      ],
      "useRules": [],
      "transitionRefs": [],
      "story": [
        "Encontrar o registro."
      ]
    },
    {
      "operationId": "createProject",
      "title": "Criar Obra",
      "kind": "command",
      "entityRef": "Project",
      "entityRefs": [
        "Client",
        "Project"
      ],
      "accessPattern": {
        "kind": "create"
      },
      "inputs": [
        {
          "inputId": "clientId",
          "fieldRef": {
            "entityId": "Project",
            "fieldId": "clientId"
          },
          "description": "Referência ao cliente selecionado ao qual a obra pertence.",
          "source": "userInput",
          "required": true
        },
        {
          "inputId": "name",
          "fieldRef": {
            "entityId": "Project",
            "fieldId": "name"
          },
          "description": "Nome de identificação da obra para portfólio, coordenação e comunicação com o cliente.",
          "source": "userInput",
          "required": true
        },
        {
          "inputId": "address",
          "fieldRef": {
            "entityId": "Project",
            "fieldId": "address"
          },
          "description": "Endereço do local de execução da obra.",
          "source": "userInput",
          "required": true
        },
        {
          "inputId": "status",
          "fieldRef": {
            "entityId": "Project",
            "fieldId": "status"
          },
          "description": "Situação operacional atual da obra.",
          "enumValues": [
            "planned",
            "active",
            "completed",
            "cancelled"
          ],
          "source": "systemDefault",
          "required": true
        },
        {
          "inputId": "authorizedBudget",
          "fieldRef": {
            "entityId": "Project",
            "fieldId": "authorizedBudget"
          },
          "description": "Valor do orçamento autorizado para acompanhamento de custo e faturamento da obra.",
          "source": "userInput",
          "required": true
        },
        {
          "inputId": "plannedStartDate",
          "fieldRef": {
            "entityId": "Project",
            "fieldId": "plannedStartDate"
          },
          "description": "Data planejada para início da execução da obra.",
          "source": "userInput",
          "required": true
        },
        {
          "inputId": "plannedEndDate",
          "fieldRef": {
            "entityId": "Project",
            "fieldId": "plannedEndDate"
          },
          "description": "Data planejada para conclusão da obra.",
          "source": "userInput",
          "required": true
        }
      ],
      "outputRefs": [
        "Project.projectId"
      ],
      "useRules": [
        "activeProject",
        "ongoingProject"
      ],
      "transitionRefs": [],
      "story": [
        "Informar os dados do novo registro."
      ]
    },
    {
      "operationId": "updateProject",
      "title": "Atualizar Obra",
      "kind": "command",
      "entityRef": "Project",
      "entityRefs": [
        "Client",
        "Project"
      ],
      "accessPattern": {
        "kind": "update"
      },
      "inputs": [
        {
          "inputId": "projectId",
          "fieldRef": {
            "entityId": "Project",
            "fieldId": "projectId"
          },
          "description": "Identificador estável da obra, transportado entre etapas e registros relacionados.",
          "source": "selectedEntity",
          "required": true
        },
        {
          "inputId": "clientId",
          "fieldRef": {
            "entityId": "Project",
            "fieldId": "clientId"
          },
          "description": "Referência ao cliente selecionado ao qual a obra pertence.",
          "source": "userInput",
          "required": true
        },
        {
          "inputId": "name",
          "fieldRef": {
            "entityId": "Project",
            "fieldId": "name"
          },
          "description": "Nome de identificação da obra para portfólio, coordenação e comunicação com o cliente.",
          "source": "userInput",
          "required": true
        },
        {
          "inputId": "address",
          "fieldRef": {
            "entityId": "Project",
            "fieldId": "address"
          },
          "description": "Endereço do local de execução da obra.",
          "source": "userInput",
          "required": true
        },
        {
          "inputId": "status",
          "fieldRef": {
            "entityId": "Project",
            "fieldId": "status"
          },
          "description": "Situação operacional atual da obra.",
          "enumValues": [
            "planned",
            "active",
            "completed",
            "cancelled"
          ],
          "source": "systemDefault",
          "required": true
        },
        {
          "inputId": "authorizedBudget",
          "fieldRef": {
            "entityId": "Project",
            "fieldId": "authorizedBudget"
          },
          "description": "Valor do orçamento autorizado para acompanhamento de custo e faturamento da obra.",
          "source": "userInput",
          "required": true
        },
        {
          "inputId": "plannedStartDate",
          "fieldRef": {
            "entityId": "Project",
            "fieldId": "plannedStartDate"
          },
          "description": "Data planejada para início da execução da obra.",
          "source": "userInput",
          "required": true
        },
        {
          "inputId": "plannedEndDate",
          "fieldRef": {
            "entityId": "Project",
            "fieldId": "plannedEndDate"
          },
          "description": "Data planejada para conclusão da obra.",
          "source": "userInput",
          "required": true
        }
      ],
      "outputRefs": [
        "Project.projectId"
      ],
      "useRules": [
        "activeProject",
        "ongoingProject"
      ],
      "transitionRefs": [],
      "story": [
        "Corrigir os dados do registro escolhido."
      ]
    },
    {
      "operationId": "deleteProject",
      "title": "Excluir Obra",
      "kind": "command",
      "entityRef": "Project",
      "entityRefs": [
        "Project"
      ],
      "accessPattern": {
        "kind": "delete"
      },
      "inputs": [
        {
          "inputId": "projectId",
          "fieldRef": {
            "entityId": "Project",
            "fieldId": "projectId"
          },
          "description": "Identificador estável da obra, transportado entre etapas e registros relacionados.",
          "source": "selectedEntity",
          "required": true
        }
      ],
      "outputRefs": [
        "Project.projectId"
      ],
      "useRules": [],
      "transitionRefs": [],
      "story": [
        "Remover o registro escolhido."
      ]
    },
    {
      "operationId": "listProjectCoordinationAssignment",
      "title": "Listar Atribuição de coordenação da obra",
      "kind": "query",
      "entityRef": "ProjectCoordinationAssignment",
      "entityRefs": [
        "ProjectCoordinationAssignment"
      ],
      "accessPattern": {
        "kind": "list",
        "pagination": "optional"
      },
      "inputs": [],
      "outputRefs": [
        "ProjectCoordinationAssignment.projectCoordinationAssignmentId",
        "ProjectCoordinationAssignment.projectId",
        "ProjectCoordinationAssignment.fieldCoordinatorId",
        "ProjectCoordinationAssignment.status"
      ],
      "useRules": [],
      "transitionRefs": [],
      "story": [
        "Encontrar o registro."
      ]
    },
    {
      "operationId": "createProjectCoordinationAssignment",
      "title": "Criar Atribuição de coordenação da obra",
      "kind": "command",
      "entityRef": "ProjectCoordinationAssignment",
      "entityRefs": [
        "FieldCoordinator",
        "Project",
        "ProjectCoordinationAssignment"
      ],
      "accessPattern": {
        "kind": "create"
      },
      "inputs": [
        {
          "inputId": "projectId",
          "fieldRef": {
            "entityId": "ProjectCoordinationAssignment",
            "fieldId": "projectId"
          },
          "description": "Referência de contexto à obra específica encaminhada para acompanhamento de campo.",
          "source": "selectedEntity",
          "required": true
        },
        {
          "inputId": "fieldCoordinatorId",
          "fieldRef": {
            "entityId": "ProjectCoordinationAssignment",
            "fieldId": "fieldCoordinatorId"
          },
          "description": "Referência de contexto ao coordenador de campo responsável pelo acompanhamento da obra.",
          "source": "actorSession",
          "required": true
        },
        {
          "inputId": "status",
          "fieldRef": {
            "entityId": "ProjectCoordinationAssignment",
            "fieldId": "status"
          },
          "description": "Estado operacional atual da atribuição de coordenação da obra.",
          "enumValues": [
            "active",
            "closed",
            "revoked"
          ],
          "source": "systemDefault",
          "required": true
        }
      ],
      "outputRefs": [
        "ProjectCoordinationAssignment.projectCoordinationAssignmentId"
      ],
      "useRules": [
        "activeProjectCoordination"
      ],
      "transitionRefs": [],
      "story": [
        "Informar os dados do novo registro."
      ]
    },
    {
      "operationId": "updateProjectCoordinationAssignment",
      "title": "Atualizar Atribuição de coordenação da obra",
      "kind": "command",
      "entityRef": "ProjectCoordinationAssignment",
      "entityRefs": [
        "FieldCoordinator",
        "Project",
        "ProjectCoordinationAssignment"
      ],
      "accessPattern": {
        "kind": "update"
      },
      "inputs": [
        {
          "inputId": "projectCoordinationAssignmentId",
          "fieldRef": {
            "entityId": "ProjectCoordinationAssignment",
            "fieldId": "projectCoordinationAssignmentId"
          },
          "description": "Identificador estável do registro operacional de encaminhamento da obra para coordenação de campo.",
          "source": "selectedEntity",
          "required": true
        },
        {
          "inputId": "projectId",
          "fieldRef": {
            "entityId": "ProjectCoordinationAssignment",
            "fieldId": "projectId"
          },
          "description": "Referência de contexto à obra específica encaminhada para acompanhamento de campo.",
          "source": "selectedEntity",
          "required": true
        },
        {
          "inputId": "fieldCoordinatorId",
          "fieldRef": {
            "entityId": "ProjectCoordinationAssignment",
            "fieldId": "fieldCoordinatorId"
          },
          "description": "Referência de contexto ao coordenador de campo responsável pelo acompanhamento da obra.",
          "source": "actorSession",
          "required": true
        },
        {
          "inputId": "status",
          "fieldRef": {
            "entityId": "ProjectCoordinationAssignment",
            "fieldId": "status"
          },
          "description": "Estado operacional atual da atribuição de coordenação da obra.",
          "enumValues": [
            "active",
            "closed",
            "revoked"
          ],
          "source": "systemDefault",
          "required": true
        }
      ],
      "outputRefs": [
        "ProjectCoordinationAssignment.projectCoordinationAssignmentId"
      ],
      "useRules": [
        "activeProjectCoordination"
      ],
      "transitionRefs": [],
      "story": [
        "Corrigir os dados do registro escolhido."
      ]
    },
    {
      "operationId": "deleteProjectCoordinationAssignment",
      "title": "Excluir Atribuição de coordenação da obra",
      "kind": "command",
      "entityRef": "ProjectCoordinationAssignment",
      "entityRefs": [
        "ProjectCoordinationAssignment"
      ],
      "accessPattern": {
        "kind": "delete"
      },
      "inputs": [
        {
          "inputId": "projectCoordinationAssignmentId",
          "fieldRef": {
            "entityId": "ProjectCoordinationAssignment",
            "fieldId": "projectCoordinationAssignmentId"
          },
          "description": "Identificador estável do registro operacional de encaminhamento da obra para coordenação de campo.",
          "source": "selectedEntity",
          "required": true
        }
      ],
      "outputRefs": [
        "ProjectCoordinationAssignment.projectCoordinationAssignmentId"
      ],
      "useRules": [],
      "transitionRefs": [],
      "story": [
        "Remover o registro escolhido."
      ]
    },
    {
      "operationId": "listStatusReport",
      "title": "Listar Relatório de status",
      "kind": "query",
      "entityRef": "StatusReport",
      "entityRefs": [
        "StatusReport"
      ],
      "accessPattern": {
        "kind": "list",
        "pagination": "optional"
      },
      "inputs": [],
      "outputRefs": [
        "StatusReport.statusReportId",
        "StatusReport.projectId",
        "StatusReport.status",
        "StatusReport.title",
        "StatusReport.content",
        "StatusReport.communicatedRisks",
        "StatusReport.generatedAt",
        "StatusReport.generatedByUserId",
        "StatusReport.publishedAt",
        "StatusReport.publishedByUserId",
        "StatusReport.withdrawnAt"
      ],
      "useRules": [],
      "transitionRefs": [],
      "story": [
        "Encontrar o registro."
      ]
    },
    {
      "operationId": "createStatusReport",
      "title": "Gerar relatório profissional de status",
      "kind": "command",
      "entityRef": "StatusReport",
      "entityRefs": [
        "Project",
        "ProjectExecutionOverview",
        "ScheduleRiskAssessment",
        "StatusReport"
      ],
      "accessPattern": {
        "kind": "commandInput"
      },
      "inputs": [
        {
          "inputId": "projectProjectId",
          "fieldRef": {
            "entityId": "Project",
            "fieldId": "projectId"
          },
          "source": "routeParam",
          "required": true,
          "description": "Obra"
        },
        {
          "inputId": "projectExecutionOverviewProjectId",
          "fieldRef": {
            "entityId": "ProjectExecutionOverview",
            "fieldId": "projectId"
          },
          "source": "selectedEntity",
          "required": true,
          "description": "Visão consolidada de execução da obra"
        },
        {
          "inputId": "title",
          "fieldRef": {
            "entityId": "StatusReport",
            "fieldId": "title"
          },
          "source": "userInput",
          "required": true,
          "description": "Título profissional que identifica a comunicação de status da obra."
        },
        {
          "inputId": "content",
          "fieldRef": {
            "entityId": "StatusReport",
            "fieldId": "content"
          },
          "source": "userInput",
          "required": true,
          "description": "Texto profissional gerado a partir da execução da obra e revisado pelo gerente antes da publicação."
        },
        {
          "inputId": "communicatedRisks",
          "fieldRef": {
            "entityId": "StatusReport",
            "fieldId": "communicatedRisks"
          },
          "source": "userInput",
          "required": false,
          "description": "Riscos de atraso e indicadores selecionados para comunicação ao cliente no relatório."
        },
        {
          "inputId": "generatedByUserId",
          "fieldRef": {
            "entityId": "StatusReport",
            "fieldId": "generatedByUserId"
          },
          "source": "userInput",
          "required": true,
          "description": "Identificador do gerente responsável por gerar o relatório para revisão."
        },
        {
          "inputId": "publishedByUserId",
          "fieldRef": {
            "entityId": "StatusReport",
            "fieldId": "publishedByUserId"
          },
          "source": "userInput",
          "required": false,
          "description": "Identificador do gerente responsável pela publicação observável do relatório."
        }
      ],
      "outputRefs": [
        "StatusReport.statusReportId",
        "StatusReport.projectId",
        "StatusReport.status",
        "StatusReport.title",
        "StatusReport.content",
        "StatusReport.communicatedRisks",
        "StatusReport.generatedAt",
        "StatusReport.generatedByUserId",
        "StatusReport.publishedAt",
        "StatusReport.publishedByUserId",
        "StatusReport.withdrawnAt"
      ],
      "useRules": [
        "statusReportUsesProjectExecutionData"
      ],
      "transitionRefs": [],
      "story": [
        "Gerar relatório profissional de status",
        "Um relatório baseado nos dados da obra fica gerado para revisão."
      ],
      "useCaseId": "createStatusReport"
    },
    {
      "operationId": "updateStatusReport",
      "title": "Atualizar Relatório de status",
      "kind": "command",
      "entityRef": "StatusReport",
      "entityRefs": [
        "Project",
        "ProjectExecutionOverview",
        "StatusReport"
      ],
      "accessPattern": {
        "kind": "update"
      },
      "inputs": [
        {
          "inputId": "statusReportId",
          "fieldRef": {
            "entityId": "StatusReport",
            "fieldId": "statusReportId"
          },
          "description": "Identificador estável do relatório, transportado entre as etapas conectadas da jornada.",
          "source": "selectedEntity",
          "required": true
        },
        {
          "inputId": "projectId",
          "fieldRef": {
            "entityId": "StatusReport",
            "fieldId": "projectId"
          },
          "description": "Referência de contexto à obra específica cuja situação é comunicada pelo relatório.",
          "source": "selectedEntity",
          "required": true
        },
        {
          "inputId": "status",
          "fieldRef": {
            "entityId": "StatusReport",
            "fieldId": "status"
          },
          "description": "Estado do ciclo de vida do relatório para revisão, comunicação ao cliente ou retirada.",
          "enumValues": [
            "draft",
            "published",
            "withdrawn"
          ],
          "source": "systemDefault",
          "required": true
        },
        {
          "inputId": "title",
          "fieldRef": {
            "entityId": "StatusReport",
            "fieldId": "title"
          },
          "description": "Título profissional que identifica a comunicação de status da obra.",
          "source": "userInput",
          "required": true
        },
        {
          "inputId": "content",
          "fieldRef": {
            "entityId": "StatusReport",
            "fieldId": "content"
          },
          "description": "Texto profissional gerado a partir da execução da obra e revisado pelo gerente antes da publicação.",
          "source": "userInput",
          "required": true
        },
        {
          "inputId": "communicatedRisks",
          "fieldRef": {
            "entityId": "StatusReport",
            "fieldId": "communicatedRisks"
          },
          "description": "Riscos de atraso e indicadores selecionados para comunicação ao cliente no relatório.",
          "source": "userInput",
          "required": false
        },
        {
          "inputId": "generatedAt",
          "fieldRef": {
            "entityId": "StatusReport",
            "fieldId": "generatedAt"
          },
          "description": "Data e hora em que o relatório foi gerado para revisão.",
          "source": "systemDefault",
          "required": true
        },
        {
          "inputId": "generatedByUserId",
          "fieldRef": {
            "entityId": "StatusReport",
            "fieldId": "generatedByUserId"
          },
          "description": "Identificador do gerente responsável por gerar o relatório para revisão.",
          "source": "userInput",
          "required": true
        },
        {
          "inputId": "publishedAt",
          "fieldRef": {
            "entityId": "StatusReport",
            "fieldId": "publishedAt"
          },
          "description": "Data e hora em que o relatório foi aprovado para comunicação ao cliente.",
          "source": "systemDefault",
          "required": false
        },
        {
          "inputId": "publishedByUserId",
          "fieldRef": {
            "entityId": "StatusReport",
            "fieldId": "publishedByUserId"
          },
          "description": "Identificador do gerente responsável pela publicação observável do relatório.",
          "source": "userInput",
          "required": false
        },
        {
          "inputId": "withdrawnAt",
          "fieldRef": {
            "entityId": "StatusReport",
            "fieldId": "withdrawnAt"
          },
          "description": "Data e hora em que um relatório publicado foi retirado de circulação.",
          "source": "systemDefault",
          "required": false
        }
      ],
      "outputRefs": [
        "StatusReport.statusReportId"
      ],
      "useRules": [
        "statusReportUsesProjectExecutionData",
        "onlyProjectManagerPublishesStatusReport",
        "clientSeesOnlyOwnProjectInformation",
        "clientVisibleStatusReport"
      ],
      "transitionRefs": [],
      "story": [
        "Corrigir os dados do registro escolhido."
      ]
    },
    {
      "operationId": "deleteStatusReport",
      "title": "Excluir Relatório de status",
      "kind": "command",
      "entityRef": "StatusReport",
      "entityRefs": [
        "StatusReport"
      ],
      "accessPattern": {
        "kind": "delete"
      },
      "inputs": [
        {
          "inputId": "statusReportId",
          "fieldRef": {
            "entityId": "StatusReport",
            "fieldId": "statusReportId"
          },
          "description": "Identificador estável do relatório, transportado entre as etapas conectadas da jornada.",
          "source": "selectedEntity",
          "required": true
        }
      ],
      "outputRefs": [
        "StatusReport.statusReportId"
      ],
      "useRules": [],
      "transitionRefs": [],
      "story": [
        "Remover o registro escolhido."
      ]
    },
    {
      "operationId": "listTimeLog",
      "title": "Listar Registro de horas",
      "kind": "query",
      "entityRef": "TimeLog",
      "entityRefs": [
        "TimeLog"
      ],
      "accessPattern": {
        "kind": "list",
        "pagination": "optional"
      },
      "inputs": [],
      "outputRefs": [
        "TimeLog.timeLogId",
        "TimeLog.status",
        "TimeLog.workTaskId",
        "TimeLog.fieldWorkerId",
        "TimeLog.workDate",
        "TimeLog.hoursWorked",
        "TimeLog.hourlyLaborCost"
      ],
      "useRules": [],
      "transitionRefs": [],
      "story": [
        "Encontrar o registro."
      ]
    },
    {
      "operationId": "createTimeLog",
      "title": "Registrar as horas trabalhadas",
      "kind": "command",
      "entityRef": "TimeLog",
      "entityRefs": [
        "FieldWorker",
        "TimeLog",
        "WorkTask"
      ],
      "accessPattern": {
        "kind": "commandInput"
      },
      "inputs": [
        {
          "inputId": "workTaskWorkTaskId",
          "fieldRef": {
            "entityId": "WorkTask",
            "fieldId": "workTaskId"
          },
          "source": "selectedEntity",
          "required": true,
          "description": "Tarefa de trabalho"
        },
        {
          "inputId": "workDate",
          "fieldRef": {
            "entityId": "TimeLog",
            "fieldId": "workDate"
          },
          "source": "userInput",
          "required": true,
          "description": "Data diária em que as horas foram efetivamente realizadas."
        },
        {
          "inputId": "hoursWorked",
          "fieldRef": {
            "entityId": "TimeLog",
            "fieldId": "hoursWorked"
          },
          "source": "userInput",
          "required": true,
          "description": "Quantidade de horas de execução apontadas pelo trabalhador para a tarefa."
        },
        {
          "inputId": "hourlyLaborCost",
          "fieldRef": {
            "entityId": "TimeLog",
            "fieldId": "hourlyLaborCost"
          },
          "source": "userInput",
          "required": true,
          "description": "Base histórica de custo por hora aplicada ao apontamento para compor o custo realizado da obra."
        }
      ],
      "outputRefs": [
        "TimeLog.timeLogId",
        "TimeLog.status",
        "TimeLog.workTaskId",
        "TimeLog.fieldWorkerId",
        "TimeLog.workDate",
        "TimeLog.hoursWorked",
        "TimeLog.hourlyLaborCost"
      ],
      "useRules": [
        "activeWorkTask",
        "timeLogRequiresWorkerTaskAndPositiveHours"
      ],
      "transitionRefs": [],
      "story": [
        "Registrar as horas trabalhadas",
        "Um registro diário vinculado ao trabalhador e à tarefa fica armazenado."
      ],
      "useCaseId": "createTimeLog"
    },
    {
      "operationId": "updateTimeLog",
      "title": "Atualizar Registro de horas",
      "kind": "command",
      "entityRef": "TimeLog",
      "entityRefs": [
        "FieldWorker",
        "TimeLog",
        "WorkTask"
      ],
      "accessPattern": {
        "kind": "update"
      },
      "inputs": [
        {
          "inputId": "timeLogId",
          "fieldRef": {
            "entityId": "TimeLog",
            "fieldId": "timeLogId"
          },
          "description": "Identificador estável do apontamento de horas, transportado entre as etapas conectadas.",
          "source": "selectedEntity",
          "required": true
        },
        {
          "inputId": "status",
          "fieldRef": {
            "entityId": "TimeLog",
            "fieldId": "status"
          },
          "description": "Estado do apontamento para determinar se suas horas participam do custo e dos indicadores de execução.",
          "enumValues": [
            "recorded",
            "voided"
          ],
          "source": "systemDefault",
          "required": true
        },
        {
          "inputId": "workTaskId",
          "fieldRef": {
            "entityId": "TimeLog",
            "fieldId": "workTaskId"
          },
          "description": "Referência à tarefa selecionada à qual as horas executadas são atribuídas.",
          "source": "selectedEntity",
          "required": true
        },
        {
          "inputId": "fieldWorkerId",
          "fieldRef": {
            "entityId": "TimeLog",
            "fieldId": "fieldWorkerId"
          },
          "description": "Referência ao trabalhador selecionado que realizou as horas registradas.",
          "source": "actorSession",
          "required": true
        },
        {
          "inputId": "workDate",
          "fieldRef": {
            "entityId": "TimeLog",
            "fieldId": "workDate"
          },
          "description": "Data diária em que as horas foram efetivamente realizadas.",
          "source": "userInput",
          "required": true
        },
        {
          "inputId": "hoursWorked",
          "fieldRef": {
            "entityId": "TimeLog",
            "fieldId": "hoursWorked"
          },
          "description": "Quantidade de horas de execução apontadas pelo trabalhador para a tarefa.",
          "source": "userInput",
          "required": true
        },
        {
          "inputId": "hourlyLaborCost",
          "fieldRef": {
            "entityId": "TimeLog",
            "fieldId": "hourlyLaborCost"
          },
          "description": "Base histórica de custo por hora aplicada ao apontamento para compor o custo realizado da obra.",
          "source": "userInput",
          "required": true
        }
      ],
      "outputRefs": [
        "TimeLog.timeLogId"
      ],
      "useRules": [
        "timeLogRequiresWorkerTaskAndPositiveHours",
        "costEligibleTimeLog"
      ],
      "transitionRefs": [],
      "story": [
        "Corrigir os dados do registro escolhido."
      ]
    },
    {
      "operationId": "deleteTimeLog",
      "title": "Excluir Registro de horas",
      "kind": "command",
      "entityRef": "TimeLog",
      "entityRefs": [
        "TimeLog"
      ],
      "accessPattern": {
        "kind": "delete"
      },
      "inputs": [
        {
          "inputId": "timeLogId",
          "fieldRef": {
            "entityId": "TimeLog",
            "fieldId": "timeLogId"
          },
          "description": "Identificador estável do apontamento de horas, transportado entre as etapas conectadas.",
          "source": "selectedEntity",
          "required": true
        }
      ],
      "outputRefs": [
        "TimeLog.timeLogId"
      ],
      "useRules": [],
      "transitionRefs": [],
      "story": [
        "Remover o registro escolhido."
      ]
    },
    {
      "operationId": "listWorkTask",
      "title": "Listar Tarefa de trabalho",
      "kind": "query",
      "entityRef": "WorkTask",
      "entityRefs": [
        "WorkTask"
      ],
      "accessPattern": {
        "kind": "list",
        "pagination": "optional"
      },
      "inputs": [],
      "outputRefs": [
        "WorkTask.workTaskId",
        "WorkTask.projectId",
        "WorkTask.assignedFieldWorkerId",
        "WorkTask.description",
        "WorkTask.dueDate",
        "WorkTask.status",
        "WorkTask.progressUpdate"
      ],
      "useRules": [],
      "transitionRefs": [],
      "story": [
        "Encontrar o registro."
      ]
    },
    {
      "operationId": "createWorkTask",
      "title": "Registrar a tarefa atribuída",
      "kind": "command",
      "entityRef": "WorkTask",
      "entityRefs": [
        "FieldWorker",
        "Project",
        "WorkTask"
      ],
      "accessPattern": {
        "kind": "commandInput"
      },
      "inputs": [
        {
          "inputId": "projectProjectId",
          "fieldRef": {
            "entityId": "Project",
            "fieldId": "projectId"
          },
          "source": "routeParam",
          "required": true,
          "description": "Obra"
        },
        {
          "inputId": "description",
          "fieldRef": {
            "entityId": "WorkTask",
            "fieldId": "description"
          },
          "source": "userInput",
          "required": true,
          "description": "Descrição do trabalho a ser executado em campo."
        },
        {
          "inputId": "dueDate",
          "fieldRef": {
            "entityId": "WorkTask",
            "fieldId": "dueDate"
          },
          "source": "userInput",
          "required": true,
          "description": "Data prevista para conclusão da tarefa no cronograma da obra."
        },
        {
          "inputId": "progressUpdate",
          "fieldRef": {
            "entityId": "WorkTask",
            "fieldId": "progressUpdate"
          },
          "source": "userInput",
          "required": false,
          "description": "Atualização de andamento registrada pelo trabalhador durante a execução da tarefa."
        }
      ],
      "outputRefs": [
        "WorkTask.workTaskId",
        "WorkTask.projectId",
        "WorkTask.assignedFieldWorkerId",
        "WorkTask.description",
        "WorkTask.dueDate",
        "WorkTask.status",
        "WorkTask.progressUpdate"
      ],
      "useRules": [
        "workTaskRequiresActiveProject",
        "workTaskRequiresAssigneeAndDueDate"
      ],
      "transitionRefs": [],
      "story": [
        "Registrar a tarefa atribuída",
        "Uma nova tarefa com descrição, prazo e responsável fica registrada para a obra."
      ],
      "useCaseId": "createWorkTask"
    },
    {
      "operationId": "updateWorkTask",
      "title": "Registrar o andamento da tarefa",
      "kind": "command",
      "entityRef": "WorkTask",
      "entityRefs": [
        "Project",
        "WorkTask"
      ],
      "accessPattern": {
        "kind": "commandInput"
      },
      "inputs": [
        {
          "inputId": "projectProjectId",
          "fieldRef": {
            "entityId": "Project",
            "fieldId": "projectId"
          },
          "source": "routeParam",
          "required": true,
          "description": "Obra"
        },
        {
          "inputId": "workTaskWorkTaskId",
          "fieldRef": {
            "entityId": "WorkTask",
            "fieldId": "workTaskId"
          },
          "source": "selectedEntity",
          "required": true,
          "description": "Tarefa de trabalho"
        },
        {
          "inputId": "description",
          "fieldRef": {
            "entityId": "WorkTask",
            "fieldId": "description"
          },
          "source": "userInput",
          "required": true,
          "description": "Descrição do trabalho a ser executado em campo."
        },
        {
          "inputId": "dueDate",
          "fieldRef": {
            "entityId": "WorkTask",
            "fieldId": "dueDate"
          },
          "source": "userInput",
          "required": true,
          "description": "Data prevista para conclusão da tarefa no cronograma da obra."
        },
        {
          "inputId": "progressUpdate",
          "fieldRef": {
            "entityId": "WorkTask",
            "fieldId": "progressUpdate"
          },
          "source": "userInput",
          "required": false,
          "description": "Atualização de andamento registrada pelo trabalhador durante a execução da tarefa."
        }
      ],
      "outputRefs": [
        "WorkTask.workTaskId",
        "WorkTask.projectId",
        "WorkTask.assignedFieldWorkerId",
        "WorkTask.description",
        "WorkTask.dueDate",
        "WorkTask.status",
        "WorkTask.progressUpdate"
      ],
      "useRules": [
        "onlyAssignedWorkerReportsTaskProgress"
      ],
      "transitionRefs": [],
      "story": [
        "Registrar o andamento da tarefa",
        "O status e o andamento atual ficam registrados."
      ],
      "useCaseId": "updateWorkTask"
    },
    {
      "operationId": "deleteWorkTask",
      "title": "Excluir Tarefa de trabalho",
      "kind": "command",
      "entityRef": "WorkTask",
      "entityRefs": [
        "WorkTask"
      ],
      "accessPattern": {
        "kind": "delete"
      },
      "inputs": [
        {
          "inputId": "workTaskId",
          "fieldRef": {
            "entityId": "WorkTask",
            "fieldId": "workTaskId"
          },
          "description": "Identificador estável da tarefa, mantido entre as etapas conectadas.",
          "source": "selectedEntity",
          "required": true
        }
      ],
      "outputRefs": [
        "WorkTask.workTaskId"
      ],
      "useRules": [],
      "transitionRefs": [],
      "story": [
        "Remover o registro escolhido."
      ]
    },
    {
      "operationId": "inspectProjectDashboard",
      "title": "Consultar o painel de obras",
      "kind": "query",
      "entityRef": "ProjectDashboard",
      "entityRefs": [
        "Project",
        "ProjectDashboard"
      ],
      "accessPattern": {
        "kind": "getById"
      },
      "inputs": [],
      "outputRefs": [
        "ProjectDashboard.activeProjects",
        "ProjectDashboard.activeProjectCount",
        "ProjectDashboard.totalBudget",
        "ProjectDashboard.totalActualCost",
        "ProjectDashboard.budgetVariance",
        "ProjectDashboard.costAttentionProjects",
        "ProjectDashboard.upcomingTasks"
      ],
      "useRules": [
        "activeProjectCostVisibility"
      ],
      "transitionRefs": [],
      "story": [
        "Consultar o painel de obras",
        "Projetos ativos, orçamento versus realizado e tarefas próximas estão visíveis."
      ],
      "useCaseId": "inspectProjectDashboard"
    },
    {
      "operationId": "locateProject",
      "title": "Selecionar a obra que exige atenção",
      "kind": "query",
      "entityRef": "Project",
      "entityRefs": [
        "Project"
      ],
      "accessPattern": {
        "kind": "list",
        "pagination": "optional"
      },
      "inputs": [],
      "outputRefs": [
        "Project.projectId",
        "Project.clientId",
        "Project.name",
        "Project.address",
        "Project.status",
        "Project.authorizedBudget",
        "Project.plannedStartDate",
        "Project.plannedEndDate"
      ],
      "useRules": [],
      "transitionRefs": [],
      "story": [
        "Localizar a própria obra",
        "Uma obra associada ao cliente está selecionada."
      ],
      "useCaseId": "locateProject"
    },
    {
      "operationId": "inspectProjectExecutionOverview",
      "title": "Analisar a execução da obra",
      "kind": "query",
      "entityRef": "ProjectExecutionOverview",
      "entityRefs": [
        "ProjectExecutionOverview"
      ],
      "accessPattern": {
        "kind": "getById"
      },
      "inputs": [
        {
          "inputId": "projectExecutionOverviewProjectId",
          "fieldRef": {
            "entityId": "ProjectExecutionOverview",
            "fieldId": "projectId"
          },
          "source": "selectedEntity",
          "required": true,
          "description": "Visão consolidada de execução da obra"
        }
      ],
      "outputRefs": [
        "ProjectExecutionOverview.projectId",
        "ProjectExecutionOverview.projectName",
        "ProjectExecutionOverview.projectStatus",
        "ProjectExecutionOverview.workTaskIds",
        "ProjectExecutionOverview.taskSummary",
        "ProjectExecutionOverview.upcomingCommitments",
        "ProjectExecutionOverview.timeLogIds",
        "ProjectExecutionOverview.totalLoggedHours",
        "ProjectExecutionOverview.materialUsageIds",
        "ProjectExecutionOverview.materialUsageSummary",
        "ProjectExecutionOverview.actualLaborCost",
        "ProjectExecutionOverview.actualMaterialCost",
        "ProjectExecutionOverview.actualCost",
        "ProjectExecutionOverview.budgetAmount",
        "ProjectExecutionOverview.costVariance",
        "ProjectExecutionOverview.changeOrderIds",
        "ProjectExecutionOverview.changeOrderImpactSummary",
        "ProjectExecutionOverview.calculatedAt"
      ],
      "useRules": [
        "activeProjectCostVisibility"
      ],
      "transitionRefs": [],
      "story": [
        "Acompanhar a execução com os registros diários",
        "Andamento, registros e próximos prazos estão consolidados."
      ],
      "useCaseId": "inspectProjectExecutionOverview"
    },
    {
      "operationId": "handoffProjectToFieldCoordinator",
      "title": "Encaminhar a obra para acompanhamento de campo",
      "kind": "command",
      "entityRef": "Project",
      "entityRefs": [
        "Project",
        "ProjectCoordinationAssignment"
      ],
      "accessPattern": {
        "kind": "commandInput"
      },
      "inputs": [
        {
          "inputId": "projectProjectId",
          "fieldRef": {
            "entityId": "Project",
            "fieldId": "projectId"
          },
          "source": "routeParam",
          "required": true,
          "description": "Obra"
        },
        {
          "inputId": "clientId",
          "fieldRef": {
            "entityId": "Project",
            "fieldId": "clientId"
          },
          "source": "userInput",
          "required": true,
          "description": "Referência ao cliente selecionado ao qual a obra pertence."
        },
        {
          "inputId": "name",
          "fieldRef": {
            "entityId": "Project",
            "fieldId": "name"
          },
          "source": "userInput",
          "required": true,
          "description": "Nome de identificação da obra para portfólio, coordenação e comunicação com o cliente."
        },
        {
          "inputId": "address",
          "fieldRef": {
            "entityId": "Project",
            "fieldId": "address"
          },
          "source": "userInput",
          "required": true,
          "description": "Endereço do local de execução da obra."
        },
        {
          "inputId": "authorizedBudget",
          "fieldRef": {
            "entityId": "Project",
            "fieldId": "authorizedBudget"
          },
          "source": "userInput",
          "required": true,
          "description": "Valor do orçamento autorizado para acompanhamento de custo e faturamento da obra."
        },
        {
          "inputId": "plannedStartDate",
          "fieldRef": {
            "entityId": "Project",
            "fieldId": "plannedStartDate"
          },
          "source": "userInput",
          "required": true,
          "description": "Data planejada para início da execução da obra."
        },
        {
          "inputId": "plannedEndDate",
          "fieldRef": {
            "entityId": "Project",
            "fieldId": "plannedEndDate"
          },
          "source": "userInput",
          "required": true,
          "description": "Data planejada para conclusão da obra."
        }
      ],
      "outputRefs": [
        "Project.projectId",
        "Project.clientId",
        "Project.name",
        "Project.address",
        "Project.status",
        "Project.authorizedBudget",
        "Project.plannedStartDate",
        "Project.plannedEndDate"
      ],
      "useRules": [
        "activeProjectCoordination",
        "ongoingProject"
      ],
      "transitionRefs": [],
      "story": [
        "Encaminhar a obra para acompanhamento de campo",
        "O coordenador de campo recebe a obra para coordenar a execução."
      ],
      "useCaseId": "handoffProjectToFieldCoordinator"
    },
    {
      "operationId": "inspectProjectTimeline",
      "title": "Consultar o cronograma da obra",
      "kind": "query",
      "entityRef": "ProjectTimeline",
      "entityRefs": [
        "Project",
        "ProjectTimeline",
        "WorkTask"
      ],
      "accessPattern": {
        "kind": "getById"
      },
      "inputs": [
        {
          "inputId": "projectTimelineProjectId",
          "fieldRef": {
            "entityId": "ProjectTimeline",
            "fieldId": "projectId"
          },
          "source": "selectedEntity",
          "required": true,
          "description": "Cronograma da obra"
        }
      ],
      "outputRefs": [
        "ProjectTimeline.projectId",
        "ProjectTimeline.workTasks",
        "ProjectTimeline.scheduleEntries"
      ],
      "useRules": [],
      "transitionRefs": [],
      "story": [
        "Consultar o cronograma da obra",
        "A sequência de tarefas e prazos está visível para planejamento."
      ],
      "useCaseId": "inspectProjectTimeline"
    },
    {
      "operationId": "locateFieldWorker",
      "title": "Selecionar o trabalhador responsável",
      "kind": "query",
      "entityRef": "FieldWorker",
      "entityRefs": [
        "FieldWorker"
      ],
      "accessPattern": {
        "kind": "list",
        "pagination": "optional"
      },
      "inputs": [],
      "outputRefs": [
        "FieldWorker.platformUserId"
      ],
      "useRules": [],
      "transitionRefs": [],
      "story": [
        "Confirmar o trabalhador",
        "O trabalhador que realizou o trabalho está selecionado no diretório da organização."
      ],
      "useCaseId": "locateFieldWorker"
    },
    {
      "operationId": "handoffWorkTaskToFieldWorker",
      "title": "Encaminhar a tarefa ao trabalhador",
      "kind": "command",
      "entityRef": "WorkTask",
      "entityRefs": [
        "FieldWorker",
        "WorkTask"
      ],
      "accessPattern": {
        "kind": "commandInput"
      },
      "inputs": [
        {
          "inputId": "workTaskWorkTaskId",
          "fieldRef": {
            "entityId": "WorkTask",
            "fieldId": "workTaskId"
          },
          "source": "selectedEntity",
          "required": true,
          "description": "Tarefa de trabalho"
        },
        {
          "inputId": "description",
          "fieldRef": {
            "entityId": "WorkTask",
            "fieldId": "description"
          },
          "source": "userInput",
          "required": true,
          "description": "Descrição do trabalho a ser executado em campo."
        },
        {
          "inputId": "dueDate",
          "fieldRef": {
            "entityId": "WorkTask",
            "fieldId": "dueDate"
          },
          "source": "userInput",
          "required": true,
          "description": "Data prevista para conclusão da tarefa no cronograma da obra."
        },
        {
          "inputId": "progressUpdate",
          "fieldRef": {
            "entityId": "WorkTask",
            "fieldId": "progressUpdate"
          },
          "source": "userInput",
          "required": false,
          "description": "Atualização de andamento registrada pelo trabalhador durante a execução da tarefa."
        }
      ],
      "outputRefs": [
        "WorkTask.workTaskId",
        "WorkTask.projectId",
        "WorkTask.assignedFieldWorkerId",
        "WorkTask.description",
        "WorkTask.dueDate",
        "WorkTask.status",
        "WorkTask.progressUpdate"
      ],
      "useRules": [
        "workTaskRequiresAssigneeAndDueDate"
      ],
      "transitionRefs": [],
      "story": [
        "Encaminhar a tarefa ao trabalhador",
        "O trabalhador recebe a tarefa para execução em campo."
      ],
      "useCaseId": "handoffWorkTaskToFieldWorker"
    },
    {
      "operationId": "locateWorkTask",
      "title": "Localizar a tarefa atribuída",
      "kind": "query",
      "entityRef": "WorkTask",
      "entityRefs": [
        "WorkTask"
      ],
      "accessPattern": {
        "kind": "list",
        "pagination": "optional"
      },
      "inputs": [],
      "outputRefs": [
        "WorkTask.workTaskId",
        "WorkTask.projectId",
        "WorkTask.assignedFieldWorkerId",
        "WorkTask.description",
        "WorkTask.dueDate",
        "WorkTask.status",
        "WorkTask.progressUpdate"
      ],
      "useRules": [],
      "transitionRefs": [],
      "story": [
        "Localizar a tarefa executada",
        "Uma tarefa da obra está selecionada para o registro."
      ],
      "useCaseId": "locateWorkTask"
    },
    {
      "operationId": "handoffWorkTaskProgressToFieldCoordinator",
      "title": "Informar o andamento ao coordenador",
      "kind": "command",
      "entityRef": "WorkTask",
      "entityRefs": [
        "WorkTask"
      ],
      "accessPattern": {
        "kind": "commandInput"
      },
      "inputs": [
        {
          "inputId": "workTaskWorkTaskId",
          "fieldRef": {
            "entityId": "WorkTask",
            "fieldId": "workTaskId"
          },
          "source": "selectedEntity",
          "required": true,
          "description": "Tarefa de trabalho"
        },
        {
          "inputId": "description",
          "fieldRef": {
            "entityId": "WorkTask",
            "fieldId": "description"
          },
          "source": "userInput",
          "required": true,
          "description": "Descrição do trabalho a ser executado em campo."
        },
        {
          "inputId": "dueDate",
          "fieldRef": {
            "entityId": "WorkTask",
            "fieldId": "dueDate"
          },
          "source": "userInput",
          "required": true,
          "description": "Data prevista para conclusão da tarefa no cronograma da obra."
        },
        {
          "inputId": "progressUpdate",
          "fieldRef": {
            "entityId": "WorkTask",
            "fieldId": "progressUpdate"
          },
          "source": "userInput",
          "required": false,
          "description": "Atualização de andamento registrada pelo trabalhador durante a execução da tarefa."
        }
      ],
      "outputRefs": [
        "WorkTask.workTaskId",
        "WorkTask.projectId",
        "WorkTask.assignedFieldWorkerId",
        "WorkTask.description",
        "WorkTask.dueDate",
        "WorkTask.status",
        "WorkTask.progressUpdate"
      ],
      "useRules": [],
      "transitionRefs": [],
      "story": [
        "Informar o andamento ao coordenador",
        "O coordenador recebe a tarefa com andamento atualizado."
      ],
      "useCaseId": "handoffWorkTaskProgressToFieldCoordinator"
    },
    {
      "operationId": "handoffTimeLogToFieldCoordinator",
      "title": "Encaminhar o registro diário",
      "kind": "command",
      "entityRef": "TimeLog",
      "entityRefs": [
        "TimeLog"
      ],
      "accessPattern": {
        "kind": "commandInput"
      },
      "inputs": [
        {
          "inputId": "timeLogTimeLogId",
          "fieldRef": {
            "entityId": "TimeLog",
            "fieldId": "timeLogId"
          },
          "source": "selectedEntity",
          "required": true,
          "description": "Registro de horas"
        },
        {
          "inputId": "workDate",
          "fieldRef": {
            "entityId": "TimeLog",
            "fieldId": "workDate"
          },
          "source": "userInput",
          "required": true,
          "description": "Data diária em que as horas foram efetivamente realizadas."
        },
        {
          "inputId": "hoursWorked",
          "fieldRef": {
            "entityId": "TimeLog",
            "fieldId": "hoursWorked"
          },
          "source": "userInput",
          "required": true,
          "description": "Quantidade de horas de execução apontadas pelo trabalhador para a tarefa."
        },
        {
          "inputId": "hourlyLaborCost",
          "fieldRef": {
            "entityId": "TimeLog",
            "fieldId": "hourlyLaborCost"
          },
          "source": "userInput",
          "required": true,
          "description": "Base histórica de custo por hora aplicada ao apontamento para compor o custo realizado da obra."
        }
      ],
      "outputRefs": [
        "TimeLog.timeLogId",
        "TimeLog.status",
        "TimeLog.workTaskId",
        "TimeLog.fieldWorkerId",
        "TimeLog.workDate",
        "TimeLog.hoursWorked",
        "TimeLog.hourlyLaborCost"
      ],
      "useRules": [],
      "transitionRefs": [],
      "story": [
        "Encaminhar o registro diário",
        "O coordenador recebe o registro de horas para acompanhamento."
      ],
      "useCaseId": "handoffTimeLogToFieldCoordinator"
    },
    {
      "operationId": "locateInventoryItem",
      "title": "Selecionar o material consumido",
      "kind": "query",
      "entityRef": "InventoryItem",
      "entityRefs": [
        "InventoryItem"
      ],
      "accessPattern": {
        "kind": "list",
        "pagination": "optional"
      },
      "inputs": [],
      "outputRefs": [
        "InventoryItem.inventoryItemId",
        "InventoryItem.name",
        "InventoryItem.description",
        "InventoryItem.unitOfMeasure",
        "InventoryItem.referenceUnitCost",
        "InventoryItem.status"
      ],
      "useRules": [
        "selectableInventoryItem"
      ],
      "transitionRefs": [],
      "story": [
        "Selecionar o material consumido",
        "Um item do catálogo compartilhado de materiais e estoque está selecionado."
      ],
      "useCaseId": "locateInventoryItem"
    },
    {
      "operationId": "handoffMaterialUsageToFieldCoordinator",
      "title": "Informar o consumo ao coordenador",
      "kind": "command",
      "entityRef": "MaterialUsage",
      "entityRefs": [
        "MaterialUsage"
      ],
      "accessPattern": {
        "kind": "commandInput"
      },
      "inputs": [
        {
          "inputId": "materialUsageMaterialUsageId",
          "fieldRef": {
            "entityId": "MaterialUsage",
            "fieldId": "materialUsageId"
          },
          "source": "selectedEntity",
          "required": true,
          "description": "Consumo de material"
        },
        {
          "inputId": "quantity",
          "fieldRef": {
            "entityId": "MaterialUsage",
            "fieldId": "quantity"
          },
          "source": "userInput",
          "required": true,
          "description": "Quantidade do item efetivamente consumida na obra."
        },
        {
          "inputId": "usageDescription",
          "fieldRef": {
            "entityId": "MaterialUsage",
            "fieldId": "usageDescription"
          },
          "source": "userInput",
          "required": true,
          "description": "Descrição informada do consumo de material realizado em campo."
        },
        {
          "inputId": "consumedOn",
          "fieldRef": {
            "entityId": "MaterialUsage",
            "fieldId": "consumedOn"
          },
          "source": "userInput",
          "required": true,
          "description": "Data em que o material foi efetivamente consumido na obra."
        },
        {
          "inputId": "unitCostBasis",
          "fieldRef": {
            "entityId": "MaterialUsage",
            "fieldId": "unitCostBasis"
          },
          "source": "userInput",
          "required": true,
          "description": "Custo unitário preservado como base para o custeio realizado do consumo."
        }
      ],
      "outputRefs": [
        "MaterialUsage.materialUsageId",
        "MaterialUsage.status",
        "MaterialUsage.projectId",
        "MaterialUsage.inventoryItemId",
        "MaterialUsage.inventoryBalanceId",
        "MaterialUsage.quantity",
        "MaterialUsage.usageDescription",
        "MaterialUsage.consumedOn",
        "MaterialUsage.unitCostBasis"
      ],
      "useRules": [],
      "transitionRefs": [],
      "story": [
        "Informar o consumo ao coordenador",
        "O coordenador recebe o consumo para acompanhamento."
      ],
      "useCaseId": "handoffMaterialUsageToFieldCoordinator"
    },
    {
      "operationId": "locateClient",
      "title": "Localizar o cliente",
      "kind": "query",
      "entityRef": "Client",
      "entityRefs": [
        "Client"
      ],
      "accessPattern": {
        "kind": "list",
        "pagination": "optional"
      },
      "inputs": [],
      "outputRefs": [
        "Client.clientId",
        "Client.clientName",
        "Client.contactEmail",
        "Client.contactPhone"
      ],
      "useRules": [],
      "transitionRefs": [],
      "story": [
        "Localizar o cliente",
        "Um cliente do catálogo compartilhado está selecionado."
      ],
      "useCaseId": "locateClient"
    },
    {
      "operationId": "handoffChangeOrderToProjectManager",
      "title": "Submeter a alteração para tratamento",
      "kind": "command",
      "entityRef": "ChangeOrder",
      "entityRefs": [
        "ChangeOrder"
      ],
      "accessPattern": {
        "kind": "commandInput"
      },
      "inputs": [
        {
          "inputId": "changeOrderChangeOrderId",
          "fieldRef": {
            "entityId": "ChangeOrder",
            "fieldId": "changeOrderId"
          },
          "source": "selectedEntity",
          "required": true,
          "description": "Ordem de mudança"
        },
        {
          "inputId": "description",
          "fieldRef": {
            "entityId": "ChangeOrder",
            "fieldId": "description"
          },
          "source": "userInput",
          "required": true,
          "description": "Descrição da alteração proposta na obra para avaliação gerencial e comunicação ao cliente."
        },
        {
          "inputId": "scopeImpact",
          "fieldRef": {
            "entityId": "ChangeOrder",
            "fieldId": "scopeImpact"
          },
          "source": "userInput",
          "required": true,
          "description": "Impacto proposto da alteração no escopo da obra."
        },
        {
          "inputId": "scheduleImpact",
          "fieldRef": {
            "entityId": "ChangeOrder",
            "fieldId": "scheduleImpact"
          },
          "source": "userInput",
          "required": true,
          "description": "Impacto proposto da alteração no prazo de execução da obra."
        },
        {
          "inputId": "changeAmount",
          "fieldRef": {
            "entityId": "ChangeOrder",
            "fieldId": "changeAmount"
          },
          "source": "userInput",
          "required": true,
          "description": "Valor comercial da alteração proposto para aprovação do cliente, custeio e faturamento."
        }
      ],
      "outputRefs": [
        "ChangeOrder.changeOrderId",
        "ChangeOrder.clientRef",
        "ChangeOrder.projectRef",
        "ChangeOrder.description",
        "ChangeOrder.scopeImpact",
        "ChangeOrder.scheduleImpact",
        "ChangeOrder.changeAmount",
        "ChangeOrder.submittedAt",
        "ChangeOrder.forwardedForClientApprovalAt",
        "ChangeOrder.status"
      ],
      "useRules": [
        "managerActionableChangeOrder"
      ],
      "transitionRefs": [],
      "story": [
        "Submeter a alteração para tratamento",
        "O gerente recebe a ordem para recusá-la ou encaminhá-la ao cliente para aprovação."
      ],
      "useCaseId": "handoffChangeOrderToProjectManager"
    },
    {
      "operationId": "locateChangeOrder",
      "title": "Localizar a ordem de mudança submetida",
      "kind": "query",
      "entityRef": "ChangeOrder",
      "entityRefs": [
        "ChangeOrder"
      ],
      "accessPattern": {
        "kind": "list",
        "pagination": "optional"
      },
      "inputs": [],
      "outputRefs": [
        "ChangeOrder.changeOrderId",
        "ChangeOrder.clientRef",
        "ChangeOrder.projectRef",
        "ChangeOrder.description",
        "ChangeOrder.scopeImpact",
        "ChangeOrder.scheduleImpact",
        "ChangeOrder.changeAmount",
        "ChangeOrder.submittedAt",
        "ChangeOrder.forwardedForClientApprovalAt",
        "ChangeOrder.status"
      ],
      "useRules": [],
      "transitionRefs": [],
      "story": [
        "Localizar a ordem de mudança submetida",
        "Uma ordem pendente de tratamento está selecionada."
      ],
      "useCaseId": "locateChangeOrder"
    },
    {
      "operationId": "handoffChangeOrderToClient",
      "title": "Solicitar aprovação do cliente",
      "kind": "command",
      "entityRef": "ChangeOrder",
      "entityRefs": [
        "ChangeOrder"
      ],
      "accessPattern": {
        "kind": "commandInput"
      },
      "inputs": [
        {
          "inputId": "changeOrderChangeOrderId",
          "fieldRef": {
            "entityId": "ChangeOrder",
            "fieldId": "changeOrderId"
          },
          "source": "selectedEntity",
          "required": true,
          "description": "Ordem de mudança"
        },
        {
          "inputId": "description",
          "fieldRef": {
            "entityId": "ChangeOrder",
            "fieldId": "description"
          },
          "source": "userInput",
          "required": true,
          "description": "Descrição da alteração proposta na obra para avaliação gerencial e comunicação ao cliente."
        },
        {
          "inputId": "scopeImpact",
          "fieldRef": {
            "entityId": "ChangeOrder",
            "fieldId": "scopeImpact"
          },
          "source": "userInput",
          "required": true,
          "description": "Impacto proposto da alteração no escopo da obra."
        },
        {
          "inputId": "scheduleImpact",
          "fieldRef": {
            "entityId": "ChangeOrder",
            "fieldId": "scheduleImpact"
          },
          "source": "userInput",
          "required": true,
          "description": "Impacto proposto da alteração no prazo de execução da obra."
        },
        {
          "inputId": "changeAmount",
          "fieldRef": {
            "entityId": "ChangeOrder",
            "fieldId": "changeAmount"
          },
          "source": "userInput",
          "required": true,
          "description": "Valor comercial da alteração proposto para aprovação do cliente, custeio e faturamento."
        }
      ],
      "outputRefs": [
        "ChangeOrder.changeOrderId",
        "ChangeOrder.clientRef",
        "ChangeOrder.projectRef",
        "ChangeOrder.description",
        "ChangeOrder.scopeImpact",
        "ChangeOrder.scheduleImpact",
        "ChangeOrder.changeAmount",
        "ChangeOrder.submittedAt",
        "ChangeOrder.forwardedForClientApprovalAt",
        "ChangeOrder.status"
      ],
      "useRules": [
        "managerActionableChangeOrder"
      ],
      "transitionRefs": [
        "handoffChangeOrderToClient"
      ],
      "story": [
        "Solicitar aprovação do cliente",
        "O cliente recebe a ordem de mudança para decidir sua aprovação."
      ],
      "useCaseId": "handoffChangeOrderToClient"
    },
    {
      "operationId": "approveChangeOrderDecision",
      "title": "Aprovar a ordem de mudança",
      "kind": "command",
      "entityRef": "ChangeOrder",
      "entityRefs": [
        "ChangeOrder",
        "ChangeOrderDecision"
      ],
      "accessPattern": {
        "kind": "transition"
      },
      "inputs": [
        {
          "inputId": "changeOrderChangeOrderId",
          "fieldRef": {
            "entityId": "ChangeOrder",
            "fieldId": "changeOrderId"
          },
          "source": "selectedEntity",
          "required": true,
          "description": "Ordem de mudança"
        },
        {
          "inputId": "clientClientId",
          "fieldRef": {
            "entityId": "Client",
            "fieldId": "clientId"
          },
          "source": "selectedEntity",
          "required": true,
          "description": "Cliente"
        },
        {
          "inputId": "projectProjectId",
          "fieldRef": {
            "entityId": "Project",
            "fieldId": "projectId"
          },
          "source": "routeParam",
          "required": true,
          "description": "Obra"
        },
        {
          "inputId": "status",
          "fieldRef": {
            "entityId": "ChangeOrder",
            "fieldId": "status"
          },
          "source": "userInput",
          "required": true,
          "description": "Decisão tomada.",
          "enumValues": [
            "approved"
          ]
        }
      ],
      "outputRefs": [
        "ChangeOrder.changeOrderId",
        "ChangeOrder.clientRef",
        "ChangeOrder.projectRef",
        "ChangeOrder.description",
        "ChangeOrder.scopeImpact",
        "ChangeOrder.scheduleImpact",
        "ChangeOrder.changeAmount",
        "ChangeOrder.submittedAt",
        "ChangeOrder.forwardedForClientApprovalAt",
        "ChangeOrder.status"
      ],
      "useRules": [
        "clientApprovableChangeOrder"
      ],
      "transitionRefs": [
        "approveChangeOrder"
      ],
      "story": [
        "Aprovar a ordem de mudança",
        "A ordem fica registrada como aprovada pelo cliente."
      ],
      "useCaseId": "approveChangeOrderDecision"
    },
    {
      "operationId": "handoffApprovedChangeOrderToBilling",
      "title": "Encaminhar a alteração aprovada ao faturamento",
      "kind": "command",
      "entityRef": "ChangeOrder",
      "entityRefs": [
        "ChangeOrder"
      ],
      "accessPattern": {
        "kind": "commandInput"
      },
      "inputs": [
        {
          "inputId": "changeOrderChangeOrderId",
          "fieldRef": {
            "entityId": "ChangeOrder",
            "fieldId": "changeOrderId"
          },
          "source": "selectedEntity",
          "required": true,
          "description": "Ordem de mudança"
        },
        {
          "inputId": "description",
          "fieldRef": {
            "entityId": "ChangeOrder",
            "fieldId": "description"
          },
          "source": "userInput",
          "required": true,
          "description": "Descrição da alteração proposta na obra para avaliação gerencial e comunicação ao cliente."
        },
        {
          "inputId": "scopeImpact",
          "fieldRef": {
            "entityId": "ChangeOrder",
            "fieldId": "scopeImpact"
          },
          "source": "userInput",
          "required": true,
          "description": "Impacto proposto da alteração no escopo da obra."
        },
        {
          "inputId": "scheduleImpact",
          "fieldRef": {
            "entityId": "ChangeOrder",
            "fieldId": "scheduleImpact"
          },
          "source": "userInput",
          "required": true,
          "description": "Impacto proposto da alteração no prazo de execução da obra."
        },
        {
          "inputId": "changeAmount",
          "fieldRef": {
            "entityId": "ChangeOrder",
            "fieldId": "changeAmount"
          },
          "source": "userInput",
          "required": true,
          "description": "Valor comercial da alteração proposto para aprovação do cliente, custeio e faturamento."
        }
      ],
      "outputRefs": [
        "ChangeOrder.changeOrderId",
        "ChangeOrder.clientRef",
        "ChangeOrder.projectRef",
        "ChangeOrder.description",
        "ChangeOrder.scopeImpact",
        "ChangeOrder.scheduleImpact",
        "ChangeOrder.changeAmount",
        "ChangeOrder.submittedAt",
        "ChangeOrder.forwardedForClientApprovalAt",
        "ChangeOrder.status"
      ],
      "useRules": [
        "approvedBillableChangeOrder"
      ],
      "transitionRefs": [],
      "story": [
        "Encaminhar a alteração aprovada ao faturamento",
        "A equipe de faturamento recebe a ordem aprovada."
      ],
      "useCaseId": "handoffApprovedChangeOrderToBilling"
    },
    {
      "operationId": "declineChangeOrderDecision",
      "title": "Recusar a ordem de mudança",
      "kind": "command",
      "entityRef": "ChangeOrder",
      "entityRefs": [
        "ChangeOrder",
        "ChangeOrderDecision"
      ],
      "accessPattern": {
        "kind": "transition"
      },
      "inputs": [
        {
          "inputId": "changeOrderChangeOrderId",
          "fieldRef": {
            "entityId": "ChangeOrder",
            "fieldId": "changeOrderId"
          },
          "source": "selectedEntity",
          "required": true,
          "description": "Ordem de mudança"
        },
        {
          "inputId": "clientClientId",
          "fieldRef": {
            "entityId": "Client",
            "fieldId": "clientId"
          },
          "source": "selectedEntity",
          "required": true,
          "description": "Cliente"
        },
        {
          "inputId": "projectProjectId",
          "fieldRef": {
            "entityId": "Project",
            "fieldId": "projectId"
          },
          "source": "routeParam",
          "required": true,
          "description": "Obra"
        },
        {
          "inputId": "status",
          "fieldRef": {
            "entityId": "ChangeOrder",
            "fieldId": "status"
          },
          "source": "userInput",
          "required": true,
          "description": "Decisão tomada.",
          "enumValues": [
            "declined"
          ]
        }
      ],
      "outputRefs": [
        "ChangeOrder.changeOrderId",
        "ChangeOrder.clientRef",
        "ChangeOrder.projectRef",
        "ChangeOrder.description",
        "ChangeOrder.scopeImpact",
        "ChangeOrder.scheduleImpact",
        "ChangeOrder.changeAmount",
        "ChangeOrder.submittedAt",
        "ChangeOrder.forwardedForClientApprovalAt",
        "ChangeOrder.status"
      ],
      "useRules": [
        "managerActionableChangeOrder"
      ],
      "transitionRefs": [
        "declineChangeOrder"
      ],
      "story": [
        "Recusar a ordem de mudança",
        "A ordem fica registrada como recusada pelo gerente."
      ],
      "useCaseId": "declineChangeOrderDecision"
    },
    {
      "operationId": "handoffDeclinedChangeOrderToFieldCoordinator",
      "title": "Devolver a decisão ao campo",
      "kind": "command",
      "entityRef": "ChangeOrder",
      "entityRefs": [
        "ChangeOrder"
      ],
      "accessPattern": {
        "kind": "commandInput"
      },
      "inputs": [
        {
          "inputId": "changeOrderChangeOrderId",
          "fieldRef": {
            "entityId": "ChangeOrder",
            "fieldId": "changeOrderId"
          },
          "source": "selectedEntity",
          "required": true,
          "description": "Ordem de mudança"
        },
        {
          "inputId": "description",
          "fieldRef": {
            "entityId": "ChangeOrder",
            "fieldId": "description"
          },
          "source": "userInput",
          "required": true,
          "description": "Descrição da alteração proposta na obra para avaliação gerencial e comunicação ao cliente."
        },
        {
          "inputId": "scopeImpact",
          "fieldRef": {
            "entityId": "ChangeOrder",
            "fieldId": "scopeImpact"
          },
          "source": "userInput",
          "required": true,
          "description": "Impacto proposto da alteração no escopo da obra."
        },
        {
          "inputId": "scheduleImpact",
          "fieldRef": {
            "entityId": "ChangeOrder",
            "fieldId": "scheduleImpact"
          },
          "source": "userInput",
          "required": true,
          "description": "Impacto proposto da alteração no prazo de execução da obra."
        },
        {
          "inputId": "changeAmount",
          "fieldRef": {
            "entityId": "ChangeOrder",
            "fieldId": "changeAmount"
          },
          "source": "userInput",
          "required": true,
          "description": "Valor comercial da alteração proposto para aprovação do cliente, custeio e faturamento."
        }
      ],
      "outputRefs": [
        "ChangeOrder.changeOrderId",
        "ChangeOrder.clientRef",
        "ChangeOrder.projectRef",
        "ChangeOrder.description",
        "ChangeOrder.scopeImpact",
        "ChangeOrder.scheduleImpact",
        "ChangeOrder.changeAmount",
        "ChangeOrder.submittedAt",
        "ChangeOrder.forwardedForClientApprovalAt",
        "ChangeOrder.status"
      ],
      "useRules": [],
      "transitionRefs": [],
      "story": [
        "Devolver a decisão ao campo",
        "O coordenador recebe a ordem recusada para tratar o resultado."
      ],
      "useCaseId": "handoffDeclinedChangeOrderToFieldCoordinator"
    },
    {
      "operationId": "inspectClientBillingSummary",
      "title": "Consultar o resumo de faturamento",
      "kind": "query",
      "entityRef": "ClientBillingSummary",
      "entityRefs": [
        "ChangeOrder",
        "Client",
        "ClientBillingSummary",
        "Invoice",
        "Project"
      ],
      "accessPattern": {
        "kind": "getById"
      },
      "inputs": [
        {
          "inputId": "clientBillingSummaryClientId",
          "fieldRef": {
            "entityId": "ClientBillingSummary",
            "fieldId": "clientId"
          },
          "source": "selectedEntity",
          "required": true,
          "description": "Resumo de faturamento do cliente"
        }
      ],
      "outputRefs": [
        "ClientBillingSummary.clientId",
        "ClientBillingSummary.projectId",
        "ClientBillingSummary.approvedChangeOrderReferences",
        "ClientBillingSummary.invoiceReferences",
        "ClientBillingSummary.approvedChangeOrderAmount",
        "ClientBillingSummary.billableAmount",
        "ClientBillingSummary.invoicedAmount",
        "ClientBillingSummary.clientAvailableAmount"
      ],
      "useRules": [
        "invoiceIncludesApprovedChangeOrdersOnly"
      ],
      "transitionRefs": [],
      "story": [
        "Consultar o reflexo no faturamento",
        "O resumo apresenta alterações aprovadas, faturas e valores."
      ],
      "useCaseId": "inspectClientBillingSummary"
    },
    {
      "operationId": "handoffInvoiceToClient",
      "title": "Disponibilizar a fatura ao cliente",
      "kind": "command",
      "entityRef": "Invoice",
      "entityRefs": [
        "Invoice"
      ],
      "accessPattern": {
        "kind": "commandInput"
      },
      "inputs": [
        {
          "inputId": "invoiceInvoiceId",
          "fieldRef": {
            "entityId": "Invoice",
            "fieldId": "invoiceId"
          },
          "source": "selectedEntity",
          "required": true,
          "description": "Fatura"
        },
        {
          "inputId": "commercialReference",
          "fieldRef": {
            "entityId": "Invoice",
            "fieldId": "commercialReference"
          },
          "source": "userInput",
          "required": true,
          "description": "Referência comercial que identifica a fatura para faturamento e consulta do cliente."
        },
        {
          "inputId": "amount",
          "fieldRef": {
            "entityId": "Invoice",
            "fieldId": "amount"
          },
          "source": "userInput",
          "required": true,
          "description": "Valor comercial total faturado para a obra."
        }
      ],
      "outputRefs": [
        "Invoice.invoiceId",
        "Invoice.clientId",
        "Invoice.projectId",
        "Invoice.commercialReference",
        "Invoice.amount",
        "Invoice.status"
      ],
      "useRules": [
        "clientVisibleInvoice"
      ],
      "transitionRefs": [
        "makeInvoiceAvailableToClient"
      ],
      "story": [
        "Disponibilizar a fatura ao cliente",
        "O cliente recebe a fatura para consulta."
      ],
      "useCaseId": "handoffInvoiceToClient"
    },
    {
      "operationId": "inspectScheduleRiskAssessment",
      "title": "Consultar tarefas em risco de atraso",
      "kind": "query",
      "entityRef": "ScheduleRiskAssessment",
      "entityRefs": [
        "ScheduleRiskAssessment",
        "WorkTask"
      ],
      "accessPattern": {
        "kind": "getById"
      },
      "inputs": [
        {
          "inputId": "scheduleRiskAssessmentProjectId",
          "fieldRef": {
            "entityId": "ScheduleRiskAssessment",
            "fieldId": "projectId"
          },
          "source": "selectedEntity",
          "required": true,
          "description": "Avaliação de risco de atraso"
        }
      ],
      "outputRefs": [
        "ScheduleRiskAssessment.projectId",
        "ScheduleRiskAssessment.workTaskId",
        "ScheduleRiskAssessment.taskStatus",
        "ScheduleRiskAssessment.dueDate",
        "ScheduleRiskAssessment.progressPercent",
        "ScheduleRiskAssessment.riskIndicators",
        "ScheduleRiskAssessment.riskExplanation",
        "ScheduleRiskAssessment.assessedAt"
      ],
      "useRules": [
        "unfinishedWorkTask"
      ],
      "transitionRefs": [],
      "story": [
        "Consultar tarefas em risco de atraso",
        "Tarefas em risco e seus indicadores estão identificados."
      ],
      "useCaseId": "inspectScheduleRiskAssessment"
    },
    {
      "operationId": "publishStatusReport",
      "title": "Publicar o relatório de status",
      "kind": "command",
      "entityRef": "StatusReport",
      "entityRefs": [
        "Project",
        "ProjectExecutionOverview",
        "StatusReport"
      ],
      "accessPattern": {
        "kind": "transition"
      },
      "inputs": [
        {
          "inputId": "projectProjectId",
          "fieldRef": {
            "entityId": "Project",
            "fieldId": "projectId"
          },
          "source": "routeParam",
          "required": true,
          "description": "Obra"
        },
        {
          "inputId": "projectExecutionOverviewProjectId",
          "fieldRef": {
            "entityId": "ProjectExecutionOverview",
            "fieldId": "projectId"
          },
          "source": "selectedEntity",
          "required": true,
          "description": "Visão consolidada de execução da obra"
        },
        {
          "inputId": "statusReportStatusReportId",
          "fieldRef": {
            "entityId": "StatusReport",
            "fieldId": "statusReportId"
          },
          "source": "selectedEntity",
          "required": true,
          "description": "Relatório de status"
        },
        {
          "inputId": "status",
          "fieldRef": {
            "entityId": "StatusReport",
            "fieldId": "status"
          },
          "source": "userInput",
          "required": true,
          "description": "Decisão tomada.",
          "enumValues": [
            "published"
          ]
        }
      ],
      "outputRefs": [
        "StatusReport.statusReportId",
        "StatusReport.projectId",
        "StatusReport.status",
        "StatusReport.title",
        "StatusReport.content",
        "StatusReport.communicatedRisks",
        "StatusReport.generatedAt",
        "StatusReport.generatedByUserId",
        "StatusReport.publishedAt",
        "StatusReport.publishedByUserId",
        "StatusReport.withdrawnAt"
      ],
      "useRules": [
        "statusReportUsesProjectExecutionData"
      ],
      "transitionRefs": [
        "publishStatusReport"
      ],
      "story": [
        "Publicar o relatório de status",
        "O relatório fica aprovado para comunicação ao cliente."
      ],
      "useCaseId": "publishStatusReport"
    },
    {
      "operationId": "handoffStatusReportToClient",
      "title": "Encaminhar o relatório ao cliente",
      "kind": "command",
      "entityRef": "StatusReport",
      "entityRefs": [
        "StatusReport"
      ],
      "accessPattern": {
        "kind": "commandInput"
      },
      "inputs": [
        {
          "inputId": "statusReportStatusReportId",
          "fieldRef": {
            "entityId": "StatusReport",
            "fieldId": "statusReportId"
          },
          "source": "selectedEntity",
          "required": true,
          "description": "Relatório de status"
        },
        {
          "inputId": "title",
          "fieldRef": {
            "entityId": "StatusReport",
            "fieldId": "title"
          },
          "source": "userInput",
          "required": true,
          "description": "Título profissional que identifica a comunicação de status da obra."
        },
        {
          "inputId": "content",
          "fieldRef": {
            "entityId": "StatusReport",
            "fieldId": "content"
          },
          "source": "userInput",
          "required": true,
          "description": "Texto profissional gerado a partir da execução da obra e revisado pelo gerente antes da publicação."
        },
        {
          "inputId": "communicatedRisks",
          "fieldRef": {
            "entityId": "StatusReport",
            "fieldId": "communicatedRisks"
          },
          "source": "userInput",
          "required": false,
          "description": "Riscos de atraso e indicadores selecionados para comunicação ao cliente no relatório."
        },
        {
          "inputId": "generatedByUserId",
          "fieldRef": {
            "entityId": "StatusReport",
            "fieldId": "generatedByUserId"
          },
          "source": "userInput",
          "required": true,
          "description": "Identificador do gerente responsável por gerar o relatório para revisão."
        },
        {
          "inputId": "publishedByUserId",
          "fieldRef": {
            "entityId": "StatusReport",
            "fieldId": "publishedByUserId"
          },
          "source": "userInput",
          "required": false,
          "description": "Identificador do gerente responsável pela publicação observável do relatório."
        }
      ],
      "outputRefs": [
        "StatusReport.statusReportId",
        "StatusReport.projectId",
        "StatusReport.status",
        "StatusReport.title",
        "StatusReport.content",
        "StatusReport.communicatedRisks",
        "StatusReport.generatedAt",
        "StatusReport.generatedByUserId",
        "StatusReport.publishedAt",
        "StatusReport.publishedByUserId",
        "StatusReport.withdrawnAt"
      ],
      "useRules": [
        "clientVisibleStatusReport"
      ],
      "transitionRefs": [],
      "story": [
        "Encaminhar o relatório ao cliente",
        "O cliente recebe o relatório publicado."
      ],
      "useCaseId": "handoffStatusReportToClient"
    },
    {
      "operationId": "inspectStatusReport",
      "title": "Consultar o relatório de status publicado",
      "kind": "query",
      "entityRef": "StatusReport",
      "entityRefs": [
        "ScheduleRiskAssessment",
        "StatusReport"
      ],
      "accessPattern": {
        "kind": "getById"
      },
      "inputs": [
        {
          "inputId": "statusReportStatusReportId",
          "fieldRef": {
            "entityId": "StatusReport",
            "fieldId": "statusReportId"
          },
          "source": "selectedEntity",
          "required": true,
          "description": "Relatório de status"
        }
      ],
      "outputRefs": [
        "StatusReport.statusReportId",
        "StatusReport.projectId",
        "StatusReport.status",
        "StatusReport.title",
        "StatusReport.content",
        "StatusReport.communicatedRisks",
        "StatusReport.generatedAt",
        "StatusReport.generatedByUserId",
        "StatusReport.publishedAt",
        "StatusReport.publishedByUserId",
        "StatusReport.withdrawnAt"
      ],
      "useRules": [
        "clientVisibleStatusReport"
      ],
      "transitionRefs": [],
      "story": [
        "Consultar o relatório de status publicado",
        "O relatório publicado, incluindo riscos comunicados, está visível."
      ],
      "useCaseId": "inspectStatusReport"
    },
    {
      "operationId": "inspectProjectTimeLogs",
      "title": "Consultar os registros diários de horas",
      "kind": "query",
      "entityRef": "TimeLog",
      "entityRefs": [
        "TimeLog"
      ],
      "accessPattern": {
        "kind": "getById"
      },
      "inputs": [
        {
          "inputId": "timeLogTimeLogId",
          "fieldRef": {
            "entityId": "TimeLog",
            "fieldId": "timeLogId"
          },
          "source": "selectedEntity",
          "required": true,
          "description": "Registro de horas"
        }
      ],
      "outputRefs": [
        "TimeLog.timeLogId",
        "TimeLog.status",
        "TimeLog.workTaskId",
        "TimeLog.fieldWorkerId",
        "TimeLog.workDate",
        "TimeLog.hoursWorked",
        "TimeLog.hourlyLaborCost"
      ],
      "useRules": [],
      "transitionRefs": [],
      "story": [
        "Consultar os registros diários de horas",
        "Registros de horas da obra estão visíveis."
      ],
      "useCaseId": "inspectProjectTimeLogs"
    },
    {
      "operationId": "inspectProjectMaterialUsages",
      "title": "Consultar os consumos de materiais",
      "kind": "query",
      "entityRef": "MaterialUsage",
      "entityRefs": [
        "MaterialUsage",
        "Project"
      ],
      "accessPattern": {
        "kind": "getById"
      },
      "inputs": [
        {
          "inputId": "materialUsageMaterialUsageId",
          "fieldRef": {
            "entityId": "MaterialUsage",
            "fieldId": "materialUsageId"
          },
          "source": "selectedEntity",
          "required": true,
          "description": "Consumo de material"
        }
      ],
      "outputRefs": [
        "MaterialUsage.materialUsageId",
        "MaterialUsage.status",
        "MaterialUsage.projectId",
        "MaterialUsage.inventoryItemId",
        "MaterialUsage.inventoryBalanceId",
        "MaterialUsage.quantity",
        "MaterialUsage.usageDescription",
        "MaterialUsage.consumedOn",
        "MaterialUsage.unitCostBasis"
      ],
      "useRules": [],
      "transitionRefs": [],
      "story": [
        "Consultar os consumos de materiais",
        "Consumos associados à obra estão visíveis."
      ],
      "useCaseId": "inspectProjectMaterialUsages"
    },
    {
      "operationId": "inspectApprovedChangeOrders",
      "title": "Consultar as alterações aprovadas",
      "kind": "query",
      "entityRef": "ChangeOrder",
      "entityRefs": [
        "ChangeOrder"
      ],
      "accessPattern": {
        "kind": "getById"
      },
      "inputs": [
        {
          "inputId": "changeOrderChangeOrderId",
          "fieldRef": {
            "entityId": "ChangeOrder",
            "fieldId": "changeOrderId"
          },
          "source": "selectedEntity",
          "required": true,
          "description": "Ordem de mudança"
        }
      ],
      "outputRefs": [
        "ChangeOrder.changeOrderId",
        "ChangeOrder.clientRef",
        "ChangeOrder.projectRef",
        "ChangeOrder.description",
        "ChangeOrder.scopeImpact",
        "ChangeOrder.scheduleImpact",
        "ChangeOrder.changeAmount",
        "ChangeOrder.submittedAt",
        "ChangeOrder.forwardedForClientApprovalAt",
        "ChangeOrder.status"
      ],
      "useRules": [
        "clientVisibleApprovedChangeOrder"
      ],
      "transitionRefs": [],
      "story": [
        "Consultar as alterações aprovadas",
        "Ordens aprovadas da obra, descrições e valores estão visíveis."
      ],
      "useCaseId": "inspectApprovedChangeOrders"
    }
  ],
  "menu": [
    {
      "workspaceId": "changeOrderCatalogue",
      "label": "Ordem de mudança",
      "featureRef": "",
      "tier": "recordCatalogue",
      "profileRefs": [
        "client",
        "fieldCoordinator",
        "projectManager"
      ]
    },
    {
      "workspaceId": "changeOrderDecisionCatalogue",
      "label": "Decisão sobre ordem de mudança",
      "featureRef": "",
      "tier": "recordCatalogue",
      "profileRefs": [
        "billingStaff",
        "fieldCoordinator",
        "fieldWorker",
        "projectManager"
      ]
    },
    {
      "workspaceId": "clientBillingSummaryView",
      "label": "Resumo de faturamento do cliente",
      "featureRef": "",
      "tier": "projection",
      "profileRefs": [
        "billingStaff"
      ]
    },
    {
      "workspaceId": "clientCatalogue",
      "label": "Cliente",
      "featureRef": "",
      "tier": "recordCatalogue",
      "profileRefs": [
        "billingStaff",
        "fieldCoordinator"
      ]
    },
    {
      "workspaceId": "clientPortalAccessCatalogue",
      "label": "Vínculo de acesso do cliente",
      "featureRef": "",
      "tier": "recordCatalogue",
      "profileRefs": [
        "billingStaff",
        "fieldCoordinator",
        "fieldWorker",
        "projectManager"
      ]
    },
    {
      "workspaceId": "inventoryBalanceCatalogue",
      "label": "Saldo de estoque",
      "featureRef": "",
      "tier": "recordCatalogue",
      "profileRefs": [
        "billingStaff",
        "fieldCoordinator",
        "fieldWorker",
        "projectManager"
      ]
    },
    {
      "workspaceId": "inventoryItemCatalogue",
      "label": "Item de estoque",
      "featureRef": "",
      "tier": "recordCatalogue",
      "profileRefs": [
        "fieldWorker"
      ]
    },
    {
      "workspaceId": "invoiceCatalogue",
      "label": "Fatura",
      "featureRef": "",
      "tier": "recordCatalogue",
      "profileRefs": [
        "billingStaff"
      ]
    },
    {
      "workspaceId": "invoiceChangeOrderCatalogue",
      "label": "Aplicação de ordem de mudança na fatura",
      "featureRef": "",
      "tier": "recordCatalogue",
      "profileRefs": [
        "billingStaff",
        "fieldCoordinator",
        "fieldWorker",
        "projectManager"
      ]
    },
    {
      "workspaceId": "materialUsageCatalogue",
      "label": "Consumo de material",
      "featureRef": "",
      "tier": "recordCatalogue",
      "profileRefs": [
        "fieldCoordinator",
        "fieldWorker"
      ]
    },
    {
      "workspaceId": "projectCatalogue",
      "label": "Obra",
      "featureRef": "",
      "tier": "recordCatalogue",
      "profileRefs": [
        "billingStaff",
        "client",
        "fieldCoordinator",
        "fieldWorker",
        "projectManager"
      ]
    },
    {
      "workspaceId": "projectCoordinationAssignmentCatalogue",
      "label": "Atribuição de coordenação da obra",
      "featureRef": "",
      "tier": "recordCatalogue",
      "profileRefs": [
        "billingStaff",
        "fieldCoordinator",
        "fieldWorker",
        "projectManager"
      ]
    },
    {
      "workspaceId": "projectDashboardView",
      "label": "Painel de portfólio de obras",
      "featureRef": "",
      "tier": "projection",
      "profileRefs": [
        "projectManager"
      ]
    },
    {
      "workspaceId": "projectExecutionOverviewView",
      "label": "Visão consolidada de execução da obra",
      "featureRef": "",
      "tier": "projection",
      "profileRefs": [
        "projectManager"
      ]
    },
    {
      "workspaceId": "projectHub",
      "label": "Obra",
      "featureRef": "",
      "tier": "hub",
      "profileRefs": [
        "billingStaff",
        "client",
        "fieldCoordinator",
        "fieldWorker",
        "projectManager"
      ]
    },
    {
      "workspaceId": "projectTimelineView",
      "label": "Cronograma da obra",
      "featureRef": "",
      "tier": "projection",
      "profileRefs": [
        "fieldCoordinator"
      ]
    },
    {
      "workspaceId": "scheduleRiskAssessmentView",
      "label": "Avaliação de risco de atraso",
      "featureRef": "",
      "tier": "projection",
      "profileRefs": [
        "projectManager"
      ]
    },
    {
      "workspaceId": "statusReportCatalogue",
      "label": "Relatório de status",
      "featureRef": "",
      "tier": "recordCatalogue",
      "profileRefs": [
        "client",
        "projectManager"
      ]
    },
    {
      "workspaceId": "timeLogCatalogue",
      "label": "Registro de horas",
      "featureRef": "",
      "tier": "recordCatalogue",
      "profileRefs": [
        "fieldCoordinator",
        "fieldWorker"
      ]
    },
    {
      "workspaceId": "workTaskCatalogue",
      "label": "Tarefa de trabalho",
      "featureRef": "",
      "tier": "recordCatalogue",
      "profileRefs": [
        "fieldCoordinator",
        "fieldWorker"
      ]
    }
  ],
  "landings": [
    {
      "profileRef": "projectManager",
      "workspaceId": "projectHub"
    },
    {
      "profileRef": "fieldCoordinator",
      "workspaceId": "projectHub"
    },
    {
      "profileRef": "fieldWorker",
      "workspaceId": "projectHub"
    },
    {
      "profileRef": "billingStaff",
      "workspaceId": "projectHub"
    },
    {
      "profileRef": "client",
      "workspaceId": "projectHub"
    }
  ],
  "systemDecisions": [
    {
      "decisionId": "catalogueAudienceChangeOrderDecision",
      "stage": "e8-workspaces",
      "question": "Nenhuma jornada opera Decisão sobre ordem de mudança: quem mantém esse cadastro?",
      "chosen": "internalProfiles",
      "alternatives": [
        "internalProfiles",
        "restrictToNamedProfile"
      ],
      "decidedBy": "system",
      "findingRef": "NS4_E8_CATALOGUE_AUDIENCE:changeOrderDecisionCatalogue",
      "changeHint": "Adicione no E3 uma autoridade sobre Decisão sobre ordem de mudança para restringir esse cadastro a um perfil específico."
    },
    {
      "decisionId": "catalogueAudienceClientPortalAccess",
      "stage": "e8-workspaces",
      "question": "Nenhuma jornada opera Vínculo de acesso do cliente: quem mantém esse cadastro?",
      "chosen": "internalProfiles",
      "alternatives": [
        "internalProfiles",
        "restrictToNamedProfile"
      ],
      "decidedBy": "system",
      "findingRef": "NS4_E8_CATALOGUE_AUDIENCE:clientPortalAccessCatalogue",
      "changeHint": "Adicione no E3 uma autoridade sobre Vínculo de acesso do cliente para restringir esse cadastro a um perfil específico."
    },
    {
      "decisionId": "catalogueAudienceInventoryBalance",
      "stage": "e8-workspaces",
      "question": "Nenhuma jornada opera Saldo de estoque: quem mantém esse cadastro?",
      "chosen": "internalProfiles",
      "alternatives": [
        "internalProfiles",
        "restrictToNamedProfile"
      ],
      "decidedBy": "system",
      "findingRef": "NS4_E8_CATALOGUE_AUDIENCE:inventoryBalanceCatalogue",
      "changeHint": "Adicione no E3 uma autoridade sobre Saldo de estoque para restringir esse cadastro a um perfil específico."
    },
    {
      "decisionId": "catalogueAudienceInvoiceChangeOrder",
      "stage": "e8-workspaces",
      "question": "Nenhuma jornada opera Aplicação de ordem de mudança na fatura: quem mantém esse cadastro?",
      "chosen": "internalProfiles",
      "alternatives": [
        "internalProfiles",
        "restrictToNamedProfile"
      ],
      "decidedBy": "system",
      "findingRef": "NS4_E8_CATALOGUE_AUDIENCE:invoiceChangeOrderCatalogue",
      "changeHint": "Adicione no E3 uma autoridade sobre Aplicação de ordem de mudança na fatura para restringir esse cadastro a um perfil específico."
    },
    {
      "decisionId": "catalogueAudienceProjectCoordinationAssignment",
      "stage": "e8-workspaces",
      "question": "Nenhuma jornada opera Atribuição de coordenação da obra: quem mantém esse cadastro?",
      "chosen": "internalProfiles",
      "alternatives": [
        "internalProfiles",
        "restrictToNamedProfile"
      ],
      "decidedBy": "system",
      "findingRef": "NS4_E8_CATALOGUE_AUDIENCE:projectCoordinationAssignmentCatalogue",
      "changeHint": "Adicione no E3 uma autoridade sobre Atribuição de coordenação da obra para restringir esse cadastro a um perfil específico."
    },
    {
      "decisionId": "hubCompositionProjectHub",
      "stage": "e8-workspaces",
      "question": "A composição proposta para o painel de Obra não respeitou o catálogo; usar a ordem padrão?",
      "chosen": "keepDerivedComposition",
      "alternatives": [
        "keepDerivedComposition",
        "reviewDashboardComposition"
      ],
      "decidedBy": "system",
      "findingRef": "NS4_E8_HUB_COMPOSITION:projectHub",
      "changeHint": "Revisar a ordem e os destaques do painel de Obra no próximo round."
    }
  ]
} as const;

export default buildFlowFsmWorkspaceModel;
