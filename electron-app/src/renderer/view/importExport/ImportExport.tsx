import { IStorageService } from '../../service/storage/IStorageService';
import { AsyncStorageService } from '../../service/storage/AsyncStorageService';
import * as React from 'react';
import * as fs from 'fs-extra';
import MenuPage from '../menu/MenuPage';
import { RootState } from '../../reducers';
import { connect } from 'react-redux';
import { saveAs } from 'file-saver';
import Button from '@material-ui/core/Button';
import { Divider, TextField } from '@material-ui/core';
import { saveCv } from '../../actions/cvDataActions';
import { CheckCircle, Replay } from '@material-ui/icons';
import { green, yellow } from '@material-ui/core/colors';

interface ImportExportState {
    importPath: string;
    stateImport: "notStarted" | "loading" | "loaded";
}


class ImportExport extends React.Component<any, ImportExportState> {
    private storage: IStorageService;

    constructor(props: Readonly<any>) {
        super(props);
        this.storage = new AsyncStorageService();
        this.state = {
            importPath: '',
            stateImport: "notStarted",
        };
    }

    async componentDidMount(): Promise<void> {
        this.setState(
            {
                importPath: '',
                stateImport: "notStarted",
            }
        );
    }

    render(): React.ReactNode {
        const { importPath, stateImport } = this.state;
        const loadIcon = this.getLoadIconElement();
        return (
            <MenuPage>
                <div style={{ flex: 1 }}/>
                <div style={{ display: "flex", flex: 10, flexDirection: "column", alignContent: "space-around" }}>
                    <div style={{ flex: 1 }}/>
                    <div style={{ flex: 10, flexDirection: "column", display: "flex"}}>
                        <div style={{ flex: 4 }}/>
                        <div style={{flex: 2, display: "flex", flexDirection: "column", alignItems: "center"}}>
                            <Button
                                variant="contained"
                                color="primary"
                                size="small"
                                onClick={ this.exportFile }
                            >
                                Export
                            </Button>
                        </div>

                        <div style={{ flex: 1 }}>
                            <Divider />
                        </div>

                        <div style={{flex: 4, display: "flex", flexDirection: "column", alignItems: "center"}}>
                            <Button
                                variant="outlined"
                                color="primary"
                                size="small"
                                onClick={this.startImport}
                            >
                                Import
                            </Button>
                            <div style={{display: "flex", flexDirection: "row", alignItems: "center", alignSelf: "stretch"}}>
                                <input id="template" type="file" style={{ display: "none" }} onChange={() => this.importFile((document.getElementById("template") as any).files[0].path)} />
                                { stateImport !== "notStarted" ?
                                    <React.Fragment>
                                        <TextField
                                            required={true}
                                            id="template-file"
                                            label="Template"
                                            value={importPath}
                                            margin="normal"
                                            InputProps={{
                                                readOnly: true,
                                            }}
                                            style={{flex: 8}}
                                        />
                                        {loadIcon}
                                    </React.Fragment>
                                    : null
                                }
                            </div>
                        </div>
                        <div style={{ flex: 4 }}/>
                    </div>
                    <div style={{ flex: 1 }}/>
                </div>
                <div style={{ flex: 1 }}/>
            </MenuPage>
        );
    }

    private exportFile = async () => {
        const cvData = await this.storage.load();
        const blob = new Blob([JSON.stringify(cvData)], { type: "text/plain;charset=utf-8" });
        saveAs(blob, "cv.json");
    };

    private startImport = async () => {
        this.setState(
            {
                importPath: "",
                stateImport: "loading",
            }
        );

        (document.getElementById("template") as any).click();
    };

    private importFile =  async (filePath: string) => {
        this.setState(
            {
                importPath: filePath,
            },
            () => {
                const { dispatch } = this.props;
                const cvLoaded = fs.readFileSync(filePath, 'utf8');
                const cvData = JSON.parse(cvLoaded);
                this.storage.store(cvData);
                this.props.dispatch(saveCv(cvData));
                this.setState({
                    stateImport: "loaded",
                })
            }
        );
    }

    private getLoadIconElement(): JSX.Element | null {
        const { stateImport } = this.state;

        switch (stateImport) {
            case 'loading':
                return <Replay color="primary" style={{ marginTop: "20px", flex: 1 }} />;
            case 'loaded':
                return <CheckCircle style={{ color: green[500], marginTop: "20px", flex: 1 }} />;
            default:
                return null;

        }
    }
}

function mapStateToProps(state: RootState): any {
    return {};
}

export default connect(mapStateToProps)(ImportExport);
