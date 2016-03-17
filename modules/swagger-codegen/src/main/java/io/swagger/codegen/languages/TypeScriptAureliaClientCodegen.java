package io.swagger.codegen.languages;

import io.swagger.codegen.SupportingFile;

import io.swagger.codegen.*;
import io.swagger.models.properties.*;
import io.swagger.models.Model;
import io.swagger.models.Operation;
import io.swagger.models.Swagger;

import java.util.*;
import org.apache.commons.lang.StringUtils;

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
		supportingFiles.add(new SupportingFile("api.mustache", null, "apis.ts"));
		supportingFiles.add(new SupportingFile("model.mustache", null, "api-models.ts"));
	}
	

	@Override
	public CodegenOperation fromOperation(String resourcePath, String httpMethod, Operation operation, Map<String, Model> definitions, Swagger swagger){
	  CodegenOperation op = super.fromOperation(resourcePath, httpMethod, operation, definitions, swagger);
	  String operationId = getOrGenerateOperationId(operation, resourcePath, httpMethod);
	  int ind = operationId.indexOf('_');
	  if (ind > -1) {
		op.nickname = camelize(operationId.substring(ind+1), true);
	}
	return op;
  }
	
	public TypeScriptAureliaClientCodegen() {
		super();
		outputFolder = "generated-code/typescript-aurelia";
		embeddedTemplateDir = templateDir = "TypeScript-aurelia";
		modelNamePrefix = "I";
	}

}
