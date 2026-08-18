/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateClientPortalAccess.defs.ts" enhancement="_blank"/>

export const updateClientPortalAccessUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "updateClientPortalAccess",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "updateClientPortalAccess",
    "ports": [
      "ClientPortalAccess",
      "Client",
      "PlatformUser"
    ],
    "rulesApplied": [
      "activeClientPortalAccess"
    ],
    "functions": [
      {
        "functionName": "updateClientPortalAccess",
        "inputTypeName": "UpdateClientPortalAccessInput",
        "outputTypeName": "UpdateClientPortalAccessOutput",
        "input": [
          {
            "name": "clientPortalAccessId",
            "type": "string",
            "required": true,
            "description": "Identificador estável do vínculo de acesso, transportado entre etapas conectadas da jornada.",
            "ofEntity": "ClientPortalAccess",
            "fieldRef": "ClientPortalAccess.clientPortalAccessId",
            "item": {
              "fields": []
            }
          },
          {
            "name": "clientId",
            "type": "string",
            "required": true,
            "description": "Referência de contexto ao cliente ao qual o usuário externo está associado.",
            "ofEntity": "ClientPortalAccess",
            "fieldRef": "ClientPortalAccess.clientId",
            "item": {
              "fields": []
            }
          }
        ],
        "output": [
          {
            "name": "clientPortalAccessId",
            "type": "string",
            "required": true,
            "ofEntity": "ClientPortalAccess"
          },
          {
            "name": "clientId",
            "type": "string",
            "required": true,
            "ofEntity": "ClientPortalAccess"
          },
          {
            "name": "platformUserId",
            "type": "string",
            "required": true,
            "ofEntity": "ClientPortalAccess"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "ClientPortalAccess"
          }
        ],
        "ports": [
          "ClientPortalAccess",
          "Client",
          "PlatformUser"
        ],
        "rulesApplied": [
          "activeClientPortalAccess"
        ],
        "transactional": true,
        "steps": [
          "Iniciar uma transação usando ctx.data apenas como wrapper transacional.",
          "Resolver o platformUserId a partir da sessão do ator e usar o status active como valor padrão do sistema.",
          "Carregar o vínculo ClientPortalAccess pelo clientPortalAccessId através da porta ClientPortalAccess.",
          "Carregar o Client pela porta Client e validar que o clientId selecionado existe.",
          "Validar que o PlatformUser resolvido na sessão existe através da porta PlatformUser.",
          "Aplicar inline a regra activeClientPortalAccess: o vínculo atualizado deve permanecer com status active e não pode deixar mais de um vínculo ativo para a mesma combinação de cliente e usuário; rejeitar a operação com o identificador da regra quando a invariável for violada.",
          "Atualizar o vínculo carregado com clientId, platformUserId e status resolvidos, salvar pela porta ClientPortalAccess e retornar exatamente clientPortalAccessId, clientId, platformUserId e status.",
          "Confirmar a transação."
        ],
        "outputShape": {
          "kind": "object",
          "fields": [
            {
              "name": "clientPortalAccessId",
              "type": "string",
              "required": true,
              "fieldRef": "ClientPortalAccess.clientPortalAccessId"
            },
            {
              "name": "clientId",
              "type": "string",
              "required": true,
              "fieldRef": "ClientPortalAccess.clientId"
            },
            {
              "name": "platformUserId",
              "type": "string",
              "required": true,
              "fieldRef": "ClientPortalAccess.platformUserId"
            },
            {
              "name": "status",
              "type": "string",
              "required": true,
              "fieldRef": "ClientPortalAccess.status"
            }
          ]
        }
      }
    ],
    "mdmRefs": []
  }
} as const;

export default updateClientPortalAccessUsecase;

export const pipeline = [
  {
    "id": "updateClientPortalAccess__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateClientPortalAccess.ts",
    "defPath": "_102046_/l1/buildFlowFsm/layer_2_application/usecases/updateClientPortalAccess.defs.ts",
    "dependsFiles": [
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/clientPortalAccessRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/clientRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_2_application/ports/platformUserRepository.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/clientPortalAccess.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/client.d.ts",
      "_102046_/l1/buildFlowFsm/layer_3_domain/entities/platformUser.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "rulesApplied": [
      "activeClientPortalAccess"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
