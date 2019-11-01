import * as React from 'react';
import { IEditorProps } from './IEditorProps';
import { ReactNode } from 'react';
import { Button, ExpansionPanel, ExpansionPanelActions, ExpansionPanelSummary } from '@material-ui/core';
import { Updatable } from '../../model/CvData';
import * as _ from 'lodash';

export abstract class AbstractEditorComponent<T extends Updatable> extends React.Component<IEditorProps<T>, T> {

    constructor(props: Readonly<IEditorProps<T>>) {
        super(props);
        this.state = props.data;
    }

    componentWillReceiveProps(nextProps: Readonly<IEditorProps<T>>, nextContext: any): void {
        if (!_.isEqual(nextProps, this.props)) {
            this.forceState(nextProps.data);
        }
    }

    render(): ReactNode {
        const {expanded, update} = this.props;
        const title = this.getTitle();
        const data = this.state;
        const content = this.renderContent(data);
        return (
            <ExpansionPanel defaultExpanded={expanded} style={{background: this.getColor()}}>
                <ExpansionPanelSummary>{title}</ExpansionPanelSummary>
                {content}
                <ExpansionPanelActions>
                    <Button size="small" color="primary" onClick={() => update(data)}>
                        Save
                    </Button>
                </ExpansionPanelActions>
            </ExpansionPanel>
        );
    }

    private getColor(): string {
        const {updated} = this.state;
        return updated ? "#FFB967" : "#C4FFAF";
    }

    protected abstract getTitle(): string;

    protected abstract renderContent(currentState: T): ReactNode;

    forceState(state:T): void {
        super.setState({...state});
    }

    setState(state: T, callback?: () => void): void {
        super.setState({...state, updated: true}, callback);
    }
}

