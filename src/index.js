import { StaticModuleRecord } from "@endo/static-module-record";

const mainSrc  = "console.log(\"hello\")";

const staticModuleRecordObj = new StaticModuleRecord(mainSrc, "main.js");
const serializedObj = JSON.stringify(staticModuleRecordObj, null, 4);
console.log("Object: ", serializedObj);
