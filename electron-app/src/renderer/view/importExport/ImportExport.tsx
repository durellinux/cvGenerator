import { IStorageService } from '../../service/storage/IStorageService';
import { AsyncStorageService } from '../../service/storage/AsyncStorageService';
import * as React from 'react';
import * as fs from 'fs-extra';
import MenuPage from '../menu/MenuPage';
import { RootState } from '../../reducers';
import { connect } from 'react-redux';
import { saveAs } from 'file-saver';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import { saveCv } from '../../actions/cvDataActions';

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
        const { importPath } = this.state;
        const { stateImport } = this.state;
        return (
            <MenuPage>
                <div style={{ flex: 1 }}/>
                <div style={{ display: "flex", flex: 10, flexDirection: "column", alignContent: "space-around" }}>
                    <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            onClick={ this.exportFile }
                        >
                            Export
                        </Button>
                    </div>
                    <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Button
                            variant="outlined"
                            color="primary"
                            size="small"
                            onClick={() =>(document.getElementById("template") as any).click()}
                        >
                            Import
                        </Button>
                    </div>
                    <input id="template" type="file" style={{ display: "none" }} onChange={() => this.importFile((document.getElementById("template") as any).files[0].path)} />
                    <TextField
                        required={true}
                        id="template-file"
                        label="Template"
                        value={importPath}
                        margin="normal"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField
                        id="loadState"
                        label="State"
                        value={ stateImport }
                        margin="normal"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
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

    private importFile =  async (filePath: string) => {
        this.setState(
            {
                importPath: filePath,
                stateImport: "loading",
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
}

function mapStateToProps(state: RootState): any {
    return {};
}

export default connect(mapStateToProps)(ImportExport);
