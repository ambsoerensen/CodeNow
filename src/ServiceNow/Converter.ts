import { ISysMetadata, ScriptInclude, ISysScriptInclude, Widget, ISpWidget, Theme, ISpTheme, StyleSheet, ISpCss, UiScript, ISysUiScript, SpHeaderFooter, ISpHeaderFooter, MailScript, ISysMailScript, ScriptedRestAPIResource, IScriptedRestAPIResource, ScriptAction, ISysEventScriptAction, Processor, ISysProcessor, UiAction, ISysUiAction } from "./all";
import { ISysMetadataIWorkspaceConvertable } from "../MixIns/all";
import { FileTypes } from "../Manager/all";
import { IAngularProvider } from "./IAngularProvider";
import { AngularProvider } from "./AngularProvider";
import { UiPage } from "./UiPage";
import { IUiPage } from "./IUiPage";
import { FixScript } from "./FixScript";
import { IFixScript } from "./IFixScript";
import { ValidationScript } from "./ValidationScript";
import { IValidationScript } from "./IValidationScript";


export class Converter
{
    /**
     * Converts a sysmetadata to the full class implementation.
     * @param record 
     */
    static CastSysMetaData<T extends ISysMetadata>(record: T): ISysMetadataIWorkspaceConvertable
    {
        let c = <unknown>record;
        //handle conversion
        switch (record.sys_class_name)
        {
            case "sys_script_include":
                return new ScriptInclude(<ISysScriptInclude>c);
            case "sp_widget":
                return new Widget(<ISpWidget>c);
            case "sp_theme":
                return new Theme(<ISpTheme>c);
            case "sp_css":
                return new StyleSheet(<ISpCss>c);
            case "sys_ui_script":
                return new UiScript(<ISysUiScript>c);
            case "sp_header_footer":
                return new SpHeaderFooter(<ISpHeaderFooter>c);
            case "sys_script_email":
                return new MailScript(<ISysMailScript>c);
            case "sys_ws_operation":
                return new ScriptedRestAPIResource(<IScriptedRestAPIResource>c);
            case "sysevent_script_action":
                return new ScriptAction(<ISysEventScriptAction>c);
            case "sys_processor":
                return new Processor(<ISysProcessor>c);
            case "sp_angular_provider":
                return new AngularProvider(<IAngularProvider>c);
            case "sys_ui_page":
                return new UiPage(<IUiPage>c);
            case "sys_ui_action":
                return new UiAction(<ISysUiAction>c);
            case "sys_script_fix":
                return new FixScript(<IFixScript>c);
            case "sys_script_validator":
                return new ValidationScript(<IValidationScript>c);
            default:
                let msg = `GetRecord: Record ${record.sys_class_name} not recognized`;
                console.warn(msg);
                throw new Error(msg);
        }
    }

    /**
     * Return the extension for the provided file type.
     * @param type FileTypes enum
     */
    public static getFileTypeExtension(type: FileTypes): string
    {
        switch (type)
        {
            case FileTypes.serverScript:
                return "server_script.js";
            case FileTypes.clientScript:
                return "client_script.js";
            case FileTypes.processingScript:
                return "processing_script.js";
            case FileTypes.styleSheet:
                return "scss";
            case FileTypes.html:
                return "html";
            default:
                throw new Error("FileType not recognized");
        }
    }

}