/// <mls fileReference="_102046_/l4/buildFlowFsm/usecases/index.defs.ts" enhancement="_blank"/>

import type { Ns4UseCaseIndexArtifactV3 } from '/_102020_/l2/agentNewSolution4/types.js';

export const buildFlowFsmUseCaseIndex = {
  "schemaVersion": "2026-08-10-ns4-usecase-index-v3",
  "moduleName": "buildFlowFsm",
  "userLanguage": "pt-BR",
  "sourceHashes": {
    "journeys": [
      {
        "journeyId": "reviewProjectPortfolio",
        "businessHash": "sha256:891adc546d2653aa4f33541c209547512fbe229f94299fc956edf1277c3fb222"
      },
      {
        "journeyId": "assignWorkTask",
        "businessHash": "sha256:cdbcb3a3ad03be4ad68ccf7b47b3f2b347ad66e0ff5ba03fff10b36888eab801"
      },
      {
        "journeyId": "updateWorkTaskProgress",
        "businessHash": "sha256:48192c1ca691362a95a952f0318683b326e4963ef6c4f184eda6f987975eb7fe"
      },
      {
        "journeyId": "recordWorkTime",
        "businessHash": "sha256:44b320707bc484ad97793f6e6d7c46c78917e142a326b806810007d379b98ad5"
      },
      {
        "journeyId": "recordProjectMaterialUsage",
        "businessHash": "sha256:6a1aff3069802a281c21a0e2d32f888aeaa83d8657c97de3bc2afb4715dd6b28"
      },
      {
        "journeyId": "submitChangeOrder",
        "businessHash": "sha256:7a3a3d284888ad73cf1bb49fb05556adeeec816694b299a7e7af2d4930a22b0e"
      },
      {
        "journeyId": "forwardChangeOrderForClientApproval",
        "businessHash": "sha256:c0a982b3347ed3fc7556c87549ed804d96411db8cb9511615578d5a71933d5cf"
      },
      {
        "journeyId": "approveChangeOrder",
        "businessHash": "sha256:fdb7fad37b2aef98b3454d6b76429aade62571518fa4c1cdce697cfdfab79b2a"
      },
      {
        "journeyId": "declineChangeOrder",
        "businessHash": "sha256:4eebbd9234b3e8986c1bb68ffc58d447a046d2e56dd1539d618d043c4592f102"
      },
      {
        "journeyId": "issueProjectInvoice",
        "businessHash": "sha256:8885b209892bab2b2cfb2dc50b3f17b24938dab59a6afcb19ca4b40b233ddfc1"
      },
      {
        "journeyId": "generateAndPublishProjectStatusReport",
        "businessHash": "sha256:c8d871cd8eeebd637bdcc544ddec3c72b243892f213a611e2ba0097521b2ab78"
      },
      {
        "journeyId": "consultClientProjectUpdates",
        "businessHash": "sha256:a433187c999cb8a3b002bac545bbb5063c815cbe624d65c9ff6ecc214bf95f45"
      },
      {
        "journeyId": "monitorDailyProjectRecords",
        "businessHash": "sha256:d30f1bb4a9e2b06ee2b5b83316e6f2ea789c6c7c4634b9cbdc720b55dbdf49e8"
      },
      {
        "journeyId": "consultApprovedProjectChangeOrders",
        "businessHash": "sha256:87f34d1d637c9ce21c57f8bdc9272519d900fcde870dbb7fd4d7021732c6a613"
      }
    ],
    "ontologyHash": "sha256:ccf85b9aa79778e03472ce6b85f7a5115aac1833953bd2dbe33518d92ab2aeb7",
    "rulesHash": "sha256:bca2794185272cf67b9c4fc198aa6cb88cd6ffa37c4c55d52b07702e5acadd99"
  },
  "useCases": [
    {
      "useCaseId": "approveChangeOrderDecision",
      "title": "Aprovar a ordem de mudança",
      "kind": "command",
      "compiledFrom": [
        "approveChangeOrder.approveChangeOrderDecision"
      ],
      "useCaseHash": "sha256:6da32c48c635d65df73999a4ebf62c98fa0b755db31cd25eac44b6153e18e265",
      "artifactPath": "l4/buildFlowFsm/usecases/approveChangeOrderDecision.defs.ts"
    },
    {
      "useCaseId": "createChangeOrder",
      "title": "Registrar a alteração proposta",
      "kind": "command",
      "compiledFrom": [
        "submitChangeOrder.createChangeOrder"
      ],
      "useCaseHash": "sha256:8684ecca44ae0be801ea46f63792e1205366cc221f49c9f62a97ee56fc2b68dd",
      "artifactPath": "l4/buildFlowFsm/usecases/createChangeOrder.defs.ts"
    },
    {
      "useCaseId": "createInvoice",
      "title": "Emitir a fatura",
      "kind": "command",
      "compiledFrom": [
        "issueProjectInvoice.createInvoice"
      ],
      "useCaseHash": "sha256:778f9dd1b8b39a76540133f8fa9ff0c79051d9c72e0ee52d0f19640c15da0fda",
      "artifactPath": "l4/buildFlowFsm/usecases/createInvoice.defs.ts"
    },
    {
      "useCaseId": "createMaterialUsage",
      "title": "Registrar o consumo de material",
      "kind": "command",
      "compiledFrom": [
        "recordProjectMaterialUsage.createMaterialUsage"
      ],
      "useCaseHash": "sha256:9a919420a82294b2e8a4dec0a705cf52425e27831ed2c0d6ed6d0f47ab9a396e",
      "artifactPath": "l4/buildFlowFsm/usecases/createMaterialUsage.defs.ts"
    },
    {
      "useCaseId": "createStatusReport",
      "title": "Gerar relatório profissional de status",
      "kind": "command",
      "compiledFrom": [
        "generateAndPublishProjectStatusReport.createStatusReport"
      ],
      "useCaseHash": "sha256:147d7cbf19b990cbb982dcc2c53c8931447578f7fda2242a7acea9161ca854e2",
      "artifactPath": "l4/buildFlowFsm/usecases/createStatusReport.defs.ts"
    },
    {
      "useCaseId": "createTimeLog",
      "title": "Registrar as horas trabalhadas",
      "kind": "command",
      "compiledFrom": [
        "recordWorkTime.createTimeLog"
      ],
      "useCaseHash": "sha256:7b9fb5252910fdb8b7df07600bd750a552c0a386a7193bafb108899632fa8228",
      "artifactPath": "l4/buildFlowFsm/usecases/createTimeLog.defs.ts"
    },
    {
      "useCaseId": "createWorkTask",
      "title": "Registrar a tarefa atribuída",
      "kind": "command",
      "compiledFrom": [
        "assignWorkTask.createWorkTask"
      ],
      "useCaseHash": "sha256:3631cf176205165e2b6fc6de947366e6d9ba3224a775f9b1fb4a93bf3983aac6",
      "artifactPath": "l4/buildFlowFsm/usecases/createWorkTask.defs.ts"
    },
    {
      "useCaseId": "declineChangeOrderDecision",
      "title": "Recusar a ordem de mudança",
      "kind": "command",
      "compiledFrom": [
        "declineChangeOrder.declineChangeOrderDecision"
      ],
      "useCaseHash": "sha256:6e3005039306e8655d455d42af124b2891e67bb46692709b67ee443d86ee672a",
      "artifactPath": "l4/buildFlowFsm/usecases/declineChangeOrderDecision.defs.ts"
    },
    {
      "useCaseId": "handoffApprovedChangeOrderToBilling",
      "title": "Encaminhar a alteração aprovada ao faturamento",
      "kind": "command",
      "compiledFrom": [
        "approveChangeOrder.handoffApprovedChangeOrderToBilling"
      ],
      "useCaseHash": "sha256:90ee8d5ba69e4d30ca9261db28ddad83a8db70aecb02011e4a89968b9db1eeaa",
      "artifactPath": "l4/buildFlowFsm/usecases/handoffApprovedChangeOrderToBilling.defs.ts"
    },
    {
      "useCaseId": "handoffChangeOrderToClient",
      "title": "Solicitar aprovação do cliente",
      "kind": "command",
      "compiledFrom": [
        "forwardChangeOrderForClientApproval.handoffChangeOrderToClient"
      ],
      "useCaseHash": "sha256:427fe74b7e782016edae071449c88343eae03c0d863baaee87b37e491b2a1b07",
      "artifactPath": "l4/buildFlowFsm/usecases/handoffChangeOrderToClient.defs.ts"
    },
    {
      "useCaseId": "handoffChangeOrderToProjectManager",
      "title": "Submeter a alteração para tratamento",
      "kind": "command",
      "compiledFrom": [
        "submitChangeOrder.handoffChangeOrderToProjectManager"
      ],
      "useCaseHash": "sha256:36b7fc60f60c8c189efdc2a012e20565eedeb94f9ff5dbc910c5fec03e116bed",
      "artifactPath": "l4/buildFlowFsm/usecases/handoffChangeOrderToProjectManager.defs.ts"
    },
    {
      "useCaseId": "handoffDeclinedChangeOrderToFieldCoordinator",
      "title": "Devolver a decisão ao campo",
      "kind": "command",
      "compiledFrom": [
        "declineChangeOrder.handoffDeclinedChangeOrderToFieldCoordinator"
      ],
      "useCaseHash": "sha256:154693952f2037fe46a5c5aef9264bb77de8b31aeedbf0447b81d8e1135e9098",
      "artifactPath": "l4/buildFlowFsm/usecases/handoffDeclinedChangeOrderToFieldCoordinator.defs.ts"
    },
    {
      "useCaseId": "handoffInvoiceToClient",
      "title": "Disponibilizar a fatura ao cliente",
      "kind": "command",
      "compiledFrom": [
        "issueProjectInvoice.handoffInvoiceToClient"
      ],
      "useCaseHash": "sha256:94bd3aa897604250a29bfd44a174609e6078128f65993caf29fe36673dc68582",
      "artifactPath": "l4/buildFlowFsm/usecases/handoffInvoiceToClient.defs.ts"
    },
    {
      "useCaseId": "handoffMaterialUsageToFieldCoordinator",
      "title": "Informar o consumo ao coordenador",
      "kind": "command",
      "compiledFrom": [
        "recordProjectMaterialUsage.handoffMaterialUsageToFieldCoordinator"
      ],
      "useCaseHash": "sha256:c8eaea931a885f46e3c583c518d63a220a86b1c8e981d649fcdf990897571341",
      "artifactPath": "l4/buildFlowFsm/usecases/handoffMaterialUsageToFieldCoordinator.defs.ts"
    },
    {
      "useCaseId": "handoffProjectToFieldCoordinator",
      "title": "Encaminhar a obra para acompanhamento de campo",
      "kind": "command",
      "compiledFrom": [
        "reviewProjectPortfolio.handoffProjectToFieldCoordinator"
      ],
      "useCaseHash": "sha256:eff1ca6ab04b08d2359dcb898c1fb7e979db237bbbe2086fae9ea542d610d24c",
      "artifactPath": "l4/buildFlowFsm/usecases/handoffProjectToFieldCoordinator.defs.ts"
    },
    {
      "useCaseId": "handoffStatusReportToClient",
      "title": "Encaminhar o relatório ao cliente",
      "kind": "command",
      "compiledFrom": [
        "generateAndPublishProjectStatusReport.handoffStatusReportToClient"
      ],
      "useCaseHash": "sha256:784525e68545d9f1ac16ffa1b31eeea39c3fb5a777829d4ecdba0339e34c566f",
      "artifactPath": "l4/buildFlowFsm/usecases/handoffStatusReportToClient.defs.ts"
    },
    {
      "useCaseId": "handoffTimeLogToFieldCoordinator",
      "title": "Encaminhar o registro diário",
      "kind": "command",
      "compiledFrom": [
        "recordWorkTime.handoffTimeLogToFieldCoordinator"
      ],
      "useCaseHash": "sha256:794b710651752c586dc19c02fcb74e955113a6171a7905f34649d7d9b21b4086",
      "artifactPath": "l4/buildFlowFsm/usecases/handoffTimeLogToFieldCoordinator.defs.ts"
    },
    {
      "useCaseId": "handoffWorkTaskProgressToFieldCoordinator",
      "title": "Informar o andamento ao coordenador",
      "kind": "command",
      "compiledFrom": [
        "updateWorkTaskProgress.handoffWorkTaskProgressToFieldCoordinator"
      ],
      "useCaseHash": "sha256:538d2f374933019d924d7ed35dc92bec3728b437b7324bf54bcab28350f7b5a4",
      "artifactPath": "l4/buildFlowFsm/usecases/handoffWorkTaskProgressToFieldCoordinator.defs.ts"
    },
    {
      "useCaseId": "handoffWorkTaskToFieldWorker",
      "title": "Encaminhar a tarefa ao trabalhador",
      "kind": "command",
      "compiledFrom": [
        "assignWorkTask.handoffWorkTaskToFieldWorker"
      ],
      "useCaseHash": "sha256:dc0e5851e3286a654d4b00c6c20cffccd18aa43871294fbbc93322e929df7cf1",
      "artifactPath": "l4/buildFlowFsm/usecases/handoffWorkTaskToFieldWorker.defs.ts"
    },
    {
      "useCaseId": "inspectApprovedChangeOrders",
      "title": "Consultar as alterações aprovadas",
      "kind": "query",
      "compiledFrom": [
        "consultApprovedProjectChangeOrders.inspectApprovedChangeOrders"
      ],
      "useCaseHash": "sha256:d3bce8eb240db7132d5c12bc6dbd7fb6a56c4d5f3e0344c7dea6ae3e26aeba97",
      "artifactPath": "l4/buildFlowFsm/usecases/inspectApprovedChangeOrders.defs.ts"
    },
    {
      "useCaseId": "inspectClientBillingSummary",
      "title": "Consultar o resumo de faturamento",
      "kind": "query",
      "compiledFrom": [
        "consultApprovedProjectChangeOrders.inspectClientBillingSummary",
        "consultClientProjectUpdates.inspectClientBillingSummary",
        "issueProjectInvoice.inspectClientBillingSummary"
      ],
      "useCaseHash": "sha256:36dc9fa7bfbeb33f2b7ac25cfcfd57a4c6a433f5425ebbe150f54ea292ae2d0a",
      "artifactPath": "l4/buildFlowFsm/usecases/inspectClientBillingSummary.defs.ts"
    },
    {
      "useCaseId": "inspectProjectDashboard",
      "title": "Consultar o painel de obras",
      "kind": "query",
      "compiledFrom": [
        "reviewProjectPortfolio.inspectProjectDashboard"
      ],
      "useCaseHash": "sha256:4180d4fd4c2c172669fb0ebe96017f66e453b2616e01a6cac44572042a179c64",
      "artifactPath": "l4/buildFlowFsm/usecases/inspectProjectDashboard.defs.ts"
    },
    {
      "useCaseId": "inspectProjectExecutionOverview",
      "title": "Analisar a execução da obra",
      "kind": "query",
      "compiledFrom": [
        "generateAndPublishProjectStatusReport.inspectProjectExecutionOverview",
        "monitorDailyProjectRecords.inspectProjectExecutionOverview",
        "reviewProjectPortfolio.inspectProjectExecutionOverview"
      ],
      "useCaseHash": "sha256:be0f4994d53d1c61474e55fbd41476609cab1df4bf821859f421e6d99ab198c9",
      "artifactPath": "l4/buildFlowFsm/usecases/inspectProjectExecutionOverview.defs.ts"
    },
    {
      "useCaseId": "inspectProjectMaterialUsages",
      "title": "Consultar os consumos de materiais",
      "kind": "query",
      "compiledFrom": [
        "monitorDailyProjectRecords.inspectProjectMaterialUsages"
      ],
      "useCaseHash": "sha256:e1fd23a1ddb51ddd77701a894715536efd9ad49d817cf3dd0b2f12bdae19270b",
      "artifactPath": "l4/buildFlowFsm/usecases/inspectProjectMaterialUsages.defs.ts"
    },
    {
      "useCaseId": "inspectProjectTimeline",
      "title": "Consultar o cronograma da obra",
      "kind": "query",
      "compiledFrom": [
        "assignWorkTask.inspectProjectTimeline"
      ],
      "useCaseHash": "sha256:883aebd8c8130a914d3109b1fe7c855a64a21934265bc85aabee67f1fb9b6a55",
      "artifactPath": "l4/buildFlowFsm/usecases/inspectProjectTimeline.defs.ts"
    },
    {
      "useCaseId": "inspectProjectTimeLogs",
      "title": "Consultar os registros diários de horas",
      "kind": "query",
      "compiledFrom": [
        "monitorDailyProjectRecords.inspectProjectTimeLogs"
      ],
      "useCaseHash": "sha256:fbc9ba541ef769d454a060f557328e0458c79947f19645dec6f55d3c6383c2ca",
      "artifactPath": "l4/buildFlowFsm/usecases/inspectProjectTimeLogs.defs.ts"
    },
    {
      "useCaseId": "inspectScheduleRiskAssessment",
      "title": "Consultar tarefas em risco de atraso",
      "kind": "query",
      "compiledFrom": [
        "generateAndPublishProjectStatusReport.inspectScheduleRiskAssessment"
      ],
      "useCaseHash": "sha256:8440aeeebf25f29f1cc5048c8c8c29e2850586b732623265c5ef70614398b7cc",
      "artifactPath": "l4/buildFlowFsm/usecases/inspectScheduleRiskAssessment.defs.ts"
    },
    {
      "useCaseId": "inspectStatusReport",
      "title": "Consultar o relatório de status publicado",
      "kind": "query",
      "compiledFrom": [
        "consultClientProjectUpdates.inspectStatusReport"
      ],
      "useCaseHash": "sha256:981256a66c8270b8290c5f793033300f1691359c5781b692b22df6e597ccfac4",
      "artifactPath": "l4/buildFlowFsm/usecases/inspectStatusReport.defs.ts"
    },
    {
      "useCaseId": "locateChangeOrder",
      "title": "Localizar a ordem de mudança submetida",
      "kind": "query",
      "compiledFrom": [
        "approveChangeOrder.locateChangeOrder",
        "declineChangeOrder.locateChangeOrder",
        "forwardChangeOrderForClientApproval.locateChangeOrder"
      ],
      "useCaseHash": "sha256:55b04acf04493685aa27ce50b08bc7f1d39c87ebfc02f040b184e2624d75467a",
      "artifactPath": "l4/buildFlowFsm/usecases/locateChangeOrder.defs.ts"
    },
    {
      "useCaseId": "locateClient",
      "title": "Localizar o cliente",
      "kind": "query",
      "compiledFrom": [
        "issueProjectInvoice.locateClient",
        "submitChangeOrder.locateClient"
      ],
      "useCaseHash": "sha256:bf7475237f836e765e5b5a336c8f739fc031cc539e1c5527c7e7ccffa9ccbacf",
      "artifactPath": "l4/buildFlowFsm/usecases/locateClient.defs.ts"
    },
    {
      "useCaseId": "locateFieldWorker",
      "title": "Selecionar o trabalhador responsável",
      "kind": "query",
      "compiledFrom": [
        "assignWorkTask.locateFieldWorker",
        "recordWorkTime.locateFieldWorker"
      ],
      "useCaseHash": "sha256:de8a75e9a5646526c5696e74cd6fdc584c23a4843954f5589731e2e9d352e062",
      "artifactPath": "l4/buildFlowFsm/usecases/locateFieldWorker.defs.ts"
    },
    {
      "useCaseId": "locateInventoryItem",
      "title": "Selecionar o material consumido",
      "kind": "query",
      "compiledFrom": [
        "recordProjectMaterialUsage.locateInventoryItem"
      ],
      "useCaseHash": "sha256:c9cdc4ad2758962d31e7e08f27cc17a0b6457a3db4886a7812d6698291ee2fa5",
      "artifactPath": "l4/buildFlowFsm/usecases/locateInventoryItem.defs.ts"
    },
    {
      "useCaseId": "locateProject",
      "title": "Selecionar a obra que exige atenção",
      "kind": "query",
      "compiledFrom": [
        "assignWorkTask.locateProject",
        "consultApprovedProjectChangeOrders.locateProject",
        "consultClientProjectUpdates.locateProject",
        "generateAndPublishProjectStatusReport.locateProject",
        "issueProjectInvoice.locateProject",
        "monitorDailyProjectRecords.locateProject",
        "recordProjectMaterialUsage.locateProject",
        "reviewProjectPortfolio.locateProject",
        "submitChangeOrder.locateProject"
      ],
      "useCaseHash": "sha256:df1f986c401de9b9f668ef08a458f438a3e918369ab0b0edc7ff0306a4b2ffea",
      "artifactPath": "l4/buildFlowFsm/usecases/locateProject.defs.ts"
    },
    {
      "useCaseId": "locateWorkTask",
      "title": "Localizar a tarefa atribuída",
      "kind": "query",
      "compiledFrom": [
        "recordWorkTime.locateWorkTask",
        "updateWorkTaskProgress.locateWorkTask"
      ],
      "useCaseHash": "sha256:0e593303eb62dfa053e1e2eb2e18150fce32df2dc49292d9db295c390b844a4c",
      "artifactPath": "l4/buildFlowFsm/usecases/locateWorkTask.defs.ts"
    },
    {
      "useCaseId": "publishStatusReport",
      "title": "Publicar o relatório de status",
      "kind": "command",
      "compiledFrom": [
        "generateAndPublishProjectStatusReport.publishStatusReport"
      ],
      "useCaseHash": "sha256:d96f06d34962fa339677056139fc952118138bcc6eb1caccea0c5ffdcad4fa79",
      "artifactPath": "l4/buildFlowFsm/usecases/publishStatusReport.defs.ts"
    },
    {
      "useCaseId": "updateWorkTask",
      "title": "Registrar o andamento da tarefa",
      "kind": "command",
      "compiledFrom": [
        "updateWorkTaskProgress.updateWorkTask"
      ],
      "useCaseHash": "sha256:379d33343f207f490a23cff1d27db97434deada5b8336fbf08b267038c57cf21",
      "artifactPath": "l4/buildFlowFsm/usecases/updateWorkTask.defs.ts"
    }
  ],
  "realizationHash": "sha256:a5f10d04c54703d39688e08448ab595a4da9bbce50993d1d0fa69ff8ffb8e1c0",
  "generatedAt": "2026-08-17T19:33:13.791Z"
} as const satisfies Ns4UseCaseIndexArtifactV3;

export type BuildFlowFsmUseCaseIndexType = typeof buildFlowFsmUseCaseIndex;

export default buildFlowFsmUseCaseIndex;
