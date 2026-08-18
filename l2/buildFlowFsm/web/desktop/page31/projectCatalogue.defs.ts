/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/projectCatalogue.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "projectCatalogue",
  "pageName": "Obra",
  "baseClassName": "BuildFlowFsmProjectCatalogueBase",
  "actor": "billingStaff",
  "purpose": "Cadastro de Obra.",
  "presentation": {
    "categoryRef": "entityRecordManagement"
  },
  "pageObjective": {
    "actor": "Pessoa responsável pelo cadastro e manutenção de obras, como uma equipe administrativa ou de operações.",
    "jobToBeDone": "Localizar uma obra e, sem perder o contexto da lista, criar uma nova obra ou corrigir/remover a obra selecionada.",
    "primaryDecision": "Qual obra deve ser selecionada para editar ou excluir, ou se os dados informados representam uma nova obra a criar.",
    "decisiveInfo": [
      "projectId",
      "name",
      "clientId",
      "clientName",
      "address",
      "status",
      "authorizedBudget",
      "plannedStartDate",
      "plannedEndDate"
    ],
    "usageFrequency": "Recorrente, em sessões administrativas de cadastro e manutenção; normalmente com consulta, seleção e ação pontual.",
    "informationHierarchy": [
      "Lista de obras e sua identidade principal",
      "Estado atual da obra e cliente associado",
      "Orçamento autorizado e janela planejada",
      "Endereço e demais dados editáveis",
      "Ações contextuais de corrigir, criar e excluir",
      "Feedback de sucesso ou erro"
    ],
    "successCriteria": "A pessoa encontra uma obra rapidamente, entende seu estado e dados principais, edita com o registro correto pré-selecionado, cria com o cliente escolhido e remove somente após confirmação, sem digitar identificadores técnicos.",
    "antiPatterns": [
      "Separar criação, edição e exclusão em formulários independentes e desconectados da lista",
      "Expor projectId ou clientId como campo de texto para digitação",
      "Permitir alteração livre do status por select com todos os estados",
      "Exigir que a pessoa memorize dados do cliente para criar uma obra",
      "Excluir sem confirmação explícita",
      "Esconder a obra selecionada enquanto seus dados são editados"
    ],
    "criticalActions": [
      {
        "action": "Selecionar uma obra para inspeção e manutenção",
        "presentation": "row-selection-in-master-detail"
      },
      {
        "action": "Atualizar a obra selecionada",
        "presentation": "contextual-detail-action"
      },
      {
        "action": "Criar uma nova obra",
        "presentation": "primary-button-opening-contextual-create"
      },
      {
        "action": "Excluir a obra selecionada",
        "presentation": "inline-row-command-with-confirmation"
      },
      {
        "action": "Escolher o cliente associado",
        "presentation": "lookup-picker-with-context"
      }
    ]
  },
  "dataBindings": [
    {
      "id": "binding.projectCatalogue.qryListProject",
      "source": "bff.qryListProject",
      "command": "qryListProject",
      "description": "Listar Obra",
      "kind": "query",
      "stateKey": "ui.projectCatalogue.data.qryListProject",
      "inputStateKeys": [],
      "inputs": []
    },
    {
      "id": "binding.projectCatalogue.cmdCreateProject",
      "source": "bff.cmdCreateProject",
      "command": "cmdCreateProject",
      "description": "Criar Obra",
      "kind": "command",
      "stateKey": "ui.projectCatalogue.output.cmdCreateProject",
      "inputStateKeys": [
        "ui.projectCatalogue.input.cmdCreateProject.clientId",
        "ui.projectCatalogue.input.cmdCreateProject.name",
        "ui.projectCatalogue.input.cmdCreateProject.address",
        "ui.projectCatalogue.input.cmdCreateProject.status",
        "ui.projectCatalogue.input.cmdCreateProject.authorizedBudget",
        "ui.projectCatalogue.input.cmdCreateProject.plannedStartDate",
        "ui.projectCatalogue.input.cmdCreateProject.plannedEndDate"
      ],
      "inputs": [
        {
          "name": "clientId",
          "stateKey": "ui.projectCatalogue.input.cmdCreateProject.clientId",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "name",
          "stateKey": "ui.projectCatalogue.input.cmdCreateProject.name",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "address",
          "stateKey": "ui.projectCatalogue.input.cmdCreateProject.address",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "status",
          "stateKey": "ui.projectCatalogue.input.cmdCreateProject.status",
          "source": "systemDefault",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "authorizedBudget",
          "stateKey": "ui.projectCatalogue.input.cmdCreateProject.authorizedBudget",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "plannedStartDate",
          "stateKey": "ui.projectCatalogue.input.cmdCreateProject.plannedStartDate",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "plannedEndDate",
          "stateKey": "ui.projectCatalogue.input.cmdCreateProject.plannedEndDate",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.projectCatalogue.cmdUpdateProject",
      "source": "bff.cmdUpdateProject",
      "command": "cmdUpdateProject",
      "description": "Atualizar Obra",
      "kind": "command",
      "stateKey": "ui.projectCatalogue.output.cmdUpdateProject",
      "inputStateKeys": [
        "ui.projectCatalogue.input.cmdUpdateProject.projectId",
        "ui.projectCatalogue.input.cmdUpdateProject.clientId",
        "ui.projectCatalogue.input.cmdUpdateProject.name",
        "ui.projectCatalogue.input.cmdUpdateProject.address",
        "ui.projectCatalogue.input.cmdUpdateProject.status",
        "ui.projectCatalogue.input.cmdUpdateProject.authorizedBudget",
        "ui.projectCatalogue.input.cmdUpdateProject.plannedStartDate",
        "ui.projectCatalogue.input.cmdUpdateProject.plannedEndDate"
      ],
      "inputs": [
        {
          "name": "projectId",
          "stateKey": "ui.projectCatalogue.input.cmdUpdateProject.projectId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "clientId",
          "stateKey": "ui.projectCatalogue.input.cmdUpdateProject.clientId",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "name",
          "stateKey": "ui.projectCatalogue.input.cmdUpdateProject.name",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "address",
          "stateKey": "ui.projectCatalogue.input.cmdUpdateProject.address",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "status",
          "stateKey": "ui.projectCatalogue.input.cmdUpdateProject.status",
          "source": "systemDefault",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "authorizedBudget",
          "stateKey": "ui.projectCatalogue.input.cmdUpdateProject.authorizedBudget",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "plannedStartDate",
          "stateKey": "ui.projectCatalogue.input.cmdUpdateProject.plannedStartDate",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "plannedEndDate",
          "stateKey": "ui.projectCatalogue.input.cmdUpdateProject.plannedEndDate",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.projectCatalogue.cmdDeleteProject",
      "source": "bff.cmdDeleteProject",
      "command": "cmdDeleteProject",
      "description": "Excluir Obra",
      "kind": "command",
      "stateKey": "ui.projectCatalogue.output.cmdDeleteProject",
      "inputStateKeys": [
        "ui.projectCatalogue.input.cmdDeleteProject.projectId"
      ],
      "inputs": [
        {
          "name": "projectId",
          "stateKey": "ui.projectCatalogue.input.cmdDeleteProject.projectId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        }
      ]
    },
    {
      "id": "binding.projectCatalogue.qryClientPicker",
      "source": "bff.qryClientPicker",
      "command": "qryClientPicker",
      "description": "Listar Cliente",
      "kind": "query",
      "stateKey": "ui.projectCatalogue.data.qryClientPicker",
      "inputStateKeys": [],
      "inputs": []
    }
  ]
};

export const pipeline = [
  {
    "id": "projectCatalogue__page31__l2_page",
    "type": "l2_page",
    "outputPath": "_102046_/l2/buildFlowFsm/web/desktop/page31/projectCatalogue.ts",
    "defPath": "_102046_/l2/buildFlowFsm/web/desktop/page31/projectCatalogue.defs.ts",
    "dependsFiles": [
      "_102046_/l2/buildFlowFsm/web/shared/projectCatalogue.ts",
      "_102046_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "projectCatalogue__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/entityRecordManagement/page31.md"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;
