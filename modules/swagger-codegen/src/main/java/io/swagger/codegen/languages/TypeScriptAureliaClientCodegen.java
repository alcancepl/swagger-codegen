package io.swagger.codegen.languages;

import io.swagger.codegen.SupportingFile;

public class TypeScriptAureliaClientCodegen extends AbstractTypeScriptClientCodegen {

    @Override
    public String getName() {
        return "typescript-aurelia";
    }

    @Override
    public String getHelp() {
        return "Generates a TypeScript aurelia client library.";
    }

	@Override
    public void processOpts() {
        super.processOpts();
        supportingFiles.add(new SupportingFile("api.mustache", null, "api.ts"));
        supportingFiles.add(new SupportingFile("model.mustache", null, "api-models.ts"));
    }
    
    public TypeScriptAureliaClientCodegen() {
        super();
        outputFolder = "generated-code/typescript-aurelia";
        embeddedTemplateDir = templateDir = "TypeScript-aurelia";
    }

}
