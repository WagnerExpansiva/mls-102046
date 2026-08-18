/// <mls fileReference="_102046_/l4/buildFlowFsm/ontology/ClientPortalAccess.defs.ts" enhancement="_blank"/>

import type { Ns4OntologyEntityArtifact } from '/_102020_/l2/agentNewSolution4/types.js';

export const buildFlowFsmEntityClientPortalAccess = {
  "schemaVersion": "2026-08-11-ns4-ontology-v6",
  "moduleName": "buildFlowFsm",
  "userLanguage": "pt-BR",
  "solutionMode": "new",
  "entityId": "ClientPortalAccess",
  "title": "Vínculo de acesso do cliente",
  "description": "Associação durável entre um cliente e um usuário externo da plataforma, usada para comprovar quais obras e comunicações publicadas pertencem ao cliente autenticado.",
  "kind": "core",
  "ownership": "moduleOwned",
  "sourceRefs": {
    "journeyIds": [
      "approveChangeOrder",
      "consultClientProjectUpdates",
      "consultApprovedProjectChangeOrders"
    ],
    "featureIds": [
      "changeOrderControl",
      "clientBilling",
      "clientCommunication"
    ],
    "authorityRefs": [
      "buildflowfsm:clientapproval",
      "buildflowfsm:clientupdates"
    ]
  },
  "fields": [
    {
      "fieldId": "clientPortalAccessId",
      "title": "Identificador do vínculo de acesso do cliente",
      "type": "uuid",
      "required": true,
      "description": "Identificador estável do vínculo de acesso, transportado entre etapas conectadas da jornada.",
      "constraints": [
        {
          "constraintId": "uniqueClientPortalAccessId",
          "kind": "unique",
          "value": "true",
          "description": "Cada vínculo de acesso do cliente possui um identificador estável exclusivo.",
          "source": "inferred"
        }
      ]
    },
    {
      "fieldId": "clientId",
      "title": "Cliente associado",
      "type": "uuid",
      "required": true,
      "description": "Referência de contexto ao cliente ao qual o usuário externo está associado.",
      "constraints": []
    },
    {
      "fieldId": "platformUserId",
      "title": "Usuário externo da plataforma",
      "type": "uuid",
      "required": true,
      "description": "Referência de contexto ao usuário externo da plataforma associado ao cliente.",
      "constraints": []
    },
    {
      "fieldId": "status",
      "title": "Status do vínculo de acesso",
      "type": "string",
      "required": true,
      "description": "Indica se o vínculo atualmente concede ou não associação do usuário ao cliente.",
      "constraints": [
        {
          "constraintId": "clientPortalAccessStatusEnum",
          "kind": "enum",
          "value": "[\"active\",\"revoked\"]",
          "description": "O status do vínculo é ativo ou revogado.",
          "source": "inferred"
        }
      ],
      "enum": [
        "active",
        "revoked"
      ]
    }
  ],
  "lifecycleStates": [
    "active",
    "revoked"
  ],
  "statusEnum": [
    "active",
    "revoked"
  ],
  "initialState": "active",
  "terminalStates": [
    "revoked"
  ],
  "lifecyclePredicates": [
    {
      "predicateId": "activeClientPortalAccess",
      "description": "O vínculo concede associação de cliente enquanto estiver ativo.",
      "stateIds": [
        "active"
      ],
      "source": "inferred"
    }
  ],
  "useRules": [
    "activeClientPortalAccess"
  ],
  "storage": {
    "target": "moduleDatabase",
    "scope": "module",
    "idField": "clientPortalAccessId",
    "notes": "Registro operacional de associação externa; não recria autenticação nem usuários da plataforma."
  },
  "ontologyHash": "sha256:ccf85b9aa79778e03472ce6b85f7a5115aac1833953bd2dbe33518d92ab2aeb7",
  "approvedBy": "human",
  "approvedAt": "2026-08-17T19:09:05.326Z"
} as const satisfies Ns4OntologyEntityArtifact;

export type BuildFlowFsmEntityClientPortalAccessType = typeof buildFlowFsmEntityClientPortalAccess;

export default buildFlowFsmEntityClientPortalAccess;
