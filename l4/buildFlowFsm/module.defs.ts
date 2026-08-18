/// <mls fileReference="_102046_/l4/buildFlowFsm/module.defs.ts" enhancement="_blank"/>

import type { Ns4ModuleArtifact } from '/_102020_/l2/agentNewSolution/types.js';

export const buildFlowFsmModule = {
  "schemaVersion": "2026-08-06-ns4-module-v4",
  "presentation": {
    "userLanguage": "pt-BR",
    "stepTitles": {
      "e1-clarification": "Defina o ponto de partida",
      "e1-compile": "Revise o resumo do aplicativo",
      "e2-journeys": "Veja as jornadas principais",
      "e3-access-matrix": "Confira os acessos por perfil",
      "e4-ontology": "Explore os conceitos do negócio",
      "e5-rules": "Revise as regras do negócio",
      "e6-behaviors": "Revise módulos e extensões",
      "e7-realization": "Acompanhe a concretização",
      "e8-workspaces": "Organize os espaços de trabalho",
      "e9-navigation-compiler": "Veja a navegação final",
      "e10-validation": "Valide a solução"
    }
  },
  "module": {
    "moduleName": "buildFlowFsm",
    "title": "BuildFlow FSM",
    "purpose": "Apoiar empresas de construção, reforma e serviços de campo nos EUA no custeio de obras, na coordenação da equipe de campo e na comunicação profissional com o cliente.",
    "languages": [
      "pt-BR",
      "en",
      "es"
    ]
  },
  "designContext": {
    "initialPrompt": "Gere um aplicativo profissional chamado buildFlowFsm para empresas de construção, reforma e serviços de campo nos EUA. Entidades principais: Project (nome, cliente, endereço, status, orçamento, datas de início/fim), WorkTask (projeto, assigned_to, descrição, status, prazo), uso de Material/Inventory, TimeLog (trabalhador, tarefa, horas), ChangeOrder, Invoice. Telas principais: Dashboard (projetos ativos, orçamento vs real, tarefas próximas), lista de projetos + detalhe (timeline tipo Gantt ou lista de tarefas), atribuição de tarefas e registro diário, rastreamento de materiais por projeto, resumo de faturamento do cliente. Recurso LLM: Na tela de detalhe do projeto, botão \"Generate Status Report\" que cria um resumo profissional a partir de tarefas, time logs e materiais. Também sugere \"tarefas em risco de atraso\". Foco: custeio de obras, coordenação da equipe de campo e comunicação com o cliente — específico para construção/serviços de campo. linguagem: pt, en, es",
    "clarification": {
      "mainActors": "Gerente de projeto, Coordenador de campo, Trabalhador de campo, Equipe administrativa de faturamento, Cliente",
      "mainGoal": "Controlar custos e execução de obras, coordenar equipes de campo, acompanhar materiais e manter o cliente informado com status e faturamento.",
      "boundaries": "in: Projetos de construção, reforma e serviços de campo com nome, cliente, endereço, status, orçamento e datas de início/fim; in: WorkTasks por projeto, com responsável, descrição, status e prazo; in: Uso de Material/Inventory por projeto; in: TimeLog de trabalhador, tarefa e horas; in: ChangeOrder e Invoice ligados ao projeto e ao cliente; in: Dashboard de projetos ativos, orçamento versus real e tarefas próximas; in: Lista e detalhe do projeto com timeline tipo Gantt ou lista de tarefas; in: Atribuição de tarefas, registro diário e rastreamento de materiais; in: Resumo de faturamento do cliente; in: Geração de Status Report por LLM no detalhe do projeto, com sugestão de tarefas em risco de atraso; out: RH, folha de pagamento e ponto biométrico; out: Contabilidade geral ou ERP financeiro completo; out: CRM de vendas, prospecção e orçamentação comercial pré-contrato; out: Projeto de engenharia, CAD, BIM ou memorial descritivo técnico; out: Gestão de frota, equipamentos pesados e compras corporativas além do consumo da obra; out: Integrações com sistemas externos não declaradas pelo usuário"
    }
  },
  "reviewPolicy": {
    "mode": "guided"
  },
  "solutionStrategy": {
    "mode": "newSolution",
    "rationale": "A solicitação descreve um aplicativo profissional novo, sem sistema legado, preservação de banco existente ou migração de dados.",
    "databaseChangePolicy": "new"
  },
  "businessScope": {
    "mainGoal": "Controlar custos e execução de obras, coordenar equipes de campo, acompanhar materiais e manter o cliente informado com status e faturamento.",
    "actors": [
      {
        "actorId": "projectManager",
        "title": "Gerente de projeto",
        "kind": "internal",
        "expectedOutcome": "Enxergar orçamento versus realizado, prazos, alterações e status consolidado de cada obra."
      },
      {
        "actorId": "fieldCoordinator",
        "title": "Coordenador de campo",
        "kind": "internal",
        "expectedOutcome": "Atribuir tarefas, acompanhar o registro diário e manter a execução alinhada ao cronograma."
      },
      {
        "actorId": "fieldWorker",
        "title": "Trabalhador de campo",
        "kind": "internal",
        "expectedOutcome": "Registrar horas, andamento das tarefas e consumo de materiais da obra."
      },
      {
        "actorId": "billingStaff",
        "title": "Equipe administrativa de faturamento",
        "kind": "internal",
        "expectedOutcome": "Acompanhar change orders e emitir o resumo de faturamento do cliente."
      },
      {
        "actorId": "client",
        "title": "Cliente",
        "kind": "external",
        "expectedOutcome": "Receber comunicação clara sobre status da obra, alterações e valores a faturar."
      }
    ],
    "expectedOutcomes": [
      {
        "outcomeId": "jobCostControl",
        "title": "Custeio da obra sob controle",
        "description": "Comparar orçamento e realizado com base em horas, materiais, alterações e faturas do projeto."
      },
      {
        "outcomeId": "fieldCoordination",
        "title": "Equipe de campo coordenada",
        "description": "Distribuir WorkTasks, registrar o diário de obra e antecipar tarefas em risco de atraso."
      },
      {
        "outcomeId": "materialVisibility",
        "title": "Materiais rastreados por projeto",
        "description": "Vincular uso de Material/Inventory a cada obra para apoiar custo e execução."
      },
      {
        "outcomeId": "clientStatusAndBilling",
        "title": "Cliente informado e faturamento resumido",
        "description": "Gerar relatório profissional de status e apresentar o resumo de faturamento com ChangeOrders e Invoices."
      }
    ],
    "inScope": [
      "Projetos de construção, reforma e serviços de campo com nome, cliente, endereço, status, orçamento e datas de início/fim",
      "WorkTasks por projeto, com responsável, descrição, status e prazo",
      "Uso de Material/Inventory por projeto",
      "TimeLog de trabalhador, tarefa e horas",
      "ChangeOrder e Invoice ligados ao projeto e ao cliente",
      "Dashboard de projetos ativos, orçamento versus real e tarefas próximas",
      "Lista e detalhe do projeto com timeline tipo Gantt ou lista de tarefas",
      "Atribuição de tarefas, registro diário e rastreamento de materiais",
      "Resumo de faturamento do cliente",
      "Geração de Status Report por LLM no detalhe do projeto, com sugestão de tarefas em risco de atraso"
    ],
    "outOfScope": [
      "RH, folha de pagamento e ponto biométrico",
      "Contabilidade geral ou ERP financeiro completo",
      "CRM de vendas, prospecção e orçamentação comercial pré-contrato",
      "Projeto de engenharia, CAD, BIM ou memorial descritivo técnico",
      "Gestão de frota, equipamentos pesados e compras corporativas além do consumo da obra",
      "Integrações com sistemas externos não declaradas pelo usuário"
    ]
  },
  "localization": {
    "productLanguages": [
      "pt-BR",
      "en",
      "es"
    ],
    "defaultLanguage": "pt-BR",
    "defaultLocale": "",
    "currency": "",
    "timeZone": "",
    "primaryMarket": ""
  },
  "declaredConstraints": {
    "mandatoryIntegrations": [],
    "regulatoryNotes": "",
    "criticalNotes": ""
  },
  "specStatus": {
    "flowId": "agentNewSolution",
    "flowVersion": "2026-08-14-ns4-flow-v40",
    "state": "complete",
    "artifactCompleteness": "full",
    "completedSteps": [
      {
        "stepId": "e1",
        "status": "approved",
        "approvedBy": "human",
        "approvedAt": "2026-08-17T18:07:37.354Z"
      },
      {
        "stepId": "e2-journeys",
        "status": "approved",
        "approvedBy": "human",
        "approvedAt": "2026-08-17T18:29:46.240Z"
      },
      {
        "stepId": "e3-access-matrix",
        "status": "approved",
        "approvedBy": "human",
        "approvedAt": "2026-08-17T18:45:12.209Z"
      },
      {
        "stepId": "e4-ontology",
        "status": "approved",
        "approvedBy": "human",
        "approvedAt": "2026-08-17T19:09:05.326Z"
      },
      {
        "stepId": "e5-rules",
        "status": "approved",
        "approvedBy": "human",
        "approvedAt": "2026-08-17T19:31:13.196Z"
      },
      {
        "stepId": "e6-behaviors",
        "status": "approved",
        "approvedBy": "human",
        "approvedAt": "2026-08-17T19:32:29.617Z"
      },
      {
        "stepId": "e7-realization",
        "status": "approved",
        "approvedBy": "auto",
        "approvedAt": "2026-08-17T19:33:13.791Z"
      },
      {
        "stepId": "e8-workspaces",
        "status": "approved",
        "approvedBy": "auto",
        "approvedAt": "2026-08-17T19:33:53.451Z"
      },
      {
        "stepId": "e9-navigation-compiler",
        "status": "approved",
        "approvedBy": "auto",
        "approvedAt": "2026-08-17T19:33:54.203Z"
      },
      {
        "stepId": "e10-validation",
        "status": "approved",
        "approvedBy": "auto",
        "approvedAt": "2026-08-17T19:33:54.849Z"
      }
    ],
    "nextStep": "complete",
    "updatedAt": "2026-08-17T19:33:54.849Z"
  }
} as const satisfies Ns4ModuleArtifact;

export type BuildFlowFsmModuleType = typeof buildFlowFsmModule;

export default buildFlowFsmModule;
