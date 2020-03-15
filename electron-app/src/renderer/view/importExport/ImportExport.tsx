import { IStorageService } from '../../service/storage/IStorageService';
import { AsyncStorageService } from '../../service/storage/AsyncStorageService';
import * as React from 'react';
import MenuPage from '../menu/MenuPage';
import { RootState } from '../../reducers';
import { connect } from 'react-redux';
import { saveAs } from 'file-saver';
import Button from '@material-ui/core/Button';

class ImportExport extends React.Component<any, any> {
    private storage: IStorageService;

    constructor(props: Readonly<any>) {
        super(props);
        this.storage = new AsyncStorageService();
    }

    async componentDidMount(): Promise<void> {
        const { dispatch } = this.props;
    }

    render(): React.ReactNode {
        return (
            <MenuPage>
                <div style={{ flex: 1 }}></div>
                <div style={{ display: "flex", flex: 10, flexDirection: "column", alignContent: "space-around" }}>
                    <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            onClick={ this.exportFile }>
                            Export
                        </Button>
                    </div>
                    <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Button
                            variant="outlined"
                            color="primary"
                            size="small"
                            onClick={this.importFile}>
                            Import
                        </Button>
                        </div>
                    </div>
                <div style={{ flex: 1 }}></div>
            </MenuPage>
        );
    }

    private exportFile = async () => {
        const cvData = await this.storage.load();
        const blob = new Blob([JSON.stringify(cvData)], { type: "text/plain;charset=utf-8" });
        saveAs(blob, "cv.json");
    }

    private importFile = () => {

    }
}

function mapStateToProps(state: RootState): any {
    return {
        data: undefined,
    };
}

export default connect(mapStateToProps)(ImportExport);
