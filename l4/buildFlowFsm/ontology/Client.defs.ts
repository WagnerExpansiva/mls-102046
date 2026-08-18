/// <mls fileReference="_102046_/l4/buildFlowFsm/ontology/Client.defs.ts" enhancement="_blank"/>

import type { Ns4OntologyEntityArtifact } from '/_102020_/l2/agentNewSolution4/types.js';

export const buildFlowFsmEntityClient = {
  "schemaVersion": "2026-08-11-ns4-ontology-v6",
  "moduleName": "buildFlowFsm",
  "userLanguage": "pt-BR",
  "solutionMode": "new",
  "entityId": "Client",
  "title": "Cliente",
  "description": "Cadastro organizacional reutilizável do cliente responsável por uma ou mais obras e pelo respectivo relacionamento de faturamento e comunicação.",
  "kind": "mdm",
  "ownership": "moduleOwned",
  "sourceRefs": {
    "journeyIds": [
      "submitChangeOrder",
      "issueProjectInvoice",
      "consultClientProjectUpdates",
      "consultApprovedProjectChangeOrders"
    ],
    "featureIds": [
      "changeOrderControl",
      "clientBilling",
      "clientCommunication"
    ],
    "authorityRefs": [
      "buildflowfsm:fieldchange",
      "buildflowfsm:billing",
      "buildflowfsm:changemanage",
      "buildflowfsm:clientapproval",
      "buildflowfsm:clientupdates"
    ]
  },
  "fields": [
    {
      "fieldId": "clientId",
      "title": "Identificador do cliente",
      "type": "uuid",
      "required": true,
      "description": "Identificador estável do cadastro mestre do cliente, transportado como contexto entre obras, ordens de mudança, faturas e consultas relacionadas.",
      "constraints": [
        {
          "constraintId": "uniqueClientId",
          "kind": "unique",
          "value": "true",
          "description": "Cada cadastro mestre de cliente possui um identificador estável exclusivo.",
          "source": "inferred"
        }
      ]
    },
    {
      "fieldId": "clientName",
      "title": "Nome do cliente",
      "type": "string",
      "required": true,
      "description": "Nome de identificação do cliente organizacional usado para localizá-lo e relacionar suas obras, faturamento e comunicações.",
      "constraints": []
    },
    {
      "fieldId": "contactEmail",
      "title": "E-mail de contato",
      "type": "string",
      "required": false,
      "description": "Endereço de e-mail de contato do cliente para a comunicação sobre informações e documentos disponibilizados.",
      "constraints": [
        {
          "constraintId": "contactEmailFormat",
          "kind": "format",
          "value": "email",
          "description": "Quando informado, o e-mail de contato deve ter formato de endereço de e-mail válido.",
          "source": "inferred"
        }
      ]
    },
    {
      "fieldId": "contactPhone",
      "title": "Telefone de contato",
      "type": "string",
      "required": false,
      "description": "Telefone de contato do cliente para comunicação relacionada às suas obras.",
      "constraints": []
    }
  ],
  "lifecycleStates": [],
  "lifecyclePredicates": [],
  "useRules": [],
  "storage": {
    "target": "mdm",
    "scope": "organization",
    "idField": "clientId",
    "mdmType": "buildFlowFsm.Client",
    "notes": "Cadastro mestre de cliente compartilhado por projetos, ordens de mudança, faturas e resumos."
  },
  "ontologyHash": "sha256:ccf85b9aa79778e03472ce6b85f7a5115aac1833953bd2dbe33518d92ab2aeb7",
  "approvedBy": "human",
  "approvedAt": "2026-08-17T19:09:05.326Z"
} as const satisfies Ns4OntologyEntityArtifact;

export type BuildFlowFsmEntityClientType = typeof buildFlowFsmEntityClient;

export default buildFlowFsmEntityClient;
