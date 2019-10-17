import * as monaco from 'monaco-editor';
import prettier from 'prettier/standalone';
import babylon from 'prettier/parser-babylon';

monaco.languages.registerDocumentFormattingEditProvider('javascript', {
  async provideDocumentFormattingEdits(model) {
    const text = prettier.format(model.getValue(), {
      parser: 'babylon',
      plugins: [babylon],
      printWidth: 80,
      tabWidth: 2,
      useTabs: false,
      semi: true,
      singleQuote: true,
      trailingComma: 'es5',
      bracketSpacing: false,
      arrowParens: 'avoid',
      proseWrap: 'always',
    });

    return [
      {
        range: model.getFullModelRange(),
        text,
      },
    ];
  },
});

monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
  noSemanticValidation: true,
  noSyntaxValidation: true,
});
