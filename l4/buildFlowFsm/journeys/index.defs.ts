/// <mls fileReference="_102046_/l4/buildFlowFsm/journeys/index.defs.ts" enhancement="_blank"/>

import type { Ns4JourneyIndex } from '/_102020_/l2/agentNewSolution/types.js';

export const buildFlowFsmJourneyIndex = {
  "schemaVersion": "2026-08-15-ns4-journey-index-v7",
  "moduleName": "buildFlowFsm",
  "approvedAt": "2026-08-17T18:29:46.240Z",
  "approvedBy": "human",
  "journeys": [
    {
      "journeyId": "reviewProjectPortfolio",
      "actorRef": "projectManager",
      "title": "Monitorar portfólio e direcionar obra",
      "goal": "Identificar obras ativas que exigem atenção de custo ou prazo e direcionar seu acompanhamento.",
      "entryMode": "coldStart",
      "businessHash": "sha256:891adc546d2653aa4f33541c209547512fbe229f94299fc956edf1277c3fb222",
      "artifactPath": "l4/buildFlowFsm/journeys/reviewProjectPortfolio.defs.ts",
      "useCaseRefs": [
        "handoffProjectToFieldCoordinator",
        "inspectProjectDashboard",
        "inspectProjectExecutionOverview",
        "locateProject"
      ]
    },
    {
      "journeyId": "assignWorkTask",
      "actorRef": "fieldCoordinator",
      "title": "Planejar e atribuir tarefa de campo",
      "goal": "Criar uma tarefa vinculada à obra e encaminhá-la ao trabalhador responsável.",
      "entryMode": "contextOrLookup",
      "businessHash": "sha256:cdbcb3a3ad03be4ad68ccf7b47b3f2b347ad66e0ff5ba03fff10b36888eab801",
      "artifactPath": "l4/buildFlowFsm/journeys/assignWorkTask.defs.ts",
      "useCaseRefs": [
        "createWorkTask",
        "handoffWorkTaskToFieldWorker",
        "inspectProjectTimeline",
        "locateFieldWorker",
        "locateProject"
      ]
    },
    {
      "journeyId": "updateWorkTaskProgress",
      "actorRef": "fieldWorker",
      "title": "Atualizar andamento da tarefa",
      "goal": "Manter o status da tarefa alinhado à execução observada.",
      "entryMode": "contextOrLookup",
      "businessHash": "sha256:48192c1ca691362a95a952f0318683b326e4963ef6c4f184eda6f987975eb7fe",
      "artifactPath": "l4/buildFlowFsm/journeys/updateWorkTaskProgress.defs.ts",
      "useCaseRefs": [
        "handoffWorkTaskProgressToFieldCoordinator",
        "locateWorkTask",
        "updateWorkTask"
      ]
    },
    {
      "journeyId": "recordWorkTime",
      "actorRef": "fieldWorker",
      "title": "Registrar horas trabalhadas",
      "goal": "Registrar horas de execução para apoiar o custo realizado da obra.",
      "entryMode": "coldStart",
      "businessHash": "sha256:44b320707bc484ad97793f6e6d7c46c78917e142a326b806810007d379b98ad5",
      "artifactPath": "l4/buildFlowFsm/journeys/recordWorkTime.defs.ts",
      "useCaseRefs": [
        "createTimeLog",
        "handoffTimeLogToFieldCoordinator",
        "locateFieldWorker",
        "locateWorkTask"
      ]
    },
    {
      "journeyId": "recordProjectMaterialUsage",
      "actorRef": "fieldWorker",
      "title": "Registrar consumo de material da obra",
      "goal": "Rastrear materiais consumidos em uma obra para apoiar execução e custeio.",
      "entryMode": "coldStart",
      "businessHash": "sha256:6a1aff3069802a281c21a0e2d32f888aeaa83d8657c97de3bc2afb4715dd6b28",
      "artifactPath": "l4/buildFlowFsm/journeys/recordProjectMaterialUsage.defs.ts",
      "useCaseRefs": [
        "createMaterialUsage",
        "handoffMaterialUsageToFieldCoordinator",
        "locateInventoryItem",
        "locateProject"
      ]
    },
    {
      "journeyId": "submitChangeOrder",
      "actorRef": "fieldCoordinator",
      "title": "Registrar e submeter ordem de mudança",
      "goal": "Formalizar uma alteração da obra para tratamento do gerente de projeto.",
      "entryMode": "contextOrLookup",
      "businessHash": "sha256:7a3a3d284888ad73cf1bb49fb05556adeeec816694b299a7e7af2d4930a22b0e",
      "artifactPath": "l4/buildFlowFsm/journeys/submitChangeOrder.defs.ts",
      "useCaseRefs": [
        "createChangeOrder",
        "handoffChangeOrderToProjectManager",
        "locateClient",
        "locateProject"
      ]
    },
    {
      "journeyId": "forwardChangeOrderForClientApproval",
      "actorRef": "projectManager",
      "title": "Encaminhar ordem de mudança ao cliente",
      "goal": "Enviar ao cliente uma ordem de mudança submetida para a decisão de aprovação.",
      "entryMode": "contextOrLookup",
      "businessHash": "sha256:c0a982b3347ed3fc7556c87549ed804d96411db8cb9511615578d5a71933d5cf",
      "artifactPath": "l4/buildFlowFsm/journeys/forwardChangeOrderForClientApproval.defs.ts",
      "useCaseRefs": [
        "handoffChangeOrderToClient",
        "locateChangeOrder"
      ]
    },
    {
      "journeyId": "approveChangeOrder",
      "actorRef": "client",
      "title": "Aprovar ordem de mudança",
      "goal": "Decidir favoravelmente uma ordem de mudança recebida e encaminhá-la ao faturamento.",
      "entryMode": "contextOrLookup",
      "businessHash": "sha256:fdb7fad37b2aef98b3454d6b76429aade62571518fa4c1cdce697cfdfab79b2a",
      "artifactPath": "l4/buildFlowFsm/journeys/approveChangeOrder.defs.ts",
      "useCaseRefs": [
        "approveChangeOrderDecision",
        "handoffApprovedChangeOrderToBilling",
        "locateChangeOrder"
      ]
    },
    {
      "journeyId": "declineChangeOrder",
      "actorRef": "projectManager",
      "title": "Recusar ordem de mudança",
      "goal": "Decidir desfavoravelmente uma ordem submetida e devolver o resultado ao campo.",
      "entryMode": "contextOrLookup",
      "businessHash": "sha256:4eebbd9234b3e8986c1bb68ffc58d447a046d2e56dd1539d618d043c4592f102",
      "artifactPath": "l4/buildFlowFsm/journeys/declineChangeOrder.defs.ts",
      "useCaseRefs": [
        "declineChangeOrderDecision",
        "handoffDeclinedChangeOrderToFieldCoordinator",
        "locateChangeOrder"
      ]
    },
    {
      "journeyId": "issueProjectInvoice",
      "actorRef": "billingStaff",
      "title": "Emitir fatura da obra",
      "goal": "Emitir uma fatura para o cliente com base no resumo de faturamento da obra.",
      "entryMode": "contextOrLookup",
      "businessHash": "sha256:8885b209892bab2b2cfb2dc50b3f17b24938dab59a6afcb19ca4b40b233ddfc1",
      "artifactPath": "l4/buildFlowFsm/journeys/issueProjectInvoice.defs.ts",
      "useCaseRefs": [
        "createInvoice",
        "handoffInvoiceToClient",
        "inspectClientBillingSummary",
        "locateClient",
        "locateProject"
      ]
    },
    {
      "journeyId": "generateAndPublishProjectStatusReport",
      "actorRef": "projectManager",
      "title": "Gerar e publicar relatório de status",
      "goal": "Produzir comunicação profissional sobre a obra, incluindo riscos de atraso, e disponibilizá-la ao cliente.",
      "entryMode": "contextOrLookup",
      "businessHash": "sha256:c8d871cd8eeebd637bdcc544ddec3c72b243892f213a611e2ba0097521b2ab78",
      "artifactPath": "l4/buildFlowFsm/journeys/generateAndPublishProjectStatusReport.defs.ts",
      "useCaseRefs": [
        "createStatusReport",
        "handoffStatusReportToClient",
        "inspectProjectExecutionOverview",
        "inspectScheduleRiskAssessment",
        "locateProject",
        "publishStatusReport"
      ]
    },
    {
      "journeyId": "consultClientProjectUpdates",
      "actorRef": "client",
      "title": "Consultar status e faturamento da obra",
      "goal": "Acompanhar informações publicadas sobre a execução e os valores da própria obra.",
      "entryMode": "coldStart",
      "businessHash": "sha256:a433187c999cb8a3b002bac545bbb5063c815cbe624d65c9ff6ecc214bf95f45",
      "artifactPath": "l4/buildFlowFsm/journeys/consultClientProjectUpdates.defs.ts",
      "useCaseRefs": [
        "inspectClientBillingSummary",
        "inspectStatusReport",
        "locateProject"
      ]
    },
    {
      "journeyId": "monitorDailyProjectRecords",
      "actorRef": "fieldCoordinator",
      "title": "Acompanhar registros diários da obra",
      "goal": "Consultar horas e materiais recebidos para acompanhar execução e cronograma.",
      "entryMode": "contextOrLookup",
      "businessHash": "sha256:d30f1bb4a9e2b06ee2b5b83316e6f2ea789c6c7c4634b9cbdc720b55dbdf49e8",
      "artifactPath": "l4/buildFlowFsm/journeys/monitorDailyProjectRecords.defs.ts",
      "useCaseRefs": [
        "inspectProjectExecutionOverview",
        "inspectProjectMaterialUsages",
        "inspectProjectTimeLogs",
        "locateProject"
      ]
    },
    {
      "journeyId": "consultApprovedProjectChangeOrders",
      "actorRef": "client",
      "title": "Consultar alterações aprovadas da obra",
      "goal": "Consultar ordens aprovadas da própria obra e seus valores no faturamento.",
      "entryMode": "contextOrLookup",
      "businessHash": "sha256:87f34d1d637c9ce21c57f8bdc9272519d900fcde870dbb7fd4d7021732c6a613",
      "artifactPath": "l4/buildFlowFsm/journeys/consultApprovedProjectChangeOrders.defs.ts",
      "useCaseRefs": [
        "inspectApprovedChangeOrders",
        "inspectClientBillingSummary",
        "locateProject"
      ]
    }
  ],
  "features": [
    {
      "featureId": "projectPortfolioMonitoring",
      "title": "Monitoramento do portfólio de obras",
      "priority": "now",
      "journeyStepRefs": [
        "reviewProjectPortfolio.inspectProjectDashboard",
        "reviewProjectPortfolio.locateProject",
        "reviewProjectPortfolio.inspectProjectExecutionOverview",
        "reviewProjectPortfolio.handoffProjectToFieldCoordinator"
      ]
    },
    {
      "featureId": "projectScheduleVisibility",
      "title": "Visibilidade de cronograma e tarefas",
      "priority": "now",
      "journeyStepRefs": [
        "assignWorkTask.inspectProjectTimeline",
        "assignWorkTask.createWorkTask",
        "generateAndPublishProjectStatusReport.inspectScheduleRiskAssessment"
      ]
    },
    {
      "featureId": "fieldTaskCoordination",
      "title": "Coordenação de tarefas de campo",
      "priority": "now",
      "journeyStepRefs": [
        "assignWorkTask.createWorkTask",
        "assignWorkTask.handoffWorkTaskToFieldWorker"
      ]
    },
    {
      "featureId": "dailyFieldLogging",
      "title": "Registro diário de campo",
      "priority": "now",
      "journeyStepRefs": [
        "recordWorkTime.createTimeLog",
        "recordWorkTime.handoffTimeLogToFieldCoordinator",
        "monitorDailyProjectRecords.inspectProjectTimeLogs"
      ]
    },
    {
      "featureId": "projectMaterialTracking",
      "title": "Rastreamento de materiais por obra",
      "priority": "now",
      "journeyStepRefs": [
        "recordProjectMaterialUsage.createMaterialUsage",
        "recordProjectMaterialUsage.handoffMaterialUsageToFieldCoordinator",
        "monitorDailyProjectRecords.inspectProjectMaterialUsages"
      ]
    },
    {
      "featureId": "jobCostTracking",
      "title": "Custeio e realizado da obra",
      "priority": "now",
      "journeyStepRefs": [
        "recordWorkTime.createTimeLog",
        "recordProjectMaterialUsage.createMaterialUsage",
        "submitChangeOrder.createChangeOrder",
        "approveChangeOrder.approveChangeOrderDecision",
        "issueProjectInvoice.inspectClientBillingSummary"
      ]
    },
    {
      "featureId": "changeOrderControl",
      "title": "Controle de ordens de mudança",
      "priority": "now",
      "journeyStepRefs": [
        "submitChangeOrder.createChangeOrder",
        "forwardChangeOrderForClientApproval.handoffChangeOrderToClient",
        "approveChangeOrder.approveChangeOrderDecision",
        "declineChangeOrder.declineChangeOrderDecision",
        "issueProjectInvoice.inspectClientBillingSummary",
        "consultApprovedProjectChangeOrders.inspectApprovedChangeOrders"
      ]
    },
    {
      "featureId": "clientBilling",
      "title": "Resumo de faturamento do cliente",
      "priority": "now",
      "journeyStepRefs": [
        "approveChangeOrder.handoffApprovedChangeOrderToBilling",
        "issueProjectInvoice.createInvoice",
        "issueProjectInvoice.handoffInvoiceToClient",
        "consultClientProjectUpdates.inspectClientBillingSummary"
      ]
    },
    {
      "featureId": "aiStatusReporting",
      "title": "Relatórios de status com IA",
      "priority": "now",
      "journeyStepRefs": [
        "generateAndPublishProjectStatusReport.createStatusReport",
        "generateAndPublishProjectStatusReport.inspectScheduleRiskAssessment",
        "generateAndPublishProjectStatusReport.publishStatusReport",
        "consultClientProjectUpdates.inspectStatusReport"
      ]
    },
    {
      "featureId": "clientCommunication",
      "title": "Comunicação com o cliente",
      "priority": "now",
      "journeyStepRefs": [
        "forwardChangeOrderForClientApproval.handoffChangeOrderToClient",
        "approveChangeOrder.locateChangeOrder",
        "issueProjectInvoice.handoffInvoiceToClient",
        "generateAndPublishProjectStatusReport.handoffStatusReportToClient",
        "consultClientProjectUpdates.inspectStatusReport"
      ]
    }
  ],
  "policyDecisions": [
    {
      "decisionId": "portfolioAttentionRouting",
      "question": "Como o gerente encaminha uma obra que exige atenção após revisar o portfólio?",
      "chosen": "O gerente encaminha a obra selecionada ao coordenador de campo para acompanhamento da execução.",
      "alternatives": [
        "O gerente acompanha a obra sem encaminhamento",
        "O sistema encaminha automaticamente toda obra com desvio"
      ],
      "journeyRef": "reviewProjectPortfolio"
    },
    {
      "decisionId": "taskAssignmentOwnership",
      "question": "Quem define o responsável por uma nova tarefa da obra?",
      "chosen": "O coordenador de campo seleciona o trabalhador responsável antes de encaminhar a tarefa.",
      "alternatives": [
        "O gerente de projeto define diretamente o responsável",
        "A tarefa permanece sem responsável até ser assumida em campo"
      ],
      "journeyRef": "assignWorkTask"
    },
    {
      "decisionId": "taskProgressReportingCadence",
      "question": "Quando o trabalhador deve registrar o andamento da tarefa?",
      "chosen": "O trabalhador atualiza o andamento ao concluir ou alterar significativamente o estado da tarefa.",
      "alternatives": [
        "O trabalhador atualiza o andamento somente ao fim do dia",
        "Apenas o coordenador de campo atualiza o andamento"
      ],
      "journeyRef": "updateWorkTaskProgress"
    },
    {
      "decisionId": "timeLogAttribution",
      "question": "Como as horas registradas são atribuídas à execução?",
      "chosen": "Cada registro de horas é associado a um trabalhador e a uma tarefa específica.",
      "alternatives": [
        "As horas são registradas apenas no nível da obra",
        "O coordenador consolida horas sem identificação do trabalhador"
      ],
      "journeyRef": "recordWorkTime"
    },
    {
      "decisionId": "materialUsageCostingMethod",
      "question": "Como o consumo de materiais contribui para o custo da obra?",
      "chosen": "Cada consumo é registrado contra uma obra e um item de estoque específico.",
      "alternatives": [
        "O consumo é controlado apenas como ajuste global de estoque",
        "O consumo é consolidado manualmente no encerramento da obra"
      ],
      "journeyRef": "recordProjectMaterialUsage"
    },
    {
      "decisionId": "changeOrderSubmissionPath",
      "question": "Como uma alteração identificada em campo segue para tratamento?",
      "chosen": "O coordenador registra a alteração e a encaminha ao gerente de projeto para decisão.",
      "alternatives": [
        "O coordenador aprova a alteração diretamente",
        "A equipe de faturamento decide toda alteração recebida"
      ],
      "journeyRef": "submitChangeOrder"
    },
    {
      "decisionId": "approvedChangeOrderBillingHandling",
      "question": "Como uma ordem de mudança aprovada segue para faturamento?",
      "chosen": "A aprovação encaminha a ordem de mudança à equipe de faturamento.",
      "alternatives": [
        "A aprovação apenas atualiza a obra sem encaminhamento",
        "O gerente emite a fatura diretamente ao aprovar"
      ],
      "journeyRef": "approveChangeOrder"
    },
    {
      "decisionId": "declinedChangeOrderNotification",
      "question": "Como o resultado de uma ordem de mudança recusada é comunicado?",
      "chosen": "A recusa é registrada e encaminhada ao coordenador de campo que submeteu a alteração.",
      "alternatives": [
        "A recusa é apenas registrada sem encaminhamento",
        "A recusa é encaminhada diretamente ao cliente"
      ],
      "journeyRef": "declineChangeOrder"
    },
    {
      "decisionId": "invoiceCompositionPolicy",
      "question": "Quais valores compõem uma fatura da obra?",
      "chosen": "A equipe de faturamento emite a fatura a partir do resumo de faturamento da obra, que incorpora as ordens de mudança aprovadas.",
      "alternatives": [
        "A equipe informa valores sem consultar o resumo da obra",
        "Cada ordem de mudança aprovada gera automaticamente uma fatura separada"
      ],
      "journeyRef": "issueProjectInvoice"
    },
    {
      "decisionId": "statusReportPublicationControl",
      "question": "Como o relatório gerado por IA é comunicado ao cliente?",
      "chosen": "O gerente revisa e publica o relatório antes de encaminhá-lo ao cliente.",
      "alternatives": [
        "O relatório é publicado automaticamente após a geração",
        "O relatório permanece apenas para uso interno"
      ],
      "journeyRef": "generateAndPublishProjectStatusReport"
    },
    {
      "decisionId": "clientInformationAccessScope",
      "question": "Quais informações o cliente consulta sobre sua obra?",
      "chosen": "O cliente consulta relatórios de status publicados e o resumo de faturamento de suas obras.",
      "alternatives": [
        "O cliente consulta também registros internos detalhados de horas e materiais",
        "O cliente recebe somente faturas sem status da obra"
      ],
      "journeyRef": "consultClientProjectUpdates"
    }
  ],
  "policyDecisionSelections": [
    {
      "decisionId": "portfolioAttentionRouting",
      "generatedChoice": "O gerente encaminha a obra selecionada ao coordenador de campo para acompanhamento da execução.",
      "selectedChoice": "O gerente encaminha a obra selecionada ao coordenador de campo para acompanhamento da execução.",
      "selectedBy": "human",
      "selectedAt": "2026-08-17T18:29:46.240Z"
    },
    {
      "decisionId": "taskAssignmentOwnership",
      "generatedChoice": "O coordenador de campo seleciona o trabalhador responsável antes de encaminhar a tarefa.",
      "selectedChoice": "O coordenador de campo seleciona o trabalhador responsável antes de encaminhar a tarefa.",
      "selectedBy": "human",
      "selectedAt": "2026-08-17T18:29:46.240Z"
    },
    {
      "decisionId": "taskProgressReportingCadence",
      "generatedChoice": "O trabalhador atualiza o andamento ao concluir ou alterar significativamente o estado da tarefa.",
      "selectedChoice": "O trabalhador atualiza o andamento ao concluir ou alterar significativamente o estado da tarefa.",
      "selectedBy": "human",
      "selectedAt": "2026-08-17T18:29:46.240Z"
    },
    {
      "decisionId": "timeLogAttribution",
      "generatedChoice": "Cada registro de horas é associado a um trabalhador e a uma tarefa específica.",
      "selectedChoice": "Cada registro de horas é associado a um trabalhador e a uma tarefa específica.",
      "selectedBy": "human",
      "selectedAt": "2026-08-17T18:29:46.240Z"
    },
    {
      "decisionId": "materialUsageCostingMethod",
      "generatedChoice": "Cada consumo é registrado contra uma obra e um item de estoque específico.",
      "selectedChoice": "Cada consumo é registrado contra uma obra e um item de estoque específico.",
      "selectedBy": "human",
      "selectedAt": "2026-08-17T18:29:46.240Z"
    },
    {
      "decisionId": "changeOrderSubmissionPath",
      "generatedChoice": "O coordenador registra a alteração e a encaminha ao gerente de projeto para decisão.",
      "selectedChoice": "O coordenador registra a alteração e a encaminha ao gerente de projeto para decisão.",
      "selectedBy": "human",
      "selectedAt": "2026-08-17T18:29:46.240Z"
    },
    {
      "decisionId": "approvedChangeOrderBillingHandling",
      "generatedChoice": "A aprovação encaminha a ordem de mudança à equipe de faturamento.",
      "selectedChoice": "A aprovação encaminha a ordem de mudança à equipe de faturamento.",
      "selectedBy": "human",
      "selectedAt": "2026-08-17T18:29:46.240Z"
    },
    {
      "decisionId": "declinedChangeOrderNotification",
      "generatedChoice": "A recusa é registrada e encaminhada ao coordenador de campo que submeteu a alteração.",
      "selectedChoice": "A recusa é registrada e encaminhada ao coordenador de campo que submeteu a alteração.",
      "selectedBy": "human",
      "selectedAt": "2026-08-17T18:29:46.240Z"
    },
    {
      "decisionId": "invoiceCompositionPolicy",
      "generatedChoice": "A equipe de faturamento emite a fatura a partir do resumo de faturamento da obra, que incorpora as ordens de mudança aprovadas.",
      "selectedChoice": "A equipe de faturamento emite a fatura a partir do resumo de faturamento da obra, que incorpora as ordens de mudança aprovadas.",
      "selectedBy": "human",
      "selectedAt": "2026-08-17T18:29:46.240Z"
    },
    {
      "decisionId": "statusReportPublicationControl",
      "generatedChoice": "O gerente revisa e publica o relatório antes de encaminhá-lo ao cliente.",
      "selectedChoice": "O gerente revisa e publica o relatório antes de encaminhá-lo ao cliente.",
      "selectedBy": "human",
      "selectedAt": "2026-08-17T18:29:46.240Z"
    },
    {
      "decisionId": "clientInformationAccessScope",
      "generatedChoice": "O cliente consulta relatórios de status publicados e o resumo de faturamento de suas obras.",
      "selectedChoice": "O cliente consulta relatórios de status publicados e o resumo de faturamento de suas obras.",
      "selectedBy": "human",
      "selectedAt": "2026-08-17T18:29:46.240Z"
    }
  ],
  "systemDecisions": [
    {
      "decisionId": "moduleWithoutDecide.judgeUnavailable",
      "stage": "e2",
      "question": "A necessidade de decisões ou aprovações nas jornadas do módulo foi avaliada nesta versão?",
      "chosen": "Não avaliada; as jornadas atuais foram preservadas.",
      "alternatives": [
        "Não avaliada; as jornadas atuais foram preservadas.",
        "Reavaliar a cobertura de decisões em uma nova revisão."
      ],
      "decidedBy": "system",
      "findingRef": "moduleWithoutDecide.judgeUnavailable",
      "changeHint": "Peça uma nova revisão do E2 para avaliar decisões e aprovações."
    }
  ],
  "realizationHash": "sha256:de6d52f838ae70b889b22759ce4bac412e8339e6b5a16022fd443de3af5d8a8a"
} as const satisfies Ns4JourneyIndex;

export type BuildFlowFsmJourneyIndexType = typeof buildFlowFsmJourneyIndex;

export default buildFlowFsmJourneyIndex;
