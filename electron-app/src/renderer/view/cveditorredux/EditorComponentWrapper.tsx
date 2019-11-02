import * as React from "react";
import {ExpansionPanel, ExpansionPanelSummary} from "@material-ui/core";
import {EditorWrapperProps} from "./IEditorProps";

export abstract class EditorComponentWrapper extends React.Component<EditorWrapperProps, any> {

    constructor(props: Readonly<EditorWrapperProps>) {
        super(props);
    }

    render(): React.ReactNode {
        const {expanded, title, children} = this.props;
        return (
            <ExpansionPanel defaultExpanded={expanded} style={{background: "#FFFFFF"}}>
                <ExpansionPanelSummary>{title}</ExpansionPanelSummary>
                {children}
            </ExpansionPanel>
        );
    }
}