/// <mls fileReference="_102046_/l4/buildFlowFsm/journeys/reviewProjectPortfolio.defs.ts" enhancement="_blank"/>

import type { Ns4JourneyArtifact } from '/_102020_/l2/agentNewSolution/types.js';

export const reviewProjectPortfolioJourney = {
  "schemaVersion": "2026-08-14-ns4-journey-realized-v5",
  "journeyId": "reviewProjectPortfolio",
  "revision": 1,
  "business": {
    "actorRef": "projectManager",
    "title": "Monitorar portfólio e direcionar obra",
    "goal": "Identificar obras ativas que exigem atenção de custo ou prazo e direcionar seu acompanhamento.",
    "entry": {
      "mode": "coldStart"
    },
    "steps": [
      {
        "stepId": "inspectProjectDashboard",
        "kind": "inspect",
        "entity": "ProjectDashboard",
        "title": "Consultar o painel de obras",
        "description": "Projetos ativos, orçamento versus realizado e tarefas próximas estão visíveis.",
        "featureRefs": [
          "projectPortfolioMonitoring"
        ]
      },
      {
        "stepId": "locateProject",
        "kind": "locate",
        "entity": "Project",
        "title": "Selecionar a obra que exige atenção",
        "description": "Uma obra do catálogo compartilhado de projetos está selecionada.",
        "featureRefs": [
          "projectPortfolioMonitoring"
        ]
      },
      {
        "stepId": "inspectProjectExecutionOverview",
        "kind": "inspect",
        "entity": "ProjectExecutionOverview",
        "title": "Analisar a execução da obra",
        "description": "Andamento, custos e próximos compromissos da obra estão consolidados.",
        "featureRefs": [
          "projectPortfolioMonitoring",
          "projectScheduleVisibility"
        ]
      },
      {
        "stepId": "handoffProjectToFieldCoordinator",
        "kind": "handoff",
        "entity": "Project",
        "title": "Encaminhar a obra para acompanhamento de campo",
        "description": "O coordenador de campo recebe a obra para coordenar a execução.",
        "featureRefs": [
          "projectPortfolioMonitoring"
        ],
        "targetProfile": "fieldCoordinator"
      }
    ],
    "outcome": {
      "statement": "Uma obra que requer atenção é identificada e encaminhada para coordenação de campo.",
      "evidence": [
        "O painel apresenta projetos ativos, custos realizados e tarefas próximas.",
        "O encaminhamento ao coordenador é observável."
      ]
    },
    "useRules": [
      "activeProjectCostVisibility"
    ]
  },
  "businessHash": "sha256:891adc546d2653aa4f33541c209547512fbe229f94299fc956edf1277c3fb222",
  "resolution": {
    "status": "compiled",
    "contexts": {
      "selectedProjectDashboard": {
        "contextId": "selectedProjectDashboard",
        "businessObject": "ProjectDashboard",
        "cardinality": "one",
        "required": true,
        "sourceRefs": [
          "reviewProjectPortfolio.inspectProjectDashboard"
        ],
        "consumerStepRefs": [
          "reviewProjectPortfolio.inspectProjectDashboard"
        ]
      },
      "selectedProject": {
        "contextId": "selectedProject",
        "businessObject": "Project",
        "cardinality": "one",
        "required": true,
        "idFieldRef": "projectId",
        "sourceRefs": [
          "reviewProjectPortfolio.handoffProjectToFieldCoordinator",
          "reviewProjectPortfolio.locateProject"
        ],
        "consumerStepRefs": [
          "reviewProjectPortfolio.handoffProjectToFieldCoordinator"
        ]
      },
      "selectedProjectExecutionOverview": {
        "contextId": "selectedProjectExecutionOverview",
        "businessObject": "ProjectExecutionOverview",
        "cardinality": "one",
        "required": true,
        "idFieldRef": "projectId",
        "sourceRefs": [
          "reviewProjectPortfolio.inspectProjectExecutionOverview"
        ],
        "consumerStepRefs": [
          "reviewProjectPortfolio.inspectProjectExecutionOverview"
        ]
      }
    }
  },
  "realization": {
    "status": "compiled",
    "compiledFromBusinessHash": "sha256:891adc546d2653aa4f33541c209547512fbe229f94299fc956edf1277c3fb222",
    "steps": [
      {
        "stepId": "inspectProjectDashboard",
        "useCaseRefs": [
          "inspectProjectDashboard"
        ]
      },
      {
        "stepId": "locateProject",
        "useCaseRefs": [
          "locateProject"
        ]
      },
      {
        "stepId": "inspectProjectExecutionOverview",
        "useCaseRefs": [
          "inspectProjectExecutionOverview"
        ]
      },
      {
        "stepId": "handoffProjectToFieldCoordinator",
        "useCaseRefs": [
          "handoffProjectToFieldCoordinator"
        ]
      }
    ],
    "transitionRefs": [],
    "realizationHash": "sha256:6aa741ae555b0bff9cb220a3fa413fc31980609c4c7629c829f0b382a218132e"
  }
} as const satisfies Ns4JourneyArtifact;

export type ReviewProjectPortfolioJourneyType = typeof reviewProjectPortfolioJourney;

export default reviewProjectPortfolioJourney;
