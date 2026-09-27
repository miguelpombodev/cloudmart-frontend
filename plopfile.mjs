export default function (
  /** @type {import('plop').NodePlopAPI} */
  plop,
) {
  plop.setGenerator("featureComponent", {
    description: "Generates a new feature component folder with its files",
    prompts: [
      {
        type: "input",
        name: "featureName",
        message: "Type the name of the feature name:",
      },
      {
        type: "input",
        name: "name",
        message: "Type the name of the feature component to be added:",
      },
    ],
    actions: [
      {
        type: "addMany",
        destination:
          "src/features/{{dashCase featureName}}/components/{{dashCase name}}",
        templateFiles: "templates/new-component/**/*",
        base: "templates/new-component",
        globOptions: { dot: true },
      },
    ],
  });

  plop.setGenerator("sharedComponent", {
    description: "Generates a new shared component folder with its files",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Type the name of the component to be added:",
      },
    ],
    actions: [
      {
        type: "addMany",
        destination: "src/shared/components/{{dashCase name}}",
        templateFiles: "templates/new-component/**/*",
        base: "templates/new-component",
        globOptions: { dot: true },
      },
    ],
  });

  plop.setGenerator("feature", {
    description: "Generates a new feature folder with its inner folders",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Type the name of the feature to be added:",
      },
    ],
    actions: [
      {
        type: "addMany",
        destination: "src/features/{{dashCase name}}",
        templateFiles: "templates/new-feature/**/*",
        base: "templates/new-feature",
        globOptions: { dot: true },
      },
    ],
  });
}
