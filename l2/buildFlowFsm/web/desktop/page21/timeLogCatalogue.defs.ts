/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page21/timeLogCatalogue.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "timeLogCatalogue",
  "pageName": "Registro de horas",
  "baseClassName": "BuildFlowFsmTimeLogCatalogueBase",
  "actor": "fieldCoordinator",
  "purpose": "Cadastro de Registro de horas.",
  "presentation": {
    "categoryRef": "entityRecordManagement"
  },
  "pageObjective": {
    "actor": "Trabalhador de campo ou responsável operacional pelo registro de horas",
    "jobToBeDone": "Registrar rapidamente as horas trabalhadas em uma tarefa ou localizar e corrigir um lançamento existente com segurança.",
    "primaryDecision": "Escolher a tarefa e o registro de horas correto para então registrar ou corrigir as horas.",
    "decisiveInfo": [
      "description",
      "dueDate",
      "status",
      "progressUpdate",
      "workDate",
      "hoursWorked",
      "hourlyLaborCost",
      "fieldWorkerId"
    ],
    "usageFrequency": "Recorrente durante ou ao fim de cada jornada de trabalho, potencialmente em sequência de vários lançamentos.",
    "informationHierarchy": [
      "tarefa selecionada e seu contexto",
      "registro de horas selecionado e estado atual",
      "data e quantidade de horas",
      "custo horário e trabalhador associado",
      "ações de registrar, corrigir ou excluir",
      "feedback da operação"
    ],
    "successCriteria": "O usuário identifica a tarefa sem memorizar ids, registra um lançamento com poucos passos e consegue corrigir ou excluir o registro certo sem perder o contexto nem editar campos controlados pelo sistema.",
    "antiPatterns": [
      "formulário CRUD expondo ids técnicos",
      "status como select livre com todos os estados",
      "digitação manual de tarefa ou trabalhador",
      "formulários separados e desconectados para cada operação",
      "exclusão sem confirmação",
      "ocultar o registro atual antes de solicitar uma correção"
    ],
    "criticalActions": [
      {
        "action": "Registrar as horas trabalhadas",
        "presentation": "primary-button no painel contextual de lançamento, com tarefa selecionada e dados mínimos editáveis"
      },
      {
        "action": "Corrigir dados do registro escolhido",
        "presentation": "contextual-transition-actions no detalhe do registro selecionado, preservando o estado atual visível"
      },
      {
        "action": "Remover o registro escolhido",
        "presentation": "inline-row-command contextual à linha selecionada, com confirmação destrutiva"
      },
      {
        "action": "Encontrar o registro",
        "presentation": "master-detail com lista dominante e seleção de linha"
      },
      {
        "action": "Escolher a tarefa de trabalho",
        "presentation": "lookup/picker integrado ao formulário, com descrição e contexto da tarefa"
      }
    ]
  },
  "dataBindings": [
    {
      "id": "binding.timeLogCatalogue.qryListTimeLog",
      "source": "bff.qryListTimeLog",
      "command": "qryListTimeLog",
      "description": "Listar Registro de horas",
      "kind": "query",
      "stateKey": "ui.timeLogCatalogue.data.qryListTimeLog",
      "inputStateKeys": [],
      "inputs": []
    },
    {
      "id": "binding.timeLogCatalogue.cmdCreateTimeLog",
      "source": "bff.cmdCreateTimeLog",
      "command": "cmdCreateTimeLog",
      "description": "Registrar as horas trabalhadas",
      "kind": "command",
      "stateKey": "ui.timeLogCatalogue.output.cmdCreateTimeLog",
      "inputStateKeys": [
        "ui.timeLogCatalogue.input.cmdCreateTimeLog.workTaskWorkTaskId",
        "ui.timeLogCatalogue.input.cmdCreateTimeLog.workDate",
        "ui.timeLogCatalogue.input.cmdCreateTimeLog.hoursWorked",
        "ui.timeLogCatalogue.input.cmdCreateTimeLog.hourlyLaborCost"
      ],
      "inputs": [
        {
          "name": "workTaskWorkTaskId",
          "stateKey": "ui.timeLogCatalogue.input.cmdCreateTimeLog.workTaskWorkTaskId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "workDate",
          "stateKey": "ui.timeLogCatalogue.input.cmdCreateTimeLog.workDate",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "hoursWorked",
          "stateKey": "ui.timeLogCatalogue.input.cmdCreateTimeLog.hoursWorked",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "hourlyLaborCost",
          "stateKey": "ui.timeLogCatalogue.input.cmdCreateTimeLog.hourlyLaborCost",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.timeLogCatalogue.cmdUpdateTimeLog",
      "source": "bff.cmdUpdateTimeLog",
      "command": "cmdUpdateTimeLog",
      "description": "Atualizar Registro de horas",
      "kind": "command",
      "stateKey": "ui.timeLogCatalogue.output.cmdUpdateTimeLog",
      "inputStateKeys": [
        "ui.timeLogCatalogue.input.cmdUpdateTimeLog.timeLogId",
        "ui.timeLogCatalogue.input.cmdUpdateTimeLog.status",
        "ui.timeLogCatalogue.input.cmdUpdateTimeLog.workTaskId",
        "ui.timeLogCatalogue.input.cmdUpdateTimeLog.fieldWorkerId",
        "ui.timeLogCatalogue.input.cmdUpdateTimeLog.workDate",
        "ui.timeLogCatalogue.input.cmdUpdateTimeLog.hoursWorked",
        "ui.timeLogCatalogue.input.cmdUpdateTimeLog.hourlyLaborCost"
      ],
      "inputs": [
        {
          "name": "timeLogId",
          "stateKey": "ui.timeLogCatalogue.input.cmdUpdateTimeLog.timeLogId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "status",
          "stateKey": "ui.timeLogCatalogue.input.cmdUpdateTimeLog.status",
          "source": "systemDefault",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "workTaskId",
          "stateKey": "ui.timeLogCatalogue.input.cmdUpdateTimeLog.workTaskId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "fieldWorkerId",
          "stateKey": "ui.timeLogCatalogue.input.cmdUpdateTimeLog.fieldWorkerId",
          "source": "actorSession",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "workDate",
          "stateKey": "ui.timeLogCatalogue.input.cmdUpdateTimeLog.workDate",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "hoursWorked",
          "stateKey": "ui.timeLogCatalogue.input.cmdUpdateTimeLog.hoursWorked",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "hourlyLaborCost",
          "stateKey": "ui.timeLogCatalogue.input.cmdUpdateTimeLog.hourlyLaborCost",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.timeLogCatalogue.cmdDeleteTimeLog",
      "source": "bff.cmdDeleteTimeLog",
      "command": "cmdDeleteTimeLog",
      "description": "Excluir Registro de horas",
      "kind": "command",
      "stateKey": "ui.timeLogCatalogue.output.cmdDeleteTimeLog",
      "inputStateKeys": [
        "ui.timeLogCatalogue.input.cmdDeleteTimeLog.timeLogId"
      ],
      "inputs": [
        {
          "name": "timeLogId",
          "stateKey": "ui.timeLogCatalogue.input.cmdDeleteTimeLog.timeLogId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        }
      ]
    },
    {
      "id": "binding.timeLogCatalogue.qryWorkTaskPicker",
      "source": "bff.qryWorkTaskPicker",
      "command": "qryWorkTaskPicker",
      "description": "Listar Tarefa de trabalho",
      "kind": "query",
      "stateKey": "ui.timeLogCatalogue.data.qryWorkTaskPicker",
      "inputStateKeys": [],
      "inputs": []
    }
  ]
};

export const pipeline = [
  {
    "id": "timeLogCatalogue__page21__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page21/timeLogCatalogue.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page21/timeLogCatalogue.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/timeLogCatalogue.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "timeLogCatalogue__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/entityRecordManagement/page21.md"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
