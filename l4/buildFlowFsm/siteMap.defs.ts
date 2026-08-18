/// <mls fileReference="_102046_/l4/buildFlowFsm/siteMap.defs.ts" enhancement="_blank"/>

export const buildFlowFsmSiteMap = {
  "moduleName": "buildFlowFsm",
  "note": "Site map (permanent page index) — workspaces, landings and advisory edges. Detail (sections/organisms/bffCalls) lives per-workspace under workspaces/.",
  "workspaces": [
    {
      "workspaceId": "approveChangeOrder",
      "title": "Aprovar ordem de mudança",
      "actors": [
        "client"
      ],
      "kind": "workflow",
      "entity": "ChangeOrder",
      "operationIds": [
        "approveChangeOrderDecision",
        "handoffApprovedChangeOrderToBilling",
        "listClient",
        "locateChangeOrder"
      ],
      "purpose": "Decidir favoravelmente uma ordem de mudança recebida e encaminhá-la ao faturamento."
    },
    {
      "workspaceId": "assignWorkTask",
      "title": "Planejar e atribuir tarefa de campo",
      "actors": [
        "fieldCoordinator"
      ],
      "kind": "operation",
      "entity": "WorkTask",
      "operationIds": [
        "createWorkTask",
        "handoffWorkTaskToFieldWorker",
        "inspectProjectTimeline",
        "locateFieldWorker",
        "locateProject"
      ],
      "purpose": "Criar uma tarefa vinculada à obra e encaminhá-la ao trabalhador responsável."
    },
    {
      "workspaceId": "changeOrderCatalogue",
      "title": "Ordem de mudança",
      "actors": [
        "client",
        "fieldCoordinator",
        "projectManager"
      ],
      "kind": "operation",
      "entity": "ChangeOrder",
      "operationIds": [
        "createChangeOrder",
        "deleteChangeOrder",
        "listChangeOrder",
        "listClient",
        "listProject",
        "updateChangeOrder"
      ],
      "purpose": "Cadastro de Ordem de mudança."
    },
    {
      "workspaceId": "changeOrderDecisionCatalogue",
      "title": "Decisão sobre ordem de mudança",
      "actors": [
        "billingStaff",
        "fieldCoordinator",
        "fieldWorker",
        "projectManager"
      ],
      "kind": "operation",
      "entity": "ChangeOrderDecision",
      "operationIds": [
        "createChangeOrderDecision",
        "deleteChangeOrderDecision",
        "listChangeOrder",
        "listChangeOrderDecision",
        "updateChangeOrderDecision"
      ],
      "purpose": "Cadastro de Decisão sobre ordem de mudança."
    },
    {
      "workspaceId": "clientBillingSummaryView",
      "title": "Resumo de faturamento do cliente",
      "actors": [
        "billingStaff"
      ],
      "kind": "landing",
      "entity": "ClientBillingSummary",
      "operationIds": [
        "inspectClientBillingSummary"
      ],
      "purpose": "Projeção comercial por cliente e obra que consolida alterações aprovadas, valores faturáveis, faturas emitidas e valores disponibilizados ao cliente."
    },
    {
      "workspaceId": "clientCatalogue",
      "title": "Cliente",
      "actors": [
        "billingStaff",
        "fieldCoordinator"
      ],
      "kind": "operation",
      "entity": "Client",
      "operationIds": [
        "createClient",
        "deleteClient",
        "listClient",
        "updateClient"
      ],
      "purpose": "Cadastro de Cliente."
    },
    {
      "workspaceId": "clientPortalAccessCatalogue",
      "title": "Vínculo de acesso do cliente",
      "actors": [
        "billingStaff",
        "fieldCoordinator",
        "fieldWorker",
        "projectManager"
      ],
      "kind": "operation",
      "entity": "ClientPortalAccess",
      "operationIds": [
        "createClientPortalAccess",
        "deleteClientPortalAccess",
        "listClient",
        "listClientPortalAccess",
        "updateClientPortalAccess"
      ],
      "purpose": "Cadastro de Vínculo de acesso do cliente."
    },
    {
      "workspaceId": "consultApprovedProjectChangeOrders",
      "title": "Consultar alterações aprovadas da obra",
      "actors": [
        "client"
      ],
      "kind": "operation",
      "entity": "Project",
      "operationIds": [
        "inspectApprovedChangeOrders",
        "inspectClientBillingSummary",
        "locateProject"
      ],
      "purpose": "Consultar ordens aprovadas da própria obra e seus valores no faturamento."
    },
    {
      "workspaceId": "consultClientProjectUpdates",
      "title": "Consultar status e faturamento da obra",
      "actors": [
        "client"
      ],
      "kind": "operation",
      "entity": "Project",
      "operationIds": [
        "inspectClientBillingSummary",
        "inspectStatusReport",
        "locateProject"
      ],
      "purpose": "Acompanhar informações publicadas sobre a execução e os valores da própria obra."
    },
    {
      "workspaceId": "declineChangeOrder",
      "title": "Recusar ordem de mudança",
      "actors": [
        "projectManager"
      ],
      "kind": "workflow",
      "entity": "ChangeOrder",
      "operationIds": [
        "declineChangeOrderDecision",
        "handoffDeclinedChangeOrderToFieldCoordinator",
        "listClient",
        "locateChangeOrder"
      ],
      "purpose": "Decidir desfavoravelmente uma ordem submetida e devolver o resultado ao campo."
    },
    {
      "workspaceId": "forwardChangeOrderForClientApproval",
      "title": "Encaminhar ordem de mudança ao cliente",
      "actors": [
        "projectManager"
      ],
      "kind": "workflow",
      "entity": "ChangeOrder",
      "operationIds": [
        "handoffChangeOrderToClient",
        "locateChangeOrder"
      ],
      "purpose": "Enviar ao cliente uma ordem de mudança submetida para a decisão de aprovação."
    },
    {
      "workspaceId": "generateAndPublishProjectStatusReport",
      "title": "Gerar e publicar relatório de status",
      "actors": [
        "projectManager"
      ],
      "kind": "workflow",
      "entity": "StatusReport",
      "operationIds": [
        "createStatusReport",
        "handoffStatusReportToClient",
        "inspectProjectExecutionOverview",
        "inspectScheduleRiskAssessment",
        "locateProject",
        "publishStatusReport"
      ],
      "purpose": "Produzir comunicação profissional sobre a obra, incluindo riscos de atraso, e disponibilizá-la ao cliente."
    },
    {
      "workspaceId": "inventoryBalanceCatalogue",
      "title": "Saldo de estoque",
      "actors": [
        "billingStaff",
        "fieldCoordinator",
        "fieldWorker",
        "projectManager"
      ],
      "kind": "operation",
      "entity": "InventoryBalance",
      "operationIds": [
        "createInventoryBalance",
        "deleteInventoryBalance",
        "listInventoryBalance",
        "listInventoryItem",
        "updateInventoryBalance"
      ],
      "purpose": "Cadastro de Saldo de estoque."
    },
    {
      "workspaceId": "inventoryItemCatalogue",
      "title": "Item de estoque",
      "actors": [
        "fieldWorker"
      ],
      "kind": "operation",
      "entity": "InventoryItem",
      "operationIds": [
        "createInventoryItem",
        "deleteInventoryItem",
        "listInventoryItem",
        "updateInventoryItem"
      ],
      "purpose": "Cadastro de Item de estoque."
    },
    {
      "workspaceId": "invoiceCatalogue",
      "title": "Fatura",
      "actors": [
        "billingStaff"
      ],
      "kind": "operation",
      "entity": "Invoice",
      "operationIds": [
        "createInvoice",
        "deleteInvoice",
        "listClient",
        "listInvoice",
        "listProject",
        "updateInvoice"
      ],
      "purpose": "Cadastro de Fatura."
    },
    {
      "workspaceId": "invoiceChangeOrderCatalogue",
      "title": "Aplicação de ordem de mudança na fatura",
      "actors": [
        "billingStaff",
        "fieldCoordinator",
        "fieldWorker",
        "projectManager"
      ],
      "kind": "operation",
      "entity": "InvoiceChangeOrder",
      "operationIds": [
        "createInvoiceChangeOrder",
        "deleteInvoiceChangeOrder",
        "listChangeOrder",
        "listInvoice",
        "listInvoiceChangeOrder",
        "updateInvoiceChangeOrder"
      ],
      "purpose": "Cadastro de Aplicação de ordem de mudança na fatura."
    },
    {
      "workspaceId": "issueProjectInvoice",
      "title": "Emitir fatura da obra",
      "actors": [
        "billingStaff"
      ],
      "kind": "workflow",
      "entity": "Invoice",
      "operationIds": [
        "createInvoice",
        "handoffInvoiceToClient",
        "inspectClientBillingSummary",
        "locateClient",
        "locateProject"
      ],
      "purpose": "Emitir uma fatura para o cliente com base no resumo de faturamento da obra."
    },
    {
      "workspaceId": "materialUsageCatalogue",
      "title": "Consumo de material",
      "actors": [
        "fieldCoordinator",
        "fieldWorker"
      ],
      "kind": "operation",
      "entity": "MaterialUsage",
      "operationIds": [
        "createMaterialUsage",
        "deleteMaterialUsage",
        "listInventoryBalance",
        "listInventoryItem",
        "listMaterialUsage",
        "listProject",
        "updateMaterialUsage"
      ],
      "purpose": "Cadastro de Consumo de material."
    },
    {
      "workspaceId": "monitorDailyProjectRecords",
      "title": "Acompanhar registros diários da obra",
      "actors": [
        "fieldCoordinator"
      ],
      "kind": "operation",
      "entity": "Project",
      "operationIds": [
        "inspectProjectExecutionOverview",
        "inspectProjectMaterialUsages",
        "inspectProjectTimeLogs",
        "locateProject"
      ],
      "purpose": "Consultar horas e materiais recebidos para acompanhar execução e cronograma."
    },
    {
      "workspaceId": "projectCatalogue",
      "title": "Obra",
      "actors": [
        "billingStaff",
        "client",
        "fieldCoordinator",
        "fieldWorker",
        "projectManager"
      ],
      "kind": "operation",
      "entity": "Project",
      "operationIds": [
        "createProject",
        "deleteProject",
        "listClient",
        "listProject",
        "updateProject"
      ],
      "purpose": "Cadastro de Obra."
    },
    {
      "workspaceId": "projectCoordinationAssignmentCatalogue",
      "title": "Atribuição de coordenação da obra",
      "actors": [
        "billingStaff",
        "fieldCoordinator",
        "fieldWorker",
        "projectManager"
      ],
      "kind": "operation",
      "entity": "ProjectCoordinationAssignment",
      "operationIds": [
        "createProjectCoordinationAssignment",
        "deleteProjectCoordinationAssignment",
        "listProject",
        "listProjectCoordinationAssignment",
        "updateProjectCoordinationAssignment"
      ],
      "purpose": "Cadastro de Atribuição de coordenação da obra."
    },
    {
      "workspaceId": "projectDashboardView",
      "title": "Painel de portfólio de obras",
      "actors": [
        "projectManager"
      ],
      "kind": "landing",
      "entity": "ProjectDashboard",
      "operationIds": [
        "inspectProjectDashboard"
      ],
      "purpose": "Projeção organizacional que consolida obras ativas, orçamento versus realizado, atenção de custo e tarefas próximas para monitoramento gerencial."
    },
    {
      "workspaceId": "projectExecutionOverviewView",
      "title": "Visão consolidada de execução da obra",
      "actors": [
        "projectManager"
      ],
      "kind": "landing",
      "entity": "ProjectExecutionOverview",
      "operationIds": [
        "inspectProjectExecutionOverview"
      ],
      "purpose": "Projeção por obra que reúne andamento de tarefas, próximos compromissos, horas, materiais, custos realizados e impactos de alterações para acompanhamento e comunicação."
    },
    {
      "workspaceId": "projectHub",
      "title": "Obra",
      "actors": [
        "billingStaff",
        "client",
        "fieldCoordinator",
        "fieldWorker",
        "projectManager"
      ],
      "kind": "landing",
      "entity": "Project",
      "operationIds": [
        "inspectClientBillingSummary",
        "inspectProjectDashboard",
        "inspectProjectExecutionOverview",
        "inspectProjectTimeline",
        "inspectScheduleRiskAssessment",
        "listChangeOrder",
        "listInvoice",
        "listMaterialUsage",
        "listProject",
        "listProjectCoordinationAssignment",
        "listStatusReport",
        "listWorkTask"
      ],
      "purpose": "Painel de Obra."
    },
    {
      "workspaceId": "projectTimelineView",
      "title": "Cronograma da obra",
      "actors": [
        "fieldCoordinator"
      ],
      "kind": "landing",
      "entity": "ProjectTimeline",
      "operationIds": [
        "inspectProjectTimeline"
      ],
      "purpose": "Projeção do sequenciamento das tarefas e prazos de uma obra para planejamento, atribuição e acompanhamento de campo."
    },
    {
      "workspaceId": "recordProjectMaterialUsage",
      "title": "Registrar consumo de material da obra",
      "actors": [
        "fieldWorker"
      ],
      "kind": "operation",
      "entity": "MaterialUsage",
      "operationIds": [
        "createMaterialUsage",
        "handoffMaterialUsageToFieldCoordinator",
        "listInventoryBalance",
        "locateInventoryItem",
        "locateProject"
      ],
      "purpose": "Rastrear materiais consumidos em uma obra para apoiar execução e custeio."
    },
    {
      "workspaceId": "recordWorkTime",
      "title": "Registrar horas trabalhadas",
      "actors": [
        "fieldWorker"
      ],
      "kind": "operation",
      "entity": "TimeLog",
      "operationIds": [
        "createTimeLog",
        "handoffTimeLogToFieldCoordinator",
        "locateFieldWorker",
        "locateWorkTask"
      ],
      "purpose": "Registrar horas de execução para apoiar o custo realizado da obra."
    },
    {
      "workspaceId": "reviewProjectPortfolio",
      "title": "Monitorar portfólio e direcionar obra",
      "actors": [
        "projectManager"
      ],
      "kind": "operation",
      "entity": "ProjectDashboard",
      "operationIds": [
        "handoffProjectToFieldCoordinator",
        "inspectProjectDashboard",
        "inspectProjectExecutionOverview",
        "locateProject"
      ],
      "purpose": "Identificar obras ativas que exigem atenção de custo ou prazo e direcionar seu acompanhamento."
    },
    {
      "workspaceId": "scheduleRiskAssessmentView",
      "title": "Avaliação de risco de atraso",
      "actors": [
        "projectManager"
      ],
      "kind": "landing",
      "entity": "ScheduleRiskAssessment",
      "operationIds": [
        "inspectScheduleRiskAssessment"
      ],
      "purpose": "Projeção que identifica tarefas não concluídas com risco de atraso e os indicadores que explicam o risco para a obra e o relatório de status."
    },
    {
      "workspaceId": "statusReportCatalogue",
      "title": "Relatório de status",
      "actors": [
        "client",
        "projectManager"
      ],
      "kind": "operation",
      "entity": "StatusReport",
      "operationIds": [
        "createStatusReport",
        "deleteStatusReport",
        "listProject",
        "listStatusReport",
        "updateStatusReport"
      ],
      "purpose": "Cadastro de Relatório de status."
    },
    {
      "workspaceId": "submitChangeOrder",
      "title": "Registrar e submeter ordem de mudança",
      "actors": [
        "fieldCoordinator"
      ],
      "kind": "workflow",
      "entity": "ChangeOrder",
      "operationIds": [
        "createChangeOrder",
        "handoffChangeOrderToProjectManager",
        "locateClient",
        "locateProject"
      ],
      "purpose": "Formalizar uma alteração da obra para tratamento do gerente de projeto."
    },
    {
      "workspaceId": "timeLogCatalogue",
      "title": "Registro de horas",
      "actors": [
        "fieldCoordinator",
        "fieldWorker"
      ],
      "kind": "operation",
      "entity": "TimeLog",
      "operationIds": [
        "createTimeLog",
        "deleteTimeLog",
        "listTimeLog",
        "listWorkTask",
        "updateTimeLog"
      ],
      "purpose": "Cadastro de Registro de horas."
    },
    {
      "workspaceId": "updateWorkTaskProgress",
      "title": "Atualizar andamento da tarefa",
      "actors": [
        "fieldWorker"
      ],
      "kind": "operation",
      "entity": "WorkTask",
      "operationIds": [
        "handoffWorkTaskProgressToFieldCoordinator",
        "locateWorkTask",
        "updateWorkTask"
      ],
      "purpose": "Manter o status da tarefa alinhado à execução observada."
    },
    {
      "workspaceId": "workTaskCatalogue",
      "title": "Tarefa de trabalho",
      "actors": [
        "fieldCoordinator",
        "fieldWorker"
      ],
      "kind": "operation",
      "entity": "WorkTask",
      "operationIds": [
        "createWorkTask",
        "deleteWorkTask",
        "listWorkTask",
        "updateWorkTask"
      ],
      "purpose": "Cadastro de Tarefa de trabalho."
    }
  ],
  "landings": [
    {
      "actorId": "projectManager",
      "workspaceId": "projectHub",
      "reason": "Painel de Obra."
    },
    {
      "actorId": "fieldCoordinator",
      "workspaceId": "projectHub",
      "reason": "Painel de Obra."
    },
    {
      "actorId": "fieldWorker",
      "workspaceId": "projectHub",
      "reason": "Painel de Obra."
    },
    {
      "actorId": "billingStaff",
      "workspaceId": "projectHub",
      "reason": "Painel de Obra."
    },
    {
      "actorId": "client",
      "workspaceId": "projectHub",
      "reason": "Painel de Obra."
    }
  ],
  "navigationEdges": [
    {
      "from": "projectHub",
      "to": "assignWorkTask",
      "operationId": "",
      "description": "Planejar e atribuir tarefa de campo",
      "prominence": "primary",
      "order": 5
    },
    {
      "from": "projectHub",
      "to": "consultApprovedProjectChangeOrders",
      "operationId": "",
      "description": "Consultar alterações aprovadas da obra",
      "prominence": "primary",
      "order": 6
    },
    {
      "from": "projectHub",
      "to": "consultClientProjectUpdates",
      "operationId": "",
      "description": "Consultar status e faturamento da obra",
      "prominence": "contextual",
      "order": 7
    },
    {
      "from": "projectHub",
      "to": "generateAndPublishProjectStatusReport",
      "operationId": "",
      "description": "Gerar e publicar relatório de status",
      "prominence": "contextual",
      "order": 8
    },
    {
      "from": "projectHub",
      "to": "issueProjectInvoice",
      "operationId": "",
      "description": "Emitir fatura da obra",
      "prominence": "contextual",
      "order": 9
    },
    {
      "from": "projectHub",
      "to": "monitorDailyProjectRecords",
      "operationId": "",
      "description": "Acompanhar registros diários da obra",
      "prominence": "contextual",
      "order": 10
    },
    {
      "from": "projectHub",
      "to": "recordProjectMaterialUsage",
      "operationId": "",
      "description": "Registrar consumo de material da obra",
      "prominence": "contextual",
      "order": 11
    },
    {
      "from": "projectHub",
      "to": "reviewProjectPortfolio",
      "operationId": "",
      "description": "Monitorar portfólio e direcionar obra",
      "prominence": "contextual",
      "order": 12
    },
    {
      "from": "projectHub",
      "to": "submitChangeOrder",
      "operationId": "",
      "description": "Registrar e submeter ordem de mudança",
      "prominence": "contextual",
      "order": 13
    },
    {
      "from": "projectHub",
      "to": "submitChangeOrder",
      "operationId": "",
      "description": "Ordem de mudança",
      "prominence": "contextual",
      "order": 20
    },
    {
      "from": "projectHub",
      "to": "issueProjectInvoice",
      "operationId": "",
      "description": "Fatura",
      "prominence": "contextual",
      "order": 21
    },
    {
      "from": "projectHub",
      "to": "generateAndPublishProjectStatusReport",
      "operationId": "",
      "description": "Relatório de status",
      "prominence": "contextual",
      "order": 22
    },
    {
      "from": "projectHub",
      "to": "clientBillingSummaryView",
      "operationId": "",
      "description": "Resumo de faturamento do cliente"
    },
    {
      "from": "projectHub",
      "to": "projectDashboardView",
      "operationId": "",
      "description": "Painel de portfólio de obras"
    },
    {
      "from": "projectHub",
      "to": "projectExecutionOverviewView",
      "operationId": "",
      "description": "Visão consolidada de execução da obra"
    },
    {
      "from": "projectHub",
      "to": "projectTimelineView",
      "operationId": "",
      "description": "Cronograma da obra"
    },
    {
      "from": "projectHub",
      "to": "scheduleRiskAssessmentView",
      "operationId": "",
      "description": "Avaliação de risco de atraso"
    },
    {
      "from": "projectHub",
      "to": "changeOrderCatalogue",
      "operationId": "",
      "description": "Ordem de mudança"
    },
    {
      "from": "projectHub",
      "to": "invoiceCatalogue",
      "operationId": "",
      "description": "Fatura"
    },
    {
      "from": "projectHub",
      "to": "materialUsageCatalogue",
      "operationId": "",
      "description": "Consumo de material"
    },
    {
      "from": "projectHub",
      "to": "projectCoordinationAssignmentCatalogue",
      "operationId": "",
      "description": "Atribuição de coordenação da obra"
    },
    {
      "from": "projectHub",
      "to": "statusReportCatalogue",
      "operationId": "",
      "description": "Relatório de status"
    },
    {
      "from": "projectHub",
      "to": "workTaskCatalogue",
      "operationId": "",
      "description": "Tarefa de trabalho"
    }
  ],
  "workspaceIds": [
    "approveChangeOrder",
    "assignWorkTask",
    "changeOrderCatalogue",
    "changeOrderDecisionCatalogue",
    "clientBillingSummaryView",
    "clientCatalogue",
    "clientPortalAccessCatalogue",
    "consultApprovedProjectChangeOrders",
    "consultClientProjectUpdates",
    "declineChangeOrder",
    "forwardChangeOrderForClientApproval",
    "generateAndPublishProjectStatusReport",
    "inventoryBalanceCatalogue",
    "inventoryItemCatalogue",
    "invoiceCatalogue",
    "invoiceChangeOrderCatalogue",
    "issueProjectInvoice",
    "materialUsageCatalogue",
    "monitorDailyProjectRecords",
    "projectCatalogue",
    "projectCoordinationAssignmentCatalogue",
    "projectDashboardView",
    "projectExecutionOverviewView",
    "projectHub",
    "projectTimelineView",
    "recordProjectMaterialUsage",
    "recordWorkTime",
    "reviewProjectPortfolio",
    "scheduleRiskAssessmentView",
    "statusReportCatalogue",
    "submitChangeOrder",
    "timeLogCatalogue",
    "updateWorkTaskProgress",
    "workTaskCatalogue"
  ]
} as const;

export default buildFlowFsmSiteMap;
