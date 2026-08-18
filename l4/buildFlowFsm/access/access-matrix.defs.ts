/// <mls fileReference="_102046_/l4/buildFlowFsm/access/access-matrix.defs.ts" enhancement="_blank"/>

import type { Ns4AccessMatrixArtifact } from '/_102020_/l2/agentNewSolution/types.js';

export const buildFlowFsmAccessMatrix = {
  "schemaVersion": "2026-08-10-ns4-access-matrix-v3",
  "moduleName": "buildFlowFsm",
  "userLanguage": "pt-BR",
  "title": "Matriz de acesso do BuildFlow FSM",
  "profiles": [
    {
      "profileId": "projectManager",
      "title": "Gerente de projeto",
      "kind": "internal",
      "description": "Responsável pela visão consolidada das obras, pelas decisões sobre ordens de mudança e pela revisão e publicação da comunicação de status ao cliente.",
      "actorRefs": [
        "projectManager"
      ],
      "landingIntent": "Monitorar obras que exigem atenção, analisar custos e prazos e conduzir decisões gerenciais."
    },
    {
      "profileId": "fieldCoordinator",
      "title": "Coordenador de campo",
      "kind": "internal",
      "description": "Responsável por planejar e atribuir o trabalho de campo, acompanhar apontamentos diários e formalizar alterações identificadas na obra.",
      "actorRefs": [
        "fieldCoordinator"
      ],
      "landingIntent": "Organizar a execução das obras acompanhadas, atribuir tarefas e tratar registros recebidos do campo."
    },
    {
      "profileId": "fieldWorker",
      "title": "Trabalhador de campo",
      "kind": "internal",
      "description": "Executa tarefas atribuídas, atualiza o próprio andamento e registra suas horas e o consumo de materiais da obra.",
      "actorRefs": [
        "fieldWorker"
      ],
      "landingIntent": "Consultar tarefas atribuídas e registrar o trabalho realizado em campo."
    },
    {
      "profileId": "billingStaff",
      "title": "Equipe administrativa de faturamento",
      "kind": "internal",
      "description": "Responsável por consultar o resumo de faturamento das obras e emitir faturas para os clientes.",
      "actorRefs": [
        "billingStaff"
      ],
      "landingIntent": "Consultar obras faturáveis, alterações aprovadas e emitir faturas."
    },
    {
      "profileId": "client",
      "title": "Cliente",
      "kind": "external",
      "description": "Cliente associado a uma ou mais obras, com acesso somente às informações publicadas e aos valores comerciais relacionados às suas próprias obras.",
      "actorRefs": [
        "client"
      ],
      "landingIntent": "Consultar comunicações publicadas, alterações aprovadas, faturamento e faturas das próprias obras."
    }
  ],
  "authorities": [
    {
      "authorityRef": "buildflowfsm:portfolio",
      "title": "Monitorar portfólio e execução de obras",
      "description": "Permite consultar o painel, selecionar obras e analisar a execução consolidada para direcionar acompanhamento de campo.",
      "journeyStepRefs": [
        "reviewProjectPortfolio.inspectProjectDashboard",
        "reviewProjectPortfolio.locateProject",
        "reviewProjectPortfolio.inspectProjectExecutionOverview",
        "reviewProjectPortfolio.handoffProjectToFieldCoordinator"
      ],
      "informationNeeds": [
        "Projetos ativos",
        "Orçamento versus realizado",
        "Andamento da obra",
        "Próximas tarefas e prazos",
        "Indicadores consolidados de execução"
      ]
    },
    {
      "authorityRef": "buildflowfsm:fieldcoord",
      "title": "Coordenar tarefas e registros de campo",
      "description": "Permite selecionar obras e trabalhadores, consultar cronogramas, criar e atribuir tarefas e acompanhar tarefas, horas e materiais das obras sob coordenação.",
      "journeyStepRefs": [
        "assignWorkTask.locateProject",
        "assignWorkTask.inspectProjectTimeline",
        "assignWorkTask.locateFieldWorker",
        "assignWorkTask.createWorkTask",
        "assignWorkTask.handoffWorkTaskToFieldWorker",
        "monitorDailyProjectRecords.locateProject",
        "monitorDailyProjectRecords.inspectProjectTimeLogs",
        "monitorDailyProjectRecords.inspectProjectMaterialUsages",
        "monitorDailyProjectRecords.inspectProjectExecutionOverview"
      ],
      "informationNeeds": [
        "Cronograma e tarefas da obra",
        "Trabalhadores da organização elegíveis para atribuição",
        "Registros diários de horas",
        "Consumos de materiais",
        "Andamento consolidado e próximos prazos"
      ]
    },
    {
      "authorityRef": "buildflowfsm:fieldchange",
      "title": "Submeter ordem de mudança do campo",
      "description": "Permite formalizar uma ordem de mudança para uma obra e cliente relacionados à coordenação de campo e encaminhá-la ao gerente de projeto.",
      "journeyStepRefs": [
        "submitChangeOrder.locateClient",
        "submitChangeOrder.locateProject",
        "submitChangeOrder.createChangeOrder",
        "submitChangeOrder.handoffChangeOrderToProjectManager"
      ],
      "informationNeeds": [
        "Cliente relacionado à obra",
        "Dados da obra",
        "Descrição e impacto proposto da alteração"
      ]
    },
    {
      "authorityRef": "buildflowfsm:fieldwork",
      "title": "Atualizar tarefa atribuída",
      "description": "Permite ao trabalhador localizar e atualizar exclusivamente tarefas que lhe foram atribuídas, informando o andamento para coordenação.",
      "journeyStepRefs": [
        "updateWorkTaskProgress.locateWorkTask",
        "updateWorkTaskProgress.updateWorkTask",
        "updateWorkTaskProgress.handoffWorkTaskProgressToFieldCoordinator"
      ],
      "informationNeeds": [
        "Tarefas atribuídas ao trabalhador",
        "Descrição, prazo e status da tarefa",
        "Andamento informado pelo próprio trabalhador"
      ]
    },
    {
      "authorityRef": "buildflowfsm:fieldlogs",
      "title": "Registrar apontamentos próprios de campo",
      "description": "Permite registrar horas próprias contra tarefas permitidas e registrar o consumo de materiais em obras autorizadas para execução.",
      "journeyStepRefs": [
        "recordWorkTime.locateFieldWorker",
        "recordWorkTime.locateWorkTask",
        "recordWorkTime.createTimeLog",
        "recordWorkTime.handoffTimeLogToFieldCoordinator",
        "recordProjectMaterialUsage.locateProject",
        "recordProjectMaterialUsage.locateInventoryItem",
        "recordProjectMaterialUsage.createMaterialUsage",
        "recordProjectMaterialUsage.handoffMaterialUsageToFieldCoordinator"
      ],
      "informationNeeds": [
        "Identidade do próprio trabalhador",
        "Tarefas disponíveis para apontamento",
        "Obras autorizadas para execução",
        "Itens de estoque disponíveis",
        "Quantidade e identificação do material consumido"
      ]
    },
    {
      "authorityRef": "buildflowfsm:changemanage",
      "title": "Decidir e encaminhar ordens de mudança",
      "description": "Permite ao gerente localizar ordens submetidas, encaminhá-las ao cliente para aprovação ou recusá-las e devolver a decisão ao campo.",
      "journeyStepRefs": [
        "forwardChangeOrderForClientApproval.locateChangeOrder",
        "forwardChangeOrderForClientApproval.handoffChangeOrderToClient",
        "declineChangeOrder.locateChangeOrder",
        "declineChangeOrder.declineChangeOrderDecision",
        "declineChangeOrder.handoffDeclinedChangeOrderToFieldCoordinator"
      ],
      "informationNeeds": [
        "Ordens de mudança submetidas",
        "Cliente e obra relacionados",
        "Descrição, valor e impacto da alteração",
        "Decisão gerencial registrada"
      ]
    },
    {
      "authorityRef": "buildflowfsm:statuspublish",
      "title": "Gerar e publicar relatório de status",
      "description": "Permite consultar dados internos de execução, identificar riscos de atraso, gerar relatório por IA e publicá-lo para comunicação ao cliente.",
      "journeyStepRefs": [
        "generateAndPublishProjectStatusReport.locateProject",
        "generateAndPublishProjectStatusReport.inspectProjectExecutionOverview",
        "generateAndPublishProjectStatusReport.inspectScheduleRiskAssessment",
        "generateAndPublishProjectStatusReport.createStatusReport",
        "generateAndPublishProjectStatusReport.publishStatusReport",
        "generateAndPublishProjectStatusReport.handoffStatusReportToClient"
      ],
      "informationNeeds": [
        "Tarefas e respectivos status",
        "Registros de horas",
        "Consumos de materiais",
        "Indicadores de custo e execução",
        "Riscos de atraso",
        "Relatórios de status em revisão e publicados"
      ]
    },
    {
      "authorityRef": "buildflowfsm:billing",
      "title": "Emitir fatura da obra",
      "description": "Permite consultar o resumo de faturamento de uma obra, incluindo ordens de mudança aprovadas, emitir a fatura e disponibilizá-la ao cliente relacionado.",
      "journeyStepRefs": [
        "issueProjectInvoice.locateClient",
        "issueProjectInvoice.locateProject",
        "issueProjectInvoice.inspectClientBillingSummary",
        "issueProjectInvoice.createInvoice",
        "issueProjectInvoice.handoffInvoiceToClient"
      ],
      "informationNeeds": [
        "Cliente e obra faturável",
        "Resumo de faturamento",
        "Ordens de mudança aprovadas",
        "Faturas emitidas e valores faturados"
      ]
    },
    {
      "authorityRef": "buildflowfsm:clientapproval",
      "title": "Aprovar ordem de mudança própria",
      "description": "Permite ao cliente localizar e aprovar somente ordens de mudança pendentes encaminhadas para suas próprias obras.",
      "journeyStepRefs": [
        "approveChangeOrder.locateChangeOrder",
        "approveChangeOrder.approveChangeOrderDecision",
        "approveChangeOrder.handoffApprovedChangeOrderToBilling"
      ],
      "informationNeeds": [
        "Descrição publicada da ordem de mudança",
        "Valor da alteração",
        "Obra relacionada",
        "Decisão de aprovação do cliente"
      ]
    },
    {
      "authorityRef": "buildflowfsm:clientupdates",
      "title": "Consultar informações publicadas da própria obra",
      "description": "Permite consultar exclusivamente relatórios de status publicados, alterações aprovadas, resumo de faturamento e faturas das obras associadas ao cliente.",
      "journeyStepRefs": [
        "consultClientProjectUpdates.locateProject",
        "consultClientProjectUpdates.inspectStatusReport",
        "consultClientProjectUpdates.inspectClientBillingSummary",
        "consultApprovedProjectChangeOrders.locateProject",
        "consultApprovedProjectChangeOrders.inspectApprovedChangeOrders",
        "consultApprovedProjectChangeOrders.inspectClientBillingSummary"
      ],
      "informationNeeds": [
        "Nome e identificação pública da obra",
        "Relatórios de status publicados",
        "Riscos de atraso comunicados",
        "Ordens de mudança aprovadas",
        "Valores aprovados e refletidos no faturamento",
        "Resumo de faturamento",
        "Faturas disponibilizadas ao cliente"
      ]
    }
  ],
  "grants": [
    {
      "profileRef": "projectManager",
      "authorityRef": "buildflowfsm:portfolio",
      "reason": "O gerente precisa identificar desvios de custo e prazo e encaminhar obras que exigem coordenação de campo.",
      "dataScope": {
        "mode": "organization",
        "description": "Obras e indicadores da organização ativa sob responsabilidade gerencial."
      },
      "disclosure": {
        "mode": "fullRecord",
        "description": "A gestão de portfólio exige acesso aos dados completos de execução e custo das obras da organização.",
        "allowedInformation": [],
        "deniedInformation": []
      },
      "useRules": [
        "activeProjectCostVisibility"
      ]
    },
    {
      "profileRef": "projectManager",
      "authorityRef": "buildflowfsm:changemanage",
      "reason": "O gerente é responsável por tratar ordens submetidas, encaminhá-las ao cliente ou recusá-las.",
      "dataScope": {
        "mode": "organization",
        "description": "Ordens de mudança vinculadas às obras da organização ativa."
      },
      "disclosure": {
        "mode": "fullRecord",
        "description": "A decisão gerencial requer os dados completos da ordem, da obra e do cliente relacionado.",
        "allowedInformation": [],
        "deniedInformation": []
      },
      "useRules": [
        "onlyProjectManagerForwardsChangeOrderForClientApproval",
        "onlyProjectManagerDeclinesChangeOrder"
      ]
    },
    {
      "profileRef": "projectManager",
      "authorityRef": "buildflowfsm:statuspublish",
      "reason": "O gerente deve revisar informações internas, gerar o relatório e decidir sua publicação antes da comunicação ao cliente.",
      "dataScope": {
        "mode": "organization",
        "description": "Dados de execução e relatórios das obras da organização ativa."
      },
      "disclosure": {
        "mode": "fullRecord",
        "description": "A preparação e revisão da comunicação requerem acesso completo aos dados internos de execução da obra.",
        "allowedInformation": [],
        "deniedInformation": []
      },
      "useRules": [
        "statusReportUsesProjectExecutionData",
        "onlyProjectManagerPublishesStatusReport"
      ]
    },
    {
      "profileRef": "fieldCoordinator",
      "authorityRef": "buildflowfsm:fieldcoord",
      "reason": "O coordenador planeja trabalho, atribui responsáveis e acompanha os apontamentos recebidos do campo.",
      "dataScope": {
        "mode": "assigned",
        "description": "Somente obras encaminhadas ou atribuídas ao coordenador para acompanhamento de campo."
      },
      "disclosure": {
        "mode": "fullRecord",
        "description": "A coordenação operacional requer os detalhes de tarefas, cronograma, horas e materiais das obras acompanhadas.",
        "allowedInformation": [],
        "deniedInformation": []
      },
      "useRules": [
        "workTaskRequiresActiveProject",
        "workTaskRequiresAssigneeAndDueDate",
        "fieldCoordinatorSeesProjectDailyRecords"
      ]
    },
    {
      "profileRef": "fieldCoordinator",
      "authorityRef": "buildflowfsm:fieldchange",
      "reason": "O coordenador formaliza alterações identificadas durante a execução e as submete ao gerente.",
      "dataScope": {
        "mode": "assigned",
        "description": "Somente obras atribuídas ao coordenador e clientes relacionados a essas obras."
      },
      "disclosure": {
        "mode": "fullRecord",
        "description": "A formalização da alteração requer os dados completos necessários da obra, do cliente e da ordem proposta.",
        "allowedInformation": [],
        "deniedInformation": []
      },
      "useRules": [
        "changeOrderRequiresClientAndProject"
      ]
    },
    {
      "profileRef": "fieldWorker",
      "authorityRef": "buildflowfsm:fieldwork",
      "reason": "O trabalhador precisa informar o andamento das tarefas que recebeu para execução.",
      "dataScope": {
        "mode": "assigned",
        "description": "Somente tarefas atualmente atribuídas ao trabalhador autenticado."
      },
      "disclosure": {
        "mode": "fieldsOnly",
        "description": "O trabalhador recebe apenas as informações necessárias para executar e atualizar sua própria tarefa.",
        "allowedInformation": [
          "Identificação da tarefa",
          "Obra e endereço de execução",
          "Descrição da tarefa",
          "Prazo",
          "Status e andamento da própria tarefa"
        ],
        "deniedInformation": [
          "Orçamento da obra",
          "Custo realizado",
          "Margens internas",
          "Dados de faturamento",
          "Tarefas de outros trabalhadores",
          "Anotações gerenciais internas"
        ]
      },
      "useRules": [
        "onlyAssignedWorkerReportsTaskProgress"
      ]
    },
    {
      "profileRef": "fieldWorker",
      "authorityRef": "buildflowfsm:fieldlogs",
      "reason": "O trabalhador registra as próprias horas e os materiais efetivamente consumidos na execução autorizada.",
      "dataScope": {
        "mode": "custom",
        "description": "O próprio trabalhador para registros de horas; tarefas atribuídas e obras autorizadas para apontamentos de campo."
      },
      "disclosure": {
        "mode": "fieldsOnly",
        "description": "Apenas os dados necessários para identificar a tarefa, a obra e o item de material são expostos para apontamento.",
        "allowedInformation": [
          "Identificação do próprio trabalhador",
          "Tarefas atribuídas",
          "Identificação e endereço da obra autorizada",
          "Itens de estoque disponíveis",
          "Quantidade e descrição do consumo informado"
        ],
        "deniedInformation": [
          "Registros de horas de outros trabalhadores",
          "Custos unitários e margens internas",
          "Orçamento da obra",
          "Saldos financeiros",
          "Dados de faturamento do cliente"
        ]
      },
      "useRules": [
        "timeLogRequiresWorkerTaskAndPositiveHours",
        "materialUsageRequiresActiveProjectAndAvailableInventory"
      ]
    },
    {
      "profileRef": "billingStaff",
      "authorityRef": "buildflowfsm:billing",
      "reason": "A equipe de faturamento emite faturas com base no resumo da obra e nas alterações aprovadas.",
      "dataScope": {
        "mode": "organization",
        "description": "Clientes, obras faturáveis, resumos e faturas da organização ativa."
      },
      "disclosure": {
        "mode": "fullRecord",
        "description": "O faturamento requer os dados comerciais e financeiros completos necessários para emissão da fatura.",
        "allowedInformation": [],
        "deniedInformation": []
      },
      "useRules": [
        "invoiceRequiresClientAndProject",
        "invoiceIncludesApprovedChangeOrdersOnly"
      ]
    },
    {
      "profileRef": "client",
      "authorityRef": "buildflowfsm:clientapproval",
      "reason": "O cliente deve poder decidir sobre uma ordem de mudança encaminhada para aprovação em sua própria obra.",
      "dataScope": {
        "mode": "related",
        "description": "Somente ordens de mudança pendentes associadas às obras do cliente autenticado."
      },
      "disclosure": {
        "mode": "fieldsOnly",
        "description": "A decisão do cliente é limitada à proposta comercial apresentada para aprovação.",
        "allowedInformation": [
          "Nome público da obra",
          "Descrição publicada da alteração",
          "Valor da alteração",
          "Data de encaminhamento",
          "Status de aprovação"
        ],
        "deniedInformation": [
          "Custos internos",
          "Margem",
          "Anotações de campo",
          "Anotações gerenciais",
          "Registros de horas",
          "Consumos de materiais",
          "Outras ordens da organização"
        ]
      },
      "useRules": [
        "onlyClientApprovesOwnChangeOrder"
      ]
    },
    {
      "profileRef": "client",
      "authorityRef": "buildflowfsm:clientupdates",
      "reason": "O cliente precisa acompanhar somente comunicações e valores que foram publicados para suas próprias obras.",
      "dataScope": {
        "mode": "related",
        "description": "Somente obras associadas ao cliente autenticado e informações explicitamente publicadas para ele."
      },
      "disclosure": {
        "mode": "summaryOnly",
        "description": "A consulta externa expõe resumos e documentos publicados, sem acesso ao registro interno completo da obra.",
        "allowedInformation": [
          "Nome público e status comunicado da obra",
          "Relatórios de status publicados",
          "Riscos de atraso comunicados no relatório publicado",
          "Ordens de mudança aprovadas e seus valores",
          "Resumo de faturamento publicado",
          "Faturas disponibilizadas",
          "Valores faturados e referências das faturas"
        ],
        "deniedInformation": [
          "Registro completo do projeto",
          "Orçamento interno e custo realizado detalhado",
          "Margens e rentabilidade",
          "TimeLogs",
          "Consumos e custos unitários de materiais",
          "Tarefas internas detalhadas",
          "Ordens de mudança pendentes ou recusadas",
          "Anotações internas",
          "Dados de outros clientes ou obras"
        ]
      },
      "useRules": [
        "clientSeesOnlyOwnProjectInformation",
        "clientSeesApprovedChangeOrdersOnly"
      ]
    }
  ],
  "accessHash": "sha256:f91ccf358ec1cbec73bc6410c0c5892f116595510518add5f1daaa9b4fdb2f6f",
  "approvedBy": "human",
  "approvedAt": "2026-08-17T18:45:12.209Z",
  "realization": {
    "status": "useCasesCompiled",
    "compiledFromAccessHash": "sha256:f91ccf358ec1cbec73bc6410c0c5892f116595510518add5f1daaa9b4fdb2f6f",
    "useCaseAuthorityRefs": [
      {
        "useCaseId": "approveChangeOrderDecision",
        "authorityRef": "buildflowfsm:clientapproval",
        "journeyStepRefs": [
          "approveChangeOrder.approveChangeOrderDecision"
        ]
      },
      {
        "useCaseId": "createChangeOrder",
        "authorityRef": "buildflowfsm:fieldchange",
        "journeyStepRefs": [
          "submitChangeOrder.createChangeOrder"
        ]
      },
      {
        "useCaseId": "createInvoice",
        "authorityRef": "buildflowfsm:billing",
        "journeyStepRefs": [
          "issueProjectInvoice.createInvoice"
        ]
      },
      {
        "useCaseId": "createMaterialUsage",
        "authorityRef": "buildflowfsm:fieldlogs",
        "journeyStepRefs": [
          "recordProjectMaterialUsage.createMaterialUsage"
        ]
      },
      {
        "useCaseId": "createStatusReport",
        "authorityRef": "buildflowfsm:statuspublish",
        "journeyStepRefs": [
          "generateAndPublishProjectStatusReport.createStatusReport"
        ]
      },
      {
        "useCaseId": "createTimeLog",
        "authorityRef": "buildflowfsm:fieldlogs",
        "journeyStepRefs": [
          "recordWorkTime.createTimeLog"
        ]
      },
      {
        "useCaseId": "createWorkTask",
        "authorityRef": "buildflowfsm:fieldcoord",
        "journeyStepRefs": [
          "assignWorkTask.createWorkTask"
        ]
      },
      {
        "useCaseId": "declineChangeOrderDecision",
        "authorityRef": "buildflowfsm:changemanage",
        "journeyStepRefs": [
          "declineChangeOrder.declineChangeOrderDecision"
        ]
      },
      {
        "useCaseId": "handoffApprovedChangeOrderToBilling",
        "authorityRef": "buildflowfsm:clientapproval",
        "journeyStepRefs": [
          "approveChangeOrder.handoffApprovedChangeOrderToBilling"
        ]
      },
      {
        "useCaseId": "handoffChangeOrderToClient",
        "authorityRef": "buildflowfsm:changemanage",
        "journeyStepRefs": [
          "forwardChangeOrderForClientApproval.handoffChangeOrderToClient"
        ]
      },
      {
        "useCaseId": "handoffChangeOrderToProjectManager",
        "authorityRef": "buildflowfsm:fieldchange",
        "journeyStepRefs": [
          "submitChangeOrder.handoffChangeOrderToProjectManager"
        ]
      },
      {
        "useCaseId": "handoffDeclinedChangeOrderToFieldCoordinator",
        "authorityRef": "buildflowfsm:changemanage",
        "journeyStepRefs": [
          "declineChangeOrder.handoffDeclinedChangeOrderToFieldCoordinator"
        ]
      },
      {
        "useCaseId": "handoffInvoiceToClient",
        "authorityRef": "buildflowfsm:billing",
        "journeyStepRefs": [
          "issueProjectInvoice.handoffInvoiceToClient"
        ]
      },
      {
        "useCaseId": "handoffMaterialUsageToFieldCoordinator",
        "authorityRef": "buildflowfsm:fieldlogs",
        "journeyStepRefs": [
          "recordProjectMaterialUsage.handoffMaterialUsageToFieldCoordinator"
        ]
      },
      {
        "useCaseId": "handoffProjectToFieldCoordinator",
        "authorityRef": "buildflowfsm:portfolio",
        "journeyStepRefs": [
          "reviewProjectPortfolio.handoffProjectToFieldCoordinator"
        ]
      },
      {
        "useCaseId": "handoffStatusReportToClient",
        "authorityRef": "buildflowfsm:statuspublish",
        "journeyStepRefs": [
          "generateAndPublishProjectStatusReport.handoffStatusReportToClient"
        ]
      },
      {
        "useCaseId": "handoffTimeLogToFieldCoordinator",
        "authorityRef": "buildflowfsm:fieldlogs",
        "journeyStepRefs": [
          "recordWorkTime.handoffTimeLogToFieldCoordinator"
        ]
      },
      {
        "useCaseId": "handoffWorkTaskProgressToFieldCoordinator",
        "authorityRef": "buildflowfsm:fieldwork",
        "journeyStepRefs": [
          "updateWorkTaskProgress.handoffWorkTaskProgressToFieldCoordinator"
        ]
      },
      {
        "useCaseId": "handoffWorkTaskToFieldWorker",
        "authorityRef": "buildflowfsm:fieldcoord",
        "journeyStepRefs": [
          "assignWorkTask.handoffWorkTaskToFieldWorker"
        ]
      },
      {
        "useCaseId": "inspectApprovedChangeOrders",
        "authorityRef": "buildflowfsm:clientupdates",
        "journeyStepRefs": [
          "consultApprovedProjectChangeOrders.inspectApprovedChangeOrders"
        ]
      },
      {
        "useCaseId": "inspectClientBillingSummary",
        "authorityRef": "buildflowfsm:billing",
        "journeyStepRefs": [
          "issueProjectInvoice.inspectClientBillingSummary"
        ]
      },
      {
        "useCaseId": "inspectClientBillingSummary",
        "authorityRef": "buildflowfsm:clientupdates",
        "journeyStepRefs": [
          "consultApprovedProjectChangeOrders.inspectClientBillingSummary",
          "consultClientProjectUpdates.inspectClientBillingSummary"
        ]
      },
      {
        "useCaseId": "inspectProjectDashboard",
        "authorityRef": "buildflowfsm:portfolio",
        "journeyStepRefs": [
          "reviewProjectPortfolio.inspectProjectDashboard"
        ]
      },
      {
        "useCaseId": "inspectProjectExecutionOverview",
        "authorityRef": "buildflowfsm:fieldcoord",
        "journeyStepRefs": [
          "monitorDailyProjectRecords.inspectProjectExecutionOverview"
        ]
      },
      {
        "useCaseId": "inspectProjectExecutionOverview",
        "authorityRef": "buildflowfsm:portfolio",
        "journeyStepRefs": [
          "reviewProjectPortfolio.inspectProjectExecutionOverview"
        ]
      },
      {
        "useCaseId": "inspectProjectExecutionOverview",
        "authorityRef": "buildflowfsm:statuspublish",
        "journeyStepRefs": [
          "generateAndPublishProjectStatusReport.inspectProjectExecutionOverview"
        ]
      },
      {
        "useCaseId": "inspectProjectMaterialUsages",
        "authorityRef": "buildflowfsm:fieldcoord",
        "journeyStepRefs": [
          "monitorDailyProjectRecords.inspectProjectMaterialUsages"
        ]
      },
      {
        "useCaseId": "inspectProjectTimeline",
        "authorityRef": "buildflowfsm:fieldcoord",
        "journeyStepRefs": [
          "assignWorkTask.inspectProjectTimeline"
        ]
      },
      {
        "useCaseId": "inspectProjectTimeLogs",
        "authorityRef": "buildflowfsm:fieldcoord",
        "journeyStepRefs": [
          "monitorDailyProjectRecords.inspectProjectTimeLogs"
        ]
      },
      {
        "useCaseId": "inspectScheduleRiskAssessment",
        "authorityRef": "buildflowfsm:statuspublish",
        "journeyStepRefs": [
          "generateAndPublishProjectStatusReport.inspectScheduleRiskAssessment"
        ]
      },
      {
        "useCaseId": "inspectStatusReport",
        "authorityRef": "buildflowfsm:clientupdates",
        "journeyStepRefs": [
          "consultClientProjectUpdates.inspectStatusReport"
        ]
      },
      {
        "useCaseId": "locateChangeOrder",
        "authorityRef": "buildflowfsm:changemanage",
        "journeyStepRefs": [
          "declineChangeOrder.locateChangeOrder",
          "forwardChangeOrderForClientApproval.locateChangeOrder"
        ]
      },
      {
        "useCaseId": "locateChangeOrder",
        "authorityRef": "buildflowfsm:clientapproval",
        "journeyStepRefs": [
          "approveChangeOrder.locateChangeOrder"
        ]
      },
      {
        "useCaseId": "locateClient",
        "authorityRef": "buildflowfsm:billing",
        "journeyStepRefs": [
          "issueProjectInvoice.locateClient"
        ]
      },
      {
        "useCaseId": "locateClient",
        "authorityRef": "buildflowfsm:fieldchange",
        "journeyStepRefs": [
          "submitChangeOrder.locateClient"
        ]
      },
      {
        "useCaseId": "locateFieldWorker",
        "authorityRef": "buildflowfsm:fieldcoord",
        "journeyStepRefs": [
          "assignWorkTask.locateFieldWorker"
        ]
      },
      {
        "useCaseId": "locateFieldWorker",
        "authorityRef": "buildflowfsm:fieldlogs",
        "journeyStepRefs": [
          "recordWorkTime.locateFieldWorker"
        ]
      },
      {
        "useCaseId": "locateInventoryItem",
        "authorityRef": "buildflowfsm:fieldlogs",
        "journeyStepRefs": [
          "recordProjectMaterialUsage.locateInventoryItem"
        ]
      },
      {
        "useCaseId": "locateProject",
        "authorityRef": "buildflowfsm:billing",
        "journeyStepRefs": [
          "issueProjectInvoice.locateProject"
        ]
      },
      {
        "useCaseId": "locateProject",
        "authorityRef": "buildflowfsm:clientupdates",
        "journeyStepRefs": [
          "consultApprovedProjectChangeOrders.locateProject",
          "consultClientProjectUpdates.locateProject"
        ]
      },
      {
        "useCaseId": "locateProject",
        "authorityRef": "buildflowfsm:fieldchange",
        "journeyStepRefs": [
          "submitChangeOrder.locateProject"
        ]
      },
      {
        "useCaseId": "locateProject",
        "authorityRef": "buildflowfsm:fieldcoord",
        "journeyStepRefs": [
          "assignWorkTask.locateProject",
          "monitorDailyProjectRecords.locateProject"
        ]
      },
      {
        "useCaseId": "locateProject",
        "authorityRef": "buildflowfsm:fieldlogs",
        "journeyStepRefs": [
          "recordProjectMaterialUsage.locateProject"
        ]
      },
      {
        "useCaseId": "locateProject",
        "authorityRef": "buildflowfsm:portfolio",
        "journeyStepRefs": [
          "reviewProjectPortfolio.locateProject"
        ]
      },
      {
        "useCaseId": "locateProject",
        "authorityRef": "buildflowfsm:statuspublish",
        "journeyStepRefs": [
          "generateAndPublishProjectStatusReport.locateProject"
        ]
      },
      {
        "useCaseId": "locateWorkTask",
        "authorityRef": "buildflowfsm:fieldlogs",
        "journeyStepRefs": [
          "recordWorkTime.locateWorkTask"
        ]
      },
      {
        "useCaseId": "locateWorkTask",
        "authorityRef": "buildflowfsm:fieldwork",
        "journeyStepRefs": [
          "updateWorkTaskProgress.locateWorkTask"
        ]
      },
      {
        "useCaseId": "publishStatusReport",
        "authorityRef": "buildflowfsm:statuspublish",
        "journeyStepRefs": [
          "generateAndPublishProjectStatusReport.publishStatusReport"
        ]
      },
      {
        "useCaseId": "updateWorkTask",
        "authorityRef": "buildflowfsm:fieldwork",
        "journeyStepRefs": [
          "updateWorkTaskProgress.updateWorkTask"
        ]
      }
    ],
    "operationAuthorityRefs": [],
    "realizationHash": "sha256:92571cb072bb8e83936e6fa40bcf686ffeda8dd0c4731478f11ada0e56db8035"
  }
} as const satisfies Ns4AccessMatrixArtifact;

export type BuildFlowFsmAccessMatrixType = typeof buildFlowFsmAccessMatrix;

export default buildFlowFsmAccessMatrix;
