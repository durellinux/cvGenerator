import { IStorageService } from '../../service/storage/IStorageService';
import { AsyncStorageService } from '../../service/storage/AsyncStorageService';
import * as React from 'react';
import MenuPage from '../menu/MenuPage';
import { RootState } from '../../reducers';
import { connect } from 'react-redux';
import { saveAs } from 'file-saver';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';

interface ImportExportState {
    importPath: string;
}

class ImportExport extends React.Component<any, ImportExportState> {
    private storage: IStorageService;

    constructor(props: Readonly<any>) {
        super(props);
        this.storage = new AsyncStorageService();
        this.state = {
            importPath: '',
        };
    }

    async componentDidMount(): Promise<void> {
        const { dispatch } = this.props;
        this.setState(
            {
                importPath: '',
            }
        );
    }

    render(): React.ReactNode {
        const { importPath } = this.state;
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
                    <input id="template" type="file" style={{display: "none"}} onChange={() => this.importFile((document.getElementById("template") as any).files[0].path)} />
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

    private importFile = (filePath: string) => {

    }
}

function mapStateToProps(state: RootState): any {
    return {};
}

export default connect(mapStateToProps)(ImportExport);
