/// <mls fileReference="_102046_/l4/buildFlowFsm/ontology/ChangeOrder.defs.ts" enhancement="_blank"/>

import type { Ns4OntologyEntityArtifact } from '/_102020_/l2/agentNewSolution/types.js';

export const buildFlowFsmEntityChangeOrder = {
  "schemaVersion": "2026-08-11-ns4-ontology-v6",
  "moduleName": "buildFlowFsm",
  "userLanguage": "pt-BR",
  "solutionMode": "new",
  "entityId": "ChangeOrder",
  "title": "Ordem de mudança",
  "description": "Proposta formal de alteração vinculada ao cliente e à obra, contendo impacto de escopo, prazo e valor para tratamento gerencial, aprovação do cliente, custeio e faturamento.",
  "kind": "core",
  "ownership": "moduleOwned",
  "sourceRefs": {
    "journeyIds": [
      "submitChangeOrder",
      "forwardChangeOrderForClientApproval",
      "approveChangeOrder",
      "declineChangeOrder",
      "issueProjectInvoice",
      "consultApprovedProjectChangeOrders"
    ],
    "featureIds": [
      "changeOrderControl",
      "jobCostTracking",
      "clientBilling",
      "clientCommunication"
    ],
    "authorityRefs": [
      "buildflowfsm:fieldchange",
      "buildflowfsm:changemanage",
      "buildflowfsm:billing",
      "buildflowfsm:clientapproval",
      "buildflowfsm:clientupdates"
    ]
  },
  "fields": [
    {
      "fieldId": "changeOrderId",
      "title": "ID da ordem de mudança",
      "type": "uuid",
      "required": true,
      "description": "Identificador estável da ordem de mudança, transportado entre as etapas conectadas.",
      "constraints": [
        {
          "constraintId": "uniqueChangeOrderId",
          "kind": "unique",
          "value": "true",
          "description": "Cada ordem de mudança possui um identificador estável exclusivo.",
          "source": "inferred"
        }
      ]
    },
    {
      "fieldId": "clientRef",
      "title": "Cliente",
      "type": "uuid",
      "required": true,
      "description": "Referência de contexto ao cliente para o qual a alteração é proposta, selecionada no catálogo compartilhado.",
      "constraints": []
    },
    {
      "fieldId": "projectRef",
      "title": "Obra",
      "type": "uuid",
      "required": true,
      "description": "Referência de contexto à obra do cliente à qual a alteração está vinculada.",
      "constraints": []
    },
    {
      "fieldId": "description",
      "title": "Descrição da alteração",
      "type": "text",
      "required": true,
      "description": "Descrição da alteração proposta na obra para avaliação gerencial e comunicação ao cliente.",
      "constraints": []
    },
    {
      "fieldId": "scopeImpact",
      "title": "Impacto de escopo",
      "type": "text",
      "required": true,
      "description": "Impacto proposto da alteração no escopo da obra.",
      "constraints": []
    },
    {
      "fieldId": "scheduleImpact",
      "title": "Impacto de prazo",
      "type": "text",
      "required": true,
      "description": "Impacto proposto da alteração no prazo de execução da obra.",
      "constraints": []
    },
    {
      "fieldId": "changeAmount",
      "title": "Valor da alteração",
      "type": "money",
      "required": true,
      "description": "Valor comercial da alteração proposto para aprovação do cliente, custeio e faturamento.",
      "constraints": []
    },
    {
      "fieldId": "submittedAt",
      "title": "Data de submissão",
      "type": "datetime",
      "required": true,
      "description": "Data e hora em que a alteração foi formalizada e submetida para tratamento gerencial.",
      "constraints": []
    },
    {
      "fieldId": "forwardedForClientApprovalAt",
      "title": "Data de encaminhamento ao cliente",
      "type": "datetime",
      "required": false,
      "description": "Data e hora em que a ordem foi encaminhada ao cliente para decisão.",
      "constraints": []
    },
    {
      "fieldId": "status",
      "title": "Status",
      "type": "string",
      "required": true,
      "description": "Estado atual da ordem de mudança no ciclo de tratamento, aprovação do cliente e faturamento.",
      "constraints": [
        {
          "constraintId": "changeOrderStatusEnum",
          "kind": "enum",
          "value": "[\"submitted\",\"pendingClientApproval\",\"approved\",\"declined\"]",
          "description": "O status deve corresponder a um estado definido do ciclo de vida da ordem de mudança.",
          "source": "journey"
        }
      ],
      "enum": [
        "submitted",
        "pendingClientApproval",
        "approved",
        "declined"
      ]
    }
  ],
  "lifecycleStates": [
    "submitted",
    "pendingClientApproval",
    "approved",
    "declined"
  ],
  "statusEnum": [
    "submitted",
    "pendingClientApproval",
    "approved",
    "declined"
  ],
  "initialState": "submitted",
  "terminalStates": [
    "approved",
    "declined"
  ],
  "lifecyclePredicates": [
    {
      "predicateId": "managerActionableChangeOrder",
      "description": "Uma ordem submetida pode ser encaminhada ao cliente ou recusada pelo gerente.",
      "stateIds": [
        "submitted"
      ],
      "source": "journey"
    },
    {
      "predicateId": "clientApprovableChangeOrder",
      "description": "Uma ordem pode ser decidida pelo cliente somente quando estiver pendente de sua aprovação.",
      "stateIds": [
        "pendingClientApproval"
      ],
      "source": "journey"
    },
    {
      "predicateId": "approvedBillableChangeOrder",
      "description": "Uma ordem integra custo autorizado e pode ser incluída no faturamento somente após aprovação.",
      "stateIds": [
        "approved"
      ],
      "source": "journey"
    },
    {
      "predicateId": "clientVisibleApprovedChangeOrder",
      "description": "A consulta do cliente mostra somente ordens de mudança aprovadas.",
      "stateIds": [
        "approved"
      ],
      "source": "inferred"
    }
  ],
  "useRules": [
    "changeOrderRequiresClientAndProject",
    "managerActionableChangeOrder",
    "clientApprovableChangeOrder",
    "approvedBillableChangeOrder",
    "clientVisibleApprovedChangeOrder"
  ],
  "storage": {
    "target": "moduleDatabase",
    "scope": "module",
    "idField": "changeOrderId",
    "notes": "Registro transacional que mantém o ciclo de decisão comercial e os impactos autorizados da alteração."
  },
  "ontologyHash": "sha256:ccf85b9aa79778e03472ce6b85f7a5115aac1833953bd2dbe33518d92ab2aeb7",
  "approvedBy": "human",
  "approvedAt": "2026-08-17T19:09:05.326Z"
} as const satisfies Ns4OntologyEntityArtifact;

export type BuildFlowFsmEntityChangeOrderType = typeof buildFlowFsmEntityChangeOrder;

export default buildFlowFsmEntityChangeOrder;
